import { CaseStudyData } from "./types";

export const windowRepairArizona: CaseStudyData = {
  slug: "window-repair-arizona",
  industry: "Window Repair",
  headline: "How an Arizona Window Repair Company Built a Sustainable Lead Pipeline With Paid Advertising",
  subheadline: "MEGA helped a local window repair and replacement service in Arizona develop a structured paid advertising engine — reducing cost per qualified lead by 66% and generating $353.9K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "66", unit: "%", label: "CPQL Reduction" },
    { value: "$353.9K", unit: "", label: "Revenue Attributed" },
  ],
  tags: ["Paid Advertising", "AI-Powered Optimization", "Local Lead Generation"],
  company: {
    industry: "Window Repair",
    employees: "11",
    revenue: "$1.4M",
    location: "Phoenix Metro, Arizona",
    description: "A locally owned window repair and replacement company serving homeowners and small commercial properties across the Phoenix metropolitan area in Arizona. The business handles everything from single-pane glass repairs, foggy window seal replacements, and broken hardware fixes to full window replacements and sliding door installations. For over nine years, the company relied primarily on word-of-mouth referrals, a few Yelp listings, and occasional door hangers in newer subdivisions. Their digital presence was minimal — a basic website with no conversion tracking, no landing pages targeting specific Arizona communities, and previous attempts at paid advertising that produced clicks but few trackable leads. With national glass franchises increasing their ad spend in the Phoenix market, the owner recognized the need for a structured, measurable paid advertising strategy.",
  },
  challenges: [
    {
      title: "High Cost Per Lead With No Qualification System",
      description: "Previous paid campaigns generated a mix of phone calls and form fills, but there was no system to separate a homeowner needing a $3,000 multi-window replacement from someone asking about a $75 screen repair. Cost per qualified lead was running near $680, with a qualification rate around 22% — meaning nearly four out of five ad-generated inquiries were either unqualified, out of area, or too low-value to justify the sales team's time.",
    },
    {
      title: "Intense Local Competition From National Franchises",
      description: "The Phoenix metro area has significant competition from national glass and window franchises with substantially larger marketing budgets. These competitors dominated top ad placements for high-intent searches like 'window repair Phoenix' and 'window replacement Scottsdale,' driving up costs and making it difficult for a local operator to maintain visibility without a more strategic approach to bidding, targeting, and ad creative.",
    },
    {
      title: "Seasonal Demand Volatility in the Arizona Market",
      description: "Arizona's extreme summer heat causes a surge in window-related issues — thermal seal failures, cracked glass from rapid temperature changes, and weatherstripping deterioration. Demand peaks from May through September, then drops significantly in the cooler months. Without a seasonal advertising strategy, the company overspent during slow periods and missed opportunities to capture high-intent leads during peak summer demand when homeowners urgently needed repairs.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Campaign Architecture",
      items: [
        "Full audit of previous paid campaign performance — identified wasted spend on broad match keywords attracting DIY searchers, commercial glazing inquiries, and out-of-service-area clicks",
        "Implemented proper conversion tracking for phone calls, form submissions, and estimate request actions across the website",
        "CRM integration for closed-loop lead-to-job attribution, tracking the typical 3–10 day window repair sales cycle from inquiry to completed job",
        "Built campaign structure segmented by service line — emergency glass repair, seal and hardware replacement, full window replacement, and sliding door services",
        "Created dedicated landing pages for key Arizona metro communities including Scottsdale, Tempe, Mesa, Chandler, and Gilbert",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review agency cadence",
        "Negative keyword foundation targeting commercial glazing, auto glass, DIY tutorials, and job seekers to protect ad spend quality",
        "Launched initial campaigns with conservative budgets to establish baseline performance metrics before scaling",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Lead Quality Improvement",
      items: [
        "Reviewed 30-day performance data and restructured campaigns around highest-converting service categories and geographic areas",
        "AI agents analyzed thousands of performance signals daily, identifying which Arizona zip codes and service types produced the highest-quality leads and reallocating budget accordingly",
        "Refined ad messaging to emphasize same-day emergency repair availability, licensed and insured status, and free estimate offers — resonating with Arizona homeowners facing urgent heat-related window issues",
        "Implemented lead scoring model integrating ad engagement signals with CRM data to distinguish high-value replacement leads from lower-margin repair inquiries",
        "Keyword and negative keyword refinement based on CRM data — filtering out renters, property managers seeking bulk quotes, and searches for window tinting or auto glass",
        "Retargeting layer for estimate page visitors who browsed replacement options but didn't submit a request",
        "A/B tested landing page variants emphasizing different value propositions — speed of service, warranty coverage, and energy efficiency savings",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Seasonal Scaling & Performance Tuning",
      items: [
        "Reviewed 60-day data and prepared seasonal budget increase strategy for Arizona's peak summer demand period",
        "Expanded geographic targeting to additional Phoenix suburbs — Peoria, Glendale, Surprise, and Goodyear — as campaign efficiency proved out in core areas",
        "AI agents detected the seasonal shift in search volume and automatically increased bids on emergency repair keywords as summer temperatures climbed",
        "Advanced audience segmentation by intent signal — emergency repair seekers received expedited messaging, while replacement researchers received educational content with financing options",
        "Multi-approach bidding strategies calibrated to campaign maturity and pipeline data from the CRM",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Sustained Growth & Efficiency",
      items: [
        "Seasonal budget adjustments — increased spend during May through September peak demand, maintained baseline through cooler months when search volume decreases",
        "Audience pruning — removed low-intent segments, tested lookalike audiences built from closed high-value replacement jobs",
        "Bid strategy tuning based on seasonal patterns and average job value by service type — prioritizing higher-margin replacement leads during peak months",
        "Weekly reporting with job attribution and actionable recommendations tied to revenue impact",
        "Expansion into adjacent service categories as data revealed demand patterns — patio door replacements and energy-efficient upgrade packages",
        "When seasonal demand shifted in fall, campaigns were restructured within hours to emphasize winterization and energy-efficiency messaging rather than emergency repairs",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$82.6K" },
      { label: "Qualified Leads", value: "244" },
      { label: "Avg Cost Per Qualified Lead", value: "$339", note: "↓66% from ~$680" },
      { label: "Closed Jobs", value: "65" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Closed Jobs",
      costPerDeal: "Cost/Job",
    },
    monthly: [
      // Mar 2025: Launch month — campaign setup, high waste on broad match
      { month: "Mar '25", spend: 6012, leads: 28, cpl: 214.71, qualified: 7, cpql: 858.86, deals: 2, revenue: 12625, roas: 2.1 },
      // Apr 2025: First optimizations — negative keywords cutting waste
      { month: "Apr '25", spend: 6147, leads: 38, cpl: 161.76, qualified: 10, cpql: 614.70, deals: 3, revenue: 15306, roas: 2.49 },
      // May 2025: Summer begins — Arizona heat driving window issues
      { month: "May '25", spend: 7234, leads: 55, cpl: 131.53, qualified: 15, cpql: 482.27, deals: 4, revenue: 20038, roas: 2.77 },
      // Jun 2025: Peak summer — high demand, AI optimization improving rapidly
      { month: "Jun '25", spend: 8187, leads: 76, cpl: 107.72, qualified: 22, cpql: 372.14, deals: 6, revenue: 23906, roas: 2.92 },
      // Jul 2025: Peak summer continues — highest demand month
      { month: "Jul '25", spend: 8493, leads: 87, cpl: 97.62, qualified: 25, cpql: 339.72, deals: 7, revenue: 32868, roas: 3.87 },
      // Aug 2025: Late summer — strong but slightly tapering
      { month: "Aug '25", spend: 7891, leads: 82, cpl: 96.23, qualified: 24, cpql: 328.79, deals: 6, revenue: 33931, roas: 4.3 },
      // Sep 2025: End of peak — efficient campaigns maintain results
      { month: "Sep '25", spend: 7012, leads: 74, cpl: 94.76, qualified: 21, cpql: 333.90, deals: 5, revenue: 31694, roas: 4.52 },
      // Oct 2025: Fall — winterization campaign brings fresh demand
      { month: "Oct '25", spend: 6423, leads: 78, cpl: 82.35, qualified: 23, cpql: 279.26, deals: 6, revenue: 29225, roas: 4.55 },
      // Nov 2025: Slower season — sustained by winterization messaging
      { month: "Nov '25", spend: 6087, leads: 68, cpl: 89.51, qualified: 20, cpql: 304.35, deals: 5, revenue: 32687, roas: 5.37 },
      // Dec 2025: Holiday — lower volume but campaign highly efficient
      { month: "Dec '25", spend: 6021, leads: 72, cpl: 83.62, qualified: 22, cpql: 273.68, deals: 6, revenue: 36788, roas: 6.11 },
      // Jan 2026: Delayed projects + new year energy efficiency interest
      { month: "Jan '26", spend: 6198, leads: 82, cpl: 75.59, qualified: 25, cpql: 247.92, deals: 7, revenue: 40225, roas: 6.49 },
      // Feb 2026: Pre-spring — fully mature campaigns at peak efficiency
      { month: "Feb '26", spend: 6917, leads: 96, cpl: 72.05, qualified: 30, cpql: 230.57, deals: 8, revenue: 44615, roas: 6.45 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$353.9K", growth: "" },
    { label: "Closed Jobs", value: "65", growth: "" },
    { label: "Avg Job Value", value: "$2,581", growth: "" },
    { label: "Blended ROAS", value: "4.28x", growth: "" },
  ],
};
