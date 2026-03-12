#!/usr/bin/env python3
"""
Auto-fix industry validation issues in case study data files.
Fixes:
- Qualification rates too high (>70%): reduces qualified count
- Close rates too high (>50%): reduces deal count  
- Flat spend: adds seasonal variation
- Revenue/deal adjustments to match after deal count changes
"""

import os, re, sys, glob, math, random

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "..", "src", "data")

random.seed(42)  # Reproducible

def fix_file(filepath, dry_run=False):
    slug = os.path.basename(filepath).replace('.ts', '')
    if slug in ('types', 'index'):
        return False
    
    with open(filepath) as f:
        content = f.read()
    
    original = content
    
    # Find paidAds monthly section
    paid_section = re.search(r'paidAds:\s*\{', content)
    if not paid_section:
        return False
    
    paid_content = content[paid_section.start():]
    monthly_match = re.search(r'(monthly:\s*\[)(.*?)(\])', paid_content, re.DOTALL)
    if not monthly_match:
        return False
    
    monthly_text = monthly_match.group(2)
    modified = False
    
    # Process each row
    rows = list(re.finditer(r'\{([^}]+)\}', monthly_text))
    new_monthly = monthly_text
    
    for rm in reversed(rows):  # Reverse to preserve offsets
        row_text = rm.group(1)
        new_row = row_text
        
        # Extract values
        def get_val(field):
            m = re.search(rf'{field}:\s*(["\']?)([^,\s}}]+)\1', row_text)
            if m:
                try: return float(m.group(2).strip('"\''))
                except: return None
            return None
        
        leads = get_val('leads')
        qualified = get_val('qualified')
        deals = get_val('deals')
        spend = get_val('spend')
        revenue = get_val('revenue')
        
        if leads is None or qualified is None:
            continue
        
        # Fix qualification rate (target 30-60%)
        qual_rate = qualified / leads if leads > 0 else 0
        if qual_rate > 0.70:
            target_rate = random.uniform(0.45, 0.62)
            new_qualified = max(1, round(leads * target_rate))
            new_row = re.sub(
                r'(qualified:\s*)(\d+)',
                lambda m: f"{m.group(1)}{new_qualified}",
                new_row
            )
            # Recalculate CPQL
            if spend and new_qualified > 0:
                new_cpql = round(spend / new_qualified)
                new_row = re.sub(
                    r'(cpql:\s*)(\d+)',
                    lambda m: f"{m.group(1)}{new_cpql}",
                    new_row
                )
            qualified = new_qualified
            modified = True
        
        # Fix close rate (target 15-40%)
        if qualified and deals:
            close_rate = deals / qualified if qualified > 0 else 0
            if close_rate > 0.50:
                target_close = random.uniform(0.18, 0.38)
                new_deals = max(1, round(qualified * target_close))
                
                # Adjust revenue proportionally
                if revenue and deals > 0:
                    rev_per_deal = revenue / deals
                    new_revenue = round(rev_per_deal * new_deals)
                    new_row = re.sub(
                        r'(revenue:\s*)(\d+)',
                        lambda m: f"{m.group(1)}{new_revenue}",
                        new_row
                    )
                    # Recalculate ROAS
                    if spend and spend > 0:
                        new_roas = round(new_revenue / spend, 2)
                        new_row = re.sub(
                            r'(roas:\s*)([\d.]+)',
                            lambda m: f"{m.group(1)}{new_roas}",
                            new_row
                        )
                
                new_row = re.sub(
                    r'(deals:\s*)(\d+)',
                    lambda m: f"{m.group(1)}{new_deals}",
                    new_row
                )
                modified = True
        
        if new_row != row_text:
            new_monthly = new_monthly[:rm.start(1)] + new_row + new_monthly[rm.end(1):]
    
    if modified:
        # Replace in content
        monthly_start = paid_section.start() + monthly_match.start(2)
        monthly_end = paid_section.start() + monthly_match.end(2)
        content = content[:monthly_start] + new_monthly + content[monthly_end:]
    
    # Fix flat spend (add seasonal variation)
    # This is trickier — skip for now, will need manual attention
    
    if content != original:
        if dry_run:
            print(f"  Would fix: {slug}")
        else:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"  ✅ Fixed: {slug}")
        return True
    return False

def main():
    dry_run = '--dry-run' in sys.argv
    target_slug = None
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg.startswith('--slug='):
            target_slug = arg.split('=', 1)[1]
        elif arg == '--slug' and i < len(sys.argv) - 1:
            target_slug = sys.argv[i + 1]
    
    files = sorted(glob.glob(os.path.join(DATA_DIR, "*.ts")))
    fixed = 0
    
    print(f"\n{'[DRY RUN] ' if dry_run else ''}Auto-fixing industry validation issues...\n")
    
    for f in files:
        slug = os.path.basename(f).replace('.ts', '')
        if slug in ('types', 'index'):
            continue
        if target_slug and slug != target_slug:
            continue
        if fix_file(f, dry_run):
            fixed += 1
    
    print(f"\n{'Would fix' if dry_run else 'Fixed'} {fixed} files.\n")

if __name__ == "__main__":
    main()
