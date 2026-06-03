import { CaseStudyData } from "./types";

export const homeFurnitureEcommerce: CaseStudyData = {
  slug: "home-furniture-ecommerce",
  industry: "Home Furniture",
  headline: "How a Home Furniture Ecommerce Store Scaled Revenue 328% in 7 Months",
  subheadline: "MEGA helped a national online home furniture retailer grow from a 1.58x ROAS to 5.41x, increasing monthly orders from 31 to 110 and generating over $182K in total revenue through AI-powered paid advertising — all while maintaining a lean ad budget starting at under $6K per month.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "$182.6K", unit: "", label: "Total Revenue" },
    { value: "5.41x", unit: "", label: "Peak ROAS" },
  ],
  tags: ["Paid Advertising", "eCommerce", "National"],
  company: {
    industry: "Home Furniture",
    employees: "12",
    revenue: "$850K",
    location: "United States (National eCommerce)",
    description: "A direct-to-consumer home furniture brand specializing in living room, dining room, and bedroom furniture sold exclusively through their online store. The business had grown organically through social media and word-of-mouth referrals but had never cracked profitable paid advertising at scale. Previous ad campaigns managed by a freelance media buyer produced a ROAS hovering around 1.4x-1.7x — leaving virtually no profit margin after product costs, warehousing, and shipping for oversized items. With rising customer acquisition costs and increasing competition from big-box retailers expanding their online presence, the business needed an advertising strategy that could deliver profitable, scalable growth on a modest budget.",
  },
  challenges: [
    {
      title: "Unprofitable Ad Spend and Stagnant ROAS",
      description: "Prior paid campaigns generated a blended ROAS of approximately 1.5x, which barely covered cost of goods sold and shipping — leaving no margin for profit or reinvestment. The previous media buyer reviewed campaigns weekly and adjusted bids manually, a cadence far too slow to react to the rapid performance fluctuations common in furniture ecommerce. With average order values above $290, every lost conversion represented significant revenue left on the table.",
    },
    {
      title: "High-Consideration Purchase Cycle with Excessive Cart Abandonment",
      description: "Home furniture purchases — sofas averaging $380, dining sets around $320, bedroom pieces at $275 — require extended research and comparison shopping. Customers frequently browsed for 7-14 days before purchasing, and the existing retargeting approach was limited to a single generic remarketing audience. Cart abandonment exceeded 74%, with no sequenced recovery strategy or urgency-driven messaging to re-engage shoppers during their decision window.",
    },
    {
      title: "Limited Creative Testing on a Constrained Budget",
      description: "Running fewer than $6K per month in ad spend, the business could only afford 3-4 ad creatives from their previous provider, leading to rapid audience fatigue within 2-3 weeks. Click-through rates declined month over month as the same visuals and copy were shown repeatedly. Without a cost-effective way to produce and test new creative variations, the campaigns were trapped in a cycle of diminishing returns.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Full-Funnel Rebuild",
      items: [
        "Comprehensive audit of existing ad account — discovered that 72% of prior spend was concentrated in two broad audiences with overlapping reach, cannibalizing each other and inflating costs",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly manual reviews",
        "Rebuilt campaign architecture with distinct prospecting, retargeting, and retention layers — each with dedicated budgets, creative strategies, and audience exclusions to eliminate overlap",
        "Installed granular conversion tracking across the full purchase funnel: product page views, add-to-cart events, checkout initiations, and completed purchases with revenue and AOV attribution",
        "Launched initial creative testing suite with 12 AI-generated ad variations across lifestyle imagery, room-scene carousels, and product detail formats — delivering 3x more creative diversity than the previous approach with zero production costs",
        "Built sequential retargeting campaigns targeting cart abandoners at 2-hour, 24-hour, and 5-day intervals with progressively stronger messaging and social proof elements",
        "Established daily tracking dashboards for cost per visit, add-to-cart rate, cart-to-order conversion, AOV, and ROAS with automated alerts for performance anomalies",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Creative Scaling & Audience Refinement",
      items: [
        "AI agents analyzed 30-day performance data and identified that room-scene lifestyle imagery outperformed product-only shots by 1.8x on conversion rate — triggering a strategic creative pivot",
        "Scaled AI-generated creative production to 20+ active variations, testing different hooks (comfort-focused, design-focused, value-focused), visual styles (minimalist, warm-toned, staged rooms), and offer structures (free shipping thresholds, bundle pricing)",
        "AI agents identified underperforming creatives within hours and automatically shifted budget to top performers — compounding small optimizations daily instead of waiting for monthly creative refreshes",
        "Expanded audience targeting using purchase behavior signals — layered interest-based targeting with home-related life events (recent movers, home buyers, apartment furnishing) for higher-intent prospecting",
        "Launched lookalike audiences seeded from highest-AOV customers to attract shoppers with similar spending patterns and furniture preferences",
        "Cart abandonment recovery rate improved from 5% to 14% through sequential retargeting with scarcity messaging and customer review integration",
        "Pre-built holiday campaign infrastructure for November and December — separate creative suites, increased budget allocation plans, and gift-oriented messaging ready for deployment",
      ],
    },
    {
      phase: 3,
      months: "60+ days",
      title: "Holiday Push, Scale & Compounding Returns",
      items: [
        "Deployed holiday campaigns with 25+ seasonal creatives — gift guides, room transformation themes, and New Year refresh messaging rotated throughout November through January",
        "AI agents automatically scaled daily budget allocation during high-conversion windows (evenings, weekends) and pulled back during low-intent periods, maximizing return on every dollar spent",
        "Real-time performance monitoring detected and responded to competitive shifts and seasonal demand changes within hours rather than the typical agency cycle of days or weeks",
        "Implemented post-purchase cross-sell campaigns — dining table buyers seeing matching chair ads 21 days later, sofa buyers receiving accent furniture suggestions — increasing repeat purchase rate",
        "With 25+ creatives in active rotation at this budget level, the campaign maintained fresh ad experiences and avoided the creative fatigue that plagued previous efforts",
        "Continuous AI optimization compounded daily improvements across bidding, targeting, and budget allocation — producing a ROAS trajectory that climbed from 1.58x to 5.41x over the engagement period",
        "Budget allocation adjusted monthly based on seasonal patterns — increased spend during holiday gifting season and spring home refresh while maintaining floor spend during quieter months",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$49.8K" },
      { label: "Add to Carts", value: "1,545" },
      { label: "Avg Cost Per Cart", value: "$32.21", note: "↓62% reduction" },
      { label: "Orders", value: "552" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      { month: "Sep '25", spend: 5765, leads: 1203, cpl: 4.79, qualified: 94, cpql: 61.33, deals: 31, revenue: 9109, roas: 1.58 },
      { month: "Oct '25", spend: 6200, leads: 1547, cpl: 4.01, qualified: 127, cpql: 48.82, deals: 46, revenue: 14084, roas: 2.27 },
      { month: "Nov '25", spend: 8500, leads: 2793, cpl: 3.04, qualified: 218, cpql: 38.99, deals: 86, revenue: 27030, roas: 3.18 },
      { month: "Dec '25", spend: 8200, leads: 3200, cpl: 2.56, qualified: 248, cpql: 33.06, deals: 93, revenue: 30504, roas: 3.72 },
      { month: "Jan '26", spend: 7100, leads: 3410, cpl: 2.08, qualified: 268, cpql: 26.49, deals: 90, revenue: 30104, roas: 4.24 },
      { month: "Feb '26", spend: 6800, leads: 3680, cpl: 1.85, qualified: 278, cpql: 24.46, deals: 96, revenue: 32844, roas: 4.83 },
      { month: "Mar '26", spend: 7200, leads: 4050, cpl: 1.78, qualified: 312, cpql: 23.08, deals: 110, revenue: 38952, roas: 5.41 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$182.6K", growth: "+328%" },
    { label: "Total Orders", value: "552", growth: "+255%" },
    { label: "Average Order Value", value: "$330.84", growth: "" },
    { label: "Blended ROAS", value: "3.67x", growth: "+132% from 1.58x baseline" },
  ],
};
