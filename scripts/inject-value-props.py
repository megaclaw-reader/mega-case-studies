#!/usr/bin/env python3
"""
Inject MEGA AI value propositions into case study strategy sections.
Adds agentic AI optimization and creative volume (for ecom) strategy items
to Phase 1 and Phase 2 of every case study.

Safe to run multiple times — checks for existing value prop language before adding.
"""

import os, re, sys, glob

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(SCRIPT_DIR, "..", "src", "data")

# Markers that indicate value props are already present
ALREADY_HAS = [
    "always-on", "AI optimization agent", "AI agents",
    "continuous optimization", "creative volume",
    "100+ creative", "50+ new variation", "creative fatigue",
    "AI-generated creative", "real-time bid",
    "living inside the ad account", "agentic",
]

# Value props for Phase 1
PHASE1_LEADGEN = [
    "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
]

# Ecom creative props are set dynamically based on budget in get_ecom_props()

# Value props for Phase 2
PHASE2_LEADGEN = [
    "AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains",
]

# Value props for Phase 3+
PHASE3_LEADGEN = [
    "Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles",
]


def get_avg_monthly_spend(content):
    """Extract average monthly spend from paid ads data."""
    paid_section = re.search(r'paidAds:\s*\{', content)
    if not paid_section:
        return 10000  # Default assumption
    paid_content = content[paid_section.start():]
    spends = re.findall(r'spend:\s*(\d+)', paid_content)
    if spends:
        return sum(int(s) for s in spends) / len(spends)
    return 10000


def get_ecom_props(content):
    """Get budget-appropriate creative volume props for ecom."""
    avg_spend = get_avg_monthly_spend(content)
    
    if avg_spend < 10000:
        # $5-10K range
        p1 = [
            "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
            "Launched with 10-15 AI-generated creative variations across formats, giving the algorithm 3-4x more creative diversity than a traditional agency would produce at this budget level, with zero production costs eating into media spend",
        ]
        p2 = [
            "Rotated in fresh AI-generated creative weekly based on performance data, replacing underperformers within days rather than the typical agency cycle of monthly creative refreshes",
            "AI agents identified winning creative patterns and generated new iterations automatically, keeping the campaign fresh without the production costs that would consume a significant portion of the budget at a traditional agency",
        ]
        p3 = [
            "Continuous AI optimization compounded daily improvements while the zero-cost creative engine ensured the campaign never went stale, delivering creative variety that would cost $2-3K per month in agency production fees",
        ]
    elif avg_spend < 25000:
        # $10-25K range
        p1 = [
            "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
            "Launched initial creative testing with 20-25 AI-generated ad variations across formats (static, carousel, short video) to establish performance baselines across multiple hooks and angles",
        ]
        p2 = [
            "Scaled to 30+ active creative variations per month, with AI identifying winning patterns and generating new iterations at a pace that would require a dedicated design team at a traditional agency",
            "AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads",
        ]
        p3 = [
            "With 40+ creatives in active rotation, the campaign avoided creative fatigue while AI-driven optimization compounded daily improvements across bid management, audience targeting, and budget allocation",
        ]
    else:
        # $25K+ range
        p1 = [
            "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
            "Launched initial creative testing suite with 30+ AI-generated ad variations across formats (static, carousel, video) to seed the algorithm with diverse creative signals from day one",
        ]
        p2 = [
            "Scaled AI-generated creative production to 50+ new variations per month, testing hooks, angles, offers, and visual styles simultaneously across audience segments",
            "AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads",
        ]
        p3 = [
            "With 80+ creatives in active rotation, the campaign eliminated creative fatigue entirely, new AI-generated variations replaced underperformers daily while the algorithm continuously optimized delivery",
            "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks",
        ]
    
    return p1, p2, p3


def is_ecom(content):
    """Detect if this is an ecommerce case study. Industry name is the primary signal."""
    ind = re.search(r'industry:\s*["\']([^"\']+)["\']', content)
    if ind:
        industry = ind.group(1).lower()
        if any(term in industry for term in ['ecom', 'fashion', 'apparel', 'retail', 'dtc', 'consumer brand', 'snack', 'food', 'furniture', 'jewelry', 'pet product', 'vr entertainment', 'wearable', 'health tech', 'firework']):
            return True
    return False


def has_value_props(content, force_ecom_update=False):
    """Check if file already has value prop language."""
    content_lower = content.lower()
    matches = sum(1 for marker in ALREADY_HAS if marker.lower() in content_lower)
    if matches >= 2:
        # Check if it has the OLD non-budget-aware ecom props that need updating
        if force_ecom_update and is_ecom(content):
            if '30+ ai-generated ad variations' in content_lower or '100+ creatives in active rotation' in content_lower:
                return False  # Force re-injection with budget-aware props
        return True
    return False


def find_items_array(content, start_pos):
    """Find the items array starting from start_pos, handling nested brackets."""
    items_match = re.search(r'items:\s*\[', content[start_pos:])
    if not items_match:
        return None, None
    
    bracket_start = start_pos + items_match.end()  # Position after opening [
    depth = 1
    i = bracket_start
    while i < len(content) and depth > 0:
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
        i += 1
    
    if depth == 0:
        return bracket_start, i - 1  # Return positions of content between [ and ]
    return None, None


def inject_into_phase(content, phase_num, items):
    """Inject strategy items into a specific phase's items array."""
    # Find the phase
    phase_match = re.search(rf'phase:\s*{phase_num}\b', content)
    if not phase_match:
        return content
    
    # Find the items array within this phase (before the next phase or end of strategy)
    next_phase = re.search(rf'phase:\s*{phase_num + 1}\b', content[phase_match.start():])
    search_end = phase_match.start() + next_phase.start() if next_phase else len(content)
    
    arr_start, arr_end = find_items_array(content, phase_match.start())
    if arr_start is None or arr_start > search_end:
        return content
    
    existing_items = content[arr_start:arr_end]
    
    # Build new items
    new_items = []
    for item in items:
        item_lower = item.lower()[:50]
        if item_lower not in existing_items.lower():
            # Use single quotes to avoid issues with embedded quotes
            escaped = item.replace("'", "\\'")
            new_items.append(f"        '{escaped}'")
    
    if not new_items:
        return content
    
    new_items_str = ',\n'.join(new_items)
    
    # Insert before the closing bracket
    existing_stripped = existing_items.rstrip()
    if existing_stripped.endswith(','):
        new_section = existing_stripped + '\n' + new_items_str + ',\n      '
    else:
        new_section = existing_stripped + ',\n' + new_items_str + ',\n      '
    
    return content[:arr_start] + new_section + content[arr_end:]


def process_file(filepath, dry_run=False):
    slug = os.path.basename(filepath).replace('.ts', '')
    if slug in ('types', 'index'):
        return False
    
    with open(filepath) as f:
        content = f.read()
    
    if has_value_props(content):
        return False
    
    # Check if file has strategy section
    if 'strategy:' not in content:
        return False
    
    original = content
    ecom = is_ecom(content)
    
    if ecom:
        p1_items, p2_items, p3_items = get_ecom_props(content)
    else:
        p1_items = PHASE1_LEADGEN
        p2_items = PHASE2_LEADGEN
        p3_items = PHASE3_LEADGEN
    
    content = inject_into_phase(content, 1, p1_items)
    content = inject_into_phase(content, 2, p2_items)
    
    # Try Phase 3 if it exists
    if re.search(r'phase:\s*3', content):
        content = inject_into_phase(content, 3, p3_items)
    
    if content != original:
        if dry_run:
            label = "ecom" if ecom else "lead gen"
            print(f"  Would update: {slug} ({label})")
        else:
            with open(filepath, 'w') as f:
                f.write(content)
            label = "ecom" if ecom else "lead gen"
            print(f"  ✅ Updated: {slug} ({label})")
        return True
    return False


def main():
    dry_run = '--dry-run' in sys.argv
    target_slug = None
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg.startswith('--slug='):
            target_slug = arg.split('=', 1)[1]
        elif arg == '--slug' and i < len(sys.argv) - 1:
            target_slug = sys.argv[i + 1]
    
    files = sorted(glob.glob(os.path.join(DATA_DIR, "*.ts")))
    updated = 0
    skipped_has_props = 0
    
    print(f"\n{'[DRY RUN] ' if dry_run else ''}Injecting MEGA value props into case studies...\n")
    
    for f in files:
        slug = os.path.basename(f).replace('.ts', '')
        if slug in ('types', 'index'):
            continue
        if target_slug and slug != target_slug:
            continue
        
        with open(f) as fh:
            content = fh.read()
        if has_value_props(content):
            skipped_has_props += 1
            continue
        
        if process_file(f, dry_run):
            updated += 1
    
    print(f"\n{'Would update' if dry_run else 'Updated'} {updated} files. ({skipped_has_props} already had value props)\n")


if __name__ == "__main__":
    main()
