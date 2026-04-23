import { CaseStudyData } from "./types";

export const beautyEcommerceNational: CaseStudyData = {
  slug: "beauty-ecommerce-national",
  industry: "Beauty Products",
  headline: "How a DTC Beauty Brand Achieved 4.01x Blended ROAS While Building a 5,900+ Monthly Organic Traffic Engine — Generating $260.4K in Revenue",
  subheadline: "MEGA deployed always-on AI optimization agents and a dual SEO + paid advertising strategy to help a small national beauty brand scale from $5K/month in ad spend with stagnant organic visibility to a 5.49x peak ROAS, 4,194 orders, and over $260K in ecommerce revenue across 9 months — while growing organic traffic from 378 to 5,909 monthly sessions.",
  heroStats: [
    { value: "5.49", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$260.4", unit: "K", label: "Revenue Generated" },
    { value: "2,099", unit: "%", label: "Keyword Growth" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Beauty"],
  company: {
    industry: "Beauty Products",
    employees: "6",
    revenue: "$420K",
    location: "National (USA)",
    description: "A small direct-to-consumer beauty brand selling a curated line of clean-ingredient serums, moisturizers, lip products, and hair treatments through its own Shopify store. The brand had built a modest but passionate customer base through Instagram reels, micro-influencer collaborations, and word-of-mouth — generating roughly $400K in annual revenue with a healthy 38% repeat purchase rate and an average order value around $57. Paid advertising was managed in-house by the founder, spending approximately $4,000–$5,000 per month on Meta with inconsistent targeting, no structured creative testing, and a ROAS that hovered around 1.8–2.0x. The website had virtually no SEO presence — fewer than 90 ranking keywords, no blog content, and product pages with minimal copy. The founder recognized that relying solely on paid social at a small budget was unsustainable as ad costs climbed, and wanted a partner who could build both an efficient paid engine and a compounding organic channel simultaneously — without requiring the budget of a large agency engagement.",
  },
  challenges: [
    {
      title: "Stagnant ROAS at 1.9x on a Tight Monthly Budget",
      description: "The brand was spending $4,000–$5,000 per month on Meta ads but couldn't break past a ~1.9x ROAS. At this budget level, every dollar of waste was felt immediately. The founder was running 3–4 ad creatives that had been live for over three months — the same product-on-marble-background shots recycled with different copy overlays. There was no separation between prospecting and retargeting, no product-level campaign segmentation, and no systematic approach to audience testing. Budget was split evenly across campaigns regardless of performance, and optimizations happened sporadically — whenever the founder had time between product development, fulfillment, and customer service. The result was a paid channel that generated revenue but was increasingly unprofitable when factoring in product costs, shipping, and the founder's time managing it.",
    },
    {
      title: "Zero Organic Visibility in a Crowded Beauty Category",
      description: "The website ranked for just 84 keywords — nearly all branded terms that only captured existing customers searching the brand name. Organic traffic averaged fewer than 400 sessions per month, representing less than 3% of total site visits. Product pages contained 40–60 words of copy each with no ingredient deep-dives, no routine recommendations, no schema markup, and no internal linking strategy. There was no blog, no resource content, and no category page architecture. Searches like 'best clean moisturizer for dry skin,' 'niacinamide serum for acne,' and 'sulfate-free hair treatment' — queries that perfectly described the brand's products — returned zero visibility. Competitors with dedicated content teams had built domain authorities above 40 while this brand sat at 11, making organic customer acquisition effectively nonexistent.",
    },
    {
      title: "Creative Production Bottleneck Limiting Paid Performance",
      description: "The founder was the sole creative producer — shooting product photos on weekends, editing in Canva, and writing ad copy between fulfillment shifts. This meant 3–4 new creatives per quarter at best, and each one reflected the same visual style and messaging angle. There was no capacity for structured A/B testing, no ability to iterate on winning patterns, and no way to respond to creative fatigue before it eroded performance. When a creative stopped performing, the typical response was to increase budget on the remaining ads rather than produce fresh alternatives — accelerating the fatigue cycle. At $5K per month, the brand couldn't afford a freelance designer or agency creative team, creating a catch-22 where the solution to declining ad performance was financially out of reach.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Data Foundation, Creative Reset & SEO Infrastructure",
      items: [
        "Complete tracking overhaul — implemented Meta Conversions API with server-side event tracking, configured Google Analytics 4 ecommerce events properly for the first time, and set up UTM taxonomy across all campaigns to establish reliable attribution",
        "Audited 90 days of campaign data — identified that the brand's best-performing audience segment (25–38 women interested in clean beauty and skincare routines) was receiving only 22% of budget while broad interest targeting absorbed the rest with poor conversion metrics",
        "Deployed always-on AI optimization agents directly within the Meta ad account — continuously monitoring performance signals and adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than the founder's sporadic manual adjustments",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — ingredient close-up shots, before-and-after skin texture sequences, 'get ready with me' routine clips, and customer testimonial carousels — replacing the stale 3-creative rotation and giving the algorithm fresh signals without any production cost",
        "Rebuilt campaign architecture from scratch: separated prospecting from retargeting, segmented by product category (face care, lip products, hair treatments) with margin-adjusted ROAS targets — high-margin serums got aggressive scaling goals while lower-margin basics got efficiency targets",
        "Conducted comprehensive technical SEO audit — fixed crawlability issues, implemented product schema markup, optimized page speed from 5.1s to 2.0s load time, and built proper site architecture with category pages for each product line",
        "Generated 8 foundational SEO articles covering clean beauty ingredient guides (hyaluronic acid, niacinamide, squalane), skincare routine frameworks, and seasonal skin concern content to establish topical authority",
        "Rewrote all product pages from 40-word blurbs to 400+ word ingredient-rich descriptions with clinical study references, usage instructions, routine pairing recommendations, and FAQ schema — making each page a genuine resource rather than a checkout form",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & Content Scaling",
      items: [
        "Reviewed 30-day structured creative test data — revealed that 'get ready with me' routine-style video creative outperformed static product shots by 2.6x on purchase ROAS, and ingredient education carousels drove 38% higher add-to-cart rates than lifestyle imagery among the core 25–38 female audience",
        "Scaled AI-generated creative production to 15–18 new variations per month, testing hooks (transformation journeys vs. ingredient science vs. routine tutorials), visual styles (close-up textures vs. application demos), and copy angles (clean beauty converts vs. skincare beginners) — all at zero marginal creative cost, giving the brand more creative variety than competitors spending 5x on agencies",
        "AI optimization agents identified that Sunday evening (7–10 PM) drove 29% higher conversion rates for skincare products and automatically shifted budget weighting — a micro-optimization invisible in weekly reporting but worth approximately $820 in incremental monthly revenue at this spend level",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads within 2 hours, browse abandoners entered a 5-day skincare education sequence, and past purchasers received cross-sell campaigns timed to 45-day replenishment cycles based on product usage data",
        "Published 14 additional SEO articles targeting long-tail keywords — nighttime skincare routines for sensitive skin, seasonal ingredient pairing guides, clean vs. conventional beauty comparison content, and hair treatment deep-dives for specific concerns",
        "Launched programmatic landing pages optimized for commercial-intent searches like 'best clean vitamin C serum' and 'natural moisturizer for combination skin' — bridging the gap between organic discovery and conversion",
        "Implemented review schema and customer photo galleries on product pages — organic click-through rates from search results improved 40% as rich snippets began appearing for product queries",
      ],
    },
    {
      phase: 3,
      months: "90–270 days",
      title: "Seasonal Scaling, Black Friday & Compounding Growth",
      items: [
        "With 18+ creatives in active rotation at any given time, creative fatigue was eliminated entirely — AI-generated variations replaced underperformers within days rather than the previous quarterly refresh cycle, keeping cost per acquisition stable even as the brand scaled spend from $4K to $8.9K during peak months",
        "Built dedicated Black Friday and Cyber Monday campaign structure 3 weeks in advance — pre-warmed lookalike audiences from existing purchasers, created urgency-driven gift set bundles, and deployed AI-managed automated budget scaling that more than doubled daily spend during peak conversion windows while maintaining 5.34x ROAS",
        "AI agents detected the seasonal shift toward holiday gifting in early November and automatically adjusted creative messaging from personal-use angles to gift-giving hooks within hours — 'perfect gifts for the skincare obsessed' angles captured demand that competitors running static self-purchase campaigns missed entirely",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, capturing high-intent shoppers at lower CPAs than competitors relying on set-and-forget campaign structures",
        "Organic and paid synergy reached maturity — top-performing paid ad hooks were repurposed as blog content themes, while high-traffic organic pages informed new paid creative angles, creating a self-reinforcing loop that reduced blended customer acquisition cost month over month",
        "Continued SEO content production through Q4 — published holiday gift guides, winter skincare routines, New Year self-care resolution content, and trend pieces on emerging clean beauty ingredients that captured seasonal search surges",
        "Advanced audience segmentation using AI-identified behavioral patterns — repeat buyers, subscription-prone customers, gift purchasers, and category-specific enthusiasts each received tailored creative, maximizing return on every dollar of the limited budget",
        "Post-Black Friday December optimization — rather than pulling back spend aggressively, AI agents identified continued gift-purchasing demand and maintained efficient spend levels, capturing late-season shoppers at lower auction costs while competitors retreated",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+2,099%", from: "from 84" },
      { label: "Top 10 Rankings", value: "192", growth: "+3,740%", from: "from 5" },
      { label: "Pages Created", value: "48", growth: "", from: "incl. 35 articles + 6 category pages" },
      { label: "Organic Traffic", value: "5,909/mo", growth: "+1,464%", from: "from 378" },
    ],
    monthly: [
      { month: "Apr '25", keywords: 84, top10: 5, top3: 1, traffic: 378, pages: 3, avgPos: 51.2, ctr: 0.5 },
      { month: "May '25", keywords: 156, top10: 12, top3: 2, traffic: 624, pages: 11, avgPos: 45.8, ctr: 0.6 },
      { month: "Jun '25", keywords: 278, top10: 24, top3: 5, traffic: 1001, pages: 18, avgPos: 39.4, ctr: 0.8 },
      { month: "Jul '25", keywords: 437, top10: 41, top3: 9, traffic: 1529, pages: 24, avgPos: 34.1, ctr: 1.0 },
      { month: "Aug '25", keywords: 641, top10: 62, top3: 15, traffic: 2244, pages: 29, avgPos: 29.3, ctr: 1.2 },
      { month: "Sep '25", keywords: 892, top10: 89, top3: 23, traffic: 2944, pages: 34, avgPos: 25.0, ctr: 1.5 },
      { month: "Oct '25", keywords: 1183, top10: 121, top3: 33, traffic: 3786, pages: 39, avgPos: 21.4, ctr: 1.8 },
      { month: "Nov '25", keywords: 1498, top10: 156, top3: 44, traffic: 5244, pages: 44, avgPos: 18.2, ctr: 2.1 },
      { month: "Dec '25", keywords: 1847, top10: 192, top3: 56, traffic: 5909, pages: 48, avgPos: 15.7, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$64.9K" },
      { label: "Add to Carts", value: "7,548" },
      { label: "Avg Cost Per Cart", value: "$8.60", note: "↓41% reduction" },
      { label: "Orders", value: "4,194" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Apr 2025: Baseline month — inheriting founder-managed campaigns at ~2.0x ROAS. Restructuring begins. AI agents deployed.
      { month: "Apr '25", spend: 5040, leads: 4383, cpl: 1.15, qualified: 395, cpql: 12.76, deals: 178, revenue: 9968, roas: 1.98 },
      // May 2025: New campaign architecture live. Attribution cleanup. Early creative testing gains.
      { month: "May '25", spend: 5280, leads: 4757, cpl: 1.11, qualified: 461, cpql: 11.45, deals: 224, revenue: 12768, roas: 2.42 },
      // Jun 2025: AI agents fully active. Summer skincare interest rising. Creative testing scaled to 15+ variations.
      { month: "Jun '25", spend: 5640, leads: 5412, cpl: 1.04, qualified: 557, cpql: 10.13, deals: 289, revenue: 16762, roas: 2.97 },
      // Jul 2025: Summer peak. AI shifted budget to body care and SPF-adjacent categories. Retargeting sequences maturing.
      { month: "Jul '25", spend: 6130, leads: 6130, cpl: 1.00, qualified: 650, cpql: 9.43, deals: 352, revenue: 21120, roas: 3.45 },
      // Aug 2025: Mid-summer optimization. AI identified high-LTV audience segments and shifted budget automatically.
      { month: "Aug '25", spend: 6580, leads: 6843, cpl: 0.96, qualified: 746, cpql: 8.82, deals: 414, revenue: 25254, roas: 3.84 },
      // Sep 2025: Fall transition. Google Shopping expansion launched. Organic traffic compounding.
      { month: "Sep '25", spend: 7020, leads: 7579, cpl: 0.93, qualified: 842, cpql: 8.34, deals: 479, revenue: 29702, roas: 4.23 },
      // Oct 2025: Q4 preparation. Pre-warming holiday audiences. Gift set campaigns tested.
      { month: "Oct '25", spend: 7640, leads: 8404, cpl: 0.91, qualified: 948, cpql: 8.06, deals: 541, revenue: 34624, roas: 4.53 },
      // Nov 2025: BLACK FRIDAY — budget scaled aggressively. AI managed real-time bid adjustments across all ad sets.
      { month: "Nov '25", spend: 11840, leads: 13882, cpl: 0.85, qualified: 1666, cpql: 7.11, deals: 999, revenue: 64935, roas: 5.49 },
      // Dec 2025: Holiday gifting tail. Budget stays elevated for gift purchases. Strong organic traffic compound effect.
      { month: "Dec '25", spend: 9720, leads: 11800, cpl: 0.82, qualified: 1283, cpql: 7.58, deals: 718, revenue: 45234, roas: 4.65 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$260.4K", growth: "+177% ROAS improvement" },
    { label: "Total Orders", value: "4,194", growth: "across 9 months" },
    { label: "Average Order Value", value: "$62.08", growth: "beauty product category" },
    { label: "Blended ROAS", value: "4.01x", growth: "from 1.98x starting" },
  ],
};
