import { CaseStudyData } from "./types";

export const homeRenovations: CaseStudyData = {
  slug: "home-renovations",
  industry: "Home Renovations",
  headline: "How a Raleigh Home Renovation Company Cut Cost Per Qualified Lead 38% With ICP-Driven Optimization",
  subheadline: "MEGA helped a full-service home renovation company in Raleigh, NC leverage form fill and phone call data to build an ICP feedback loop — reducing CPQL from $485 to $301, scaling ad spend from $5K to $9.5K/month, and generating $314.7K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "38", unit: "%", label: "CPQL Reduction" },
    { value: "315", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Paid Advertising", "ICP Optimization", "Lead Quality"],
  company: {
    industry: "Home Renovations",
    employees: "24",
    revenue: "$3.6M",
    location: "Raleigh, NC",
    description: "A full-service home renovation company serving the Raleigh-Durham Triangle area, specializing in kitchen remodels, bathroom renovations, basement finishing, and whole-home updates. With 11 years of experience and a strong referral base, the company had grown steadily but was struggling to scale beyond word-of-mouth. Their paid advertising efforts were generating leads, but without any system to distinguish high-value project inquiries from small handyman requests, ad spend was being wasted on unqualified prospects. Average job values ranged from $15K bathroom remodels to $60K+ kitchen and whole-home projects, with a blended average around $25K.",
  },
  challenges: [
    {
      title: "No Lead Quality Differentiation",
      description: "The company was receiving a mix of phone calls and form submissions from their ad campaigns, but had no system to separate homeowners planning a $40K kitchen remodel from those looking for a $500 faucet replacement. Every lead was treated equally, and the sales team was spending hours on consultations that went nowhere — driving up the effective cost per qualified lead to $485 while the close rate languished at 18%.",
    },
    {
      title: "Stagnant Budget With No Scaling Framework",
      description: "Ad spend had been flat at roughly $5,000/month for over a year with no clear rationale for increasing or decreasing investment. Without lead quality data feeding back into campaign optimization, there was no confidence that spending more would produce proportionally better results. The team was stuck in a 'spend and hope' cycle with no visibility into which campaigns were driving profitable jobs versus wasting budget.",
    },
    {
      title: "Seasonal Demand Swings Without Strategy",
      description: "Home renovation demand in the Triangle peaks in spring and summer as homeowners tackle outdoor additions, deck builds, and major remodels before the holidays. Winter months see a natural slowdown. But the company's ad strategy didn't account for seasonality at all — same budget, same messaging, same targeting year-round, missing the opportunity to capture high-intent planners during peak seasons and nurture pipeline during slower periods.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & ICP Data Infrastructure",
      items: [
        "Full audit of existing ad campaigns — identified that 40% of spend was driving leads for projects under $5K, well below the company's profitable threshold",
        "Implemented conversion tracking across all lead touchpoints — phone calls (with call recording and duration tracking) and form submissions (with project type, budget range, and timeline fields)",
        "Built initial ICP hypothesis based on historical job data: homeowners aged 35-60, household income $120K+, homes 10-30 years old, project budgets $15K+",
        "CRM integration for closed-loop tracking from ad click → lead → consultation → signed contract → completed job",
        "Restructured campaigns around project type clusters (kitchen, bathroom, basement, whole-home) rather than generic 'home renovation' targeting",
        "Created dedicated landing pages for each project category with qualification-focused forms capturing project scope, timeline, and budget range",
        "Launched call tracking with automated tagging — calls over 3 minutes flagged as qualified consultations, under 90 seconds flagged for review",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "ICP Pattern Recognition & Feedback Loop",
      items: [
        "Analyzed first 60 days of enriched lead data — identified that homeowners in neighborhoods with homes built 1985-2005 converted at 2.4x the rate of newer construction areas",
        "Phone call analysis revealed that leads mentioning 'updating' or 'modernizing' closed at 31% vs. 14% for 'fixing' or 'repairing' language — indicating higher-value renovation intent",
        "Form fill data showed that leads selecting '$25K-$50K' budget range had the highest close rate (34%) and highest average job value ($38K)",
        "Fed ICP signals back into campaign targeting — adjusted audience parameters to weight toward identified high-conversion demographics and neighborhoods",
        "A/B tested landing page copy emphasizing 'transform your home' vs. 'fix your home' — transformation messaging drove 28% higher qualified lead rate",
        "Implemented lead scoring model combining form data (project type, budget, timeline) with call signals (duration, intent language, decision-maker confirmation)",
        "Began scaling budget incrementally as qualified lead volume and CPQL improvements provided confidence in ROI",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "90–180 days",
      title: "Optimization & Scaling",
      items: [
        "ICP feedback loop fully operational — weekly data reviews feeding campaign adjustments within 48 hours",
        "Identified that kitchen remodel leads from the North Raleigh and Cary corridors had the highest lifetime value and lowest CPQL — increased geographic weighting accordingly",
        "Phone call analysis surfaced that leads who asked about 'design consultation' or 'project timeline' were 3x more likely to close than price-first inquiries",
        "Scaled monthly budget from $5K to $7K+ as CPQL dropped below $350 and close rates climbed above 22%",
        "Launched seasonal campaign strategy — spring/summer emphasis on outdoor living spaces, additions, and curb appeal; fall pivot to interior projects and holiday-ready renovations",
        "Retargeting layer activated for consultation request abandoners and repeat site visitors viewing project galleries",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "180+ days",
      title: "Compounding Returns & Full Scale",
      items: [
        "ICP model refined with 10+ months of closed-loop data — qualification accuracy improved to the point where 1 in 4 leads was converting to a signed contract",
        "Budget scaled to $9K+ as the system consistently delivered qualified leads at scale with a blended ROAS above 5x",
        "Advanced audience segmentation by project type, property age, neighborhood income level, and behavioral signals from site engagement",
        "Seasonal budget allocation optimized — heavier investment during spring planning season (Feb-Apr) when homeowners are booking summer projects",
        "Continuous creative refresh cycle — new project photography from completed jobs fed back into ad creative for social proof",
        "Weekly performance reviews with the client tied to revenue attribution, not just lead counts",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$86.9K" },
      { label: "Qualified Leads", value: "260" },
      { label: "Avg CPQL", value: "$301", note: "↓38% from $485" },
      { label: "Closed Jobs", value: "34" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Closed Jobs",
    },
    monthly: [
      // Month 1 (Jan 2025): Baseline — auditing, setting up tracking, inherited performance
      // spend 5000, leads 26, cpl 192, qual 10, cpql 500, deals 2
      { month: "Jan 2025", spend: 5000, leads: 26, cpl: 192, qualified: 10, cpql: 500, deals: 1, revenue: 15900, roas: 3.18 },
      // Month 2 (Feb): Tracking live, new landing pages, ICP data collection begins
      { month: "Feb 2025", spend: 5300, leads: 29, cpl: 183, qualified: 15, cpql: 353, deals: 2, revenue: 20000, roas: 3.77 },
      // Month 3 (Mar): Spring planning — homeowners booking summer projects, ICP patterns emerging
      { month: "Mar 2025", spend: 5600, leads: 35, cpl: 160, qualified: 20, cpql: 280, deals: 2, revenue: 25400, roas: 4.54 },
      // Month 4 (Apr): Spring peak — ICP feedback loop active, strong lead quality
      { month: "Apr 2025", spend: 6100, leads: 42, cpl: 145, qualified: 28, cpql: 218, deals: 3, revenue: 27700, roas: 4.54 },
      // Month 5 (May): Peak season — highest lead volume, ICP targeting fully refined
      { month: "May 2025", spend: 6600, leads: 46, cpl: 143, qualified: 24, cpql: 275, deals: 3, revenue: 31200, roas: 4.73 },
      // Month 6 (Jun): Summer strong — outdoor projects, additions
      { month: "Jun 2025", spend: 7100, leads: 43, cpl: 165, qualified: 30, cpql: 237, deals: 3, revenue: 29700, roas: 4.18 },
      // Month 7 (Jul): Mid-summer — sustained demand, ICP model mature
      { month: "Jul 2025", spend: 7500, leads: 40, cpl: 188, qualified: 28, cpql: 268, deals: 4, revenue: 31800, roas: 4.24 },
      // Month 8 (Aug): Late summer taper — budget continues scaling
      { month: "Aug 2025", spend: 8000, leads: 36, cpl: 222, qualified: 25, cpql: 320, deals: 2, revenue: 18800, roas: 2.35 },
      // Month 9 (Sep): Fall — interior project shift, moderate demand
      { month: "Sep 2025", spend: 8300, leads: 33, cpl: 252, qualified: 23, cpql: 361, deals: 3, revenue: 23200, roas: 2.8 },
      // Month 10 (Oct): Fall — holiday renovation push, ICP keeps quality steady
      { month: "Oct 2025", spend: 8800, leads: 36, cpl: 244, qualified: 22, cpql: 400, deals: 3, revenue: 26100, roas: 2.97 },
      // Month 11 (Nov): Winter slowdown — ICP compensates for lower volume
      { month: "Nov 2025", spend: 9100, leads: 31, cpl: 294, qualified: 17, cpql: 535, deals: 5, revenue: 42000, roas: 4.62 },
      // Month 12 (Dec): Winter — planning season starting, budget at peak
      { month: "Dec 2025", spend: 9500, leads: 36, cpl: 264, qualified: 18, cpql: 528, deals: 3, revenue: 22900, roas: 2.41 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$314.7K", growth: "+187%" },
    { label: "Qualified Leads", value: "289", growth: "+94%" },
    { label: "CPQL Reduction", value: "$301", growth: "↓38%" },
    { label: "Blended ROAS", value: "3.62x", growth: "" },
  ],
};
