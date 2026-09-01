import { CaseStudyData } from "./types";

export const wealthManagementAccelerated: CaseStudyData = {
  slug: "wealth-management-accelerated",
  industry: "Wealth Management",
  headline: "How a National Wealth Management Firm Cut Client Acquisition Costs 73% in Just 5 Months",
  subheadline: "MEGA helped a national fee-only RIA rapidly build a digital acquisition engine — adding $11M in new AUM, reducing cost per qualified lead from $1,716 to $459, and establishing an organic search foundation with 738 ranked keywords in under half a year.",
  heroStats: [
    { value: "$11", unit: "M", label: "New AUM Acquired" },
    { value: "73", unit: "%", label: "CPQL Reduction" },
    { value: "12", unit: "", label: "New Clients (Paid)" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "Wealth Management",
    employees: "14",
    revenue: "$2.1M",
    location: "United States",
    description: "A fee-only registered investment advisory firm serving high-net-worth individuals and families nationwide, with investable asset minimums of $500K. The firm had grown to approximately $210M in assets under management over 9 years through referrals and professional partnerships, but new client acquisition had slowed meaningfully. Leadership sought a fast, data-driven marketing approach to re-accelerate growth across multiple markets without compromising their compliance-first reputation.",
  },
  challenges: [
    {
      title: "Referral-Dependent Growth Hitting a Ceiling",
      description: "Referrals from CPAs and estate attorneys had historically driven over 80% of new business, but the pipeline had contracted 19% year-over-year. The firm's existing referral network couldn't efficiently reach new geographic markets or younger high-net-worth demographics.",
    },
    {
      title: "No Digital Acquisition Infrastructure",
      description: "The firm's website ranked for fewer than 90 keywords, almost all branded. No content strategy, no landing pages for target services, and no paid advertising had ever been attempted. Digital was essentially a blank slate — but that also meant no bad habits to unlearn.",
    },
    {
      title: "Compliance Requirements and Brand Standards",
      description: "As a registered investment advisor, the firm operated under SEC and state advertising guidelines. All marketing needed compliance review, and leadership required campaigns that maintained the professional tone expected by high-net-worth prospects. Speed was critical but couldn't come at the expense of regulatory alignment.",
    },
    {
      title: "Need for Fast Results on a Modest Budget",
      description: "With a conservative marketing budget and pressure to show ROI quickly, the firm couldn't afford a slow 12-month ramp. They needed a partner that could deliver measurable client acquisition within the first quarter while building longer-term organic visibility in parallel.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Rapid Foundation & Campaign Launch",
      items: [
        "Comprehensive website audit — performance, mobile experience, compliance alignment, and conversion path analysis",
        "Deep keyword research targeting high-intent national terms: 'wealth management firm', 'financial advisor for high net worth individuals', 'fee-only financial planner', 'retirement planning advisor'",
        "Competitive analysis of 8 national wealth management firms' digital presence and advertising strategies",
        "Developed compliance-approved ad copy templates and landing page frameworks reviewed by the firm's compliance officer within 72 hours",
        "Built dedicated landing pages for core services: retirement planning, investment management, estate coordination, and tax-efficient portfolio strategies",
        "Implemented cross-channel attribution tracking — call tracking, form submissions, and CRM integration for closed-loop reporting from day one",
        "Launched initial paid campaigns targeting high-intent searches with conservative daily budgets to establish baseline performance data",
        "Technical SEO overhaul — financial services schema markup, Core Web Vitals fixes, mobile UX improvements",
        "Published first 6 educational articles covering retirement income strategies, tax-efficient investing, and market commentary",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review agency cadence with real-time adjustments from day one",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Data-Driven Optimization & Rapid CAC Reduction",
      items: [
        "Reviewed 30-day performance data — adjusted bid strategies and paused underperforming audience segments based on lead quality signals from CRM feedback",
        "Published 8 additional long-form articles targeting consideration-stage queries around wealth transfer, tax planning, and portfolio management",
        "A/B tested consultation offer framings — 'complimentary portfolio review' vs. 'wealth assessment' vs. 'financial planning consultation' — identified winning variant within 10 days",
        "Refined audience targeting using qualification data from initial leads — identified highest-value demographic and behavioral signals",
        "Built retargeting audiences from website visitors and partial form completions to re-engage high-intent prospects",
        "Internal linking optimization to build topical authority clusters around core service pillars",
        "AI agents analyzed thousands of performance signals daily, identifying which audience segments drove the highest-quality leads and reallocating budget in real time — compounding daily optimizations that reduced cost per qualified lead 37% in a single month",
      ],
    },
    {
      phase: 3,
      months: "60–150 days",
      title: "Scale, Compound & Accelerate Results",
      items: [
        "Expanded content production to 4+ articles per month covering timely financial planning topics and Q2 tax planning themes",
        "Launched seasonal campaigns around mid-year portfolio review and retirement readiness assessment themes",
        "CRO improvements based on heatmap and session recording analysis — simplified consultation request forms and added social proof elements",
        "Advanced audience segmentation based on investable asset signals and conversion probability scoring",
        "Implemented lead scoring system integrating website behavior with CRM data to prioritize high-probability prospects for advisor outreach",
        "Backlink acquisition through financial publication guest contributions and industry directory listings",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening automatically as market conditions shifted, driving cost per qualified lead down another 35% over the final 3 months",
        "Real-time performance monitoring detected and responded to competitive shifts and seasonal trends within hours rather than the typical agency cycle of days or weeks",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "738", growth: "+779%", from: "from 84" },
      { label: "Top 10 Rankings", value: "34", growth: "+1,033%", from: "from 3" },
      { label: "Organic Traffic", value: "1,843/mo", growth: "+347%", from: "from 412" },
      { label: "Pages Created", value: "21", growth: "", from: "in 5 months" },
    ],
    monthly: [
      { month: "Feb '26", keywords: 84, top10: 3, top3: 0, traffic: 412, pages: 0, avgPos: 57.3, ctr: 0.6 },
      { month: "Mar '26", keywords: 156, top10: 7, top3: 1, traffic: 562, pages: 8, avgPos: 52.4, ctr: 0.8 },
      { month: "Apr '26", keywords: 287, top10: 14, top3: 3, traffic: 874, pages: 6, avgPos: 47.1, ctr: 1.1 },
      { month: "May '26", keywords: 489, top10: 23, top3: 6, traffic: 1318, pages: 4, avgPos: 41.8, ctr: 1.3 },
      { month: "Jun '26", keywords: 738, top10: 34, top3: 9, traffic: 1843, pages: 3, avgPos: 37.4, ctr: 1.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$27.5K" },
      { label: "Qualified Leads", value: "38" },
      { label: "Avg Cost/Qualified Lead", value: "$725", note: "↓73% from $1,716" },
      { label: "New Clients Acquired", value: "12" },
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
      // Month 1 (Feb '26): Campaign launch — high CAC, building baseline
      { month: "Feb '26", spend: 5147, leads: 14, cpl: 367.64, qualified: 3, cpql: 1715.67, deals: 1, revenue: 13487, roas: 2.62 },
      // Month 2 (Mar '26): AI optimization kicking in, first multi-close month
      { month: "Mar '26", spend: 5389, leads: 19, cpl: 283.63, qualified: 5, cpql: 1077.80, deals: 2, revenue: 19847, roas: 3.68 },
      // Month 3 (Apr '26): Significant improvement — audience refined, strong close rate
      { month: "Apr '26", spend: 5678, leads: 26, cpl: 218.38, qualified: 8, cpql: 709.75, deals: 3, revenue: 24613, roas: 4.33 },
      // Month 4 (May '26): Strong momentum — compound optimization
      { month: "May '26", spend: 5823, leads: 31, cpl: 187.84, qualified: 10, cpql: 582.30, deals: 3, revenue: 26389, roas: 4.53 },
      // Month 5 (Jun '26): Best month — CAC dramatically reduced
      { month: "Jun '26", spend: 5512, leads: 34, cpl: 162.12, qualified: 12, cpql: 459.33, deals: 3, revenue: 26143, roas: 4.74 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "9", growth: "+350%", note: "Month 1: 1" },
      { label: "Avg Monthly Leads (Last 2mo)", value: "2.5", growth: "", note: "vs. 1.0 first 2 months" },
      { label: "Organic Conversion Rate", value: "3.4%", growth: "+55%", note: "from 2.2%" },
      { label: "Organic Clients Acquired", value: "1", growth: "", note: "$0 ad spend" },
    ],
    columnLabels: {
      formFills: "Consultation Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Feb '26", formFills: 0, calls: 1, totalLeads: 1, conversionRate: 2.2 },
      { month: "Mar '26", formFills: 1, calls: 0, totalLeads: 1, conversionRate: 2.4 },
      { month: "Apr '26", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 2.8 },
      { month: "May '26", formFills: 1, calls: 1, totalLeads: 2, conversionRate: 3.1 },
      { month: "Jun '26", formFills: 2, calls: 1, totalLeads: 3, conversionRate: 3.4 },
    ],
    sources: [
      { source: "Organic Search", percentage: 56, leads: 5 },
      { source: "Business Profile", percentage: 22, leads: 2 },
      { source: "Direct (Brand Search)", percentage: 11, leads: 1 },
      { source: "Referral", percentage: 11, leads: 1 },
    ],
  },
  impact: [
    { label: "New AUM Acquired", value: "$11.05M", growth: "" },
    { label: "Projected Annual Revenue", value: "$110.5K", growth: "recurring" },
    { label: "10-Year Client LTV", value: "$1.1M", growth: "projected" },
    { label: "Total New Clients (Paid + Organic)", value: "13", growth: "" },
    { label: "Blended Cost Per Client", value: "$2,119", growth: "↓73%" },
    { label: "Blended ROAS", value: "4.01x", growth: "" },
  ],
};
