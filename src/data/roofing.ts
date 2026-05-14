import { CaseStudyData } from "./types";

export const roofing: CaseStudyData = {
  slug: "roofing",
  industry: "Roofing",
  headline: "How a NYC Roofing Company Grew Organic Traffic 375% With AI-Powered Marketing",
  subheadline: "MEGA helped a local roofing company in New York City optimize their digital marketing, reducing cost per qualified lead by 18%, growing organic traffic 375%, and generating $185.3K in attributed revenue over 11 months.",
  heroStats: [
    { value: "11", unit: "months", label: "Partnership Duration" },
    { value: "375", unit: "%", label: "Organic Traffic Growth" },
    { value: "$185.3K", unit: "K", label: "Revenue Attributed" },
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
      { label: "Qualified Leads", value: "153" },
      { label: "Avg Cost Per Qualified Lead", value: "$438", note: "↓18% from $535" },
      { label: "Closed Jobs", value: "32" },
    ],
    monthly: [
      // Month 1 (Mar): Inherited account — baseline performance, auditing and restructuring
      { month: "Feb 2025", spend: 5136, leads: 17, cpl: 302.12, qualified: 8, cpql: 642.0, deals: 2, revenue: 11247, roas: 2.19 },
      // Month 2 (Apr): Campaign restructure live, spring demand picking up, new landing pages
      { month: "Mar 2025", spend: 6214, leads: 17, cpl: 365.53, qualified: 9, cpql: 690.44, deals: 3, revenue: 17891, roas: 2.88 },
      // Month 3 (May): Creative iterations paying off, storm season messaging resonating
      { month: "Apr 2025", spend: 7347, leads: 25, cpl: 293.88, qualified: 9, cpql: 816.33, deals: 4, revenue: 22891, roas: 3.12 },
      // Month 4 (Jun): Peak summer — highest lead volume, best qualification rates
      { month: "May 2025", spend: 7831, leads: 19, cpl: 412.16, qualified: 10, cpql: 783.1, deals: 5, revenue: 28417, roas: 3.63 },
      // Month 5 (Jul): Continued summer strength, audience optimization paying off
      { month: "Jun 2025", spend: 7489, leads: 26, cpl: 288.04, qualified: 13, cpql: 576.08, deals: 5, revenue: 27143, roas: 3.62 },
      // Month 6 (Aug): Late summer — still solid but slight seasonal tapering
      { month: "Jul 2025", spend: 6573, leads: 25, cpl: 262.92, qualified: 11, cpql: 597.55, deals: 3, revenue: 18293, roas: 2.78 },
      // Month 7 (Sep): Fall transition — fewer emergency repairs, more planned projects
      { month: "Aug 2025", spend: 5867, leads: 31, cpl: 189.26, qualified: 14, cpql: 419.07, deals: 3, revenue: 16847, roas: 2.87 },
      // Month 8 (Oct): Seasonal softening — property managers wrapping up before winter
      { month: "Sep 2025", spend: 5227, leads: 26, cpl: 201.04, qualified: 16, cpql: 326.69, deals: 2, revenue: 12847, roas: 2.46 },
      // Month 9 (Nov): Winter approaching — demand drops, scaled back spend accordingly
      { month: "Oct 2025", spend: 5137, leads: 40, cpl: 128.43, qualified: 21, cpql: 244.62, deals: 2, revenue: 9713, roas: 1.89 },
      // Month 10 (Dec): Winter low — minimal roofing demand, maintenance-level spend
      { month: "Nov 2025", spend: 5047, leads: 38, cpl: 132.82, qualified: 20, cpql: 252.35, deals: 1, revenue: 6847, roas: 1.36 },
      // Month 11 (Jan): Early recovery — storm damage inquiries, spring planning searches returning
      { month: "Dec 2025", spend: 5099, leads: 42, cpl: 121.4, qualified: 22, cpql: 231.77, deals: 2, revenue: 13194, roas: 2.59 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$185.3K", growth: "+97%" },
    { label: "Total Pipeline", value: "$312K", growth: "+84%" },
    { label: "Avg Revenue Per Job", value: "$5,791", growth: "" },
    { label: "Blended ROAS", value: "2.8x", growth: "" },
  ],
};
