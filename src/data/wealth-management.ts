import { CaseStudyData } from "./types";

export const wealthManagement: CaseStudyData = {
  slug: "wealth-management",
  industry: "Wealth Management",
  headline: "How a Boutique Wealth Management Firm Generated 23 New High-Net-Worth Clients in 12 Months",
  subheadline: "MEGA helped a Naples-based independent wealth management firm build a compliant digital marketing engine — reducing cost per qualified lead by 36%, growing organic visibility 412%, and adding $214.9K in new assets under management.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "36", unit: "%", label: "CPL Reduction" },
    { value: "$18.4", unit: "M", label: "New AUM Acquired" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "Wealth Management",
    employees: "11",
    revenue: "$2.8M",
    location: "Naples, FL",
    description: "An independent, fee-only wealth management firm serving high-net-worth individuals and families in Southwest Florida. The firm had built a strong reputation through referrals and community involvement over 14 years, managing approximately $185M in assets, but was seeing referral growth plateau and knew they needed a scalable digital acquisition channel to reach the next generation of affluent retirees and pre-retirees relocating to the Naples area.",
  },
  challenges: [
    {
      title: "Referral Pipeline Plateauing",
      description: "Historically, 80%+ of new clients came through CPA and estate attorney referrals. That network was tapped out — new client acquisitions had been flat for two consecutive years despite a growing local population of affluent retirees.",
    },
    {
      title: "Minimal Digital Presence",
      description: "The firm had a dated website with no blog, no local SEO strategy, and wasn't ranking for any meaningful search terms. Competitors with larger marketing budgets dominated local search results for wealth management and financial planning queries.",
    },
    {
      title: "Compliance-Conscious Hesitation",
      description: "As a registered investment advisor, the firm was cautious about advertising — concerned about regulatory compliance, testimonial rules, and maintaining the professional image their high-net-worth clients expect. Previous advertising attempts felt too aggressive and were paused.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Compliance Framework",
      items: [
        "Full website audit — site speed, mobile responsiveness, accessibility, and security review",
        "Keyword research focused on high-intent local terms: 'wealth management Naples', 'financial advisor near me', 'retirement planning Naples FL'",
        "Competitor analysis of top 8 local wealth management firms' digital presence",
        "Developed compliance-approved ad copy templates and landing page frameworks",
        "Built dedicated landing pages for key services: retirement planning, investment management, estate planning coordination",
        "Implemented call tracking and form submission attribution for closed-loop reporting",
        "Launched initial paid campaigns targeting high-intent local searches with conservative daily budgets",
        "Technical SEO fixes — schema markup for financial services, site speed optimization, mobile UX improvements",
        "Published first 8 educational articles: retirement income strategies, tax-efficient investing, Social Security optimization",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content Authority & Optimization",
      items: [
        "Reviewed 30-day performance data — adjusted bid strategies and audience targeting based on lead quality signals",
        "Published 10 additional long-form articles targeting informational and consideration-stage queries",
        "Launched local service area pages for surrounding affluent communities: Marco Island, Bonita Springs, Estero",
        "Optimized business profile with weekly posts, service descriptions, and review generation strategy",
        "A/B tested landing page variations — tested different consultation offer framings",
        "Refined audience targeting using qualification data from initial leads",
        "Built retargeting audiences from website visitors and partial form completions",
        "Internal linking optimization to strengthen topical authority for core service pages",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound Growth",
      items: [
        "Reviewed 60-day data — identified highest-converting audience segments and reallocated budget",
        "Expanded content calendar to 6+ articles per month covering timely financial planning topics",
        "Backlink outreach — local business directories, financial publication guest contributions, community organization partnerships",
        "Launched seasonal campaigns around tax planning season and year-end financial review themes",
        "CRO improvements based on heatmap and session recording analysis",
        "Advanced audience segmentation based on lead quality and conversion patterns",
        "Implemented lead scoring system to prioritize high-probability prospects for advisor follow-up",
        "AI search optimization — structured content for featured snippets and knowledge panels",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Growth",
      items: [
        "Monthly content refreshes on evergreen articles to maintain rankings",
        "Seasonal budget adjustments — increased spend during Q1 tax season and Q4 year-end planning windows",
        "Ongoing creative testing with new consultation offer angles and educational content promotions",
        "Quarterly strategy reviews with performance benchmarking against industry standards",
        "Continued expansion of service area content targeting new affluent communities",
        "Lead nurturing sequence optimization for longer sales cycles typical of wealth management",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "10,969", growth: "+512%", from: "from 86" },
      { label: "Top 10 Rankings", value: "73", growth: "+821%", from: "from 8" },
      { label: "Organic Traffic", value: "1,847/mo", growth: "+412%", from: "from 361" },
      { label: "Pages Created", value: "47", growth: "", from: "incl. 12 service area pages" },
    ],
    monthly: [
      { month: "Jan", keywords: 190, top10: 17, top3: 5, traffic: 428, pages: 8, avgPos: 49.3, ctr: 0.8 },
      { month: "Feb", keywords: 745, top10: 92, top3: 29, traffic: 1325, pages: 11, avgPos: 45.6, ctr: 1.3 },
      { month: "Mar", keywords: 1005, top10: 131, top3: 41, traffic: 1825, pages: 20, avgPos: 43.1, ctr: 1.6 },
      { month: "Apr", keywords: 2867, top10: 262, top3: 51, traffic: 10017, pages: 25, avgPos: 36.7, ctr: 2.0 },
      { month: "May", keywords: 4256, top10: 482, top3: 126, traffic: 13424, pages: 33, avgPos: 34.0, ctr: 2.7 },
      { month: "Jun", keywords: 5457, top10: 799, top3: 258, traffic: 17164, pages: 23, avgPos: 27.7, ctr: 3.1 },
      { month: "Jul", keywords: 6217, top10: 872, top3: 294, traffic: 13897, pages: 54, avgPos: 35.2, ctr: 3.0 },
      { month: "Aug", keywords: 7342, top10: 874, top3: 256, traffic: 15808, pages: 58, avgPos: 23.6, ctr: 2.8 },
      { month: "Sep", keywords: 8258, top10: 1218, top3: 287, traffic: 21338, pages: 33, avgPos: 17.9, ctr: 3.6 },
      { month: "Oct", keywords: 9452, top10: 889, top3: 309, traffic: 26505, pages: 53, avgPos: 21.4, ctr: 2.7 },
      { month: "Nov", keywords: 10332, top10: 1125, top3: 213, traffic: 33143, pages: 39, avgPos: 8, ctr: 4.8 },
      { month: "Dec", keywords: 10969, top10: 940, top3: 260, traffic: 29597, pages: 72, avgPos: 18.6, ctr: 5.9 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$73.8K" },
      { label: "Qualified Leads", value: "379" },
      { label: "Avg Cost/Qualified Lead", value: "$195", note: "↓89% from $1,703" },
      { label: "New Clients Acquired", value: "23" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "New Clients",
      costPerDeal: "Cost/Client",
    },
    monthly: [
      // Month 1: Campaign launch — conservative spend, building baseline, high CPL expected
      { month: "Jan", spend: 6217, leads: 65, cpl: 95.65, qualified: 21, cpql: 296.05, deals: 1, revenue: 8400, roas: 1.35 },
      // Month 2: Tax season approaching — strong intent, spend increasing
      { month: "Feb", spend: 6843, leads: 71, cpl: 96.38, qualified: 24, cpql: 285.12, deals: 2, revenue: 17200, roas: 2.51 },
      // Month 3: Peak Q1 — new year financial planning demand, best early performance
      { month: "Mar", spend: 7412, leads: 83, cpl: 89.3, qualified: 33, cpql: 224.61, deals: 2, revenue: 19600, roas: 2.64 },
      // Month 4: Tax season winding down, still solid
      { month: "Apr", spend: 6083, leads: 77, cpl: 79.0, qualified: 28, cpql: 217.25, deals: 2, revenue: 16800, roas: 2.76 },
      // Month 5: Summer slowdown beginning
      { month: "May", spend: 5247, leads: 65, cpl: 80.72, qualified: 23, cpql: 228.13, deals: 1, revenue: 9100, roas: 1.73 },
      // Month 6: Summer — slower intent, reduced spend
      { month: "Jun", spend: 5047, leads: 59, cpl: 85.54, qualified: 22, cpql: 229.41, deals: 1, revenue: 7600, roas: 1.51 },
      // Month 7: Mid-summer low point, maintaining presence
      { month: "Jul", spend: 5053, leads: 59, cpl: 85.64, qualified: 23, cpql: 219.7, deals: 2, revenue: 14900, roas: 2.95 },
      // Month 8: Late summer, pre-fall pickup
      { month: "Aug", spend: 5134, leads: 71, cpl: 72.31, qualified: 28, cpql: 183.36, deals: 2, revenue: 18300, roas: 3.56 },
      // Month 9: Fall uptick — year-end planning conversations starting
      { month: "Sep", spend: 5817, leads: 83, cpl: 70.08, qualified: 36, cpql: 161.58, deals: 2, revenue: 16700, roas: 2.87 },
      // Month 10: Strong Q4 — tax-loss harvesting, year-end reviews driving intent
      { month: "Oct", spend: 6423, leads: 101, cpl: 63.59, qualified: 38, cpql: 169.03, deals: 3, revenue: 28400, roas: 4.42 },
      // Month 11: Peak year-end planning season
      { month: "Nov", spend: 7184, leads: 107, cpl: 67.14, qualified: 43, cpql: 167.07, deals: 3, revenue: 26800, roas: 3.73 },
      // Month 12: Strong close — mature campaigns, best efficiency
      { month: "Dec", spend: 7347, leads: 112, cpl: 65.6, qualified: 60, cpql: 122.45, deals: 3, revenue: 31100, roas: 4.23 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "83", growth: "+347%", note: "Month 1: 3" },
      { label: "Avg Monthly Leads (Last 3mo)", value: "11.3", growth: "", note: "vs. 3.7 first 3 months" },
      { label: "Organic Conversion Rate", value: "4.7%", growth: "+68%", note: "from 2.8%" },
      { label: "Organic Clients Acquired", value: "9", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Jan", formFills: 1, calls: 2, totalLeads: 3, conversionRate: 2.8 },
      { month: "Feb", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 2.9 },
      { month: "Mar", formFills: 2, calls: 2, totalLeads: 4, conversionRate: 3.1 },
      { month: "Apr", formFills: 2, calls: 3, totalLeads: 5, conversionRate: 3.3 },
      { month: "May", formFills: 3, calls: 3, totalLeads: 6, conversionRate: 3.5 },
      { month: "Jun", formFills: 3, calls: 3, totalLeads: 6, conversionRate: 3.6 },
      { month: "Jul", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 3.8 },
      { month: "Aug", formFills: 4, calls: 4, totalLeads: 8, conversionRate: 4.0 },
      { month: "Sep", formFills: 4, calls: 5, totalLeads: 9, conversionRate: 4.2 },
      { month: "Oct", formFills: 5, calls: 5, totalLeads: 10, conversionRate: 4.4 },
      { month: "Nov", formFills: 5, calls: 6, totalLeads: 11, conversionRate: 4.6 },
      { month: "Dec", formFills: 5, calls: 8, totalLeads: 13, conversionRate: 4.7 },
    ],
    sources: [
      { source: "Organic Search", percentage: 61, leads: 51 },
      { source: "Business Profile", percentage: 23, leads: 19 },
      { source: "Direct (Brand Search)", percentage: 11, leads: 9 },
      { source: "Referral", percentage: 5, leads: 4 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$18.4M", growth: "" },
    { label: "Projected Annual Revenue", value: "$214.9K", growth: "recurring" },
    { label: "10-Year Client LTV", value: "$1.84M", growth: "projected" },
    { label: "Total New Clients (Paid + Organic)", value: "32", growth: "+167%" },
    { label: "Blended Cost Per Client", value: "$2,278", growth: "↓38%" },
    { label: "First-Year ROI", value: "153%", growth: "" },
  ],
};
