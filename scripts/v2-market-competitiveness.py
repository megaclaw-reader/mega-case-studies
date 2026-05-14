#!/usr/bin/env python3
"""
V2 Wave 4 — Market Competitiveness Logic
Adjusts CPL/CPQL values based on market tier to reflect real-world cost differences.
NYC HVAC customer should see much higher CPL than Raleigh HVAC.
"""
import os, re, random, json
random.seed(2026)

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")

# Market tier definitions — cost multiplier relative to baseline
TIER_1 = {  # Highest competition, highest CPLs
    'NYC': 1.55, 'New York': 1.55, 'Manhattan': 1.6, 'Brooklyn': 1.45,
    'Los Angeles': 1.5, 'LA': 1.5, 'San Francisco': 1.55, 'SF': 1.55,
    'Chicago': 1.4, 'Boston': 1.45, 'Miami': 1.35, 'Washington': 1.4, 'DC': 1.4,
    'Seattle': 1.35, 'San Jose': 1.45, 'San Diego': 1.3,
}

TIER_2 = {  # Mid-competition
    'Phoenix': 1.1, 'Scottsdale': 1.15, 'Dallas': 1.15, 'Houston': 1.1,
    'Atlanta': 1.1, 'Charlotte': 1.05, 'Denver': 1.15, 'Austin': 1.15,
    'Nashville': 1.1, 'Tampa': 1.05, 'Orlando': 1.0, 'Portland': 1.1,
    'Philadelphia': 1.25, 'Minneapolis': 1.1, 'Detroit': 0.95,
    'Stamford': 1.3, 'Hartford': 1.1,
}

TIER_3 = {  # Lower competition, lower CPLs
    'Raleigh': 0.85, 'Jacksonville': 0.9, 'Columbus': 0.85, 'Richmond': 0.85,
    'Birmingham': 0.8, 'Albuquerque': 0.75, 'Little Rock': 0.75,
    'Spokane': 0.7, 'Burlington': 0.75, 'Cincinnati': 0.85,
    'Savannah': 0.75, 'Tucson': 0.8,
}

NATIONAL_MULTIPLIER = 1.0  # Baseline

def get_market_multiplier(location):
    """Determine cost multiplier based on location."""
    if not location:
        return 1.0
    
    loc = location
    
    # Check national first
    if 'National' in loc or 'Nationwide' in loc or 'United States' in loc:
        return NATIONAL_MULTIPLIER
    
    # Check tiers
    for city, mult in TIER_1.items():
        if city in loc:
            return mult
    for city, mult in TIER_2.items():
        if city in loc:
            return mult
    for city, mult in TIER_3.items():
        if city in loc:
            return mult
    
    # State-level defaults
    state_defaults = {
        'California': 1.3, 'New York': 1.4, 'New Jersey': 1.3, 'Connecticut': 1.25,
        'Massachusetts': 1.3, 'Florida': 1.05, 'Texas': 1.05, 'Arizona': 1.0,
        'Georgia': 1.0, 'North Carolina': 0.9, 'Tennessee': 0.9,
        'New Mexico': 0.8, 'Alabama': 0.8, 'Arkansas': 0.75,
        'Pennsylvania': 1.1, 'Virginia': 1.0, 'Ohio': 0.85,
        'Colorado': 1.1, 'Washington': 1.15, 'Oregon': 1.05,
        'Vermont': 0.8, 'Quebec': 0.9, 'Ontario': 1.05, 'British Columbia': 1.1,
    }
    
    for state, mult in state_defaults.items():
        if state in loc:
            return mult
    
    return 1.0

# Industry baseline CPLs (what a mid-market study should show)
INDUSTRY_BASELINES = {
    'HVAC': {'cpl': 85, 'cpql': 165},
    'Plumbing': {'cpl': 75, 'cpql': 155},
    'Roofing': {'cpl': 90, 'cpql': 180},
    'Legal': {'cpl': 120, 'cpql': 250},
    'Dental': {'cpl': 65, 'cpql': 140},
    'Med Spa': {'cpl': 55, 'cpql': 120},
    'Healthcare': {'cpl': 95, 'cpql': 200},
    'Home Improvement': {'cpl': 70, 'cpql': 150},
    'Real Estate': {'cpl': 80, 'cpql': 170},
    'Insurance': {'cpl': 100, 'cpql': 210},
    'Financial': {'cpl': 110, 'cpql': 230},
    'Landscaping': {'cpl': 60, 'cpql': 130},
    'Pest Control': {'cpl': 45, 'cpql': 100},
    'Cleaning': {'cpl': 40, 'cpql': 90},
    'Moving': {'cpl': 55, 'cpql': 120},
    'Auto': {'cpl': 65, 'cpql': 140},
    'B2B SaaS': {'cpl': 150, 'cpql': 320},
    'Education': {'cpl': 85, 'cpql': 180},
    'Ecommerce': {'cpl': 25, 'cpql': 55},  # Lower for ecom (cost per acquisition)
}

def get_industry_baseline(industry):
    """Get baseline CPL/CPQL for an industry."""
    ind = industry.lower() if industry else ''
    for key, vals in INDUSTRY_BASELINES.items():
        if key.lower() in ind:
            return vals
    return {'cpl': 75, 'cpql': 160}  # Default

def check_and_report(filepath, filename):
    """Check if a file's CPLs are appropriate for its market and industry."""
    with open(filepath) as f:
        content = f.read()
    
    industry = re.search(r'industry:\s*["\']([^"\']*)', content)
    location = re.search(r'location:\s*["\']([^"\']*)', content)
    
    ind = industry.group(1) if industry else ''
    loc = location.group(1) if location else ''
    
    multiplier = get_market_multiplier(loc)
    baseline = get_industry_baseline(ind)
    
    # Expected CPL range for this market
    expected_cpl = baseline['cpl'] * multiplier
    expected_cpql = baseline['cpql'] * multiplier
    
    # Actual CPLs
    paid = re.search(r'paidAds:\s*\{[\s\S]*?monthly:\s*\[([\s\S]*?)\]', content)
    if not paid:
        return None
    
    cpls = [float(x) for x in re.findall(r'cpl:\s*([\d.]+)', paid.group(1))]
    cpqls = [float(x) for x in re.findall(r'cpql:\s*([\d.]+)', paid.group(1))]
    
    if not cpls:
        return None
    
    avg_cpl = sum(cpls) / len(cpls)
    avg_cpql = sum(cpqls) / len(cpqls) if cpqls else 0
    
    # Is the CPL in a reasonable range for this market?
    cpl_ratio = avg_cpl / expected_cpl if expected_cpl else 1
    cpql_ratio = avg_cpql / expected_cpql if expected_cpql else 1
    
    issue = None
    if cpl_ratio < 0.5 or cpl_ratio > 2.0:
        issue = f"CPL ${avg_cpl:.0f} vs expected ${expected_cpl:.0f} for {loc[:30]} (ratio={cpl_ratio:.2f})"
    elif cpql_ratio < 0.4 or cpql_ratio > 2.5:
        issue = f"CPQL ${avg_cpql:.0f} vs expected ${expected_cpql:.0f} for {loc[:30]} (ratio={cpql_ratio:.2f})"
    
    return {
        'file': filename,
        'industry': ind,
        'location': loc[:40],
        'multiplier': multiplier,
        'expected_cpl': expected_cpl,
        'expected_cpql': expected_cpql,
        'actual_cpl': avg_cpl,
        'actual_cpql': avg_cpql,
        'cpl_ratio': cpl_ratio,
        'cpql_ratio': cpql_ratio,
        'issue': issue,
    }

def main():
    files = sorted([f for f in os.listdir(DATA_DIR) 
                   if f.endswith('.ts') and f not in ('index.ts', 'types.ts')])
    
    results = []
    issues = []
    
    for f in files:
        result = check_and_report(os.path.join(DATA_DIR, f), f)
        if result:
            results.append(result)
            if result['issue']:
                issues.append(result)
    
    print(f"Analyzed {len(results)} files with paid ads data")
    print(f"Found {len(issues)} files with market-inappropriate CPLs\n")
    
    if issues:
        print("=" * 80)
        print("FILES WITH MARKET-INAPPROPRIATE CPLs")
        print("=" * 80)
        
        # Sort by severity
        issues.sort(key=lambda x: abs(x['cpl_ratio'] - 1.0), reverse=True)
        
        for r in issues:
            print(f"\n⚠️  {r['file']}")
            print(f"   Industry: {r['industry']}, Location: {r['location']}")
            print(f"   Market multiplier: {r['multiplier']}x")
            print(f"   Expected CPL: ${r['expected_cpl']:.0f}, Actual: ${r['actual_cpl']:.0f} (ratio={r['cpl_ratio']:.2f})")
            print(f"   Expected CPQL: ${r['expected_cpql']:.0f}, Actual: ${r['actual_cpql']:.0f}")
            print(f"   Issue: {r['issue']}")
    
    # Save full report
    with open('/tmp/market-competitiveness-report.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print(f"\nFull report saved to /tmp/market-competitiveness-report.json")

if __name__ == "__main__":
    main()
