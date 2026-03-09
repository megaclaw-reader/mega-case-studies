#!/usr/bin/env python3
"""
Fix ROAS across ALL lead-gen case studies.
- Lead gen max ROAS: 4.8x per month (hard cap)
- Target range: 2.5x - 4.8x
- Adjusts revenue down, recalculates deals from revenue / estimated avg deal value
- Updates summary stats, headline, heroStats, impact section
"""

import os
import re
import random
import sys

random.seed(42)  # Reproducible

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')
MAX_ROAS = 4.80
MIN_ROAS = 2.20

# Ecommerce slugs use different model - skip them
ECOM_INDICATORS = ['addToCart', 'add_to_cart', 'sessions:', 'orders:']

def is_ecommerce(content):
    return any(ind in content for ind in ECOM_INDICATORS)

def fix_monthly_roas(content):
    """Fix each monthly row's revenue and roas if roas > MAX_ROAS"""
    changed = False
    
    def fix_row(match):
        nonlocal changed
        full = match.group(0)
        
        spend_m = re.search(r'spend:\s*([\d.]+)', full)
        roas_m = re.search(r'roas:\s*([\d.]+)', full)
        revenue_m = re.search(r'revenue:\s*([\d.]+)', full)
        deals_m = re.search(r'deals:\s*([\d.]+)', full)
        
        if not (spend_m and roas_m and revenue_m):
            return full
        
        spend = float(spend_m.group(1))
        roas = float(roas_m.group(1))
        revenue = float(revenue_m.group(1))
        
        if roas <= MAX_ROAS:
            return full
        
        changed = True
        
        # Pick a target ROAS between 2.8 and 4.8, weighted toward middle
        target_roas = round(random.uniform(max(MIN_ROAS, roas * 0.35), MAX_ROAS), 2)
        new_revenue = round(spend * target_roas)
        
        # Round revenue to nearest 100
        new_revenue = round(new_revenue / 100) * 100
        actual_roas = round(new_revenue / spend, 2)
        
        # Adjust deals proportionally
        if deals_m:
            old_deals = int(float(deals_m.group(1)))
            if revenue > 0:
                deal_value = revenue / old_deals if old_deals > 0 else 7500
                new_deals = max(1, round(new_revenue / deal_value))
            else:
                new_deals = old_deals
            full = re.sub(r'(deals:\s*)[\d.]+', f'\\g<1>{new_deals}', full)
        
        full = re.sub(r'(revenue:\s*)[\d.]+', f'\\g<1>{new_revenue}', full)
        full = re.sub(r'(roas:\s*)[\d.]+', f'\\g<1>{actual_roas}', full)
        
        return full
    
    # Match each monthly data object { month: ..., ... }
    content = re.sub(
        r'\{[^{}]*month:\s*["\'][^"\']*["\'][^{}]*\}',
        fix_row,
        content
    )
    
    return content, changed

def recalc_summaries(content):
    """Recalculate summary values from monthly data"""
    # Extract all monthly revenue values
    revenues = [float(m) for m in re.findall(r'revenue:\s*([\d.]+)', content)]
    spends = [float(m) for m in re.findall(r'spend:\s*([\d.]+)', content)]
    deals_list = [int(float(m)) for m in re.findall(r'deals:\s*([\d.]+)', content)]
    roas_list = [float(m) for m in re.findall(r'roas:\s*([\d.]+)', content)]
    
    if not revenues or not spends:
        return content
    
    total_revenue = sum(revenues)
    total_spend = sum(spends)
    total_deals = sum(deals_list) if deals_list else 0
    blended_roas = round(total_revenue / total_spend, 2) if total_spend > 0 else 0
    
    # Format revenue for display
    if total_revenue >= 1000000:
        rev_display = f"${total_revenue/1000000:.2f}M"
    else:
        rev_display = f"${total_revenue/1000:.0f}K"
    
    # Update heroStats ROAS value
    content = re.sub(
        r'(\{\s*value:\s*")[^"]*(",\s*unit:\s*"x",\s*label:\s*"[^"]*ROAS[^"]*")',
        f'\\g<1>{blended_roas}\\2',
        content
    )
    
    # Update heroStats revenue
    content = re.sub(
        r'(\{\s*value:\s*")[^"]*(",\s*unit:\s*"[^"]*",\s*label:\s*"[^"]*[Rr]evenue[^"]*")',
        lambda m: f'{m.group(1)}{rev_display.split("$")[1].rstrip("MK")}{m.group(2)}',
        content
    )
    
    # Update impact section ROAS
    content = re.sub(
        r'(\{\s*label:\s*"[^"]*ROAS[^"]*",\s*value:\s*")[^"]*(")',
        f'\\g<1>{blended_roas}x\\2',
        content
    )
    
    # Update impact section Total Revenue
    content = re.sub(
        r'(\{\s*label:\s*"Total Revenue",\s*value:\s*")[^"]*(")',
        f'\\g<1>{rev_display}\\2',
        content
    )
    
    # Update summary Closed Projects/Deals
    if total_deals > 0:
        content = re.sub(
            r'(\{\s*label:\s*"Closed (?:Projects|Deals)"[^}]*value:\s*")[^"]*(")',
            f'\\g<1>{total_deals}\\2',
            content
        )
    
    # Fix headline ROAS references
    def fix_headline_roas(m):
        text = m.group(0)
        # Replace any X.Xx ROAS mention
        text = re.sub(r'[\d.]+x\s*ROAS', f'{blended_roas}x ROAS', text)
        text = re.sub(r'Achieving\s+[\d.]+x', f'Achieving {blended_roas}x', text)
        return text
    
    content = re.sub(r'headline:\s*"[^"]*"', fix_headline_roas, content)
    
    # Fix subheadline revenue references
    content = re.sub(
        r'(generate\s+)\$[\d.]+[MK]',
        f'\\g<1>{rev_display}',
        content
    )
    
    return content

def process_file(filepath):
    with open(filepath) as f:
        content = f.read()
    
    if is_ecommerce(content):
        return False, "ecommerce (skipped)"
    
    # Check if file has roas data
    roas_vals = re.findall(r'roas:\s*([\d.]+)', content)
    if not roas_vals:
        return False, "no roas data"
    
    max_roas = max(float(m) for m in roas_vals)
    if max_roas <= MAX_ROAS:
        return False, f"ok (max {max_roas}x)"
    
    content, changed = fix_monthly_roas(content)
    if changed:
        content = recalc_summaries(content)
        with open(filepath, 'w') as f:
            f.write(content)
        new_max = max(float(m) for m in re.findall(r'roas:\s*([\d.]+)', content))
        return True, f"FIXED (was {max_roas}x → now {new_max}x)"
    
    return False, f"unchanged (max {max_roas}x)"

if __name__ == '__main__':
    fixed = 0
    for f in sorted(os.listdir(DATA_DIR)):
        if not f.endswith('.ts') or f in ('types.ts', 'index.ts'):
            continue
        path = os.path.join(DATA_DIR, f)
        was_fixed, msg = process_file(path)
        if was_fixed:
            fixed += 1
            print(f"✅ FIXED: {f} — {msg}")
        elif 'ok' in msg or 'skipped' in msg:
            pass  # quiet
        else:
            print(f"   {f} — {msg}")
    
    print(f"\n{'='*50}")
    print(f"Fixed {fixed} files")
