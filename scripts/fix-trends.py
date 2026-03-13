#!/usr/bin/env python3
"""
Fix case study data files where metrics trend in the wrong direction.
- Leads should trend UP over time (with seasonal variance)
- CPL should trend DOWN over time (with seasonal variance) 
- Qualified should trend UP
- Revenue should trend UP
- ROAS should generally improve

Strategy: Sort monthly values to create an upward trend for leads/qualified/revenue
and downward trend for CPL, while preserving the actual values (just reordering).
Then recalculate derived metrics (CPL = spend/leads, CPQL = spend/qualified, ROAS = revenue/spend).
"""

import re, os, glob, random, math

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
files = [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def extract_monthly_values(content, field):
    """Extract all values for a field from monthly array."""
    matches = list(re.finditer(rf'{field}:\s*([\d.]+)', content))
    return [(m.start(), m.end(), float(m.group(1))) for m in matches]

def get_trend_slope(values):
    """Calculate linear regression slope."""
    n = len(values)
    if n < 4:
        return 0
    x_mean = (n - 1) / 2
    y_mean = sum(values) / n
    num = sum((i - x_mean) * (v - y_mean) for i, v in enumerate(values))
    den = sum((i - x_mean) ** 2 for i in range(n))
    return num / den if den else 0

def needs_trend_fix(values, direction="up"):
    """Check if values need reordering. direction='up' means should increase, 'down' means decrease."""
    slope = get_trend_slope(values)
    if direction == "up":
        return slope < -0.5  # Significantly trending down when should be up
    else:
        return slope > 0.5   # Significantly trending up when should be down

def create_trending_values(values, direction="up"):
    """
    Reorder values to create a trend while maintaining seasonal-looking variance.
    Instead of pure sort (too clean), we use a weighted shuffle that biases
    lower values toward the start and higher values toward the end (for 'up').
    """
    n = len(values)
    if n < 4:
        return values
    
    indexed = list(enumerate(values))
    sorted_vals = sorted(values)
    
    if direction == "down":
        sorted_vals = sorted_vals[::-1]
    
    # Add some noise to avoid perfectly sorted look
    # Swap adjacent values occasionally (about 30% of the time)
    result = sorted_vals[:]
    for i in range(1, n - 1):
        if random.random() < 0.25:
            result[i], result[i-1] = result[i-1], result[i]
    
    return result

def fix_file(filepath):
    fname = os.path.basename(filepath)
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # Find monthly data block within paidAds
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return 0
    
    # Extract the monthly array section
    monthly_start = content.find('monthly:', paid_match.start())
    if monthly_start == -1:
        return 0
    
    # Find the closing of monthly array
    bracket_start = content.find('[', monthly_start)
    if bracket_start == -1:
        return 0
    
    depth = 0
    bracket_end = bracket_start
    for i in range(bracket_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                bracket_end = i + 1
                break
    
    monthly_section = content[bracket_start:bracket_end]
    
    # Extract individual month blocks
    month_blocks = list(re.finditer(r'\{[^}]+\}', monthly_section))
    if len(month_blocks) < 6:
        return 0
    
    # Extract leads values and check trend
    leads_vals = []
    cpl_vals = []
    qual_vals = []
    spend_vals = []
    revenue_vals = []
    
    for mb in month_blocks:
        block = mb.group()
        leads_m = re.search(r'leads:\s*(\d+)', block)
        cpl_m = re.search(r'cpl:\s*([\d.]+)', block)
        qual_m = re.search(r'qualified:\s*(\d+)', block)
        spend_m = re.search(r'spend:\s*(\d+)', block)
        rev_m = re.search(r'revenue:\s*([\d.]+)', block)
        
        leads_vals.append(int(leads_m.group(1)) if leads_m else 0)
        cpl_vals.append(float(cpl_m.group(1)) if cpl_m else 0)
        qual_vals.append(int(qual_m.group(1)) if qual_m else 0)
        spend_vals.append(int(spend_m.group(1)) if spend_m else 0)
        revenue_vals.append(float(rev_m.group(1)) if rev_m else 0)
    
    leads_bad = needs_trend_fix(leads_vals, "up")
    cpl_bad = needs_trend_fix(cpl_vals, "down")
    
    if not leads_bad and not cpl_bad:
        return 0
    
    fixes = []
    
    # Strategy: reorder leads to trend up, then recalculate CPL from spend/leads
    if leads_bad:
        new_leads = create_trending_values(leads_vals, "up")
        fixes.append(f"leads reordered (slope {get_trend_slope(leads_vals):.1f} -> {get_trend_slope(new_leads):.1f})")
    else:
        new_leads = leads_vals
    
    if needs_trend_fix(qual_vals, "up"):
        new_qual = create_trending_values(qual_vals, "up")
        fixes.append(f"qualified reordered")
    else:
        new_qual = qual_vals
    
    # Recalculate CPL and CPQL from spend and new leads/qual
    new_cpl = []
    new_cpql = []
    for i in range(len(month_blocks)):
        if new_leads[i] > 0:
            new_cpl.append(round(spend_vals[i] / new_leads[i], 2))
        else:
            new_cpl.append(cpl_vals[i])
        if new_qual[i] > 0:
            new_cpql.append(round(spend_vals[i] / new_qual[i], 2))
        else:
            new_cpql.append(0)
    
    # Now rewrite the monthly blocks with new values
    new_monthly = monthly_section
    offset = 0
    
    for i, mb in enumerate(month_blocks):
        block = mb.group()
        new_block = block
        
        # Replace leads
        new_block = re.sub(r'(leads:\s*)\d+', rf'\g<1>{new_leads[i]}', new_block)
        # Replace qualified
        new_block = re.sub(r'(qualified:\s*)\d+', rf'\g<1>{new_qual[i]}', new_block)
        # Replace cpl
        new_block = re.sub(r'(cpl:\s*)[\d.]+', rf'\g<1>{new_cpl[i]}', new_block)
        # Replace cpql if present
        new_block = re.sub(r'(cpql:\s*)[\d.]+', rf'\g<1>{new_cpql[i]}', new_block)
        
        start = mb.start() + offset
        end = mb.end() + offset
        new_monthly = new_monthly[:start] + new_block + new_monthly[end:]
        offset += len(new_block) - len(block)
    
    content = content[:bracket_start] + new_monthly + content[bracket_end:]
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"✅ {fname} — {', '.join(fixes)}")
        return 1
    return 0

total_fixed = 0
for f in files:
    total_fixed += fix_file(f)

print(f"\nDone: {total_fixed} files fixed")
