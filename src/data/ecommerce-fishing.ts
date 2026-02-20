import { CaseStudyData } from "./types";

export const ecommerceFishing: CaseStudyData = {
  slug: "ecommerce-fishing",
  industry: "Ecommerce",
  headline: "How a National Fishing Gear Brand Scaled to $798K in Ad-Attributed Revenue",
  subheadline: "MEGA helped a direct-to-consumer fishing equipment retailer optimize seasonal ad spend, reduce cost per acquisition by 31%, and generate 3,255 orders over 9 months — including a record Black Friday that drove 21% of total campaign revenue.",
  heroStats: [
    { value: "9", unit: "months", label: "Campaign Duration" },
    { value: "3,255", unit: "", label: "Orders Attributed" },
    { value: "$798", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "Seasonal Strategy"],
  company: {
    industry: "Ecommerce — Outdoor Fishing Clothing & Equipment",
    employees: "23",
    revenue: "$4.7M",
    location: "National (USA — DTC)",
    description: "A direct-to-consumer ecommerce brand specializing in premium fishing clothing, rods, reels, tackle, and accessories for serious anglers. The company had built a loyal customer base through quality product curation — averaging $245 per order — but their paid advertising was underperforming. Campaigns ran flat budgets year-round despite fishing being one of the most seasonal industries in outdoor retail. There was no segmentation between bass anglers, fly fishermen, saltwater enthusiasts, or ice fishing customers. And critically, they were leaving money on the table during Q4 — treating Black Friday and holiday gifting as an afterthought despite fishing gear being a top gift category for outdoor enthusiasts. The ownership team wanted to scale revenue without sacrificing margins, which meant smarter spend allocation rather than simply spending more.",
  },
  challenges: [
    {
      title: "Flat Ad Spend Ignoring Massive Seasonal Demand Swings",
      description: "Fishing gear demand follows extreme seasonal patterns — spring opener weekends can see 4-5x the traffic of a January Tuesday. Yet the brand was spending a flat $20,000 monthly regardless of season. During peak spring bass season, they were being outbid by competitors ramping up spend. During slower months, they were burning budget on low-intent traffic. There was no budget framework tied to fishing calendar events, regional season openers, or weather-driven demand spikes.",
    },
    {
      title: "Zero Q4 Strategy Despite Massive Gifting Opportunity",
      description: "Fishing equipment consistently ranks among the top outdoor gift categories during the holiday season, yet the brand had no Black Friday, Cyber Monday, or holiday gifting strategy. Their November and December campaigns were identical to September — same creative, same audiences, same offers. Competitors were running gift guides, bundle promotions, and early-bird deals while this brand sat on the sidelines. The result: Q4 revenue was actually lower than Q3 despite the massive ecommerce spending surge across the industry.",
    },
    {
      title: "Generic Campaigns With No Audience or Product Segmentation",
      description: "All products were promoted through broad 'fishing gear' campaigns to a single audience of 'fishing enthusiasts.' Bass anglers browsing crankbaits were seeing fly rod ads. Ice fishing customers in Minnesota were getting saltwater lure promotions. Each fishing discipline has distinct gear needs, price points, and seasonal windows, but the lack of segmentation meant creative relevance was low, click-through rates were poor, and the cost per acquisition sat at $62 — well above the $35-45 range that top-performing outdoor DTC brands were achieving.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Seasonal Framework",
      items: [
        "Full audit of 18 months of historical campaign data — mapped revenue to fishing calendar, identified seasonal patterns, and flagged budget waste during low-intent periods",
        "Built seasonal budget allocation model: 55% of annual spend allocated to peak fishing months (Apr-Aug), 20% to shoulder seasons (Mar, Sep-Oct), 25% to Q4 holiday/gifting campaigns",
        "Audience segmentation by fishing discipline: created separate campaigns for bass/freshwater, fly fishing, saltwater/offshore, and general outdoor/gifting audiences",
        "Product catalog segmentation by price tier: separated campaigns for high-ticket items ($200+ rods, reels) vs. consumables (lures, line, tackle) vs. apparel — each with different ROAS targets",
        "Implemented enhanced ecommerce tracking with proper attribution windows for fishing gear (7-14 day click window for considered purchases)",
        "Dynamic product feed optimization — seasonal hero products, inventory-aware bidding, and fishing-calendar-aligned product descriptions",
        "Negative keyword overhaul — removed DIY repair, used equipment, and bargain/clearance queries eating budget without converting at acceptable margins",
        "Built retargeting audiences segmented by product category viewed, cart abandonment stage, and days since last purchase for repeat buyer campaigns",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Seasonal Campaign Execution",
      items: [
        "Launched spring opener campaigns timed to bass season across key fishing states — creative featured pre-season gear prep messaging with urgency around season start dates",
        "Product-specific campaigns for seasonal bestsellers: spring rod/reel combos, wader and boot packages, tackle box refresh bundles",
        "Geographic bid modifiers based on regional fishing season timing — ramped spend in Southern states first (earlier seasons), then Midwest and Northeast as they opened",
        "Cross-sell and upsell campaign layers: rod buyers targeted with reel recommendations, wader buyers with boot suggestions, tackle buyers with storage solutions",
        "Email list integration for suppression (don't advertise products they just bought) and lookalike expansion from highest-LTV customers",
        "Performance-based budget reallocation: shifted spend from underperforming generic campaigns to high-ROAS product-specific and audience-specific campaigns weekly",
        "A/B testing seasonal creative: lifestyle photography (anglers on water) vs. product-focused (gear detail shots) vs. UGC-style customer photos",
        "Dynamic weather-responsive campaigns — increased bids during ideal fishing weather windows in top-revenue regions",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Peak Season & Q4 Preparation",
      items: [
        "Peak summer budget scaling with aggressive bidding on high-converting seasonal terms during the July-August fishing peak",
        "Built comprehensive Q4 strategy: Black Friday doorbuster campaigns, Cyber Monday digital-only deals, holiday gift guide landing pages, and 'Gifts for Anglers' audience targeting",
        "Created tiered Black Friday offer structure: loss-leader deals on entry products to drive new customers, premium bundles for existing customers, and early-access VIP deals for email subscribers",
        "Holiday gifting audience expansion: targeted non-anglers searching for gifts for fishermen — completely different creative, messaging, and landing pages than core fishing audience",
        "Retargeting intensification for Q4: abandoned cart sequences with holiday urgency, browse-abandonment with gift suggestion angles, and win-back campaigns for lapsed customers",
        "Inventory-aware campaign management — paused ads for low-stock items, increased bids on overstocked seasonal items, and created clearance campaigns for end-of-season gear",
        "Post-purchase review and UGC campaigns to build social proof heading into the holiday push",
        "Customer lifetime value bidding strategies prioritizing long-term customer acquisition over short-term ROAS during peak season",
      ],
    },
  ],
  // No SEO — paid advertising engagement only
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$194.8K" },
      { label: "Total Orders", value: "3,255" },
      { label: "Avg Cost Per Acquisition", value: "$59.84", note: "↓31% from $86.70" },
      { label: "Blended ROAS", value: "4.10x", note: "from 2.87x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Mar 2025: Spring pre-season — anglers gearing up, licenses renewing. Budget starting to ramp.
      { month: "Mar 2025", spend: 16847, leads: 8423, cpl: 2.00, qualified: 923, cpql: 18.25, deals: 247, revenue: 60247, roas: 3.58 },
      // Apr 2025: Peak spring — bass/trout openers across the country. Highest fishing intent.
      { month: "Apr 2025", spend: 24378, leads: 12834, cpl: 1.90, qualified: 1487, cpql: 16.39, deals: 413, revenue: 101534, roas: 4.17 },
      // May 2025: Late spring peak — sustained high demand, tournament season.
      { month: "May 2025", spend: 26123, leads: 14247, cpl: 1.83, qualified: 1634, cpql: 15.99, deals: 447, revenue: 109847, roas: 4.21 },
      // Jun 2025: Early summer — vacation fishing trips, peak outdoor activity.
      { month: "Jun 2025", spend: 24891, leads: 13178, cpl: 1.89, qualified: 1489, cpql: 16.72, deals: 398, revenue: 97423, roas: 3.91 },
      // Jul 2025: Mid-summer — still strong but ad costs rising as competitors ramp.
      { month: "Jul 2025", spend: 22734, leads: 11367, cpl: 2.00, qualified: 1247, cpql: 18.23, deals: 341, revenue: 83247, roas: 3.66 },
      // Aug 2025: Late summer — back-to-school impact, fishing activity declining.
      { month: "Aug 2025", spend: 18247, leads: 8734, cpl: 2.09, qualified: 934, cpql: 19.54, deals: 248, revenue: 60734, roas: 3.33 },
      // Sep 2025: Fall transition — fishing slowing but Q4 prep begins. Retargeting audience building.
      { month: "Sep 2025", spend: 15234, leads: 6891, cpl: 2.21, qualified: 723, cpql: 21.07, deals: 189, revenue: 46247, roas: 3.04 },
      // Oct 2025: Q4 ramp — early holiday campaigns, gift guide prospecting, spend increasing toward BF.
      { month: "Oct 2025", spend: 19478, leads: 9234, cpl: 2.11, qualified: 1034, cpql: 18.84, deals: 278, revenue: 68123, roas: 3.50 },
      // Nov 2025: BLACK FRIDAY + CYBER MONDAY — peak ecom month. Doorbusters, gift bundles, massive intent.
      { month: "Nov 2025", spend: 26847, leads: 16891, cpl: 1.59, qualified: 2478, cpql: 10.83, deals: 694, revenue: 170247, roas: 6.34 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$798K", growth: "+43%" },
    { label: "Total Orders", value: "3,255", growth: "+38%" },
    { label: "Cost Per Acquisition", value: "$59.84", growth: "↓31%" },
    { label: "Blended ROAS", value: "4.10x", growth: "+43%" },
  ],
};
