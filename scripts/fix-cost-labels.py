#!/usr/bin/env python3
"""Add industry-specific costPerDeal labels to all lead-gen case studies."""
import os, re, glob

DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data')

# Map deals label patterns to costPerDeal labels
LABEL_MAP = {
    # Medical/Health → Cost/Patient
    'New Patients': 'Cost/Patient',
    'Booked Treatments': 'Cost/Patient',
    'Booked Appointments': 'Cost/Appointment',
    'Booked Clients': 'Cost/Client',
    'Trial Bookings': 'Cost/Booking',
    # Legal → Cost/Case
    'Signed Retainers': 'Cost/Case',
    'Signed Engagements': 'Cost/Case',
    'Retainers': 'Cost/Case',
    'Signed Cases': 'Cost/Case',
    'Retained Clients': 'Cost/Case',
    # Real estate
    'Closed Deals': 'Cost/Deal',
    'Closed Projects': 'Cost/Project',
    'Closed Jobs': 'Cost/Job',
    'Booked Jobs': 'Cost/Job',
    'Jobs Closed': 'Cost/Job',
    'Completed Jobs': 'Cost/Job',
    'Booked Moves': 'Cost/Move',
    'Deals Closed': 'Cost/Deal',
    'Deals Funded': 'Cost/Deal',
    # Insurance
    'Policies Bound': 'Cost/Policy',
    'Policies Sold': 'Cost/Policy',
    # Contracts/B2B
    'Contracts Signed': 'Cost/Contract',
    'Signed Contracts': 'Cost/Contract',
    'Closed Deals': 'Cost/Deal',
    # Services
    'New Clients': 'Cost/Client',
    'Signed Clients': 'Cost/Client',
    'New Members': 'Cost/Member',
    'New Subscribers': 'Cost/Subscriber',
    'Annual Plans': 'Cost/Subscriber',
    'Subscribers': 'Cost/Subscriber',
    'New Subscriptions': 'Cost/Subscription',
    'Enrollments': 'Cost/Enrollment',
    'Confirmed Bookings': 'Cost/Booking',
    'Bookings': 'Cost/Booking',
    'Weddings Booked': 'Cost/Booking',
    'Signed Jobs': 'Cost/Job',
    'Projects Won': 'Cost/Project',
    'Sales Closed': 'Cost/Sale',
    'Installs Closed': 'Cost/Install',
    'Placements': 'Cost/Placement',
    'Successful Placements': 'Cost/Placement',
    'Sponsors Secured': 'Cost/Sponsor',
    'Donations': 'Cost/Donation',
    'Equipment Sales': 'Cost/Sale',
    'Purchase Orders': 'Cost/Order',
    'Conversions': 'Cost/Conversion',
    # Ecom - these already show Cost/Order from component logic, but let's be explicit
    'Orders': None,  # Skip - component handles this
}

fixed = 0
skipped = 0

for fpath in sorted(glob.glob(os.path.join(DATA_DIR, '*.ts'))):
    if fpath.endswith('types.ts') or fpath.endswith('index.ts'):
        continue
    
    with open(fpath) as f:
        content = f.read()
    
    # Skip if already has costPerDeal
    if 'costPerDeal' in content:
        continue
    
    # Find deals label in columnLabels
    m = re.search(r'deals:\s*"([^"]+)"', content)
    if not m:
        continue
    
    deals_label = m.group(1)
    
    # Skip ecom (Orders) - component handles it
    if deals_label == 'Orders':
        skipped += 1
        continue
    
    cost_label = LABEL_MAP.get(deals_label)
    if not cost_label:
        print(f"UNKNOWN deals label: {deals_label} in {os.path.basename(fpath)}")
        continue
    
    # Insert costPerDeal after deals line in columnLabels
    new_content = re.sub(
        r'(deals:\s*"[^"]+",?\s*\n)((\s*))',
        rf'\1\3costPerDeal: "{cost_label}",\n\3',
        content,
        count=1
    )
    
    if new_content != content:
        with open(fpath, 'w') as f:
            f.write(new_content)
        fixed += 1
        print(f"✅ {os.path.basename(fpath)}: {deals_label} → {cost_label}")

print(f"\nFixed: {fixed}, Skipped ecom: {skipped}")
