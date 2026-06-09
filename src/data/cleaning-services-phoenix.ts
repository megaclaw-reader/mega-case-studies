import { CaseStudyData } from "./types";

export const cleaningServicesPhoenix: CaseStudyData = {
  slug: "cleaning-services-phoenix",
  industry: "Cleaning Service",
  headline: "How a Phoenix Cleaning Company Generated $127K in Revenue Over 6 Months With AI-Optimized Paid Advertising",
  subheadline: "MEGA helped a residential and commercial cleaning service in Phoenix, AZ scale qualified leads while reducing cost per qualified lead from $187 to $106 — closing 97 new clients and achieving a 3.47x blended ROAS through always-on AI optimization.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "$127.3K", unit: "K", label: "Revenue Attributed" },
    { value: "43", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "Lead Generation", "Local Advertising"],
  company: {
    industry: "Cleaning Service — Residential & Commercial",
    employees: "22",
    revenue: "$1.7M",
    location: "Phoenix, AZ (Greater Maricopa County)",
    description: "A residential and commercial cleaning company serving the Phoenix metropolitan area — including Scottsdale, Tempe, Mesa, Chandler, Gilbert, and Paradise Valley. The company offered recurring residential house cleaning, deep cleans, move-in/move-out cleaning, post-construction cleanup, and commercial office cleaning for small-to-mid-size businesses. With a solid reputation built on referrals and a 4.7-star rating across 89 reviews, they had consistent demand but were struggling to scale beyond word-of-mouth in the competitive Phoenix market. Their paid advertising had been inconsistent — sporadic campaigns with broad targeting, no qualifying infrastructure on landing pages, and no system for distinguishing high-value recurring clients from one-time price shoppers. They needed a data-driven paid advertising strategy that could systematically lower acquisition costs while growing both residential recurring clients and commercial contracts across the Phoenix metro.",
  },
  challenges: [
    {
      title: "No System for Identifying High-Value Leads From Paid Traffic",
      description: "The company was running paid campaigns but had no infrastructure for tracking which leads actually converted to paying clients. Phone calls went unrecorded, form submissions lacked qualifying questions, and there was no distinction between a one-time apartment clean inquiry and a potential $450/month recurring residential client or a $1,100/month commercial contract. The cost per lead of $48 looked acceptable on paper, but the cost per qualified lead was $187 — making profitable scaling impossible without a fundamental shift in lead qualification and targeting.",
    },
    {
      title: "Broad Targeting Burning Budget Across the Sprawling Phoenix Metro",
      description: "The Phoenix metropolitan area spans over 14,000 square miles with dramatically different demographics across neighborhoods. Paid campaigns were targeting anyone searching cleaning-related terms across the entire metro without segmentation by service type, property size, neighborhood affluence, or commercial vs. residential intent. Budget was being spent equally on price-conscious college students near ASU and affluent homeowners in Paradise Valley and North Scottsdale seeking premium recurring service. A single generic landing page served everyone — the same messaging for an $89 studio apartment clean and a $1,800/month office contract. Bounce rate sat at 61% and qualified lead rate was under 19%.",
    },
    {
      title: "Seasonal Demand Swings Unique to the Phoenix Desert Climate",
      description: "Phoenix's extreme climate creates distinct cleaning demand patterns unlike most markets. The brutal summer heat (May–September) drives residents indoors, increasing demand for deep cleans and recurring service as dust and allergens accumulate. Spring brings move-in/move-out surges as snowbirds depart and new residents arrive. Without a campaign strategy adapted to these Phoenix-specific seasonal patterns, the company was spending the same amount in slow January as in high-demand May — leaving revenue on the table during peak months and wasting budget during slower periods.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Campaign Infrastructure & Baseline Data Collection",
      items: [
        "Implemented call tracking with recording and AI-powered call analysis — tagging each call by service type (recurring residential, one-time deep clean, move-in/out, commercial), property type, neighborhood, and lead quality score",
        "Redesigned landing pages with qualifying questions — property size, cleaning frequency preference, residential vs. commercial, and zip code — creating an ICP data capture layer on every form submission",
        "Competitor analysis of top 5 Phoenix cleaning companies — ad messaging, landing page structure, offer positioning, and seasonal campaign patterns",
        "Launched initial paid campaigns at $5,200/month with intentionally broad geographic and demographic targeting across the Phoenix metro to establish baseline ICP data from phone calls and landing page behavior",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Created segmented landing pages for residential recurring, one-time deep clean, move-in/move-out, and commercial office cleaning — each with tailored messaging and qualifying flows",
        "Built conversion tracking infrastructure connecting ad clicks → landing page behavior → phone calls → booked appointments → paying clients for full-funnel attribution",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "ICP Pattern Recognition & Targeting Refinement",
      items: [
        "Analyzed 30 days of phone call recordings — identified that 71% of qualified leads mentioned recurring service, 67% were in households with 1,800+ sq ft, and the highest-converting zip codes were in Scottsdale, Paradise Valley, Chandler, and Gilbert",
        "Landing page data revealed: leads selecting 'weekly' or 'bi-weekly' frequency converted to paying clients at 2.9x the rate of 'one-time' selections — shifted primary messaging to lead with recurring service value propositions",
        "Restructured paid campaigns based on ICP findings — increased bids on zip codes with highest qualified lead rates, reduced spend on areas producing price-shoppers near university corridors",
        "Added negative targeting to separate one-time clean seekers from recurring service campaigns and commercial from residential",
        "AI agents identified underperforming ad creatives within hours and automatically shifted budget to top performers — compounding small daily optimizations rather than waiting for monthly manual reviews",
        "Launched 12-15 AI-generated ad variations testing different hooks, seasonal angles, and service-specific messaging to accelerate creative learning",
        "Scaled budget to $5,400/month as early ICP data validated which segments justified increased spend",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Seasonal Optimization & Confident Scaling",
      items: [
        "Reviewed 60 days of accumulated ICP data — phone call analysis revealed that leads mentioning 'pets' or 'allergies' had 38% higher lifetime value in the Phoenix dust-heavy environment, added targeted ad copy and landing page messaging",
        "Identified income-level correlation: neighborhoods with median household income above $92K produced 82% of qualified residential leads — concentrated residential campaign budget on Scottsdale, Paradise Valley, Arcadia, and North Phoenix",
        "Commercial ICP refinement: medical offices, dental practices, and real estate offices in Phoenix had highest contract values — created industry-specific ad copy and landing pages",
        "With spring cleaning season approaching and ICP targeting validated, confidently increased monthly budget to $5,800 to capture seasonal demand surge",
        "Implemented retargeting sequences segmented by residential vs. commercial page behavior with tailored follow-up messaging",
        "When seasonal demand shifted toward spring deep cleans, AI agents restructured campaign allocation within hours to capture the opportunity — reallocating 25% of budget to high-intent seasonal keywords",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Peak Season Scaling & Compound Optimization",
      items: [
        "Continued budget scaling from $6,100 through $7,200 as Phoenix entered peak cleaning season (April–June) — each dollar spent more efficiently due to compounding ICP refinements",
        "AI agents analyzed thousands of performance signals daily, identifying micro-trends invisible to human reviewers and reallocating budget to top-performing audiences and keywords in real time",
        "Phone call analysis automated with weekly ICP reports — new behavioral patterns fed directly into campaign bid adjustments and ad copy iterations",
        "Landing page A/B testing based on ICP segments — different hero images, CTAs, and social proof for affluent residential vs. young professional vs. commercial audiences",
        "Summer heat messaging deployed — 'Let us handle the dust so you don't have to' and allergen-focused copy resonated strongly as Phoenix temperatures climbed above 100°F",
        "By month 6, ICP targeting so refined that CPQL dropped to $106 even as spend reached $7,200 — proving the continuous AI optimization loop sustained efficiency at scale",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time rather than the typical agency cycle of weekly or biweekly reviews",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$36.7K" },
      { label: "Qualified Leads", value: "283" },
      { label: "Avg Cost Per Qualified Lead", value: "$130", note: "↓31% from $187" },
      { label: "Closed Clients", value: "97", note: "avg new client value $1,312" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Closed Clients",
      costPerDeal: "Cost/Client",
    },
    monthly: [
      { month: "Jan '26", spend: 5200, leads: 108, cpl: 48.15, qualified: 28, cpql: 185.71, deals: 9, revenue: 10143, roas: 1.95 },
      { month: "Feb '26", spend: 5400, leads: 119, cpl: 45.38, qualified: 33, cpql: 163.64, deals: 11, revenue: 13847, roas: 2.56 },
      { month: "Mar '26", spend: 5800, leads: 147, cpl: 39.46, qualified: 42, cpql: 138.10, deals: 14, revenue: 18926, roas: 3.26 },
      { month: "Apr '26", spend: 6100, leads: 173, cpl: 35.26, qualified: 49, cpql: 124.49, deals: 17, revenue: 22814, roas: 3.74 },
      { month: "May '26", spend: 7000, leads: 224, cpl: 31.25, qualified: 63, cpql: 111.11, deals: 22, revenue: 29634, roas: 4.23 },
      { month: "Jun '26", spend: 7200, leads: 241, cpl: 29.88, qualified: 68, cpql: 105.88, deals: 24, revenue: 31947, roas: 4.44 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$127.3K", growth: "+215%" },
    { label: "Closed Clients", value: "97", growth: "+167%" },
    { label: "Cost Per Qualified Lead", value: "$106", growth: "↓43%" },
    { label: "Blended ROAS", value: "3.47x", growth: "" },
  ],
};
