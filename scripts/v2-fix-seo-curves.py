#!/usr/bin/env python3
"""
V2 Wave 2 — Fix SEO Growth Curves
Ensures all case studies follow Julien's directive:
- Starting ~100-200 keywords (scaled to business size/ad spend)
- ~1,000 by month 4
- 8,000+ by month 12
- Traffic > 10K/mo within first year
- Hockey stick growth from month 4 onward
Also fixes declining story arcs in paid ads data.
"""

import os
import re
import random
import math
import json

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")

random.seed(2026)

def get_spend_level(content):
    """Determine business size from ad spend to calibrate SEO starting point."""
    spends = [float(x) for x in re.findall(r'spend:\s*([\d.]+)', content)]
    if spends:
        avg = sum(spends) / len(spends)
        if avg > 15000: return 'large'
        if avg > 8000: return 'medium'
    
    # Check company revenue
    rev = re.search(r'revenue:\s*"\$([\d.]+)([MKB])', content)
    if rev:
        val = float(rev.group(1))
        unit = rev.group(2)
        if unit == 'M' and val > 5: return 'large'
        if unit == 'M': return 'medium'
    return 'small'

def generate_seo_curve(num_months, size='medium', is_local=False):
    """Generate realistic SEO growth curve."""
    # Starting keywords based on business size
    start_kw = {'small': random.randint(100, 150), 'medium': random.randint(150, 250), 'large': random.randint(200, 350)}[size]
    
    # Target endpoints
    if num_months <= 6:
        end_kw = random.randint(2000, 4000)
    elif num_months <= 9:
        end_kw = random.randint(5000, 8000)
    else:
        end_kw = random.randint(8000, 12000)
    
    keywords = []
    for i in range(num_months):
        progress = i / max(num_months - 1, 1)
        # Hockey stick: slow months 1-3, acceleration from month 4
        if i < 3:
            # Foundation phase — slow growth
            t = progress * 0.15
        else:
            # Acceleration phase — exponential
            t = 0.15 + (progress - 3/max(num_months-1,1)) * 1.2
            t = min(t, 1.0)
        
        # S-curve growth
        val = start_kw + (end_kw - start_kw) * (t ** 0.7)
        # Add variance
        val *= random.uniform(0.95, 1.05)
        keywords.append(max(int(val), start_kw))
    
    # Ensure monotonically increasing (with small month-to-month variance)
    for i in range(1, len(keywords)):
        if keywords[i] <= keywords[i-1]:
            keywords[i] = keywords[i-1] + random.randint(30, 120)
    
    # Ensure we hit targets
    if num_months >= 4 and keywords[3] < 800:
        # Scale up months 4+ to hit 1000 by month 4
        scale = 1000 / max(keywords[3], 1)
        for i in range(3, len(keywords)):
            keywords[i] = int(keywords[i] * scale * random.uniform(0.95, 1.05))
    
    if num_months >= 10 and keywords[-1] < 8000:
        keywords[-1] = random.randint(8000, 11000)
        # Smooth the last few months
        for i in range(max(0, num_months-4), num_months-1):
            target = keywords[i-1] + (keywords[-1] - keywords[i-1]) / (num_months - i)
            keywords[i] = int(target * random.uniform(0.95, 1.05))
    
    # Generate correlated metrics
    top10 = [max(int(kw * random.uniform(0.08, 0.15)), 3) for kw in keywords]
    top3 = [max(int(t10 * random.uniform(0.15, 0.35)), 1) for t10 in top10]
    
    # Traffic: follows keywords but with more acceleration
    traffic = []
    for i, kw in enumerate(keywords):
        if i < 3:
            t = kw * random.uniform(1.5, 2.5)
        else:
            t = kw * random.uniform(2.0, 3.5)
        traffic.append(int(t))
    
    # Ensure traffic > 10K by end for 10+ month studies
    if num_months >= 10 and traffic[-1] < 10000:
        traffic[-1] = random.randint(10500, 15000)
        for i in range(max(0, num_months-3), num_months-1):
            traffic[i] = int(traffic[i-1] + (traffic[-1] - traffic[i-1]) / (num_months - i) * random.uniform(0.9, 1.1))
    
    pages = [max(int(8 + i * random.uniform(3, 8)), 8) for i in range(num_months)]
    avg_pos = [round(max(8, 50 - i * random.uniform(2.5, 4.5) + random.uniform(-2, 2)), 1) for i in range(num_months)]
    ctr = [round(min(max(0.8 + i * random.uniform(0.2, 0.5) + random.uniform(-0.1, 0.1), 0.5), 6.5), 1) for i in range(num_months)]
    
    return keywords, top10, top3, traffic, pages, avg_pos, ctr

def fix_seo_data(content, filename):
    """Fix SEO monthly data to follow proper growth curves."""
    changes = []
    
    # Find existing SEO monthly data
    seo_monthly = re.search(r'(seo:\s*\{[\s\S]*?monthly:\s*\[)([\s\S]*?)(\]\s*,?\s*\})', content)
    if not seo_monthly:
        return content, changes
    
    # Count existing months
    existing_months = re.findall(r'month:\s*"([^"]+)"', seo_monthly.group(2))
    if not existing_months:
        return content, changes
    
    num_months = len(existing_months)
    
    # Check if fix is needed
    keywords = [int(x) for x in re.findall(r'keywords:\s*(\d+)', seo_monthly.group(2))]
    traffic = [int(x) for x in re.findall(r'traffic:\s*(\d+)', seo_monthly.group(2))]
    
    needs_fix = False
    if keywords and keywords[-1] < 1000 and num_months >= 4:
        needs_fix = True
        changes.append(f"SEO keywords too low: {keywords[-1]} final (need 1000+ by month 4)")
    if traffic and traffic[-1] < 10000 and num_months >= 10:
        needs_fix = True
        changes.append(f"SEO traffic too low: {traffic[-1]} final (need 10K+)")
    if keywords and keywords[0] < 80:
        needs_fix = True
        changes.append(f"SEO starting keywords too low: {keywords[0]}")
    
    if not needs_fix:
        return content, changes
    
    size = get_spend_level(content)
    new_kw, new_top10, new_top3, new_traffic, new_pages, new_avg_pos, new_ctr = generate_seo_curve(num_months, size)
    
    # Rebuild monthly data
    new_rows = []
    for i, month in enumerate(existing_months):
        row = f'      {{ month: "{month}", keywords: {new_kw[i]}, top10: {new_top10[i]}, top3: {new_top3[i]}, traffic: {new_traffic[i]}, pages: {new_pages[i]}, avgPos: {new_avg_pos[i]}, ctr: {new_ctr[i]} }}'
        new_rows.append(row)
    
    new_monthly = "\n" + ",\n".join(new_rows) + "\n    "
    
    content = content[:seo_monthly.start(2)] + new_monthly + content[seo_monthly.end(2):]
    changes.append(f"Rebuilt SEO curve: {new_kw[0]} → {new_kw[-1]} keywords, {new_traffic[0]} → {new_traffic[-1]} traffic")
    
    # Also update SEO summary stats to match
    # Update keyword summary
    content = re.sub(
        r'(label:\s*"Total Keywords"[^}]*value:\s*")[^"]*(")',
        lambda m: m.group(1) + f"{new_kw[-1]:,}" + m.group(2),
        content
    )
    content = re.sub(
        r'(label:\s*"Keyword Rankings"[^}]*value:\s*")[^"]*(")',
        lambda m: m.group(1) + f"{new_kw[-1]:,}" + m.group(2),
        content
    )
    
    return content, changes

def fix_story_arc(content, filename):
    """Fix declining leads story arc — ensure improvement over time."""
    changes = []
    
    # Find paid ads monthly data
    paid_section = re.search(r'paidAds:\s*\{[\s\S]*?monthly:\s*\[([\s\S]*?)\]', content)
    if not paid_section:
        return content, changes
    
    leads_matches = list(re.finditer(r'leads:\s*(\d+)', paid_section.group(1)))
    if len(leads_matches) < 6:
        return content, changes
    
    leads = [int(m.group(1)) for m in leads_matches]
    first_half = sum(leads[:len(leads)//2])
    second_half = sum(leads[len(leads)//2:])
    
    if second_half >= first_half * 0.9:
        return content, changes  # Arc is fine
    
    changes.append(f"Fixing declining story arc: leads were trending down")
    
    # Strategy: gradually increase leads over time with realistic variance
    base = leads[0]
    # Target: 30-50% improvement by end
    growth_factor = random.uniform(1.3, 1.5)
    
    new_leads = []
    for i in range(len(leads)):
        progress = i / max(len(leads) - 1, 1)
        # Gradual improvement with variance
        target = base * (1 + (growth_factor - 1) * progress)
        # Add realistic monthly variance (±10%)
        val = int(target * random.uniform(0.90, 1.10))
        new_leads.append(max(val, int(base * 0.85)))  # Never go way below start
    
    # Replace leads values in the paid section
    section_start = paid_section.start(1)
    section_text = paid_section.group(1)
    
    # Replace each leads value
    lead_pattern = re.compile(r'leads:\s*\d+')
    matches = list(lead_pattern.finditer(section_text))
    
    for i, match in reversed(list(enumerate(matches))):
        if i < len(new_leads):
            old = section_text[match.start():match.end()]
            new = f"leads: {new_leads[i]}"
            section_text = section_text[:match.start()] + new + section_text[match.end():]
    
    content = content[:section_start] + section_text + content[paid_section.end(1):]
    changes.append(f"Leads arc: {leads[0]} → {new_leads[-1]} (was {leads[0]} → {leads[-1]})")
    
    return content, changes

def main():
    files = sorted([f for f in os.listdir(DATA_DIR)
                   if f.endswith('.ts') and f not in ('index.ts', 'types.ts')])
    
    total_changes = 0
    files_changed = 0
    
    for f in files:
        filepath = os.path.join(DATA_DIR, f)
        with open(filepath) as fh:
            content = fh.read()
        
        original = content
        all_changes = []
        
        # Fix SEO curves
        content, changes = fix_seo_data(content, f)
        all_changes.extend(changes)
        
        # Fix story arcs
        content, changes = fix_story_arc(content, f)
        all_changes.extend(changes)
        
        if content != original:
            with open(filepath, 'w') as fh:
                fh.write(content)
            files_changed += 1
            total_changes += len(all_changes)
            print(f"\n✅ {f}")
            for c in all_changes:
                print(f"   • {c}")
    
    print(f"\n{'='*60}")
    print(f"Wave 2 Complete: {total_changes} fixes across {files_changed} files")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
