#!/usr/bin/env python3
"""Fix costPerDeal insertion issues - ensure proper comma and indentation."""
import os, re, glob

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')
fixed = 0

for fpath in sorted(glob.glob(os.path.join(DATA_DIR, '*.ts'))):
    if fpath.endswith('types.ts') or fpath.endswith('index.ts'):
        continue
    
    with open(fpath) as f:
        content = f.read()
    
    if 'costPerDeal' not in content:
        continue
    
    original = content
    
    # Fix pattern: deals line missing comma before costPerDeal
    # e.g.: deals: "Closed Deals"\n    costPerDeal: → deals: "Closed Deals",\n      costPerDeal:
    content = re.sub(
        r'(deals:\s*"[^"]+")(\s*\n\s*)(costPerDeal:)',
        lambda m: m.group(1) + (',' if not m.group(1).endswith(',') else '') + m.group(2) + m.group(3),
        content
    )
    
    # Fix indentation: costPerDeal should be at same level as deals (inside columnLabels)
    # Find the deals line indentation and match it
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        if 'costPerDeal:' in line and i > 0:
            # Find the deals line above
            for j in range(i-1, max(i-5, -1), -1):
                if 'deals:' in lines[j]:
                    indent = len(lines[j]) - len(lines[j].lstrip())
                    current_indent = len(line) - len(line.lstrip())
                    if current_indent != indent:
                        line = ' ' * indent + line.lstrip()
                    # Ensure it ends with comma
                    stripped = line.rstrip()
                    if not stripped.endswith(','):
                        line = stripped + ','
                    else:
                        line = stripped
                    break
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        fixed += 1
        print(f"✅ Fixed {os.path.basename(fpath)}")

print(f"\nFixed {fixed} files")
