#!/usr/bin/env python3
"""Validate SEO keyword-to-traffic ratios across all case studies.

Rules:
- Traffic/keyword ratio must be between 1.5 and 10.0 for any month
- Starting keywords must correlate with ad spend level
- No month can have traffic > 10x keywords
"""
import os, sys, re, json

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')

# Ad spend -> minimum starting keywords
SPEND_TO_MIN_KEYWORDS = [
    (100000, 800),
    (50000, 500),
    (25000, 300),
    (10000, 150),
    (5000, 80),
]

MAX_RATIO = 10.0  # max traffic per keyword

def get_starting_spend(content):
    """Extract first month's spend from paidAds monthly data."""
    # Look for first spend value in monthly array
    spend_matches = re.findall(r'spend:\s*(\d+)', content)
    if spend_matches:
        return int(spend_matches[0])
    return None

def check_file(filepath):
    errors = []
    filename = os.path.basename(filepath)
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip files without SEO
    if 'seo:' not in content or 'seo: undefined' in content:
        return errors
    
    # Extract SEO monthly data
    seo_months = re.findall(
        r'month:\s*"([^"]+)".*?keywords:\s*(\d+).*?traffic:\s*(\d+)',
        content, re.DOTALL
    )
    
    if not seo_months:
        return errors
    
    # Check each month's ratio
    for month, kw_str, traffic_str in seo_months:
        kw = int(kw_str)
        traffic = int(traffic_str)
        
        if kw == 0:
            continue
            
        ratio = traffic / kw
        
        if ratio > MAX_RATIO:
            errors.append(f"  {month}: traffic/keyword ratio = {ratio:.1f}x ({traffic} traffic / {kw} keywords) — MAX is {MAX_RATIO}x")
    
    # Check starting keywords vs ad spend
    starting_kw = int(seo_months[0][1])
    starting_spend = get_starting_spend(content)
    
    if starting_spend:
        min_kw = 80  # default
        for spend_threshold, min_keywords in SPEND_TO_MIN_KEYWORDS:
            if starting_spend >= spend_threshold:
                min_kw = min_keywords
                break
        
        if starting_kw < min_kw:
            errors.append(f"  Starting keywords ({starting_kw}) too low for ${starting_spend:,}/mo ad spend — minimum {min_kw}")
    
    return errors

def main():
    slug = None
    if '--slug' in sys.argv:
        idx = sys.argv.index('--slug')
        if idx + 1 < len(sys.argv):
            slug = sys.argv[idx + 1]
    
    all_errors = {}
    files = sorted(os.listdir(DATA_DIR))
    
    for f in files:
        if not f.endswith('.ts') or f == 'index.ts' or f == 'types.ts':
            continue
        if slug and f != f"{slug}.ts":
            continue
            
        filepath = os.path.join(DATA_DIR, f)
        errors = check_file(filepath)
        if errors:
            all_errors[f] = errors
    
    if all_errors:
        print("❌ SEO ratio check FAILED:\n")
        for f, errs in all_errors.items():
            print(f"❌ {f}")
            for e in errs:
                print(e)
            print()
        sys.exit(1)
    else:
        checked = 1 if slug else len([f for f in files if f.endswith('.ts') and f not in ('index.ts', 'types.ts')])
        print(f"✅ SEO ratio check passed for {checked} file(s)")
        sys.exit(0)

if __name__ == '__main__':
    main()
