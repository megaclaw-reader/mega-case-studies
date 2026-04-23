import { CaseStudyData } from "./types";

export const retirementPlanningNational: CaseStudyData = {
  slug: "retirement-planning-national",
  industry: "Financial Services",
  headline: "How a National Retirement Planning Firm Acquired 37 New Clients and $410K in Recurring Revenue in 12 Months",
  subheadline: "MEGA helped a fee-only retirement planning advisory build a compliant digital acquisition engine — reducing cost per qualified lead by 66%, growing organic visibility 4,280%, and generating $410K in new recurring annual revenue.",
  heroStats: [
    { value: "$41", unit: "M", label: "New AUM Acquired" },
    { value: "66", unit: "%", label: "CPQL Reduction" },
    { value: "37", unit: "", label: "New Clients Acquired" },
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
      description: "Despite managing $320M in assets, the firm had virtually no organic search presence. The website had 12 static pages, no blog content, and ranked for only 87 keywords — none in the top 10 for competitive retirement planning terms. National competitors and large wirehouses dominated page one for every meaningful query.",
    },
    {
      title: "Compliance Barriers to Advertising",
      description: "As an SEC-registered investment advisor, the firm had strict compliance requirements around advertising claims, testimonials, and performance representations. Previous attempts at digital ads were abandoned after the compliance team flagged issues with ad copy, and the firm had no framework for running compliant digital campaigns at scale.",
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
        "Launched initial ad campaigns targeting high-intent national search terms with conservative daily budgets and compliance-approved copy",
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
      title: "Ongoing Optimization & Compounding Growth",
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
      { label: "Total Keywords", value: "3,814", growth: "+4,280%", from: "from 87" },
      { label: "Top 10 Rankings", value: "347", growth: "+4,913%", from: "from 7" },
      { label: "Organic Traffic", value: "14,291/mo", growth: "+3,672%", from: "from 378" },
      { label: "Pages Created", value: "74", growth: "", from: "incl. 8 service pages" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 87, top10: 7, top3: 1, traffic: 378, pages: 12, avgPos: 42.3, ctr: 1.3 },
      { month: "Feb '25", keywords: 134, top10: 11, top3: 2, traffic: 519, pages: 18, avgPos: 39.7, ctr: 1.4 },
      { month: "Mar '25", keywords: 247, top10: 22, top3: 3, traffic: 841, pages: 24, avgPos: 36.4, ctr: 1.6 },
      { month: "Apr '25", keywords: 438, top10: 41, top3: 6, traffic: 1487, pages: 30, avgPos: 33.1, ctr: 1.8 },
      { month: "May '25", keywords: 714, top10: 68, top3: 11, traffic: 2413, pages: 36, avgPos: 30.2, ctr: 2.0 },
      { month: "Jun '25", keywords: 1093, top10: 104, top3: 17, traffic: 3762, pages: 42, avgPos: 27.6, ctr: 2.3 },
      { month: "Jul '25", keywords: 1412, top10: 138, top3: 22, traffic: 4891, pages: 47, avgPos: 25.9, ctr: 2.4 },
      { month: "Aug '25", keywords: 1847, top10: 174, top3: 28, traffic: 6318, pages: 52, avgPos: 24.1, ctr: 2.6 },
      { month: "Sep '25", keywords: 2341, top10: 217, top3: 36, traffic: 8247, pages: 57, avgPos: 22.4, ctr: 2.7 },
      { month: "Oct '25", keywords: 2893, top10: 268, top3: 44, traffic: 10472, pages: 63, avgPos: 21.1, ctr: 2.9 },
      { month: "Nov '25", keywords: 3384, top10: 312, top3: 52, traffic: 12681, pages: 69, avgPos: 19.8, ctr: 3.1 },
      { month: "Dec '25", keywords: 3814, top10: 347, top3: 58, traffic: 14291, pages: 74, avgPos: 18.7, ctr: 3.2 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$97.7K" },
      { label: "Qualified Leads", value: "111" },
      { label: "Avg Cost/Qualified Lead", value: "$880", note: "↓66% from $2,591" },
      { label: "New Clients Acquired", value: "28" },
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
      // Jan '25 — Month 1: Launch, conservative, learning phase
      { month: "Jan '25", spend: 5182, leads: 7, cpl: 740, qualified: 2, cpql: 2591, deals: 0, revenue: 0, roas: 0 },
      // Feb '25 — Month 2: Early optimization, first client close
      { month: "Feb '25", spend: 5347, leads: 9, cpl: 594, qualified: 4, cpql: 1337, deals: 1, revenue: 14500, roas: 2.71 },
      // Mar '25 — Month 3: Campaigns maturing, spring interest
      { month: "Mar '25", spend: 5891, leads: 11, cpl: 536, qualified: 5, cpql: 1178, deals: 1, revenue: 16100, roas: 2.73 },
      // Apr '25 — Month 4: Scaling, retargeting kicking in
      { month: "Apr '25", spend: 6423, leads: 14, cpl: 459, qualified: 7, cpql: 918, deals: 2, revenue: 28300, roas: 4.41 },
      // May '25 — Month 5: Pre-summer, strong lead quality
      { month: "May '25", spend: 6817, leads: 16, cpl: 426, qualified: 8, cpql: 852, deals: 2, revenue: 31900, roas: 4.68 },
      // Jun '25 — Month 6: Mid-year reviews driving demand
      { month: "Jun '25", spend: 8653, leads: 21, cpl: 412, qualified: 10, cpql: 865, deals: 3, revenue: 41100, roas: 4.75 },
      // Jul '25 — Month 7: Summer slight dip, still building
      { month: "Jul '25", spend: 7093, leads: 19, cpl: 373, qualified: 9, cpql: 788, deals: 2, revenue: 30000, roas: 4.23 },
      // Aug '25 — Month 8: Back to school = back to planning
      { month: "Aug '25", spend: 9516, leads: 23, cpl: 414, qualified: 12, cpql: 793, deals: 3, revenue: 45200, roas: 4.75 },
      // Sep '25 — Month 9: Q4 ramp, year-end planning starts
      { month: "Sep '25", spend: 9074, leads: 22, cpl: 413, qualified: 11, cpql: 825, deals: 3, revenue: 43100, roas: 4.75 },
      // Oct '25 — Month 10: Tax-loss harvesting, RMD deadline awareness
      { month: "Oct '25", spend: 12590, leads: 29, cpl: 434, qualified: 14, cpql: 899, deals: 4, revenue: 59800, roas: 4.75 },
      // Nov '25 — Month 11: Peak year-end urgency
      { month: "Nov '25", spend: 11264, leads: 30, cpl: 375, qualified: 14, cpql: 805, deals: 4, revenue: 53500, roas: 4.75 },
      // Dec '25 — Month 12: Strong close, RMD deadline, mature campaigns
      { month: "Dec '25", spend: 9811, leads: 31, cpl: 316, qualified: 15, cpql: 654, deals: 3, revenue: 46600, roas: 4.75 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "73", growth: "+2,333%", note: "Month 1: 3" },
      { label: "Avg Monthly Leads (Last 3mo)", value: "11.3", growth: "", note: "vs. 3 first 3 months" },
      { label: "Organic Conversion Rate", value: "5.1%", growth: "+104%", note: "from 2.5%" },
      { label: "Organic Clients Acquired", value: "9", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Jan '25", formFills: 1, calls: 2, totalLeads: 3, conversionRate: 2.5 },
      { month: "Feb '25", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 2.4 },
      { month: "Mar '25", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 2.7 },
      { month: "Apr '25", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 3.0 },
      { month: "May '25", formFills: 2, calls: 3, totalLeads: 5, conversionRate: 3.2 },
      { month: "Jun '25", formFills: 3, calls: 3, totalLeads: 6, conversionRate: 3.5 },
      { month: "Jul '25", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 3.8 },
      { month: "Aug '25", formFills: 4, calls: 4, totalLeads: 8, conversionRate: 4.1 },
      { month: "Sep '25", formFills: 4, calls: 5, totalLeads: 9, conversionRate: 4.4 },
      { month: "Oct '25", formFills: 5, calls: 5, totalLeads: 10, conversionRate: 4.7 },
      { month: "Nov '25", formFills: 5, calls: 6, totalLeads: 11, conversionRate: 4.9 },
      { month: "Dec '25", formFills: 5, calls: 7, totalLeads: 12, conversionRate: 5.1 },
    ],
    sources: [
      { source: "Organic Search", percentage: 61, leads: 45 },
      { source: "Direct (Brand Search)", percentage: 19, leads: 14 },
      { source: "Referral", percentage: 13, leads: 9 },
      { source: "Social", percentage: 7, leads: 5 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$41M", growth: "+12.8% of total AUM" },
    { label: "New Annual Recurring Revenue", value: "$410K", growth: "1% AUM fee" },
    { label: "Projected 10-Year Client LTV", value: "$4.1M", growth: "recurring" },
    { label: "Total New Clients (Paid + Organic)", value: "37", growth: "" },
    { label: "Blended Cost Per Client", value: "$2,640", growth: "↓52%" },
    { label: "Blended ROAS (Year 1)", value: "4.20x", growth: "" },
    { label: "Organic Client Revenue", value: "$99K/yr", growth: "9 clients, $0 ad spend" },
  ],
};
