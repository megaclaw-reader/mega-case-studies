import { CaseStudyData } from "./types";

export const accounting: CaseStudyData = {
  slug: "accounting",
  industry: "Accounting",
  headline: "How a California Accounting Firm Generated $275K in New Revenue With AI-Powered Marketing",
  subheadline: "MEGA helped a local accounting firm in California optimize their digital marketing, reducing cost per qualified lead by 26%, growing organic traffic 858%, and acquiring 35 new clients over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "858", unit: "%", label: "Organic Traffic Growth" },
    { value: "$275", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Local SEO"],
  company: {
    industry: "Accounting",
    employees: "23",
    revenue: "$3.8M",
    location: "California (Multi-City)",
    description: "A well-established local accounting firm serving individuals and small businesses across multiple California metro areas including Sacramento, San Jose, and the East Bay. The firm offered tax preparation, bookkeeping, business advisory, payroll services, and small business accounting. They had a loyal client base built primarily through referrals and community reputation, but their digital presence was minimal — a basic website with no local landing pages, inconsistent Google Business Profile listings, and paid campaigns that ran on autopilot without meaningful optimization. They needed to reduce their dependence on word-of-mouth and build a scalable inbound pipeline, especially outside of tax season.",
  },
  challenges: [
    {
      title: "Weak Local Search Visibility",
      description: "The firm had a functional website ranking for 187 keywords, but almost no city-specific or service-specific landing pages. Their Google Business Profiles across three office locations were incomplete and inconsistently maintained, and they had fewer than 40 local citations. Organic traffic contributed only about 412 visits per month — a fraction of what competitors in the Sacramento and Bay Area markets were capturing.",
    },
    {
      title: "Over-Reliance on Tax Season Revenue",
      description: "Roughly 57% of the firm's annual revenue was concentrated in January through April. Outside of tax season, new client acquisition dropped sharply, and the firm struggled to fill capacity for bookkeeping, payroll, and advisory services during the summer months. Their marketing didn't adapt to seasonal demand shifts.",
    },
    {
      title: "Rising Competition from National Chains and Online Platforms",
      description: "The firm faced increasing pressure from national chains with aggressive local ad spend and online platforms offering DIY tax filing and automated bookkeeping. Their cost per qualified lead from paid campaigns averaged $856, and the qualification rate was around 35% — workable, but leaving significant budget on the table reaching prospects who weren't a fit for their high-touch, relationship-driven service model.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and local business schema review",
        "Google Search Console setup and Google Business Profile optimization across all three California office locations",
        "Competitor research and keyword research across tax preparation, bookkeeping, payroll, business advisory, and small business accounting verticals",
        "Generated 18 initial articles (tax planning guides, small business accounting tips, California-specific compliance content)",
        "Content audit and metadata fixes across all existing service pages",
        "Technical fixes — image SEO, canonical issues, E-E-A-T optimization for financial authority signals",
        "Local citation building — submitted to 47 directories including Yelp, Yellow Pages, BBB, Apple Maps, and industry-specific listings",
        "Full audit of past ad performance and re-instrumented site with proper pixel and conversion tracking",
        "CRM integration for closed-loop lead-to-client attribution",
        "Comprehensive ad strategy built around cost per qualified lead and client lifetime value, not raw inquiry volume",
        "Reduced spend inefficiencies — paused low-intent broad match keywords and launched first round of creative and landing page A/B tests",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for local service-area prospects",
        "Generated 20+ additional articles focused on seasonal tax planning, bookkeeping best practices, and California business regulations",
        "Launched programmatic city-level service pages ('tax preparation in [city]', 'bookkeeping services [neighborhood]') across 14 California metros",
        "Weekly Google Business Profile posts highlighting seasonal services and client success stories",
        "Optimized internal linking to strengthen topical authority across accounting service clusters",
        "Added structured data schema for local business pages, FAQ content, and organization markup",
        "Rapid iterations of ad creative testing — messaging pivots around tax savings vs. peace of mind vs. business growth",
        "Retargeting and remarketing layer for visitors who viewed service pages but didn't convert",
        "Keyword and negative keyword refinement based on qualification data from CRM",
        "Landing page refinement with service-specific proof points and client testimonials",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional California cities and neighborhoods",
        "Continued content updates, refreshed underperforming articles with updated tax law information",
        "Backlink campaigns — organic link building via local business publications, guest posting on financial planning blogs",
        "Local citation expansion to 80+ directories with NAP consistency audit",
        "CRO review and keyword cannibalization cleanup across overlapping service terms",
        "Advanced schema markup by page type (service, blog, FAQ, local business)",
        "AI search crawlability improvements for LLM placement in local accounting recommendation queries",
        "Complex audience segmentations by service interest, business size, and geographic proximity",
        "Multi-approach bidding strategies based on campaign maturity and client acquisition data",
        "Fully robust lead scoring integrating ad engagement signals with CRM qualification outcomes",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on performance — shifted spend toward highest-converting service lines and geographic areas",
        "Expansion of programmatic pages into additional service combinations and emerging neighborhoods",
        "Seasonal campaign adjustments — ramped ad spend and content for tax season (Q1), year-end planning (Q4), and maintained baseline during summer",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed clients",
        "Bid strategy tuning based on seasonal demand curves and client lifetime value by service type",
        "Weekly reporting with client acquisition attribution and actionable recommendations tied to revenue impact",
        "Google Business Profile review generation campaigns and ongoing local citation maintenance",
        "Content refresh cycles aligned to quarterly tax deadlines, California regulatory changes, and seasonal planning milestones",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,478", growth: "+691%", from: "from 187" },
      { label: "Top 10 Rankings", value: "179", growth: "+1,277%", from: "from 13" },
      { label: "Pages Created", value: "162", growth: "", from: "incl. 94 city-level service pages" },
      { label: "Organic Traffic", value: "3,947/mo", growth: "+858%", from: "from 412" },
    ],
    monthly: [
      // Month 1 (Jan): Inherited site, technical audit underway, tax season starting — baseline measurement
      { month: "Aug 2025", keywords: 187, top10: 13, top3: 2, traffic: 412, pages: 18, avgPos: 47.3, ctr: 0.9 },
      // Month 2 (Feb): Technical fixes live, first articles published, GBP optimized, tax season traffic picking up
      { month: "Sep 2025", keywords: 264, top10: 21, top3: 3, traffic: 647, pages: 37, avgPos: 42.1, ctr: 1.1 },
      // Month 3 (Mar): City-level pages indexing, tax-related content gaining traction, strong seasonal demand
      { month: "Oct 2025", keywords: 389, top10: 34, top3: 5, traffic: 983, pages: 58, avgPos: 37.8, ctr: 1.2 },
      // Month 4 (Apr): Tax deadline peak — highest seasonal organic demand, programmatic pages ranking
      { month: "Nov 2025", keywords: 517, top10: 49, top3: 8, traffic: 1347, pages: 74, avgPos: 34.2, ctr: 1.4 },
      // Month 5 (May): Post-tax season drop in search volume, but keyword base still growing
      { month: "Dec 2025", keywords: 631, top10: 62, top3: 11, traffic: 1623, pages: 87, avgPos: 31.7, ctr: 1.5 },
      // Month 6 (Jun): Summer lull in accounting searches — traffic growth slows despite more rankings
      { month: "Jan 2025", keywords: 743, top10: 78, top3: 14, traffic: 1847, pages: 96, avgPos: 29.4, ctr: 1.6 },
      // Month 7 (Jul): Deepest summer lull — continued content investment for future compounding
      { month: "Feb 2025", keywords: 847, top10: 91, top3: 17, traffic: 2134, pages: 108, avgPos: 27.8, ctr: 1.7 },
      // Month 8 (Aug): Slight pickup as businesses start thinking about Q3 estimated taxes
      { month: "Mar 2025", keywords: 963, top10: 107, top3: 19, traffic: 2418, pages: 119, avgPos: 26.1, ctr: 1.8 },
      // Month 9 (Sep): Fall recovery — year-end planning content starts ranking, backlinks compounding
      { month: "Apr 2025", keywords: 1087, top10: 124, top3: 22, traffic: 2847, pages: 131, avgPos: 24.7, ctr: 1.9 },
      // Month 10 (Oct): Year-end planning surge — businesses seeking advisory and tax strategy services
      { month: "May 2025", keywords: 1213, top10: 143, top3: 26, traffic: 3217, pages: 142, avgPos: 23.3, ctr: 2.0 },
      // Month 11 (Nov): Strong year-end demand — featured snippets for FAQ content, local authority established
      { month: "Jun 2025", keywords: 1347, top10: 161, top3: 29, traffic: 3641, pages: 153, avgPos: 22.1, ctr: 2.1 },
      // Month 12 (Dec): December slowdown but strong foundation — authority carrying traffic through holidays
      { month: "Jul 2025", keywords: 1478, top10: 179, top3: 33, traffic: 3947, pages: 162, avgPos: 21.3, ctr: 2.2 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$84.0K" },
      { label: "Qualified Leads", value: "133" },
      { label: "Avg Cost Per Qualified Lead", value: "$631", note: "↓26% from $856" },
      { label: "New Clients Acquired", value: "35" },
    ],
    monthly: [
      // Month 1 (Jan): Inherited account — tax season starting, baseline performance before optimization
      { month: "Aug 2025", spend: 6847, leads: 23, cpl: 298, qualified: 8, cpql: 856, deals: 2, revenue: 17293, roas: 2.53 },
      // Month 2 (Feb): Campaign restructure live, tax season ramping, new landing pages for tax services
      { month: "Sep 2025", spend: 7134, leads: 29, cpl: 246, qualified: 11, cpql: 649, deals: 3, revenue: 26847, roas: 3.76 },
      // Month 3 (Mar): Tax season peak — highest intent traffic, compliance messaging resonating
      { month: "Oct 2025", spend: 7389, leads: 33, cpl: 224, qualified: 14, cpql: 528, deals: 4, revenue: 33847, roas: 4.58 },
      // Month 4 (Apr): Tax deadline urgency — peak lead volume and deal velocity
      { month: "Nov 2025", spend: 7512, leads: 37, cpl: 203, qualified: 16, cpql: 470, deals: 5, revenue: 35293, roas: 4.70 },
      // Month 5 (May): Post-tax season drop — sharp decline in search intent, budget pulled back
      { month: "Dec 2025", spend: 6793, leads: 21, cpl: 324, qualified: 10, cpql: 679, deals: 2, revenue: 14293, roas: 2.10 },
      // Month 6 (Jun): Summer lull — shifted messaging toward bookkeeping and payroll services
      { month: "Jan 2025", spend: 6614, leads: 18, cpl: 367, qualified: 9, cpql: 735, deals: 2, revenue: 11847, roas: 1.79 },
      // Month 7 (Jul): Deepest summer lull — maintained presence at reduced spend, focused on remarketing
      { month: "Feb 2025", spend: 6547, leads: 17, cpl: 385, qualified: 8, cpql: 818, deals: 1, revenue: 8947, roas: 1.37 },
      // Month 8 (Aug): Slight recovery — Q3 estimated tax planning driving some intent
      { month: "Mar 2025", spend: 6712, leads: 19, cpl: 353, qualified: 9, cpql: 746, deals: 2, revenue: 14847, roas: 2.21 },
      // Month 9 (Sep): Fall pickup — year-end planning campaigns launched, business advisory messaging
      { month: "Apr 2025", spend: 7023, leads: 24, cpl: 293, qualified: 11, cpql: 639, deals: 3, revenue: 25847, roas: 3.68 },
      // Month 10 (Oct): Year-end planning surge — strong deal flow from businesses needing tax strategy
      { month: "May 2025", spend: 7184, leads: 27, cpl: 266, qualified: 13, cpql: 553, deals: 4, revenue: 31293, roas: 4.36 },
      // Month 11 (Nov): Year-end rush — highest non-tax-season performance, lookalike audiences converting
      { month: "Jun 2025", spend: 7347, leads: 31, cpl: 237, qualified: 14, cpql: 525, deals: 4, revenue: 33847, roas: 4.61 },
      // Month 12 (Dec): Holiday slowdown — maintained efficiency but lower volume as businesses close out year
      { month: "Jul 2025", spend: 6891, leads: 22, cpl: 313, qualified: 10, cpql: 689, deals: 3, revenue: 20847, roas: 3.03 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$275.0K", growth: "+189%" },
    { label: "Total Pipeline", value: "$1.05M", growth: "+143%" },
    { label: "Avg Revenue Per Client", value: "$7,858", growth: "" },
    { label: "Blended ROAS", value: "3.27x", growth: "" },
  ],
};
