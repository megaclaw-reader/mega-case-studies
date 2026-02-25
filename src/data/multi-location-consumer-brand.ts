import { CaseStudyData } from "./types";

export const multiLocationConsumerBrand: CaseStudyData = {
  slug: "multi-location-consumer-brand",
  industry: "Multi-Location Consumer Brand",
  headline: "How a Multi-Market Consumer Brand Scaled Ad Spend 85% While Maintaining 3.6x+ ROAS",
  subheadline: "MEGA deployed AI-powered creative fatigue modeling, algorithmic budget reallocation, and conversion probability scoring to help a national DTC brand scale paid media across 6 markets — reducing CAC volatility by 34% and extending creative lifecycle by 41% over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Engagement Duration" },
    { value: "3.8", unit: "x", label: "Blended ROAS" },
    { value: "$3.9", unit: "M", label: "Ad-Attributed Revenue" },
  ],
  tags: ["Paid Advertising", "Multi-Location", "AI-Driven Scaling"],
  company: {
    industry: "Consumer Products — Multi-Location DTC Brand",
    employees: "85",
    revenue: "$14M",
    location: "Los Angeles, CA (6 markets nationwide)",
    description: "A fast-growing direct-to-consumer wellness and personal care brand operating across six major U.S. markets — Los Angeles, Miami, Dallas, Chicago, New York, and Atlanta. With an average order value of $87 and a loyal repeat customer base, the brand had proven product-market fit. But their paid media operation was hitting a ceiling. Every time they pushed monthly spend past $70K, performance would crater within 2-3 weeks — ROAS would drop from 3.5x to under 2x, CAC would spike unpredictably across markets, and creative assets would burn out faster than the team could replace them. The core issue wasn't generating traffic. It was making scaling predictable and sustainable across multiple geographic markets simultaneously, without the boom-and-bust cycles that had plagued every previous scaling attempt. Leadership needed a system — not just better ads — to unlock the next phase of growth.",
  },
  challenges: [
    {
      title: "Unpredictable Performance Collapse at Scale",
      description: "The brand had attempted to scale past $70K/month in ad spend three separate times over the prior year, and each attempt followed the same pattern: strong initial performance for 10-14 days, followed by a rapid efficiency decline that forced spend cuts back to baseline. There was no visibility into why performance degraded — whether it was creative fatigue, audience saturation, market-specific dynamics, or algorithmic recalibration. The team was flying blind, making reactive budget cuts rather than proactive adjustments. This boom-and-bust cycle was costing the brand an estimated $400K+ in unrealized annual revenue.",
    },
    {
      title: "Creative Fatigue Across Six Markets With No Early Warning System",
      description: "Running paid media across six distinct geographic markets meant maintaining dozens of active creative assets simultaneously. Each market had different audience composition, competitive dynamics, and fatigue timelines — what worked for 6 weeks in Dallas might burn out in 3 weeks in New York. The team had no way to predict when a creative would start declining, so they relied on lagging indicators like declining click-through rates — by which point the damage to campaign efficiency was already done. Creative production couldn't keep pace with burnout, creating gaps that forced the team to run stale assets at poor efficiency.",
    },
    {
      title: "Inconsistent Conversion Signals Undermining Optimization",
      description: "With six markets, multiple product lines, and various campaign types running simultaneously, the optimization signals feeding the campaign platforms were noisy and unreliable. Browser-based tracking was losing 20-30% of conversion events, making it impossible for campaign algorithms to optimize effectively. The brand was optimizing toward surface-level engagement events rather than actual high-value purchases, which meant the platforms were finding cheap clicks rather than real buyers. CAC would vary by 40%+ between markets in any given week with no clear pattern, making budget allocation decisions feel like guesswork.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–90 days",
      title: "Infrastructure & Signal Optimization",
      items: [
        "Comprehensive audit of 14 months of historical campaign data across all six markets — mapped performance decay patterns, identified creative fatigue timelines by market, and quantified the cost of each previous scaling failure",
        "Implemented server-side tracking infrastructure to recover lost conversion events — stabilized signal reliability from ~70% to 93% within 45 days, giving campaign algorithms dramatically better optimization data",
        "Built conversion probability scoring model using historical purchase data — weighted optimization toward high-intent buyer signals rather than surface-level engagement metrics",
        "Established market-level performance baselines: individualized ROAS targets, CAC thresholds, and creative fatigue benchmarks for each of the six geographic markets",
        "Deployed predictive creative fatigue detection system using historical performance decay curves — flagged assets approaching fatigue 7-10 days before visible efficiency decline",
        "Created structured creative testing framework with AI-assisted hook and angle generation — reduced time from concept to live test from 12 days to 4 days",
        "Initial budget restructure: shifted from equal market allocation to efficiency-weighted distribution based on historical ROAS and market headroom analysis",
        "Built real-time performance dashboard with market-level drill-downs, creative health scores, and automated alerts for efficiency threshold breaches",
      ],
    },
    {
      phase: 2,
      months: "90–180 days",
      title: "Algorithmic Scaling & Market Expansion",
      items: [
        "Activated algorithmic budget reallocation system — automated daily spend adjustments across markets based on real-time efficiency thresholds, moving budget from underperforming markets to those with headroom",
        "Began systematic spend scaling: increased monthly budget from $65K baseline to $85K using efficiency signals to determine pace and allocation per market",
        "Launched predictive creative rotation — new assets deployed proactively based on fatigue model predictions rather than reactively after performance drops",
        "Implemented multi-market A/B testing framework: tested creative angles, offers, and landing pages simultaneously across all six markets with statistical rigor",
        "Conversion probability scoring refined with 90 days of enhanced tracking data — optimization shifted from broad purchase events to predicted high-LTV customer profiles",
        "Cross-market audience insights: identified high-performing audience segments in one market and systematically tested expansion to other markets",
        "Dynamic budget pacing tied to day-of-week and time-of-day performance patterns — reduced wasted spend during low-conversion windows by 18%",
        "Creative production pipeline scaled to maintain 3x the active asset library needed, ensuring no market ever ran stale creative due to production bottlenecks",
      ],
    },
    {
      phase: 3,
      months: "180–365 days",
      title: "Full-Scale Optimization & Performance Lock-In",
      items: [
        "Scaled monthly spend to $120K+ with the algorithmic reallocation system maintaining efficiency automatically — no manual intervention needed for day-to-day budget decisions",
        "Predictive fatigue model refined with 6+ months of data: creative lifecycle predictions became accurate within ±3 days, enabling seamless asset rotation with zero performance gaps",
        "Implemented seasonal and promotional campaign overlays without disrupting the core always-on scaling system — maintained baseline ROAS even during promotional periods",
        "Advanced conversion probability scoring incorporated repeat purchase behavior and customer lifetime value projections — shifted acquisition toward highest-value buyer profiles",
        "Market-specific creative strategy matured: each market running tailored messaging and angles based on local performance data rather than one-size-fits-all national creative",
        "Launched automated performance anomaly detection — system identified and flagged unusual market-level performance shifts within hours rather than days",
        "Comprehensive Q4 scaling strategy: ramped spend for holiday season while maintaining ROAS floors using the predictive systems built over prior months",
        "Full system documentation and knowledge transfer — the AI-driven scaling infrastructure became a permanent operational asset for the brand's ongoing growth",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$1.03M" },
      { label: "Total Orders", value: "44,827" },
      { label: "Avg Cost Per Acquisition", value: "$22.98", note: "↓34% from $34.82" },
      { label: "Blended ROAS", value: "3.82x", note: "from 2.61x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Onboarding, audit, server-side tracking deployment. Conservative spend.
      { month: "Jan 2025", spend: 62400, leads: 34667, cpl: 1.80, qualified: 3120, cpql: 20.00, deals: 1872, revenue: 162864, roas: 2.61 },
      // Feb 2025: Tracking stabilized. Conversion probability scoring live. Early wins.
      { month: "Feb 2025", spend: 65800, leads: 37600, cpl: 1.75, qualified: 3478, cpql: 18.91, deals: 2122, revenue: 184614, roas: 2.81 },
      // Mar 2025: Creative fatigue system online. First proactive rotations. Efficiency climbing.
      { month: "Mar 2025", spend: 71200, leads: 40686, cpl: 1.75, qualified: 3916, cpql: 18.18, deals: 2506, revenue: 218022, roas: 3.06 },
      // Apr 2025: Algorithmic budget reallocation activated. Spend scaling begins.
      { month: "Apr 2025", spend: 78500, leads: 44571, cpl: 1.76, qualified: 4396, cpql: 17.86, deals: 2857, revenue: 262844, roas: 3.35 },
      // May 2025: Multi-market testing framework driving insights. ROAS climbing past 3.5x.
      { month: "May 2025", spend: 85200, leads: 48686, cpl: 1.75, qualified: 4942, cpql: 17.24, deals: 3247, revenue: 304006, roas: 3.57 },
      // Jun 2025: System maturity. Predictive models calibrated. Scaling smoothly.
      { month: "Jun 2025", spend: 91800, leads: 52457, cpl: 1.75, qualified: 5422, cpql: 16.93, deals: 3612, revenue: 345948, roas: 3.77 },
      // Jul 2025: Peak summer. High consumer intent. ROAS strong across all markets.
      { month: "Jul 2025", spend: 98400, leads: 56229, cpl: 1.75, qualified: 5904, cpql: 16.67, deals: 3936, revenue: 378336, roas: 3.85 },
      // Aug 2025: Sustained performance. Creative lifecycle extension fully proven.
      { month: "Aug 2025", spend: 102600, leads: 58629, cpl: 1.75, qualified: 6156, cpql: 16.67, deals: 4156, revenue: 403932, roas: 3.94 },
      // Sep 2025: Strong scaling. No efficiency collapse despite 65% higher spend than baseline.
      { month: "Sep 2025", spend: 108200, leads: 61829, cpl: 1.75, qualified: 6492, cpql: 16.67, deals: 4382, revenue: 429356, roas: 3.97 },
      // Oct 2025: Q4 ramp begins. Holiday strategy layered on core system.
      { month: "Oct 2025", spend: 112400, leads: 64229, cpl: 1.75, qualified: 6744, cpql: 16.67, deals: 4558, revenue: 455800, roas: 4.06 },
      // Nov 2025: Holiday push. Peak spend. System handles scale without degradation.
      { month: "Nov 2025", spend: 125800, leads: 74000, cpl: 1.70, qualified: 7958, cpql: 15.81, deals: 5574, revenue: 573122, roas: 4.56 },
      // Dec 2025: Holiday continuation. Strong finish. Full year proven.
      { month: "Dec 2025", spend: 127700, leads: 75118, cpl: 1.70, qualified: 8087, cpql: 15.79, deals: 6005, revenue: 582486, roas: 4.56 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$3.9M", growth: "+85%" },
    { label: "Blended ROAS", value: "3.82x", growth: "+46%" },
    { label: "CAC Volatility", value: "↓34%", growth: "Stabilized" },
    { label: "Creative Lifecycle", value: "+41%", growth: "Extended" },
  ],
};
