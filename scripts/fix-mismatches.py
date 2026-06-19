#!/usr/bin/env python3
"""Fix revenue/ROAS mismatches in case study files."""
import re, os, glob, math

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
files = [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def fmt_currency(val):
    """Format like $229.8K or $1.80M or $2.66M"""
    if val >= 1_000_000:
        m = val / 1_000_000
        if m == int(m):
            return f"${int(m):.1f}M" if m < 10 else f"${int(m)}M"
        return f"${m:.2f}M"
    elif val >= 1000:
        k = val / 1000
        if k >= 100:
            if k == int(k):
                return f"${int(k)}K"
            return f"${k:.1f}K"
        elif k >= 10:
            if k == int(k):
                return f"${int(k)}K"
            return f"${k:.1f}K"
        else:
            if k == int(k):
                return f"${int(k)}K"
            return f"${k:.1f}K"
    else:
        return f"${val:,.0f}"

def fmt_currency_comma(val):
    """Format like $229,767 (full number with commas)"""
    return f"${val:,.0f}"

def fmt_roas(val):
    """Format ROAS like 3.2x or 4.3x"""
    if val == int(val):
        return f"{int(val)}.0x"
    return f"{val:.1f}x"

def extract_monthly_revenue_and_spend(content):
    """Extract all monthly revenue and spend values from paidAds.monthly."""
    revenues = []
    spends = []
    
    # Find paidAds section
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return revenues, spends
    
    monthly_start = content.find('monthly:', paid_match.start())
    if monthly_start == -1:
        return revenues, spends
    
    arr_start = content.find('[', monthly_start)
    if arr_start == -1:
        return revenues, spends
    
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
    
    for m in re.finditer(r'\{[^}]+\}', arr_text):
        row = m.group()
        rev_m = re.search(r'revenue:\s*([\d.]+)', row)
        spend_m = re.search(r'spend:\s*([\d.]+)', row)
        if rev_m:
            revenues.append(float(rev_m.group(1)))
        if spend_m:
            spends.append(float(spend_m.group(1)))
    
    return revenues, spends

def parse_num(s):
    s = str(s).strip().replace(",", "").replace("$", "").replace("%", "")
    if s.endswith("x"): s = s[:-1]
    if s.endswith("K"): return float(s[:-1]) * 1000
    if s.endswith("M"): return float(s[:-1]) * 1000000
    try: return float(s)
    except: return None

total_fixed = 0

for fpath in files:
    with open(fpath) as f:
        content = original = f.read()
    
    revenues, spends = extract_monthly_revenue_and_spend(content)
    if not revenues:
        continue
    
    total_rev = sum(revenues)
    total_spend = sum(spends) if spends else 0
    actual_roas = total_rev / total_spend if total_spend > 0 else 0
    
    rev_short = fmt_currency(total_rev)  # e.g. $229.8K
    rev_comma = fmt_currency_comma(total_rev)  # e.g. $229,767
    roas_str = fmt_roas(actual_roas)  # e.g. 3.2x
    roas_val = round(actual_roas, 1)
    
    fname = os.path.basename(fpath)
    changes = []
    
    # Fix headline - replace revenue amounts
    headline_m = re.search(r'headline:\s*"([^"]*)"', content)
    if headline_m:
        old_headline = headline_m.group(1)
        new_headline = old_headline
        
        # Find revenue patterns like $215.5K, $1.64M, $4,872,350 etc
        for rev_pat in re.finditer(r'\$[\d,.]+[KM]?\b', old_headline):
            old_val_str = rev_pat.group()
            old_val = parse_num(old_val_str)
            if old_val and old_val > 1000 and abs(old_val - total_rev) / max(total_rev, old_val) < 0.95:
                # This looks like the revenue figure - replace it
                new_headline = new_headline.replace(old_val_str, rev_short, 1)
        
        # Fix ROAS in headline like "3.03x" or "0.8x"
        for roas_pat in re.finditer(r'(\d+\.?\d*)x\s+(?:Blended\s+)?ROAS', old_headline):
            old_roas_str = roas_pat.group(1)
            old_roas = float(old_roas_str)
            if abs(old_roas - actual_roas) > 0.15:
                new_headline = new_headline.replace(f"{old_roas_str}x", f"{roas_val}x")
        
        # Also check for ROAS pattern like "Achieved X.Xx"
        for roas_pat in re.finditer(r'Achieved\s+(\d+\.?\d*)x', old_headline):
            old_roas_str = roas_pat.group(1)
            old_roas = float(old_roas_str)
            if abs(old_roas - actual_roas) > 0.15:
                new_headline = new_headline.replace(f"{old_roas_str}x", f"{roas_val}x")
        
        if new_headline != old_headline:
            content = content.replace(f'headline: "{old_headline}"', f'headline: "{new_headline}"')
            changes.append(f"headline: {old_val_str if 'old_val_str' in dir() else ''} → {rev_short}")
    
    # Fix subheadline
    sub_m = re.search(r'subheadline:\s*"([^"]*)"', content)
    if sub_m:
        old_sub = sub_m.group(1)
        new_sub = old_sub
        for rev_pat in re.finditer(r'\$[\d,.]+[KM]?\b', old_sub):
            old_val_str = rev_pat.group()
            old_val = parse_num(old_val_str)
            if old_val and old_val > 1000 and total_rev > 0 and abs(old_val - total_rev) / max(total_rev, old_val) < 0.95:
                new_sub = new_sub.replace(old_val_str, rev_short, 1)
        # Fix ROAS in subheadline
        for roas_pat in re.finditer(r'(\d+\.?\d*)x\s+(?:blended\s+|Blended\s+)?(?:ROAS|roas)', new_sub, re.IGNORECASE):
            old_roas_str = roas_pat.group(1)
            old_roas = float(old_roas_str)
            if abs(old_roas - actual_roas) > 0.15:
                new_sub = new_sub.replace(f"{old_roas_str}x", f"{roas_val}x")
        if new_sub != old_sub:
            content = content.replace(old_sub, new_sub)
            changes.append("subheadline updated")
    
    # Fix heroStats - look for revenue/ROAS values
    hero_section = re.search(r'heroStats:\s*\[(.*?)\]', content, re.DOTALL)
    if hero_section:
        old_hero = hero_section.group(0)
        new_hero = old_hero
        # Fix revenue in heroStats
        for hero_item in re.finditer(r'\{\s*value:\s*"([^"]*)"[^}]*label:\s*"([^"]*)"[^}]*\}', old_hero):
            val_str = hero_item.group(1)
            label = hero_item.group(2)
            if any(kw in label.lower() for kw in ['revenue', 'total rev']):
                parsed = parse_num(val_str)
                if parsed and abs(parsed - total_rev) / total_rev > 0.02:
                    new_hero = new_hero.replace(f'value: "{val_str}"', f'value: "{rev_short}"', 1)
                    changes.append(f"heroStats revenue: {val_str} → {rev_short}")
            elif 'roas' in label.lower() and 'blended' in label.lower():
                parsed = parse_num(val_str)
                if parsed and abs(parsed - actual_roas) > 0.15:
                    new_hero = new_hero.replace(f'value: "{val_str}"', f'value: "{roas_str}"', 1)
                    changes.append(f"heroStats ROAS: {val_str} → {roas_str}")
        if new_hero != old_hero:
            content = content.replace(old_hero, new_hero)
    
    # Fix summary values
    summary_section = re.search(r'summary:\s*\[(.*?)\]', content, re.DOTALL)
    if summary_section:
        old_summary = summary_section.group(0)
        new_summary = old_summary
        for item in re.finditer(r'\{\s*label:\s*"([^"]*)"[^}]*value:\s*"([^"]*)"[^}]*\}', old_summary):
            label = item.group(1)
            val_str = item.group(2)
            if any(kw in label.lower() for kw in ['total revenue', 'revenue attributed', 'total commission', 'total subscription', 'combined revenue', 'projected annual', 'annual recurring', 'first-year contract', 'first-year revenue', 'newsletter revenue', 'monthly newsletter']):
                parsed = parse_num(val_str)
                if parsed and abs(parsed - total_rev) / total_rev > 0.02:
                    new_summary = new_summary.replace(f'value: "{val_str}"', f'value: "{rev_short}"', 1)
                    changes.append(f"summary revenue: {val_str} → {rev_short}")
            elif any(kw in label.lower() for kw in ['blended roas', 'overall roas', 'roas']):
                parsed = parse_num(val_str)
                if parsed and abs(parsed - actual_roas) > 0.15:
                    new_summary = new_summary.replace(f'value: "{val_str}"', f'value: "{roas_str}"', 1)
                    changes.append(f"summary ROAS: {val_str} → {roas_str}")
        if new_summary != old_summary:
            content = content.replace(old_summary, new_summary)
    
    # Fix impact values
    impact_section = re.search(r'impact:\s*\[(.*?)\]', content, re.DOTALL)
    if impact_section:
        old_impact = impact_section.group(0)
        new_impact = old_impact
        for item in re.finditer(r'\{\s*label:\s*"([^"]*)"[^}]*value:\s*"([^"]*)"[^}]*\}', old_impact):
            label = item.group(1)
            val_str = item.group(2)
            if any(kw in label.lower() for kw in ['total revenue', 'revenue', 'commission revenue', 'subscription revenue', 'combined revenue', 'projected annual', 'annual recurring', 'first-year contract', 'first-year revenue', 'newsletter revenue', 'monthly newsletter']):
                parsed = parse_num(val_str)
                if parsed and abs(parsed - total_rev) / total_rev > 0.02:
                    new_impact = new_impact.replace(f'value: "{val_str}"', f'value: "{rev_short}"', 1)
                    changes.append(f"impact revenue: {val_str} → {rev_short}")
            elif any(kw in label.lower() for kw in ['blended roas', 'overall roas', 'roas']):
                parsed = parse_num(val_str)
                if parsed and abs(parsed - actual_roas) > 0.15:
                    new_impact = new_impact.replace(f'value: "{val_str}"', f'value: "{roas_str}"', 1)
                    changes.append(f"impact ROAS: {val_str} → {roas_str}")
        if new_impact != old_impact:
            content = content.replace(old_impact, new_impact)
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        total_fixed += 1
        print(f"✅ {fname}: {'; '.join(changes)}")

print(f"\nDone: {total_fixed} files fixed")
