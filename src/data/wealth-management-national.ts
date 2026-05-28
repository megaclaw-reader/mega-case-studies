import { CaseStudyData } from "./types";

export const wealthManagementNational: CaseStudyData = {
  slug: "wealth-management-national",
  industry: "Wealth Management",
  headline: "How a National Wealth Management Firm Acquired 28 New High-Net-Worth Clients in 12 Months",
  subheadline: "MEGA helped a US-based independent wealth management firm build a scalable digital acquisition engine — adding $22.4M in new AUM, reducing cost per qualified lead by 75%, and growing organic visibility 938% through AI-powered marketing.",
  heroStats: [
    { value: "$22.4", unit: "M", label: "New AUM Acquired" },
    { value: "75", unit: "%", label: "CPQL Reduction" },
    { value: "28", unit: "", label: "New Clients (Paid)" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "Wealth Management",
    employees: "18",
    revenue: "$4.2M",
    location: "United States",
    description: "A fee-only registered investment advisory firm with a national client base, primarily serving high-net-worth individuals and families with investable assets of $500K or more. The firm had grown to approximately $320M in assets under management over 11 years through referrals and strategic partnerships, but organic growth had slowed. Leadership recognized the need for a systematic digital marketing approach to reach affluent professionals and pre-retirees across multiple metro markets — without compromising the firm's compliance standards or professional reputation.",
  },
  challenges: [
    {
      title: "Referral Growth Stalling Nationally",
      description: "The firm's referral network of CPAs, estate attorneys, and existing clients had driven 85% of new business historically, but new client acquisitions dropped 22% year-over-year. The existing referral base couldn't scale across new metro markets the firm was targeting for expansion.",
    },
    {
      title: "Fragmented Digital Presence Across Markets",
      description: "The firm had a corporate website that ranked for almost nothing outside of branded terms. No local landing pages for target metro markets, no content strategy, and competitors with dedicated marketing teams were capturing digital demand across every key geography.",
    },
    {
      title: "Compliance and Brand Sensitivity",
      description: "As a registered investment advisor, the firm operated under strict SEC and state advertising guidelines. Previous marketing efforts had been paused due to compliance concerns, and leadership needed assurance that all campaigns would meet regulatory requirements while maintaining the sophisticated brand image expected by high-net-worth prospects.",
    },
    {
      title: "Long Sales Cycles and High-Touch Conversion",
      description: "Wealth management prospects typically take 60-120 days from initial inquiry to becoming a client. The firm needed a marketing approach that could nurture leads through this extended consideration period while tracking attribution accurately across touchpoints.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Multi-Market Launch",
      items: [
        "Comprehensive website audit — performance, mobile experience, security, and accessibility across all pages",
        "Deep keyword research targeting high-intent national and metro-specific terms: 'wealth management firm', 'financial advisor for high net worth', 'retirement planning advisor [city]'",
        "Competitive analysis of 12 national and regional wealth management firms' digital presence and ad strategies",
        "Developed compliance-approved ad copy templates and landing page frameworks reviewed by the firm's compliance officer",
        "Built dedicated landing pages for 6 priority metro markets plus national-level service pages for retirement planning, investment management, and estate coordination",
        "Implemented cross-channel attribution tracking — call tracking, form submissions, and CRM integration for closed-loop reporting",
        "Launched initial paid campaigns targeting high-intent searches across priority metros with conservative daily budgets",
        "Technical SEO overhaul — financial services schema markup, Core Web Vitals fixes, mobile UX improvements, and XML sitemap restructuring",
        "Published first 10 educational articles covering retirement income strategies, tax-efficient investing, market commentary, and Social Security optimization",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review agency cadence with real-time performance adjustments",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Authority & Audience Refinement",
      items: [
        "Reviewed 30-day performance data across all markets — adjusted bid strategies and paused underperforming geos based on lead quality signals from CRM feedback",
        "Published 12 additional long-form articles targeting consideration-stage queries around wealth transfer, tax planning, and portfolio management",
        "Launched market-specific landing pages for 4 additional metro areas showing early organic traction",
        "A/B tested consultation offer framings — 'complimentary portfolio review' vs. 'wealth assessment' vs. 'financial planning consultation'",
        "Built retargeting audiences from website visitors, partial form completions, and educational content consumers",
        "Refined audience targeting using qualification data — identified highest-value demographic and behavioral signals",
        "Internal linking optimization to build topical authority clusters around core service pillars",
        "AI agents analyzed thousands of performance signals daily, identifying which metro markets and audience segments drove the highest-quality leads — reallocating budget in real time rather than waiting for monthly agency reviews",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Multi-Market Expansion",
      items: [
        "Reviewed 60-day data — identified top 4 performing metros and shifted budget allocation to maximize qualified lead volume",
        "Expanded content calendar to 8+ articles per month covering timely financial planning topics and market commentary",
        "Backlink acquisition through financial publication guest contributions, industry directory listings, and thought leadership placements",
        "Launched seasonal campaigns around Q3 mid-year portfolio review themes and back-to-school college planning angles",
        "CRO improvements based on heatmap analysis — simplified form fields and added social proof elements to landing pages",
        "Advanced audience segmentation based on investable asset signals and conversion probability scoring",
        "Implemented lead scoring system integrating website behavior with CRM data to prioritize high-probability prospects for advisor outreach",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening automatically as market conditions shifted",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Compounding Growth",
      items: [
        "Monthly content refreshes on evergreen articles to maintain and improve rankings across competitive terms",
        "Seasonal budget adjustments — increased spend during Q1 tax season and Q4 year-end planning windows when intent peaks",
        "Expanded to 3 additional metro markets based on organic traffic signals indicating untapped demand",
        "Ongoing creative testing with new consultation offer angles targeting different wealth segments",
        "Quarterly strategy reviews with comprehensive benchmarking against industry standards and competitive landscape",
        "Lead nurturing sequence optimization for the 60-120 day sales cycle — ensuring consistent touchpoints without overwhelming prospects",
        "AI agents detected seasonal demand shifts and competitive changes within hours, automatically adjusting bids, budgets, and targeting to capture high-intent prospects that traditional agencies would miss during periodic review cycles",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "9,847", growth: "+2,738%", from: "from 347" },
      { label: "Top 10 Rankings", value: "114", growth: "+936%", from: "from 11" },
      { label: "Organic Traffic", value: "23,417/mo", growth: "+938%", from: "from 2,254" },
      { label: "Pages Created", value: "54", growth: "", from: "incl. 14 market-specific pages" },
    ],
    monthly: [
      { month: "May '25", keywords: 347, top10: 11, top3: 3, traffic: 2254, pages: 0, avgPos: 51.2, ctr: 0.7 },
      { month: "Jun '25", keywords: 518, top10: 17, top3: 5, traffic: 1947, pages: 10, avgPos: 48.7, ctr: 0.9 },
      { month: "Jul '25", keywords: 742, top10: 24, top3: 8, traffic: 2318, pages: 12, avgPos: 45.9, ctr: 1.1 },
      { month: "Aug '25", keywords: 1347, top10: 38, top3: 12, traffic: 3691, pages: 8, avgPos: 42.1, ctr: 1.3 },
      { month: "Sep '25", keywords: 2047, top10: 52, top3: 18, traffic: 5843, pages: 6, avgPos: 37.4, ctr: 1.6 },
      { month: "Oct '25", keywords: 3418, top10: 64, top3: 25, traffic: 8724, pages: 4, avgPos: 33.8, ctr: 2.0 },
      { month: "Nov '25", keywords: 4763, top10: 73, top3: 31, traffic: 11387, pages: 4, avgPos: 30.1, ctr: 2.3 },
      { month: "Dec '25", keywords: 5917, top10: 82, top3: 38, traffic: 13642, pages: 3, avgPos: 27.3, ctr: 2.6 },
      { month: "Jan '26", keywords: 7124, top10: 91, top3: 44, traffic: 16218, pages: 3, avgPos: 24.6, ctr: 2.8 },
      { month: "Feb '26", keywords: 8143, top10: 98, top3: 49, traffic: 18943, pages: 2, avgPos: 22.1, ctr: 3.0 },
      { month: "Mar '26", keywords: 9024, top10: 107, top3: 54, traffic: 21384, pages: 1, avgPos: 19.8, ctr: 3.2 },
      { month: "Apr '26", keywords: 9847, top10: 114, top3: 58, traffic: 23417, pages: 1, avgPos: 17.9, ctr: 3.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$143.7K" },
      { label: "Qualified Leads", value: "301" },
      { label: "Avg Cost/Qualified Lead", value: "$477", note: "↓75% from $1,139" },
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
      // Month 1 (May '25): Campaign launch — building baseline, high CPL
      { month: "May '25", spend: 10247, leads: 41, cpl: 249.93, qualified: 9, cpql: 1138.56, deals: 1, revenue: 7200, roas: 0.70 },
      // Month 2 (Jun '25): Optimizing targeting
      { month: "Jun '25", spend: 10518, leads: 47, cpl: 223.79, qualified: 11, cpql: 956.18, deals: 1, revenue: 8500, roas: 0.81 },
      // Month 3 (Jul '25): AI refining audiences
      { month: "Jul '25", spend: 10173, leads: 54, cpl: 188.39, qualified: 14, cpql: 726.64, deals: 2, revenue: 15400, roas: 1.51 },
      // Month 4 (Aug '25): Pre-fall planning conversations
      { month: "Aug '25", spend: 10842, leads: 62, cpl: 174.87, qualified: 17, cpql: 637.76, deals: 2, revenue: 17800, roas: 1.64 },
      // Month 5 (Sep '25): Fall uptick — year-end demand building
      { month: "Sep '25", spend: 11634, leads: 72, cpl: 161.58, qualified: 20, cpql: 581.70, deals: 2, revenue: 16300, roas: 1.40 },
      // Month 6 (Oct '25): Strong Q4 — tax-loss harvesting season
      { month: "Oct '25", spend: 13217, leads: 86, cpl: 153.69, qualified: 25, cpql: 528.68, deals: 3, revenue: 24700, roas: 1.87 },
      // Month 7 (Nov '25): Peak year-end planning
      { month: "Nov '25", spend: 14389, leads: 98, cpl: 146.83, qualified: 30, cpql: 479.63, deals: 3, revenue: 25100, roas: 1.74 },
      // Month 8 (Dec '25): Year-end close — strong intent
      { month: "Dec '25", spend: 13847, leads: 104, cpl: 133.14, qualified: 31, cpql: 446.68, deals: 3, revenue: 23600, roas: 1.70 },
      // Month 9 (Jan '26): Tax season — strong financial planning intent
      { month: "Jan '26", spend: 14218, leads: 117, cpl: 121.52, qualified: 36, cpql: 394.94, deals: 3, revenue: 26400, roas: 1.86 },
      // Month 10 (Feb '26): Peak tax season
      { month: "Feb '26", spend: 12436, leads: 113, cpl: 110.05, qualified: 34, cpql: 365.76, deals: 3, revenue: 22800, roas: 1.83 },
      // Month 11 (Mar '26): Tax season strong, mature campaigns
      { month: "Mar '26", spend: 11283, leads: 118, cpl: 95.62, qualified: 36, cpql: 313.42, deals: 2, revenue: 18200, roas: 1.61 },
      // Month 12 (Apr '26): Tax deadline — strong close, best efficiency
      { month: "Apr '26", spend: 10918, leads: 124, cpl: 88.05, qualified: 38, cpql: 287.32, deals: 3, revenue: 18000, roas: 1.65 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "97", growth: "+385%", note: "Month 1: 4" },
      { label: "Avg Monthly Leads (Last 3mo)", value: "13.0", growth: "", note: "vs. 4.3 first 3 months" },
      { label: "Organic Conversion Rate", value: "4.9%", growth: "+75%", note: "from 2.8%" },
      { label: "Organic Clients Acquired", value: "11", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "May '25", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 2.8 },
      { month: "Jun '25", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 2.9 },
      { month: "Jul '25", formFills: 2, calls: 3, totalLeads: 5, conversionRate: 3.1 },
      { month: "Aug '25", formFills: 3, calls: 3, totalLeads: 6, conversionRate: 3.3 },
      { month: "Sep '25", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 3.5 },
      { month: "Oct '25", formFills: 4, calls: 4, totalLeads: 8, conversionRate: 3.7 },
      { month: "Nov '25", formFills: 4, calls: 5, totalLeads: 9, conversionRate: 3.9 },
      { month: "Dec '25", formFills: 5, calls: 5, totalLeads: 10, conversionRate: 4.1 },
      { month: "Jan '26", formFills: 5, calls: 6, totalLeads: 11, conversionRate: 4.3 },
      { month: "Feb '26", formFills: 6, calls: 6, totalLeads: 12, conversionRate: 4.5 },
      { month: "Mar '26", formFills: 6, calls: 7, totalLeads: 13, conversionRate: 4.7 },
      { month: "Apr '26", formFills: 7, calls: 7, totalLeads: 14, conversionRate: 4.9 },
    ],
    sources: [
      { source: "Organic Search", percentage: 58, leads: 56 },
      { source: "Business Profile", percentage: 21, leads: 20 },
      { source: "Direct (Brand Search)", percentage: 14, leads: 14 },
      { source: "Referral", percentage: 7, leads: 7 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$22.4M", growth: "" },
    { label: "Projected Annual Revenue", value: "$224.0K", growth: "recurring" },
    { label: "10-Year Client LTV", value: "$2.24M", growth: "projected" },
    { label: "Total New Clients (Paid + Organic)", value: "39", growth: "+195%" },
    { label: "Blended Cost Per Client", value: "$3,685", growth: "↓52%" },
    { label: "First-Year ROI", value: "56%", growth: "" },
  ],
};
