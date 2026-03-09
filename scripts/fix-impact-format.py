#!/usr/bin/env python3
"""Fix impact/summary values that lost their $ and K/M formatting."""
import os, re

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')

def format_money(val):
    if val >= 1000000:
        return f"${val/1000000:.2f}M".replace('.00M', 'M')
    elif val >= 100000:
        return f"${val/1000:.1f}K".replace('.0K', 'K')
    elif val >= 1000:
        return f"${val/1000:.1f}K".replace('.0K', 'K')
    return f"${val:.0f}"

fixed_count = 0
for fname in sorted(os.listdir(DATA_DIR)):
    if not fname.endswith('.ts') or fname in ('types.ts', 'index.ts'):
        continue
    
    path = os.path.join(DATA_DIR, fname)
    with open(path) as f:
        content = f.read()
    
    original = content
    
    # Get monthly revenue sum
    revenues = [float(m) for m in re.findall(r'revenue:\s*([\d.]+)', content)]
    spends = [float(m) for m in re.findall(r'spend:\s*([\d.]+)', content)]
    
    if not revenues:
        continue
    
    total_rev = sum(revenues)
    total_spend = sum(spends) if spends else 0
    rev_formatted = format_money(total_rev)
    blended_roas = total_rev / total_spend if total_spend > 0 else 0
    
    # Fix impact entries where value is just a bare number (lost formatting)
    # Pattern: { label: "...Revenue...", value: "XXX", ... }
    def fix_impact_entry(match):
        full = match.group(0)
        label = match.group(1)
        value = match.group(2)
        
        label_lower = label.lower()
        revenue_words = ['revenue', 'commission', 'coaching revenue', 'patient revenue', 
                        'project revenue', 'ad revenue', 'sales generated', 'total generated']
        
        if any(w in label_lower for w in revenue_words):
            # Check if value is a bare number (no $ or K/M)
            if re.match(r'^[\d.]+$', value):
                return full.replace(f'value: "{value}"', f'value: "{rev_formatted}"')
        
        if 'roas' in label_lower:
            if re.match(r'^[\d.]+$', value):
                return full.replace(f'value: "{value}"', f'value: "{blended_roas:.2f}x"')
        
        return full
    
    content = re.sub(
        r'\{\s*label:\s*"([^"]*)"[^}]*?value:\s*"([^"]*)"[^}]*?\}',
        fix_impact_entry,
        content
    )
    
    if content != original:
        with open(path, 'w') as f:
            f.write(content)
        fixed_count += 1
        print(f"Fixed: {fname}")

print(f"\nTotal: {fixed_count}")
