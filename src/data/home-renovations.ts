import { CaseStudyData } from "./types";

export const homeRenovations: CaseStudyData = {
  slug: "home-renovations",
  industry: "Home Renovations",
  headline: "How a Raleigh Home Renovation Company Cut Cost Per Qualified Lead 57% With ICP-Driven Optimization",
  subheadline: "MEGA helped a full-service home renovation company in Raleigh, NC leverage form fill and phone call data to build an ICP feedback loop — reducing CPQL from $190 to $82, scaling ad spend from $5K to $8.4K/month, and generating $357.7K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "57", unit: "%", label: "CPQL Reduction" },
    { value: "$357.7K", unit: "K", label: "Revenue Attributed" },
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
      { label: "Total Ad Spend", value: "$90.2K" },
      { label: "Qualified Leads", value: "823" },
      { label: "Avg CPQL", value: "$110", note: "↓57% from $190" },
      { label: "Closed Jobs", value: "37" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Closed Jobs",
      costPerDeal: "Cost/Job",
    },
    monthly: [
      // Month 1: Launch — broad targeting, establishing baseline
      { month: "Jan 2025", spend: 5134, leads: 74, cpl: 69.38, qualified: 27, cpql: 190.15, deals: 1, revenue: 16200, roas: 3.16 },
      // Month 2: ICP data from calls informing targeting
      { month: "Feb 2025", spend: 5417, leads: 83, cpl: 65.27, qualified: 33, cpql: 164.15, deals: 2, revenue: 22400, roas: 4.13 },
      // Month 3: Spring planning season — demand rising
      { month: "Mar 2025", spend: 6247, leads: 94, cpl: 66.46, qualified: 39, cpql: 160.18, deals: 2, revenue: 24800, roas: 3.97 },
      // Month 4: Peak spring demand — homeowners booking summer projects
      { month: "Apr 2025", spend: 7134, leads: 106, cpl: 67.30, qualified: 51, cpql: 139.88, deals: 3, revenue: 28700, roas: 4.02 },
      // Month 5: Strong spring — kitchen remodel inquiries surging
      { month: "May 2025", spend: 8247, leads: 118, cpl: 69.89, qualified: 62, cpql: 133.02, deals: 3, revenue: 27400, roas: 3.32 },
      // Month 6: Summer — renovations in full swing
      { month: "Jun 2025", spend: 8613, leads: 128, cpl: 67.29, qualified: 71, cpql: 121.31, deals: 4, revenue: 34600, roas: 4.02 },
      // Month 7: Peak renovation season
      { month: "Jul 2025", spend: 8934, leads: 138, cpl: 64.74, qualified: 78, cpql: 114.54, deals: 3, revenue: 27800, roas: 3.11 },
      // Month 8: Late summer — strong pipeline
      { month: "Aug 2025", spend: 8347, leads: 147, cpl: 56.78, qualified: 84, cpql: 99.37, deals: 4, revenue: 36400, roas: 4.36 },
      // Month 9: Fall — interior renovation demand picks up
      { month: "Sep 2025", spend: 7618, leads: 155, cpl: 49.15, qualified: 89, cpql: 85.60, deals: 3, revenue: 28100, roas: 3.69 },
      // Month 10: Holiday-ready renovation rush
      { month: "Oct 2025", spend: 8147, leads: 163, cpl: 49.98, qualified: 95, cpql: 85.76, deals: 4, revenue: 37200, roas: 4.57 },
      // Month 11: Strong Q4 — holiday prep renovations
      { month: "Nov 2025", spend: 8434, leads: 172, cpl: 49.02, qualified: 98, cpql: 86.06, deals: 4, revenue: 38400, roas: 4.55 },
      // Month 12: Year-end close — best efficiency
      { month: "Dec 2025", spend: 7918, leads: 181, cpl: 43.75, qualified: 96, cpql: 82.48, deals: 4, revenue: 35700, roas: 4.51 }
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$357.7K", growth: "+214%" },
    { label: "Qualified Leads", value: "823", growth: "+109%" },
    { label: "CPQL Reduction", value: "$82", growth: "↓57%" },
    { label: "Blended ROAS", value: "3.97x", growth: "" },
  ],
};
