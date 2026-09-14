import { CaseStudyData } from "./types";

export const mortgageLendingTexas: CaseStudyData = {
  slug: "mortgage-lending-texas",
  industry: "Mortgage Lending",
  headline: "Texas Mortgage Lender Closes 25 Funded Loans and $100.7K in Origination Revenue Through AI-Optimized Paid Ads",
  subheadline: "MEGA helped a Houston, Texas-based mortgage lending company build a digital lead pipeline from scratch, generating 70 qualified applications and closing 25 funded loans in 7 months — reducing cost per qualified application by 57%.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "$100.7K", unit: "", label: "Revenue Attributed" },
    { value: "25", unit: "", label: "Funded Loans" },
  ],
  tags: ["Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Mortgage Lending",
    employees: "12",
    revenue: "$1.8M",
    location: "Houston, Texas",
    description: "A locally operated mortgage lending firm based in Houston, Texas, serving homebuyers across the greater Houston metro and surrounding Texas markets. The company specializes in conventional, FHA, and VA loans, with a strong referral network but limited digital lead generation. They came to MEGA looking to build a reliable paid advertising pipeline without overspending.",
  },
  challenges: [
    {
      title: "High Cost Per Qualified Application",
      description: "The company had experimented with Google Ads in the past, but without proper tracking or optimization, their cost per qualified mortgage application hovered around $1,040 — eating into margins on a modest budget and making paid acquisition feel unsustainable for the competitive Texas lending market.",
    },
    {
      title: "Inconsistent Lead Quality",
      description: "Previous ad campaigns attracted a mix of unqualified inquiries — renters not ready to buy, out-of-area leads, and rate shoppers with no intent to close. The team wasted hours following up on leads that went nowhere, with only about 8% of raw leads converting to qualified applications.",
    },
    {
      title: "Referral Dependency in a Competitive Market",
      description: "With 80% of funded loans coming from realtor referrals and word-of-mouth, the company was vulnerable to relationship changes and had no control over lead flow. They needed a digital channel they could scale on their own terms in the competitive Texas market.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Tracking Infrastructure",
      items: [
        "Full audit of previous Google Ads account — paused low-intent campaigns and restructured ad groups around high-intent mortgage keywords specific to Texas markets",
        "Implemented proper conversion tracking with CRM integration to track lead-to-funded-loan pipeline",
        "Built dedicated landing pages for key loan types (conventional, FHA, VA) targeting Houston and surrounding Texas metros",
        "Launched initial creative testing with 12 ad variations across search and display formats, giving the algorithm more signal diversity than the previous single-ad setup",
        "Deployed always-on AI optimization agents within the ad account for continuous bid management and budget allocation — replacing the previous set-it-and-forget-it approach with real-time adjustments",
        "Set up negative keyword lists to filter out refinance-only, out-of-state, and informational queries",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Quality Refinement",
      items: [
        "Reviewed 30-day performance data — identified that FHA loan keywords delivered the highest qualification rate in the Houston market",
        "Reallocated 35% of budget toward top-performing ad groups based on cost-per-qualified-application data",
        "Expanded keyword coverage to include surrounding Texas markets (Katy, Sugar Land, Pearland, Cypress)",
        "AI agents identified underperforming ad creatives within days and automatically shifted budget to top performers — compounding small daily optimizations that would take a traditional agency weeks to act on",
        "Added call tracking to capture phone leads that weren't being attributed to paid campaigns",
        "Launched retargeting campaigns for users who visited loan application pages but didn't submit",
        "A/B tested landing page variants with different pre-qualification forms — shorter forms increased submission rates without sacrificing lead quality",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scaling Within Budget",
      items: [
        "Reviewed 60-day data and increased budget allocation to spring homebuying season demand",
        "Expanded creative library to 15+ active variations, rotating winners weekly based on performance data",
        "Built lookalike audiences from funded loan customer data for targeted display and YouTube campaigns",
        "AI agents detected the seasonal surge in Texas homebuying searches and reallocated budget to high-intent keywords within hours — capturing demand that manual weekly reviews would have missed",
        "Tested geo-bid adjustments to increase bids in high-converting zip codes across the Houston metro",
        "Refined qualification criteria with the lending team to better align ad targeting with actual approval likelihood",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Efficiency",
      items: [
        "Continued budget reallocation based on seasonal patterns — maintained spend through summer to capture late-season demand",
        "Audience pruning — removed low-converting segments and expanded high-performing ones",
        "Dynamic ad copy testing by loan type and geography across Texas markets",
        "Continuous AI optimization compounded daily improvements into measurable monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time",
        "Monthly reporting with pipeline attribution showing clear path from ad click to funded loan",
      ],
    },
  ],
  paidAds: {
    // Total spend: 5183+5347+5712+6089+6453+5941+6217 = 40942
    // Total leads: 47+56+68+81+92+84+96 = 524
    // Total qualified: 5+7+9+11+13+11+14 = 70
    // Avg CPQL: 40942/70 = 584.89
    // Total deals: 1+2+3+4+5+4+6 = 25
    // Total revenue: 3850+7600+12150+16200+20750+15800+24300 = 100650
    // Blended ROAS: 100650/40942 = 2.46
    summary: [
      { label: "Total Ad Spend", value: "$40.9K" },
      { label: "Qualified Applications", value: "70" },
      { label: "Avg Cost Per Qualified App", value: "$585", note: "↓57% from $1,040" },
      { label: "Funded Loans", value: "25" },
    ],
    monthly: [
      // Month 1 (Feb '26): Inherited account, restructuring, low volume baseline
      { month: "Feb '26", spend: 5183, leads: 47, cpl: 110.28, qualified: 5, cpql: 1036.60, deals: 1, revenue: 3850, roas: 0.74 },
      // Month 2 (Mar '26): Campaign restructuring live, spring demand starting in Texas
      { month: "Mar '26", spend: 5347, leads: 56, cpl: 95.48, qualified: 7, cpql: 763.86, deals: 2, revenue: 7600, roas: 1.42 },
      // Month 3 (Apr '26): Peak spring homebuying season, FHA keywords driving volume
      { month: "Apr '26", spend: 5712, leads: 68, cpl: 84.00, qualified: 9, cpql: 634.67, deals: 3, revenue: 12150, roas: 2.13 },
      // Month 4 (May '26): Strong demand continues, lookalike audiences live, budget scaled
      { month: "May '26", spend: 6089, leads: 81, cpl: 75.17, qualified: 11, cpql: 553.55, deals: 4, revenue: 16200, roas: 2.66 },
      // Month 5 (Jun '26): Peak performance month — seasonal demand + optimized campaigns
      { month: "Jun '26", spend: 6453, leads: 92, cpl: 70.14, qualified: 13, cpql: 496.38, deals: 5, revenue: 20750, roas: 3.21 },
      // Month 6 (Jul '26): Summer softening, slightly fewer buyers but pipeline still converting
      { month: "Jul '26", spend: 5941, leads: 84, cpl: 70.73, qualified: 11, cpql: 540.09, deals: 4, revenue: 15800, roas: 2.66 },
      // Month 7 (Aug '26): Strong close — expanded geo targeting and fresh creatives drive best efficiency
      { month: "Aug '26", spend: 6217, leads: 96, cpl: 64.76, qualified: 14, cpql: 444.07, deals: 6, revenue: 24300, roas: 3.91 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$100,650", growth: "" },
    { label: "Funded Loans", value: "25", growth: "" },
    { label: "Avg Revenue Per Loan", value: "$4,026", growth: "" },
    { label: "Blended ROAS", value: "2.46x", growth: "" },
  ],
};
