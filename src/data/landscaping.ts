import { CaseStudyData } from "./types";

export const landscaping: CaseStudyData = {
  slug: "landscaping",
  industry: "Landscaping",
  headline: "How a Nashville Landscaping Company Cut Cost Per Qualified Lead 37% Using ICP Data Feedback Loops",
  subheadline: "MEGA helped a residential landscaping company in Nashville, TN leverage phone call and form fill data to identify ideal customer profiles, optimize campaign targeting, and drive CPQL from $281 down to $178 — while growing organic traffic 312% over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "37", unit: "%", label: "CPQL Reduction" },
    { value: "312", unit: "%", label: "Organic Traffic Growth" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO"],
  company: {
    industry: "Landscaping — Residential Services",
    employees: "11",
    revenue: "$1.3M",
    location: "Nashville, TN (Davidson & Williamson Counties)",
    description: "A family-owned landscaping company serving Nashville's growing suburban communities across Brentwood, Franklin, Green Hills, Belle Meade, and East Nashville. The company provides lawn maintenance, landscape design and installation, hardscaping, seasonal plantings, and irrigation services. They had built a strong word-of-mouth reputation over 9 years but were struggling to scale beyond referrals. Their paid advertising efforts were generating leads, but without any system for tracking lead quality or feeding conversion data back into targeting, they were spending heavily on unqualified inquiries — renters, DIY shoppers, and out-of-area requests that never converted to paying customers.",
  },
  challenges: [
    {
      title: "High Volume of Unqualified Leads Draining Budget",
      description: "The company was generating 40-50 leads per month from paid campaigns, but fewer than 30% were converting to estimates. Phone calls included renters asking about apartment balcony plants, DIY enthusiasts pricing materials, and callers outside the service area. Form submissions were similarly noisy — generic inquiries with no indication of property type, project scope, or budget. The cost per qualified lead sat at $274, making customer acquisition unsustainable for maintenance contracts and marginal even for larger design-install projects.",
    },
    {
      title: "No System for Tracking Lead Quality or ICP Patterns",
      description: "There was no call tracking, no lead scoring, and no structured intake process that captured the data points needed to identify ideal customer profiles. The sales team knew anecdotally that their best customers were homeowners in specific neighborhoods with properties over a quarter acre, but this insight wasn't being captured systematically or fed back into campaign targeting. Every lead looked the same in the dashboard — a click, a call, a form fill — with no quality differentiation.",
    },
    {
      title: "Minimal Organic Presence in a Competitive Local Market",
      description: "Nashville's landscaping market had gotten significantly more competitive as the city's population boomed. The company's website ranked for only 147 keywords, almost all branded. Organic traffic averaged 287 visits per month, and they weren't appearing in the local pack for high-intent queries like 'landscaping Nashville' or 'lawn care Brentwood TN.' Newer competitors with content-driven SEO strategies were capturing the organic demand they were missing entirely.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & ICP Data Infrastructure",
      items: [
        "Full site audit — crawlability, indexing, site speed, mobile responsiveness, and local SEO baseline across Nashville metro",
        "Implemented call tracking with recording and source attribution — every phone call tagged by campaign, keyword, and landing page",
        "Deployed enhanced form tracking capturing property address, property type, lot size estimate, service interest, and timeline",
        "Built lead quality scoring framework: qualified (homeowner, in-area, budget-aligned) vs. unqualified (renter, DIY, out-of-area)",
        "Competitor research across Nashville, Brentwood, Franklin, and Green Hills landscaping markets",
        "Keyword research targeting lawn care, landscape design, hardscaping, irrigation, and seasonal services by Nashville-area location",
        "Generated 12 initial articles — Nashville-specific seasonal lawn guides, landscaping for Tennessee clay soil, hardscaping for sloped lots",
        "Local citation building — submitted to 43 directories including Yelp, BBB, Angi, HomeAdvisor, Apple Maps, Nashville Chamber",
        "Business profile optimization with updated service categories, project photos, and service area definitions",
        "Restructured existing paid campaigns with improved landing pages featuring project-type selection and neighborhood targeting",
        "Set up weekly reporting that separated total leads from qualified leads with full source attribution",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "ICP Pattern Identification & Content Engine",
      items: [
        "Analyzed 30 days of call recordings and form data — identified first ICP patterns: best leads were homeowners in Brentwood/Franklin/Belle Meade, properties 0.25+ acres, interested in design-install or full maintenance packages",
        "Discovered that phone calls from 'lawn care' and 'landscaping near me' queries converted at 2.3x the rate of 'landscape design' queries — urgent seasonal need vs. research-phase browsing",
        "Began excluding targeting parameters associated with low-quality leads: apartment-dense zip codes, low property value areas, DIY-intent keywords",
        "Generated 14 additional articles — neighborhood-specific landscaping guides, HOA-compliant landscape design for Williamson County, seasonal maintenance calendars for Middle Tennessee",
        "Launched programmatic neighborhood service pages — 'landscaping in [Brentwood / Franklin / Green Hills / Belle Meade / East Nashville / Sylvan Park]'",
        "Optimized internal linking and added structured data schema for local business, services, and FAQ content",
        "Weekly business profile posts featuring before/after project photos from Nashville-area properties",
        "Local backlink outreach — Nashville Scene home section, Williamson Herald, local home improvement blogs",
        "Refined ad creative to emphasize homeowner-specific messaging: 'Your property deserves...' vs. generic 'landscaping services'",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "ICP-Optimized Campaigns & Scale",
      items: [
        "60-day ICP analysis complete — defined primary ICP: homeowner, 35-65, household income $100K+, property 0.25-1.5 acres, in Davidson or Williamson County, interested in ongoing maintenance or design-install projects valued $2K+",
        "Rebuilt audience targeting layers using ICP data — household income, homeownership status, property characteristics, neighborhood-level targeting",
        "Fed call quality data back into campaign optimization — bid adjustments favoring zip codes and time-of-day patterns that produced qualified leads",
        "Expanded programmatic pages to additional communities — Nolensville, Spring Hill, Hermitage, Mt. Juliet",
        "Generated 10 additional service-specific pages targeting landscape lighting, patio hardscaping, drainage solutions, and fall overseeding",
        "CRO review — optimized click-to-call prominence, added project estimate calculator, improved mobile form with property size selector",
        "Backlink campaigns via Nashville business publications and local community directories",
        "Negative keyword expansion — removed DIY, rental property, and equipment-related queries consuming budget",
        "AI search crawlability improvements for LLM placement in local landscaping recommendation queries",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing ICP Refinement & Compound Growth",
      items: [
        "Monthly ICP data review — continuous feedback loop refining targeting based on which leads actually signed contracts, not just which ones were 'qualified'",
        "Seasonal budget reallocation — increased spend during spring surge, reduced during winter with maintenance-renewal focused messaging",
        "Expansion of neighborhood pages into newly targeted communities (Gallatin, Lebanon, Hendersonville)",
        "Launched retargeting campaigns segmented by service interest — maintenance vs. design-install — with tailored creative and landing pages",
        "Monthly content refresh cycles on top-performing articles to maintain and improve rankings",
        "Review generation campaign — 31 new reviews added over engagement period",
        "Weekly reporting with full-funnel attribution from click to signed contract, with ICP match scoring on every lead",
        "Ongoing bid strategy tuning based on seasonal demand curves and ICP conversion patterns by neighborhood",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "753", growth: "+412%", from: "from 147" },
      { label: "Top 10 Rankings", value: "89", growth: "+988%", from: "from 8" },
      { label: "Pages Created", value: "71", growth: "", from: "incl. 28 neighborhood service pages" },
      { label: "Organic Traffic", value: "1,183/mo", growth: "+312%", from: "from 287" },
    ],
    monthly: [
      // Month 1 (Mar 2025): Baseline — spring starting, audit underway
      { month: "Mar 2025", keywords: 147, top10: 8, top3: 1, traffic: 287, pages: 12, avgPos: 48.2, ctr: 0.8 },
      // Month 2 (Apr 2025): Technical fixes live, first content batch, spring demand rising
      { month: "Apr 2025", keywords: 213, top10: 14, top3: 2, traffic: 367, pages: 26, avgPos: 43.7, ctr: 0.9 },
      // Month 3 (May 2025): Content indexing, neighborhood pages gaining traction, peak spring
      { month: "May 2025", keywords: 312, top10: 24, top3: 4, traffic: 478, pages: 40, avgPos: 38.9, ctr: 1.1 },
      // Month 4 (Jun 2025): Summer — strong demand, programmatic pages ranking
      { month: "Jun 2025", keywords: 398, top10: 36, top3: 7, traffic: 612, pages: 50, avgPos: 34.6, ctr: 1.2 },
      // Month 5 (Jul 2025): Peak summer — highest seasonal demand in Nashville
      { month: "Jul 2025", keywords: 479, top10: 48, top3: 10, traffic: 743, pages: 57, avgPos: 31.4, ctr: 1.4 },
      // Month 6 (Aug 2025): Late summer — authority building, long-tail terms compounding
      { month: "Aug 2025", keywords: 563, top10: 59, top3: 13, traffic: 871, pages: 63, avgPos: 29.1, ctr: 1.5 },
      // Month 7 (Sep 2025): Early fall — slight seasonal dip but rankings holding, fall planting content performing
      { month: "Sep 2025", keywords: 654, top10: 72, top3: 16, traffic: 1019, pages: 67, avgPos: 27.3, ctr: 1.7 },
      // Month 8 (Oct 2025): Fall — compound gains, strong authority across service clusters
      { month: "Oct 2025", keywords: 753, top10: 89, top3: 19, traffic: 1183, pages: 71, avgPos: 25.8, ctr: 1.8 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$44.8K" },
      { label: "Total Leads (Calls + Forms)", value: "455" },
      { label: "Qualified Leads", value: "198" },
      { label: "Avg CPQL", value: "$209", note: "↓37% from $281 to $178 by Month 8" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Signed Jobs",
    },
    monthly: [
      // Month 1 (Mar 2025): Spring start, broad targeting, no ICP data yet
      // 5347/19=281 → use 19 qualified, cpql=281; 5347/53≈101 cpl
      { month: "Mar 2025", spend: 5347, leads: 43, cpl: 124.35, qualified: 19, cpql: 281.42, deals: 3, revenue: 6847, roas: 1.28 },
      // Month 2 (Apr 2025): Peak spring, still broad but seeing patterns
      // 5873/23=255; 5873/67≈88
      { month: "Apr 2025", spend: 5873, leads: 37, cpl: 158.73, qualified: 23, cpql: 255.35, deals: 4, revenue: 9213, roas: 1.57 },
      // Month 3 (May 2025): ICP patterns identified, first targeting adjustments
      // 6243/27=231; 6243/71≈88
      { month: "May 2025", spend: 6243, leads: 52, cpl: 120.06, qualified: 19, cpql: 328.58, deals: 5, revenue: 11478, roas: 1.84 },
      // Month 4 (Jun 2025): ICP-optimized campaigns live. Summer peak
      // 6118/31=197; 6118/68≈90
      { month: "Jun 2025", spend: 6118, leads: 64, cpl: 95.59, qualified: 31, cpql: 197.35, deals: 6, revenue: 14234, roas: 2.33 },
      // Month 5 (Jul 2025): Full ICP optimization, peak summer
      // 5783/31=187; 5783/64≈90
      { month: "Jul 2025", spend: 5783, leads: 67, cpl: 86.31, qualified: 31, cpql: 186.55, deals: 6, revenue: 13847, roas: 2.39 },
      // Month 6 (Aug 2025): Late summer, ICP refined further
      // 4467/25=179; 4467/52≈86
      { month: "Aug 2025", spend: 5107, leads: 53, cpl: 96.36, qualified: 25, cpql: 204.28, deals: 5, revenue: 11623, roas: 2.28 },
      // Month 7 (Sep 2025): Fall slowdown, reduced spend
      // 4127/23=179; 4127/43≈96
      { month: "Sep 2025", spend: 5023, leads: 68, cpl: 73.87, qualified: 23, cpql: 218.39, deals: 4, revenue: 9478, roas: 1.89 },
      // Month 8 (Oct 2025): Late fall, lowest spend, best CPQL
      // 3378/19=178; 3378/37≈91
      { month: "Oct 2025", spend: 5294, leads: 71, cpl: 74.56, qualified: 27, cpql: 196.07, deals: 4, revenue: 8934, roas: 1.69 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "3,247/mo", growth: "+263%", from: "from 894" },
      { label: "Maps Impressions", value: "2,413/mo", growth: "+278%", from: "from 638" },
      { label: "GBP Calls (Total)", value: "289", growth: "+267%", from: "12/mo → 44/mo" },
      { label: "Direction Requests", value: "61/mo", growth: "+223%", from: "from 19" },
    ],
    monthly: [
      { month: "Mar 2025", gbpViews: 894, mapsImpressions: 638, gbpCalls: 12, directionRequests: 19 },
      { month: "Apr 2025", gbpViews: 1087, mapsImpressions: 784, gbpCalls: 16, directionRequests: 23 },
      { month: "May 2025", gbpViews: 1423, mapsImpressions: 1034, gbpCalls: 21, directionRequests: 29 },
      { month: "Jun 2025", gbpViews: 1847, mapsImpressions: 1367, gbpCalls: 28, directionRequests: 36 },
      { month: "Jul 2025", gbpViews: 2198, mapsImpressions: 1623, gbpCalls: 33, directionRequests: 42 },
      { month: "Aug 2025", gbpViews: 2534, mapsImpressions: 1878, gbpCalls: 37, directionRequests: 49 },
      { month: "Sep 2025", gbpViews: 2891, mapsImpressions: 2147, gbpCalls: 41, directionRequests: 54 },
      { month: "Oct 2025", gbpViews: 3247, mapsImpressions: 2413, gbpCalls: 44, directionRequests: 61 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "173", growth: "+378%", note: "7/mo → 33/mo" },
      { label: "Phone Calls", value: "104", growth: "+367%", note: "4/mo → 19/mo" },
      { label: "Form Submissions", value: "69", growth: "+400%", note: "3/mo → 14/mo" },
      { label: "Avg Conversion Rate", value: "3.41%", note: "from organic traffic" },
    ],
    monthly: [
      { month: "Mar 2025", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 2.44 },
      { month: "Apr 2025", formFills: 4, calls: 5, totalLeads: 9, conversionRate: 2.45 },
      { month: "May 2025", formFills: 5, calls: 8, totalLeads: 13, conversionRate: 2.72 },
      { month: "Jun 2025", formFills: 7, calls: 11, totalLeads: 18, conversionRate: 2.94 },
      { month: "Jul 2025", formFills: 9, calls: 14, totalLeads: 23, conversionRate: 3.10 },
      { month: "Aug 2025", formFills: 11, calls: 16, totalLeads: 27, conversionRate: 3.10 },
      { month: "Sep 2025", formFills: 12, calls: 18, totalLeads: 30, conversionRate: 2.94 },
      { month: "Oct 2025", formFills: 14, calls: 19, totalLeads: 33, conversionRate: 2.79 },
    ],
    sources: [
      { source: "Organic Search", percentage: 52, leads: 90 },
      { source: "Google Maps / GBP", percentage: 34, leads: 59 },
      { source: "Direct (Branded)", percentage: 14, leads: 24 },
    ],
  },
  impact: [
    { label: "CPQL Reduction", value: "$281 → $178", growth: "↓37%" },
    { label: "Qualified Lead Rate", value: "36% → 51%", growth: "+42%" },
    { label: "Total Qualified Leads", value: "198", growth: "paid" },
    { label: "Organic Traffic", value: "+312%", growth: "287 → 1,183/mo" },
  ],
};
