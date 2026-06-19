import { CaseStudyData } from "./types";

export const roofing: CaseStudyData = {
  slug: "roofing",
  industry: "Roofing",
  headline: "How a NYC Roofing Company Grew Organic Traffic 375% With AI-Powered Marketing",
  subheadline: "MEGA helped a local roofing company in New York City optimize their digital marketing, reducing cost per qualified lead by 66%, growing organic traffic 375%, and generating $251.4K in attributed revenue over 11 months.",
  heroStats: [
    { value: "11", unit: "months", label: "Partnership Duration" },
    { value: "375", unit: "%", label: "Organic Traffic Growth" },
    { value: "$251.4K", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Local SEO", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Roofing",
    employees: "18",
    revenue: "$2.8M",
    location: "New York City",
    description: "A well-established residential and commercial roofing company serving all five boroughs of New York City. The company had built a solid reputation through quality workmanship and word-of-mouth referrals over 14 years, but their digital presence wasn't keeping pace with competitors investing in local search and paid campaigns. They had a basic website, a partially completed Google Business Profile, and a small paid advertising budget that was generating leads but without any qualification tracking or attribution.",
  },
  challenges: [
    {
      title: "Weak Local Search Visibility",
      description: "The company had 187 indexed keywords but almost no neighborhood-level content targeting specific NYC boroughs or service areas. Their Google Business Profile was incomplete with only 23 reviews, and they weren't appearing in the local map pack for most high-intent roofing searches — losing visibility to competitors with stronger local SEO foundations.",
    },
    {
      title: "Inefficient Paid Lead Generation",
      description: "Paid campaigns were generating inquiries, but with no lead quality tracking in place, the team couldn't distinguish between a homeowner needing a full roof replacement and someone looking for a $200 gutter cleaning. The effective cost per qualified lead was around $535, and the qualification rate hovered near 53% — workable, but leaving significant budget on the table.",
    },
    {
      title: "Seasonal Revenue Volatility",
      description: "Like most roofing companies in the Northeast, the business saw strong demand from April through August and a steep decline through the winter months. Without a year-round content and advertising strategy, the pipeline essentially dried up each November, forcing the team into reactive mode every spring to rebuild momentum.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and mobile performance review for local service searches",
        "Search engine Console and Google Business Profile setup — completed profile, added service areas for all five boroughs, launched review generation campaign",
        "Competitor research and keyword research across residential roofing, commercial roofing, emergency repairs, and seasonal maintenance verticals",
        "Generated 18 initial articles (roof replacement guides, storm damage checklists, NYC building code explainers, seasonal maintenance tips)",
        "Content audit and metadata fixes across all existing service pages, including image SEO and E-E-A-T signals for local contractor authority",
        "Local citation building across 50+ directories — NAP consistency audit and corrections on Yelp, BBB, Apple Maps, and industry-specific listings",
        "Full audit of past ad performance and re-instrumented site with proper pixel implementation and conversion tracking",
        "CRM integration for closed-loop lead-to-job attribution tracking across the typical 2–3 week residential sales cycle",
        "Comprehensive ad strategy built around cost per qualified lead and job value, not raw inquiry volume",
        "Reduced spend inefficiencies — paused low-intent keywords, launched first round of creative and landing page A/B tests targeting homeowners and property managers",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for residential vs. commercial roofing segments",
        "Generated 20+ additional articles focused on borough-specific and neighborhood-level roofing topics",
        "Launched programmatic neighborhood landing pages ('roofing contractor in [neighborhood], NYC' — covering 47 neighborhoods across all boroughs)",
        "Optimized internal linking to strengthen topical authority across roofing service clusters",
        "Weekly Google Business Profile posts with seasonal roofing tips, project photos, and review highlights",
        "Added structured data schema for local business, service pages, FAQ content, and review markup",
        "Rapid iterations of ad creative testing — messaging pivots around storm damage urgency vs. preventive maintenance vs. energy savings",
        "Retargeting and remarketing layer for pricing page visitors and estimate request abandoners",
        "Keyword and negative keyword refinement based on qualification data from CRM — filtering out DIY searchers and non-service-area clicks",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional service-specific and seasonal terms",
        "Continued content updates — refreshed underperforming articles with updated NYC building code references and seasonal relevance",
        "Local citation building and backlink campaigns via home improvement publications and NYC neighborhood blogs",
        "CRO review and keyword cannibalization cleanup across overlapping service and location terms",
        "Advanced schema markup by page type (service, neighborhood, blog, FAQ, review)",
        "AI search crawlability improvements for LLM placement in local roofing recommendation queries",
        "Complex audience segmentations by property type (single-family, multi-family, commercial), borough, and intent signals",
        "Multi-approach bidding strategies based on campaign maturity and job pipeline data",
        "Fully robust lead scoring integrating ad engagement signals with CRM job stage progression",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on seasonality — increased spend during peak spring/summer demand, scaled back during winter months",
        "Expansion of neighborhood pages into adjacent service areas and emerging high-growth NYC neighborhoods",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed jobs",
        "Bid strategy tuning based on seasonal demand patterns and average job value by service type",
        "Weekly reporting with job attribution and actionable recommendations tied to revenue impact",
        "Content refresh cycles aligned to seasonal roofing demand — storm prep in spring, winterization guides in fall, emergency repair content year-round",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "9,733", growth: "+366%", from: "from 187" },
      { label: "Top 10 Rankings", value: "91", growth: "+727%", from: "from 11" },
      { label: "Pages Created", value: "93", growth: "", from: "incl. 47 neighborhood landing pages" },
      { label: "Organic Traffic", value: "1,483/mo", growth: "+375%", from: "from 312" },
    ],
    monthly: [
      { month: "Feb 2025", keywords: 171, top10: 15, top3: 3, traffic: 265, pages: 8, avgPos: 51.8, ctr: 0.7 },
      { month: "Mar 2025", keywords: 677, top10: 85, top3: 29, traffic: 1625, pages: 14, avgPos: 47.9, ctr: 1.1 },
      { month: "Apr 2025", keywords: 978, top10: 125, top3: 33, traffic: 1655, pages: 21, avgPos: 43.7, ctr: 1.3 },
      { month: "May 2025", keywords: 2624, top10: 363, top3: 99, traffic: 7076, pages: 19, avgPos: 40.1, ctr: 1.5 },
      { month: "Jun 2025", keywords: 3889, top10: 419, top3: 133, traffic: 13393, pages: 35, avgPos: 34.3, ctr: 1.9 },
      { month: "Jul 2025", keywords: 5174, top10: 676, top3: 141, traffic: 17065, pages: 35, avgPos: 34.3, ctr: 3.3 },
      { month: "Aug 2025", keywords: 5950, top10: 705, top3: 224, traffic: 15368, pages: 45, avgPos: 26.5, ctr: 2.8 },
      { month: "Sep 2025", keywords: 7354, top10: 607, top3: 132, traffic: 15235, pages: 62, avgPos: 22.8, ctr: 3.9 },
      { month: "Oct 2025", keywords: 7781, top10: 1050, top3: 223, traffic: 19590, pages: 53, avgPos: 26.9, ctr: 3.1 },
      { month: "Nov 2025", keywords: 9090, top10: 1116, top3: 343, traffic: 21582, pages: 64, avgPos: 11.0, ctr: 3.0 },
      { month: "Dec 2025", keywords: 9733, top10: 977, top3: 328, traffic: 31167, pages: 72, avgPos: 8, ctr: 4.6 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$67.0K" },
      { label: "Qualified Leads", value: "159" },
      { label: "Avg Cost Per Qualified Lead", value: "$421", note: "↓44% from $752" },
      { label: "Closed Jobs", value: "38" },
    ],
    monthly: [
      // Month 1: Inherited account — baseline performance, auditing and restructuring
      { month: "Feb 2025", spend: 5136, leads: 14, cpl: 366.86, qualified: 7, cpql: 733.71, deals: 2, revenue: 11247, roas: 2.19 },
      // Month 2: Campaign restructure live, spring demand picking up
      { month: "Mar 2025", spend: 6214, leads: 16, cpl: 388.38, qualified: 8, cpql: 776.75, deals: 2, revenue: 14891, roas: 2.40 },
      // Month 3: Creative iterations paying off, storm season messaging resonating
      { month: "Apr 2025", spend: 7347, leads: 19, cpl: 386.68, qualified: 10, cpql: 734.70, deals: 3, revenue: 21847, roas: 2.97 },
      // Month 4: Peak spring — highest demand, campaigns optimized
      { month: "May 2025", spend: 7831, leads: 23, cpl: 340.48, qualified: 12, cpql: 652.58, deals: 3, revenue: 26417, roas: 3.37 },
      // Month 5: Summer strength — storm season driving emergency repairs
      { month: "Jun 2025", spend: 7489, leads: 27, cpl: 277.37, qualified: 14, cpql: 534.93, deals: 4, revenue: 31143, roas: 4.16 },
      // Month 6: Peak summer — strong demand continues
      { month: "Jul 2025", spend: 6573, leads: 29, cpl: 226.66, qualified: 15, cpql: 438.20, deals: 4, revenue: 28293, roas: 4.31 },
      // Month 7: Late summer — planned projects filling pipeline
      { month: "Aug 2025", spend: 5867, leads: 32, cpl: 183.34, qualified: 17, cpql: 345.12, deals: 4, revenue: 27847, roas: 4.75 },
      // Month 8: Fall — property managers booking before winter
      { month: "Sep 2025", spend: 5634, leads: 34, cpl: 165.71, qualified: 19, cpql: 296.53, deals: 4, revenue: 26247, roas: 4.66 },
      // Month 9: Fall projects — winterization demand
      { month: "Oct 2025", spend: 5247, leads: 36, cpl: 145.75, qualified: 21, cpql: 249.86, deals: 4, revenue: 24813, roas: 4.73 },
      // Month 10: Late fall — wrapping up before holidays (seasonal dip in new starts)
      { month: "Nov 2025", spend: 5134, leads: 32, cpl: 160.44, qualified: 18, cpql: 285.22, deals: 3, revenue: 18847, roas: 3.67 },
      // Month 11: Early winter — storm damage + spring planning inquiries returning
      { month: "Dec 2025", spend: 4518, leads: 35, cpl: 129.09, qualified: 18, cpql: 251.00, deals: 5, revenue: 19834, roas: 4.39 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$251.4K", growth: "+134%" },
    { label: "Total Pipeline", value: "$387K", growth: "+102%" },
    { label: "Avg Revenue Per Job", value: "$6,617", growth: "" },
    { label: "Blended ROAS", value: "3.75x", growth: "" },
  ],
};
