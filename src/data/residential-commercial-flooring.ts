import { CaseStudyData } from "./types";

export const residentialCommercialFlooring: CaseStudyData = {
  slug: "residential-commercial-flooring",
  industry: "Residential & Commercial Flooring",
  headline: "How a Miami Flooring Company Increased Qualified Leads 38% With AI-Powered Marketing",
  subheadline: "MEGA helped a residential and commercial flooring company in Miami, FL optimize their digital marketing, reducing cost per qualified lead by 33%, growing organic traffic 312%, and generating $431.2K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "312", unit: "%", label: "Organic Traffic Growth" },
    { value: "431.2", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Local SEO", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Residential & Commercial Flooring",
    employees: "22",
    revenue: "$3.4M",
    location: "Miami, FL",
    description: "A full-service flooring company serving the greater Miami metro area, specializing in hardwood, tile, carpet, luxury vinyl plank, and commercial flooring installations. The company had built a strong reputation over 11 years through quality craftsmanship and referral business from general contractors and property managers. However, their digital marketing presence was minimal — a dated website with limited service pages, inconsistent local citations, and a modest paid advertising budget that generated leads without any qualification tracking. They served both homeowners looking for single-room updates and commercial clients needing full-building flooring installations, but their online strategy didn't differentiate between these audiences.",
  },
  challenges: [
    {
      title: "Poor Local Search Visibility",
      description: "The company ranked for only 143 keywords with virtually no presence in the local map pack for high-intent searches like 'flooring company Miami' or 'hardwood floor installation near me.' Their Google Business Profile had 31 reviews and was missing key service categories. Competitors with stronger SEO were capturing the majority of organic flooring searches across the Miami metro.",
    },
    {
      title: "Unqualified Leads Draining Budget",
      description: "Paid campaigns were generating a mix of phone calls and form submissions, but with no lead quality tracking, the team couldn't distinguish between a homeowner ready for a $6,000 whole-house installation and someone price-shopping for a single room patch. The effective cost per qualified lead was around $387, with a qualification rate near 48% — meaning over half of all paid leads were unqualified or low-intent inquiries.",
    },
    {
      title: "No Residential vs. Commercial Segmentation",
      description: "The company's marketing treated all prospects the same, despite residential jobs averaging $4,500 and commercial contracts averaging $18,000+. There was no separate messaging, landing pages, or tracking for property managers, general contractors, and commercial clients versus homeowners — leaving significant revenue on the table from the higher-value commercial segment.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and mobile performance review for local flooring searches",
        "Google Search Console and Google Business Profile optimization — completed profile with all flooring service categories, added service area coverage for Miami metro including Coral Gables, Hialeah, Kendall, and Doral",
        "Competitor research and keyword mapping across residential flooring (hardwood, tile, carpet, LVP) and commercial flooring (office, retail, warehouse) verticals",
        "Generated 16 initial articles (flooring material comparison guides, installation process explainers, South Florida home renovation tips, commercial flooring specification guides)",
        "Content audit and metadata optimization across all existing service pages, including image SEO and E-E-A-T signals for local contractor authority",
        "Local citation building across 45+ directories — NAP consistency audit and corrections on Yelp, BBB, Apple Maps, Houzz, and flooring industry listings",
        "Full audit of past ad performance and re-instrumented site with proper conversion tracking for phone calls and form submissions",
        "CRM integration for closed-loop lead-to-job attribution tracking, with separate pipelines for residential and commercial leads",
        "Comprehensive ad strategy built around cost per qualified lead and average job value, segmented by residential vs. commercial intent",
        "Paused low-intent keywords, launched landing page A/B tests with separate experiences for homeowners and commercial property managers",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for residential vs. commercial flooring segments",
        "Generated 22+ additional articles focused on neighborhood-specific and service-specific flooring topics",
        "Launched programmatic location pages ('flooring installation in [neighborhood], Miami' — covering 38 neighborhoods and surrounding cities)",
        "Created dedicated commercial flooring landing pages targeting property managers, GCs, and facility managers",
        "Optimized internal linking to strengthen topical authority across hardwood, tile, carpet, LVP, and commercial flooring clusters",
        "Weekly Google Business Profile posts with project photos, before/after showcases, and seasonal promotions",
        "Added structured data schema for local business, service pages, FAQ content, and review markup",
        "Rapid ad creative testing — messaging pivots around material quality, installation speed, free estimates, and commercial project capabilities",
        "Retargeting layer for showroom page visitors, estimate request abandoners, and commercial specification page viewers",
        "Keyword and negative keyword refinement based on CRM qualification data — filtering out DIY searchers, out-of-area clicks, and non-service inquiries",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional service-specific and seasonal terms",
        "Continued content updates — refreshed underperforming articles with updated material pricing and trend references",
        "Local citation building and backlink campaigns via home improvement publications and South Florida real estate blogs",
        "CRO review and keyword cannibalization cleanup across overlapping service and location terms",
        "Advanced schema markup by page type (service, neighborhood, blog, FAQ, review, commercial project gallery)",
        "AI search crawlability improvements for LLM placement in local flooring recommendation queries",
        "Complex audience segmentations by property type (single-family, multi-family, commercial), neighborhood, and intent signals",
        "Multi-approach bidding strategies based on campaign maturity and job pipeline data",
        "Fully robust lead scoring integrating ad engagement signals with CRM job stage progression — weighted by residential vs. commercial job value",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on seasonality — increased spend during spring/summer renovation season, maintained commercial targeting year-round",
        "Expansion of neighborhood pages into adjacent markets (Fort Lauderdale, Boca Raton, Homestead) and emerging Miami suburbs",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed residential and commercial jobs",
        "Bid strategy tuning based on seasonal demand patterns and average job value by flooring type and client segment",
        "Weekly reporting with job attribution and actionable recommendations tied to revenue impact",
        "Content refresh cycles aligned to seasonal demand — spring renovation guides, summer new construction content, fall commercial project planning, winter showroom promotions",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "734", growth: "+413%", from: "from 143" },
      { label: "Top 10 Rankings", value: "82", growth: "+640%", from: "from 11" },
      { label: "Pages Created", value: "87", growth: "", from: "incl. 38 neighborhood landing pages" },
      { label: "Organic Traffic", value: "1,627/mo", growth: "+312%", from: "from 395" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 143, top10: 11, top3: 2, traffic: 395, pages: 9, avgPos: 46.7, ctr: 0.9 },
      { month: "Feb 2025", keywords: 198, top10: 17, top3: 3, traffic: 487, pages: 25, avgPos: 42.3, ctr: 1.0 },
      { month: "Mar 2025", keywords: 279, top10: 26, top3: 5, traffic: 623, pages: 41, avgPos: 38.1, ctr: 1.1 },
      { month: "Apr 2025", keywords: 367, top10: 37, top3: 7, traffic: 847, pages: 53, avgPos: 34.2, ctr: 1.3 },
      { month: "May 2025", keywords: 448, top10: 47, top3: 10, traffic: 1093, pages: 61, avgPos: 31.0, ctr: 1.4 },
      { month: "Jun 2025", keywords: 519, top10: 56, top3: 12, traffic: 1341, pages: 67, avgPos: 28.7, ctr: 1.5 },
      { month: "Jul 2025", keywords: 578, top10: 63, top3: 14, traffic: 1487, pages: 72, avgPos: 27.1, ctr: 1.6 },
      { month: "Aug 2025", keywords: 623, top10: 69, top3: 16, traffic: 1573, pages: 76, avgPos: 25.8, ctr: 1.7 },
      { month: "Sep 2025", keywords: 661, top10: 73, top3: 17, traffic: 1489, pages: 80, avgPos: 25.1, ctr: 1.6 },
      { month: "Oct 2025", keywords: 693, top10: 77, top3: 18, traffic: 1372, pages: 83, avgPos: 24.5, ctr: 1.6 },
      { month: "Nov 2025", keywords: 716, top10: 80, top3: 19, traffic: 1247, pages: 85, avgPos: 24.0, ctr: 1.5 },
      { month: "Dec 2025", keywords: 734, top10: 82, top3: 21, traffic: 1627, pages: 87, avgPos: 23.6, ctr: 1.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$120K" },
      { label: "Qualified Leads", value: "385" },
      { label: "Avg Cost Per Qualified Lead", value: "$312", note: "↓19% from $387" },
      { label: "Closed Jobs", value: "73" },
    ],
    monthly: [
      // Month 1 (Jan): Winter — slower season, baseline, auditing and restructuring
      { month: "Jan 2025", spend: 7800, leads: 37, cpl: 210.81, qualified: 18, cpql: 433.33, deals: 4, revenue: 24200, roas: 3.10 },
      // Month 2 (Feb): Still winter, campaigns restructured, slight improvement
      { month: "Feb 2025", spend: 8200, leads: 38, cpl: 215.79, qualified: 22, cpql: 372.73, deals: 5, revenue: 29500, roas: 3.60 },
      // Month 3 (Mar): Spring starting — renovation season begins, leads picking up
      { month: "Mar 2025", spend: 9500, leads: 41, cpl: 231.71, qualified: 19, cpql: 500.0, deals: 6, revenue: 37800, roas: 3.98 },
      // Month 4 (Apr): Spring peak — heavy renovation demand, homeowners and commercial
      { month: "Apr 2025", spend: 11200, leads: 45, cpl: 248.89, qualified: 39, cpql: 287.18, deals: 8, revenue: 49600, roas: 4.43 },
      // Month 5 (May): Peak season continues — new construction + remodels
      { month: "May 2025", spend: 12500, leads: 50, cpl: 250.0, qualified: 47, cpql: 265.96, deals: 6, revenue: 33800, roas: 2.7 },
      // Month 6 (Jun): Summer peak — highest lead volume
      { month: "Jun 2025", spend: 12200, leads: 59, cpl: 206.78, qualified: 46, cpql: 265.22, deals: 5, revenue: 29900, roas: 2.45 },
      // Month 7 (Jul): Summer strong — still peak renovation season
      { month: "Jul 2025", spend: 11800, leads: 59, cpl: 200.0, qualified: 43, cpql: 274.42, deals: 9, revenue: 53400, roas: 4.53 },
      // Month 8 (Aug): Late summer — still solid, slight seasonal taper
      { month: "Aug 2025", spend: 10800, leads: 69, cpl: 156.52, qualified: 37, cpql: 291.89, deals: 8, revenue: 46800, roas: 4.33 },
      // Month 9 (Sep): Fall — moderate demand, commercial projects continuing
      { month: "Sep 2025", spend: 10200, leads: 76, cpl: 134.21, qualified: 32, cpql: 318.75, deals: 7, revenue: 41200, roas: 4.04 },
      // Month 10 (Oct): Fall slowdown — residential dips, commercial steady
      { month: "Oct 2025", spend: 9500, leads: 86, cpl: 110.47, qualified: 27, cpql: 351.85, deals: 6, revenue: 33800, roas: 3.56 },
      // Month 11 (Nov): Pre-winter — slower residential, holiday season
      { month: "Nov 2025", spend: 8500, leads: 82, cpl: 103.66, qualified: 23, cpql: 369.57, deals: 5, revenue: 27400, roas: 3.22 },
      // Month 12 (Dec): Winter — lowest demand but early planners + commercial year-end projects
      { month: "Dec 2025", spend: 7800, leads: 91, cpl: 85.71, qualified: 32, cpql: 243.75, deals: 4, revenue: 23800, roas: 3.05 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$431.2K", growth: "+89%" },
    { label: "Total Pipeline", value: "$847K", growth: "+76%" },
    { label: "Avg Revenue Per Job", value: "$431.2K", growth: "" },
    { label: "Blended ROAS", value: "3.59x", growth: "" },
  ],
};
