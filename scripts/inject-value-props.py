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

PHASE1_ECOM = [
    "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence",
    "Launched initial creative testing suite with 30+ AI-generated ad variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals",
]

# Value props for Phase 2
PHASE2_LEADGEN = [
    "AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains",
]

PHASE2_ECOM = [
    "Scaled AI-generated creative production to 50+ new variations per month, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams",
    "AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads",
]

# Value props for Phase 3+
PHASE3_LEADGEN = [
    "Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles",
]

PHASE3_ECOM = [
    "With 100+ creatives in active rotation, the campaign avoided creative fatigue entirely, a common problem for businesses running fewer than 10 ads at a time",
    "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks",
]


def is_ecom(content):
    """Detect if this is an ecommerce case study. Industry name is the primary signal."""
    ind = re.search(r'industry:\s*["\']([^"\']+)["\']', content)
    if ind:
        industry = ind.group(1).lower()
        if any(term in industry for term in ['ecom', 'fashion', 'apparel', 'retail', 'dtc', 'consumer brand', 'snack', 'food', 'furniture', 'jewelry', 'pet product', 'vr entertainment', 'wearable', 'health tech', 'firework']):
            return True
    return False


def has_value_props(content):
    """Check if file already has value prop language."""
    content_lower = content.lower()
    matches = sum(1 for marker in ALREADY_HAS if marker.lower() in content_lower)
    return matches >= 2  # Need at least 2 markers to consider it already done


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
    
    # Inject into phases
    p1_items = PHASE1_ECOM if ecom else PHASE1_LEADGEN
    p2_items = PHASE2_ECOM if ecom else PHASE2_LEADGEN
    
    content = inject_into_phase(content, 1, p1_items)
    content = inject_into_phase(content, 2, p2_items)
    
    # Try Phase 3 if it exists
    if re.search(r'phase:\s*3', content):
        p3_items = PHASE3_ECOM if ecom else PHASE3_LEADGEN
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
