import { CaseStudyData } from "./types";

export const nationalFootwearRetailer: CaseStudyData = {
  slug: "national-footwear-retailer",
  industry: "Fashion & Apparel",
  headline: "How a National Footwear Retailer Generated $2.83M in Attributed Online Revenue and Increased Orders 60% Through Seasonal Paid Advertising",
  subheadline: "MEGA helped a national omnichannel footwear and apparel retailer restructure campaigns by product category and seasonal demand — driving 21,511 online orders, a 3.42x blended ROAS, and a 67% year-over-year revenue increase across an 11-month engagement.",
  heroStats: [
    { value: "11", unit: "months", label: "Campaign Duration" },
    { value: "21,511", unit: "", label: "Online Orders" },
    { value: "$2.83M", unit: "", label: "Attributed Online Revenue" },
  ],
  tags: ["Paid Advertising", "SEO", "Ecommerce", "Fashion & Apparel"],
  company: {
    industry: "Fashion & Apparel — Omnichannel Footwear Retail",
    employees: "~600",
    revenue: "$72M",
    location: "National (United States — 85 retail locations + e-commerce)",
    description: "A national omnichannel footwear and apparel retailer operating 85 brick-and-mortar locations across the United States alongside a growing e-commerce platform. With approximately 600 employees and $72M in annual revenue, the company had established itself as a recognized destination for footwear across categories — athletic, casual, dress, and seasonal styles. However, their digital advertising operated in a silo from their retail business. Paid campaigns ran with flat monthly budgets regardless of seasonal demand spikes like back-to-school or Black Friday. There was no segmentation by product category, margin tier, or inventory level — athletic shoes, dress shoes, and clearance items all competed for the same budget pool. With an average order value around $126 and a prior-year ROAS of just 2.60x on $650K in ad spend, the team knew their e-commerce channel was dramatically underperforming relative to the brand's national footprint and category authority.",
  },
  challenges: [
    {
      title: "Ad Budgets Disconnected From Seasonal Demand",
      description: "Footwear retail follows sharp seasonal curves — back-to-school drives a late-summer surge, fall fashion and cooler weather trigger boot and casual shoe demand, and Black Friday through the holidays represent the single largest revenue window of the year. Spring brings a sandal and athletic footwear uptick, while January and February are reliably slow. Yet the company was spending roughly the same amount every month, overspending during low-intent periods and underspending precisely when high-intent shoppers were actively searching. During the prior year's Black Friday weekend, the brand was routinely outbid by competitors who scaled aggressively — leaving significant revenue on the table during the highest-conversion period of the year.",
    },
    {
      title: "Campaigns Lacked Product and Margin Segmentation",
      description: "All footwear categories were lumped into broad campaigns with no differentiation by product type, margin profile, or inventory priority. Athletic shoes with healthy margins competed for the same budget as discounted clearance styles with razor-thin margins. New seasonal arrivals received no dedicated campaign treatment. There was no distinction between high-AOV dress shoes and entry-price-point casual sneakers. The result was a blended cost per order of $48.46 and a conversion rate of just 3.14% — both well below what a nationally recognized retailer with strong brand equity should achieve. Without margin-aware bidding, the campaigns were optimizing for volume rather than profitability.",
    },
    {
      title: "Online and In-Store Activity Poorly Connected",
      description: "With 85 physical retail locations and a national e-commerce platform, the company had two separate customer ecosystems that rarely informed each other. Paid campaigns drove online traffic with no visibility into store visits or cross-channel purchase behavior. Customers who browsed online and purchased in-store were invisible to the attribution model, making ROAS appear lower than reality and leading to budget cuts on campaigns that were actually driving offline revenue. Retargeting audiences didn't account for in-store purchasers, resulting in wasted ad spend showing ads to customers who had already converted. The disconnect made it impossible to build a unified view of customer value or optimize campaigns holistically across channels.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Measurement Infrastructure & Campaign Restructuring",
      items: [
        "Comprehensive audit of historical campaign performance across the prior 12 months — mapped revenue attribution to seasonal patterns, identified $127K in estimated wasted spend during low-demand periods, and benchmarked conversion rates against national footwear retail industry standards",
        "Implemented deduplicated reporting framework to separate branded search traffic from non-branded prospecting — revealing that 62% of prior attributed revenue was from brand-search clicks that would have converted organically",
        "Built seasonal budget allocation model tied to footwear demand curves: 35% of annual spend allocated to Q4 (Oct–Dec), 20% to back-to-school (Aug–Sep), 25% to spring footwear season (Mar–May), and 20% to off-peak periods with efficiency-focused bidding",
        "Restructured campaigns by footwear category with margin-aware bidding: separate campaigns for athletic, casual/lifestyle, dress/formal, boots/seasonal, and accessories — each with category-specific ROAS floors based on margin profiles",
        "Segmented audiences by lifecycle stage: prospecting (new visitors), engaged browsers (viewed 3+ products), cart abandoners, recent purchasers (cross-sell), and lapsed customers (90+ days) — each with tailored creative and bid strategies",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget across categories, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Enhanced e-commerce tracking implementation with proper add-to-cart attribution, revenue reporting by campaign and product category, and inventory-level signals feeding back into bid automation",
        "Launched initial creative testing suite with 25+ AI-generated ad variations across formats — product-focused, lifestyle, seasonal, and promotional — seeding the algorithm with diverse creative signals from day one",
      ],
    },
    {
      phase: 2,
      months: "31–90 days",
      title: "Product & Audience Optimization",
      items: [
        "Rebuilt campaigns by footwear category with dedicated budgets and ROAS targets — athletic shoes (highest volume, moderate margin), boots and seasonal (high margin, strong Q4), dress/formal (highest AOV, lower volume), and casual/lifestyle (broadest audience, cross-sell potential)",
        "Separated prospecting, remarketing, and existing-customer campaigns with distinct bidding strategies — aggressive CPAs for new customer acquisition, efficiency-focused bids for retargeting, and cross-sell campaigns for existing customers with 60-day purchase windows",
        "Dynamic product feed optimization tied to inventory and margin data — prioritizing high-margin new arrivals, suppressing low-stock clearance items, and adjusting bids based on real-time sell-through rates",
        "AI agents identified underperforming creatives within hours and automatically shifted budget to top performers — compounding small daily optimizations instead of waiting for manual monthly reviews",
        "Scaled AI-generated creative production to 40+ variations per month, testing hooks, seasonal angles, and product photography styles at a pace that would require a dedicated in-house creative team",
        "Built cross-category remarketing sequences: athletic shoe browsers shown complementary accessories, boot purchasers targeted with care products, and dress shoe buyers presented matching belts and bags",
        "When seasonal demand shifted toward fall collections in October, AI agents detected the trend within days and reallocated 28% of budget to boot and cold-weather categories — capturing early-season demand that a traditional agency review cycle would have missed",
        "Continuous budget reallocation between categories and audience segments based on real-time ROAS data — shifting spend from underperforming segments to high-conversion opportunities within hours rather than waiting for end-of-month reporting",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "14,832", growth: "+987%", from: "from 1,364" },
      { label: "Top 10 Rankings", value: "347", growth: "+612%", from: "from 48" },
      { label: "Pages Created", value: "78", growth: "", from: "incl. buying guides, category pages & seasonal content" },
      { label: "Organic Traffic", value: "11,240/mo", growth: "+174%", from: "from 4,102" },
    ],
    monthly: [
      { month: "Sep '25", keywords: 1547, top10: 53, top3: 9, traffic: 4102, pages: 0, avgPos: 42.1, ctr: 1.1 },
      { month: "Oct '25", keywords: 2183, top10: 71, top3: 14, traffic: 4587, pages: 8, avgPos: 39.4, ctr: 1.3 },
      { month: "Nov '25", keywords: 3241, top10: 98, top3: 22, traffic: 5321, pages: 14, avgPos: 36.7, ctr: 1.5 },
      { month: "Dec '25", keywords: 4127, top10: 124, top3: 31, traffic: 5843, pages: 22, avgPos: 34.2, ctr: 1.7 },
      { month: "Jan '26", keywords: 5389, top10: 147, top3: 38, traffic: 6127, pages: 30, avgPos: 31.8, ctr: 1.9 },
      { month: "Feb '26", keywords: 6742, top10: 178, top3: 47, traffic: 6891, pages: 37, avgPos: 29.3, ctr: 2.1 },
      { month: "Mar '26", keywords: 8134, top10: 213, top3: 58, traffic: 7643, pages: 44, avgPos: 27.1, ctr: 2.3 },
      { month: "Apr '26", keywords: 9567, top10: 248, top3: 71, traffic: 8412, pages: 52, avgPos: 25.4, ctr: 2.5 },
      { month: "May '26", keywords: 10923, top10: 279, top3: 86, traffic: 9287, pages: 59, avgPos: 23.8, ctr: 2.7 },
      { month: "Jun '26", keywords: 12347, top10: 312, top3: 98, traffic: 10134, pages: 67, avgPos: 22.1, ctr: 2.9 },
      { month: "Jul '26", keywords: 14832, top10: 347, top3: 112, traffic: 11240, pages: 78, avgPos: 20.6, ctr: 3.1 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$826K" },
      { label: "Total Orders", value: "21,511" },
      { label: "Avg Cost Per Session", value: "$1.44", note: "↓5% from $1.52" },
      { label: "Blended ROAS", value: "3.42x", note: "from 2.60x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Session",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Sep '25: Campaign launch — restructuring phase, audit in progress, minimal optimization
      { month: "Sep '25", spend: 48000, leads: 29143, cpl: 1.65, qualified: 1602, cpql: 29.96, deals: 512, revenue: 67328, roas: 1.40 },
      // Oct '25: Early optimization — category segmentation deploying, fall transition begins
      { month: "Oct '25", spend: 58000, leads: 37419, cpl: 1.55, qualified: 2432, cpql: 23.85, deals: 787, revenue: 103490, roas: 1.78 },
      // Nov '25: BLACK FRIDAY / CYBER MONDAY — first optimized holiday season, massive spend spike
      { month: "Nov '25", spend: 114000, leads: 82714, cpl: 1.38, qualified: 7857, cpql: 14.51, deals: 2612, revenue: 343478, roas: 3.01 },
      // Dec '25: Holiday gifting — strong continued demand, gift cards and last-minute purchases
      { month: "Dec '25", spend: 100000, leads: 70286, cpl: 1.42, qualified: 6888, cpql: 14.52, deals: 2543, revenue: 334404, roas: 3.34 },
      // Jan '26: Post-holiday slowdown — clearance campaigns, lowest seasonal demand
      { month: "Jan '26", spend: 54000, leads: 36571, cpl: 1.48, qualified: 4182, cpql: 12.91, deals: 1289, revenue: 169504, roas: 3.14 },
      // Feb '26: Still slow — spring preview, Valentine's minor bump
      { month: "Feb '26", spend: 53000, leads: 35857, cpl: 1.48, qualified: 3513, cpql: 15.09, deals: 1398, revenue: 183837, roas: 3.47 },
      // Mar '26: Spring launch — new collections, sandal + athletic season starts
      { month: "Mar '26", spend: 68000, leads: 48000, cpl: 1.42, qualified: 5040, cpql: 13.49, deals: 1912, revenue: 251428, roas: 3.70 },
      // Apr '26: Spring footwear peak — strong seasonal demand, warmer weather shopping
      { month: "Apr '26", spend: 80000, leads: 57143, cpl: 1.40, qualified: 6400, cpql: 12.50, deals: 2456, revenue: 322964, roas: 4.04 },
      // May '26: Late spring — wedding season, outdoor events, vacation prep
      { month: "May '26", spend: 84000, leads: 60857, cpl: 1.38, qualified: 6998, cpql: 12.00, deals: 2843, revenue: 373854, roas: 4.45 },
      // Jun '26: Summer peak — sandal season, summer collections, highest efficiency month
      { month: "Jun '26", spend: 88000, leads: 63429, cpl: 1.39, qualified: 7484, cpql: 11.76, deals: 2967, revenue: 390160, roas: 4.43 },
      // Jul '26: Summer continuation — optimization gains sustain strong performance
      { month: "Jul '26", spend: 79000, leads: 52617, cpl: 1.50, qualified: 6314, cpql: 12.51, deals: 2192, revenue: 289553, roas: 3.67 },
    ],
  },
  impact: [
    { label: "Attributed Online Revenue", value: "$2.83M", growth: "+67%" },
    { label: "Total Orders", value: "21,511", growth: "+60%" },
    { label: "Avg Cost Per Order", value: "$38.40", growth: "↓21%" },
    { label: "Blended ROAS", value: "3.42x", growth: "+32%" },
    { label: "Organic Traffic", value: "11,240/mo", growth: "+174%" },
    { label: "Keyword Rankings (Top 10)", value: "347", growth: "+612%" },
  ],
};
