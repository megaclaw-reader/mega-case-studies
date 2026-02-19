import { CaseStudyData } from "./types";

export const mortgageLending: CaseStudyData = {
  slug: "mortgage-lending",
  industry: "Mortgage Lending",
  headline: "How a National Mortgage Lender Grew Revenue 84% With AI-Powered Marketing",
  subheadline: "MEGA helped a nationwide mortgage lending company optimize their digital marketing, improving ad efficiency by 35%, growing organic traffic 691%, and generating $823K in attributed revenue within 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "84", unit: "%", label: "Revenue Growth" },
    { value: "$823", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Mortgage Lending",
    employees: "85",
    revenue: "$8.5M",
    location: "Nationwide (Licensed in 42 states)",
    description: "A mid-sized national mortgage lender specializing in conventional, FHA, and VA loans. The company had a solid reputation and steady referral business, but their digital marketing wasn't keeping pace with their growth ambitions. They were running ads and had a basic website, but knew they were leaving opportunity on the table.",
  },
  challenges: [
    {
      title: "Stalling Digital Growth",
      description: "The company had a functional website and some SEO presence (~380 keywords), but hadn't invested in content strategy or programmatic pages. Organic traffic was flat and not contributing meaningfully to lead generation.",
    },
    {
      title: "Inefficient Ad Spend",
      description: "Their ad campaigns were generating leads at a blended CPA of $245, but qualification rates were around 28% — putting the effective cost per qualified application around $680. Decent, but with room for significant improvement.",
    },
    {
      title: "Over-Reliance on Referrals",
      description: "About 70% of loan originations came through referral partners and loan officer networks. The company wanted to diversify with a stronger inbound digital pipeline to reduce dependency on a single channel.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed",
        "Google Search Console & Google Business Profile setup and optimization",
        "Competitor research and keyword research across all loan types",
        "Generated 20+ initial articles (first-time buyer guides, VA loan explainers, refinance calculators)",
        "Content audit and metadata fixes across existing pages",
        "Technical fixes — image SEO, canonical issues, E-E-A-T best practices",
        "Full audit of past ad performance and re-instrumented site with proper pixel implementation",
        "CRM integration for closed-loop lead tracking",
        "Comprehensive ad strategy built around cost per qualified lead, not just volume",
        "Reduced spend inefficiencies and launched first round of creative and landing page A/B tests",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted strategy",
        "Generated 20+ additional articles and began updating 5+ existing articles per day",
        "Launched programmatic city/state landing pages ('mortgage rates in [city]')",
        "Optimized internal linking structure to strengthen topical authority",
        "Weekly Google Business Profile posts for local visibility",
        "Added structured data schema across key pages",
        "Rapid iterations of ad creative testing across multiple channels",
        "Retargeting and remarketing layer optimization for pre-qualification abandoners",
        "Keyword and negative keyword refinement based on qualification data",
        "Landing page refinement and further A/B testing",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and rolled out programmatic pages to additional markets",
        "Continued 5+ article updates per day, refreshed underperforming older content",
        "Backlink campaigns — organic link building, guest posting, local citation building",
        "CRO review and keyword cannibalization cleanup",
        "Advanced schema markup by page type",
        "AI search crawlability improvements (LLM placement optimization)",
        "Continuation of rapid creative iterations with complex audience segmentations",
        "Multi-approach bidding strategies based on campaign maturity",
        "Lookalike audiences built from funded loan customer data",
        "Fully robust lead scoring and lead quality solutions via CRM closed-loop data",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on performance — shifted spend to highest-performing markets",
        "Expansion into new state markets via additional programmatic pages",
        "Dynamic ad creative by loan type and geography",
        "Audience pruning — removed low-performing segments, tested new ones",
        "Bid strategy tuning based on campaign stage and performance data",
        "Weekly reporting with channel comparison and actionable recommendations",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "2,847", growth: "+649%", from: "from 380" },
      { label: "Top 10 Rankings", value: "412", growth: "+984%", from: "from 38" },
      { label: "Pages Created", value: "189", growth: "", from: "incl. 142 programmatic city pages" },
      { label: "Organic Traffic", value: "11,240/mo", growth: "+691%", from: "from 1,420" },
    ],
    monthly: [
      // Month 1: Inherited site, technical audit underway, minimal content changes yet
      { month: "Jan", keywords: 397, top10: 40, top3: 7, traffic: 1510, pages: 39, avgPos: 41.3, ctr: 1.4 },
      // Month 2: Technical fixes live (crawlability, site speed, schema), first batch of city pages published
      { month: "Feb", keywords: 468, top10: 52, top3: 9, traffic: 1780, pages: 58, avgPos: 38.6, ctr: 1.5 },
      // Month 3: Blog content ramping, programmatic pages indexing, spring search demand rising
      { month: "Mar", keywords: 624, top10: 78, top3: 14, traffic: 2340, pages: 86, avgPos: 34.2, ctr: 1.7 },
      // Month 4: Strong indexing month, city pages gaining traction on long-tail terms
      { month: "Apr", keywords: 892, top10: 118, top3: 21, traffic: 3480, pages: 112, avgPos: 30.1, ctr: 1.9 },
      // Month 5: Content velocity peak, but competitive head terms still tough — ranking page 2-3
      { month: "May", keywords: 1184, top10: 162, top3: 28, traffic: 4720, pages: 134, avgPos: 27.8, ctr: 2.0 },
      // Month 6: Slight plateau — Google algo update shakes some rankings, a few city pages drop
      { month: "Jun", keywords: 1248, top10: 156, top3: 26, traffic: 4580, pages: 148, avgPos: 28.4, ctr: 1.9 },
      // Month 7: Recovery from algo update, internal linking improvements starting to compound
      { month: "Jul", keywords: 1426, top10: 184, top3: 31, traffic: 5340, pages: 156, avgPos: 26.9, ctr: 2.1 },
      // Month 8: Summer dip in mortgage search volume, rankings stable but traffic flat
      { month: "Aug", keywords: 1618, top10: 208, top3: 34, traffic: 5480, pages: 164, avgPos: 25.7, ctr: 2.1 },
      // Month 9: Fall recovery, backlink outreach paying off, some city pages breaking into top 10
      { month: "Sep", keywords: 1892, top10: 258, top3: 39, traffic: 6840, pages: 172, avgPos: 24.1, ctr: 2.3 },
      // Month 10: Strong month — domain authority gains compounding, blog posts aging in
      { month: "Oct", keywords: 2184, top10: 312, top3: 44, traffic: 8420, pages: 178, avgPos: 22.6, ctr: 2.4 },
      // Month 11: Pre-holiday search dip, but ranking positions holding or improving
      { month: "Nov", keywords: 2490, top10: 358, top3: 48, traffic: 9180, pages: 184, avgPos: 21.8, ctr: 2.5 },
      // Month 12: Solid close to the year — steady growth, no dramatic spikes
      { month: "Dec", keywords: 2847, top10: 412, top3: 54, traffic: 11240, pages: 189, avgPos: 20.4, ctr: 2.7 },
    ],
  },
  paidAds: {
    // Correct math from monthly data:
    // Total spend: 14250+14800+15600+17350+18100+17250+15900+18750+17400+16650+14550+16200 = $196,800
    // Total qualified: 21+23+27+34+36+30+28+34+35+34+24+33 = 359
    // Avg CPQL: $196,800 / 359 = $548
    // Total deals: 8+9+11+14+15+12+11+14+15+14+10+14 = 147
    // Total revenue: 44800+50400+61600+78400+84000+67200+61600+78400+84000+78400+56000+78400 = $823,200
    summary: [
      { label: "Total Ad Spend", value: "$196.8K" },
      { label: "Qualified Applications", value: "359" },
      { label: "Avg Cost Per Qualified App", value: "$548", note: "↓19% from $680" },
      { label: "Funded Loans", value: "147" },
    ],
    monthly: [
      // Month 1: Inherited account — decent baseline, running but not optimized
      { month: "Jan", spend: 14250, leads: 58, cpl: 246, qualified: 21, cpql: 679, deals: 8, revenue: 44800, roas: 3.14 },
      // Month 2: Audit complete, restructured campaigns, paused low-intent keywords
      { month: "Feb", spend: 14800, leads: 61, cpl: 243, qualified: 23, cpql: 643, deals: 9, revenue: 50400, roas: 3.41 },
      // Month 3: Spring demand rising, new ad copy and landing pages live
      { month: "Mar", spend: 15600, leads: 68, cpl: 229, qualified: 27, cpql: 578, deals: 11, revenue: 61600, roas: 3.95 },
      // Month 4: Peak spring — strong conversion rates, audience segmentation paying off
      { month: "Apr", spend: 17350, leads: 78, cpl: 222, qualified: 34, cpql: 510, deals: 14, revenue: 78400, roas: 4.52 },
      // Month 5: Late spring, volume strong but starting to saturate best audiences
      { month: "May", spend: 18100, leads: 82, cpl: 221, qualified: 36, cpql: 503, deals: 15, revenue: 84000, roas: 4.64 },
      // Month 6: Summer — mortgage demand cools, CPLs creep up
      { month: "Jun", spend: 17250, leads: 74, cpl: 233, qualified: 30, cpql: 575, deals: 12, revenue: 67200, roas: 3.90 },
      // Month 7: Mid-summer dip, retargeting audiences maturing but new volume slower
      { month: "Jul", spend: 15900, leads: 68, cpl: 234, qualified: 28, cpql: 568, deals: 11, revenue: 61600, roas: 3.87 },
      // Month 8: Budget increase test — broader audiences, some efficiency loss expected
      { month: "Aug", spend: 18750, leads: 82, cpl: 229, qualified: 34, cpql: 551, deals: 14, revenue: 78400, roas: 4.18 },
      // Month 9: Fall uptick, lookalike audiences from funded loans performing well
      { month: "Sep", spend: 17400, leads: 79, cpl: 220, qualified: 35, cpql: 497, deals: 15, revenue: 84000, roas: 4.83 },
      // Month 10: Solid fall performance, CRM closed-loop data improving targeting
      { month: "Oct", spend: 16650, leads: 76, cpl: 219, qualified: 34, cpql: 490, deals: 14, revenue: 78400, roas: 4.71 },
      // Month 11: Pre-holiday softening, fewer active buyers
      { month: "Nov", spend: 14550, leads: 62, cpl: 235, qualified: 24, cpql: 606, deals: 10, revenue: 56000, roas: 3.85 },
      // Month 12: Solid close — steady performance, no dramatic spikes
      { month: "Dec", spend: 16200, leads: 74, cpl: 219, qualified: 33, cpql: 491, deals: 14, revenue: 78400, roas: 4.84 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$823K", growth: "+84%" },
    { label: "Total Pipeline", value: "$1.8M", growth: "+72%" },
    { label: "Avg Revenue Per Funded Loan", value: "$5,600", growth: "" },
    { label: "Blended ROAS", value: "4.18x", growth: "" },
  ],
};
