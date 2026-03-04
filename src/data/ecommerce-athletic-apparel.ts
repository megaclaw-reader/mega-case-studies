import { CaseStudyData } from "./types";

export const ecommerceAthleticApparel: CaseStudyData = {
  slug: "ecommerce-athletic-apparel",
  industry: "Ecommerce",
  headline: "How a DTC Athletic Apparel Brand Drove $637K in Revenue With Smarter Ad Spend",
  subheadline: "MEGA helped a direct-to-consumer athletic clothing brand targeting 18–35 year olds optimize seasonal paid campaigns, reduce cost per acquisition by 34%, and generate 9,147 orders over 7 months — with a record Black Friday that accounted for 19% of total revenue.",
  heroStats: [
    { value: "7", unit: "months", label: "Campaign Duration" },
    { value: "9,147", unit: "", label: "Orders Attributed" },
    { value: "$637", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "DTC Strategy"],
  company: {
    industry: "Ecommerce — Athletic Clothing for Men & Women",
    employees: "31",
    revenue: "$3.2M",
    location: "National (USA — DTC)",
    description: "A direct-to-consumer athletic apparel brand designing performance clothing for men and women aged 18–35 — think leggings, training shorts, compression tops, and athleisure basics. The brand had built a growing following through organic social and word-of-mouth, with an average order value around $68. But their paid advertising was stagnant. Campaigns ran identical budgets month after month regardless of seasonal demand shifts. There was no differentiation between audiences — someone browsing men's training shorts saw the same ads as someone looking at women's leggings. And despite athletic apparel being one of the strongest categories during back-to-school and Black Friday, they had no seasonal strategy in place. The team needed a smarter approach to paid media that matched their ambitious growth targets without blowing up acquisition costs.",
  },
  challenges: [
    {
      title: "Flat Budget Allocation Ignoring Peak Athletic Apparel Seasons",
      description: "Athletic apparel demand surges predictably — back-to-school in August and September, New Year's fitness resolutions in January, and the massive Black Friday/Cyber Monday ecommerce wave in November. Yet the brand was spending a flat $25,000 per month regardless of season. During back-to-school, competitors were outbidding them for high-intent shoppers. During slower months like early summer, they were burning budget on low-conversion traffic. There was no framework connecting ad spend to the natural buying rhythms of their 18–35 demographic.",
    },
    {
      title: "No Audience Segmentation Across Gender, Product, or Intent",
      description: "Every campaign targeted a single broad audience of 'fitness enthusiasts.' Men shopping for compression shorts saw women's leggings ads. Customers who had already purchased were being served the same acquisition campaigns as first-time visitors. There was no segmentation by gender, product category (performance vs. athleisure), purchase stage, or customer lifetime value. This lack of targeting drove click-through rates below 1.2% and pushed cost per acquisition to $14.80 — nearly double what efficient DTC apparel brands achieve.",
    },
    {
      title: "Zero Q4 Strategy Despite Massive Gifting and Self-Purchase Opportunity",
      description: "Athletic apparel is one of the top-performing ecommerce categories during Black Friday and the holiday season — both as gifts and self-purchases driven by New Year's fitness motivation. Yet the brand had no seasonal promotional strategy, no gift-oriented creative, and no urgency-driven campaigns for the biggest shopping days of the year. Their November performance was actually weaker than October, leaving hundreds of thousands of dollars in potential revenue on the table.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audit, Segmentation & Seasonal Framework",
      items: [
        "Full audit of 12 months of historical campaign data — identified wasted spend during low-intent summer weeks and missed opportunities during back-to-school and Q4 peaks",
        "Built seasonal budget allocation model: 35% allocated to peak months (Aug-Sep back-to-school, Nov Black Friday), 40% to steady-state months, 25% to ramp-up and shoulder periods",
        "Created audience segmentation framework: separate campaigns for men's performance, women's performance, athleisure/lifestyle, and gift buyers — each with tailored creative and landing pages",
        "Product catalog segmentation by category and margin: high-margin leggings and compression wear received higher ROAS targets vs. basics and accessories",
        "Implemented enhanced ecommerce tracking with proper add-to-cart and checkout attribution across the full purchase funnel",
        "Dynamic product feed optimization — seasonal hero products featured prominently, size-aware inventory management to prevent ads for out-of-stock sizes",
        "Built retargeting audiences segmented by product viewed, cart abandonment stage, and days since last visit with frequency caps to prevent ad fatigue",
        "Competitive creative audit — analyzed top DTC athletic brands' ad strategies to identify gaps in messaging and positioning opportunities",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Campaign Launch & Back-to-School Push",
      items: [
        "Launched segmented prospecting campaigns by gender and product category with tailored creative showing real athletes in training environments",
        "Back-to-school campaign series targeting college-aged demographic: dorm essentials, gym wardrobe refresh, and campus athleisure positioning",
        "Geographic bid adjustments based on college town density and regional climate patterns affecting athletic clothing demand",
        "Cross-sell campaign layers: leggings buyers targeted with matching sports bras, shorts buyers with performance tees, new customers with starter bundle offers",
        "Loyalty audience suppression to avoid wasting acquisition budget on existing customers, paired with separate retention campaigns at lower spend",
        "Performance-based budget reallocation: weekly reviews shifting spend from underperforming audiences to high-ROAS segments",
        "A/B testing creative formats: lifestyle photography vs. product flat-lays vs. UGC-style workout content — UGC outperformed by 23% on click-through rate",
        "Size-inclusive messaging testing — campaigns featuring diverse body types showed 18% higher conversion rates across all demographics",
      ],
    },
    {
      phase: 3,
      months: "90–210 days",
      title: "Q4 Execution & Black Friday Domination",
      items: [
        "Built comprehensive Q4 strategy: early-access Black Friday previews, Cyber Monday flash deals, holiday gift guide campaigns, and New Year's resolution pre-sell",
        "Created tiered Black Friday offer structure: doorbuster deals on bestselling leggings to drive volume, premium bundle offers for existing customers, and VIP early access for email subscribers",
        "Holiday gifting audience expansion: targeted gift-givers with 'Gifts for the Gym Lover' creative — completely different messaging than core fitness audience",
        "Retargeting intensification for November: abandoned cart sequences with countdown urgency, browse-abandonment with gift suggestion angles, and win-back campaigns for lapsed customers from earlier months",
        "Budget surge allocation: November received 28% above average monthly spend to capture Black Friday and Cyber Monday demand",
        "Post-Black Friday retention campaigns: thank-you sequences, review solicitation, and January preview teasers to maintain momentum into New Year's resolution season",
        "Inventory-aware campaign management — real-time pausing of ads for sizes and styles running low, reallocation to overstocked items",
        "End-of-engagement performance review and handoff documentation for continued optimization",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$208.2K" },
      { label: "Total Orders", value: "9,647" },
      { label: "Avg Cost Per Acquisition", value: "$22.77", note: "↓34% from $34.52" },
      { label: "Blended ROAS", value: "3.06x", note: "from 2.14x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Launch month — foundational campaigns, audience building. Early summer steady state.
      { month: "Jun 2025", spend: 25340, leads: 31675, cpl: 0.80, qualified: 3484, cpql: 7.27, deals: 1023, revenue: 68541, roas: 2.71 },
      // Jul 2025: Optimization kicking in, summer training season. Steady improvement.
      { month: "Jul 2025", spend: 26780, leads: 35173, cpl: 0.76, qualified: 3869, cpql: 6.92, deals: 1148, revenue: 78064, roas: 2.91 },
      // Aug 2025: Back-to-school spike — college students, gym wardrobes. Budget ramps up.
      { month: "Aug 2025", spend: 33470, leads: 47814, cpl: 0.70, qualified: 5259, cpql: 6.37, deals: 1573, revenue: 109612, roas: 3.27 },
      // Sep 2025: Back-to-school continued + fall training. Still elevated.
      { month: "Sep 2025", spend: 31215, leads: 41620, cpl: 0.75, qualified: 4578, cpql: 6.82, deals: 1387, revenue: 95901, roas: 3.07 },
      // Oct 2025: Shoulder month — building Q4 audiences, steady performance.
      { month: "Oct 2025", spend: 24890, leads: 31112, cpl: 0.80, qualified: 3422, cpql: 7.27, deals: 1034, revenue: 72380, roas: 2.91 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — peak ecom month. Massive revenue spike.
      { month: "Nov 2025", spend: 38175, leads: 63625, cpl: 0.60, qualified: 7635, cpql: 5.00, deals: 2214, revenue: 159408, roas: 4.18 },
      // Dec 2025: Holiday tail + early New Year's resolution campaigns. Winding down but still strong.
      { month: "Dec 2025", spend: 28380, leads: 37842, cpl: 0.75, qualified: 4163, cpql: 6.82, deals: 1268, revenue: 89014, roas: 3.14 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$672.9K", growth: "+43%" },
    { label: "Total Orders", value: "9,147", growth: "+38%" },
    { label: "Cost Per Acquisition", value: "$22.77", growth: "↓34%" },
    { label: "Blended ROAS", value: "3.23x", growth: "+43%" },
  ],
};
