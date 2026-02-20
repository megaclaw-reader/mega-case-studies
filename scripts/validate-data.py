#!/usr/bin/env python3
"""Validate all case study data files for math consistency.
Run before every commit: python3 scripts/validate-data.py"""

import re, sys, os

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

    # Check SEO: traffic should generally trend up (allow 1-2 dips)
    traffic_vals = [int(x) for x in re.findall(r'traffic:\s*(\d+)', content)]
    if len(traffic_vals) > 3:
        dips = sum(1 for i in range(1, len(traffic_vals)) if traffic_vals[i] < traffic_vals[i-1])
        if dips > 3:
            errors.append(f"{fname}: SEO traffic has {dips} dips (max 3 expected for seasonal)")

if errors:
    print("❌ VALIDATION FAILED:")
    for e in errors:
        print(f"  {e}")
    sys.exit(1)
else:
    print(f"✅ All {len(files)} data files passed validation")
    sys.exit(0)
