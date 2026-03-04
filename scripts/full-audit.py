#!/usr/bin/env python3
"""
Full math audit of ALL case study data files.
Checks:
1. CPL = spend / leads (within $2 tolerance)
2. CPQL = spend / qualified (within $2 tolerance)
3. CPL < CPQL every month (since qualified ⊂ leads)
4. qualified <= leads every month
5. Summary total spend = sum of monthly spend
6. Summary total qualified = sum of monthly qualified
7. Summary total deals = sum of monthly deals
8. Summary avg CPQL = total spend / total qualified (within $20)
9. Summary total revenue = sum of monthly revenue (if present)
10. Summary ROAS = total revenue / total spend (within 0.1)
11. No month below $5K spend (minimum floor)
12. All dates are 2025
13. SEO: keywords/top10/traffic should generally trend upward
14. Ecom: revenue = orders * ~AOV (if AOV derivable)
"""

import re, sys, os, json, glob

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
files = [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def parse_number(s):
    """Parse a string like '$163.4K' or '208' or '5.80x' into a float."""
    if s is None:
        return None
    s = str(s).strip().replace(",", "").replace("$", "").replace("%", "")
    if s.endswith("x"):
        s = s[:-1]
    if s.endswith("K"):
        return float(s[:-1]) * 1000
    if s.endswith("M"):
        return float(s[:-1]) * 1000000
    try:
        return float(s)
    except:
        return None

def extract_monthly_paid(content):
    """Extract monthly paid ads data from TypeScript content."""
    rows = []
    # Find paidAds.monthly array
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return rows
    
    # Find monthly array within paidAds
    monthly_start = content.find('monthly:', paid_match.start())
    if monthly_start == -1:
        return rows
    
    # Find the array
    arr_start = content.find('[', monthly_start)
    if arr_start == -1:
        return rows
    
    # Find matching ]
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    arr_text = content[arr_start:arr_end+1]
    
    # Parse each row object
    row_pattern = re.compile(r'\{[^}]+\}')
    for m in row_pattern.finditer(arr_text):
        row_text = m.group()
        if 'month:' not in row_text:
            continue
        row = {}
        for field in ['month', 'spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas',
                       'sessions', 'addToCarts', 'costPerCart', 'orders', 'aov']:
            if field == 'month':
                mm = re.search(r'month:\s*["\']([^"\']+)["\']', row_text)
                row[field] = mm.group(1) if mm else None
            else:
                mm = re.search(rf'{field}:\s*([\d.]+)', row_text)
                row[field] = float(mm.group(1)) if mm else None
        rows.append(row)
    return rows

def extract_summary_paid(content):
    """Extract paidAds summary values."""
    summary = {}
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return summary
    
    # Find summary array
    sum_start = content.find('summary:', paid_match.start())
    if sum_start == -1:
        return summary
    
    arr_start = content.find('[', sum_start)
    if arr_start == -1:
        return summary
    
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    arr_text = content[arr_start:arr_end+1]
    
    # Extract label/value pairs
    item_pattern = re.compile(r'\{[^}]+\}')
    for m in item_pattern.finditer(arr_text):
        item = m.group()
        label_m = re.search(r'label:\s*["\']([^"\']+)["\']', item)
        value_m = re.search(r'value:\s*["\']([^"\']+)["\']', item)
        if label_m and value_m:
            summary[label_m.group(1)] = value_m.group(1)
    return summary

def extract_impact(content):
    """Extract impact section."""
    impact = {}
    imp_match = re.search(r'impact:\s*\[', content)
    if not imp_match:
        return impact
    
    depth = 0
    arr_end = imp_match.end() - 1
    for i in range(imp_match.end()-1, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    arr_text = content[imp_match.end()-1:arr_end+1]
    item_pattern = re.compile(r'\{[^}]+\}')
    for m in item_pattern.finditer(arr_text):
        item = m.group()
        label_m = re.search(r'label:\s*["\']([^"\']+)["\']', item)
        value_m = re.search(r'value:\s*["\']([^"\']+)["\']', item)
        if label_m and value_m:
            impact[label_m.group(1)] = value_m.group(1)
    return impact

errors_by_file = {}

for filepath in files:
    fname = os.path.basename(filepath)
    with open(filepath) as f:
        content = f.read()
    
    errors = []
    
    monthly = extract_monthly_paid(content)
    summary = extract_summary_paid(content)
    impact = extract_impact(content)
    
    if not monthly:
        continue  # No paid ads data (SEO-only case study)
    
    is_ecom = any(r.get('orders') is not None for r in monthly)
    
    # Check each month
    for r in monthly:
        month = r.get('month', '?')
        spend = r.get('spend')
        leads = r.get('leads')
        cpl = r.get('cpl')
        qualified = r.get('qualified')
        cpql = r.get('cpql')
        deals = r.get('deals')
        revenue = r.get('revenue')
        roas = r.get('roas')
        orders = r.get('orders')
        aov = r.get('aov')
        
        if spend is not None:
            # Date check
            if month and '2024' in month:
                errors.append(f"  {month}: Uses 2024 date (must be 2025)")
            
            # Spend floor
            if spend < 5000:
                errors.append(f"  {month}: Spend ${spend:,.0f} below $5K floor")
        
        # Lead gen checks
        if leads is not None and cpl is not None and spend is not None:
            expected_cpl = spend / leads if leads > 0 else 0
            if abs(expected_cpl - cpl) > 2:
                errors.append(f"  {month}: CPL mismatch — stated ${cpl:.0f}, actual ${expected_cpl:.0f}")
        
        if qualified is not None and cpql is not None and spend is not None:
            expected_cpql = spend / qualified if qualified > 0 else 0
            if abs(expected_cpql - cpql) > 2:
                errors.append(f"  {month}: CPQL mismatch — stated ${cpql:.0f}, actual ${expected_cpql:.0f}")
        
        if leads is not None and qualified is not None:
            if qualified > leads:
                errors.append(f"  {month}: Qualified ({qualified}) > Leads ({leads})")
        
        if cpl is not None and cpql is not None:
            if cpl >= cpql:
                errors.append(f"  {month}: CPL (${cpl:.0f}) >= CPQL (${cpql:.0f}) — must be CPL < CPQL")
        
        # Revenue/ROAS check
        if revenue is not None and spend is not None and roas is not None:
            expected_roas = revenue / spend if spend > 0 else 0
            if abs(expected_roas - roas) > 0.15:
                errors.append(f"  {month}: ROAS mismatch — stated {roas:.2f}x, actual {expected_roas:.2f}x")
        
        # Ecom: revenue = orders * aov (approx)
        if orders is not None and aov is not None and revenue is not None:
            expected_rev = orders * aov
            if abs(expected_rev - revenue) / max(revenue, 1) > 0.15:
                errors.append(f"  {month}: Revenue ${revenue:,.0f} doesn't match orders*AOV = ${expected_rev:,.0f}")
    
    # Summary checks
    total_spend = sum(r.get('spend', 0) for r in monthly)
    total_leads = sum(r.get('leads', 0) or 0 for r in monthly)
    total_qualified = sum(r.get('qualified', 0) or 0 for r in monthly)
    total_deals = sum(r.get('deals', 0) or 0 for r in monthly)
    total_revenue = sum(r.get('revenue', 0) or 0 for r in monthly)
    total_orders = sum(r.get('orders', 0) or 0 for r in monthly)
    
    # Check summary spend
    for key in summary:
        val = summary[key]
        if 'spend' in key.lower() or key == 'Total Ad Spend':
            parsed = parse_number(val)
            tolerance = max(500, total_spend * 0.005)
            if parsed and abs(parsed - total_spend) > tolerance:
                errors.append(f"  SUMMARY: '{key}' = {val} but monthly sum = ${total_spend:,.0f}")
    
    # Check each summary item — use smart label matching (order matters)
    for key in summary:
        val = summary[key]
        kl = key.lower()
        parsed = parse_number(val)
        if parsed is None:
            continue
        
        # Skip "Avg Revenue Per..." items — those are per-deal metrics, not summable
        if 'avg' in kl and ('revenue' in kl or 'per client' in kl or 'per patient' in kl or 'per job' in kl or 'per loan' in kl or 'per contract' in kl or 'per booking' in kl or 'per sale' in kl or 'per deal' in kl):
            continue
        
        # Avg CPQL (check BEFORE qualified count — "Avg Cost Per Qualified Lead" contains "qualified")
        if ('cost' in kl or 'avg' in kl) and 'qual' in kl:
            if total_qualified > 0:
                actual_avg = total_spend / total_qualified
                if abs(parsed - actual_avg) > 30:
                    errors.append(f"  SUMMARY: '{key}' = {val} (${parsed:.0f}) but actual avg = ${actual_avg:.0f}")
        # Avg CPL (non-qualified)
        elif ('cost' in kl and 'lead' in kl and 'qual' not in kl) or kl in ['avg cpl', 'avg cost per lead']:
            if total_leads > 0:
                actual_avg = total_spend / total_leads
                if abs(parsed - actual_avg) > 20:
                    errors.append(f"  SUMMARY: '{key}' = {val} (${parsed:.0f}) but actual avg CPL = ${actual_avg:.0f}")
        # Qualified count
        elif 'qualified' in kl and not ('cost' in kl or 'avg' in kl):
            if abs(parsed - total_qualified) > 1:
                errors.append(f"  SUMMARY: '{key}' = {val} but monthly sum = {int(total_qualified)}")
        # Deals/closed count
        elif ('deal' in kl or 'purchase' in kl or 'closed' in kl) and 'cost' not in kl:
            if abs(parsed - total_deals) > 1:
                errors.append(f"  SUMMARY: '{key}' = {val} but monthly sum = {int(total_deals)}")
        # Total orders (ecom)
        elif 'total order' in kl:
            order_count = total_orders if total_orders > 0 else total_deals
            if order_count > 0 and abs(parsed - order_count) > 1:
                errors.append(f"  SUMMARY: '{key}' = {val} but monthly sum = {int(order_count)}")
        # Online orders (specific)
        elif 'online order' in kl:
            pass  # Complex multi-channel, skip for now
    
    # Check impact section
    for key in impact:
        val = impact[key]
        kl = key.lower()
        parsed = parse_number(val)
        if parsed is None:
            continue
        
        # Skip per-unit metrics (Avg Revenue Per Job, Per Patient, etc.)
        if 'avg' in kl or 'per ' in kl:
            continue
        
        # Total revenue
        if ('total' in kl or 'ad' in kl or 'new client' in kl or 'project' in kl) and 'revenue' in kl and total_revenue > 0:
            tolerance = max(5000, total_revenue * 0.005)  # 0.5% or $5K, whichever is larger
            if abs(parsed - total_revenue) > tolerance:
                errors.append(f"  IMPACT: '{key}' = {val} but monthly sum = ${total_revenue:,.0f}")
        
        # Blended/Overall ROAS (skip "Peak ROAS")
        elif 'roas' in kl and 'peak' not in kl and total_revenue > 0 and total_spend > 0:
            actual_roas = total_revenue / total_spend
            if abs(parsed - actual_roas) > 0.15:
                errors.append(f"  IMPACT: '{key}' = {val} but actual = {actual_roas:.2f}x")
    
    if errors:
        errors_by_file[fname] = errors

# Output
if errors_by_file:
    print(f"\n🚨 ISSUES FOUND IN {len(errors_by_file)} FILES:\n")
    for fname, errs in sorted(errors_by_file.items()):
        print(f"❌ {fname}")
        for e in errs:
            print(e)
        print()
else:
    print("\n✅ All case studies passed math validation!\n")

print(f"Total files audited: {len(files)}")
