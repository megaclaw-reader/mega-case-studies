import { CaseStudyData } from "./types";

export const saasPlatformCt: CaseStudyData = {
  slug: "saas-platform-ct",
  industry: "SaaS Platform",
  headline: "How a Connecticut B2B SaaS Startup Generated $109.2K in Pipeline Revenue With Its First-Ever Paid Ad Campaign",
  subheadline: "MEGA helped a Connecticut-based B2B SaaS platform go from zero paid advertising experience to a refined ICP-targeting engine, generating 14 closed deals and a 2.72x LTV-based ROAS in just 6 months — with qualified leads accelerating sharply after the first 60 days of campaign learning.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "109", unit: "K", label: "First-Year Contract Revenue" },
    { value: "2.7", unit: "x", label: "LTV-Based ROAS" },
  ],
  tags: ["Paid Advertising", "ICP Targeting", "First-Time Advertiser"],
  company: {
    industry: "B2B SaaS Platform",
    employees: "12",
    revenue: "$1.1M",
    location: "Stamford, CT",
    description: "A Connecticut-based B2B SaaS startup offering workflow automation software for mid-market operations teams. Founded in 2022, the company had grown entirely through founder-led sales, conference networking, and organic referrals — generating roughly 8–12 qualified demos per month with no formal demand generation infrastructure. Their average annual contract value was $7,800, with a 14-month average customer lifetime. Despite strong product-market fit within their niche, they had never run a single paid advertising campaign and had no experience with digital lead generation at scale. The founding team knew they needed to move beyond referral-dependent growth to hit their Series A targets, but lacked the internal expertise to build, manage, and optimize paid campaigns targeting their specific buyer persona — VP-level operations leaders at companies with 50–500 employees in the Northeast.",
  },
  challenges: [
    {
      title: "Zero Paid Advertising Experience or Infrastructure",
      description: "The company had never allocated budget to paid digital advertising. There were no tracking pixels installed, no conversion events configured, no landing pages built for campaign traffic, and no historical performance data to inform bidding or audience strategies. The marketing team consisted of one generalist who managed the blog and social accounts. Every lead the company had ever generated came through personal networks, conference booths, or inbound content — channels that were plateauing at roughly 10 qualified demos per month and couldn't scale to meet the growth targets their investors expected.",
    },
    {
      title: "Narrow ICP in a Noisy Market",
      description: "The platform solved a specific problem for a specific buyer: VP-level operations leaders at mid-market companies (50–500 employees) struggling with manual workflow bottlenecks. But paid advertising channels don't natively segment by job title seniority, company size, and pain point simultaneously. The risk of wasting budget on clicks from individual contributors, enterprise buyers outside their service tier, or companies in verticals where the product wasn't a fit was significant. Previous attempts at broad outbound campaigns had produced a 4% qualification rate — 96 out of every 100 responses were outside the ICP.",
    },
    {
      title: "Long Sales Cycles and Deferred Revenue Recognition",
      description: "B2B SaaS deals don't close on the first click. The company's average sales cycle was 47 days from first demo to signed contract, with enterprise-adjacent deals stretching to 90+ days. This meant any paid advertising investment would show minimal closed-deal revenue in the first 60 days regardless of lead quality. The founding team needed a partner who understood SaaS unit economics — that a $7,800 annual contract acquired for $2,800 in ad spend is a strong outcome even though the immediate-month ROAS looks unfavorable — and could build a reporting framework around pipeline value and LTV-based returns rather than same-month revenue.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Persona Mapping",
      items: [
        "Full conversion infrastructure buildout — installed tracking pixels across all web properties, configured demo request and free trial signup as primary conversion events, and set up CRM integration for closed-loop attribution from first touch to signed contract",
        "Deep ICP workshop with the founding team — mapped the ideal buyer persona across firmographic (industry, company size, revenue band), demographic (title, seniority, department), and behavioral (content engagement, technology stack) dimensions",
        "Built dedicated landing pages for three core value propositions: workflow automation ROI calculator, operations bottleneck assessment, and product demo request — each tailored to VP-level messaging with enterprise-appropriate trust signals",
        "Competitor analysis across 7 SaaS companies advertising in the workflow automation space — identified gaps in messaging, underserved audience segments, and cost benchmarks for the category",
        "Launched initial campaigns with broad professional targeting to establish baseline metrics — deliberately casting a wider net to generate data on which audience segments, creative angles, and landing pages produced the highest engagement signals",
        "Set up weekly pipeline review cadence with the sales team to track lead-to-demo-to-close progression and feed qualification data back into campaign optimization",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Learning Phase & ICP Refinement",
      items: [
        "Analyzed 30-day performance data — identified that operations-focused messaging outperformed generic 'automation' messaging by 2.3x in demo request rate, but that 61% of leads were still outside the target company size range",
        "Implemented layered audience exclusions to filter out enterprise (500+ employees) and micro-business (under 50 employees) segments that were consuming budget without converting to qualified demos",
        "Creative refresh — retired broad awareness messaging in favor of pain-point-specific ad copy addressing manual approval chains, cross-department handoff failures, and compliance workflow gaps that resonated with the VP Operations persona",
        "Landing page optimization — A/B tested social proof variations (customer logos vs. ROI statistics vs. analyst quotes) and found that specific time-saved metrics drove 34% higher demo request rates than generic testimonials",
        "Built custom audience segments from CRM data — uploaded closed-won customer profiles to create lookalike targeting models weighted toward the highest-LTV accounts",
        "Established lead scoring framework with sales team — MQL criteria based on title + company size + engagement, SQL criteria based on demo attendance + budget confirmation + timeline",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Qualified Lead Acceleration",
      items: [
        "ICP targeting refinements from months 1–2 began compounding — qualification rate jumped from 14% to 27% as audience models trained on actual conversion data rather than proxy signals",
        "Launched retargeting campaigns for demo page visitors who didn't convert — sequenced messaging addressing common objections (implementation timeline, integration complexity, contract flexibility) identified from sales call recordings",
        "Expanded keyword and interest targeting into adjacent operations pain points — project management bottlenecks, vendor management inefficiencies, and regulatory compliance workflows — that mapped to the platform's secondary use cases",
        "Began testing higher-intent campaign structures — demo-first vs. free-trial-first funnels — and found that gated product walkthroughs produced leads with 41% shorter sales cycles than ungated content offers",
        "Sales team reported marked improvement in lead quality — demo no-show rate dropped from 38% to 19%, and average deal size increased 12% as campaigns attracted buyers with larger team deployments",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Scale & Optimize",
      items: [
        "Increased monthly ad spend from $5,679 floor to $8,137 as qualification rates and pipeline velocity proved the unit economics — every dollar of incremental spend maintained or improved LTV-based ROAS",
        "Advanced audience segmentation by industry vertical — manufacturing, professional services, and healthcare operations emerged as the three highest-converting verticals, each receiving dedicated creative and landing page experiences",
        "Implemented multi-touch attribution model to properly credit campaigns that influenced deals across the 47-day average sales cycle — revealed that retargeting campaigns were involved in 67% of closed deals despite generating only 11% of first-touch leads",
        "Quarterly business review with the founding team — presented LTV-based ROAS framework showing that the $40K total ad investment had generated $109K in first-year contract revenue with an expected $156K in total lifetime value from acquired customers",
        "Built forecasting model projecting lead volume and revenue at various spend levels — established the scaling curve for their Series A growth plan",
        "Ongoing creative testing cadence — new ad variations every two weeks, landing page iterations monthly, audience model refreshes quarterly based on latest CRM close data",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$40.2K" },
      { label: "Qualified Leads (SQLs)", value: "75" },
      { label: "Avg Cost Per Qualified Lead", value: "$536", note: "↓62% from ~$1,420 in Month 1" },
      { label: "Closed Deals", value: "14" },
    ],
    columnLabels: {
      leads: "MQLs",
      cpl: "Cost/MQL",
      qualified: "SQLs",
      cpql: "Cost/SQL",
      deals: "Closed Deals",
    },
    monthly: [
      { month: "Jan 2025", spend: 5679, leads: 29, cpl: 196, qualified: 4, cpql: 1420, deals: 1, revenue: 7800, roas: 1.37 },
      { month: "Feb 2025", spend: 5679, leads: 33, cpl: 172, qualified: 6, cpql: 947, deals: 1, revenue: 7800, roas: 1.37 },
      { month: "Mar 2025", spend: 6341, leads: 41, cpl: 155, qualified: 11, cpql: 577, deals: 2, revenue: 15600, roas: 2.46 },
      { month: "Apr 2025", spend: 6872, leads: 48, cpl: 143, qualified: 15, cpql: 458, deals: 3, revenue: 23400, roas: 3.40 },
      { month: "May 2025", spend: 7489, leads: 54, cpl: 139, qualified: 18, cpql: 416, deals: 3, revenue: 23400, roas: 3.12 },
      { month: "Jun 2025", spend: 8137, leads: 61, cpl: 133, qualified: 21, cpql: 388, deals: 4, revenue: 31200, roas: 3.83 },
    ],
  },
  impact: [
    { label: "First-Year Contract Revenue", value: "$109.2K", growth: "+∞% (from $0 paid)" },
    { label: "Qualified Pipeline Value", value: "$163K", growth: "" },
    { label: "Avg Contract Value", value: "$7,800/yr", growth: "" },
    { label: "Blended LTV-Based ROAS", value: "2.72x", growth: "" },
  ],
};
