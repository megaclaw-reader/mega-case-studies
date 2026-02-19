import { CaseStudyData } from "./types";

export const mortgageLending: CaseStudyData = {
  slug: "mortgage-lending",
  industry: "Mortgage Lending",
  headline: "How a National Mortgage Lender Generated $750K in Attributed Revenue Through AI-Powered Marketing",
  subheadline: "MEGA helped a nationwide mortgage lending company transform their digital presence, driving 786 qualified loan applications and $750K in commission revenue within 12 months through SEO, paid advertising, and AI-driven optimization.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "347", unit: "%", label: "Return on Investment" },
    { value: "$750", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO Strategy", "Google & Meta Ads", "AI-Powered Optimization"],
  company: {
    industry: "Mortgage Lending",
    employees: "85",
    revenue: "$8.5M",
    location: "Nationwide (Licensed in 42 states)",
    description: "A mid-sized national mortgage lender specializing in conventional, FHA, and VA loans. Despite competitive rates and strong loan officers, they were losing market share to digital-first lenders. Their online presence was minimal, with outdated content, no SEO strategy, and inefficient paid campaigns bleeding budget on unqualified clicks.",
  },
  challenges: [
    {
      title: "Declining Market Share",
      description: "Digital-first lenders like Rocket Mortgage and Better.com were capturing online demand. The company's website ranked for fewer than 380 keywords, almost none in the top 10.",
    },
    {
      title: "High Cost Per Qualified Application",
      description: "Existing Google Ads campaigns had a blended CPA of $340 per lead, with only 18% qualifying for a loan — meaning the true cost per qualified application was over $1,800.",
    },
    {
      title: "No Scalable Inbound Pipeline",
      description: "90% of loan originations came from referral partners and cold calling. No organic search traffic, no content marketing, no retargeting — zero digital demand generation.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "1–3",
      title: "Foundation",
      items: [
        "Technical SEO audit & site architecture overhaul",
        'Programmatic city/state landing pages ("mortgage rates in [city]")',
        "Ad pixel setup & conversion tracking across all platforms",
        "First 60 blog posts (first-time buyer guides, VA loan explainers, refinance calculators)",
        "Branded search campaigns + competitor conquesting",
      ],
    },
    {
      phase: 2,
      months: "3–6",
      title: "Optimization",
      items: [
        "Content velocity increase targeting high-intent keywords",
        "A/B testing ad creative (rate-focused vs. lifestyle messaging)",
        "Audience segmentation by loan type (conventional, FHA, VA, refinance)",
        "Retargeting setup for pre-qualification abandoners",
      ],
    },
    {
      phase: 3,
      months: "5–9",
      title: "Integration",
      items: [
        "SEO content driving paid audience expansion",
        "CRM integration for closed-loop attribution (lead → application → funded loan)",
        "Lookalike audiences from funded loan customers",
        "Cross-channel attribution modeling",
      ],
    },
    {
      phase: 4,
      months: "9–12",
      title: "Scale",
      items: [
        "Budget increase on highest-performing markets",
        "Expansion into new state markets via programmatic pages",
        "Dynamic ad creative by loan type and geography",
        "Complex audience segmentation by credit profile intent signals",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "7,284", growth: "+1,817%", from: "from 380" },
      { label: "Top 10 Rankings", value: "1,642", growth: "+4,206%", from: "from 38" },
      { label: "Pages Created", value: "247", growth: "", from: "incl. 180 programmatic city pages" },
      { label: "Organic Traffic", value: "28,470/mo", growth: "+1,898%", from: "from 1,420" },
    ],
    monthly: [
      { month: "Jan", keywords: 412, top10: 42, top3: 6, traffic: 1580, pages: 38, avgPos: 42.1, ctr: 1.4 },
      { month: "Feb", keywords: 589, top10: 68, top3: 12, traffic: 2140, pages: 56, avgPos: 35.8, ctr: 1.7 },
      { month: "Mar", keywords: 924, top10: 128, top3: 24, traffic: 3420, pages: 82, avgPos: 28.4, ctr: 2.1 },
      { month: "Apr", keywords: 1487, top10: 224, top3: 48, traffic: 5680, pages: 108, avgPos: 23.1, ctr: 2.4 },
      { month: "May", keywords: 2186, top10: 356, top3: 82, traffic: 8940, pages: 132, avgPos: 20.2, ctr: 2.7 },
      { month: "Jun", keywords: 2891, top10: 478, top3: 124, traffic: 12360, pages: 155, avgPos: 18.4, ctr: 2.9 },
      { month: "Jul", keywords: 3524, top10: 612, top3: 168, traffic: 15870, pages: 172, avgPos: 16.8, ctr: 3.1 },
      { month: "Aug", keywords: 4218, top10: 764, top3: 218, traffic: 19240, pages: 189, avgPos: 15.3, ctr: 3.3 },
      { month: "Sep", keywords: 4847, top10: 892, top3: 264, traffic: 21680, pages: 205, avgPos: 14.6, ctr: 3.4 },
      { month: "Oct", keywords: 5412, top10: 1024, top3: 298, traffic: 23140, pages: 218, avgPos: 14.1, ctr: 3.5 },
      { month: "Nov", keywords: 6128, top10: 1286, top3: 324, traffic: 24890, pages: 232, avgPos: 13.4, ctr: 3.6 },
      { month: "Dec", keywords: 7284, top10: 1642, top3: 378, traffic: 28470, pages: 247, avgPos: 12.8, ctr: 3.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$197.4K" },
      { label: "Qualified Applications", value: "786" },
      { label: "Avg Cost Per Application", value: "$145", note: "↓57% from $340" },
      { label: "Funded Loans", value: "200" },
    ],
    monthly: [
      // Month 1: Taking over existing account — baseline performance, messy inherited campaigns
      { month: "Jan", spend: 13750, leads: 41, cpl: 335, qualified: 8, cpql: 1719, deals: 3, revenue: 16800, roas: 1.22 },
      // Month 2: Initial audit complete, paused worst campaigns, slight efficiency gain
      { month: "Feb", spend: 14200, leads: 47, cpl: 302, qualified: 12, cpql: 1183, deals: 4, revenue: 22400, roas: 1.58 },
      // Month 3: Spring buying season kicks in, new ad structure live, conversion tracking fixed
      { month: "Mar", spend: 15800, leads: 62, cpl: 255, qualified: 21, cpql: 752, deals: 7, revenue: 39200, roas: 2.48 },
      // Month 4: Peak spring — strong demand, campaigns hitting stride
      { month: "Apr", spend: 17350, leads: 78, cpl: 222, qualified: 31, cpql: 560, deals: 11, revenue: 61600, roas: 3.55 },
      // Month 5: Late spring, still strong but starting to plateau
      { month: "May", spend: 18100, leads: 86, cpl: 210, qualified: 36, cpql: 503, deals: 14, revenue: 78400, roas: 4.33 },
      // Month 6: Summer — mortgage demand cools, CPLs creep up slightly
      { month: "Jun", spend: 17650, leads: 79, cpl: 223, qualified: 32, cpql: 552, deals: 12, revenue: 67200, roas: 3.81 },
      // Month 7: Mid-summer dip, but retargeting audiences maturing
      { month: "Jul", spend: 16400, leads: 72, cpl: 228, qualified: 29, cpql: 566, deals: 11, revenue: 61600, roas: 3.76 },
      // Month 8: Budget increase test — more spend but efficiency dips as we push broader audiences
      { month: "Aug", spend: 19250, leads: 94, cpl: 205, qualified: 38, cpql: 507, deals: 15, revenue: 84000, roas: 4.36 },
      // Month 9: Fall uptick, lookalike audiences from funded loans performing well
      { month: "Sep", spend: 17900, leads: 88, cpl: 203, qualified: 40, cpql: 448, deals: 16, revenue: 89600, roas: 5.01 },
      // Month 10: Strong fall performance, CRM integration paying off
      { month: "Oct", spend: 16850, leads: 82, cpl: 205, qualified: 37, cpql: 455, deals: 15, revenue: 84000, roas: 4.99 },
      // Month 11: Pre-holiday softening, fewer buyers in market
      { month: "Nov", spend: 14950, leads: 68, cpl: 220, qualified: 26, cpql: 575, deals: 10, revenue: 56000, roas: 3.75 },
      // Month 12: Slight year-end recovery, optimized campaigns steady, solid close to the year
      { month: "Dec", spend: 16150, leads: 81, cpl: 199, qualified: 36, cpql: 449, deals: 16, revenue: 89600, roas: 5.55 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$750K", growth: "+347%" },
    { label: "Total Pipeline", value: "$2.3M", growth: "+298%" },
    { label: "Avg Revenue Per Funded Loan", value: "$5,600", growth: "" },
    { label: "Blended ROAS", value: "3.82x", growth: "" },
  ],
};
