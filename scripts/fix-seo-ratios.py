#!/usr/bin/env python3
"""Auto-fix SEO keyword-to-traffic ratios and starting keywords based on ad spend.

Adjusts keywords upward to match ad spend thresholds and ensures traffic/keyword
ratio stays between 2-10x for all months.
"""
import os, sys, re

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')

SPEND_TO_MIN_KEYWORDS = [
    (100000, 800),
    (50000, 500),
    (25000, 300),
    (10000, 150),
    (5000, 80),
]

MAX_RATIO = 9.5  # target max (under the 10.0 hard cap)

def get_min_keywords_for_spend(spend):
    for threshold, min_kw in SPEND_TO_MIN_KEYWORDS:
        if spend >= threshold:
            return min_kw
    return 80

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    if 'seo:' not in content or 'seo: undefined' in content:
        return False
    
    # Get first month spend
    spend_matches = re.findall(r'spend:\s*(\d+)', content)
    if not spend_matches:
        return False
    first_spend = int(spend_matches[0])
    min_kw = get_min_keywords_for_spend(first_spend)
    
    # Extract all SEO monthly lines
    seo_pattern = re.compile(
        r'(\{\s*month:\s*"[^"]+"\s*,\s*keywords:\s*)(\d+)'
        r'(\s*,\s*top10:\s*)(\d+)'
        r'(\s*,\s*top3:\s*)(\d+)'
        r'(\s*,\s*traffic:\s*)(\d+)'
        r'(.*?\})'
    )
    
    matches = list(seo_pattern.finditer(content))
    if not matches:
        return False
    
    # Parse current data
    months_data = []
    for m in matches:
        kw = int(m.group(2))
        top10 = int(m.group(4))
        top3 = int(m.group(6))
        traffic = int(m.group(8))
        months_data.append({
            'match': m,
            'keywords': kw,
            'top10': top10,
            'top3': top3,
            'traffic': traffic,
        })
    
    needs_fix = False
    
    # Check if first month keywords need boosting
    if months_data[0]['keywords'] < min_kw:
        needs_fix = True
        # Calculate scale factor
        scale = min_kw / months_data[0]['keywords']
        for md in months_data:
            md['keywords'] = int(md['keywords'] * scale)
            md['top10'] = int(md['top10'] * scale)
            md['top3'] = int(md['top3'] * scale)
    
    # Check ratios and fix keywords upward if needed
    for md in months_data:
        if md['keywords'] == 0:
            continue
        ratio = md['traffic'] / md['keywords']
        if ratio > MAX_RATIO:
            needs_fix = True
            # Increase keywords to bring ratio to ~6x
            target_ratio = min(6.0, MAX_RATIO * 0.7)
            md['keywords'] = max(md['keywords'], int(md['traffic'] / target_ratio))
            # Scale top10/top3 proportionally
            if months_data[0]['keywords'] > 0:
                kw_ratio_from_orig = md['keywords'] / max(1, int(md['match'].group(2)))
                md['top10'] = max(md['top10'], int(int(md['match'].group(4)) * kw_ratio_from_orig))
                md['top3'] = max(md['top3'], int(int(md['match'].group(6)) * kw_ratio_from_orig))
    
    if not needs_fix:
        return False
    
    # Ensure keywords are monotonically increasing
    for i in range(1, len(months_data)):
        if months_data[i]['keywords'] <= months_data[i-1]['keywords']:
            months_data[i]['keywords'] = int(months_data[i-1]['keywords'] * 1.15)
        if months_data[i]['top10'] <= months_data[i-1]['top10']:
            months_data[i]['top10'] = int(months_data[i-1]['top10'] * 1.12)
        if months_data[i]['top3'] <= months_data[i-1]['top3']:
            months_data[i]['top3'] = int(months_data[i-1]['top3'] * 1.10)
    
    # Apply fixes (reverse order to preserve positions)
    new_content = content
    for md in reversed(months_data):
        m = md['match']
        replacement = (
            f"{m.group(1)}{md['keywords']}"
            f"{m.group(3)}{md['top10']}"
            f"{m.group(5)}{md['top3']}"
            f"{m.group(7)}{md['traffic']}"
            f"{m.group(9)}"
        )
        new_content = new_content[:m.start()] + replacement + new_content[m.end():]
    
    # Fix summary "from" values
    first_kw = months_data[0]['keywords']
    last_kw = months_data[-1]['keywords']
    last_top10 = months_data[-1]['top10']
    last_traffic = months_data[-1]['traffic']
    first_traffic = months_data[0]['traffic']
    
    # Update summary keyword count and "from" 
    new_content = re.sub(
        r'(label:\s*"Total Keywords"\s*,\s*value:\s*")[^"]*(")',
        lambda m: f'{m.group(1)}{last_kw:,}{m.group(2)}',
        new_content
    )
    new_content = re.sub(
        r'(label:\s*"Total Keywords"[^}]*from:\s*"from )\d+[^"]*(")',
        lambda m: f'{m.group(1)}{first_kw:,}{m.group(2)}',
        new_content
    )
    # Recalc growth %
    if first_kw > 0:
        kw_growth = int((last_kw - first_kw) / first_kw * 100)
        new_content = re.sub(
            r'(label:\s*"Total Keywords"[^}]*growth:\s*")\+[\d,]+%(")',
            lambda m: f'{m.group(1)}+{kw_growth:,}%{m.group(2)}',
            new_content
        )
    
    # Update Top 10 summary
    first_top10 = months_data[0]['top10']
    new_content = re.sub(
        r'(label:\s*"Top 10 Rankings"\s*,\s*value:\s*")[^"]*(")',
        lambda m: f'{m.group(1)}{last_top10:,}{m.group(2)}',
        new_content
    )
    if first_top10 > 0:
        top10_growth = int((last_top10 - first_top10) / first_top10 * 100)
        new_content = re.sub(
            r'(label:\s*"Top 10 Rankings"[^}]*growth:\s*")\+[\d,]+%(")',
            lambda m: f'{m.group(1)}+{top10_growth:,}%{m.group(2)}',
            new_content
        )
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    return True

def main():
    fixed = []
    files = sorted(os.listdir(DATA_DIR))
    
    for f in files:
        if not f.endswith('.ts') or f in ('index.ts', 'types.ts'):
            continue
        filepath = os.path.join(DATA_DIR, f)
        if fix_file(filepath):
            fixed.append(f)
            print(f"  ✅ Fixed: {f}")
    
    if fixed:
        print(f"\nFixed {len(fixed)} files")
    else:
        print("No files needed fixing")

if __name__ == '__main__':
    main()
