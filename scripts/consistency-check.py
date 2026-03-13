#!/usr/bin/env python3
"""
Consistency & Realism Check for Case Study Data Files.

Catches issues that pure math validation misses:
1. Summary/impact/heroStats totals must match monthly data sums
2. Headline numbers must match data
3. Uniformity detection — flags unrealistic repetition in monthly metrics
4. ROAS computed from monthly data must match claimed ROAS

This script BLOCKS deployment if any check fails.
"""

import re, sys, os, glob, json
from collections import Counter

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")

def get_files(slug=None):
    if slug:
        path = os.path.join(data_dir, f"{slug}.ts")
        return [path] if os.path.exists(path) else []
    files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
    return [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def parse_number(s):
    if s is None:
        return None
    s = str(s).strip().replace(",", "").replace("$", "").replace("%", "").replace("+", "")
    if s.endswith("x"):
        s = s[:-1]
    if s.endswith("K"):
        try:
            return float(s[:-1]) * 1000
        except:
            return None
    if s.endswith("M"):
        try:
            return float(s[:-1]) * 1000000
        except:
            return None
    try:
        return float(s)
    except:
        return None

def extract_monthly_numbers(content, section_start):
    """Extract all monthly row data from a paidAds.monthly section."""
    rows = []
    monthly_pos = content.find('monthly:', section_start)
    if monthly_pos == -1:
        return rows
    
    arr_start = content.find('[', monthly_pos)
    if arr_start == -1:
        return rows
    
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[': depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    arr_text = content[arr_start:arr_end+1]
    
    for m in re.finditer(r'\{([^}]+)\}', arr_text):
        row_text = m.group(1)
        if 'month' not in row_text:
            continue
        row = {}
        for field in ['spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas']:
            mm = re.search(rf'{field}:\s*([\d.]+)', row_text)
            row[field] = float(mm.group(1)) if mm else None
        month_m = re.search(r'month:\s*["\']([^"\']+)["\']', row_text)
        row['month'] = month_m.group(1) if month_m else '?'
        rows.append(row)
    return rows

def extract_claimed_values(content):
    """Extract all claimed summary/impact/heroStats values."""
    claimed = {}
    
    # heroStats — combine value + unit (e.g. value:"182" unit:"K" → "182K")
    hero_match = re.search(r'heroStats:\s*\[', content)
    if hero_match:
        hero_end = content.find(']', hero_match.end())
        hero_text = content[hero_match.start():hero_end+1]
        for item_m in re.finditer(r'\{([^}]+)\}', hero_text):
            item = item_m.group(1)
            val_m = re.search(r'value:\s*"([^"]+)"', item)
            unit_m = re.search(r'unit:\s*"([^"]*)"', item)
            label_m = re.search(r'label:\s*"([^"]+)"', item)
            if val_m and label_m:
                val = val_m.group(1)
                unit = unit_m.group(1) if unit_m else ""
                # Combine: "182" + "K" → "182K", "$286" + "" → "$286"
                combined = val + unit
                claimed[f'hero:{label_m.group(1)}'] = combined
    
    # headline
    headline_m = re.search(r'headline:\s*"([^"]+)"', content)
    if headline_m:
        headline = headline_m.group(1)
        # Extract numbers from headline
        for nm in re.finditer(r'\$([\d,.]+[KM]?)', headline):
            claimed['headline:revenue'] = nm.group(0)
        for nm in re.finditer(r'([\d.]+)x\s*ROAS', headline):
            claimed['headline:roas'] = nm.group(1)
        for nm in re.finditer(r'([\d,]+)\s*(?:Orders|Leads|Deals|Clients|Patients)', headline):
            claimed['headline:count'] = nm.group(1)
    
    # impact section
    impact_match = re.search(r'impact:\s*\[', content)
    if impact_match:
        depth = 0
        end = impact_match.end()-1
        for i in range(impact_match.end()-1, len(content)):
            if content[i] == '[': depth += 1
            elif content[i] == ']':
                depth -= 1
                if depth == 0:
                    end = i; break
        impact_text = content[impact_match.start():end+1]
        for m in re.finditer(r'label:\s*"([^"]+)"[^}]*value:\s*"([^"]+)"', impact_text):
            claimed[f'impact:{m.group(1)}'] = m.group(2)
    
    # paidAds summary
    paid_match = re.search(r'paidAds:\s*\{', content)
    if paid_match:
        sum_start = content.find('summary:', paid_match.start())
        if sum_start != -1:
            arr_start = content.find('[', sum_start)
            monthly_start = content.find('monthly:', sum_start)
            if arr_start != -1 and (monthly_start == -1 or arr_start < monthly_start):
                depth = 0
                end = arr_start
                for i in range(arr_start, len(content)):
                    if content[i] == '[': depth += 1
                    elif content[i] == ']':
                        depth -= 1
                        if depth == 0:
                            end = i; break
                sum_text = content[arr_start:end+1]
                for m in re.finditer(r'label:\s*"([^"]+)"[^}]*value:\s*"([^"]+)"', sum_text):
                    claimed[f'summary:{m.group(1)}'] = m.group(2)
    
    return claimed

def check_uniformity(monthly, field_name):
    """Check if a field has too many identical values. Returns error message or None."""
    vals = [r.get(field_name) for r in monthly if r.get(field_name) is not None]
    if len(vals) < 4:
        return None
    
    counter = Counter(vals)
    most_common_val, most_common_count = counter.most_common(1)[0]
    
    # If >50% of months have the exact same value, it's suspicious
    threshold = max(3, len(vals) * 0.5)
    if most_common_count > threshold:
        return f"  UNIFORMITY: {field_name} = {most_common_val} for {most_common_count}/{len(vals)} months — unrealistically uniform"
    return None

def check_file(filepath):
    """Run all consistency checks on a single file. Returns list of errors."""
    with open(filepath) as f:
        content = f.read()
    
    errors = []
    
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return errors  # SEO-only, skip
    
    monthly = extract_monthly_numbers(content, paid_match.start())
    if not monthly:
        return errors
    
    claimed = extract_claimed_values(content)
    
    # Compute actuals from monthly data
    total_spend = sum(r.get('spend', 0) or 0 for r in monthly)
    total_revenue = sum(r.get('revenue', 0) or 0 for r in monthly)
    total_deals = sum(r.get('deals', 0) or 0 for r in monthly)
    total_leads = sum(r.get('leads', 0) or 0 for r in monthly)
    total_qualified = sum(r.get('qualified', 0) or 0 for r in monthly)
    actual_roas = total_revenue / total_spend if total_spend > 0 else 0
    
    # --- CHECK 1: Claimed totals vs monthly sums ---
    
    # Revenue checks (across all sections)
    for key, val in claimed.items():
        kl = key.lower()
        parsed = parse_number(val)
        if parsed is None:
            continue
        
        # Skip non-summable metrics
        if any(skip in kl for skip in ['average order value', 'aov', 'avg ', 'per ', 'rate', 'organic session', 'email subscriber']):
            continue
        
        # Revenue
        if 'revenue' in kl and 'avg' not in kl and 'per' not in kl and 'organic' not in kl and total_revenue > 0:
            tol = max(5000, total_revenue * 0.02)  # 2% or $5K
            if abs(parsed - total_revenue) > tol:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = ${total_revenue:,.0f}")
        
        # Ad spend
        elif ('spend' in kl or ('ad' in kl and 'spend' in kl)) and 'cost' not in kl and total_spend > 0:
            tol = max(500, total_spend * 0.02)
            if abs(parsed - total_spend) > tol:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = ${total_spend:,.0f}")
        
        # ROAS (not "Peak ROAS")
        elif 'roas' in kl and 'peak' not in kl and actual_roas > 0:
            if abs(parsed - actual_roas) > 0.2:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but actual = {actual_roas:.1f}x")
        
        # Orders/Deals
        elif ('order' in kl or 'deal' in kl or 'closed' in kl) and 'cost' not in kl and 'avg' not in kl and 'rate' not in kl:
            actual_count = total_deals
            if actual_count > 0 and abs(parsed - actual_count) > 1:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = {int(actual_count)}")
        
        # Qualified leads (check BEFORE general leads to catch "Total Qualified Leads")
        elif ('qualified' in kl and 'lead' in kl) and 'cost' not in kl and 'avg' not in kl:
            actual_count = total_qualified
            if actual_count > 0 and abs(parsed - actual_count) > 1:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = {int(actual_count)}")
        # Trial session bookings / appointments (these should map to deals)
        elif ('trial session' in kl or 'session booking' in kl or 'appointment' in kl) and 'cost' not in kl and 'avg' not in kl:
            actual_count = total_deals
            if actual_count > 0 and abs(parsed - actual_count) > 1:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = {int(actual_count)}")
        # Sessions/Leads (general)
        elif ('session' in kl or ('total' in kl and 'lead' in kl)) and 'cost' not in kl and 'avg' not in kl and 'qualified' not in kl:
            actual_count = total_leads
            if actual_count > 0 and abs(parsed - actual_count) > 1:
                errors.append(f"  MISMATCH [{key}]: Claimed {val} but monthly sum = {int(actual_count)}")
    
    # --- CHECK 2: Uniformity ---
    for field in ['cpl', 'cpql', 'roas']:
        err = check_uniformity(monthly, field)
        if err:
            errors.append(err)
    
    # Also check derived ratios for uniformity
    # Conversion rate: qualified/leads
    if all(r.get('leads') and r.get('qualified') for r in monthly):
        conv_rates = [round(r['qualified'] / r['leads'], 3) for r in monthly if r['leads'] > 0]
        counter = Counter(conv_rates)
        if counter and counter.most_common(1)[0][1] > max(3, len(conv_rates) * 0.5):
            most_val, most_count = counter.most_common(1)[0]
            errors.append(f"  UNIFORMITY: qualified/leads ratio = {most_val:.1%} for {most_count}/{len(conv_rates)} months — unrealistically uniform")
    
    # Deal rate: deals/qualified
    if all(r.get('qualified') and r.get('deals') for r in monthly):
        deal_rates = [round(r['deals'] / r['qualified'], 3) for r in monthly if r['qualified'] > 0]
        counter = Counter(deal_rates)
        if counter and counter.most_common(1)[0][1] > max(3, len(deal_rates) * 0.5):
            most_val, most_count = counter.most_common(1)[0]
            errors.append(f"  UNIFORMITY: deals/qualified ratio = {most_val:.1%} for {most_count}/{len(deal_rates)} months — unrealistically uniform")
    
    return errors


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--slug', help='Check a single slug')
    args = parser.parse_args()
    
    files = get_files(args.slug)
    if not files:
        print(f"❌ No files found" + (f" for slug '{args.slug}'" if args.slug else ""))
        sys.exit(1)
    
    errors_by_file = {}
    for filepath in files:
        fname = os.path.basename(filepath)
        errs = check_file(filepath)
        if errs:
            errors_by_file[fname] = errs
    
    if errors_by_file:
        print(f"\n🚨 CONSISTENCY ISSUES IN {len(errors_by_file)} FILES:\n")
        for fname, errs in sorted(errors_by_file.items()):
            print(f"❌ {fname}")
            for e in errs:
                print(e)
            print()
        print(f"Total files checked: {len(files)}")
        sys.exit(1)
    else:
        print(f"\n✅ All {len(files)} case studies passed consistency check!\n")
        sys.exit(0)

if __name__ == '__main__':
    main()
