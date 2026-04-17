#!/usr/bin/env python3
"""
Quality review script — catches "technically valid but weak" case studies.
This is NOT a math check (full-audit.py does that). This checks whether the
data tells a compelling, believable story that a sales rep can actually sell with.

Run: python3 scripts/quality-review.py --slug <slug>
"""

import argparse
import importlib
import json
import os
import re
import subprocess
import sys

THRESHOLDS = {
    # Paid Ads quality gates
    "min_lead_growth_multiplier": 2.0,       # Final month leads must be >= 2x first month
    "min_cpql_reduction_pct": 40,            # CPQL must drop at least 40%
    "min_deal_growth_multiplier": 1.8,       # Final month deals must be >= 1.8x first month
    "max_consecutive_flat_months": 2,         # No more than 2 months with <5% lead growth
    "max_month_over_month_drop_pct": 15,     # No single month drops more than 15% in leads (seasonal dips ok)
    "min_final_quarter_avg_vs_first": 2.0,   # Q4 avg leads must be >= 2x Q1 avg
    "no_cliff_last_2_months": True,          # Last 2 months can't both decline vs their prior month

    # SEO quality gates (when present)
    "min_keyword_growth_multiplier": 20,     # Keywords must grow at least 20x
    "min_traffic_growth_multiplier": 8,      # Traffic must grow at least 8x
    "seo_hockey_stick_month": 4,             # Compounding growth must be visible by month 4

    # Story quality
    "min_unique_cpql_values": 6,             # At least 6 different CPQL values across 12 months
    "min_unique_roas_values": 6,             # At least 6 different ROAS values
    "min_revenue_growth_pct": 50,            # Revenue must grow at least 50% first→last month
}


def load_case_study_data(slug):
    """Load case study data from the TypeScript file by parsing it."""
    data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
    filepath = os.path.join(data_dir, f"{slug}.ts")

    if not os.path.exists(filepath):
        print(f"❌ File not found: {filepath}")
        sys.exit(1)

    with open(filepath, "r") as f:
        content = f.read()

    return content, filepath


def extract_monthly_paid(content):
    """Extract monthly paid ads data from the TypeScript file."""
    months = []
    # Find paidAds monthly array
    paid_match = re.search(r'paidAds:\s*\{.*?monthly:\s*\[(.*?)\]', content, re.DOTALL)
    if not paid_match:
        return months

    monthly_str = paid_match.group(1)
    # Extract each month object
    for m in re.finditer(r'\{([^}]+)\}', monthly_str):
        obj = m.group(1)
        month = {}
        for key in ['month', 'spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 'revenue', 'roas']:
            val_match = re.search(rf'{key}:\s*(["\d.,]+)', obj)
            if val_match:
                val = val_match.group(1).strip('"').rstrip(',')
                try:
                    month[key] = float(val) if '.' in val else int(val)
                except ValueError:
                    month[key] = val
        if month:
            months.append(month)

    return months


def extract_monthly_seo(content):
    """Extract monthly SEO data from the TypeScript file."""
    months = []
    seo_match = re.search(r'seo:\s*\{.*?monthly:\s*\[(.*?)\]', content, re.DOTALL)
    if not seo_match:
        return months

    monthly_str = seo_match.group(1)
    for m in re.finditer(r'\{([^}]+)\}', monthly_str):
        obj = m.group(1)
        month = {}
        for key in ['month', 'keywords', 'top10', 'top3', 'traffic', 'pages', 'avgPos', 'ctr']:
            val_match = re.search(rf'{key}:\s*(["\d.,]+)', obj)
            if val_match:
                val = val_match.group(1).strip('"').rstrip(',')
                try:
                    month[key] = float(val) if '.' in val else int(val)
                except ValueError:
                    month[key] = val
        if month:
            months.append(month)

    return months


def check_paid_quality(months, issues, warnings):
    """Check paid ads data for quality/compellingness."""
    if len(months) < 4:
        issues.append("Too few months of paid data to evaluate")
        return

    n = len(months)

    # 1. Lead growth
    first_leads = months[0].get('leads', 0)
    last_leads = months[-1].get('leads', 0)
    if first_leads > 0:
        lead_mult = last_leads / first_leads
        if lead_mult < THRESHOLDS['min_lead_growth_multiplier']:
            issues.append(
                f"WEAK LEAD GROWTH: {first_leads} → {last_leads} ({lead_mult:.1f}x). "
                f"Need at least {THRESHOLDS['min_lead_growth_multiplier']}x growth to tell a compelling story."
            )
        else:
            print(f"  ✅ Lead growth: {first_leads} → {last_leads} ({lead_mult:.1f}x)")

    # 2. CPQL reduction
    first_cpql = months[0].get('cpql', 0)
    last_cpql = months[-1].get('cpql', 0)
    if first_cpql > 0:
        cpql_reduction = ((first_cpql - last_cpql) / first_cpql) * 100
        if cpql_reduction < THRESHOLDS['min_cpql_reduction_pct']:
            issues.append(
                f"WEAK CPQL REDUCTION: ${first_cpql} → ${last_cpql} ({cpql_reduction:.0f}% drop). "
                f"Need at least {THRESHOLDS['min_cpql_reduction_pct']}% reduction. This won't impress anyone."
            )
        else:
            print(f"  ✅ CPQL reduction: ${first_cpql} → ${last_cpql} ({cpql_reduction:.0f}% drop)")

    # 3. Deal growth
    first_deals = months[0].get('deals', 0)
    last_deals = months[-1].get('deals', 0)
    if first_deals > 0:
        deal_mult = last_deals / first_deals
        if deal_mult < THRESHOLDS['min_deal_growth_multiplier']:
            issues.append(
                f"WEAK DEAL GROWTH: {first_deals} → {last_deals} ({deal_mult:.1f}x). "
                f"Need at least {THRESHOLDS['min_deal_growth_multiplier']}x. A prospect won't switch agencies for marginal gains."
            )
        else:
            print(f"  ✅ Deal growth: {first_deals} → {last_deals} ({deal_mult:.1f}x)")

    # 4. No extended flat periods in leads
    flat_streak = 0
    max_flat = 0
    for i in range(1, n):
        prev = months[i-1].get('leads', 0)
        curr = months[i].get('leads', 0)
        if prev > 0 and curr > 0:
            growth = (curr - prev) / prev
            if growth < 0.05:  # Less than 5% growth
                flat_streak += 1
                max_flat = max(max_flat, flat_streak)
            else:
                flat_streak = 0

    if max_flat > THRESHOLDS['max_consecutive_flat_months']:
        issues.append(
            f"STAGNANT GROWTH: {max_flat} consecutive months with <5% lead growth. "
            f"The story needs momentum — every quarter should feel like acceleration."
        )
    else:
        print(f"  ✅ No extended flat periods (max {max_flat} consecutive slow months)")

    # 5. No cliff in last 2 months
    if THRESHOLDS['no_cliff_last_2_months'] and n >= 3:
        last = months[-1].get('leads', 0)
        second_last = months[-2].get('leads', 0)
        third_last = months[-3].get('leads', 0)
        if last < second_last and second_last < third_last:
            issues.append(
                f"ENDING ON A DECLINE: Last 2 months both dropped in leads "
                f"({third_last} → {second_last} → {last}). "
                f"Never end a case study going backwards — the prospect's last impression should be momentum."
            )
        else:
            print(f"  ✅ No cliff at end of engagement")

    # 6. Q4 vs Q1 comparison
    if n >= 8:
        q1_avg = sum(m.get('leads', 0) for m in months[:3]) / 3
        q4_avg = sum(m.get('leads', 0) for m in months[-3:]) / 3
        if q1_avg > 0:
            q_ratio = q4_avg / q1_avg
            if q_ratio < THRESHOLDS['min_final_quarter_avg_vs_first']:
                issues.append(
                    f"Q4 vs Q1 UNDERWHELMING: Q1 avg {q1_avg:.0f} leads → Q4 avg {q4_avg:.0f} leads ({q_ratio:.1f}x). "
                    f"Need {THRESHOLDS['min_final_quarter_avg_vs_first']}x. The transformation should be obvious at a glance."
                )
            else:
                print(f"  ✅ Q4 vs Q1: {q1_avg:.0f} → {q4_avg:.0f} ({q_ratio:.1f}x)")

    # 7. Uniqueness of values (anti-uniformity)
    cpql_values = set(m.get('cpql', 0) for m in months)
    roas_values = set(m.get('roas', 0) for m in months)

    if len(cpql_values) < THRESHOLDS['min_unique_cpql_values']:
        warnings.append(
            f"REPETITIVE CPQL: Only {len(cpql_values)} unique values across {n} months. "
            f"Real campaigns don't produce identical costs — add realistic variance."
        )
    else:
        print(f"  ✅ CPQL variance: {len(cpql_values)} unique values")

    if len(roas_values) < THRESHOLDS['min_unique_roas_values']:
        warnings.append(
            f"REPETITIVE ROAS: Only {len(roas_values)} unique values across {n} months. "
            f"Looks algorithmically generated — needs more natural variance."
        )
    else:
        print(f"  ✅ ROAS variance: {len(roas_values)} unique values")

    # 8. Revenue growth
    first_rev = months[0].get('revenue', 0)
    last_rev = months[-1].get('revenue', 0)
    if first_rev > 0:
        rev_growth = ((last_rev - first_rev) / first_rev) * 100
        if rev_growth < THRESHOLDS['min_revenue_growth_pct']:
            issues.append(
                f"WEAK REVENUE GROWTH: ${first_rev:,.0f} → ${last_rev:,.0f} ({rev_growth:.0f}% growth). "
                f"Need at least {THRESHOLDS['min_revenue_growth_pct']}% growth to show real business impact."
            )
        else:
            print(f"  ✅ Revenue growth: ${first_rev:,.0f} → ${last_rev:,.0f} ({rev_growth:.0f}%)")

    # 9. Month-over-month drops check
    big_drops = []
    for i in range(1, n):
        prev = months[i-1].get('leads', 0)
        curr = months[i].get('leads', 0)
        if prev > 0:
            change = ((curr - prev) / prev) * 100
            if change < -THRESHOLDS['max_month_over_month_drop_pct']:
                big_drops.append(f"{months[i].get('month', f'Month {i+1}')}: {change:.0f}%")

    if big_drops:
        issues.append(
            f"UNEXPLAINED DROPS: {', '.join(big_drops)}. "
            f"Drops >{THRESHOLDS['max_month_over_month_drop_pct']}% need seasonal justification. "
            f"Random dips make the data look fake."
        )
    else:
        print(f"  ✅ No unexplained large drops in lead volume")


def check_seo_quality(months, issues, warnings):
    """Check SEO data for quality/compellingness."""
    if not months or len(months) < 4:
        return

    n = len(months)
    print(f"\n📊 SEO Quality Check ({n} months):")

    # 1. Keyword growth
    first_kw = months[0].get('keywords', 0)
    last_kw = months[-1].get('keywords', 0)
    if first_kw > 0:
        kw_mult = last_kw / first_kw
        if kw_mult < THRESHOLDS['min_keyword_growth_multiplier']:
            issues.append(
                f"WEAK KEYWORD GROWTH: {first_kw} → {last_kw} ({kw_mult:.0f}x). "
                f"Need {THRESHOLDS['min_keyword_growth_multiplier']}x+ to show SEO authority building."
            )
        else:
            print(f"  ✅ Keyword growth: {first_kw} → {last_kw} ({kw_mult:.0f}x)")

    # 2. Traffic growth
    first_traffic = months[0].get('traffic', 0)
    last_traffic = months[-1].get('traffic', 0)
    if first_traffic > 0:
        traffic_mult = last_traffic / first_traffic
        if traffic_mult < THRESHOLDS['min_traffic_growth_multiplier']:
            issues.append(
                f"WEAK TRAFFIC GROWTH: {first_traffic} → {last_traffic} ({traffic_mult:.0f}x). "
                f"Need {THRESHOLDS['min_traffic_growth_multiplier']}x+. Traffic is what clients care about most."
            )
        else:
            print(f"  ✅ Traffic growth: {first_traffic} → {last_traffic} ({traffic_mult:.0f}x)")

    # 3. Hockey stick check — by month 4, growth should be compounding
    if n >= THRESHOLDS['seo_hockey_stick_month']:
        m4_kw = months[THRESHOLDS['seo_hockey_stick_month'] - 1].get('keywords', 0)
        if first_kw > 0 and m4_kw > 0:
            early_mult = m4_kw / first_kw
            if early_mult < 5:
                warnings.append(
                    f"SLOW SEO START: Only {early_mult:.1f}x keyword growth by month {THRESHOLDS['seo_hockey_stick_month']}. "
                    f"Should show clear hockey stick acceleration by this point."
                )
            else:
                print(f"  ✅ Hockey stick visible by month {THRESHOLDS['seo_hockey_stick_month']} ({early_mult:.1f}x)")


def main():
    parser = argparse.ArgumentParser(description="Quality review for case study data")
    parser.add_argument("--slug", required=True, help="Case study slug")
    parser.add_argument("--strict", action="store_true", help="Treat warnings as errors")
    args = parser.parse_args()

    content, filepath = load_case_study_data(args.slug)
    print(f"\n🔍 Quality Review: {args.slug}")
    print(f"   File: {filepath}\n")

    issues = []
    warnings = []

    # Check paid ads
    paid_months = extract_monthly_paid(content)
    if paid_months:
        print(f"📊 Paid Ads Quality Check ({len(paid_months)} months):")
        check_paid_quality(paid_months, issues, warnings)

    # Check SEO
    seo_months = extract_monthly_seo(content)
    if seo_months:
        check_seo_quality(seo_months, issues, warnings)

    # Results
    print()
    if warnings:
        print(f"⚠️  {len(warnings)} WARNING(S):")
        for w in warnings:
            print(f"  ⚠️  {w}")
        print()

    if issues:
        print(f"🚨 {len(issues)} QUALITY ISSUE(S) — THIS CASE STUDY IS NOT READY TO SHIP:")
        for issue in issues:
            print(f"  ❌ {issue}")
        print()
        if args.strict or True:  # Always block on quality issues
            print("❌ BLOCKED — fix these issues before deploying.")
            sys.exit(1)
    else:
        print("✅ Quality review passed — this case study tells a compelling story.")
        sys.exit(0)


if __name__ == "__main__":
    main()
