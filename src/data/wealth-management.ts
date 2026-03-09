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
      { label: "Total Keywords", value: "527", growth: "+512%", from: "from 86" },
      { label: "Top 10 Rankings", value: "73", growth: "+821%", from: "from 8" },
      { label: "Organic Traffic", value: "1,847/mo", growth: "+412%", from: "from 361" },
      { label: "Pages Created", value: "47", growth: "", from: "incl. 12 service area pages" },
    ],
    monthly: [
      { month: "Jan", keywords: 86, top10: 8, top3: 1, traffic: 361, pages: 14, avgPos: 38.4, ctr: 1.6 },
      { month: "Feb", keywords: 104, top10: 11, top3: 2, traffic: 412, pages: 19, avgPos: 36.1, ctr: 1.7 },
      { month: "Mar", keywords: 137, top10: 16, top3: 3, traffic: 523, pages: 24, avgPos: 33.7, ctr: 1.8 },
      { month: "Apr", keywords: 178, top10: 22, top3: 4, traffic: 647, pages: 28, avgPos: 31.2, ctr: 1.9 },
      { month: "May", keywords: 219, top10: 28, top3: 6, traffic: 791, pages: 31, avgPos: 29.4, ctr: 2.0 },
      { month: "Jun", keywords: 253, top10: 33, top3: 7, traffic: 863, pages: 34, avgPos: 28.1, ctr: 2.1 },
      { month: "Jul", keywords: 291, top10: 38, top3: 9, traffic: 941, pages: 36, avgPos: 27.3, ctr: 2.1 },
      { month: "Aug", keywords: 334, top10: 44, top3: 11, traffic: 1073, pages: 38, avgPos: 26.0, ctr: 2.2 },
      { month: "Sep", keywords: 372, top10: 51, top3: 13, traffic: 1198, pages: 40, avgPos: 25.1, ctr: 2.3 },
      { month: "Oct", keywords: 421, top10: 58, top3: 15, traffic: 1384, pages: 43, avgPos: 24.2, ctr: 2.4 },
      { month: "Nov", keywords: 478, top10: 66, top3: 17, traffic: 1621, pages: 45, avgPos: 23.1, ctr: 2.5 },
      { month: "Dec", keywords: 527, top10: 73, top3: 19, traffic: 1847, pages: 47, avgPos: 22.3, ctr: 2.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$73.8K" },
      { label: "Qualified Leads", value: "67" },
      { label: "Avg Cost/Qualified Lead", value: "$1,102", note: "↓35% from $1,703" },
      { label: "New Clients Acquired", value: "23" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "New Clients",
    },
    monthly: [
      // Month 1: Campaign launch — conservative spend, building baseline, high CPL expected
      { month: "Jan", spend: 6217, leads: 11, cpl: 565, qualified: 4, cpql: 1554, deals: 1, revenue: 8400, roas: 1.35 },
      // Month 2: Tax season approaching — strong intent, spend increasing
      { month: "Feb", spend: 6843, leads: 12, cpl: 570, qualified: 4, cpql: 1711, deals: 2, revenue: 17200, roas: 2.51 },
      // Month 3: Peak Q1 — new year financial planning demand, best early performance
      { month: "Mar", spend: 7412, leads: 14, cpl: 529, qualified: 6, cpql: 1235, deals: 2, revenue: 19600, roas: 2.64 },
      // Month 4: Tax season winding down, still solid
      { month: "Apr", spend: 6083, leads: 13, cpl: 468, qualified: 5, cpql: 1217, deals: 2, revenue: 16800, roas: 2.76 },
      // Month 5: Summer slowdown beginning
      { month: "May", spend: 5247, leads: 11, cpl: 477, qualified: 4, cpql: 1312, deals: 1, revenue: 9100, roas: 1.73 },
      // Month 6: Summer — slower intent, reduced spend
      { month: "Jun", spend: 5047, leads: 10, cpl: 505, qualified: 4, cpql: 1262, deals: 1, revenue: 7600, roas: 1.51 },
      // Month 7: Mid-summer low point, maintaining presence
      { month: "Jul", spend: 5053, leads: 10, cpl: 505, qualified: 4, cpql: 1263, deals: 2, revenue: 14900, roas: 2.95 },
      // Month 8: Late summer, pre-fall pickup
      { month: "Aug", spend: 5134, leads: 12, cpl: 428, qualified: 5, cpql: 1027, deals: 2, revenue: 18300, roas: 3.56 },
      // Month 9: Fall uptick — year-end planning conversations starting
      { month: "Sep", spend: 5817, leads: 14, cpl: 416, qualified: 6, cpql: 970, deals: 2, revenue: 16700, roas: 2.87 },
      // Month 10: Strong Q4 — tax-loss harvesting, year-end reviews driving intent
      { month: "Oct", spend: 6423, leads: 17, cpl: 378, qualified: 7, cpql: 918, deals: 3, revenue: 28400, roas: 4.42 },
      // Month 11: Peak year-end planning season
      { month: "Nov", spend: 7184, leads: 18, cpl: 399, qualified: 8, cpql: 898, deals: 3, revenue: 26800, roas: 3.73 },
      // Month 12: Strong close — mature campaigns, best efficiency
      { month: "Dec", spend: 7347, leads: 19, cpl: 387, qualified: 10, cpql: 735, deals: 3, revenue: 31100, roas: 4.23 },
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
