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
      { label: "Total Keywords", value: "2,814", growth: "+638%", from: "from 381" },
      { label: "Top 10 Rankings", value: "397", growth: "+944%", from: "from 38" },
      { label: "Pages Created", value: "187", growth: "", from: "incl. 139 programmatic city pages" },
      { label: "Organic Traffic", value: "10,847/mo", growth: "+671%", from: "from 1,409" },
    ],
    monthly: [
      // Month 1: Inherited site, technical audit underway, minimal content changes yet
      { month: "Jan", keywords: 381, top10: 38, top3: 6, traffic: 1409, pages: 37, avgPos: 41.7, ctr: 1.3 },
      // Month 2: Technical fixes live (crawlability, site speed, schema), first batch of city pages published
      { month: "Feb", keywords: 453, top10: 49, top3: 8, traffic: 1637, pages: 54, avgPos: 39.1, ctr: 1.4 },
      // Month 3: Blog content ramping, programmatic pages indexing, spring search demand rising
      { month: "Mar", keywords: 612, top10: 74, top3: 13, traffic: 2283, pages: 83, avgPos: 34.8, ctr: 1.6 },
      // Month 4: Strong indexing month, city pages gaining traction on long-tail terms
      { month: "Apr", keywords: 871, top10: 109, top3: 19, traffic: 3364, pages: 108, avgPos: 30.4, ctr: 1.8 },
      // Month 5: Content velocity peak, but competitive head terms still tough — ranking page 2-3
      { month: "May", keywords: 1143, top10: 152, top3: 26, traffic: 4591, pages: 131, avgPos: 28.2, ctr: 1.9 },
      // Month 6: Slight plateau — Google algo update shakes some rankings, a few city pages drop
      { month: "Jun", keywords: 1207, top10: 148, top3: 24, traffic: 4417, pages: 146, avgPos: 28.9, ctr: 1.8 },
      // Month 7: Recovery from algo update, internal linking improvements starting to compound
      { month: "Jul", keywords: 1394, top10: 179, top3: 29, traffic: 5183, pages: 153, avgPos: 27.1, ctr: 2.0 },
      // Month 8: Summer dip in mortgage search volume, rankings stable but traffic flat
      { month: "Aug", keywords: 1586, top10: 201, top3: 32, traffic: 5294, pages: 161, avgPos: 26.3, ctr: 2.0 },
      // Month 9: Fall recovery, backlink outreach paying off, some city pages breaking into top 10
      { month: "Sep", keywords: 1853, top10: 247, top3: 37, traffic: 6618, pages: 169, avgPos: 24.6, ctr: 2.2 },
      // Month 10: Strong month — domain authority gains compounding, blog posts aging in
      { month: "Oct", keywords: 2147, top10: 302, top3: 42, traffic: 8139, pages: 176, avgPos: 23.1, ctr: 2.3 },
      // Month 11: Pre-holiday search dip, but ranking positions holding or improving
      { month: "Nov", keywords: 2461, top10: 347, top3: 46, traffic: 9023, pages: 182, avgPos: 22.2, ctr: 2.4 },
      // Month 12: Solid close to the year — steady growth, no dramatic spikes
      { month: "Dec", keywords: 2814, top10: 397, top3: 52, traffic: 10847, pages: 187, avgPos: 20.8, ctr: 2.6 },
    ],
  },
  paidAds: {
    // Total spend: 12433+13891+14762+16417+17583+15924+14308+17241+16879+15546+13217+15439 = $183,640
    // Total qualified: 19+22+26+33+35+29+27+33+34+33+23+32 = 346
    // Avg CPQL: $183,640 / 346 = $531
    // Total deals: 7+8+10+13+14+11+10+13+14+13+9+13 = 135
    // Total revenue: 38917+46283+57641+74819+81463+63142+55734+73891+80217+75463+49826+74391 = $771,787
    summary: [
      { label: "Total Ad Spend", value: "$183.6K" },
      { label: "Qualified Applications", value: "346" },
      { label: "Avg Cost Per Qualified App", value: "$531", note: "↓22% from $680" },
      { label: "Funded Loans", value: "135" },
    ],
    monthly: [
      // Month 1: Inherited account — decent baseline, running but not optimized
      { month: "Jan", spend: 12433, leads: 53, cpl: 235, qualified: 19, cpql: 654, deals: 7, revenue: 38917, roas: 3.13 },
      // Month 2: Audit complete, restructured campaigns, paused low-intent keywords
      { month: "Feb", spend: 13891, leads: 57, cpl: 244, qualified: 22, cpql: 631, deals: 8, revenue: 46283, roas: 3.33 },
      // Month 3: Spring demand rising, new ad copy and landing pages live
      { month: "Mar", spend: 14762, leads: 64, cpl: 231, qualified: 26, cpql: 568, deals: 10, revenue: 57641, roas: 3.90 },
      // Month 4: Peak spring — strong conversion rates, audience segmentation paying off
      { month: "Apr", spend: 16417, leads: 73, cpl: 225, qualified: 33, cpql: 497, deals: 13, revenue: 74819, roas: 4.56 },
      // Month 5: Late spring, volume strong but starting to saturate best audiences
      { month: "May", spend: 17583, leads: 79, cpl: 223, qualified: 35, cpql: 502, deals: 14, revenue: 81463, roas: 4.63 },
      // Month 6: Summer — mortgage demand cools, CPLs creep up
      { month: "Jun", spend: 15924, leads: 69, cpl: 231, qualified: 29, cpql: 549, deals: 11, revenue: 63142, roas: 3.97 },
      // Month 7: Mid-summer dip, retargeting audiences maturing but new volume slower
      { month: "Jul", spend: 14308, leads: 63, cpl: 227, qualified: 27, cpql: 530, deals: 10, revenue: 55734, roas: 3.90 },
      // Month 8: Budget increase test — broader audiences, some efficiency loss expected
      { month: "Aug", spend: 17241, leads: 76, cpl: 227, qualified: 33, cpql: 522, deals: 13, revenue: 73891, roas: 4.29 },
      // Month 9: Fall uptick, lookalike audiences from funded loans performing well
      { month: "Sep", spend: 16879, leads: 74, cpl: 228, qualified: 34, cpql: 496, deals: 14, revenue: 80217, roas: 4.75 },
      // Month 10: Solid fall performance, CRM closed-loop data improving targeting
      { month: "Oct", spend: 15546, leads: 71, cpl: 219, qualified: 33, cpql: 471, deals: 13, revenue: 75463, roas: 4.85 },
      // Month 11: Pre-holiday softening, fewer active buyers
      { month: "Nov", spend: 13217, leads: 58, cpl: 228, qualified: 23, cpql: 575, deals: 9, revenue: 49826, roas: 3.77 },
      // Month 12: Solid close — steady performance, no dramatic spikes
      { month: "Dec", spend: 15439, leads: 69, cpl: 224, qualified: 32, cpql: 482, deals: 13, revenue: 74391, roas: 4.82 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$771.8K", growth: "+82%" },
    { label: "Total Pipeline", value: "$1.68M", growth: "+69%" },
    { label: "Avg Revenue Per Funded Loan", value: "$5,717", growth: "" },
    { label: "Blended ROAS", value: "4.20x", growth: "" },
  ],
};
