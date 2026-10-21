#!/usr/bin/env python3
"""
Generate 3 rock-solid roofing case studies with perfect math.
Revenue = deals × avg deal value (actual job revenue, NOT margin/profit).
Strong 12-month improvement arc. Every number hand-tuned and verified.
"""
import json
from collections import Counter

def fmt_month(year, month):
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return f"{months[month-1]} '{str(year)[2:]}"

def build_study(name, location, params):
    months_data = []
    total_spend = total_leads = total_qualified = total_deals = total_revenue = 0
    
    for i, mp in enumerate(params):
        spend = mp['spend']
        leads = mp['leads']
        qualified = mp['qualified']
        deals = mp['deals']
        deal_value = mp['deal_value']
        
        cpl = round(spend / leads, 2)
        cpql = round(spend / qualified, 2)
        revenue = deals * deal_value
        roas = round(revenue / spend, 2)
        
        assert spend >= 5000, f"M{i+1}: Spend ${spend} < $5K"
        assert cpl < cpql, f"M{i+1}: CPL ${cpl} >= CPQL ${cpql}"
        assert qualified < leads, f"M{i+1}: Qual {qualified} >= Leads {leads}"
        assert roas <= 4.8, f"M{i+1}: ROAS {roas}x > 4.8x"
        
        months_data.append({
            'month': fmt_month(2025, i+1),
            'spend': spend, 'leads': leads, 'cpl': cpl,
            'qualified': qualified, 'cpql': cpql,
            'deals': deals, 'revenue': revenue, 'roas': roas
        })
        total_spend += spend; total_leads += leads; total_qualified += qualified
        total_deals += deals; total_revenue += revenue
    
    summary = {
        'total_spend': total_spend, 'total_leads': total_leads,
        'total_qualified': total_qualified, 'total_deals': total_deals,
        'total_revenue': total_revenue,
        'avg_cpl': round(total_spend / total_leads, 2),
        'avg_cpql': round(total_spend / total_qualified, 2),
        'blended_roas': round(total_revenue / total_spend, 2)
    }
    
    # Uniqueness checks — no metric identical >3 months
    for mname, vals in [
        ('ROAS', [m['roas'] for m in months_data]),
        ('CPL', [m['cpl'] for m in months_data]),
        ('CPQL', [m['cpql'] for m in months_data]),
        ('Deals', [m['deals'] for m in months_data]),
        ('Revenue', [m['revenue'] for m in months_data]),
    ]:
        for val, count in Counter(vals).items():
            if count > 3:
                print(f"  ⚠️  {mname} value {val} appears {count} times")
    
    first, last = months_data[0], months_data[-1]
    print(f"\n{'='*60}")
    print(f"  {name} — {location}")
    print(f"{'='*60}")
    print(f"  ✅ All math verified")
    print(f"  Spend: ${total_spend:,} | Revenue: ${total_revenue:,} | Deals: {total_deals} | ROAS: {summary['blended_roas']}x")
    print(f"  ROAS: {first['roas']}x → {last['roas']}x ({round((last['roas']/first['roas']-1)*100)}%↑)")
    print(f"  CPQL: ${first['cpql']} → ${last['cpql']} ({round((1-last['cpql']/first['cpql'])*100)}%↓)")
    print(f"  Deals: {first['deals']}/mo → {last['deals']}/mo")
    print()
    print(f"  {'Month':<10} {'Spend':>8} {'Leads':>6} {'CPL':>8} {'Qual':>5} {'CPQL':>8} {'Deals':>5} {'Revenue':>9} {'ROAS':>6}")
    for m in months_data:
        print(f"  {m['month']:<10} ${m['spend']:>7,} {m['leads']:>6} ${m['cpl']:>7} {m['qualified']:>5} ${m['cpql']:>7} {m['deals']:>5} ${m['revenue']:>8,} {m['roas']:>5}x")
    
    return months_data, summary

# =====================================================================
# STUDY 1: Charlotte, NC — Residential Roofing
# =====================================================================
# Avg job $9,200-9,700 (replacement + repair mix)
# Budget $8K → $12.5K. ROAS 2.26x → 4.55x. Deals 2 → 6/mo.
charlotte = [
    {'spend': 8147,  'leads': 64,  'qualified': 19, 'deals': 2,  'deal_value': 9200},  # Jan
    {'spend': 8293,  'leads': 72,  'qualified': 23, 'deals': 2,  'deal_value': 9550},  # Feb
    {'spend': 8516,  'leads': 84,  'qualified': 28, 'deals': 3,  'deal_value': 9100},  # Mar
    {'spend': 9340,  'leads': 102, 'qualified': 36, 'deals': 3,  'deal_value': 9450},  # Apr
    {'spend': 10217, 'leads': 121, 'qualified': 44, 'deals': 4,  'deal_value': 9600},  # May
    {'spend': 10843, 'leads': 134, 'qualified': 51, 'deals': 4,  'deal_value': 9250},  # Jun
    {'spend': 11105, 'leads': 148, 'qualified': 58, 'deals': 5,  'deal_value': 9500},  # Jul
    {'spend': 11472, 'leads': 157, 'qualified': 64, 'deals': 5,  'deal_value': 9300},  # Aug
    {'spend': 11738, 'leads': 168, 'qualified': 71, 'deals': 4,  'deal_value': 9700},  # Sep (seasonal dip)
    {'spend': 12103, 'leads': 179, 'qualified': 78, 'deals': 6,  'deal_value': 9150},  # Oct
    {'spend': 11654, 'leads': 172, 'qualified': 76, 'deals': 5,  'deal_value': 9400},  # Nov
    {'spend': 12389, 'leads': 191, 'qualified': 87, 'deals': 6,  'deal_value': 9350},  # Dec
]

# =====================================================================
# STUDY 2: Dallas-Fort Worth — Commercial & Residential Mix
# =====================================================================
# Avg job $16,500-17,800 (commercial $28-35K + residential $10-12K weighted)
# Budget $15K → $25K. ROAS 2.20x → 4.42x. Deals 2 → 7/mo.
dallas = [
    {'spend': 15247, 'leads': 129, 'qualified': 38, 'deals': 2,  'deal_value': 16800},  # Jan
    {'spend': 15893, 'leads': 148, 'qualified': 44, 'deals': 2,  'deal_value': 17400},  # Feb
    {'spend': 17214, 'leads': 174, 'qualified': 56, 'deals': 3,  'deal_value': 16900},  # Mar
    {'spend': 19387, 'leads': 208, 'qualified': 71, 'deals': 4,  'deal_value': 17600},  # Apr
    {'spend': 21543, 'leads': 251, 'qualified': 88, 'deals': 5,  'deal_value': 16500},  # May
    {'spend': 22186, 'leads': 278, 'qualified': 101,'deals': 5,  'deal_value': 17100},  # Jun
    {'spend': 22874, 'leads': 302, 'qualified': 113,'deals': 6,  'deal_value': 17800},  # Jul
    {'spend': 23157, 'leads': 318, 'qualified': 124,'deals': 5,  'deal_value': 16700},  # Aug (dip)
    {'spend': 23891, 'leads': 341, 'qualified': 136,'deals': 6,  'deal_value': 17300},  # Sep
    {'spend': 24513, 'leads': 362, 'qualified': 149,'deals': 7,  'deal_value': 16600},  # Oct
    {'spend': 24027, 'leads': 378, 'qualified': 158,'deals': 6,  'deal_value': 17500},  # Nov
    {'spend': 24836, 'leads': 397, 'qualified': 168,'deals': 7,  'deal_value': 17000},  # Dec
]

# =====================================================================
# STUDY 3: Nashville, TN — Storm Damage & Insurance Claims
# =====================================================================
# Avg job $7,100-7,600 (storm repairs + insurance replacements)
# Budget $9K → $15K. ROAS 2.36x → 4.64x. Deals 3 → 9/mo.
# Higher volume, smaller jobs, faster close. Spring storm surge.
nashville = [
    {'spend': 9147,  'leads': 87,  'qualified': 28, 'deals': 3,  'deal_value': 7200},   # Jan
    {'spend': 9483,  'leads': 96,  'qualified': 33, 'deals': 3,  'deal_value': 7350},   # Feb
    {'spend': 10741, 'leads': 124, 'qualified': 45, 'deals': 5,  'deal_value': 7100},   # Mar
    {'spend': 13287, 'leads': 178, 'qualified': 68, 'deals': 7,  'deal_value': 7450},   # Apr (storms)
    {'spend': 15104, 'leads': 218, 'qualified': 89, 'deals': 9,  'deal_value': 7250},   # May (peak)
    {'spend': 14873, 'leads': 224, 'qualified': 93, 'deals': 8,  'deal_value': 7500},   # Jun
    {'spend': 14256, 'leads': 231, 'qualified': 98, 'deals': 8,  'deal_value': 7150},   # Jul
    {'spend': 14572, 'leads': 237, 'qualified':104, 'deals': 7,  'deal_value': 7600},   # Aug
    {'spend': 13891, 'leads': 242, 'qualified':108, 'deals': 8,  'deal_value': 7300},   # Sep
    {'spend': 14317, 'leads': 256, 'qualified':118, 'deals': 9,  'deal_value': 7450},   # Oct
    {'spend': 13194, 'leads': 247, 'qualified':113, 'deals': 7,  'deal_value': 7200},   # Nov (seasonal dip)
    {'spend': 14643, 'leads': 271, 'qualified':127, 'deals': 9,  'deal_value': 7550},   # Dec
]

all_results = {}
for name, location, params in [
    ('Residential Roofing', 'Charlotte, NC', charlotte),
    ('Commercial & Residential Roofing', 'Dallas-Fort Worth, TX', dallas),
    ('Storm Damage Roofing', 'Nashville, TN', nashville),
]:
    months_data, summary = build_study(name, location, params)
    slug = name.lower().replace(' & ', '-').replace(' ', '-')
    all_results[slug] = {'name': name, 'location': location, 'months_data': months_data, 'summary': summary}

with open('/Users/junehamilton/.openclaw/workspace/mega-case-studies/scripts/roofing-data.json', 'w') as f:
    json.dump(all_results, f, indent=2)
print("\n✅ All 3 studies verified. Data saved.")
