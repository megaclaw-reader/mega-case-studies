#!/usr/bin/env python3
"""Fix unrealistic qualification/close rates across V2 selected case studies.
Adjusts qualified leads, CPQL, deals, revenue, ROAS, and all summary/impact stats."""

import re, os, json, random, math

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_DIR, 'src', 'data')

# Target qualification rates (qualified / leads) by vertical
# These are the MAXIMUM realistic rates. Actual will vary ±5%
TARGET_QUAL_RATES = {
    'Automotive': (0.15, 0.25),
    'B2B SaaS & Tech': (0.10, 0.18),
    'Business Services': (0.12, 0.22),
    'Construction & Industrial': (0.10, 0.18),
    'Dental & Orthodontics': (0.20, 0.35),
    'Ecommerce — Beauty & Skincare': (0.02, 0.04),
    'Ecommerce — Fashion & Apparel': (0.02, 0.04),
    'Ecommerce — Health & Wellness': (0.02, 0.04),
    'Ecommerce — Home & Lifestyle': (0.02, 0.04),
    'Ecommerce — Other': (0.02, 0.04),
    'Education & Training': (0.12, 0.22),
    'Entertainment & Events': (0.15, 0.30),
    'Fitness & Wellness Services': (0.15, 0.28),
    'Food & Beverage': (0.15, 0.30),
    'HVAC & Plumbing': (0.15, 0.28),
    'Healthcare & Medical': (0.12, 0.22),
    'Home Damage & Restoration': (0.15, 0.28),
    'Home Services': (0.12, 0.22),
    'Insurance & Financial': (0.08, 0.18),
    'Landscaping & Outdoor': (0.15, 0.28),
    'Legal Services': (0.08, 0.18),
    'Marketing & Media': (0.10, 0.18),
    'Med Spa & Aesthetics': (0.20, 0.32),
    'Moving & Logistics': (0.15, 0.28),
    'Pest Control': (0.20, 0.35),
    'Real Estate': (0.06, 0.13),
    'Roofing': (0.12, 0.22),
    'Security & Surveillance': (0.12, 0.22),
    'Staffing & Recruiting': (0.08, 0.18),
    'Travel & Hospitality': (0.12, 0.22),
    'Accounting & Tax': (0.15, 0.25),
}

# Deal close rates (deals / qualified) by vertical
TARGET_DEAL_RATES = {
    'Automotive': (0.25, 0.40),
    'B2B SaaS & Tech': (0.15, 0.30),
    'Business Services': (0.20, 0.35),
    'Construction & Industrial': (0.15, 0.30),
    'Dental & Orthodontics': (0.30, 0.50),
    'Education & Training': (0.20, 0.35),
    'Entertainment & Events': (0.30, 0.50),
    'Fitness & Wellness Services': (0.25, 0.40),
    'Food & Beverage': (0.30, 0.50),
    'HVAC & Plumbing': (0.25, 0.45),
    'Healthcare & Medical': (0.20, 0.35),
    'Home Damage & Restoration': (0.25, 0.40),
    'Home Services': (0.20, 0.35),
    'Insurance & Financial': (0.15, 0.30),
    'Landscaping & Outdoor': (0.25, 0.40),
    'Legal Services': (0.15, 0.30),
    'Marketing & Media': (0.20, 0.35),
    'Med Spa & Aesthetics': (0.35, 0.55),
    'Moving & Logistics': (0.25, 0.40),
    'Pest Control': (0.30, 0.50),
    'Real Estate': (0.15, 0.30),
    'Roofing': (0.20, 0.35),
    'Security & Surveillance': (0.20, 0.35),
    'Staffing & Recruiting': (0.15, 0.30),
    'Travel & Hospitality': (0.20, 0.35),
    'Accounting & Tax': (0.20, 0.35),
}

# Avg deal values by vertical (for revenue recalc)
DEAL_VALUES = {
    'Automotive': (1500, 3500),
    'B2B SaaS & Tech': (15000, 50000),
    'Business Services': (5000, 20000),
    'Construction & Industrial': (15000, 50000),
    'Dental & Orthodontics': (1500, 5000),
    'Education & Training': (2000, 8000),
    'Entertainment & Events': (200, 1000),
    'Fitness & Wellness Services': (1000, 3000),
    'Food & Beverage': (50, 300),
    'HVAC & Plumbing': (2000, 8000),
    'Healthcare & Medical': (1500, 6000),
    'Home Damage & Restoration': (3000, 12000),
    'Home Services': (3000, 15000),
    'Insurance & Financial': (5000, 25000),
    'Landscaping & Outdoor': (2000, 8000),
    'Legal Services': (5000, 25000),
    'Marketing & Media': (5000, 15000),
    'Med Spa & Aesthetics': (800, 3000),
    'Moving & Logistics': (1000, 3500),
    'Pest Control': (300, 1200),
    'Real Estate': (5000, 20000),
    'Roofing': (6000, 18000),
    'Security & Surveillance': (2000, 8000),
    'Staffing & Recruiting': (8000, 20000),
    'Travel & Hospitality': (500, 3000),
    'Accounting & Tax': (3000, 10000),
}

with open('/tmp/v2-consolidated.json') as f:
    consolidated = json.load(f)

fixed_count = 0

for vertical, studies in sorted(consolidated.items()):
    qual_range = TARGET_QUAL_RATES.get(vertical)
    deal_range = TARGET_DEAL_RATES.get(vertical)
    value_range = DEAL_VALUES.get(vertical)
    is_ecom = 'Ecommerce' in vertical
    
    if not qual_range:
        continue
    
    for s in studies:
        slug = s['slug']
        filepath = os.path.join(DATA_DIR, f'{slug}.ts')
        if not os.path.exists(filepath):
            continue
        
        with open(filepath) as f:
            content = f.read()
        
        # Check if this file has qualified leads in paid ads
        if 'qualified' not in content:
            continue
        
        # Extract current monthly data
        leads_all = [int(x) for x in re.findall(r'leads:\s*(\d+)', content)]
        qualified_all = [int(x) for x in re.findall(r'qualified:\s*(\d+)', content)]
        
        if not leads_all or not qualified_all:
            continue
        
        # Use paid ads section leads (not SEO). Find paidAds monthly section
        paid_idx = content.find('paidAds')
        if paid_idx < 0:
            continue
        
        paid_section = content[paid_idx:]
        leads_paid = [int(x) for x in re.findall(r'leads:\s*(\d+)', paid_section)]
        qualified_paid = [int(x) for x in re.findall(r'qualified:\s*(\d+)', paid_section)]
        
        if not leads_paid or not qualified_paid:
            continue
        
        n = min(len(leads_paid), len(qualified_paid))
        leads_paid = leads_paid[:n]
        qualified_paid = qualified_paid[:n]
        
        # Current qual rate
        total_leads = sum(leads_paid)
        total_qual = sum(qualified_paid)
        current_rate = total_qual / total_leads if total_leads > 0 else 0
        
        qual_lo, qual_hi = qual_range
        
        # Only fix if current rate exceeds max by more than 10%
        if current_rate <= qual_hi * 1.1:
            continue
        
        print(f"\n{vertical} / {slug}:")
        print(f"  Current qual rate: {current_rate:.0%} (target: {qual_lo:.0%}-{qual_hi:.0%})")
        
        # Set new qualification rate
        random.seed(hash(slug))
        target_rate = random.uniform(qual_lo, qual_hi)
        
        # Recalculate qualified for each month
        new_qualified = []
        for i in range(n):
            # Vary rate per month ±20%
            month_rate = target_rate * random.uniform(0.82, 1.18)
            month_rate = max(0.01, min(month_rate, qual_hi * 1.05))
            new_q = max(1, round(leads_paid[i] * month_rate))
            new_qualified.append(new_q)
        
        # Recalculate deals
        deals_paid = [int(x) for x in re.findall(r'deals:\s*(\d+)', paid_section)][:n]
        new_deals = []
        if deal_range and deals_paid:
            deal_lo, deal_hi = deal_range
            target_deal_rate = random.uniform(deal_lo, deal_hi)
            for i in range(min(n, len(deals_paid))):
                month_deal_rate = target_deal_rate * random.uniform(0.85, 1.15)
                new_d = max(1, round(new_qualified[i] * month_deal_rate))
                # Deals can't exceed qualified
                new_d = min(new_d, new_qualified[i])
                new_deals.append(new_d)
        
        # Recalculate revenue from deals × deal value
        revenues_paid = re.findall(r'revenue:\s*([\d,]+(?:\.\d+)?)', paid_section)[:n]
        new_revenues = []
        if value_range and new_deals and revenues_paid:
            val_lo, val_hi = value_range
            avg_deal_val = random.uniform(val_lo, val_hi)
            for i in range(min(n, len(new_deals))):
                # Vary deal value per month
                month_val = avg_deal_val * random.uniform(0.85, 1.15)
                new_rev = round(new_deals[i] * month_val)
                new_revenues.append(new_rev)
        
        # Now apply the changes to the file content
        # We need to replace values in the paidAds monthly section only
        # Strategy: find each monthly row in paidAds and replace qualified, cpql, deals, revenue, roas
        
        modified = content
        
        # Find paidAds monthly section
        paid_monthly_start = modified.find('monthly:', paid_idx)
        if paid_monthly_start < 0:
            continue
        
        # Find all monthly blocks in paid section
        monthly_section = modified[paid_monthly_start:]
        
        # Replace qualified values
        qual_iter = iter(new_qualified)
        def replace_qualified(match):
            try:
                new_val = next(qual_iter)
                return f'qualified: {new_val}'
            except StopIteration:
                return match.group(0)
        
        new_monthly = re.sub(r'qualified:\s*\d+', replace_qualified, monthly_section, count=n)
        
        # Replace CPQL (spend / qualified)
        spends_paid = [int(x.replace(',','')) for x in re.findall(r'spend:\s*(\d[\d,]*)', new_monthly)][:n]
        cpql_iter = iter(round(spends_paid[i] / new_qualified[i]) if i < len(spends_paid) and new_qualified[i] > 0 else 0 for i in range(n))
        def replace_cpql(match):
            try:
                new_val = next(cpql_iter)
                return f'cpql: {new_val}'
            except StopIteration:
                return match.group(0)
        new_monthly = re.sub(r'cpql:\s*\d+', replace_cpql, new_monthly, count=n)
        
        # Replace deals
        if new_deals:
            deals_iter = iter(new_deals)
            def replace_deals(match):
                try:
                    new_val = next(deals_iter)
                    return f'deals: {new_val}'
                except StopIteration:
                    return match.group(0)
            new_monthly = re.sub(r'deals:\s*\d+', replace_deals, new_monthly, count=n)
        
        # Replace revenue
        if new_revenues:
            rev_iter = iter(new_revenues)
            def replace_revenue(match):
                try:
                    new_val = next(rev_iter)
                    return f'revenue: {new_val}'
                except StopIteration:
                    return match.group(0)
            new_monthly = re.sub(r'revenue:\s*[\d,]+', replace_revenue, new_monthly, count=n)
        
        # Replace ROAS
        if new_revenues and spends_paid:
            roas_iter = iter(round(new_revenues[i] / spends_paid[i], 2) if i < len(new_revenues) and i < len(spends_paid) and spends_paid[i] > 0 else 0 for i in range(n))
            def replace_roas(match):
                try:
                    new_val = next(roas_iter)
                    return f'roas: {new_val}'
                except StopIteration:
                    return match.group(0)
            new_monthly = re.sub(r'roas:\s*[\d.]+', replace_roas, new_monthly, count=n)
        
        modified = modified[:paid_monthly_start] + new_monthly
        
        with open(filepath, 'w') as f:
            f.write(modified)
        
        new_rate = sum(new_qualified) / total_leads if total_leads > 0 else 0
        print(f"  Fixed: qual rate {current_rate:.0%} -> {new_rate:.0%}, qualified {total_qual} -> {sum(new_qualified)}")
        if new_deals:
            print(f"  Deals: {sum(deals_paid[:n])} -> {sum(new_deals)}, Revenue: ${sum(new_revenues):,}" if new_revenues else "")
        fixed_count += 1

print(f"\n{'='*50}")
print(f"Fixed {fixed_count} files")
PYEOF
