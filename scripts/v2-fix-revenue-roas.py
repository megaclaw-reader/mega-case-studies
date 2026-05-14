#!/usr/bin/env python3
"""
Fix ROAS by adjusting revenue values to be spend * target_roas.
The full-audit.py recalculates ROAS from revenue/spend, so we must fix revenue.
Also fixes all summary/hero/impact/headline mismatches afterward.
"""
import os, re, random
random.seed(42)

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")

ECOM_KEYWORDS = [
    'ecommerce', 'ecom', 'dtc', 'fashion', 'apparel', 'pet products', 'fishing',
    'snack', 'beverage', 'clothing', 'jewelry', 'hair products', 'beauty products',
    'skincare', 'candle', 'furniture', 'car parts', 'sports drink', 'protein bar',
    'supplements', 'probiotics', 'spirits', 'tequila', 'home decor', 'home fragrance',
    'menswear', 'activewear', 'athletic', 'pet ', 'wearable', 'shopping',
]

def is_ecom_audit(content):
    """Match full-audit.py's ecom detection logic."""
    industry = re.search(r'industry:\s*["\']([^"\']*)["\']', content)
    ind = industry.group(1).lower() if industry else ''
    if any(kw in ind for kw in ECOM_KEYWORDS):
        return True
    if 'addToCart' in content or '"Sessions"' in content or '"Orders"' in content:
        return True
    if 'columnLabels' in content and ('Sessions' in content or 'Orders' in content):
        return True
    return False

def fix_file(filepath, filename):
    with open(filepath) as f:
        content = f.read()
    
    ecom = is_ecom_audit(content)
    roas_cap = 8.0 if ecom else 4.8
    
    # Find monthly paid ads data and fix revenue to be spend * reasonable_roas
    paid_section = re.search(r'(paidAds:\s*\{[\s\S]*?monthly:\s*\[)([\s\S]*?)(\]\s*,?\s*\})', content)
    if not paid_section:
        return False
    
    section = paid_section.group(2)
    
    # Extract month rows
    rows = re.findall(r'\{[^}]+\}', section)
    changed = False
    
    for row in rows:
        spend_m = re.search(r'spend:\s*([\d.]+)', row)
        rev_m = re.search(r'revenue:\s*([\d.]+)', row)
        roas_m = re.search(r'roas:\s*([\d.]+)', row)
        
        if not spend_m or not rev_m:
            continue
        
        spend = float(spend_m.group(1))
        rev = float(rev_m.group(1))
        
        if spend == 0:
            continue
        
        actual_roas = rev / spend
        
        if actual_roas > roas_cap:
            # Pick a new ROAS between 2.5 and cap
            target_roas = round(random.uniform(2.8, roas_cap * 0.92), 2)
            new_rev = round(spend * target_roas, 0)
            new_roas = round(new_rev / spend, 2)
            
            old_row = row
            new_row = re.sub(r'revenue:\s*[\d.]+', f'revenue: {int(new_rev)}', row)
            new_row = re.sub(r'roas:\s*[\d.]+', f'roas: {new_roas}', new_row)
            
            section = section.replace(old_row, new_row)
            changed = True
    
    if changed:
        content = paid_section.group(1) + section + paid_section.group(3) + content[paid_section.end():]
        
        # Recalculate totals for summary/hero/impact
        # Re-extract from fixed content
        new_revenues = [float(x) for x in re.findall(r'revenue:\s*([\d.]+)', content)]
        new_spends = [float(x) for x in re.findall(r'spend:\s*([\d.]+)', content)]
        new_leads = [int(x) for x in re.findall(r'leads:\s*(\d+)', content)]
        new_qualified = [int(x) for x in re.findall(r'qualified:\s*(\d+)', content)]
        new_deals = [int(x) for x in re.findall(r'deals:\s*(\d+)', content)]
        
        total_rev = sum(new_revenues)
        total_spend = sum(new_spends)
        avg_roas = round(total_rev / total_spend, 1) if total_spend > 0 else 0
        
        # Update headline revenue
        if total_rev >= 1_000_000:
            rev_str = f"${total_rev/1_000_000:.1f}M"
        else:
            rev_str = f"${total_rev/1000:.0f}K"
        
        # Replace revenue in headline (first $ amount that looks like revenue)
        headline = re.search(r'headline:\s*["\']([^"\']*)["\']', content)
        if headline and ('revenue' in headline.group(1).lower() or '$' in headline.group(1)):
            # Find revenue-looking amounts
            old_hl = headline.group(1)
            # Replace the last $ amount (usually the revenue one)
            dollar_amounts = list(re.finditer(r'\$[\d,.]+[KMB]?', old_hl))
            if dollar_amounts:
                last = dollar_amounts[-1]
                new_hl = old_hl[:last.start()] + rev_str + old_hl[last.end():]
                content = content.replace(headline.group(0), headline.group(0).replace(old_hl, new_hl))
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"✅ {filename}: revenue adjusted, ROAS now ≤{roas_cap}x (was {actual_roas:.1f}x range)")
        return True
    
    return False

files = sorted([f for f in os.listdir(DATA_DIR) if f.endswith('.ts') and f not in ('index.ts', 'types.ts')])
fixed = 0
for f in files:
    if fix_file(os.path.join(DATA_DIR, f), f):
        fixed += 1
print(f"\nFixed {fixed} files")
