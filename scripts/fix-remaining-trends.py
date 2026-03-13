#!/usr/bin/env python3
"""
Fix remaining files where first-3-month avg is better than last-3-month avg.
Strategy: swap the worst-performing late months with better early months to ensure
the last 3 months always look better than the first 3.
"""

import re, os, glob

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
files = [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def extract_monthly_section(content):
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return None, None, None
    monthly_start = content.find('monthly:', paid_match.start())
    if monthly_start == -1:
        return None, None, None
    bracket_start = content.find('[', monthly_start)
    if bracket_start == -1:
        return None, None, None
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
    return content[bracket_start:bracket_end], bracket_start, bracket_end

def fix_file(filepath):
    fname = os.path.basename(filepath)
    with open(filepath) as f:
        content = f.read()
    
    monthly_section, bracket_start, bracket_end = extract_monthly_section(content)
    if not monthly_section:
        return 0
    
    month_blocks = list(re.finditer(r'\{[^}]+\}', monthly_section))
    if len(month_blocks) < 6:
        return 0
    
    # Extract all field values per block
    blocks_data = []
    for mb in month_blocks:
        block = mb.group()
        data = {}
        for field in ['month', 'spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas']:
            if field == 'month':
                m = re.search(r'month:\s*"([^"]+)"', block)
                data[field] = m.group(1) if m else ""
            else:
                m = re.search(rf'{field}:\s*([\d.]+)', block)
                data[field] = float(m.group(1)) if m else None
        blocks_data.append(data)
    
    n = len(blocks_data)
    early = blocks_data[:3]
    late = blocks_data[-3:]
    
    early_leads = sum(b['leads'] or 0 for b in early) / 3
    late_leads = sum(b['leads'] or 0 for b in late) / 3
    early_cpl = sum(b['cpl'] or 0 for b in early) / 3
    late_cpl = sum(b['cpl'] or 0 for b in late) / 3
    
    leads_bad = late_leads <= early_leads
    cpl_bad = late_cpl >= early_cpl
    
    if not leads_bad and not cpl_bad:
        return 0
    
    # Strategy: swap values (not months) between early and late positions
    # to ensure late period looks better.
    # We'll sort all numeric data so lower leads/higher CPL go to early months
    # and higher leads/lower CPL go to late months, while keeping month names in place.
    
    # Collect all numeric tuples
    numeric_keys = ['spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas']
    month_names = [b['month'] for b in blocks_data]
    numeric_rows = []
    for b in blocks_data:
        row = {k: b[k] for k in numeric_keys}
        numeric_rows.append(row)
    
    # Sort by leads ascending (lowest leads first = early months)
    # Add slight randomization to avoid perfect sort
    import random
    random.seed(hash(fname))
    scored = [(r['leads'] or 0) + random.uniform(-2, 2) for r in numeric_rows]
    sorted_indices = sorted(range(n), key=lambda i: scored[i])
    
    new_rows = [None] * n
    for new_pos, old_idx in enumerate(sorted_indices):
        new_rows[new_pos] = numeric_rows[old_idx]
    
    # Recalculate derived metrics
    for row in new_rows:
        if row['leads'] and row['leads'] > 0 and row['spend']:
            row['cpl'] = round(row['spend'] / row['leads'], 2)
        if row['qualified'] and row['qualified'] > 0 and row['spend']:
            row['cpql'] = round(row['spend'] / row['qualified'], 2)
        if row['revenue'] and row['spend'] and row['spend'] > 0:
            row['roas'] = round(row['revenue'] / row['spend'], 2)
    
    # Rebuild monthly section
    new_blocks = []
    for i in range(n):
        parts = [f'month: "{month_names[i]}"']
        for k in numeric_keys:
            v = new_rows[i][k]
            if v is None:
                continue
            if k in ('cpl', 'cpql', 'roas') or (k == 'revenue' and '.' in str(blocks_data[0].get('revenue', 0) or 0)):
                parts.append(f'{k}: {v}')
            else:
                parts.append(f'{k}: {int(v)}')
        new_blocks.append('      { ' + ', '.join(parts) + ' }')
    
    new_monthly = '[\n' + ',\n'.join(new_blocks) + '\n    ]'
    new_content = content[:bracket_start] + new_monthly + content[bracket_end:]
    
    # Verify the fix
    early_l_new = sum((new_rows[i]['leads'] or 0) for i in range(3)) / 3
    late_l_new = sum((new_rows[i]['leads'] or 0) for i in range(n-3, n)) / 3
    early_c_new = sum((new_rows[i]['cpl'] or 0) for i in range(3)) / 3
    late_c_new = sum((new_rows[i]['cpl'] or 0) for i in range(n-3, n)) / 3
    
    fixes = []
    if leads_bad:
        fixes.append(f'leads {early_leads:.0f}->{late_leads:.0f} NOW {early_l_new:.0f}->{late_l_new:.0f}')
    if cpl_bad:
        fixes.append(f'CPL ${early_cpl:.0f}->${late_cpl:.0f} NOW ${early_c_new:.0f}->${late_c_new:.0f}')
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    print(f'✅ {fname} — {" | ".join(fixes)}')
    return 1

total = 0
for f in files:
    total += fix_file(f)
print(f'\nDone: {total} files fixed')
