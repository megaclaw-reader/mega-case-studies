import { CaseStudyData } from "./types";

export const homeRenovationsNewJersey: CaseStudyData = {
  slug: "home-renovations-new-jersey",
  industry: "Home Renovations",
  headline: "How a New Jersey Home Renovation Company Grew Qualified Leads 143% While Cutting Cost Per Lead 42%",
  subheadline: "MEGA's AI-powered paid advertising drove 394 qualified leads and $276K in attributed revenue over 11 months for a full-service renovation company in northern New Jersey — reducing cost per qualified lead from $276 to $163 through continuous optimization.",
  heroStats: [
    { value: "42", unit: "%", label: "CPL Reduction" },
    { value: "$276.4K", unit: "", label: "Revenue Attributed" },
    { value: "394", unit: "", label: "Qualified Leads" },
  ],
  tags: ["Paid Advertising", "Lead Generation", "Cost Per Lead Optimization"],
  company: {
    industry: "Home Renovations",
    employees: "31",
    revenue: "$4.8M",
    location: "New Jersey",
    description: "A full-service residential renovation company operating across northern New Jersey, specializing in kitchen remodels, bathroom renovations, basement finishing, and whole-home transformations. With over 12 years in the market, the company had built a solid reputation through referrals and repeat clients but was hitting a ceiling on growth. Their paid advertising was generating inquiries but without any system to distinguish a $65,000 full-kitchen renovation lead from a $2,000 minor repair request. Rising material costs and increasing competition from both local contractors and national renovation franchises made efficient lead acquisition critical to maintaining margins.",
  },
  challenges: [
    {
      title: "Unqualified Leads Draining Ad Budget With No Attribution System",
      description: "The company was spending roughly $5,000 per month on paid ads but had no way to track which campaigns generated actual renovation projects versus tire-kickers requesting free estimates with no intention to commit. Their cost per qualified lead sat at $276, and over 70% of form submissions were for projects below their $8,000 minimum threshold or from people just browsing for ideas. Without closed-loop tracking from click to signed contract, budget decisions were made on volume alone.",
    },
    {
      title: "Seasonal Demand Swings Creating Revenue Valleys",
      description: "Home renovation demand in New Jersey follows a pronounced seasonal pattern — surging in spring and early summer when homeowners plan projects, then declining through late fall and winter. The company had no strategy for adjusting paid campaigns to match these cycles, running flat budgets year-round and missing peak-season opportunities while overspending during slow months.",
    },
    {
      title: "Increasing Competition From National Franchise Brands",
      description: "National renovation franchises with large marketing budgets had entered the northern New Jersey market aggressively, pushing up advertising costs and crowding out local competitors in search results. The company needed a more sophisticated approach to targeting and bid management to compete efficiently without matching the franchises' spend levels.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Lead Quality Framework",
      items: [
        "Complete paid advertising audit — restructured campaign architecture, implemented conversion tracking with offline import capabilities, and built CRM integration for lead-to-contract attribution",
        "Defined cost per qualified lead as the primary optimization metric — established baseline of $276 per qualified lead and set monthly reduction targets",
        "Built lead scoring framework integrating project type (kitchen, bathroom, basement, whole-home), estimated project value, property location, and timeline urgency to separate high-value renovation leads from minor repair inquiries",
        "Launched restructured campaigns with separate ad groups for kitchen remodels, bathroom renovations, basement finishing, and whole-home projects — each with tailored messaging and landing pages",
        "Implemented negative keyword filters for DIY searches, commercial projects, handyman services, and out-of-service-area queries to eliminate wasted spend",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing periodic manual review cycles with real-time adjustments",
        "Created geo-targeted campaigns across 14 high-value northern New Jersey zip codes based on median home values and historical project data",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Qualification Refinement",
      items: [
        "Reviewed 30-day performance data — identified that kitchen remodel and whole-home renovation keywords drove 3.2x higher project values than general renovation terms",
        "Refined audience targeting using CRM qualification data — removed segments generating leads below the $8,000 project minimum",
        "Launched landing page A/B tests comparing project-specific pages (kitchen, bathroom, basement) against general renovation pages — project-specific pages converted 28% higher",
        "AI agents identified underperforming ad variations within hours and automatically shifted budget to top performers, compounding small daily optimizations into measurable monthly gains",
        "Implemented retargeting campaigns for estimate request page visitors and portfolio viewers who hadn't converted within 7 days",
        "Budget reallocation based on project-type profitability — shifted spend toward kitchen and whole-home searches where average contract values exceeded $15,000",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Seasonal Scaling & Advanced Segmentation",
      items: [
        "Scaled paid advertising budget to capture spring renovation surge — AI agents detected seasonal demand shifts and increased bids on high-intent terms within hours of volume increases",
        "Advanced audience segmentation by property type, home age, neighborhood median income, and renovation intent signals",
        "Launched portfolio-showcase ad formats featuring completed project photography to build trust and differentiate from franchise competitors",
        "New landing page variants deployed and tested within 48 hours — not the 2-3 week cycle typical of agency engagements",
        "Continuous AI optimization compounded daily improvements across bid adjustments, audience refinements, and budget reallocations in real time",
        "Expanded geo-targeting to 8 additional high-potential zip codes identified through lookalike analysis of top-converting areas",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Sustained Growth & Cost Efficiency",
      items: [
        "Dynamic budget allocation model — automatically scales spend based on seasonal demand patterns, pipeline capacity, and cost-per-qualified-lead thresholds",
        "Audience pruning based on 6+ months of qualification data — removed low-intent segments, built lookalike audiences from signed contracts",
        "Bid strategy optimization based on project-type profitability — higher bids for full kitchen and whole-home renovation searches, conservative bids for smaller project terms",
        "Creative refresh cycles aligned to seasonal renovation patterns — spring project-planning messaging, summer outdoor renovation content, fall pre-holiday completion urgency",
        "Continuous cost-per-lead optimization through landing page iteration, lead scoring model refinement, and real-time budget reallocation across campaign segments",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$74.3K" },
      { label: "Qualified Leads", value: "394" },
      { label: "Avg CPQL", value: "$189" },
      { label: "Closed Deals", value: "29" },
    ],
    monthly: [
      { month: "Jul '25", spend: 5247, leads: 73, cpl: 71.88, qualified: 19, cpql: 276.16, deals: 1, revenue: 9800, roas: 1.87 },
      { month: "Aug '25", spend: 5483, leads: 81, cpl: 67.69, qualified: 22, cpql: 249.23, deals: 2, revenue: 17400, roas: 3.17 },
      { month: "Sep '25", spend: 5871, leads: 94, cpl: 62.46, qualified: 26, cpql: 225.81, deals: 2, revenue: 18600, roas: 3.17 },
      { month: "Oct '25", spend: 6247, leads: 107, cpl: 58.38, qualified: 30, cpql: 208.23, deals: 2, revenue: 20200, roas: 3.23 },
      { month: "Nov '25", spend: 5689, leads: 98, cpl: 58.05, qualified: 28, cpql: 203.18, deals: 2, revenue: 17200, roas: 3.02 },
      { month: "Dec '25", spend: 5124, leads: 87, cpl: 58.90, qualified: 25, cpql: 204.96, deals: 2, revenue: 15800, roas: 3.08 },
      { month: "Jan '26", spend: 5378, leads: 103, cpl: 52.21, qualified: 30, cpql: 179.27, deals: 2, revenue: 18800, roas: 3.50 },
      { month: "Feb '26", spend: 6134, leads: 127, cpl: 48.30, qualified: 38, cpql: 161.42, deals: 3, revenue: 24600, roas: 4.01 },
      { month: "Mar '26", spend: 8247, leads: 176, cpl: 46.86, qualified: 51, cpql: 161.71, deals: 4, revenue: 38800, roas: 4.70 },
      { month: "Apr '26", spend: 11438, leads: 231, cpl: 49.52, qualified: 67, cpql: 170.72, deals: 5, revenue: 52000, roas: 4.55 },
      { month: "May '26", spend: 9467, leads: 198, cpl: 47.81, qualified: 58, cpql: 163.22, deals: 4, revenue: 43200, roas: 4.56 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$276.4K", growth: "+341%" },
    { label: "Blended ROAS", value: "3.72x", growth: "" },
    { label: "Total Qualified Leads", value: "394", growth: "+210%" },
    { label: "Avg CPQL", value: "$189", growth: "↓42% from $276" },
  ],
};
