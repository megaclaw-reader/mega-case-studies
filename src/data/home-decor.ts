import { CaseStudyData } from "./types";

export const homeDecor: CaseStudyData = {
  slug: "home-decor",
  industry: "Home Decor",
  headline: "How a National Home Decor Ecommerce Brand Grew From 2.13x to 3.84x Blended ROAS — Generating $272K in Revenue Over 8 Months",
  subheadline: "MEGA deployed always-on AI optimization agents, restructured campaign architecture around product margins, and launched a comprehensive SEO content strategy for a direct-to-consumer home décor brand selling nationally. Over 8 months, cost per visit dropped 23%, add-to-cart rates improved consistently, organic traffic grew past 8,700 monthly visitors, and the brand generated $272K in attributed ecommerce revenue with a conservative, data-driven approach.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "3.84", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$272K", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Home Décor"],
  company: {
    industry: "Home Decor",
    employees: "12",
    revenue: "$1.1M",
    location: "United States",
    description: "A direct-to-consumer home décor ecommerce brand selling nationally through its own Shopify storefront. The product line spans accent furniture, decorative lighting, wall art, throw pillows, ceramic vases, and curated room collections — with average order values ranging from $85 for individual accent pieces to $300+ for furniture and curated bundles. The brand had built a modest but growing customer base through organic social media and word-of-mouth referrals, generating roughly $1.1M in annual revenue. A single freelance marketer was managing paid campaigns with a flat $8K monthly budget spread across one broad campaign — no product segmentation, no retargeting, and minimal creative rotation. The campaigns were producing around 2x ROAS that the ownership team knew was leaving significant margin on the table. The website lacked any SEO strategy, had no blog content, and product pages were functional but uninspiring — generic descriptions and basic photography that failed to convey the design quality and styling versatility of the products.",
  },
  challenges: [
    {
      title: "Underperforming Paid Campaigns With No Structure or Segmentation",
      description: "The brand was spending a flat $8K per month on a single broad campaign with no separation between prospecting and retargeting, no product-category segmentation, and no margin-based bidding. High-margin accent pieces and low-margin clearance items received identical budget allocation. The freelance marketer checked performance metrics every 10–14 days and made manual adjustments, meaning the campaigns were effectively unmanaged most of the time. In a competitive home décor advertising landscape where auction dynamics shift daily, this biweekly cadence meant consistently overpaying for impressions and missing high-intent shopping windows.",
    },
    {
      title: "No Organic Discovery or Content Strategy",
      description: "Despite selling visually compelling products in a category where consumers actively research styling ideas, room inspiration, and décor trends before purchasing, the website had zero content beyond basic product listings. The brand was completely invisible for searches like 'modern living room décor ideas,' 'accent furniture for small spaces,' or 'wall art styling tips' — high-intent queries their ideal customers were searching daily. Competitors with less distinctive products but established content strategies were capturing this organic traffic and building brand awareness at zero marginal cost, while this brand relied entirely on paid channels for every visitor.",
    },
    {
      title: "Creative Stagnation and Rising Acquisition Costs",
      description: "The same 5 product-on-white images had been running for over four months. The freelancer expected the brand to provide new photography, which required expensive studio shoots the team couldn't justify quarterly. Cost per visit had been climbing steadily as the algorithm exhausted available audiences with repetitive creative. In a category where consumers respond to lifestyle context, room styling, and design inspiration, flat product images were failing to communicate the aspirational value of the products or differentiate from mass-market alternatives.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Tracking Foundation, Campaign Restructure & SEO Kickoff",
      items: [
        "Complete tracking audit and rebuild — implemented server-side event tracking, fixed ecommerce conversion events, and established proper UTM taxonomy for reliable revenue attribution across all campaign types",
        "Product catalog analysis across 60+ SKUs — segmented by margin tier (high-margin accent décor and ceramics, mid-margin textiles and wall art, premium furniture) to set campaign-level ROAS targets and inform budget allocation strategy",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures, segmented by product category with margin-based bidding — high-margin accent pieces got aggressive scaling targets while furniture campaigns focused on efficiency",
        "Deployed always-on AI optimization agents directly within ad accounts — continuously monitoring conversion signals, adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than waiting for biweekly manual reviews",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — lifestyle room staging, product close-ups with styling context, before/after room transformations, and seasonal décor inspiration — replacing the stale 5-image rotation with zero production costs",
        "Technical SEO audit and foundation — fixed crawlability issues, implemented product schema markup, optimized site speed, and restructured URL architecture for category and collection pages",
        "Published 5 foundational SEO articles covering home styling guides, seasonal décor trends, room-by-room decorating tips, and product-category buying guides",
        "Keyword research identified 180+ high-intent terms across home décor, interior styling, accent furniture, and decorative accessories search categories",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization, Creative Scaling & Content Expansion",
      items: [
        "Reviewed 30-day performance data with clean attribution — lifestyle room-scene creative outperformed product-only shots by 2.4x on click-through rate and 1.7x on purchase conversion, confirming the shift to contextual imagery",
        "Scaled AI-generated creative production to 15–20 new variations per month, testing hooks (room transformation reveals vs. styling tips vs. seasonal refresh themes), formats (static lifestyle vs. carousel collections vs. short video room tours), and seasonal angles — all at zero additional production cost",
        "AI optimization agents identified that homeowner audiences aged 28–45 interested in interior design and home improvement had 37% lower cost per acquisition than broader home décor targeting — budget automatically shifted to these segments within hours of the signal",
        "Built dynamic retargeting sequences: cart abandoners received product-specific ads within 3 hours, browse abandoners entered a 5-day styling inspiration sequence, and past purchasers received cross-sell campaigns featuring complementary pieces timed to seasonal home refresh cycles",
        "Launched shopping campaigns with optimized product feeds, lifestyle imagery, and competitive pricing to capture high-intent product searches the brand had been invisible for",
        "Published 9 additional SEO articles targeting long-tail keywords — seasonal decorating guides, small-space styling content, trending décor styles, and gift-giving roundups for home goods",
        "Created programmatic landing pages for top product categories optimized for commercial-intent searches like 'modern accent furniture online' and 'decorative ceramics for living room'",
      ],
    },
    {
      phase: 3,
      months: "90–240 days",
      title: "Sustained Scaling, Seasonal Optimization & Organic Compounding",
      items: [
        "With 18+ creatives in active rotation at any given time, the campaign maintained creative freshness — AI-generated variations replaced underperformers within days, keeping cost per visit stable even as monthly spend scaled past $11K",
        "Built dedicated seasonal campaign structures: spring home refresh, summer entertaining, and early fall pre-planning — each with pre-warmed lookalike audiences from existing purchasers and seasonal creative themes",
        "AI agents detected seasonal interest shifts and automatically adjusted creative messaging and audience targeting within hours — capturing demand windows that campaigns running on weekly review cycles would miss entirely",
        "Real-time bid optimization during promotional periods maintained strong ROAS even as competition increased auction prices across the home décor category",
        "Advanced audience segmentation using AI-identified behavioral patterns — first-time decorators, room-refresh buyers, gift purchasers, and repeat customers each received tailored creative and product recommendations",
        "Organic and paid synergy matured — high-performing paid ad angles informed blog content themes, while top-ranking organic pages revealed search intent patterns that shaped new paid creative, creating a self-reinforcing acquisition loop",
        "Continued SEO content production — published seasonal styling guides, trend forecasts, room makeover features, and product-category deep dives that captured organic search surges throughout spring and summer",
        "Launched email capture campaigns informed by paid audience data to build a first-party data asset and reduce reliance on paid channels for repeat customer engagement",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "3,814", growth: "+1,985%", from: "from 183" },
      { label: "Top 10 Rankings", value: "167", growth: "+1,093%", from: "from 14" },
      { label: "Pages Created", value: "31", growth: "", from: "incl. 22 articles + 5 category pages" },
      { label: "Organic Traffic", value: "8,734/mo", growth: "+1,307%", from: "from 621" },
    ],
    monthly: [
      { month: "Dec '25", keywords: 183, top10: 14, top3: 2, traffic: 621, pages: 5, avgPos: 52.8, ctr: 0.7 },
      { month: "Jan '26", keywords: 312, top10: 24, top3: 4, traffic: 894, pages: 9, avgPos: 47.3, ctr: 0.9 },
      { month: "Feb '26", keywords: 487, top10: 38, top3: 7, traffic: 1347, pages: 14, avgPos: 42.1, ctr: 1.1 },
      { month: "Mar '26", keywords: 724, top10: 56, top3: 12, traffic: 2218, pages: 18, avgPos: 37.6, ctr: 1.4 },
      { month: "Apr '26", keywords: 1089, top10: 78, top3: 18, traffic: 3547, pages: 22, avgPos: 33.2, ctr: 1.7 },
      { month: "May '26", keywords: 1724, top10: 108, top3: 26, traffic: 5124, pages: 25, avgPos: 29.4, ctr: 2.0 },
      { month: "Jun '26", keywords: 2687, top10: 139, top3: 33, traffic: 6892, pages: 28, avgPos: 26.1, ctr: 2.3 },
      { month: "Jul '26", keywords: 3814, top10: 167, top3: 42, traffic: 8734, pages: 31, avgPos: 23.7, ctr: 2.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$87.1K" },
      { label: "Add to Carts", value: "4,883" },
      { label: "Avg Cost Per Cart", value: "$17.84", note: "↓42% reduction" },
      { label: "Orders", value: "2,111" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Dec 2025: Holiday tail — onboarding month, inheriting existing campaigns. Restructuring begins.
      { month: "Dec '25", spend: 11200, leads: 5814, cpl: 1.93, qualified: 465, cpql: 24.09, deals: 186, revenue: 23808, roas: 2.13 },
      // Jan 2026: Post-holiday new year home refresh. AI agents active, early optimization.
      { month: "Jan '26", spend: 10400, leads: 5503, cpl: 1.89, qualified: 438, cpql: 23.74, deals: 198, revenue: 24948, roas: 2.40 },
      // Feb 2026: Winter slow season. Campaign restructure completed. Efficiency improving.
      { month: "Feb '26", spend: 10000, leads: 5587, cpl: 1.79, qualified: 472, cpql: 21.19, deals: 218, revenue: 28558, roas: 2.86 },
      // Mar 2026: Spring refresh season begins. Creative testing ramping. First ROAS above 3x.
      { month: "Mar '26", spend: 10300, leads: 6095, cpl: 1.69, qualified: 521, cpql: 19.77, deals: 248, revenue: 31496, roas: 3.06 },
      // Apr 2026: Spring peak. Shopping campaigns launched. Strong conversion momentum.
      { month: "Apr '26", spend: 10800, leads: 6792, cpl: 1.59, qualified: 634, cpql: 17.03, deals: 279, revenue: 35991, roas: 3.33 },
      // May 2026: Summer prep season. AI agents optimizing audience segments. Budget scaling.
      { month: "May '26", spend: 11100, leads: 7208, cpl: 1.54, qualified: 712, cpql: 15.59, deals: 306, revenue: 40698, roas: 3.67 },
      // Jun 2026: Summer decorating season. Retargeting sequences fully matured.
      { month: "Jun '26", spend: 11500, leads: 7616, cpl: 1.51, qualified: 793, cpql: 14.50, deals: 327, revenue: 41202, roas: 3.58 },
      // Jul 2026: Peak summer. Mature campaign efficiency. Strong close to engagement.
      { month: "Jul '26", spend: 11800, leads: 7919, cpl: 1.49, qualified: 848, cpql: 13.92, deals: 349, revenue: 45370, roas: 3.84 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$272.1K", growth: "+80% ROAS improvement" },
    { label: "Total Orders", value: "2,111", growth: "across 8 months" },
    { label: "Average Order Value", value: "$128.89", growth: "home décor category" },
    { label: "Blended ROAS", value: "3.12x", growth: "from 2.1x starting" },
  ],
};
