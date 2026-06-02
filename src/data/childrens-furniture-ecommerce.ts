import { CaseStudyData } from "./types";

export const childrensFurnitureEcommerce: CaseStudyData = {
  slug: "childrens-furniture-ecommerce",
  industry: "Children's Furniture",
  headline: "How a Children's Furniture Ecommerce Brand Grew Revenue 318% in 9 Months",
  subheadline: "MEGA helped a national online children's furniture retailer increase orders from 84 to 317 per month, reduce cost per cart by 64%, and drive $410K in revenue through AI-powered paid advertising — with a record-breaking Black Friday that generated over $77K in a single month.",
  heroStats: [
    { value: "9", unit: "months", label: "Partnership Duration" },
    { value: "$410K", unit: "", label: "Total Revenue" },
    { value: "3.68x", unit: "", label: "Blended ROAS" },
  ],
  tags: ["Paid Advertising", "eCommerce", "National"],
  company: {
    industry: "Children's Furniture",
    employees: "18",
    revenue: "$1.2M",
    location: "United States (National eCommerce)",
    description: "A direct-to-consumer children's furniture brand selling cribs, toddler beds, dressers, bookshelves, and nursery sets through their online store. The business had built a loyal following through word-of-mouth and organic social media but had struggled to scale paid advertising profitably. Previous ad campaigns managed by a traditional agency produced inconsistent returns, with ROAS hovering around 1.5x-1.8x — barely breaking even after fulfillment costs. With increasing competition from mass-market retailers moving into the premium children's furniture space, they needed a smarter approach to paid advertising that could deliver consistent, profitable growth without burning through their budget on underperforming creatives.",
  },
  challenges: [
    {
      title: "Inconsistent Ad Performance and Low ROAS",
      description: "Prior paid campaigns were generating a blended ROAS of approximately 1.6x, which left almost no margin after product costs, shipping, and fulfillment. The previous agency refreshed creatives monthly and reviewed performance on a weekly call cadence — far too slow to catch underperforming ads before they consumed significant budget. Seasonal opportunities like back-to-school and holiday gifting were being missed due to delayed campaign adjustments.",
    },
    {
      title: "High Average Order Value Creating Long Consideration Cycles",
      description: "Children's furniture purchases — cribs averaging $280, dressers around $220, toddler beds at $180 — involve multi-day or multi-week research by parents. The existing retargeting strategy was rudimentary, losing potential customers during their decision-making window. Cart abandonment rates exceeded 78%, well above the ecommerce average, with no systematic approach to recovery or nurture sequences.",
    },
    {
      title: "Creative Fatigue and Limited Testing Capacity",
      description: "The business was running the same 4-5 ad creatives for months at a time, leading to audience fatigue, declining click-through rates, and rising acquisition costs. With the previous agency charging production fees per creative, testing new angles and formats was cost-prohibitive at their budget level. They needed a way to test more creative variations without eating into their media spend.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Campaign Restructure",
      items: [
        "Full audit of historical ad performance — identified that 68% of prior spend went to just 3 ad sets with declining engagement, while potentially high-performing audiences were starved of budget",
        "Installed comprehensive conversion tracking across the full purchase funnel: page views, product views, add-to-cart events, checkout initiations, and completed purchases with revenue attribution",
        "Rebuilt campaign architecture separating prospecting (new customers) from retargeting (site visitors, cart abandoners, past purchasers) with distinct budget allocations and creative strategies",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the previous weekly-review agency cadence with real-time adjustments",
        "Launched initial creative testing suite with 15 AI-generated ad variations across static images, carousels, and short-form video — giving the algorithm 3-4x more creative diversity than the previous agency provided, with zero production costs eating into media spend",
        "Built dynamic retargeting campaigns showing specific products viewed, with sequential messaging for cart abandoners at 1-hour, 24-hour, and 72-hour intervals",
        "Established baseline metrics: cost per visit, add-to-cart rate, cart-to-order conversion rate, AOV, and ROAS tracked daily with automated alerting for anomalies",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Creative Scaling & Audience Optimization",
      items: [
        "Reviewed 30-day performance data — AI agents identified that nursery bundle messaging outperformed single-product ads by 2.3x on conversion rate, triggering a strategic shift toward bundle-focused creative",
        "Scaled AI-generated creative production to 25+ active variations per month, testing hooks (safety-focused, design-focused, value-focused), formats (lifestyle imagery, product close-ups, user-generated style), and offers (free shipping thresholds, bundle discounts)",
        "AI agents identified winning creative patterns and automatically generated new iterations — keeping campaigns fresh while competitors recycled the same handful of ads month after month",
        "Expanded audience targeting based on purchase data signals — layered behavioral targeting with life-stage indicators (expecting parents, recent movers, nursery planners) for higher-intent prospecting",
        "Implemented dynamic creative optimization allowing the algorithm to mix and match headlines, images, and calls-to-action for personalized ad experiences",
        "Launched lookalike audiences built from highest-AOV purchasers to attract customers with similar spending behavior",
        "Cart abandonment recovery rate improved from 4% to 11% through sequential retargeting with urgency-based and social-proof messaging",
      ],
    },
    {
      phase: 3,
      months: "60+ days",
      title: "Scale, Seasonal Optimization & Compounding Growth",
      items: [
        "With 30+ creatives in active rotation, the campaign avoided creative fatigue entirely — AI optimization compounded daily improvements across bidding, targeting, and budget allocation",
        "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks",
        "Pre-built and tested holiday campaign infrastructure 6 weeks ahead of Black Friday/Cyber Monday — separate creative suites, landing page variants, and budget surge plans ready to deploy",
        "AI agents automatically scaled budget allocation during high-conversion windows and pulled back during low-intent periods, maximizing return on every dollar spent",
        "Implemented post-purchase upsell and cross-sell campaigns (e.g., crib buyers seeing matching dresser ads 30 days later) to increase customer lifetime value",
        "Continuous audience refinement based on purchase patterns — AI models identified that weekend evening sessions converted at 1.4x the weekday average, shifting bid modifiers accordingly",
        "Budget allocation optimized monthly based on seasonal demand patterns — increased spend during back-to-school (August), holiday gifting (November-December), and spring nursery prep (February-March)",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$111.3K" },
      { label: "Add to Carts", value: "4,126" },
      { label: "Avg Cost Per Cart", value: "$26.98", note: "↓64% reduction" },
      { label: "Orders", value: "2,006" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      { month: "Jul '25", spend: 10000, leads: 2857, cpl: 3.50, qualified: 200, cpql: 50.00, deals: 84, revenue: 15792, roas: 1.58 },
      { month: "Aug '25", spend: 10500, leads: 3387, cpl: 3.10, qualified: 254, cpql: 41.34, deals: 117, revenue: 22815, roas: 2.17 },
      { month: "Sep '25", spend: 10200, leads: 3643, cpl: 2.80, qualified: 299, cpql: 34.11, deals: 138, revenue: 27462, roas: 2.69 },
      { month: "Oct '25", spend: 11800, leads: 5087, cpl: 2.32, qualified: 397, cpql: 29.72, deals: 197, revenue: 40188, roas: 3.41 },
      { month: "Nov '25", spend: 19000, leads: 8636, cpl: 2.20, qualified: 734, cpql: 25.89, deals: 370, revenue: 77330, roas: 4.07 },
      { month: "Dec '25", spend: 15500, leads: 7381, cpl: 2.10, qualified: 561, cpql: 27.63, deals: 289, revenue: 61557, roas: 3.97 },
      { month: "Jan '26", spend: 10800, leads: 6353, cpl: 1.70, qualified: 432, cpql: 25.00, deals: 218, revenue: 42946, roas: 3.98 },
      { month: "Feb '26", spend: 11500, leads: 6900, cpl: 1.67, qualified: 573, cpql: 20.07, deals: 276, revenue: 56028, roas: 4.87 },
      { month: "Mar '26", spend: 12000, leads: 7765, cpl: 1.55, qualified: 676, cpql: 17.75, deals: 317, revenue: 65936, roas: 5.49 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$410.1K", growth: "+318%" },
    { label: "Total Orders", value: "2,006", growth: "+277%" },
    { label: "Average Order Value", value: "$204.41", growth: "" },
    { label: "Blended ROAS", value: "3.68x", growth: "+130% from 1.6x baseline" },
  ],
};
