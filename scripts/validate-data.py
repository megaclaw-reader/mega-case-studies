#!/usr/bin/env python3
"""Validate all case study data files for math consistency.
Run before every commit: python3 scripts/validate-data.py"""

import re, sys, os, argparse

parser = argparse.ArgumentParser()
parser.add_argument("--region", help="Required region — fails if not found in headline/location")
parser.add_argument("--slug", help="Slug to check region against (used with --region)")
args = parser.parse_args()

datadir = os.path.join(os.path.dirname(__file__), "..", "src", "data")
files = [f for f in os.listdir(datadir) if f.endswith(".ts") and f not in ("types.ts", "index.ts")]
errors = []

for fname in sorted(files):
    content = open(os.path.join(datadir, fname)).read()
    
    # Check paid ads entries
    for m in re.finditer(
        r'month:\s*"([^"]+)".*?spend:\s*(\d+).*?leads:\s*(\d+).*?cpl:\s*(\d+).*?qualified:\s*(\d+).*?cpql:\s*(\d+)',
        content
    ):
        month = m.group(1)
        spend, leads, cpl, qual, cpql = [int(m.group(i)) for i in range(2, 7)]
        
        # CPL < CPQL (always, since qualified ⊂ leads)
        if cpql <= cpl:
            errors.append(f"{fname} | {month}: CPQL ({cpql}) <= CPL ({cpl})")
        
        # Math: CPL = spend/leads (±2 tolerance for rounding)
        if leads > 0 and abs(round(spend / leads) - cpl) > 2:
            errors.append(f"{fname} | {month}: CPL={cpl} but spend/leads={round(spend/leads)}")
        
        # Math: CPQL = spend/qualified (±2 tolerance)
        if qual > 0 and abs(round(spend / qual) - cpql) > 2:
            errors.append(f"{fname} | {month}: CPQL={cpql} but spend/qual={round(spend/qual)}")
        
        # Qualified must be <= leads
        if qual > leads:
            errors.append(f"{fname} | {month}: qualified ({qual}) > leads ({leads})")

    # Check budget floor: if a monthlyBudget is specified, no month's spend should be below it
    budget_match = re.search(r'monthlyBudget:\s*(\d+)', content)
    spend_vals = [int(x) for x in re.findall(r'spend:\s*(\d+)', content)]
    if budget_match and spend_vals:
        budget_floor = int(budget_match.group(1))
        for i, s in enumerate(spend_vals):
            if s < budget_floor:
                errors.append(f"{fname}: Month {i+1} spend ({s}) < budget floor ({budget_floor})")

    # Check SEO: traffic should generally trend up (allow 1-2 dips)
    traffic_vals = [int(x) for x in re.findall(r'traffic:\s*(\d+)', content)]
    if len(traffic_vals) > 3:
        dips = sum(1 for i in range(1, len(traffic_vals)) if traffic_vals[i] < traffic_vals[i-1])
        if dips > 3:
            errors.append(f"{fname}: SEO traffic has {dips} dips (max 3 expected for seasonal)")

# Geography validation: if --region is provided, verify it appears in the target data file
if args.region:
    region = args.region.strip()
    slug = args.slug
    if not slug:
        errors.append("--region requires --slug to know which file to check")
    else:
        target_file = os.path.join(datadir, slug.replace("-", "-") + ".ts")
        # Try exact filename, or search for it
        if not os.path.exists(target_file):
            target_file = None
            for f in files:
                if slug in f:
                    target_file = os.path.join(datadir, f)
                    break
        if not target_file:
            errors.append(f"Cannot find data file for slug '{slug}' to validate region")
        else:
            content = open(target_file).read()
            # Check headline + location field for the region
            headline_match = re.search(r'headline:\s*"([^"]+)"', content)
            location_match = re.search(r'location:\s*"([^"]+)"', content)
            headline = headline_match.group(1) if headline_match else ""
            location = location_match.group(1) if location_match else ""
            region_lower = region.lower()
            if region_lower not in headline.lower() and region_lower not in location.lower():
                errors.append(
                    f"GEOGRAPHY MISMATCH: Requested region '{region}' not found in "
                    f"headline ('{headline}') or location ('{location}'). "
                    f"The case study MUST be set in {region}."
                )

if errors:
    print("❌ VALIDATION FAILED:")
    for e in errors:
        print(f"  {e}")
    sys.exit(1)
else:
    print(f"✅ All {len(files)} data files passed validation")
    sys.exit(0)
