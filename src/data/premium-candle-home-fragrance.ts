import { CaseStudyData } from "./types";

export const premiumCandleHomeFragrance: CaseStudyData = {
  slug: "premium-candle-home-fragrance",
  industry: "Premium Candle & Home Fragrance",
  headline: "How a Premium Candle Brand Generated $534K in DTC Revenue in 8 Months",
  subheadline: "MEGA took over campaign management for an established home fragrance brand whose advertising performance had stalled — deploying AI optimization agents, rebuilding campaign architecture, scaling creative production, and launching SEO to reduce paid dependency. ROAS grew from 1.75x to a 4.85x peak, generating $534K in ecommerce revenue on $154K in ad spend across 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "4.85", unit: "x", label: "Peak ROAS Achieved" },
    { value: "534", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Home Goods"],
  company: {
    industry: "Premium Candle & Home Fragrance",
    employees: "9",
    revenue: "$820K",
    location: "National (USA)",
    description: "An established direct-to-consumer premium candle and home fragrance brand offering hand-poured soy candles, reed diffusers, and seasonal gift sets. The brand had grown to approximately $800K in annual revenue through Meta advertising and a loyal repeat-customer base, spending $10K–$15K per month on ads with ROAS hovering around 1.7–1.8x. The founder had been managing campaigns herself for the past several months after the team member who previously handled advertising departed, and performance had been slowly declining as creative went stale and campaigns received less hands-on optimization. There were no Google campaigns, no SEO strategy, and the website relied entirely on paid traffic for visibility. With Q4 approaching and gifting season representing nearly 40% of annual revenue, the brand needed a partner who could take over campaign management completely, stabilize performance, and scale efficiently into the holiday season.",
  },
  challenges: [
    {
      title: "Performance Declining Without Dedicated Advertising Management",
      description: "After the team member who managed advertising left, the founder had been running campaigns herself while also handling product development, fulfillment, and customer service. Campaigns were checked sporadically rather than optimized systematically — bid adjustments happened once or twice a week at best, budget allocation was static regardless of performance shifts, and there was no one monitoring for creative fatigue or audience saturation. ROAS had drifted from a historic 2x+ down to 1.7–1.8x over several months, and the founder knew it was costing her revenue but didn't have the bandwidth to diagnose or fix the issues while running every other part of the business.",
    },
    {
      title: "Stale Creative Library With No Refresh Pipeline",
      description: "The brand had been running the same 8–10 creatives for over five months — a mix of product flat-lays and lifestyle shots from an original brand photoshoot. Previous creative refreshes had cost $3,000–$4,000 per round through freelance photographers and designers, making frequent testing cost-prohibitive for the brand's margin structure. In a category where gifting-oriented and UGC content drives purchases, the stale product-only imagery was generating increasingly poor engagement. The founder had a library of customer unboxing videos and lifestyle content from social media but no system to turn those raw assets into structured ad variations.",
    },
    {
      title: "Zero Organic Visibility and Complete Dependence on Paid Traffic",
      description: "The website had no blog content, minimal product page SEO, and an authority score of 9 out of 100. The brand ranked for only 152 keywords — almost all branded terms. Without any organic traffic strategy, the business was entirely dependent on paid ads for every visitor and every sale. When ad performance dipped or budget was paused, revenue dropped to near zero. This created a fragile business model where any disruption to paid advertising — platform changes, rising CPMs, creative fatigue — immediately impacted the bottom line with no organic cushion to absorb the hit.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Takeover, Audit & Foundation",
      items: [
        "Complete campaign takeover — assumed management of all existing Meta campaigns, conducted a full audit of account structure, historical performance data, audience targeting, and creative library to identify what had been working and what had degraded",
        "Tracking infrastructure overhaul — implemented Meta Conversions API with server-side event tracking, fixed Google Analytics 4 ecommerce configuration, and set up post-purchase attribution surveys to understand the true customer journey beyond last-click",
        "Identified that 35% of attributed revenue was from branded searches the brand would have captured organically — previous reporting had been overstating campaign efficiency by counting purchases that weren't truly driven by ads",
        "Rebuilt campaign architecture from a single broad campaign into separate structures: prospecting by audience type (home décor enthusiasts, gifters, wellness/aromatherapy, candle enthusiasts), retargeting by funnel stage (product viewers, cart abandoners, past purchasers), and a new Google Shopping launch to capture high-intent product searches",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — continuously monitoring performance signals, adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the previous sporadic check-in cadence",
        "Launched initial creative testing suite with 16 AI-generated ad variations built from existing raw assets — transformed the founder's library of customer unboxing videos and lifestyle photos into structured ad formats including UGC compilations, before/after room transformation sequences, and gift-oriented carousel ads — all at zero additional creative cost",
        "Generated 8 foundational SEO articles covering candle gift guides, soy vs. paraffin comparisons, home fragrance layering tips, and seasonal scent recommendations to begin building organic visibility from scratch",
        "Technical SEO audit — implemented product schema markup, fixed site speed issues, and optimized product page metadata for candle-specific and gifting search terms",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & Creative Engine",
      items: [
        "Reviewed 30-day performance data with clean attribution — revealed that UGC unboxing content outperformed the legacy product flat-lays by 2.8x on click-through rate and 1.9x on purchase conversion, confirming the shift toward authentic, customer-generated creative",
        "Scaled AI-generated creative production to 14–18 new variations per month, testing hooks (self-care ritual vs. home aesthetic vs. perfect gift vs. seasonal scent stories), visual styles (warm lifestyle scenes vs. close-up product detail vs. customer testimonial overlays), and copy angles — all included in the flat management fee with zero production costs",
        "AI optimization agents identified that the gift-buyer segment (women 35–54 purchasing for others) had 41% lower cost per acquisition than the self-purchase segment during non-holiday months — automatically shifted budget allocation within hours of detecting the pattern, a move that would have waited until the next manual review under the previous management approach",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads with urgency messaging within 2 hours, browse abandoners entered a 4-day scent discovery sequence, and past purchasers received cross-sell campaigns timed to typical candle burn-through and repurchase cycles",
        "Google Shopping campaigns launched with optimized product feeds, lifestyle imagery, and competitive pricing annotations — capturing high-intent searches like 'hand poured soy candle gift set' and 'premium candles online' that the brand had been completely invisible for",
        "Generated 12 additional SEO articles targeting long-tail keywords — best candles for relaxation, candle care tips, reed diffuser vs. candle comparisons, non-toxic home fragrance guides, and seasonal entertaining content",
        "Built dedicated landing pages for key product collections — gifting bundles, signature scents, seasonal limited editions, and bestsellers — optimized for both paid traffic conversion and organic search indexing",
      ],
    },
    {
      phase: 3,
      months: "90+ days",
      title: "Q4 Scaling & Holiday Revenue Capture",
      items: [
        "Built dedicated Black Friday and Cyber Monday campaign structure 4 weeks in advance — pre-warmed lookalike audiences from existing purchasers, created urgency-driven gift set bundles, and configured automated budget scaling rules that more than doubled daily spend during peak conversion windows",
        "AI agents detected the seasonal shift toward holiday gifting in late October and automatically adjusted creative messaging from personal-use and home aesthetic angles to gift-oriented hooks — capturing demand that competitors running static campaigns missed entirely",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, maintaining 4.85x ROAS even as competition drove auction prices up across the home goods category",
        "With 18+ creatives in active rotation at any given time, the campaign avoided creative fatigue entirely — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even as spend scaled to $38K+ during the November peak",
        "Advanced audience segmentation using AI-identified behavioral patterns — self-purchasers, gift-buyers, repeat customers, and seasonal-only shoppers each received tailored creative, messaging, and offer structures",
        "Post-holiday strategy: maintained elevated spend through December with gift card and New Year self-care messaging, capturing extended holiday buying that most competitors' campaigns had already gone dark for",
        "Organic and paid synergy reached early maturity — SEO content ranking for 'best candle gifts' and 'soy candle benefits' drove free traffic that complemented paid campaigns and reduced blended acquisition costs heading into the new year",
        "Continued SEO content production — published holiday gift guides, winter scent profiles, and home entertaining content that captured seasonal organic search surges and built lasting authority",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,147", growth: "+654%", from: "from 152" },
      { label: "Top 10 Rankings", value: "128", growth: "+1,500%", from: "from 8" },
      { label: "Pages Created", value: "43", growth: "", from: "incl. 32 articles + 8 collection pages" },
      { label: "Organic Traffic", value: "3,441/mo", growth: "+466%", from: "from 608" },
    ],
    monthly: [
      { month: "May 2025", keywords: 152, top10: 8, top3: 1, traffic: 608, pages: 3, avgPos: 48.1, ctr: 0.6 },
      { month: "Jun 2025", keywords: 213, top10: 14, top3: 2, traffic: 767, pages: 11, avgPos: 44.3, ctr: 0.7 },
      { month: "Jul 2025", keywords: 341, top10: 28, top3: 5, traffic: 1126, pages: 18, avgPos: 39.7, ctr: 0.9 },
      { month: "Aug 2025", keywords: 487, top10: 44, top3: 9, traffic: 1558, pages: 23, avgPos: 35.2, ctr: 1.1 },
      { month: "Sep 2025", keywords: 632, top10: 62, top3: 14, traffic: 1960, pages: 28, avgPos: 31.6, ctr: 1.3 },
      { month: "Oct 2025", keywords: 789, top10: 81, top3: 19, traffic: 2367, pages: 33, avgPos: 28.1, ctr: 1.5 },
      { month: "Nov 2025", keywords: 964, top10: 104, top3: 26, traffic: 3086, pages: 38, avgPos: 24.7, ctr: 1.8 },
      { month: "Dec 2025", keywords: 1147, top10: 128, top3: 33, traffic: 3441, pages: 43, avgPos: 21.4, ctr: 2.0 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$154.2K" },
      { label: "Add to Carts", value: "20,173" },
      { label: "Avg Cost Per Cart", value: "$7.65", note: "↓36% reduction" },
      { label: "Orders", value: "11,248" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // May 2025: Takeover month — inheriting existing campaigns at ~1.75x ROAS. Audit and restructure begins.
      { month: "May 2025", spend: 12380, leads: 9831, cpl: 1.26, qualified: 1032, cpql: 12.00, deals: 486, revenue: 21627.00, roas: 1.75 },
      // Jun 2025: New campaign architecture deployed. Google Shopping launched. AI agents active. Early gains visible.
      { month: "Jun 2025", spend: 13420, leads: 11183, cpl: 1.20, qualified: 1230, cpql: 10.91, deals: 603, revenue: 27376.20, roas: 2.04 },
      // Jul 2025: Creative engine ramping — 14+ variations in rotation. Summer fragrance interest rising.
      { month: "Jul 2025", spend: 14760, leads: 12966, cpl: 1.14, qualified: 1556, cpql: 9.49, deals: 793, revenue: 36478.00, roas: 2.47 },
      // Aug 2025: AI identified gift-buyer segment with 41% lower CPA. Budget shifted automatically. Retargeting sequences matured.
      { month: "Aug 2025", spend: 16240, leads: 15320, cpl: 1.06, qualified: 1916, cpql: 8.48, deals: 1014, revenue: 47151.00, roas: 2.90 },
      // Sep 2025: Fall transition. Candle seasonality beginning. Organic traffic starting to compound.
      { month: "Sep 2025", spend: 17680, leads: 17843, cpl: 0.99, qualified: 2284, cpql: 7.74, deals: 1233, revenue: 57951.00, roas: 3.28 },
      // Oct 2025: Q4 competition drives CPCs up but conversion rates rise faster. Pre-warming holiday audiences.
      { month: "Oct 2025", spend: 21440, leads: 20038, cpl: 1.07, qualified: 2805, cpql: 7.64, deals: 1570, revenue: 74575.00, roas: 3.48 },
      // Nov 2025: Black Friday / Cyber Monday blitz. Budget scaled aggressively. AI managed real-time bid adjustments at peak.
      { month: "Nov 2025", spend: 38460, leads: 42733, cpl: 0.90, qualified: 6397, cpql: 6.01, deals: 3838, revenue: 186526.80, roas: 4.85 },
      // Dec 2025: Extended holiday buying. Gift card + New Year messaging. Organic reducing paid dependency.
      { month: "Dec 2025", spend: 19840, leads: 22711, cpl: 0.87, qualified: 2953, cpql: 6.72, deals: 1711, revenue: 82298.10, roas: 4.15 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$534.0K", growth: "+98% ROAS improvement" },
    { label: "Total Orders", value: "11,248", growth: "across 8 months" },
    { label: "Average Order Value", value: "$47.47", growth: "premium candle category" },
    { label: "Blended ROAS", value: "3.46x", growth: "from 1.75x starting" },
  ],
};
