#!/usr/bin/env python3
"""
Industry-specific validation for case studies.
Ensures revenue logic matches the business model for each industry.
RUN THIS BEFORE EVERY DEPLOY. Failures block deployment.
"""

import json, os, re, sys, glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
RULES_PATH = os.path.join(SCRIPT_DIR, "industry-rules.json")
DATA_DIR = os.path.join(SCRIPT_DIR, "..", "src", "data")

def load_rules():
    with open(RULES_PATH) as f:
        return json.load(f)

def extract_ts_field(content, field):
    """Extract a simple string field from TS file."""
    m = re.search(rf'{field}:\s*["\']([^"\']+)["\']', content)
    return m.group(1) if m else None

def extract_monthly_data(content):
    """Extract monthly paid ads rows from TS data file."""
    rows = []
    # Find paidAds section first, then get its monthly array
    paid_section = re.search(r'paidAds:\s*\{', content)
    if not paid_section:
        return rows
    paid_content = content[paid_section.start():]
    
    monthly_match = re.search(r'monthly:\s*\[([^\]]*(?:\[[^\]]*\][^\]]*)*)\]', paid_content, re.DOTALL)
    if not monthly_match:
        return rows
    
    monthly_text = monthly_match.group(1)
    # Find each row object
    row_matches = re.finditer(r'\{([^}]+)\}', monthly_text)
    for rm in row_matches:
        row_text = rm.group(1)
        row = {}
        for field in ['month', 'spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas']:
            fm = re.search(rf'{field}:\s*(["\']?)([^,\s}}]+)\1', row_text)
            if fm:
                val = fm.group(2).strip('"\'')
                try:
                    row[field] = float(val)
                except ValueError:
                    row[field] = val
        if 'spend' in row:
            rows.append(row)
    return rows

def extract_column_labels(content):
    """Check if file has columnLabels defined."""
    return 'columnLabels' in content and ('Sessions' in content or 'Cost/Visit' in content or 'Add to Cart' in content)

def extract_hero_stats(content):
    """Extract hero stat values."""
    stats = {}
    hero_match = re.search(r'heroStats:\s*\[(.*?)\]', content, re.DOTALL)
    if hero_match:
        for sm in re.finditer(r'\{[^}]*label:\s*["\']([^"\']+)["\'][^}]*value:\s*["\']([^"\']+)["\'][^}]*\}', hero_match.group(1)):
            stats[sm.group(1)] = sm.group(2)
    return stats

def check_wealth_management(slug, content, monthly_data, rules):
    """Validate wealth management case studies."""
    errors = []
    model = rules["models"]["wealth_management"]
    fee_pct = model["fee_percentage"]
    tolerance = model["tolerance"]
    
    # Calculate total revenue from monthly data
    total_revenue = sum(_num(r, 'revenue') for r in monthly_data)
    total_deals = sum(_num(r, 'deals') for r in monthly_data)
    
    if total_deals == 0:
        errors.append(f"No deals found in monthly data")
        return errors
    
    # Extract AUM from hero stats or headline
    hero = extract_hero_stats(content)
    headline = extract_ts_field(content, 'headline') or ''
    
    aum_value = None
    # Check hero stats for AUM
    for label, val in hero.items():
        if 'AUM' in label.upper():
            # Parse value like "$78.1" with unit "M"
            num_match = re.search(r'[\$]?([\d,.]+)', val)
            if num_match:
                aum_value = float(num_match.group(1).replace(',', ''))
                # Check if unit is M (millions)
                unit_match = re.search(r'unit:\s*["\']([^"\']*)["\']', content)
                # Look near the AUM hero stat
                if 'M' in val or any('M' in str(hero.get(k, '')) for k in hero):
                    aum_value *= 1_000_000
    
    # Also try to find AUM in headline
    if aum_value is None:
        aum_match = re.search(r'\$([\d,.]+)\s*[Mm](?:illion)?\s+(?:in\s+)?(?:new\s+)?AUM', headline)
        if aum_match:
            aum_value = float(aum_match.group(1).replace(',', '')) * 1_000_000
    
    if aum_value and aum_value > 0:
        expected_revenue = aum_value * fee_pct
        actual_revenue = total_revenue
        
        if actual_revenue > 0:
            ratio = actual_revenue / expected_revenue
            if abs(ratio - 1.0) > tolerance:
                errors.append(
                    f"REVENUE/AUM MISMATCH: Total revenue ${actual_revenue:,.0f} should be ~1% of AUM ${aum_value:,.0f} = ${expected_revenue:,.0f}. "
                    f"Actual is {ratio:.2f}x expected (tolerance: ±{tolerance*100:.0f}%)"
                )
    
    # Check that avg AUM per client is in reasonable HNW range
    if aum_value and total_deals > 0:
        avg_aum = aum_value / total_deals
        if avg_aum < 100_000:
            errors.append(f"Avg AUM per client ${avg_aum:,.0f} is too low for HNW wealth management (min $100K)")
        if avg_aum > 10_000_000:
            errors.append(f"Avg AUM per client ${avg_aum:,.0f} is unrealistically high (max $10M typical)")
    
    return errors

def _num(row, k, d=0):
    v = row.get(k, d)
    try: return float(v)
    except (ValueError, TypeError): return d

def check_ecommerce(slug, content, monthly_data, rules):
    """Validate ecommerce case studies."""
    errors = []
    
    has_labels = extract_column_labels(content)
    if not has_labels:
        errors.append("ECOM MISSING COLUMN LABELS: Must use columnLabels to rename leads→Sessions, cpl→Cost/Visit, qualified→Add to Carts, cpql→Cost/Cart")
    
    headline = extract_ts_field(content, 'headline') or ''
    subheadline = extract_ts_field(content, 'subheadline') or ''
    combined_text = headline + ' ' + subheadline
    
    bad_terms = []
    for term in ['qualified lead', 'cost per lead', ' CPL ', ' CPQL ', 'lead generation']:
        if term.lower() in combined_text.lower():
            bad_terms.append(term.strip())
    if bad_terms:
        errors.append(f"ECOM USES LEAD GEN LANGUAGE in headline/subheadline: {', '.join(bad_terms)}")
    
    for row in monthly_data:
        orders = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        if orders > 0 and revenue > 0:
            aov = revenue / orders
            if aov < 5:
                errors.append(f"Month {month}: AOV ${aov:.2f} is impossibly low")
            if aov > 5000:
                errors.append(f"Month {month}: AOV ${aov:.2f} is suspiciously high for standard ecom")
    
    for row in monthly_data:
        sessions = _num(row, 'leads')
        carts = _num(row, 'qualified')
        month = row.get('month', '?')
        if sessions > 0 and carts > 0:
            rate = carts / sessions
            if rate > 0.25:
                errors.append(f"Month {month}: Cart rate {rate:.1%} is too high (max ~20%)")
            if rate < 0.01:
                errors.append(f"Month {month}: Cart rate {rate:.1%} is too low (min ~1%)")
    
    nov_rows = [r for r in monthly_data if 'Nov' in str(r.get('month', ''))]
    if nov_rows:
        oct_rows = [r for r in monthly_data if 'Oct' in str(r.get('month', ''))]
        if oct_rows:
            nov_rev = _num(nov_rows[0], 'revenue')
            oct_rev = _num(oct_rows[0], 'revenue')
            if oct_rev > 0 and nov_rev > 0 and nov_rev <= oct_rev:
                errors.append(f"November revenue (${nov_rev:,.0f}) should exceed October (${oct_rev:,.0f}) — Black Friday/Cyber Monday is mandatory for ecom")
    
    return errors

def check_lead_gen(slug, content, monthly_data, rules, model_key):
    """Validate lead gen case studies (services and professional)."""
    errors = []
    
    for row in monthly_data:
        leads = _num(row, 'leads')
        qualified = _num(row, 'qualified')
        deals = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        spend = _num(row, 'spend')
        cpl = _num(row, 'cpl')
        cpql = _num(row, 'cpql')
        month = row.get('month', '?')
        
        # Qualified must be less than leads
        if qualified > leads:
            errors.append(f"Month {month}: Qualified ({qualified}) > Leads ({leads})")
        
        # Deals must be less than or equal to qualified
        if deals > qualified:
            errors.append(f"Month {month}: Deals ({deals}) > Qualified ({qualified})")
        
        # CPL must be less than CPQL
        if cpl > 0 and cpql > 0 and cpl >= cpql:
            errors.append(f"Month {month}: CPL (${cpl}) >= CPQL (${cpql}) — CPQL must always be higher")
        
        # Revenue per deal sanity check
        if deals > 0 and revenue > 0:
            rev_per_deal = revenue / deals
            if rev_per_deal < 10:
                errors.append(f"Month {month}: Revenue/deal ${rev_per_deal:.0f} is impossibly low")
    
    return errors

def check_mortgage(slug, content, monthly_data, rules):
    """Validate mortgage/lending case studies."""
    errors = []
    
    for row in monthly_data:
        deals = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        
        if deals > 0 and revenue > 0:
            rev_per_loan = revenue / deals
            # Origination fee is typically $2K-$15K per loan
            if rev_per_loan < 1000:
                errors.append(f"Month {month}: Revenue/loan ${rev_per_loan:,.0f} is too low for mortgage origination")
            if rev_per_loan > 25000:
                errors.append(f"Month {month}: Revenue/loan ${rev_per_loan:,.0f} is suspiciously high for mortgage origination")
    
    return errors

def check_real_estate(slug, content, monthly_data, rules):
    """Validate real estate case studies."""
    errors = []
    
    for row in monthly_data:
        deals = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        
        if deals > 0 and revenue > 0:
            commission_per_deal = revenue / deals
            # Real estate commission per deal: $5K-$50K typically
            if commission_per_deal < 2000:
                errors.append(f"Month {month}: Commission/deal ${commission_per_deal:,.0f} is too low for real estate")
            if commission_per_deal > 100000:
                errors.append(f"Month {month}: Commission/deal ${commission_per_deal:,.0f} is unrealistically high")
    
    return errors

def validate_file(filepath, rules):
    """Validate a single case study file against industry rules."""
    slug = os.path.basename(filepath).replace('.ts', '')
    if slug in ('types', 'index'):
        return []
    
    with open(filepath) as f:
        content = f.read()
    
    industry = extract_ts_field(content, 'industry')
    if not industry:
        return [f"{slug}: Could not extract industry field"]
    
    # Find the model for this industry
    model_key = rules["industry_to_model"].get(industry)
    
    # Try fuzzy match if exact match fails
    if not model_key:
        for ind, mk in rules["industry_to_model"].items():
            if ind.lower() in industry.lower() or industry.lower() in ind.lower():
                model_key = mk
                break
    
    if not model_key:
        # Check if it's an ecom variant by looking at column labels
        if extract_column_labels(content):
            model_key = "ecommerce"
        else:
            return [f"{slug}: Industry '{industry}' not mapped to any model — ADD IT TO industry-rules.json"]
    
    # Extract monthly data (first monthly array = paid ads)
    monthly_data = extract_monthly_data(content)
    
    errors = []
    
    if model_key == "wealth_management":
        errors.extend(check_wealth_management(slug, content, monthly_data, rules))
    elif model_key == "ecommerce":
        errors.extend(check_ecommerce(slug, content, monthly_data, rules))
    elif model_key in ("lead_gen_services", "lead_gen_professional"):
        errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    elif model_key == "mortgage_lending":
        errors.extend(check_mortgage(slug, content, monthly_data, rules))
        errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    elif model_key == "real_estate":
        errors.extend(check_real_estate(slug, content, monthly_data, rules))
        errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    
    # Universal checks
    for row in monthly_data:
        spend = _num(row, 'spend')
        month = row.get('month', '?')
        if spend < 1000:
            errors.append(f"Month {month}: Spend ${spend:,.0f} is unrealistically low")
    
    return [f"{slug}: {e}" for e in errors]

def main():
    rules = load_rules()
    
    # Parse arguments
    target_slug = None
    for arg in sys.argv[1:]:
        if arg.startswith('--slug='):
            target_slug = arg.split('=', 1)[1]
        elif arg.startswith('--slug'):
            idx = sys.argv.index(arg)
            if idx + 1 < len(sys.argv):
                target_slug = sys.argv[idx + 1]
    
    files = sorted(glob.glob(os.path.join(DATA_DIR, "*.ts")))
    all_errors = []
    checked = 0
    
    for f in files:
        slug = os.path.basename(f).replace('.ts', '')
        if slug in ('types', 'index'):
            continue
        if target_slug and slug != target_slug:
            continue
        
        errors = validate_file(f, rules)
        if errors:
            all_errors.extend(errors)
        checked += 1
    
    if all_errors:
        print(f"\n❌ INDUSTRY VALIDATION FAILED — {len(all_errors)} issue(s) found:\n")
        for e in all_errors:
            print(f"  ⚠️  {e}")
        print(f"\nChecked {checked} case studies.")
        sys.exit(1)
    else:
        print(f"\n✅ All {checked} case studies passed industry validation!\n")
        sys.exit(0)

if __name__ == "__main__":
    main()
