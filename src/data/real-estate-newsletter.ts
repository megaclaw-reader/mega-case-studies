import { CaseStudyData } from "./types";

export const realEstateNewsletter: CaseStudyData = {
  slug: "real-estate-newsletter",
  industry: "Real Estate Investment Newsletter",
  headline: "How a Real Estate Investment Newsletter Grew from 2,400 to 11,300+ Subscribers in 6 Months",
  subheadline: "MEGA helped a national real estate investment newsletter build a multi-channel subscriber acquisition engine — reducing cost per subscriber by 37%, growing organic traffic 289%, and turning a niche publication into a category authority.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "37", unit: "%", label: "Cost/Subscriber Reduction" },
    { value: "11,340", unit: "", label: "Total Subscribers" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Subscriber Growth"],
  company: {
    industry: "Real Estate Investment Newsletter",
    employees: "4",
    revenue: "$180K",
    location: "National (US)",
    description: "A digital-first real estate investment newsletter delivering weekly market analysis, deal breakdowns, and investment strategies to a national audience of individual investors, syndicators, and real estate professionals. Launched 18 months prior with a loyal but small subscriber base of ~2,400 built entirely through word-of-mouth and social posting. Revenue came from a mix of premium subscriptions and newsletter sponsorships, but growth had stalled and the founder needed a scalable acquisition strategy to attract sponsors and justify higher ad rates.",
  },
  challenges: [
    {
      title: "Subscriber Growth Plateau",
      description: "After an initial burst from the founder's personal network, subscriber growth had flatlined at ~2,400 for three months. Organic word-of-mouth was no longer enough to sustain meaningful list growth, and the newsletter needed 10,000+ subscribers to attract premium sponsor deals.",
    },
    {
      title: "No Paid Acquisition Framework",
      description: "The founder had experimented with boosted social posts and a few ad campaigns but had no systematic approach to paid subscriber acquisition. Cost per subscriber was inconsistent — ranging from $3.80 to $9.50 — with no clear understanding of which audiences or creatives performed best.",
    },
    {
      title: "Minimal SEO & Content Footprint",
      description: "The newsletter's website was essentially a landing page with an archive. There was no blog, no evergreen content strategy, and zero organic search visibility. Competitors with established content libraries were capturing thousands of monthly searches for real estate investment topics that could funnel directly into newsletter signups.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Acquisition Infrastructure",
      items: [
        "Full website audit — redesigned signup flow, added exit-intent capture, and optimized mobile conversion experience",
        "Keyword research targeting high-intent real estate investment queries: 'how to invest in rental properties', 'real estate market analysis 2025', 'multifamily investment strategies'",
        "Competitor analysis of 12 leading real estate and financial newsletters' digital acquisition strategies",
        "Built dedicated landing pages for different investor personas: beginner investors, experienced landlords, passive syndication investors",
        "Launched initial paid campaigns with controlled daily budgets targeting real estate investment interest audiences",
        "Implemented subscriber attribution tracking — source, campaign, and content piece for every signup",
        "Technical SEO foundation — site speed optimization, schema markup, XML sitemap, internal linking structure",
        "Published first 6 long-form articles: rental property ROI calculators, market timing analysis, cap rate guides",
        "Set up email onboarding sequence to convert new subscribers into engaged readers within first 7 days",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Engine & Optimization",
      items: [
        "Reviewed 30-day performance data — identified top-performing ad creatives and highest-converting landing page variants",
        "Published 8 additional long-form SEO articles targeting mid-funnel investment education topics",
        "A/B tested signup incentives — free market report vs. investment checklist vs. deal analysis template",
        "Refined paid audience targeting using subscriber engagement data from first cohort",
        "Built retargeting audiences from website visitors who read articles but didn't subscribe",
        "Launched content upgrade strategy — gated deep-dive reports within blog posts to capture organic readers",
        "Internal linking optimization connecting new articles to signup-optimized pages",
        "Began weekly content cadence targeting trending real estate investment topics for timely organic traffic",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound Growth",
      items: [
        "Reviewed 60-day data — reallocated budget toward highest-performing audience segments and creatives",
        "Expanded content library to 8+ articles per month covering REITs, house hacking, commercial investing, and market updates",
        "Backlink outreach — guest contributions to real estate publications, podcast appearances driving referral signups",
        "Launched referral program incentivizing existing subscribers to share with their network",
        "CRO improvements based on heatmap analysis — simplified signup forms, added social proof counters",
        "Advanced audience lookalike modeling based on highest-engagement subscriber profiles",
        "Seasonal content push around spring real estate market activity and investment opportunities",
        "AI search optimization — structured content for featured snippets on key investment queries",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "743", growth: "+312%", from: "from 180" },
      { label: "Top 10 Rankings", value: "89", growth: "+394%", from: "from 10" },
      { label: "Organic Traffic", value: "4,217/mo", growth: "+289%", from: "from 1,083" },
      { label: "Articles Published", value: "38", growth: "", from: "incl. 6 gated resources" },
    ],
    monthly: [
      { month: "Apr", keywords: 180, top10: 18, top3: 1, traffic: 1083, pages: 8, avgPos: 41.2, ctr: 1.4 },
      { month: "May", keywords: 206, top10: 20, top3: 2, traffic: 1341, pages: 14, avgPos: 37.8, ctr: 1.6 },
      { month: "Jun", keywords: 238, top10: 29, top3: 5, traffic: 1847, pages: 22, avgPos: 33.4, ctr: 1.9 },
      { month: "Jul", keywords: 367, top10: 43, top3: 8, traffic: 2513, pages: 28, avgPos: 29.7, ctr: 2.2 },
      { month: "Aug", keywords: 531, top10: 64, top3: 12, traffic: 3284, pages: 34, avgPos: 26.1, ctr: 2.5 },
      { month: "Sep", keywords: 743, top10: 89, top3: 17, traffic: 4217, pages: 38, avgPos: 23.3, ctr: 2.8 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$37.6K" },
      { label: "New Subscribers (Paid)", value: "5,847" },
      { label: "Avg Cost/Subscriber", value: "$6.43", note: "↓37% from $10.18" },
      { label: "Premium Conversions", value: "424" },
    ],
    columnLabels: {
      leads: "New Subscribers",
      cpl: "Cost/Subscriber",
      qualified: "Premium Conversions",
      cpql: "Cost/Conversion",
      deals: "Sponsors Secured",
      costPerDeal: "Cost/Sponsor",
    },
    monthly: [
      // Month 1 (Apr): Launch — building baseline, testing audiences, higher cost/sub expected
      { month: "Apr", spend: 5134, leads: 504, cpl: 10.19, qualified: 35, cpql: 146.69, deals: 0, revenue: 1840, roas: 0.36 },
      // Month 2 (May): Optimizing — spring market interest helps, costs starting to improve
      { month: "May", spend: 5647, leads: 623, cpl: 9.06, qualified: 43, cpql: 131.33, deals: 1, revenue: 3200, roas: 0.57 },
      // Month 3 (Jun): Strong momentum — summer investing content resonates, first sponsor deal
      { month: "Jun", spend: 6218, leads: 783, cpl: 7.94, qualified: 55, cpql: 113.05, deals: 1, revenue: 4750, roas: 0.76 },
      // Month 4 (Jul): Mid-summer — slight seasonal dip in real estate interest, maintain spend
      { month: "Jul", spend: 6483, leads: 891, cpl: 7.28, qualified: 67, cpql: 96.76, deals: 1, revenue: 6100, roas: 0.94 },
      // Month 5 (Aug): Back-to-school / fall market preview — strong acquisition period
      { month: "Aug", spend: 7012, leads: 1047, cpl: 6.70, qualified: 84, cpql: 83.48, deals: 2, revenue: 9400, roas: 1.34 },
      // Month 6 (Sep): Peak — fall market surge, list hits critical mass for sponsor demand
      { month: "Sep", spend: 7143, leads: 1999, cpl: 3.57, qualified: 140, cpql: 51.02, deals: 2, revenue: 12800, roas: 1.79 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Organic Subscribers", value: "3,093", growth: "+478%", note: "Month 1: 187" },
      { label: "Avg Monthly Signups (Last 3mo)", value: "714", growth: "", note: "vs. 253 first 3 months" },
      { label: "Content Conversion Rate", value: "6.3%", growth: "+72%", note: "from 3.7%" },
      { label: "Top Converting Content", value: "Investment Guides", growth: "", note: "8.1% conversion rate" },
    ],
    columnLabels: {
      formFills: "Blog Signups",
      calls: "Gated Content",
      totalLeads: "Total Organic Subs",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Apr", formFills: 112, calls: 75, totalLeads: 187, conversionRate: 3.7 },
      { month: "May", formFills: 154, calls: 103, totalLeads: 257, conversionRate: 3.9 },
      { month: "Jun", formFills: 187, calls: 129, totalLeads: 316, conversionRate: 4.3 },
      { month: "Jul", formFills: 271, calls: 184, totalLeads: 455, conversionRate: 4.8 },
      { month: "Aug", formFills: 389, calls: 248, totalLeads: 637, conversionRate: 5.6 },
      { month: "Sep", formFills: 524, calls: 317, totalLeads: 841, conversionRate: 6.3 },
    ],
    sources: [
      { source: "Organic Search", percentage: 58, leads: 1794 },
      { source: "Referral Program", percentage: 22, leads: 680 },
      { source: "Direct / Brand Search", percentage: 14, leads: 433 },
      { source: "Social / Other", percentage: 6, leads: 186 },
    ],
  },
  impact: [
    { label: "Total Subscribers", value: "11,340", growth: "+373%" },
    { label: "Paid Subscriber Cost", value: "$6.43", growth: "↓37%" },
    { label: "Monthly Newsletter Revenue", value: "$38.1K", growth: "+596%" },
    { label: "Premium Conversion Rate", value: "5.3%", growth: "+34%" },
    { label: "Sponsor Deals Secured", value: "7", growth: "" },
    { label: "Email Open Rate", value: "47.2%", growth: "+18%" },
  ],
};
