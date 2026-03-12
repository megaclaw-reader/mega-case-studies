#!/usr/bin/env python3
"""
Fix ecom case studies that have non-budget-aware creative volume claims.
Replaces "30+ creative", "50+ new variations", "100+ creatives" with 
budget-appropriate numbers.
"""

import os, re, sys, glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "..", "src", "data")

def get_avg_spend(content):
    paid = re.search(r'paidAds:\s*\{', content)
    if not paid:
        return 10000
    spends = re.findall(r'spend:\s*(\d+)', content[paid.start():])
    if spends:
        return sum(int(s) for s in spends) / len(spends)
    return 10000

def is_ecom(content):
    ind = re.search(r'industry:\s*["\']([^"\']+)["\']', content)
    if ind:
        industry = ind.group(1).lower()
        if any(t in industry for t in ['ecom', 'fashion', 'apparel', 'retail', 'dtc', 'consumer brand', 'snack', 'food', 'furniture', 'jewelry', 'pet product', 'vr entertainment', 'wearable', 'health tech', 'firework']):
            return True
    return False

def fix_file(filepath):
    slug = os.path.basename(filepath).replace('.ts', '')
    if slug in ('types', 'index'):
        return False
    
    with open(filepath) as f:
        content = f.read()
    
    if not is_ecom(content):
        return False
    
    original = content
    avg_spend = get_avg_spend(content)
    
    if avg_spend < 10000:
        # Small budget: 10-15 creatives
        replacements = [
            ("30+ AI-generated ad variations", "10-15 AI-generated creative variations"),
            ("30+ ai-generated ad variations", "10-15 AI-generated creative variations"),
            ("Launched initial creative testing suite with 30+", "Launched with 10-15"),
            ("50+ new variations per month", "fresh creative variations each week"),
            ("Scaled AI-generated creative production to 50+", "Rotated in fresh AI-generated creative weekly based on performance data, producing"),
            ("100+ creatives in active rotation, the campaign avoided creative fatigue entirely, a common problem for businesses running fewer than 10 ads at a time",
             "continuous AI-generated creative rotation, the campaign stayed fresh without production costs eating into media spend, delivering more creative variety than agencies charging twice the budget"),
            ("With 100+ creatives in active rotation", "With continuous AI-generated creative rotation"),
        ]
    elif avg_spend < 25000:
        # Mid budget: 20-30 creatives
        replacements = [
            ("30+ AI-generated ad variations", "20-25 AI-generated ad variations"),
            ("30+ ai-generated ad variations", "20-25 AI-generated ad variations"),
            ("50+ new variations per month", "30+ active creative variations per month"),
            ("Scaled AI-generated creative production to 50+ new", "Scaled to 30+ active creative"),
            ("100+ creatives in active rotation, the campaign avoided creative fatigue entirely, a common problem for businesses running fewer than 10 ads at a time",
             "40+ creatives in active rotation, the campaign avoided creative fatigue while AI optimization compounded daily improvements across bidding, targeting, and budget allocation"),
            ("With 100+ creatives in active rotation", "With 40+ creatives in active rotation"),
        ]
    else:
        # Large budget: keep 30+/50+/80+ (but cap at 80 not 100)
        replacements = [
            ("100+ creatives in active rotation, the campaign avoided creative fatigue entirely, a common problem for businesses running fewer than 10 ads at a time",
             "80+ creatives in active rotation, the campaign eliminated creative fatigue entirely as new AI-generated variations replaced underperformers daily"),
            ("With 100+ creatives in active rotation", "With 80+ creatives in active rotation"),
        ]
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"  ✅ Fixed: {slug} (avg spend ${avg_spend:,.0f})")
        return True
    return False

def main():
    files = sorted(glob.glob(os.path.join(DATA_DIR, "*.ts")))
    fixed = 0
    for f in files:
        if fix_file(f):
            fixed += 1
    print(f"\nFixed creative volume claims in {fixed} ecom files.\n")

if __name__ == "__main__":
    main()
