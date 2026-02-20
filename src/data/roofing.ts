import { CaseStudyData } from "./types";

export const roofing: CaseStudyData = {
  slug: "roofing",
  industry: "Roofing",
  headline: "How a NYC Roofing Company Grew Organic Traffic 375% With AI-Powered Marketing",
  subheadline: "MEGA helped a local roofing company in New York City optimize their digital marketing, reducing cost per qualified lead by 20%, growing organic traffic 375%, and generating $175K in attributed revenue over 11 months.",
  heroStats: [
    { value: "11", unit: "months", label: "Partnership Duration" },
    { value: "375", unit: "%", label: "Organic Traffic Growth" },
    { value: "$175", unit: "K", label: "Revenue Attributed" },
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
        "Google Search Console and Google Business Profile setup — completed profile, added service areas for all five boroughs, launched review generation campaign",
        "Competitor research and keyword research across residential roofing, commercial roofing, emergency repairs, and seasonal maintenance verticals",
        "Generated 18 initial articles (roof replacement guides, storm damage checklists, NYC building code explainers, seasonal maintenance tips)",
        "Content audit and metadata fixes across all existing service pages, including image SEO and E-E-A-T signals for local contractor authority",
        "Local citation building across 50+ directories — NAP consistency audit and corrections on Yelp, BBB, Apple Maps, and industry-specific listings",
        "Full audit of past ad performance and re-instrumented site with proper pixel implementation and conversion tracking",
        "CRM integration for closed-loop lead-to-job attribution tracking across the typical 2–3 week residential sales cycle",
        "Comprehensive ad strategy built around cost per qualified lead and job value, not raw inquiry volume",
        "Reduced spend inefficiencies — paused low-intent keywords, launched first round of creative and landing page A/B tests targeting homeowners and property managers",
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
      { label: "Total Keywords", value: "871", growth: "+366%", from: "from 187" },
      { label: "Top 10 Rankings", value: "91", growth: "+727%", from: "from 11" },
      { label: "Pages Created", value: "93", growth: "", from: "incl. 47 neighborhood landing pages" },
      { label: "Organic Traffic", value: "1,483/mo", growth: "+375%", from: "from 312" },
    ],
    monthly: [
      // Month 1 (Mar): Inherited site, technical audit underway, baseline measurement
      { month: "Month 1", keywords: 187, top10: 11, top3: 2, traffic: 312, pages: 8, avgPos: 47.3, ctr: 0.8 },
      // Month 2 (Apr): Technical fixes live, first articles published, GBP optimization starting
      { month: "Month 2", keywords: 246, top10: 18, top3: 3, traffic: 493, pages: 26, avgPos: 42.1, ctr: 0.9 },
      // Month 3 (May): Neighborhood pages indexing, spring demand boosting search volume
      { month: "Month 3", keywords: 347, top10: 29, top3: 5, traffic: 741, pages: 44, avgPos: 37.8, ctr: 1.1 },
      // Month 4 (Jun): Strong indexing, local pack visibility improving, seasonal peak
      { month: "Month 4", keywords: 463, top10: 43, top3: 8, traffic: 1087, pages: 58, avgPos: 33.4, ctr: 1.3 },
      // Month 5 (Jul): Peak summer demand, neighborhood pages ranking, map pack wins
      { month: "Month 5", keywords: 571, top10: 57, top3: 11, traffic: 1391, pages: 67, avgPos: 30.1, ctr: 1.5 },
      // Month 6 (Aug): Continued summer strength, authority building across service clusters
      { month: "Month 6", keywords: 649, top10: 66, top3: 13, traffic: 1573, pages: 74, avgPos: 28.3, ctr: 1.6 },
      // Month 7 (Sep): Late summer, still solid but seasonal searches beginning to taper
      { month: "Month 7", keywords: 718, top10: 73, top3: 15, traffic: 1642, pages: 79, avgPos: 26.9, ctr: 1.7 },
      // Month 8 (Oct): Fall slowdown in search volume, but rankings still climbing
      { month: "Month 8", keywords: 769, top10: 79, top3: 17, traffic: 1547, pages: 83, avgPos: 25.7, ctr: 1.7 },
      // Month 9 (Nov): Seasonal dip — fewer people searching for roofing in November
      { month: "Month 9", keywords: 807, top10: 83, top3: 18, traffic: 1389, pages: 86, avgPos: 25.1, ctr: 1.6 },
      // Month 10 (Dec): Winter low — rankings holding but search volume at yearly minimum
      { month: "Month 10", keywords: 834, top10: 87, top3: 19, traffic: 1217, pages: 89, avgPos: 24.6, ctr: 1.5 },
      // Month 11 (Jan): Slight recovery — storm damage inquiries and early spring planners
      { month: "Month 11", keywords: 871, top10: 91, top3: 21, traffic: 1483, pages: 93, avgPos: 24.1, ctr: 1.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$53.7K" },
      { label: "Qualified Leads", value: "125" },
      { label: "Avg Cost Per Qualified Lead", value: "$429", note: "↓20% from $535" },
      { label: "Closed Jobs", value: "30" },
    ],
    monthly: [
      // Month 1 (Mar): Inherited account — baseline performance, auditing and restructuring
      { month: "Month 1", spend: 4817, leads: 17, cpl: 283, qualified: 9, cpql: 535, deals: 2, revenue: 11247, roas: 2.33 },
      // Month 2 (Apr): Campaign restructure live, spring demand picking up, new landing pages
      { month: "Month 2", spend: 4923, leads: 22, cpl: 224, qualified: 13, cpql: 379, deals: 3, revenue: 17891, roas: 3.63 },
      // Month 3 (May): Creative iterations paying off, storm season messaging resonating
      { month: "Month 3", spend: 5147, leads: 26, cpl: 198, qualified: 15, cpql: 343, deals: 4, revenue: 22891, roas: 4.45 },
      // Month 4 (Jun): Peak summer — highest lead volume, best qualification rates
      { month: "Month 4", spend: 5231, leads: 28, cpl: 187, qualified: 16, cpql: 327, deals: 4, revenue: 23417, roas: 4.48 },
      // Month 5 (Jul): Continued summer strength, audience optimization paying off
      { month: "Month 5", spend: 5089, leads: 27, cpl: 189, qualified: 15, cpql: 339, deals: 4, revenue: 22143, roas: 4.35 },
      // Month 6 (Aug): Late summer — still solid but slight seasonal tapering
      { month: "Month 6", spend: 5173, leads: 24, cpl: 216, qualified: 13, cpql: 398, deals: 3, revenue: 18293, roas: 3.54 },
      // Month 7 (Sep): Fall transition — fewer emergency repairs, more planned projects
      { month: "Month 7", spend: 4937, leads: 21, cpl: 235, qualified: 11, cpql: 449, deals: 3, revenue: 16847, roas: 3.41 },
      // Month 8 (Oct): Seasonal softening — property managers wrapping up before winter
      { month: "Month 8", spend: 4718, leads: 18, cpl: 262, qualified: 9, cpql: 524, deals: 2, revenue: 12847, roas: 2.72 },
      // Month 9 (Nov): Winter approaching — demand drops, scaled back spend accordingly
      { month: "Month 9", spend: 4583, leads: 15, cpl: 306, qualified: 8, cpql: 573, deals: 2, revenue: 9713, roas: 2.12 },
      // Month 10 (Dec): Winter low — minimal roofing demand, maintenance-level spend
      { month: "Month 10", spend: 4391, leads: 13, cpl: 338, qualified: 7, cpql: 627, deals: 1, revenue: 6847, roas: 1.56 },
      // Month 11 (Jan): Early recovery — storm damage inquiries, spring planning searches returning
      { month: "Month 11", spend: 4647, leads: 17, cpl: 273, qualified: 9, cpql: 516, deals: 2, revenue: 13194, roas: 2.84 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$175.3K", growth: "+97%" },
    { label: "Total Pipeline", value: "$312K", growth: "+84%" },
    { label: "Avg Revenue Per Job", value: "$5,844", growth: "" },
    { label: "Blended ROAS", value: "3.27x", growth: "" },
  ],
};
