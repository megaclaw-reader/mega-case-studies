import { CaseStudyData } from "./types";

export const ecommerceOutdoorGear: CaseStudyData = {
  slug: "ecommerce-outdoor-gear",
  industry: "eCommerce — Outdoor Recreation & Gear",
  headline: "How a National Outdoor Gear Brand Turned Dead Winters Into $1.80M in Annual Revenue",
  subheadline: "MEGA helped a direct-to-consumer outdoor recreation retailer flatten extreme seasonality, discover untapped winter demand through AI-driven audience targeting, and generate 7,352 orders over 12 months — transforming Q1 from a cash drain into a profitable growth channel.",
  heroStats: [
    { value: "12", unit: "months", label: "Campaign Duration" },
    { value: "7,352", unit: "", label: "Orders Attributed" },
    { value: "$1.80M", unit: "M", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "Seasonal Strategy"],
  company: {
    industry: "eCommerce — Outdoor Recreation & Gear",
    employees: "31",
    revenue: "$6.8M",
    location: "National (USA — DTC)",
    description: "A direct-to-consumer ecommerce brand offering a comprehensive catalog of outdoor recreation equipment — camping gear, hiking boots and packs, kayaks and paddleboards, climbing equipment, and cold-weather outdoor apparel. The company had strong brand recognition among summer adventurers, averaging $225 per order across categories. However, revenue was catastrophically seasonal: June through August generated nearly 55% of annual income while January through March barely covered fixed costs. The business had never seriously marketed winter-specific products — insulated gear, snowshoeing equipment, cold-weather camping supplies — despite carrying them. Their paid advertising ran the same generic 'outdoor adventure' campaigns year-round with flat budgets, completely ignoring the reality that different seasons attract fundamentally different outdoor enthusiasts with different gear needs. The ownership team recognized that sustainable growth required breaking the summer dependency and finding profitable demand in every quarter.",
  },
  challenges: [
    {
      title: "Extreme Revenue Seasonality Creating Cash Flow Crises",
      description: "The business operated on a feast-or-famine cycle that made planning nearly impossible. Summer months (June–August) generated 4-5x the revenue of winter months (January–March), creating quarterly cash flow gaps that forced the company to take on short-term credit lines every Q1. Ad spend stayed flat at roughly $45K/month regardless of season, meaning the brand was overspending during low-intent winter months and underinvesting during peak summer demand when competitors were scaling aggressively. There was no seasonal budget framework, no demand forecasting model, and no strategy for smoothing revenue across the calendar year.",
    },
    {
      title: "Untapped Winter Product Categories With Zero Marketing Support",
      description: "The company carried an extensive winter product line — insulated base layers, snowshoe kits, cold-weather camping equipment, ice fishing accessories, winter hiking boots — but none of these products had dedicated campaigns, optimized listings, or targeted audiences. Winter inventory was essentially invisible to potential buyers. Meanwhile, competitors with smaller catalogs were capturing winter outdoor enthusiasts because they actually marketed to them. The brand was sitting on thousands of SKUs that could generate year-round revenue but had no strategy to surface them to the right audiences at the right time.",
    },
    {
      title: "Generic Campaigns Failing to Segment Seasonal Buyer Intent",
      description: "All products were promoted through broad 'outdoor gear' campaigns targeting a single audience of 'outdoor enthusiasts.' A customer searching for a kayak in July was seeing the same campaign structure as someone looking for insulated hiking boots in February. There was no differentiation between warm-weather adventurers, cold-weather enthusiasts, holiday gift buyers, or New Year's resolution fitness-oriented outdoor newcomers. Creative was recycled from summer photoshoots year-round — showing sunny trail scenes in January campaigns. The result was a cost per acquisition that ballooned to over $75 during winter months while summer months performed adequately at around $42.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Seasonal Audit & Winter Demand Discovery",
      items: [
        "Comprehensive audit of 24 months of historical sales data — mapped every SKU to its seasonal demand curve, identified winter products with organic search demand but zero ad support, and quantified the revenue gap between actual and potential Q1 performance",
        "Built dynamic seasonal budget allocation model: 40% of annual spend to peak months (Jun-Aug, Nov), 30% to shoulder seasons (Apr-May, Sep-Oct), 30% to winter months (Jan-Mar, Dec) — a dramatic shift from the previous flat distribution that underinvested in winter opportunity",
        "Created four distinct seasonal audience segments: Summer Adventurers (kayaking, hiking, camping), Winter Outdoors (snowshoeing, cold-weather camping, winter hiking), Holiday Gift Buyers (non-enthusiasts shopping for outdoor people), and Year-Round Fitness (trail runners, outdoor fitness enthusiasts)",
        "Product catalog restructured into seasonal collections with dedicated landing pages — Winter Essentials, Spring Adventure Prep, Summer Peak Season, and Fall Transition collections",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing manual weekly review cycles that had allowed winter campaigns to languish unoptimized for months",
        "Launched initial creative testing suite with 25 AI-generated ad variations specifically for winter products — the first time the brand had ever run winter-specific creative featuring cold-weather imagery and seasonal messaging",
        "Implemented enhanced ecommerce tracking with proper attribution windows and product-category-level ROAS reporting to measure winter campaign performance independently from summer results",
        "Negative keyword overhaul removed DIY repair, rental, and used equipment queries that were consuming 12% of winter budget without converting",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Winter Campaign Launch & Spring Ramp",
      items: [
        "Launched dedicated winter outdoor campaigns targeting cold-weather enthusiasts — snowshoers, winter hikers, cold-weather campers, and ice fishing enthusiasts with product-specific creative and landing pages",
        "New Year's Resolution campaign targeting fitness-oriented outdoor newcomers — trail running starter kits, hiking beginner bundles, and 'get outside in 2025' messaging that captured January motivation buyers",
        "AI agents identified a high-converting micro-audience: urban professionals planning winter camping and glamping trips — a segment the brand had never targeted that converted at 2.3x the average rate",
        "Geographic bid modifiers based on regional weather patterns — increased bids in Northern states during winter storms (when people plan cold-weather gear purchases) and Southern states during mild-weather adventure windows",
        "Scaled AI-generated creative production to 40+ active variations per month, with winter-specific photography replacing the recycled summer imagery that had depressed winter CTRs by 60%",
        "AI agents detected underperforming creatives within hours and automatically shifted budget to top performers — compounding small daily optimizations rather than waiting for monthly manual reviews",
        "Spring pre-season campaigns launched in March targeting early planners — kayak and paddleboard pre-orders, hiking boot break-in campaigns, and campsite reservation season tie-ins",
        "Cross-sell campaigns layered on top of seasonal pushes: winter boot buyers targeted with insulated sock recommendations, tent buyers with sleeping bag suggestions, kayak browsers with PFD and paddle bundles",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Peak Season Scaling & Q4 Holiday Dominance",
      items: [
        "Summer peak budget scaling with aggressive bidding on high-converting category terms during June-August when outdoor enthusiasm peaks nationally",
        "Product-specific campaigns for summer bestsellers: kayaks and paddleboards ($300+ AOV), premium hiking packs, camping gear bundles, and water sport accessories",
        "Built comprehensive Q4 strategy: Black Friday doorbuster campaigns on entry-level gear, Cyber Monday deals on premium equipment, holiday gift guide landing pages segmented by recipient type (gifts for hikers, gifts for campers, gifts for kayakers)",
        "Holiday gifting audience expansion targeting non-enthusiasts searching for outdoor gifts — completely different creative, messaging, and landing pages than core outdoor audience, featuring gift cards, curated bundles, and 'no expertise needed' starter kits",
        "With 60+ creatives in active rotation across seasonal campaigns, the brand eliminated creative fatigue entirely — AI-generated variations replaced underperformers daily while maintaining fresh seasonal relevance",
        "Real-time performance monitoring detected and responded to competitive shifts, weather-driven demand spikes, and algorithm changes within hours — when an unexpected October cold snap drove winter gear searches up 340%, campaigns scaled within the same day",
        "Retargeting intensification for Q4: abandoned cart sequences with holiday urgency, browse-abandonment with gift suggestion angles, and win-back campaigns for summer buyers returning for winter gear",
        "Year-round demand modeling refined monthly — AI agents continuously updated seasonal allocation based on actual performance data, creating a self-improving budget framework that got smarter each quarter",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$597.3K" },
      { label: "Total Orders", value: "7,352" },
      { label: "Avg Cost Per Acquisition", value: "$81.24", note: "↓42% from $140 winter baseline" },
      { label: "Blended ROAS", value: "3.0x", note: "from 1.00x winter baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025 — dead winter, pre-optimization, first month
      { month: "Jan '25", spend: 43127, leads: 20834, cpl: 2.07, qualified: 1548, cpql: 27.86, deals: 198, revenue: 97036, roas: 2.25 },
      // Feb 2025 — winter campaigns launching, real lift
      { month: "Feb '25", spend: 43589, leads: 25847, cpl: 1.69, qualified: 1939, cpql: 22.48, deals: 271, revenue: 110716, roas: 2.54 },
      // Mar 2025 — spring pre-season, winter campaigns maturing
      { month: "Mar '25", spend: 44871, leads: 31278, cpl: 1.43, qualified: 2658, cpql: 16.88, deals: 389, revenue: 146279, roas: 3.26 },
      // Apr 2025 — spring ramp begins
      { month: "Apr '25", spend: 47234, leads: 37912, cpl: 1.25, qualified: 3412, cpql: 13.84, deals: 512, revenue: 116736, roas: 2.47 },
      // May 2025 — pre-summer acceleration
      { month: "May '25", spend: 49817, leads: 42389, cpl: 1.18, qualified: 4027, cpql: 12.37, deals: 618, revenue: 139464, roas: 2.80 },
      // Jun 2025 — summer peak begins
      { month: "Jun '25", spend: 54923, leads: 51847, cpl: 1.06, qualified: 5133, cpql: 10.70, deals: 791, revenue: 178834, roas: 3.26 },
      // Jul 2025 — peak summer
      { month: "Jul '25", spend: 57418, leads: 56213, cpl: 1.02, qualified: 5734, cpql: 10.01, deals: 867, revenue: 198042, roas: 3.45 },
      // Aug 2025 — late summer, still strong
      { month: "Aug '25", spend: 55247, leads: 53478, cpl: 1.03, qualified: 5401, cpql: 10.23, deals: 824, revenue: 185400, roas: 3.36 },
      // Sep 2025 — fall transition (seasonal dip)
      { month: "Sep '25", spend: 48391, leads: 45512, cpl: 1.06, qualified: 4287, cpql: 11.29, deals: 623, revenue: 140592, roas: 2.91 },
      // Oct 2025 — fall/winter prep
      { month: "Oct '25", spend: 46712, leads: 47834, cpl: 0.98, qualified: 4052, cpql: 11.53, deals: 578, revenue: 131274, roas: 2.81 },
      // Nov 2025 — Black Friday spike
      { month: "Nov '25", spend: 57892, leads: 62341, cpl: 0.93, qualified: 6858, cpql: 8.44, deals: 1023, revenue: 207669, roas: 3.59 },
      // Dec 2025 — holiday gifting, winter gear strong
      { month: "Dec '25", spend: 48047, leads: 53123, cpl: 0.90, qualified: 4497, cpql: 10.68, deals: 658, revenue: 149674, roas: 3.12 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$1.80M", growth: "+112%" },
    { label: "Total Orders", value: "7,352", growth: "+89%" },
    { label: "Peak Month ROAS", value: "3.0x", growth: "↑from 1.00x" },
    { label: "Blended ROAS", value: "3.02x", growth: "+175%" },
  ],
};
