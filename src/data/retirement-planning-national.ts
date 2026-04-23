import { CaseStudyData } from "./types";

export const retirementPlanningNational: CaseStudyData = {
  slug: "retirement-planning-national",
  industry: "Financial Services",
  headline: "How a National Retirement Planning Firm Acquired 18 New Clients in 7 Months",
  subheadline: "MEGA helped a fee-only retirement planning advisory build a compliant digital acquisition engine — reducing cost per qualified lead by 52%, growing organic visibility 1,394%, and adding 18 new high-net-worth clients to the firm's roster.",
  heroStats: [
    { value: "$9.7", unit: "M", label: "New AUM Acquired" },
    { value: "52", unit: "%", label: "CPQL Reduction" },
    { value: "14", unit: "", label: "New Clients Acquired" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "Financial Services / Retirement Planning",
    employees: "18",
    revenue: "$4.1M",
    location: "United States (National)",
    description: "A fee-only registered investment advisory specializing in retirement planning for pre-retirees and recent retirees across the United States. The firm had been operating for 11 years with approximately $320M in assets under management, primarily acquired through referrals from CPAs and estate attorneys. With an aging referral network and increasing competition from robo-advisors and large wirehouses investing heavily in digital marketing, the firm needed a scalable digital acquisition strategy to maintain growth and reach the next wave of retiring baby boomers researching financial advisors online.",
  },
  challenges: [
    {
      title: "Referral Growth Stalling Nationally",
      description: "The firm's referral partnerships with CPAs and estate attorneys had been the primary growth driver for a decade, but new client acquisitions from referrals dropped 22% year-over-year. The professional referral network was saturated, and younger professionals in those fields were increasingly recommending robo-advisors or large firms with brand recognition.",
    },
    {
      title: "Invisible in Organic Search",
      description: "Despite managing $320M in assets, the firm had virtually no organic search presence. The website had 12 static pages, no blog content, and ranked for only 94 keywords — none in the top 10 for competitive retirement planning terms. National competitors and large wirehouses dominated page one for every meaningful query.",
    },
    {
      title: "Compliance Barriers to Advertising",
      description: "As an SEC-registered investment advisor, the firm had strict compliance requirements around advertising claims, testimonials, and performance representations. Previous attempts at Google Ads were abandoned after the compliance team flagged issues with ad copy, and the firm had no framework for running compliant digital campaigns at scale.",
    },
    {
      title: "Long Sales Cycle with No Nurturing System",
      description: "Prospective retirement planning clients typically take 3-6 months from initial research to booking a consultation. The firm had no digital nurturing system — no email sequences, no retargeting, no content funnel — meaning prospects who weren't ready to call immediately were lost entirely.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Compliance Infrastructure",
      items: [
        "Comprehensive website audit covering technical SEO, site architecture, page speed, mobile responsiveness, and compliance review of existing content",
        "Keyword research targeting national high-intent retirement planning queries: 'retirement planning advisor', 'fee-only financial planner', 'retirement income strategy', '401k rollover advisor'",
        "Competitive analysis of 12 national retirement planning firms' digital marketing strategies and content gaps",
        "Developed SEC-compliant ad copy templates and landing page frameworks reviewed by the firm's compliance officer",
        "Built dedicated landing pages for core services: retirement income planning, 401(k)/IRA rollover guidance, Social Security optimization, tax-efficient withdrawal strategies",
        "Implemented call tracking, form attribution, and CRM integration for closed-loop lead-to-client reporting",
        "Launched initial Google Ads campaigns targeting high-intent national search terms with conservative daily budgets and compliance-approved copy",
        "Technical SEO foundation: financial services schema markup, site speed optimization, secure hosting verification, mobile UX improvements",
        "Published first 6 educational articles targeting informational queries: retirement readiness checklists, Roth conversion considerations, Medicare enrollment timing",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the typical weekly-review cadence of traditional agencies",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Authority & Campaign Optimization",
      items: [
        "Reviewed 30-day performance data — refined bid strategies based on lead quality signals and geographic conversion patterns",
        "Published 8 additional long-form educational articles targeting consideration-stage queries and seasonal topics",
        "Built topic clusters around core retirement planning themes: income planning, tax optimization, healthcare costs in retirement, estate planning coordination",
        "Launched retargeting campaigns for website visitors and partial form completions — critical for the 3-6 month consideration cycle",
        "A/B tested landing page variations: tested different consultation offer framings (free retirement readiness assessment vs. complimentary portfolio review)",
        "Refined audience targeting using qualification data from initial leads — income levels, age demographics, geographic concentrations",
        "AI agents analyzed thousands of performance signals daily, identifying which geographic regions and demographic segments produced the highest-quality leads and automatically reallocating budget in real time",
        "Internal linking optimization to build topical authority across retirement planning content hub",
        "Optimized meta descriptions and title tags across all service pages based on click-through rate data",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Seasonal Positioning",
      items: [
        "Reviewed 60-day data — identified top-converting audience segments and doubled down on highest-performing campaigns",
        "Scaled content production to 5+ articles per month covering timely retirement planning topics aligned with Q4 tax planning season",
        "Backlink outreach to financial publications, retirement-focused media outlets, and professional association directories",
        "Launched seasonal Q4 campaigns targeting year-end financial review, tax-loss harvesting, and required minimum distribution planning queries",
        "Advanced audience segmentation based on lead quality scoring and consultation booking patterns",
        "CRO improvements based on heatmap analysis — simplified consultation booking flow, added trust signals and compliance disclosures",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening automatically rather than waiting for traditional agency review cycles",
        "Built comprehensive FAQ content targeting voice search and featured snippet opportunities for common retirement planning questions",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Year-End Push",
      items: [
        "Monthly content refreshes on evergreen retirement planning articles to maintain and improve rankings",
        "Seasonal budget increases for Q4 year-end planning demand — tax-loss harvesting, RMD planning, annual portfolio reviews",
        "Ongoing ad creative testing with new consultation offer angles tied to seasonal financial planning milestones",
        "Quarterly strategy reviews benchmarking performance against financial services industry standards",
        "Expanded content targeting emerging retirement topics: SECURE Act implications, catch-up contribution strategies, healthcare cost projections",
        "Lead nurturing sequence optimization for the extended sales cycle typical of high-net-worth retirement planning prospects",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,924", growth: "+1,947%", from: "from 94" },
      { label: "Top 10 Rankings", value: "187", growth: "+3,017%", from: "from 6" },
      { label: "Organic Traffic", value: "4,812/mo", growth: "+1,394%", from: "from 322" },
      { label: "Pages Created", value: "52", growth: "", from: "incl. 6 service pages" },
    ],
    monthly: [
      // Jun '25 — Month 1: Baseline, foundation work beginning
      { month: "Jun '25", keywords: 94, top10: 6, top3: 1, traffic: 322, pages: 12, avgPos: 41.2, ctr: 1.4 },
      // Jul '25 — Month 2: First content published, technical fixes live
      { month: "Jul '25", keywords: 187, top10: 14, top3: 2, traffic: 594, pages: 20, avgPos: 37.8, ctr: 1.6 },
      // Aug '25 — Month 3: Content indexing, early compounding
      { month: "Aug '25", keywords: 341, top10: 31, top3: 4, traffic: 1023, pages: 27, avgPos: 34.1, ctr: 1.8 },
      // Sep '25 — Month 4: Hockey stick begins, seasonal interest rising
      { month: "Sep '25", keywords: 587, top10: 58, top3: 8, traffic: 1748, pages: 33, avgPos: 30.6, ctr: 2.1 },
      // Oct '25 — Month 5: Q4 tax planning content gaining traction
      { month: "Oct '25", keywords: 923, top10: 94, top3: 14, traffic: 2714, pages: 39, avgPos: 27.4, ctr: 2.4 },
      // Nov '25 — Month 6: Year-end planning queries spiking
      { month: "Nov '25", keywords: 1387, top10: 142, top3: 21, traffic: 3847, pages: 46, avgPos: 25.1, ctr: 2.7 },
      // Dec '25 — Month 7: Peak year-end, strongest organic month
      { month: "Dec '25", keywords: 1924, top10: 187, top3: 29, traffic: 4812, pages: 52, avgPos: 23.3, ctr: 2.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$44.2K" },
      { label: "Qualified Leads", value: "42" },
      { label: "Avg Cost/Qualified Lead", value: "$1,053", note: "↓52% from $1,738" },
      { label: "New Clients Acquired", value: "14" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "New Clients",
      costPerDeal: "Cost/Client",
    },
    monthly: [
      // Jun '25 — Month 1: Campaign launch, conservative spend, building baseline
      { month: "Jun '25", spend: 5214, leads: 9, cpl: 579, qualified: 3, cpql: 1738, deals: 1, revenue: 4870, roas: 0.93 },
      // Jul '25 — Month 2: Summer — lower intent, maintaining presence
      { month: "Jul '25", spend: 5087, leads: 8, cpl: 636, qualified: 4, cpql: 1272, deals: 1, revenue: 5230, roas: 1.03 },
      // Aug '25 — Month 3: Late summer pickup, campaigns optimizing
      { month: "Aug '25", spend: 5423, leads: 11, cpl: 493, qualified: 5, cpql: 1085, deals: 1, revenue: 5610, roas: 1.03 },
      // Sep '25 — Month 4: Fall uptick, year-end planning conversations starting
      { month: "Sep '25", spend: 6147, leads: 14, cpl: 439, qualified: 6, cpql: 1025, deals: 2, revenue: 10960, roas: 1.78 },
      // Oct '25 — Month 5: Strong Q4, tax-loss harvesting, year-end reviews
      { month: "Oct '25", spend: 7218, leads: 17, cpl: 425, qualified: 7, cpql: 1031, deals: 3, revenue: 17490, roas: 2.42 },
      // Nov '25 — Month 6: Peak year-end planning, highest lead quality
      { month: "Nov '25", spend: 7634, leads: 19, cpl: 402, qualified: 8, cpql: 954, deals: 3, revenue: 17160, roas: 2.25 },
      // Dec '25 — Month 7: Strong close, mature campaigns, RMD deadline urgency
      { month: "Dec '25", spend: 7491, leads: 21, cpl: 357, qualified: 9, cpql: 832, deals: 3, revenue: 16110, roas: 2.15 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "34", growth: "+240%", note: "Month 1: 2" },
      { label: "Avg Monthly Leads (Last 3mo)", value: "7.3", growth: "", note: "vs. 2.3 first 3 months" },
      { label: "Organic Conversion Rate", value: "4.3%", growth: "+72%", note: "from 2.5%" },
      { label: "Organic Clients Acquired", value: "4", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Jun '25", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 2.5 },
      { month: "Jul '25", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 2.6 },
      { month: "Aug '25", formFills: 1, calls: 2, totalLeads: 3, conversionRate: 2.8 },
      { month: "Sep '25", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 3.2 },
      { month: "Oct '25", formFills: 3, calls: 3, totalLeads: 6, conversionRate: 3.7 },
      { month: "Nov '25", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 4.0 },
      { month: "Dec '25", formFills: 4, calls: 6, totalLeads: 10, conversionRate: 4.3 },
    ],
    sources: [
      { source: "Organic Search", percentage: 58, leads: 20 },
      { source: "Direct (Brand Search)", percentage: 21, leads: 7 },
      { source: "Referral", percentage: 14, leads: 5 },
      { source: "Social", percentage: 7, leads: 2 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$9.7M", growth: "" },
    { label: "First-Year Revenue (1% AUM Fee)", value: "$77.4K", growth: "recurring" },
    { label: "Projected 10-Year Client LTV", value: "$970K", growth: "projected" },
    { label: "Total New Clients (Paid + Organic)", value: "18", growth: "" },
    { label: "Blended Cost Per Client", value: "$2,456", growth: "↓39%" },
    { label: "Blended ROAS", value: "1.75x", growth: "" },
  ],
};
