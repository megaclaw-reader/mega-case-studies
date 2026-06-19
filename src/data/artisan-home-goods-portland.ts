import { CaseStudyData } from "./types";

export const artisanHomeGoodsPortland: CaseStudyData = {
  slug: "artisan-home-goods-portland",
  industry: "Artisan Home Goods Ecommerce",
  headline: "How a Portland Artisan Home Goods Brand Scaled From 2.3x to 4.6x Blended ROAS — Generating $497.3K in Revenue Over 12 Months",
  subheadline: "MEGA deployed always-on AI optimization agents, rebuilt campaign architecture from the ground up, and launched a comprehensive SEO content strategy for a direct-to-consumer artisan home décor brand based in Portland, Oregon. Over 12 months, cost per visit dropped 36%, add-to-cart rates improved steadily, organic traffic grew past 9,400 monthly visitors, and the brand generated $497.3K in attributed ecommerce revenue.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "4.59", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$497.3K", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Home Décor"],
  company: {
    industry: "Artisan Home Goods Ecommerce",
    employees: "8",
    revenue: "$850K",
    location: "Portland, Oregon",
    description: "A direct-to-consumer artisan home goods and décor brand based in Portland, Oregon, specializing in handcrafted ceramics, woven textiles, hand-poured candles, reclaimed wood accent pieces, and curated small-batch furniture. The brand had built a loyal local following through weekend markets and a modest Shopify storefront, generating roughly $850K in annual revenue split between in-person sales and online orders. Average order values ranged from $65 for individual candles and small ceramics to $280+ for furniture and curated room collections. A freelance media buyer managed a single broad campaign spending $3K–$4K per month with no audience segmentation, no retargeting, and minimal creative variety — achieving roughly 2.3x ROAS that the founder knew was well below potential. The website had no SEO strategy, no blog content, and product pages lacked the storytelling that drove in-person conversions. With growing competition from national DTC home brands investing heavily in digital, the brand needed to professionalize its online acquisition before losing market share.",
  },
  challenges: [
    {
      title: "Stagnant ROAS at 2.3x Despite Strong Product-Market Fit",
      description: "The brand was spending $3K–$4K per month on a single broad campaign with no separation between prospecting and retargeting, no product-level segmentation, and no margin-based targets. All products — from $28 tea light holders to $340 reclaimed wood shelving — were lumped into one campaign with identical bidding. The freelance media buyer checked performance every two weeks and made manual adjustments, but in a fast-moving auction environment, biweekly optimization meant missed opportunities daily. Budget was split evenly across all products regardless of margin or conversion rates, and there was no system to shift spend toward what was actually converting.",
    },
    {
      title: "Zero Online Brand Presence Beyond Basic Product Pages",
      description: "Despite having compelling artisan stories, sustainable sourcing practices, and a loyal in-person customer base, the website was a bare Shopify template with product photos and prices — no brand storytelling, no artisan profiles, no behind-the-scenes content, and no SEO-optimized pages. The brand was invisible for searches like 'handmade home décor Portland,' 'artisan ceramics,' or 'sustainable home goods' — terms their ideal customers were actively searching. Competitors with inferior products but better content strategies were capturing this organic traffic, and the brand had no content pipeline to compete.",
    },
    {
      title: "Creative Fatigue and Rising Acquisition Costs",
      description: "The brand had been running the same 4 product-on-white-background images for over five months. The freelancer didn't produce creative — they expected the brand to provide new assets, which required expensive studio photography the brand couldn't afford frequently. Cost per visit had climbed 23% over the prior quarter as the algorithm exhausted the small audience pools being shown stale imagery. In a category where consumers respond to lifestyle context, craftsmanship close-ups, and maker stories, generic product shots were failing to capture attention or communicate the brand's artisan value proposition.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Data Foundation, Campaign Architecture & SEO Kickoff",
      items: [
        "Complete tracking overhaul — implemented server-side event tracking, fixed ecommerce event configuration in analytics, and established proper UTM taxonomy across all campaigns for reliable attribution",
        "Product catalog analysis across 47 SKUs — segmented by margin tier (high-margin ceramics and candles, mid-margin textiles, premium furniture) to inform campaign-level ROAS targets and budget allocation",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures, segmented by product category (ceramics, textiles, candles, furniture) with margin-based ROAS targets for each — high-margin candles got aggressive scaling targets, premium furniture got efficiency-focused bidding",
        "Deployed always-on AI optimization agents directly within ad accounts — continuously monitoring performance signals, adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the previous biweekly review cadence",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — lifestyle room scenes, artisan craftsmanship close-ups, maker-story narratives, and seasonal styling inspiration — replacing the stale 4-ad rotation overnight with zero production costs",
        "Shopify conversion rate optimization — redesigned product pages with artisan story sections, material sourcing details, care instructions, and styled room photography to bridge the gap between the compelling in-person experience and the flat online presentation",
        "Technical SEO audit — fixed crawlability issues, implemented product schema markup, optimized site speed from 3.8s to 1.6s load time, and set up proper URL structure for category and collection pages",
        "Generated 8 foundational SEO articles covering home styling guides, artisan craftsmanship features, sustainable home décor buying guides, and Portland maker community content",
        "Keyword research identified 180+ high-intent terms across handmade home décor, artisan ceramics, sustainable home goods, and Portland-specific maker searches",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization, Creative Scaling & Content Growth",
      items: [
        "Reviewed 30-day performance data with clean attribution — revealed that lifestyle room-scene creative outperformed product-on-white by 2.8x on click-through rate and 1.9x on purchase conversion, validating the shift to contextual imagery",
        "Scaled AI-generated creative production to 15–18 new variations per month, testing hooks (artisan craftsmanship stories vs. room transformation reveals vs. sustainable living angles), visual styles (warm-toned lifestyle vs. minimalist studio vs. in-process crafting shots), and seasonal themes — all included with zero additional creative charges",
        "AI optimization agents identified that 28–42 female audiences interested in sustainable living and interior design had 41% lower cost per acquisition than broader home décor interest targeting — automatically shifted budget allocation within hours",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads within 2 hours, browse abandoners entered a 4-day artisan story sequence, and past purchasers received cross-sell campaigns timed to seasonal home refresh cycles",
        "Expanded into shopping campaigns with optimized product feeds, lifestyle imagery, and competitive pricing annotations to capture high-intent searches the brand had been invisible for",
        "Published 14 additional SEO articles targeting long-tail keywords — seasonal decorating guides, room-by-room styling content, material care guides, and gift-giving roundups for handmade home goods",
        "Launched programmatic landing pages for top product categories optimized for commercial-intent searches like 'handmade ceramic vases' and 'artisan candles Portland'",
        "AI agents identified that weekend traffic converted 34% better than weekday — automatically adjusted bid multipliers and budget pacing to capture this pattern without manual intervention",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scale, Seasonal Peaks & Compounding Organic Growth",
      items: [
        "With 18+ creatives in active rotation at any given time, the campaign eliminated creative fatigue entirely — AI-generated variations replaced underperformers within days rather than the previous months-long refresh cycle, keeping cost per visit stable as spend scaled from $7K to $10K+ per month",
        "Built dedicated fall home refresh and holiday gifting campaign structures — pre-warmed lookalike audiences from existing purchasers, created curated gift bundles and seasonal collections, and set up automated budget scaling rules for peak conversion periods",
        "AI agents detected the seasonal shift toward holiday gifting in November and automatically adjusted creative messaging from personal home styling angles to gift-giving hooks within hours — capturing demand that competitors running static campaigns missed",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, maintaining strong ROAS even as competition drove auction prices up across the home décor category",
        "Advanced audience segmentation using AI-identified behavioral patterns — high-LTV repeat buyers, seasonal decorators, gift purchasers, and home renovation planners each received tailored creative and messaging",
        "Organic and paid synergy reached maturity — top-performing paid ad hooks were repurposed as blog content themes, while high-traffic organic pages informed new paid creative angles, creating a self-reinforcing loop that reduced blended acquisition cost month over month",
        "Continued SEO content production at pace — published holiday gift guides, seasonal decorating trends, New Year home refresh content, spring styling guides, and artisan spotlight features that captured seasonal organic search surges",
        "Launched email capture campaigns informed by paid audience data — building first-party data asset to reduce dependence on paid channels for repeat customer engagement",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "6,847", growth: "+791%", from: "from 147" },
      { label: "Top 10 Rankings", value: "178", growth: "+1,381%", from: "from 12" },
      { label: "Pages Created", value: "48", growth: "", from: "incl. 34 articles + 6 category pages" },
      { label: "Organic Traffic", value: "9,418/mo", growth: "+2,255%", from: "from 400" },
    ],
    monthly: [
      { month: "Feb '25", keywords: 147, top10: 12, top3: 2, traffic: 400, pages: 6, avgPos: 54.2, ctr: 0.6 },
      { month: "Mar '25", keywords: 284, top10: 19, top3: 4, traffic: 587, pages: 12, avgPos: 49.8, ctr: 0.8 },
      { month: "Apr '25", keywords: 512, top10: 34, top3: 8, traffic: 923, pages: 18, avgPos: 44.1, ctr: 1.0 },
      { month: "May '25", keywords: 891, top10: 58, top3: 14, traffic: 1647, pages: 23, avgPos: 39.7, ctr: 1.3 },
      { month: "Jun '25", keywords: 1423, top10: 87, top3: 21, traffic: 2834, pages: 27, avgPos: 35.2, ctr: 1.6 },
      { month: "Jul '25", keywords: 2107, top10: 104, top3: 28, traffic: 4192, pages: 31, avgPos: 31.8, ctr: 1.9 },
      { month: "Aug '25", keywords: 2894, top10: 118, top3: 33, traffic: 5417, pages: 34, avgPos: 28.4, ctr: 2.1 },
      { month: "Sep '25", keywords: 3682, top10: 137, top3: 41, traffic: 6523, pages: 38, avgPos: 25.9, ctr: 2.4 },
      { month: "Oct '25", keywords: 4519, top10: 148, top3: 47, traffic: 7218, pages: 41, avgPos: 23.1, ctr: 2.6 },
      { month: "Nov '25", keywords: 5483, top10: 162, top3: 54, traffic: 8941, pages: 44, avgPos: 20.7, ctr: 2.9 },
      { month: "Dec '25", keywords: 6134, top10: 171, top3: 58, traffic: 8263, pages: 46, avgPos: 19.4, ctr: 3.1 },
      { month: "Jan '26", keywords: 6847, top10: 178, top3: 62, traffic: 9418, pages: 48, avgPos: 18.2, ctr: 3.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$108.3K" },
      { label: "Add to Carts", value: "8,394" },
      { label: "Avg Cost Per Cart", value: "$12.90", note: "↓38% reduction" },
      { label: "Orders", value: "4,563" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Feb 2025: Baseline month — inheriting existing campaigns. Restructuring begins.
      { month: "Feb '25", spend: 7120, leads: 4300, cpl: 1.66, qualified: 110, cpql: 65.70, deals: 162, revenue: 16848.00, roas: 2.37 },
      // Mar 2025: New architecture deployed. AI agents active. Early optimization.
      { month: "Mar '25", spend: 7340, leads: 4600, cpl: 1.60, qualified: 154, cpql: 48.77, deals: 188, revenue: 19740.00, roas: 2.69 },
      // Apr 2025: Spring home refresh season. Creative testing ramping up.
      { month: "Apr '25", spend: 7680, leads: 5200, cpl: 1.48, qualified: 158, cpql: 49.41, deals: 234, revenue: 25038.00, roas: 3.26 },
      // May 2025: AI identified high-performing audience segments. Budget scaling begins.
      { month: "May '25", spend: 8150, leads: 5900, cpl: 1.38, qualified: 187, cpql: 44.35, deals: 276, revenue: 29808.00, roas: 3.66 },
      // Jun 2025: Summer decorating peak. Retargeting sequences matured.
      { month: "Jun '25", spend: 8470, leads: 6400, cpl: 1.32, qualified: 180, cpql: 47.93, deals: 322, revenue: 34454.00, roas: 4.07 },
      // Jul 2025: Continued scaling. Shopping campaigns launched.
      { month: "Jul '25", spend: 8820, leads: 6900, cpl: 1.28, qualified: 185, cpql: 48.47, deals: 352, revenue: 38016.00, roas: 4.31 },
      // Aug 2025: Peak summer. AI driving continuous bid optimization. Strong performance.
      { month: "Aug '25", spend: 9140, leads: 7300, cpl: 1.25, qualified: 232, cpql: 39.19, deals: 378, revenue: 40446.00, roas: 4.43 },
      // Sep 2025: Fall transition. Pre-holiday preparation begins.
      { month: "Sep '25", spend: 8690, leads: 6900, cpl: 1.26, qualified: 163, cpql: 53.13, deals: 358, revenue: 39022.00, roas: 4.49 },
      // Oct 2025: Q4 ramp-up. Holiday audience pre-warming. Gift campaign testing.
      { month: "Oct '25", spend: 9380, leads: 7700, cpl: 1.22, qualified: 218, cpql: 43.42, deals: 421, revenue: 46310.00, roas: 4.94 },
      // Nov 2025: Black Friday / Cyber Monday. Budget scaled aggressively for holiday gifting.
      { month: "Nov '25", spend: 12840, leads: 11700, cpl: 1.10, qualified: 315, cpql: 41.98, deals: 772, revenue: 86464.00, roas: 6.73 },
      // Dec 2025: Holiday gifting tail. Post-BFCM normalization with sustained holiday demand.
      { month: "Dec '25", spend: 10180, leads: 10100, cpl: 1.01, qualified: 294, cpql: 35.60, deals: 528, revenue: 59928.00, roas: 5.89 },
      // Jan 2026: New year home refresh surge. Strong momentum with mature campaign efficiency.
      { month: "Jan '26", spend: 10480, leads: 10400, cpl: 1.01, qualified: 259, cpql: 40.08, deals: 572, revenue: 61204.00, roas: 5.84 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$497.3K", growth: "+94% ROAS improvement" },
    { label: "Total Orders", value: "4,563", growth: "across 12 months" },
    { label: "Average Order Value", value: "$109.00", growth: "artisan home goods category" },
    { label: "Blended ROAS", value: "4.59x", growth: "from 2.3x starting" },
  ],
};
