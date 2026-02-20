import { CaseStudyData } from "./types";

export const accountingNy: CaseStudyData = {
  slug: "accounting-ny",
  industry: "Accounting",
  headline: "How a New York Accounting Firm Generated $186K in New Revenue With AI-Powered Marketing",
  subheadline: "MEGA helped a local accounting firm in New York City optimize their digital marketing, reducing cost per qualified lead by 26%, growing organic traffic 902%, and acquiring 22 new clients over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "902", unit: "%", label: "Organic Traffic Growth" },
    { value: "$186", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Local SEO"],
  company: {
    industry: "Accounting",
    employees: "18",
    revenue: "$3.2M",
    location: "New York City (Manhattan & Brooklyn)",
    description: "A well-regarded boutique accounting firm serving individuals, freelancers, and small businesses across Manhattan and Brooklyn. The firm specialized in tax preparation, bookkeeping, business advisory, payroll services, and financial planning for creative professionals and startups. They had a loyal client base built primarily through referrals and professional network relationships, but their digital presence was underdeveloped — an aging website with no neighborhood-level landing pages, a single Google Business Profile that wasn't fully optimized, and paid campaigns running without meaningful bid management or audience segmentation. They needed to reduce their dependence on referral-driven growth and build a predictable inbound pipeline, particularly for non-tax-season services like bookkeeping and advisory.",
  },
  challenges: [
    {
      title: "Minimal Local Search Presence in a Hyper-Competitive Market",
      description: "New York City is one of the most saturated markets for accounting services, with national chains, Big Four spillover practices, and hundreds of local firms competing for the same keywords. The firm's website ranked for just 143 keywords, almost none in the top 10 for high-intent local terms like 'small business accountant NYC' or 'tax preparation Manhattan.' Their single Google Business Profile was partially completed and they had fewer than 30 local citations. Organic traffic averaged only 347 visits per month — far below what competitors with established local SEO were capturing.",
    },
    {
      title: "Heavy Reliance on Tax Season for New Client Acquisition",
      description: "Approximately 61% of the firm's new client inquiries came between January and April. Outside of tax season, lead flow dropped significantly, leaving their bookkeeping, payroll, and advisory teams underutilized during summer and early fall. Their marketing budget and messaging didn't shift to match seasonal demand patterns, resulting in wasted spend during low-intent periods and missed opportunities during year-end planning season.",
    },
    {
      title: "High Cost Per Qualified Lead With Poor Audience Targeting",
      description: "The firm's paid campaigns were reaching a broad audience without meaningful geographic or intent-based segmentation — a costly mistake in a market where accounting-related CPCs regularly exceed $12. Their cost per qualified lead averaged $975, and only about 36% of total leads met their qualification criteria for the firm's high-touch service model. With a $5,000 monthly budget, every wasted click had an outsized impact on pipeline efficiency.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and local business schema review",
        "Google Search Console setup and Google Business Profile optimization for Manhattan and Brooklyn office locations",
        "Competitor research and keyword research across tax preparation, bookkeeping, payroll, business advisory, and startup accounting verticals in the NYC market",
        "Generated 12 initial articles (NYC tax planning guides, freelancer accounting tips, New York-specific compliance content including city tax obligations)",
        "Content audit and metadata fixes across all existing service pages",
        "Technical fixes — image SEO, canonical issues, E-E-A-T optimization for financial authority signals",
        "Local citation building — submitted to 43 directories including Yelp, Yellow Pages, BBB, Apple Maps, and NYC-specific business listings",
        "Full audit of past ad performance and re-instrumented site with proper pixel and conversion tracking",
        "CRM integration for closed-loop lead-to-client attribution",
        "Comprehensive ad strategy built around cost per qualified lead and client lifetime value, with geographic targeting refined to Manhattan, Brooklyn, and surrounding boroughs",
        "Reduced spend inefficiencies — paused low-intent broad match keywords, added negative keywords for DIY tax software and Big Four searches, launched first round of creative and landing page A/B tests",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for borough-level and neighborhood-level prospects",
        "Generated 16 additional articles focused on NYC freelancer tax obligations, startup bookkeeping, and New York business regulations",
        "Launched programmatic neighborhood-level service pages ('tax preparation in Midtown', 'bookkeeping services Williamsburg', 'small business accountant DUMBO') across 78 NYC neighborhoods",
        "Weekly Google Business Profile posts highlighting seasonal services and industry-specific expertise",
        "Optimized internal linking to strengthen topical authority across accounting service clusters",
        "Added structured data schema for local business pages, FAQ content, and organization markup",
        "Rapid iterations of ad creative testing — messaging pivots around NYC-specific pain points like city tax complexity and freelancer quarterly estimates",
        "Retargeting and remarketing layer for visitors who viewed service pages but didn't convert",
        "Keyword and negative keyword refinement based on qualification data from CRM",
        "Landing page refinement with service-specific proof points and neighborhood-relevant social proof",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional NYC neighborhoods and outer boroughs",
        "Continued content updates, refreshed underperforming articles with updated New York tax law information",
        "Backlink campaigns — organic link building via NYC business publications, guest posting on financial planning blogs and startup community sites",
        "Local citation expansion to 70+ directories with NAP consistency audit across all listings",
        "CRO review and keyword cannibalization cleanup across overlapping service terms",
        "Advanced schema markup by page type (service, blog, FAQ, local business)",
        "AI search crawlability improvements for LLM placement in local accounting recommendation queries",
        "Complex audience segmentations by service interest, business type (freelancer, startup, established SMB), and borough proximity",
        "Multi-approach bidding strategies based on campaign maturity and client acquisition data",
        "Fully robust lead scoring integrating ad engagement signals with CRM qualification outcomes",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on performance — shifted spend toward highest-converting service lines and neighborhoods",
        "Expansion of programmatic pages into additional service combinations and emerging NYC neighborhoods",
        "Seasonal campaign adjustments — ramped ad spend and content for tax season (Q1), year-end planning (Q4), and maintained baseline during summer with bookkeeping and advisory messaging",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed clients",
        "Bid strategy tuning based on seasonal demand curves and client lifetime value by service type",
        "Weekly reporting with client acquisition attribution and actionable recommendations tied to revenue impact",
        "Google Business Profile review generation campaigns and ongoing local citation maintenance",
        "Content refresh cycles aligned to quarterly tax deadlines, New York regulatory changes, and seasonal planning milestones",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,289", growth: "+801%", from: "from 143" },
      { label: "Top 10 Rankings", value: "147", growth: "+1,533%", from: "from 9" },
      { label: "Pages Created", value: "134", growth: "", from: "incl. 78 neighborhood-level service pages" },
      { label: "Organic Traffic", value: "3,478/mo", growth: "+902%", from: "from 347" },
    ],
    monthly: [
      // Month 1 (Jan): Inherited site, technical audit underway, tax season starting — baseline measurement
      { month: "Month 1", keywords: 143, top10: 9, top3: 1, traffic: 347, pages: 12, avgPos: 49.1, ctr: 0.8 },
      // Month 2 (Feb): Technical fixes live, first articles published, GBP optimized, tax season traffic picking up
      { month: "Month 2", keywords: 213, top10: 16, top3: 2, traffic: 534, pages: 28, avgPos: 44.3, ctr: 0.9 },
      // Month 3 (Mar): Neighborhood-level pages indexing, tax-related content gaining traction, strong seasonal demand
      { month: "Month 3", keywords: 318, top10: 27, top3: 4, traffic: 819, pages: 43, avgPos: 39.7, ctr: 1.1 },
      // Month 4 (Apr): Tax deadline peak — highest seasonal organic demand, programmatic pages ranking
      { month: "Month 4", keywords: 427, top10: 38, top3: 6, traffic: 1134, pages: 57, avgPos: 36.2, ctr: 1.2 },
      // Month 5 (May): Post-tax season drop in search volume, but keyword base still growing
      { month: "Month 5", keywords: 534, top10: 49, top3: 8, traffic: 1387, pages: 69, avgPos: 33.4, ctr: 1.3 },
      // Month 6 (Jun): Summer lull in accounting searches — traffic growth slows despite more rankings
      { month: "Month 6", keywords: 638, top10: 59, top3: 11, traffic: 1573, pages: 79, avgPos: 31.1, ctr: 1.4 },
      // Month 7 (Jul): Deepest summer lull — continued content investment for future compounding
      { month: "Month 7", keywords: 729, top10: 71, top3: 13, traffic: 1824, pages: 89, avgPos: 29.3, ctr: 1.5 },
      // Month 8 (Aug): Slight pickup as businesses start thinking about Q3 estimated taxes
      { month: "Month 8", keywords: 834, top10: 84, top3: 15, traffic: 2087, pages: 98, avgPos: 27.6, ctr: 1.6 },
      // Month 9 (Sep): Fall recovery — year-end planning content starts ranking, backlinks compounding
      { month: "Month 9", keywords: 947, top10: 98, top3: 18, traffic: 2463, pages: 108, avgPos: 25.8, ctr: 1.7 },
      // Month 10 (Oct): Year-end planning surge — businesses seeking advisory and tax strategy services
      { month: "Month 10", keywords: 1063, top10: 114, top3: 21, traffic: 2834, pages: 117, avgPos: 24.2, ctr: 1.8 },
      // Month 11 (Nov): Strong year-end demand — featured snippets for FAQ content, local authority established
      { month: "Month 11", keywords: 1178, top10: 131, top3: 24, traffic: 3217, pages: 127, avgPos: 22.9, ctr: 1.9 },
      // Month 12 (Dec): Holiday slowdown but strong foundation — authority carrying traffic through holidays
      { month: "Month 12", keywords: 1289, top10: 147, top3: 27, traffic: 3478, pages: 134, avgPos: 21.7, ctr: 2.0 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$59.5K" },
      { label: "Qualified Leads", value: "83" },
      { label: "Avg Cost Per Qualified Lead", value: "$717", note: "↓26% from $975" },
      { label: "New Clients Acquired", value: "22" },
    ],
    monthly: [
      // Month 1 (Jan): Inherited account — tax season starting, baseline performance before optimization
      { month: "Month 1", spend: 4873, leads: 14, cpl: 348, qualified: 5, cpql: 975, deals: 1, revenue: 8734, roas: 1.79 },
      // Month 2 (Feb): Campaign restructure live, tax season ramping, new landing pages for tax services
      { month: "Month 2", spend: 5147, leads: 19, cpl: 271, qualified: 7, cpql: 735, deals: 2, revenue: 18247, roas: 3.55 },
      // Month 3 (Mar): Tax season peak — highest intent traffic, NYC tax complexity messaging resonating
      { month: "Month 3", spend: 5284, leads: 22, cpl: 240, qualified: 9, cpql: 587, deals: 3, revenue: 25893, roas: 4.90 },
      // Month 4 (Apr): Tax deadline urgency — peak lead volume and deal velocity
      { month: "Month 4", spend: 5391, leads: 24, cpl: 225, qualified: 10, cpql: 539, deals: 3, revenue: 25847, roas: 4.79 },
      // Month 5 (May): Post-tax season drop — sharp decline in search intent, budget pulled back
      { month: "Month 5", spend: 4762, leads: 13, cpl: 366, qualified: 5, cpql: 952, deals: 1, revenue: 7893, roas: 1.66 },
      // Month 6 (Jun): Summer lull — shifted messaging toward bookkeeping and payroll services
      { month: "Month 6", spend: 4618, leads: 12, cpl: 385, qualified: 5, cpql: 924, deals: 1, revenue: 6247, roas: 1.35 },
      // Month 7 (Jul): Deepest summer lull — maintained presence at reduced spend, focused on remarketing
      { month: "Month 7", spend: 4547, leads: 11, cpl: 413, qualified: 5, cpql: 909, deals: 1, revenue: 5834, roas: 1.28 },
      // Month 8 (Aug): Slight recovery — Q3 estimated tax planning driving some intent
      { month: "Month 8", spend: 4689, leads: 14, cpl: 335, qualified: 6, cpql: 782, deals: 1, revenue: 8473, roas: 1.81 },
      // Month 9 (Sep): Fall pickup — year-end planning campaigns launched, business advisory messaging
      { month: "Month 9", spend: 4934, leads: 18, cpl: 274, qualified: 7, cpql: 705, deals: 2, revenue: 17834, roas: 3.61 },
      // Month 10 (Oct): Year-end planning surge — strong deal flow from businesses needing tax strategy
      { month: "Month 10", spend: 5127, leads: 20, cpl: 256, qualified: 8, cpql: 641, deals: 2, revenue: 18947, roas: 3.70 },
      // Month 11 (Nov): Year-end rush — highest non-tax-season performance, lookalike audiences converting
      { month: "Month 11", spend: 5243, leads: 23, cpl: 228, qualified: 9, cpql: 583, deals: 3, revenue: 25134, roas: 4.79 },
      // Month 12 (Dec): Holiday slowdown — maintained efficiency but lower volume as businesses close out year
      { month: "Month 12", spend: 4891, leads: 16, cpl: 306, qualified: 7, cpql: 699, deals: 2, revenue: 16847, roas: 3.44 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$185.9K", growth: "+77%" },
    { label: "Total Pipeline", value: "$743K", growth: "+112%" },
    { label: "Avg Revenue Per Client", value: "$8,451", growth: "" },
    { label: "Blended ROAS", value: "3.12x", growth: "" },
  ],
};
