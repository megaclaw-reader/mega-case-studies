#!/usr/bin/env python3
"""
Industry-specific validation for case studies.
Ensures revenue logic, CPL ranges, growth rates, seasonality, and deal values
all match the business model for each industry.
RUN THIS BEFORE EVERY DEPLOY. Failures block deployment.

Added Mar 12 2026 — after Julien caught wealth mgmt revenue not matching AUM.
Enhanced same day — CPL ranges, growth caps, budget-to-lead ratios, seasonality.
"""

import json, os, re, sys, glob, math

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
RULES_PATH = os.path.join(SCRIPT_DIR, "industry-rules.json")
DATA_DIR = os.path.join(SCRIPT_DIR, "..", "src", "data")

# ─── Industry-specific CPL ranges (spend/leads) ───
# These are realistic ranges for what businesses actually pay per lead/session.
# For ecom, this is cost-per-session (much lower). For services, cost-per-lead.
CPL_RANGES = {
    # Lead gen services — local, lower competition
    "painting":         (20, 120),
    "dental":           (15, 120),
    "hvac":             (20, 150),
    "roofing":          (25, 200),
    "plumbing":         (15, 120),
    "landscaping":      (15, 100),
    "cleaning":         (10, 80),
    "moving":           (15, 120),
    "garage_door":      (15, 100),
    "home_improvement":  (20, 150),
    "home_renovation":   (25, 200),
    "general_contracting": (25, 200),
    "flooring":          (20, 150),
    "drywall":           (15, 100),
    "auto_repair":       (15, 100),
    "car_wash":          (5, 50),
    "solar":             (30, 250),
    "pool":              (30, 500),
    "window":            (20, 150),
    "beauty_spa":        (10, 80),
    "med_spa":           (20, 150),
    "gym_fitness":       (10, 80),
    "senior_care":       (25, 200),
    "restoration":       (20, 200),
    "interior_design":   (20, 150),
    "event":             (20, 500),
    "motorcycle_boat":   (15, 120),
    "print_shop":        (10, 80),
    "wedding_photo":     (15, 120),
    "automotive_dealer": (15, 150),
    "rv_dealer":         (15, 150),
    "rental_car":        (30, 80),
    # Lead gen professional — higher competition, expensive keywords
    "legal":             (50, 500),
    "personal_injury":   (75, 600),
    "immigration_law":   (30, 300),
    "business_litigation": (75, 500),
    "accounting":        (30, 250),
    "tax":               (30, 250),
    "insurance":         (25, 300),
    "it_services":       (30, 300),
    "cybersecurity":     (40, 400),
    "recruiting":        (25, 200),
    "coaching":          (20, 200),
    "education":         (15, 200),
    "isp":               (20, 150),
    "safety_training":   (30, 350),
    "construction":      (30, 400),
    "building_materials": (25, 300),
    "alarm_surveillance": (30, 150),
    "healthcare_equip":  (30, 300),
    # Wealth management / financial
    "wealth_mgmt":       (100, 2500),
    "financial_services": (75, 1500),
    "venture_capital":   (100, 2000),
    "real_estate":       (20, 300),
    "commercial_re":     (30, 400),
    "mortgage":          (20, 250),
    # Healthcare / medical
    "healthcare":        (20, 200),
    "telemedicine":      (15, 150),
    "mental_health":     (20, 200),
    "regen_medicine":    (30, 250),
    # SaaS
    "saas":              (30, 500),
    # Ecom — cost per SESSION (not per lead)
    "ecom":              (0.20, 5.00),
    "sustainable_luxury": (1.50, 4.00),
    # Newsletter / subscription — cost per subscriber
    "newsletter":        (1, 50),
}

# Map industry strings to CPL category
def _cpl_category(industry, model_key):
    """Map an industry string to a CPL_RANGES key."""
    ind = industry.lower()
    if model_key == "ecommerce":
        return "ecom"
    # Try specific matches
    # Order matters — more specific matches first
    mappings = [
        ("painting", "painting"), ("dental", "dental"), ("hvac", "hvac"), ("roof", "roofing"),
        ("plumb", "plumbing"), ("commercial landscap", "construction"),
        ("landscap", "landscaping"), ("clean", "cleaning"),
        ("moving", "moving"), ("garage", "garage_door"),
        ("home improve", "home_improvement"), ("home renov", "home_renovation"),
        ("general contract", "general_contracting"),
        ("floor", "flooring"), ("drywall", "drywall"), ("auto repair", "auto_repair"),
        ("car wash", "car_wash"), ("detailing", "car_wash"),
        ("solar", "solar"), ("pool cover", "building_materials"),
        ("swimming pool", "pool"), ("pool", "pool"),
        ("window", "window"), ("beauty spa", "beauty_spa"), ("wax", "beauty_spa"),
        ("med spa", "med_spa"), ("medspa", "med_spa"),
        ("gym", "gym_fitness"), ("private training", "gym_fitness"),
        ("senior care", "senior_care"), ("restor", "restoration"),
        ("interior design", "interior_design"), ("event", "event"),
        ("motorcycle", "motorcycle_boat"), ("boat", "motorcycle_boat"),
        ("print shop", "print_shop"), ("print", "print_shop"),
        ("wedding", "wedding_photo"), ("photo", "wedding_photo"),
        ("rv ", "rv_dealer"), ("mobile home", "rv_dealer"),
        ("dealership", "automotive_dealer"),
        ("alarm", "alarm_surveillance"), ("surveillance", "alarm_surveillance"), ("security system", "alarm_surveillance"),
        ("rental car", "rental_car"), ("car rental", "rental_car"),
        ("personal injury", "personal_injury"), ("immigration", "immigration_law"),
        ("litigation", "business_litigation"),
        ("legal", "legal"), ("law", "legal"),
        ("account", "accounting"),
        ("commercial tax", "tax"), ("tax planning", "tax"), ("tax", "tax"),
        ("commercial insurance", "insurance"), ("insurance", "insurance"),
        ("it service", "it_services"), ("managed service", "it_services"),
        ("cyber", "cybersecurity"),
        ("recruit", "recruiting"),
        ("business coach", "coaching"), ("coach", "coaching"),
        ("safety training", "safety_training"), ("osha", "safety_training"),
        ("educat", "education"),
        ("internet service", "isp"),
        ("commercial construct", "construction"),
        ("construction", "construction"),
        ("building material", "building_materials"), ("building product", "building_materials"),
        ("exterior", "building_materials"), ("membrane", "building_materials"),
        ("healthcare equip", "healthcare_equip"), ("medical device", "healthcare_equip"),
        ("wealth", "wealth_mgmt"), ("venture capital", "venture_capital"),
        ("financial", "financial_services"),
        ("newsletter", "newsletter"),
        ("commercial real", "commercial_re"),
        ("real estate", "real_estate"),  # newsletters have unique economics
        ("mortgage", "mortgage"), ("lending", "mortgage"),
        ("telemedicine", "telemedicine"), ("telehealth", "telemedicine"),
        ("mental health", "mental_health"),
        ("regenerative", "regen_medicine"), ("functional medicine", "regen_medicine"),
        ("yoga", "gym_fitness"), ("pilates", "gym_fitness"),
        ("self improvement", "education"), ("subscription", "education"),
        ("peptide", "healthcare"),
        ("healthcare", "healthcare"), ("medical", "healthcare"),
        ("wellness", "healthcare"),
        ("sustainable luxury", "sustainable_luxury"),
        ("saas", "saas"), ("platform", "saas"),
        ("fitness", "gym_fitness"),
    ]
    for substr, cat in mappings:
        if substr in ind:
            return cat
    return None

# ─── Deal value ranges by industry ───
DEAL_VALUE_RANGES = {
    "painting": (2000, 10000),
    "dental": (300, 5000),
    "hvac": (2000, 15000),
    "roofing": (5000, 30000),
    "plumbing": (300, 6000),
    "landscaping": (1500, 20000),
    "cleaning": (100, 3000),
    "moving": (1000, 10000),
    "garage_door": (500, 4000),
    "home_improvement": (3000, 60000),
    "home_renovation": (5000, 80000),
    "general_contracting": (8000, 120000),
    "flooring": (2000, 20000),
    "drywall": (500, 10000),
    "auto_repair": (300, 4000),
    "car_wash": (20, 300),
    "solar": (10000, 45000),
    "pool": (15000, 100000),
    "window": (3000, 25000),
    "beauty_spa": (50, 2500),
    "med_spa": (200, 5000),
    "gym_fitness": (100, 2000),
    "senior_care": (2000, 15000),
    "restoration": (2000, 30000),
    "interior_design": (3000, 60000),
    "event": (3000, 60000),
    "motorcycle_boat": (300, 5000),
    "print_shop": (200, 8000),
    "wedding_photo": (1500, 10000),
    "automotive_dealer": (5000, 60000),
    "rv_dealer": (10000, 100000),
    "rental_car": (200, 1000),
    "alarm_surveillance": (2000, 8000),
    "legal": (2000, 30000),
    "personal_injury": (5000, 150000),
    "immigration_law": (2000, 20000),
    "business_litigation": (5000, 120000),
    "accounting": (1500, 20000),
    "tax": (2000, 25000),
    "insurance": (2000, 60000),
    "it_services": (3000, 60000),
    "cybersecurity": (5000, 120000),
    "recruiting": (3000, 30000),
    "coaching": (1000, 25000),
    "education": (500, 15000),
    "newsletter": (50, 10000),
    "isp": (500, 5000),
    "safety_training": (500, 25000),
    "construction": (10000, 200000),
    "building_materials": (2000, 50000),
    "healthcare_equip": (5000, 100000),
    "healthcare": (200, 5000),
    "telemedicine": (80, 400),
    "mental_health": (100, 1000),
    "regen_medicine": (1500, 15000),
    "real_estate": (3000, 60000),
    "commercial_re": (5000, 100000),
    "mortgage": (1500, 20000),
    "wealth_mgmt": (5000, 100000),
    "financial_services": (3000, 50000),
    "venture_capital": (5000, 100000),
    "saas": (2000, 150000),
    "sustainable_luxury": (150, 400),
}

# ─── Month-over-month growth cap ───
# No metric should more than 2.5x in a single month (without proportional spend increase)
MAX_MOM_GROWTH = 2.5  # 150% growth max per month
MAX_MOM_GROWTH_WITH_SPEND = 3.5  # Allow more if spend also jumped

# ─── Helpers ───
def load_rules():
    with open(RULES_PATH) as f:
        return json.load(f)

def extract_ts_field(content, field):
    m = re.search(rf'{field}:\s*["\']([^"\']+)["\']', content)
    return m.group(1) if m else None

def extract_monthly_data(content):
    rows = []
    paid_section = re.search(r'paidAds:\s*\{', content)
    if not paid_section:
        return rows
    paid_content = content[paid_section.start():]
    monthly_match = re.search(r'monthly:\s*\[([^\]]*(?:\[[^\]]*\][^\]]*)*)\]', paid_content, re.DOTALL)
    if not monthly_match:
        return rows
    monthly_text = monthly_match.group(1)
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
    return 'columnLabels' in content and ('Sessions' in content or 'Cost/Visit' in content or 'Add to Cart' in content)

def extract_hero_stats(content):
    stats = {}
    hero_match = re.search(r'heroStats:\s*\[(.*?)\]', content, re.DOTALL)
    if hero_match:
        for sm in re.finditer(r'\{[^}]*label:\s*["\']([^"\']+)["\'][^}]*value:\s*["\']([^"\']+)["\'][^}]*\}', hero_match.group(1)):
            stats[sm.group(1)] = sm.group(2)
    return stats

def _num(row, k, d=0):
    v = row.get(k, d)
    try: return float(v)
    except (ValueError, TypeError): return d


# ═══════════════════════════════════════════════════════
#  UNIVERSAL CHECKS (apply to ALL case studies)
# ═══════════════════════════════════════════════════════

def check_universal(slug, content, monthly_data, model_key, industry):
    """Checks that apply to every case study regardless of industry."""
    errors = []
    cpl_cat = _cpl_category(industry, model_key)
    
    for row in monthly_data:
        spend = _num(row, 'spend')
        month = row.get('month', '?')
        if spend < 1000:
            errors.append(f"Month {month}: Spend ${spend:,.0f} is unrealistically low")
    
    # ── CPL range check ──
    if cpl_cat and cpl_cat in CPL_RANGES:
        cpl_min, cpl_max = CPL_RANGES[cpl_cat]
        for row in monthly_data:
            cpl = _num(row, 'cpl')
            month = row.get('month', '?')
            if cpl > 0:
                if cpl < cpl_min * 0.5:  # Allow 50% below floor for flexibility
                    errors.append(f"Month {month}: CPL ${cpl:.2f} is too low for {cpl_cat} (expected ${cpl_min}-${cpl_max})")
                if cpl > cpl_max * 2.0:  # Allow 2x above ceiling
                    errors.append(f"Month {month}: CPL ${cpl:.2f} is too high for {cpl_cat} (expected ${cpl_min}-${cpl_max})")
    
    # ── Deal value range check ──
    if cpl_cat and cpl_cat in DEAL_VALUE_RANGES and model_key != "ecommerce":
        dv_min, dv_max = DEAL_VALUE_RANGES[cpl_cat]
        for row in monthly_data:
            deals = _num(row, 'deals')
            revenue = _num(row, 'revenue')
            month = row.get('month', '?')
            if deals > 0 and revenue > 0:
                rev_per_deal = revenue / deals
                if rev_per_deal < dv_min * 0.3:  # 70% below floor
                    errors.append(f"Month {month}: Revenue/deal ${rev_per_deal:,.0f} is too low for {cpl_cat} (expected ${dv_min:,}-${dv_max:,})")
                if rev_per_deal > dv_max * 2.0:  # 2x above ceiling
                    errors.append(f"Month {month}: Revenue/deal ${rev_per_deal:,.0f} is too high for {cpl_cat} (expected ${dv_min:,}-${dv_max:,})")
    
    # ── Month-over-month growth cap ──
    if len(monthly_data) >= 2:
        for i in range(1, len(monthly_data)):
            prev = monthly_data[i-1]
            curr = monthly_data[i]
            month = curr.get('month', '?')
            prev_month = prev.get('month', '?')
            
            # Check leads growth
            prev_leads = _num(prev, 'leads')
            curr_leads = _num(curr, 'leads')
            prev_spend = _num(prev, 'spend')
            curr_spend = _num(curr, 'spend')
            
            if prev_leads > 0 and curr_leads > 0:
                lead_growth = curr_leads / prev_leads
                spend_growth = curr_spend / prev_spend if prev_spend > 0 else 1
                
                # Allow more lead growth if spend also grew proportionally
                cap = MAX_MOM_GROWTH_WITH_SPEND if spend_growth > 1.3 else MAX_MOM_GROWTH
                
                if lead_growth > cap:
                    errors.append(
                        f"Month {month}: Leads jumped {lead_growth:.1f}x from {prev_month} "
                        f"({prev_leads:.0f}→{curr_leads:.0f}) — max {cap}x growth per month"
                    )
            
            # Check revenue growth (same logic)
            prev_rev = _num(prev, 'revenue')
            curr_rev = _num(curr, 'revenue')
            if prev_rev > 0 and curr_rev > 0:
                rev_growth = curr_rev / prev_rev
                spend_growth = curr_spend / prev_spend if prev_spend > 0 else 1
                cap = MAX_MOM_GROWTH_WITH_SPEND if spend_growth > 1.3 else MAX_MOM_GROWTH
                
                if rev_growth > cap:
                    errors.append(
                        f"Month {month}: Revenue jumped {rev_growth:.1f}x from {prev_month} "
                        f"(${prev_rev:,.0f}→${curr_rev:,.0f}) — max {cap}x growth per month"
                    )
    
    # ── Budget-to-lead-volume ratio ──
    # A $5K budget generating 500 leads in legal is absurd
    # Use CPL range to validate: leads should ≈ spend / avg_cpl
    if cpl_cat and cpl_cat in CPL_RANGES:
        cpl_min, cpl_max = CPL_RANGES[cpl_cat]
        for row in monthly_data:
            spend = _num(row, 'spend')
            leads = _num(row, 'leads')
            month = row.get('month', '?')
            if spend > 0 and leads > 0:
                implied_cpl = spend / leads
                # Already caught by CPL check above, but add explicit volume check
                max_plausible_leads = spend / (cpl_min * 0.3)  # Very generous lower bound
                if leads > max_plausible_leads:
                    errors.append(
                        f"Month {month}: {leads:.0f} leads on ${spend:,.0f} spend = ${implied_cpl:.2f}/lead — "
                        f"unrealistic volume for {cpl_cat} (min CPL ~${cpl_min})"
                    )
    
    # ── Spend flatness check ──
    # Budget should vary seasonally — flag if all months within 5% of each other
    if len(monthly_data) >= 6:
        spends = [_num(r, 'spend') for r in monthly_data if _num(r, 'spend') > 0]
        if spends:
            avg_spend = sum(spends) / len(spends)
            max_deviation = max(abs(s - avg_spend) / avg_spend for s in spends)
            if max_deviation < 0.05:
                errors.append(
                    f"Spend is nearly flat across all months (max {max_deviation:.1%} deviation) — "
                    f"budget should vary seasonally"
                )
    
    return errors


# ═══════════════════════════════════════════════════════
#  INDUSTRY-SPECIFIC CHECKS
# ═══════════════════════════════════════════════════════

def check_wealth_management(slug, content, monthly_data, rules):
    errors = []
    model = rules["models"]["wealth_management"]
    fee_pct = model["fee_percentage"]
    tolerance = model["tolerance"]
    
    total_revenue = sum(_num(r, 'revenue') for r in monthly_data)
    total_deals = sum(_num(r, 'deals') for r in monthly_data)
    
    if total_deals == 0:
        errors.append("No deals found in monthly data")
        return errors
    
    hero = extract_hero_stats(content)
    headline = extract_ts_field(content, 'headline') or ''
    
    aum_value = None
    for label, val in hero.items():
        if 'AUM' in label.upper():
            num_match = re.search(r'[\$]?([\d,.]+)', val)
            if num_match:
                aum_value = float(num_match.group(1).replace(',', ''))
                if 'M' in val or any('M' in str(hero.get(k, '')) for k in hero):
                    aum_value *= 1_000_000
    
    if aum_value is None:
        aum_match = re.search(r'\$([\d,.]+)\s*[Mm](?:illion)?\s+(?:in\s+)?(?:new\s+)?AUM', headline)
        if aum_match:
            aum_value = float(aum_match.group(1).replace(',', '')) * 1_000_000
    
    if aum_value and aum_value > 0:
        expected_revenue = aum_value * fee_pct
        if total_revenue > 0:
            ratio = total_revenue / expected_revenue
            if abs(ratio - 1.0) > tolerance:
                errors.append(
                    f"REVENUE/AUM MISMATCH: Total revenue ${total_revenue:,.0f} should be ~1% of AUM "
                    f"${aum_value:,.0f} = ${expected_revenue:,.0f}. "
                    f"Actual is {ratio:.2f}x expected (tolerance: ±{tolerance*100:.0f}%)"
                )
    
    if aum_value and total_deals > 0:
        avg_aum = aum_value / total_deals
        if avg_aum < 100_000:
            errors.append(f"Avg AUM per client ${avg_aum:,.0f} is too low for HNW wealth management (min $100K)")
        if avg_aum > 10_000_000:
            errors.append(f"Avg AUM per client ${avg_aum:,.0f} is unrealistically high (max $10M typical)")
    
    # Hero stats should lead with AUM
    hero_labels = list(hero.keys())
    if hero_labels and 'AUM' not in hero_labels[0].upper():
        errors.append("Hero stats should lead with AUM as the primary metric for wealth management")
    
    return errors


def check_ecommerce(slug, content, monthly_data, rules):
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
    
    # AOV checks
    aovs = []
    for row in monthly_data:
        orders = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        if orders > 0 and revenue > 0:
            aov = revenue / orders
            aovs.append(aov)
            if aov < 5:
                errors.append(f"Month {month}: AOV ${aov:.2f} is impossibly low")
            if aov > 5000:
                errors.append(f"Month {month}: AOV ${aov:.2f} is suspiciously high for standard ecom")
    
    # AOV consistency — shouldn't vary more than 3x across months
    if len(aovs) >= 2:
        aov_min, aov_max = min(aovs), max(aovs)
        if aov_min > 0 and aov_max / aov_min > 3.0:
            errors.append(f"AOV varies too widely: ${aov_min:.0f}-${aov_max:.0f} (max 3x range)")
    
    # Cart rate checks
    for row in monthly_data:
        sessions = _num(row, 'leads')
        carts = _num(row, 'qualified')
        month = row.get('month', '?')
        if sessions > 0 and carts > 0:
            rate = carts / sessions
            if rate > 0.20:
                errors.append(f"Month {month}: Cart rate {rate:.1%} is too high (max 20%)")
            if rate < 0.01:
                errors.append(f"Month {month}: Cart rate {rate:.1%} is too low (min ~1%)")
    
    # Cart → order conversion rate
    for row in monthly_data:
        carts = _num(row, 'qualified')
        orders = _num(row, 'deals')
        month = row.get('month', '?')
        if carts > 0 and orders > 0:
            conv = orders / carts
            if conv > 0.80:
                errors.append(f"Month {month}: Cart-to-order rate {conv:.0%} is too high (max 80%)")
            if conv < 0.10:
                errors.append(f"Month {month}: Cart-to-order rate {conv:.0%} is too low (min 10%)")
    
    # November Black Friday check
    nov_rows = [r for r in monthly_data if 'Nov' in str(r.get('month', ''))]
    if nov_rows:
        oct_rows = [r for r in monthly_data if 'Oct' in str(r.get('month', ''))]
        if oct_rows:
            nov_rev = _num(nov_rows[0], 'revenue')
            oct_rev = _num(oct_rows[0], 'revenue')
            if oct_rev > 0 and nov_rev > 0 and nov_rev <= oct_rev:
                errors.append(
                    f"November revenue (${nov_rev:,.0f}) should exceed October (${oct_rev:,.0f}) — "
                    f"Black Friday/Cyber Monday is mandatory for ecom"
                )
    
    return errors


def check_lead_gen(slug, content, monthly_data, rules, model_key):
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
        
        if qualified > leads:
            errors.append(f"Month {month}: Qualified ({qualified:.0f}) > Leads ({leads:.0f})")
        
        if deals > qualified:
            errors.append(f"Month {month}: Deals ({deals:.0f}) > Qualified ({qualified:.0f})")
        
        if cpl > 0 and cpql > 0 and cpl >= cpql:
            errors.append(f"Month {month}: CPL (${cpl:.0f}) >= CPQL (${cpql:.0f}) — CPQL must always be higher")
        
        # Qualification rate: typically 20-60% of leads become qualified
        if leads > 0 and qualified > 0:
            qual_rate = qualified / leads
            if qual_rate > 0.70:
                errors.append(f"Month {month}: Qualification rate {qual_rate:.0%} is too high (max 70%)")
            if qual_rate < 0.04:
                errors.append(f"Month {month}: Qualification rate {qual_rate:.0%} is too low (min 4%)")
        
        # Close rate from qualified: typically 5-30%
        if qualified > 0 and deals > 0:
            close_rate = deals / qualified
            if close_rate > 0.50:
                errors.append(f"Month {month}: Close rate {close_rate:.0%} from qualified is too high (max 50%)")
        
        if deals > 0 and revenue > 0:
            rev_per_deal = revenue / deals
            if rev_per_deal < 10:
                errors.append(f"Month {month}: Revenue/deal ${rev_per_deal:.0f} is impossibly low")
    
    return errors


def check_mortgage(slug, content, monthly_data, rules):
    errors = []
    for row in monthly_data:
        deals = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        if deals > 0 and revenue > 0:
            rev_per_loan = revenue / deals
            if rev_per_loan < 1000:
                errors.append(f"Month {month}: Revenue/loan ${rev_per_loan:,.0f} is too low for mortgage origination")
            if rev_per_loan > 25000:
                errors.append(f"Month {month}: Revenue/loan ${rev_per_loan:,.0f} is suspiciously high for mortgage origination")
    return errors


def check_real_estate(slug, content, monthly_data, rules):
    errors = []
    for row in monthly_data:
        deals = _num(row, 'deals')
        revenue = _num(row, 'revenue')
        month = row.get('month', '?')
        if deals > 0 and revenue > 0:
            commission_per_deal = revenue / deals
            if commission_per_deal < 2000:
                errors.append(f"Month {month}: Commission/deal ${commission_per_deal:,.0f} is too low for real estate")
            if commission_per_deal > 100000:
                errors.append(f"Month {month}: Commission/deal ${commission_per_deal:,.0f} is unrealistically high")
    return errors


# ═══════════════════════════════════════════════════════
#  MAIN VALIDATION
# ═══════════════════════════════════════════════════════

def validate_file(filepath, rules):
    slug = os.path.basename(filepath).replace('.ts', '')
    if slug in ('types', 'index'):
        return []
    
    with open(filepath) as f:
        content = f.read()
    
    industry = extract_ts_field(content, 'industry')
    if not industry:
        return [f"{slug}: Could not extract industry field"]
    
    model_key = rules["industry_to_model"].get(industry)
    
    if not model_key:
        for ind, mk in rules["industry_to_model"].items():
            if ind.lower() in industry.lower() or industry.lower() in ind.lower():
                model_key = mk
                break
    
    if not model_key:
        if extract_column_labels(content):
            model_key = "ecommerce"
        else:
            return [f"{slug}: Industry '{industry}' not mapped to any model — ADD IT TO industry-rules.json"]
    
    monthly_data = extract_monthly_data(content)
    
    if not monthly_data:
        # No paid ads data — skip paid ads validation (SEO-only studies are fine)
        return []
    
    errors = []
    
    # Universal checks first
    errors.extend(check_universal(slug, content, monthly_data, model_key, industry))
    
    # Industry-specific checks
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
    elif model_key == "saas":
        errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    elif model_key == "healthcare_medical":
        errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    elif model_key == "subscription":
        # Subscription can use ecom or lead gen model
        if extract_column_labels(content):
            errors.extend(check_ecommerce(slug, content, monthly_data, rules))
        else:
            errors.extend(check_lead_gen(slug, content, monthly_data, rules, model_key))
    
    return [f"{slug}: {e}" for e in errors]


def main():
    rules = load_rules()
    
    target_slug = None
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg.startswith('--slug='):
            target_slug = arg.split('=', 1)[1]
        elif arg == '--slug' and i < len(sys.argv) - 1:
            target_slug = sys.argv[i + 1]
    
    files = sorted(glob.glob(os.path.join(DATA_DIR, "*.ts")))
    all_errors = []
    all_warnings = []
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
