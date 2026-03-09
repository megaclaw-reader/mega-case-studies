#!/usr/bin/env python3
"""Fix all summary/impact/headline revenue mismatches after ROAS adjustments."""
import os, re

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')

def format_money(val):
    if val >= 1000000:
        formatted = f"${val/1000000:.2f}M"
        # Clean up .00M -> M
        formatted = formatted.replace('.00M', 'M')
        return formatted
    elif val >= 1000:
        # Use .1f for K values
        formatted = f"${val/1000:.1f}K"
        formatted = formatted.replace('.0K', 'K')
        return formatted
    return f"${val:.0f}"

def fix_file(filepath):
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # Get monthly revenue sum
    revenues = [float(m) for m in re.findall(r'revenue:\s*([\d.]+)', content)]
    spends = [float(m) for m in re.findall(r'spend:\s*([\d.]+)', content)]
    deals = [int(float(m)) for m in re.findall(r'deals:\s*([\d.]+)', content)]
    
    if not revenues:
        return False
    
    total_rev = sum(revenues)
    total_spend = sum(spends) if spends else 0
    total_deals = sum(deals) if deals else 0
    blended_roas = total_rev / total_spend if total_spend > 0 else 0
    
    rev_str = format_money(total_rev)
    
    # Fix all dollar amounts in impact/summary that reference revenue
    # Match patterns like value: "$672K" or value: "$1.32M" near revenue labels
    def fix_revenue_value(match):
        full = match.group(0)
        label = match.group(1).lower()
        old_val = match.group(2)
        
        # Only fix revenue-related labels
        revenue_words = ['revenue', 'total revenue', 'commission', 'patient', 'coaching', 'project', 'ad revenue']
        if any(w in label for w in revenue_words):
            return full.replace(old_val, rev_str)
        return full
    
    # Fix impact section: { label: "...", value: "$XXX" }
    content = re.sub(
        r'\{\s*label:\s*"([^"]*)"[^}]*value:\s*"(\$[\d,.]+[KMB]?)"',
        fix_revenue_value,
        content
    )
    
    # Fix summary section similarly
    content = re.sub(
        r'\{\s*label:\s*"([^"]*)"[^}]*value:\s*"(\$[\d,.]+[KMB]?)"',
        fix_revenue_value,
        content
    )
    
    # Fix ROAS in impact
    content = re.sub(
        r'(\{\s*label:\s*"[^"]*[Rr][Oo][Aa][Ss][^"]*",\s*value:\s*")[\d.]+x(")',
        lambda m: f'{m.group(1)}{blended_roas:.2f}x{m.group(2)}',
        content
    )
    
    # Fix headline revenue mentions ($X.XXM or $XXXK)
    def fix_headline_revenue(match):
        text = match.group(0)
        # Replace dollar amounts that look like total revenue
        text = re.sub(r'\$[\d.]+M(?= in)', rev_str, text)
        text = re.sub(r'\$[\d.]+K(?= in)', rev_str, text)
        # Fix ROAS mentions
        text = re.sub(r'[\d.]+x\s*ROAS', f'{blended_roas:.1f}x ROAS', text)
        text = re.sub(r'Achieving\s+[\d.]+x', f'Achieving {blended_roas:.1f}x', text)
        return text
    
    content = re.sub(r'headline:\s*"[^"]*"', fix_headline_revenue, content)
    content = re.sub(r'subheadline:\s*"[^"]*"', fix_headline_revenue, content)
    
    # Fix heroStats revenue
    # Pattern: { value: "1.47", unit: "M", label: "...Revenue..." }
    def fix_hero_revenue(match):
        full = match.group(0)
        label = match.group(0)
        if 'evenue' in label:
            if total_rev >= 1000000:
                val = f"{total_rev/1000000:.2f}".rstrip('0').rstrip('.')
                unit = "M"
            else:
                val = f"{total_rev/1000:.0f}"
                unit = "K"
            full = re.sub(r'value:\s*"[^"]*"', f'value: "{val}"', full, count=1)
            full = re.sub(r'unit:\s*"[^"]*"', f'unit: "{unit}"', full, count=1)
        return full
    
    content = re.sub(
        r'\{[^{}]*label:\s*"[^"]*[Rr]evenue[^"]*"[^{}]*\}',
        fix_hero_revenue,
        content
    )
    
    # Also handle: { value: "$587", unit: "K", label: "Revenue..." }
    content = re.sub(
        r'\{[^{}]*value:\s*"\$[^"]*"[^{}]*label:\s*"[^"]*[Rr]evenue[^"]*"[^{}]*\}',
        fix_hero_revenue,
        content
    )
    
    # Fix heroStats ROAS
    content = re.sub(
        r'(\{\s*value:\s*")[\d.]+(",\s*unit:\s*"x",\s*label:\s*"[^"]*[Rr][Oo][Aa][Ss][^"]*")',
        lambda m: f'{m.group(1)}{blended_roas:.1f}{m.group(2)}',
        content
    )
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False

fixed = 0
for f in sorted(os.listdir(DATA_DIR)):
    if not f.endswith('.ts') or f in ('types.ts', 'index.ts'):
        continue
    if fix_file(os.path.join(DATA_DIR, f)):
        fixed += 1
        print(f"Fixed: {f}")

print(f"\nTotal fixed: {fixed}")
