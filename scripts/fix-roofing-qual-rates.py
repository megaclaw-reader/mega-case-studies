#!/usr/bin/env python3
"""Fix qualification rates in roofing files to be under 25%."""
import re, os

files = {
    'roofing-charlotte-nc.ts': {
        # New lead counts that give 20-24% qual rates (qual stays same)
        'leads': [79, 102, 118, 162, 186, 231, 248, 293, 312, 356, 337, 398],
    },
    'roofing-dallas-fort-worth.ts': {
        'leads': [168, 194, 243, 312, 384, 442, 497, 547, 598, 654, 694, 738],
    },
    'roofing-nashville-tn.ts': {
        'leads': [121, 142, 193, 297, 389, 407, 436, 462, 478, 524, 493, 556],
    },
}

data_dir = '/Users/junehamilton/.openclaw/workspace/mega-case-studies/src/data'

for fname, fix in files.items():
    path = os.path.join(data_dir, fname)
    with open(path) as f:
        content = f.read()
    
    # Find all monthly lines and replace leads + recalculate CPL
    pattern = r'(\{ month: "[^"]+", spend: (\d+), leads: )\d+(, cpl: )[\d.]+(,)'
    
    matches = list(re.finditer(pattern, content))
    
    if len(matches) != 12:
        print(f"⚠️  {fname}: found {len(matches)} monthly lines, expected 12")
        continue
    
    # Process in reverse to not mess up positions
    new_content = content
    for i in range(11, -1, -1):
        m = matches[i]
        spend = int(m.group(2))
        new_leads = fix['leads'][i]
        new_cpl = round(spend / new_leads, 2)
        
        old_text = m.group(0)
        new_text = f'{m.group(1)}{new_leads}{m.group(3)}{new_cpl}{m.group(4)}'
        new_content = new_content[:m.start()] + new_text + new_content[m.end():]
    
    with open(path, 'w') as f:
        f.write(new_content)
    
    # Verify qual rates
    print(f"\n{fname}:")
    qual_pattern = r'qualified: (\d+)'
    quals = [int(x) for x in re.findall(qual_pattern, new_content)][:12]
    for i, (leads, qual) in enumerate(zip(fix['leads'], quals)):
        rate = qual / leads * 100
        flag = "⚠️" if rate > 25 else "✓"
        print(f"  M{i+1}: leads={leads}, qual={qual}, rate={rate:.1f}% {flag}")

print("\n✅ Done. Run validators next.")
