import { CaseStudyData } from "./types";

export const dietarySupplements: CaseStudyData = {
  slug: "dietary-supplements",
  industry: "Dietary Supplements",
  headline: "How a North American Dietary Supplement Brand Generated $285.7K in Ecommerce Revenue in 6 Months",
  subheadline: "MEGA helped a North American direct-to-consumer supplement company drive $285.7K in ecommerce revenue through AI-powered paid advertising and SEO, steadily improving ad efficiency every month while capitalizing on seasonal demand spikes including Black Friday.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "4.34", unit: "x", label: "Peak ROAS Achieved" },
    { value: "285.7", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC"],
  company: {
    industry: "Dietary Supplements",
    employees: "18",
    revenue: "$2.4M",
    location: "North America",
    description: "A direct-to-consumer dietary supplement brand based in North America, specializing in protein powders, multivitamins, pre-workout formulas, and gut health products. The company had built a loyal customer base through Amazon and retail partnerships but was struggling to scale its own ecommerce channel profitably. With rising customer acquisition costs on Meta and Google, ad performance had plateaued at break-even levels. Their creative was stale — the same four ad variations had been running for months — and their organic presence was virtually nonexistent despite operating in a high-search-volume category. They needed a partner who could systematically improve paid efficiency while building a long-term organic acquisition channel.",
  },
  challenges: [
    {
      title: "Paid Ads Stuck at Break-Even ROAS",
      description: "The brand was spending over $12K per month on Meta and Google Shopping but hovering around 1.8-2.0x ROAS — barely profitable after accounting for COGS and fulfillment. Creative fatigue was the primary culprit: the same four static ads had been running since launch with no systematic testing framework. Audience targeting was broad with no segmentation by product category or customer lifecycle stage, and retargeting was limited to a single 30-day window with generic messaging.",
    },
    {
      title: "Zero Organic Search Presence",
      description: "Despite selling products people actively search for — 'best protein powder,' 'vitamin D supplements,' 'gut health probiotics' — the brand had no content strategy and only 124 indexed keywords. Product pages had thin descriptions copied from manufacturers, no educational content to capture top-of-funnel searches, and no schema markup for product rich snippets. Competitors with strong blog content were capturing thousands of monthly organic visitors that converted at near-zero acquisition cost.",
    },
    {
      title: "No Data Infrastructure for Optimization",
      description: "Conversion tracking was incomplete — Meta pixel was firing on page loads rather than confirmed purchases, Google Analytics was double-counting sessions, and there was no attribution model connecting ad spend to actual revenue by product category. Without clean data, every optimization decision was based on unreliable metrics, making it impossible to identify which products, audiences, or creatives were actually driving profitable growth.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Data Cleanup",
      items: [
        "Complete tracking audit — fixed Meta pixel to fire on confirmed purchases only, implemented server-side tracking, corrected Google Analytics duplicate session issues, and set up proper UTM taxonomy across all campaigns",
        "Product catalog audit across 47 SKUs — categorized by margin tier, search volume, and competitive positioning to prioritize ad spend allocation",
        "Competitor analysis of top 8 supplement DTC brands — mapped their ad creative strategies, keyword portfolios, and content approaches",
        "Rebuilt campaign architecture separating prospecting from retargeting, segmented by product category (protein, vitamins, pre-workout, gut health) and customer intent level",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the traditional weekly-review agency cadence with real-time adjustments",
        "Launched initial creative testing suite with 15 AI-generated ad variations across static images, carousels, and short-form video to seed the algorithm with diverse performance signals",
        "Generated 14 foundational SEO articles covering supplement buying guides, ingredient breakdowns, and comparison content targeting high-volume informational queries",
        "Product page SEO overhaul — rewrote descriptions for all 47 SKUs with unique benefit-focused copy, added structured data markup for product rich snippets, and optimized title tags and meta descriptions",
        "Set up weekly automated reporting connecting ad spend to revenue by product category, creative variant, and audience segment",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Creative Scaling",
      items: [
        "Reviewed 30-day performance data — identified protein and gut health categories as highest-ROAS segments, reallocated 35% of budget from underperforming vitamin campaigns",
        "AI agents detected early signs of creative fatigue on top-performing static ads and automatically rotated in fresh variations, maintaining click-through rates while competitors' ads degraded",
        "Scaled AI-generated creative production to 25+ new variations per month, testing hooks (transformation stories vs. ingredient science vs. social proof), visual styles, and offer structures",
        "Built dynamic retargeting sequences — cart abandoners saw product-specific ads within 2 hours, browse abandoners entered a 7-day education sequence, and past purchasers received cross-sell campaigns based on purchase history",
        "Generated 18 additional SEO articles targeting long-tail keywords — supplement stacking guides, ingredient deep-dives on creatine, ashwagandha, and collagen, and seasonal wellness content",
        "Launched category landing pages optimized for commercial-intent keywords like 'buy protein powder online' and 'best probiotic supplements'",
        "Implemented review schema and UGC integration on product pages to improve organic click-through rates and conversion rates",
      ],
    },
    {
      phase: 3,
      months: "60–180 days",
      title: "Scale & Seasonal Capitalization",
      items: [
        "With 30+ creatives in active rotation, campaign avoided creative fatigue entirely — AI-generated variations replaced underperformers within days rather than the monthly refresh cycle typical of traditional agencies",
        "Built dedicated Black Friday and Cyber Monday campaign structure 3 weeks in advance — pre-warmed audiences, created urgency-driven creative variants, and set up automated budget scaling rules to capture peak demand",
        "AI agents identified the seasonal shift toward New Year's resolution traffic in December and proactively reallocated budget toward weight management, protein, and gut health products — capturing demand 2 weeks before competitors adjusted their campaigns",
        "Real-time bid optimization during Black Friday weekend adjusted bids every 15 minutes based on conversion data, maintaining profitability even as competition drove auction prices up 40%",
        "Continued SEO content production — published New Year's fitness and wellness guides, winter immune support content, and supplement comparison articles that captured seasonal search surges",
        "Advanced audience segmentation using AI-identified patterns — high-LTV customer lookalikes, seasonal buyers, and subscription-prone segments each received tailored creative and offers",
        "Expanded Google Shopping campaigns with optimized product feeds, competitive pricing annotations, and seller ratings to improve impression share on high-intent commercial searches",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+1,000%", from: "from 168" },
      { label: "Top 10 Rankings", value: "198", growth: "+1,700%", from: "from 11" },
      { label: "Pages Created", value: "68", growth: "", from: "incl. 42 articles + 12 category pages" },
      { label: "Organic Traffic", value: "5,124/mo", growth: "+878%", from: "from 524" },
    ],
    monthly: [
      { month: "Aug 2025", keywords: 168, top10: 11, top3: 2, traffic: 524, pages: 6, avgPos: 46.2, ctr: 0.8 },
      { month: "Sep 2025", keywords: 347, top10: 34, top3: 5, traffic: 918, pages: 20, avgPos: 39.7, ctr: 1.1 },
      { month: "Oct 2025", keywords: 612, top10: 68, top3: 12, traffic: 1687, pages: 34, avgPos: 33.4, ctr: 1.5 },
      { month: "Nov 2025", keywords: 943, top10: 108, top3: 22, traffic: 2614, pages: 46, avgPos: 27.8, ctr: 1.9 },
      { month: "Dec 2025", keywords: 1384, top10: 156, top3: 36, traffic: 3892, pages: 58, avgPos: 22.6, ctr: 2.4 },
      { month: "Jan 2026", keywords: 1847, top10: 198, top3: 48, traffic: 5124, pages: 68, avgPos: 19.4, ctr: 2.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$91.3K" },
      { label: "Add to Carts", value: "9,181" },
      { label: "Avg Cost Per Cart", value: "$9.94", note: "↓35% reduction" },
      { label: "Orders", value: "4,981" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      { month: "Aug 2025", spend: 12656, leads: 8326, cpl: 1.52, qualified: 981, cpql: 12.90, deals: 471, revenue: 26564.40, roas: 2.10 },
      { month: "Sep 2025", spend: 13240, leads: 9007, cpl: 1.47, qualified: 1100, cpql: 12.04, deals: 561, revenue: 32425.80, roas: 2.45 },
      { month: "Oct 2025", spend: 14180, leads: 9916, cpl: 1.43, qualified: 1272, cpql: 11.15, deals: 687, revenue: 39983.40, roas: 2.82 },
      { month: "Nov 2025", spend: 21470, leads: 17744, cpl: 1.21, qualified: 2510, cpql: 8.55, deals: 1305, revenue: 68251.50, roas: 3.18 },
      { month: "Dec 2025", spend: 15890, leads: 12130, cpl: 1.31, qualified: 1667, cpql: 9.53, deals: 950, revenue: 58330.00, roas: 3.67 },
      { month: "Jan 2026", spend: 13852, leads: 11171, cpl: 1.24, qualified: 1651, cpql: 8.39, deals: 1007, revenue: 60117.90, roas: 4.34 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$285.7K", growth: "+107% ROAS improvement" },
    { label: "Total Orders", value: "4,981", growth: "across 6 months" },
    { label: "Average Order Value", value: "$57.36", growth: "supplement category" },
    { label: "Blended ROAS", value: "3.13x", growth: "from 2.1x starting" },
  ],
};
