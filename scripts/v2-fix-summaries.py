#!/usr/bin/env python3
"""Fix all summary/hero/impact stat mismatches by recalculating from monthly data."""
import os, re, random, json
random.seed(42)

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")

def fmt_num(n, unit=''):
    """Format number for display."""
    if n >= 1_000_000:
        return f"${n/1_000_000:.1f}M" if unit == '$' else f"{n/1_000_000:.1f}M"
    elif n >= 1000 and unit == '$':
        return f"${n/1000:.1f}K"
    elif n >= 1000:
        return f"{n:,.0f}"
    return f"{n:.0f}"

def fix_file(filepath, filename):
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # Extract monthly paid ads data
    paid = re.search(r'paidAds:\s*\{[\s\S]*?monthly:\s*\[([\s\S]*?)\]', content)
    if not paid:
        return False
    
    section = paid.group(1)
    
    # Sum all metrics
    leads = [int(x) for x in re.findall(r'leads:\s*(\d+)', section)]
    qualified = [int(x) for x in re.findall(r'qualified:\s*(\d+)', section)]
    deals = [int(x) for x in re.findall(r'deals:\s*(\d+)', section)]
    revenues = [float(x) for x in re.findall(r'revenue:\s*([\d.]+)', section)]
    spends = [float(x) for x in re.findall(r'spend:\s*([\d.]+)', section)]
    cpls = [float(x) for x in re.findall(r'cpl:\s*([\d.]+)', section)]
    cpqls = [float(x) for x in re.findall(r'cpql:\s*([\d.]+)', section)]
    roas_vals = [float(x) for x in re.findall(r'roas:\s*([\d.]+)', section)]
    sessions = [int(x) for x in re.findall(r'sessions:\s*(\d+)', section)]
    
    total_leads = sum(leads)
    total_qualified = sum(qualified)
    total_deals = sum(deals)
    total_revenue = sum(revenues)
    total_spend = sum(spends)
    total_sessions = sum(sessions) if sessions else 0
    avg_cpl = round(total_spend / total_leads, 2) if total_leads > 0 else 0
    avg_cpql = round(total_spend / total_qualified, 2) if total_qualified > 0 else 0
    avg_roas = round(total_revenue / total_spend, 1) if total_spend > 0 else 0
    num_months = len(leads)
    
    # Now fix all summary/hero/impact fields
    # Generic approach: find value fields near known labels and update
    
    def update_stat(pattern_label, new_value):
        nonlocal content
        # Match: label: "XXX" ... value: "YYY"
        # Could be in hero, summary, or impact arrays
        escaped = re.escape(pattern_label)
        
        # Try various patterns
        patterns = [
            rf'(\{{\s*(?:label|value):\s*"[^"]*{escaped}[^"]*"[^}}]*value:\s*")[^"]*(")',
            rf'(value:\s*")[^"]*("[^}}]*label:\s*"[^"]*{escaped})',
            rf'(\{{\s*label:\s*"{escaped}"[^}}]*value:\s*")[^"]*(")',
        ]
        
        for pat in patterns:
            match = re.search(pat, content, re.IGNORECASE)
            if match:
                content = content[:match.start(1)] + match.group(1) + str(new_value) + match.group(2) + content[match.end():]
                return True
        return False
    
    # Update common stats
    updates = {
        'Total Leads': f"{total_leads:,}",
        'Total Qualified': f"{total_qualified:,}",
        'Total Qualified Leads': f"{total_qualified:,}",
        'Closed Deals': str(total_deals),
        'Total Deals': str(total_deals),
        'Orders Attributed': f"{total_deals:,}" if total_deals else None,
        'Total Orders': f"{total_deals:,}" if total_deals else None,
        'Total Revenue': fmt_num(total_revenue, '$') if total_revenue else None,
        'Revenue Generated': fmt_num(total_revenue, '$') if total_revenue else None,
        'Pipeline Revenue': fmt_num(total_revenue, '$') if total_revenue else None,
        'Commission Revenue': fmt_num(total_revenue, '$') if total_revenue else None,
        'Total Ad Spend': fmt_num(total_spend, '$'),
        'Average ROAS': f"{avg_roas}x",
        'Blended ROAS': f"{avg_roas}x",
        'Avg CPL': f"${avg_cpl:,.0f}",
        'Avg CPQL': f"${avg_cpql:,.0f}",
    }
    
    changed = False
    for label, value in updates.items():
        if value and update_stat(label, value):
            changed = True
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

files = sorted([f for f in os.listdir(DATA_DIR) if f.endswith('.ts') and f not in ('index.ts', 'types.ts')])
fixed = 0
for f in files:
    if fix_file(os.path.join(DATA_DIR, f), f):
        fixed += 1
        print(f"✅ {f}")

print(f"\nRecalculated summaries in {fixed} files")
