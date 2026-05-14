#!/usr/bin/env python3
"""
V2 Wave 5 — Select Best 3 Per Vertical
Scores each case study and picks the best 3 per vertical with:
1. Geographic diversity (different states)
2. Problem diversity (different challenges)
3. Result diversity (not all home runs)
4. Quality (rich content, both paid + SEO)
"""
import json, os, re
from collections import defaultdict

with open('/tmp/all-studies-data.json') as f:
    studies = json.load(f)

with open('/tmp/taxonomy.json') as f:
    taxonomy = json.load(f)

def score_study(s):
    """Score a study 0-100 for quality."""
    score = 0
    
    # Has both paid + SEO (best case studies show both)
    if s['has_paid'] and s['has_seo']:
        score += 25
    elif s['has_paid']:
        score += 15
    elif s['has_seo']:
        score += 10
    
    # Duration — longer is better (more data, better story)
    if s['months'] >= 12: score += 20
    elif s['months'] >= 10: score += 15
    elif s['months'] >= 8: score += 10
    elif s['months'] >= 6: score += 5
    
    # Revenue — higher suggests more compelling
    if s['total_revenue'] > 1_000_000: score += 15
    elif s['total_revenue'] > 500_000: score += 12
    elif s['total_revenue'] > 200_000: score += 8
    elif s['total_revenue'] > 50_000: score += 5
    
    # Lead volume
    if s['total_leads'] > 2000: score += 10
    elif s['total_leads'] > 1000: score += 7
    elif s['total_leads'] > 500: score += 5
    
    # ROAS quality (realistic range)
    if 3.0 <= s['roas'] <= 4.5: score += 10
    elif 2.0 <= s['roas'] <= 4.8: score += 7
    
    # Challenge diversity
    if s['challenge_count'] >= 3: score += 10
    elif s['challenge_count'] >= 2: score += 5
    
    # Headline quality (longer, more specific = better)
    if len(s['headline']) > 80: score += 5
    elif len(s['headline']) > 50: score += 3
    
    return score

def get_state(location):
    """Extract state abbreviation from location."""
    state_map = {'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA','Colorado':'CO','Connecticut':'CT','Delaware':'DE','Florida':'FL','Georgia':'GA','Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA','Kansas':'KS','Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD','Massachusetts':'MA','Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO','Montana':'MT','Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM','New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH','Oklahoma':'OK','Oregon':'OR','Pennsylvania':'PA','Rhode Island':'RI','South Carolina':'SC','South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT','Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY','British Columbia':'BC','Quebec':'QC','Ontario':'ON'}
    
    loc = location or ''
    if 'National' in loc or 'Nationwide' in loc:
        return 'NATIONAL'
    
    for full, abbr in state_map.items():
        if full in loc or f', {abbr}' in loc or f' {abbr} ' in loc or loc.endswith(f' {abbr}'):
            return abbr
    return 'UNKNOWN'

# Build study lookup
study_lookup = {s['file']: s for s in studies}

# Select best 3 per vertical
results = {}
for vertical, items in taxonomy.items():
    if vertical.startswith('_'):
        continue
    
    # Score each study in this vertical
    scored = []
    for item in items:
        study = study_lookup.get(item['file'])
        if not study:
            continue
        study['score'] = score_study(study)
        study['state'] = get_state(study['location'])
        scored.append(study)
    
    # Sort by score descending
    scored.sort(key=lambda x: -x['score'])
    
    # Select best 3 with geographic diversity
    selected = []
    used_states = set()
    
    # First pass: pick top-scoring from different states
    for s in scored:
        if len(selected) >= 3:
            break
        if s['state'] not in used_states or s['state'] == 'NATIONAL':
            selected.append(s)
            used_states.add(s['state'])
    
    # If we don't have 3 yet, add more regardless of state
    if len(selected) < 3:
        for s in scored:
            if len(selected) >= 3:
                break
            if s not in selected:
                selected.append(s)
    
    results[vertical] = {
        'total_available': len(scored),
        'selected': [{
            'file': s['file'],
            'slug': s['slug'],
            'location': s['location'][:50],
            'state': s['state'],
            'score': s['score'],
            'has_paid': s['has_paid'],
            'has_seo': s['has_seo'],
            'months': s['months'],
            'total_leads': s['total_leads'],
            'total_revenue': s['total_revenue'],
            'roas': s['roas'],
        } for s in selected],
        'alternates': [{
            'file': s['file'],
            'slug': s['slug'],
            'state': s['state'],
            'score': s['score'],
        } for s in scored if s not in selected][:5],
    }

# Output
print("=" * 70)
print("BEST 3 PER VERTICAL — SELECTION REPORT")
print("=" * 70)

for vertical in sorted(results.keys()):
    r = results[vertical]
    print(f"\n📁 {vertical} ({r['total_available']} available)")
    
    for i, s in enumerate(r['selected'], 1):
        services = []
        if s['has_paid']: services.append('Paid')
        if s['has_seo']: services.append('SEO')
        rev = f"${s['total_revenue']/1000:.0f}K" if s['total_revenue'] < 1e6 else f"${s['total_revenue']/1e6:.1f}M"
        
        print(f"  ⭐ #{i}: {s['slug']} ({s['state']}) — Score: {s['score']}")
        print(f"     {s['location'][:50]} | {', '.join(services)} | {s['months']}mo | {rev} | {s['roas']}x ROAS")
    
    if r['alternates']:
        alts = ', '.join(f"{a['slug']}({a['state']})" for a in r['alternates'][:3])
        print(f"  📋 Alternates: {alts}")

# Save
with open('/tmp/best-3-selections.json', 'w') as f:
    json.dump(results, f, indent=2)

# Summary
total_selected = sum(len(r['selected']) for r in results.values())
verticals_with_3 = sum(1 for r in results.values() if len(r['selected']) >= 3)
verticals_with_less = sum(1 for r in results.values() if len(r['selected']) < 3)

print(f"\n{'='*70}")
print(f"SUMMARY")
print(f"  Verticals: {len(results)}")
print(f"  With 3+ selections: {verticals_with_3}")
print(f"  With < 3: {verticals_with_less}")
print(f"  Total selected: {total_selected}")
PYEOF
