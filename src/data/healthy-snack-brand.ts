import { CaseStudyData } from "./types";

export const healthySnackBrand: CaseStudyData = {
  slug: "healthy-snack-brand",
  industry: "Ecommerce",
  headline: "How a Healthy Snack Brand Went From Zero Ads to 3.6x ROAS in 5 Months",
  subheadline: "MEGA took a direct-to-consumer healthy snack brand with no paid advertising history and built a profitable ad engine from scratch — scaling from first-ever campaigns to 3.6x ROAS, generating $107K in ad-attributed revenue and 2,392 orders across 5 months.",
  heroStats: [
    { value: "3.6", unit: "x", label: "ROAS by Month 5" },
    { value: "2,392", unit: "", label: "Orders Generated" },
    { value: "$107", unit: "K", label: "Ad Revenue" },
  ],
  tags: ["Paid Advertising", "Ecommerce", "DTC"],
  company: {
    industry: "Ecommerce — Healthy Snacks & Functional Foods",
    employees: "12",
    revenue: "$1.8M",
    location: "National (USA — DTC, HQ: Boulder, CO)",
    description: "A direct-to-consumer healthy snack brand offering protein bars, nut mixes, granola clusters, and dried fruit blends — all made with clean-label ingredients and no artificial additives. The brand had built a loyal organic following through farmers markets, word-of-mouth, and a small but passionate customer base who loved their subscription variety boxes. Average order value hovered around $45 with strong repeat purchase rates. Despite having a well-designed online store and a product line with genuine consumer demand, they had never invested a single dollar in paid advertising. All growth to date was organic — social media posts, email to existing customers, and referrals. The founders knew paid ads could accelerate growth but had no internal expertise and were cautious about spending money without a clear path to profitability. They came to MEGA looking for a partner who could build their paid advertising program from the ground up — with a focus on sustainable, profitable growth rather than vanity metrics.",
  },
  challenges: [
    {
      title: "Zero Paid Advertising History — Starting From Absolute Scratch",
      description: "Unlike most engagements where MEGA inherits existing campaigns to optimize, this brand had never run a single paid ad. There were no historical performance benchmarks, no audience data from prior campaigns, no conversion tracking infrastructure, and no creative assets designed for advertising. Everything needed to be built from zero — pixel installation, conversion event setup, product feed configuration, audience strategy, creative production, and campaign architecture. The lack of historical data also meant the advertising algorithms had no purchase signals to learn from, requiring a longer-than-usual learning phase before campaigns could optimize toward buyers rather than browsers.",
    },
    {
      title: "Crowded DTC Snack Market With Established Competitors Dominating Ad Auctions",
      description: "The healthy snack category online is fiercely competitive. Dozens of well-funded DTC brands with dedicated marketing teams and six-figure monthly ad budgets have been advertising for years, building massive retargeting pools and algorithmic purchase data. Entering this auction as a brand-new advertiser with no historical signals meant higher costs per click, lower ad relevance scores, and an inherently disadvantaged position in automated bidding. The brand needed a strategy that could compete without matching competitors' budgets — finding underserved audience niches and high-intent segments that larger brands were overlooking.",
    },
    {
      title: "Subscription Model Required Different Funnel Thinking",
      description: "A significant portion of the brand's revenue came from subscription variety boxes — customers signing up for recurring monthly deliveries. This subscription model meant the true value of a customer wasn't captured in a single first-order ROAS calculation. The brand could afford to acquire customers at a higher initial cost if those customers converted to subscribers with a 6-month average lifetime. But without historical subscription conversion data from paid channels, it was unclear what percentage of ad-acquired customers would subscribe versus making one-time purchases. Campaign optimization needed to account for both immediate profitability and long-term customer value — a balance that required careful measurement infrastructure from day one.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Month 1",
      title: "Foundation Build & Initial Testing",
      items: [
        "Complete technical infrastructure setup — installed conversion tracking pixels, configured purchase and add-to-cart events, set up product catalog feeds with all SKUs properly categorized by product type (bars, mixes, granola, dried fruit, bundles)",
        "Built campaign architecture from scratch with separate structures for prospecting cold audiences, retargeting site visitors, and re-engaging existing email subscribers",
        "Created initial audience strategy targeting health-conscious consumers, fitness enthusiasts, clean-eating advocates, and gift shoppers — all broad enough to gather data during the learning phase",
        "Produced first round of ad creative: lifestyle photography of snacks in everyday settings (gym bags, office desks, hiking trails), product detail shots highlighting clean ingredients, and customer testimonial snippets",
        "Launched conservative test campaigns across multiple audience segments with small daily budgets to identify which combinations of audience and creative showed early purchase signals",
        "Set up proper attribution tracking including first-touch and last-touch models, UTM parameter framework, and integration with the brand's ecommerce analytics",
        "Established a weekly reporting cadence with the client covering spend, sessions, add-to-carts, orders, revenue, ROAS, and AOV — full transparency from day one",
        "Budget kept intentionally low (~$5K) during testing phase to minimize waste while gathering enough data for the algorithms to begin optimizing",
      ],
    },
    {
      phase: 2,
      months: "Month 2–3",
      title: "Audience Discovery & Creative Optimization",
      items: [
        "Analyzed month one data to identify top-performing audience segments — health-conscious parents and fitness-focused professionals converted at 2-3x the rate of general wellness audiences",
        "Doubled down on winning audiences while pausing underperformers — shifted budget aggressively toward segments showing strong add-to-cart and purchase behavior",
        "Launched lookalike audiences built from the brand's existing customer email list — these became the highest-performing prospecting audiences throughout the engagement",
        "Creative testing at scale: tested over 30 ad variations including UGC-style unboxing videos, ingredient comparison graphics, subscription value propositions, and seasonal flavor launches",
        "Implemented dynamic product ads showing users the specific products they had viewed or added to cart — dramatically improved retargeting efficiency",
        "Optimized landing pages for ad traffic: simplified the path from ad click to purchase, added trust signals (reviews, certifications, ingredient transparency), and tested subscription vs. one-time purchase emphasis",
        "Built a cart abandonment retargeting sequence with escalating incentives — reminder, then free shipping offer, then small discount — recovering an estimated 12% of abandoned carts",
        "Gradually increased budget as ROAS improved, moving from test-phase spending to confident scaling based on proven audience and creative combinations",
      ],
    },
    {
      phase: 3,
      months: "Month 4–5",
      title: "Profitable Scaling & Efficiency Gains",
      items: [
        "Scaled monthly ad spend to $9-10K as campaigns consistently delivered above 3x ROAS — every additional dollar spent was generating profitable returns",
        "Introduced bundle-specific campaigns promoting variety packs and subscription starter kits — these had higher AOV and stronger conversion rates than single-product campaigns",
        "Launched seasonal flavor campaigns tied to summer themes — limited-edition tropical mixes and summer snack bundles created urgency and drove incremental purchases",
        "Implemented customer lifetime value bidding — allowed campaigns to bid more aggressively for new customer acquisition knowing that subscription conversions would compound returns over time",
        "Geographic performance optimization: identified top-performing metro areas (health-conscious markets like Boulder, Austin, Portland, LA) and increased bids in those regions",
        "Expanded creative library with customer review highlights, before/after subscription stories, and educational content about ingredient sourcing — building brand trust through ads",
        "Cross-sell campaigns targeting existing one-time buyers with subscription offers — converting single purchasers into recurring revenue at a fraction of new customer acquisition cost",
        "By month 5, campaigns were running at 3.6x ROAS with a stable and repeatable framework — the brand had gone from zero ads to a profitable, scalable paid advertising engine",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$38.9K" },
      { label: "Total Orders", value: "2,392" },
      { label: "Avg Cost Per Acquisition", value: "$16.27", note: "↓57% from month 1" },
      { label: "Peak ROAS", value: "3.6x", note: "from 1.2x in month 1" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: First-ever campaigns. Pure testing, building pixel data. Low ROAS expected.
      { month: "Jun 2025", spend: 5200, leads: 9267, cpl: 0.56, qualified: 417, cpql: 12.47, deals: 139, revenue: 6240, roas: 1.20 },
      // Jul 2025: Finding audiences. Lookalikes from email list starting to work. ROAS climbing.
      { month: "Jul 2025", spend: 6400, leads: 14200, cpl: 0.45, qualified: 909, cpql: 7.04, deals: 284, revenue: 12800, roas: 2.00 },
      // Aug 2025: Creative optimization paying off. Dynamic product ads and cart abandonment retargeting live.
      { month: "Aug 2025", spend: 7800, leads: 18720, cpl: 0.42, qualified: 1544, cpql: 5.05, deals: 468, revenue: 21060, roas: 2.70 },
      // Sep 2025: Scaling confidently. Bundle campaigns and subscription pushes driving higher AOV.
      { month: "Sep 2025", spend: 9200, leads: 22467, cpl: 0.41, qualified: 2292, cpql: 4.01, deals: 674, revenue: 30360, roas: 3.30 },
      // Oct 2025: Full stride. 3.6x ROAS. Profitable, scalable, repeatable.
      { month: "Oct 2025", spend: 10335, leads: 25061, cpl: 0.41, qualified: 2895, cpql: 3.57, deals: 827, revenue: 37206, roas: 3.60 },
    ],
  },
  impact: [
    { label: "Peak ROAS", value: "3.6x", growth: "from 0x (no ads)" },
    { label: "Total Orders", value: "2,392", growth: "+495% month-over-month" },
    { label: "Total Ad Revenue", value: "$107.7K", growth: "from $0" },
    { label: "Cost Per Acquisition", value: "$16.27", growth: "↓57% from month 1" },
  ],
};
