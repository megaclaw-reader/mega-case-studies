import { CaseStudyData } from "./types";

export const healthcareB2bApp: CaseStudyData = {
  slug: "healthcare-b2b-app",
  industry: "Healthcare B2B App",
  headline: "How a National B2B Employee Wellness Platform Generated 259 Qualified HR Leads and $222.7K in Contract Revenue",
  subheadline: "MEGA partnered with a national health and wellness app company to build a paid advertising engine targeting HR decision-makers — reducing cost per qualified lead from $487 to $226, closing 22 deals, and generating $222.7K in attributed revenue over 7 months.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "259", unit: "", label: "Qualified HR Leads" },
    { value: "$222.7", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Paid Advertising", "B2B Lead Generation", "AI-Powered Optimization"],
  company: {
    industry: "Healthcare B2B App",
    employees: "28",
    revenue: "$1.2M",
    location: "Nationwide US",
    description: "A growing health and wellness technology company offering an employee wellness app designed for mid-size and enterprise businesses. The platform provides personalized wellness programs, mental health resources, fitness tracking, and health coaching — all managed through an HR dashboard that tracks employee engagement and program ROI. The company targets HR directors and benefits managers at organizations with 100-5,000 employees, with annual contracts ranging from $6K to $18K depending on company size. Despite strong product retention and positive client outcomes, the company struggled to generate a consistent flow of qualified HR decision-maker leads through digital advertising.",
  },
  challenges: [
    {
      title: "Difficulty Reaching HR Decision-Makers Through Paid Channels",
      description: "Previous advertising efforts relied on broad health and wellness targeting that attracted individual consumers rather than B2B buyers. Over 70% of inbound leads were individuals looking for personal wellness apps — not HR professionals evaluating employee benefits platforms. The cost per qualified B2B lead exceeded $487, making paid acquisition unsustainable at the current budget level.",
    },
    {
      title: "Long B2B Sales Cycle With No Nurturing Infrastructure",
      description: "The average deal cycle from first touch to signed contract was 45-90 days, typical for enterprise benefits procurement. However, the company had no retargeting sequences, no lead scoring system, and no way to track which ad campaigns actually drove pipeline. Leads were captured through a generic contact form with no qualification criteria, overwhelming the small sales team with unqualified inquiries.",
    },
    {
      title: "Competitive Market With Established Wellness Platforms",
      description: "The employee wellness space includes well-funded competitors with massive brand recognition. Competing for attention among HR buyers required precise messaging around ROI, employee engagement metrics, and implementation simplicity — none of which were reflected in the existing ad creative or landing pages. The company needed a strategy to differentiate through targeted positioning rather than outspending larger players.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & B2B Targeting Overhaul",
      items: [
        "Complete audit of existing paid campaigns — paused all consumer-targeted campaigns that were attracting individual wellness seekers instead of HR buyers",
        "Built new campaign architecture targeting HR directors, benefits managers, and people operations leaders at companies with 100-5,000 employees",
        "Created dedicated landing pages with HR-specific messaging: employee engagement ROI, implementation timeline, and benefits administration integration",
        "Implemented CRM integration with full closed-loop attribution from ad click through demo request to signed contract",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review agency cadence",
        "Set up lead qualification scoring based on company size, job title, and engagement signals to prioritize high-value prospects",
        "Created exclusion audiences for individual consumers, job seekers, students, and existing clients",
        "Launched initial creative testing with 12 AI-generated ad variations targeting different HR pain points: employee retention, healthcare cost reduction, and productivity gains",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Optimization & Pipeline Acceleration",
      items: [
        "A/B tested 8 landing page variants across headline messaging, form length, and social proof from existing enterprise clients",
        "Launched retargeting sequences for demo page visitors, case study readers, and pricing page abandoners with 30/60/90-day nurture cadences matching the B2B sales cycle",
        "Expanded keyword strategy to include employee wellness ROI, corporate wellness program, and HR benefits platform terms",
        "AI agents analyzed thousands of performance signals daily, identifying which company sizes, industries, and job titles converted at the highest rates — reallocating budget in real time rather than waiting for monthly reviews",
        "Built audience segments by company size tier (100-500, 500-2000, 2000-5000 employees) with tailored messaging per segment",
        "Implemented dayparting strategy concentrating spend during business hours when HR professionals actively research vendor solutions",
        "Rotated in fresh AI-generated creative weekly, testing different value propositions: wellness program ROI calculators, employee engagement statistics, and implementation ease messaging",
      ],
    },
    {
      phase: 3,
      months: "90+ days",
      title: "Scale & Enterprise Pipeline Growth",
      items: [
        "Lookalike audience expansion built from closed-won client profiles — matching firmographic signals like industry, headcount, and benefits spend",
        "Launched account-based targeting campaigns for a curated list of 500+ mid-market companies in industries with highest wellness program adoption rates",
        "Multi-touch attribution model fully operational — budget allocation driven by actual pipeline contribution and deal velocity data",
        "Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time",
        "Seasonal budget increases aligned with Q4 benefits enrollment season when HR teams actively evaluate new vendor partnerships",
        "Expanded creative library to address different stages of the buying journey — awareness content for cold audiences, ROI-focused content for consideration stage, and competitive comparison content for decision stage",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$60,709" },
      { label: "Qualified Leads", value: "259" },
      { label: "Avg Cost Per Qualified Lead", value: "$234", note: "↓52% from $487" },
      { label: "Closed Deals", value: "22" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified",
      deals: "Closed Deals",
    },
    monthly: [
      { month: "Jul '25", spend: 7564, leads: 42, cpl: 180, qualified: 27, cpql: 280, deals: 2, revenue: 18200, roas: 2.41 },
      { month: "Aug '25", spend: 7891, leads: 48, cpl: 164, qualified: 31, cpql: 255, deals: 3, revenue: 28700, roas: 3.64 },
      { month: "Sep '25", spend: 8247, leads: 54, cpl: 153, qualified: 35, cpql: 236, deals: 3, revenue: 31400, roas: 3.81 },
      { month: "Oct '25", spend: 8734, leads: 57, cpl: 153, qualified: 38, cpql: 230, deals: 4, revenue: 38900, roas: 4.45 },
      { month: "Nov '25", spend: 9813, leads: 65, cpl: 151, qualified: 45, cpql: 218, deals: 3, revenue: 33600, roas: 3.42 },
      { month: "Dec '25", spend: 9247, leads: 60, cpl: 154, qualified: 42, cpql: 220, deals: 4, revenue: 42100, roas: 4.55 },
      { month: "Jan '26", spend: 9213, leads: 59, cpl: 156, qualified: 41, cpql: 225, deals: 3, revenue: 29800, roas: 3.23 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$222.7K", growth: "+272%" },
    { label: "Total Deals Closed", value: "22", growth: "+633%" },
    { label: "Avg Contract Value", value: "$10,123", growth: "" },
    { label: "Blended ROAS", value: "3.67x", growth: "" },
  ],
};
