import { CaseStudyData } from "./types";

export const mortgageLending: CaseStudyData = {
  slug: "mortgage-lending",
  industry: "Mortgage Lending",
  headline: "How a National Mortgage Lender Generated $1.2M in Attributed Revenue Through AI-Powered Marketing",
  subheadline: "MEGA helped a nationwide mortgage lending company transform their digital presence, driving 847 qualified loan applications and $1.2M in commission revenue within 12 months through SEO, paid advertising, and AI-driven optimization.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "487", unit: "%", label: "Return on Investment" },
    { value: "$1.2", unit: "M", label: "Revenue Attributed" },
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
      { label: "Total Ad Spend", value: "$204K" },
      { label: "Qualified Applications", value: "847" },
      { label: "Avg Cost Per Application", value: "$128", note: "↓62% from $340" },
      { label: "Funded Loans", value: "214" },
    ],
    monthly: [
      { month: "Jan", spend: 14000, leads: 48, cpl: 292, qualified: 11, cpql: 1273, deals: 0, revenue: 0, roas: 0 },
      { month: "Feb", spend: 15000, leads: 56, cpl: 268, qualified: 14, cpql: 1071, deals: 2, revenue: 12400, roas: 0.83 },
      { month: "Mar", spend: 16000, leads: 68, cpl: 235, qualified: 19, cpql: 842, deals: 4, revenue: 26800, roas: 1.68 },
      { month: "Apr", spend: 17500, leads: 82, cpl: 213, qualified: 28, cpql: 625, deals: 8, revenue: 54200, roas: 3.10 },
      { month: "May", spend: 18500, leads: 96, cpl: 193, qualified: 36, cpql: 514, deals: 14, revenue: 95800, roas: 5.18 },
      { month: "Jun", spend: 19000, leads: 108, cpl: 176, qualified: 42, cpql: 452, deals: 18, revenue: 122400, roas: 6.44 },
      { month: "Jul", spend: 18000, leads: 98, cpl: 184, qualified: 38, cpql: 474, deals: 16, revenue: 108800, roas: 6.04 },
      { month: "Aug", spend: 17500, leads: 92, cpl: 190, qualified: 35, cpql: 500, deals: 14, revenue: 95200, roas: 5.44 },
      { month: "Sep", spend: 16500, leads: 84, cpl: 196, qualified: 30, cpql: 550, deals: 12, revenue: 81600, roas: 4.95 },
      { month: "Oct", spend: 17000, leads: 88, cpl: 193, qualified: 32, cpql: 531, deals: 13, revenue: 88400, roas: 5.20 },
      { month: "Nov", spend: 17500, leads: 94, cpl: 186, qualified: 34, cpql: 515, deals: 15, revenue: 102000, roas: 5.83 },
      { month: "Dec", spend: 19000, leads: 112, cpl: 170, qualified: 42, cpql: 452, deals: 22, revenue: 149600, roas: 7.87 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1.2M", growth: "+487%" },
    { label: "Total Pipeline", value: "$3.8M", growth: "+412%" },
    { label: "Avg Revenue Per Funded Loan", value: "$5,607", growth: "" },
    { label: "Blended ROAS", value: "5.88x", growth: "" },
  ],
};
