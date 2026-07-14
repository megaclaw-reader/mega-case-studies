#!/usr/bin/env python3
"""
REALISM VALIDATOR — The Bullshit Thermometer
=============================================
Blocks deployment if any case study has unrealistic metrics.
Checks qualification rates, close rates, deal values, CPLs, and ROAS
against industry benchmarks. An expert in that industry should look
at every number and think "yeah, that tracks."

Usage:
  python3 scripts/validate-realism.py                    # Check all files
  python3 scripts/validate-realism.py --slug "roofing-houston"  # Check one file
  python3 scripts/validate-realism.py --slug "x" --skip-spend-floor  # Skip $5K floor

Exit code 0 = pass, 1 = fail (blocks deploy)
"""

import re, os, sys, glob, argparse

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'src', 'data')

# ============================================================
# INDUSTRY BENCHMARKS
# Source: WordStream, HubSpot, Ruler Analytics, industry reports
# Format: (min, max) — values outside this range get flagged
# ============================================================

QUAL_RATES = {
    # What % of raw leads are actually qualified? (qualified / leads)
    'Accounting': (0.15, 0.28),
    'Automotive': (0.12, 0.28),
    'B2B Healthcare Service': (0.20, 0.50),
    'B2B': (0.08, 0.20),
    'Renewable Energy Procurement SaaS': (0.25, 0.55),  # Highly targeted B2B enterprise campaigns — narrow audience = higher qual rate
    'SaaS': (0.08, 0.20),
    'Business Law': (0.20, 0.45),  # B2B legal services have higher qual rates with proper targeting
    'Business': (0.10, 0.25),
    'Construction': (0.08, 0.20),
    'Dental': (0.18, 0.38),
    'Orthodont': (0.18, 0.38),
    'Ecommerce': (0.01, 0.05),  # This is conversion rate (sessions -> orders)
    'Education': (0.10, 0.25),
    'Entertainment': (0.12, 0.32),
    'Event': (0.12, 0.32),
    'Fitness': (0.12, 0.30),
    'Yoga': (0.12, 0.30),
    'Food': (0.12, 0.32),
    'Restaurant': (0.12, 0.32),
    'HVAC Parts': (0.35, 0.65),  # B2B parts distribution — targeted commercial buyers, high qual rate
    'Commercial HVAC': (0.35, 0.55),  # B2B commercial services — targeted facility managers/property managers, higher qual rate than residential
    'HVAC': (0.12, 0.30),
    'Plumbing': (0.12, 0.30),
    'Healthcare': (0.10, 0.25),
    'Medical Treatment': (0.15, 0.40),
    'Medical': (0.10, 0.25),
    'Mental Health': (0.10, 0.25),
    'Chiropract': (0.10, 0.25),
    'Home Damage': (0.12, 0.30),
    'Restoration': (0.12, 0.30),
    'Junk Removal': (0.12, 0.30),
    'Home Service': (0.10, 0.25),
    'Home Improv': (0.10, 0.25),
    'Custom Home': (0.10, 0.25),
    'Insurance': (0.06, 0.20),
    'Financial': (0.06, 0.20),
    'Fintech': (0.06, 0.20),
    'Landscap': (0.12, 0.30),
    'Legal': (0.06, 0.20),
    'Law': (0.06, 0.20),
    'Immigration': (0.06, 0.20),
    'Marketing': (0.08, 0.20),
    'Agency': (0.08, 0.20),
    'Print': (0.08, 0.20),
    'Med Spa': (0.18, 0.35),
    'Medspa': (0.18, 0.35),
    'Aesthet': (0.18, 0.35),
    'Moving': (0.12, 0.30),
    'Logistics': (0.12, 0.30),
    'Transport': (0.12, 0.30),
    'Pest': (0.18, 0.38),
    'Exterminator': (0.18, 0.38),
    'Real Estate': (0.04, 0.15),
    'Mortgage': (0.04, 0.15),
    'Storage': (0.04, 0.15),
    'Rental': (0.04, 0.15),
    'Roofing': (0.10, 0.25),
    'Security': (0.10, 0.25),
    'Surveillance': (0.10, 0.25),
    'Cybersecurity': (0.10, 0.25),
    'Staffing': (0.06, 0.20),
    'Recruiting': (0.06, 0.20),
    'Travel': (0.10, 0.25),
    'Hospitality': (0.10, 0.25),
    'Wedding': (0.10, 0.25),
    'Vacation': (0.10, 0.25),
}

ROAS_CAPS = {
    'lead_gen': 4.8,
    'ecom': 8.0,
}

def get_qual_range(industry, content):
    """Find the best matching qualification rate range for this industry."""
    # Check ecommerce first — must have ecom-specific metrics, not just columnLabels
    has_sessions = bool(re.search(r'["\']Sessions["\']', content)) or bool(re.search(r'["\']Site Visits["\']', content))
    has_orders = bool(re.search(r'["\']Orders["\']', content))
    has_subscribers = bool(re.search(r'["\']Subscribers["\']', content))
    has_add_to_cart = 'addToCart' in content or bool(re.search(r'["\']Add to Cart["\']', content))
    has_ticket = bool(re.search(r'["\']Ticket (Purchases|Selections)["\']', content))
    is_ecom = (has_sessions and has_orders) or has_add_to_cart or (has_sessions and has_ticket) or (has_sessions and has_subscribers)
    if is_ecom:
        return (0.01, 0.15)  # Ecom conversion rates: 1-5% typical, up to 10-15% for niche/targeted
    
    # Match industry keywords
    for keyword, rate_range in QUAL_RATES.items():
        if keyword.lower() in industry.lower():
            return rate_range
    
    # Default conservative range
    return (0.08, 0.30)

def validate_file(filepath):
    """Validate a single case study file. Returns list of issues."""
    with open(filepath) as f:
        content = f.read()
    
    issues = []
    fname = os.path.basename(filepath)
    
    # Extract industry
    industry_m = re.search(r'industry:\s*["\']([^"\']+)["\']', content)
    industry = industry_m.group(1) if industry_m else fname.replace('.ts', '')
    
    # Detect ecom — must have ecom-specific metrics
    has_sessions = bool(re.search(r'["\']Sessions["\']', content)) or bool(re.search(r'["\']Site Visits["\']', content))
    has_orders = bool(re.search(r'["\']Orders["\']', content))
    has_subscribers = bool(re.search(r'["\']Subscribers["\']', content))
    has_add_to_cart = 'addToCart' in content or bool(re.search(r'["\']Add to Cart["\']', content))
    has_ticket = bool(re.search(r'["\']Ticket (Purchases|Selections)["\']', content))
    is_ecom = (has_sessions and has_orders) or has_add_to_cart or (has_sessions and has_ticket) or (has_sessions and has_subscribers)
    roas_cap = ROAS_CAPS['ecom'] if is_ecom else ROAS_CAPS['lead_gen']
    
    # Get paid ads data
    paid_idx = content.find('paidAds')
    if paid_idx < 0:
        return issues  # SEO-only, skip paid ads checks
    
    paid = content[paid_idx:]
    
    spends = [int(x.replace(',','')) for x in re.findall(r'spend:\s*(\d[\d,]*)', paid)]
    leads = [int(x) for x in re.findall(r'leads:\s*(\d+)', paid)]
    qualified = [int(x) for x in re.findall(r'qualified:\s*(\d+)', paid)]
    deals = [int(x) for x in re.findall(r'deals:\s*(\d+)', paid)]
    revenues = [int(x.replace(',','')) for x in re.findall(r'revenue:\s*([\d,]+)', paid)]
    roas_values = [float(x) for x in re.findall(r'roas:\s*([\d.]+)', paid)]
    
    if not spends or not leads:
        return issues
    
    total_spend = sum(spends)
    total_leads = sum(leads)
    
    # 1. QUALIFICATION RATE CHECK
    if qualified:
        total_qual = sum(qualified)
        qual_rate = total_qual / total_leads if total_leads > 0 else 0
        qual_lo, qual_hi = get_qual_range(industry, content)
        
        if qual_rate > qual_hi * 1.15:
            issues.append(f'QUALIFICATION RATE TOO HIGH: {qual_rate:.0%} (industry max ~{qual_hi:.0%}). An expert would flag this.')
        elif qual_rate < qual_lo * 0.5 and not is_ecom:
            issues.append(f'QUALIFICATION RATE TOO LOW: {qual_rate:.0%} (industry min ~{qual_lo:.0%}). Unrealistically pessimistic.')
    
    # 2. ROAS CAP CHECK (per month)
    for i, roas in enumerate(roas_values):
        if roas > roas_cap:
            issues.append(f'Month {i+1} ROAS {roas:.1f}x exceeds {roas_cap}x cap for {"ecom" if is_ecom else "lead gen"}')
    
    # 3. SPEND FLOOR CHECK (skip for approved low-budget studies)
    low_budget_slugs = ['medical-document-platform', 'medical-treatment-nm', 'medical-clinic-phoenix']
    is_low_budget_approved = any(s in fname for s in low_budget_slugs)
    for i, spend in enumerate(spends):
        if spend < 4500 and not is_low_budget_approved:  # Allow slight variance below $5K
            issues.append(f'Month {i+1} spend ${spend:,} below $5K minimum')
    
    # 4. DEAL VALUE SANITY CHECK
    if deals and revenues:
        total_deals = sum(deals)
        total_rev = sum(revenues)
        if total_deals > 0 and not is_ecom:
            avg_deal = total_rev / total_deals
            # Flag absurdly low or high deal values
            if avg_deal < 50 and 'Food' not in industry and 'Restaurant' not in industry:
                issues.append(f'AVG DEAL VALUE ${avg_deal:,.0f} is suspiciously low for {industry}')
            elif avg_deal > 200000:
                issues.append(f'AVG DEAL VALUE ${avg_deal:,.0f} is suspiciously high for {industry}')
    
    # 5. CPL SANITY CHECK (non-ecom only)
    if not is_ecom and total_leads > 0:
        avg_cpl = total_spend / total_leads
        if avg_cpl < 5:
            issues.append(f'CPL ${avg_cpl:.0f} is suspiciously low for lead gen')
        elif avg_cpl > 500 and 'B2B' not in industry and 'SaaS' not in industry and 'Enterprise' not in industry:
            issues.append(f'CPL ${avg_cpl:.0f} is suspiciously high for {industry}')
    
    # 6. UNIFORMITY CHECK (deals/qualified ratio shouldn't be identical across months)
    if qualified and deals:
        n = min(len(qualified), len(deals))
        ratios = []
        for i in range(n):
            if qualified[i] > 0:
                ratios.append(round(deals[i] / qualified[i], 3))
        if len(ratios) >= 4:
            from collections import Counter
            counts = Counter(ratios)
            most_common_count = counts.most_common(1)[0][1]
            if most_common_count > len(ratios) * 0.5:
                issues.append(f'UNIFORMITY: deals/qualified ratio is identical for {most_common_count}/{len(ratios)} months — looks fake')
    
    return issues


def main():
    parser = argparse.ArgumentParser(description='Realism Validator (Bullshit Thermometer)')
    parser.add_argument('--slug', help='Check a specific slug only')
    parser.add_argument('--v2-only', action='store_true', help='Only check V2 curated studies (93 files)')
    parser.add_argument('--all', action='store_true', help='Check all files (default)')
    parser.add_argument('--skip-spend-floor', action='store_true', help='Skip the $5K minimum spend floor check (for approved sub-$5K scaling studies)')
    args = parser.parse_args()
    
    if args.slug:
        files = [os.path.join(DATA_DIR, f'{args.slug}.ts')]
    elif args.v2_only:
        # Load V2 selections
        v2_path = os.path.join(os.path.dirname(DATA_DIR), '..', 'tmp', 'v2-consolidated.json')
        # Try multiple locations
        for p in ['/tmp/v2-consolidated.json', os.path.join(DATA_DIR, '..', '..', 'v2-consolidated.json')]:
            if os.path.exists(p):
                v2_path = p
                break
        import json
        with open(v2_path) as f:
            consolidated = json.load(f)
        v2_slugs = set()
        for v, studies in consolidated.items():
            for s in studies:
                v2_slugs.add(s['slug'])
        files = [os.path.join(DATA_DIR, f'{slug}.ts') for slug in sorted(v2_slugs)]
        files = [f for f in files if os.path.exists(f)]
    else:
        files = sorted(glob.glob(os.path.join(DATA_DIR, '*.ts')))
        files = [f for f in files if not f.endswith(('index.ts', 'types.ts', 'v2-index.ts'))]
    
    total = 0
    failed = 0
    all_issues = []
    
    for filepath in files:
        if not os.path.exists(filepath):
            print(f"❌ {os.path.basename(filepath)} — FILE NOT FOUND")
            failed += 1
            continue
        
        total += 1
        issues = validate_file(filepath)
        if args.skip_spend_floor:
            issues = [i for i in issues if 'below $5K minimum' not in i]
        
        if issues:
            failed += 1
            fname = os.path.basename(filepath)
            all_issues.append((fname, issues))
    
    print(f"\n{'='*60}")
    print(f"REALISM VALIDATOR — Bullshit Thermometer")
    print(f"{'='*60}")
    
    if all_issues:
        print(f"\n🚨 {failed} of {total} files FAILED realism check:\n")
        for fname, issues in all_issues:
            print(f"❌ {fname}")
            for issue in issues:
                print(f"   → {issue}")
            print()
        print(f"DEPLOYMENT BLOCKED — fix the above issues first.")
        sys.exit(1)
    else:
        print(f"\n✅ All {total} case studies passed realism check!")
        print(f"   Every metric would survive expert scrutiny.")
        sys.exit(0)


if __name__ == '__main__':
    main()
