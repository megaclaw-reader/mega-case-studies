import { CaseStudyData } from "./types";

export const skincareEcommerce: CaseStudyData = {
  slug: "skincare-ecommerce",
  industry: "Skin Care",
  headline: "How a National Skincare Brand Maintained $1.2M Monthly Ad Spend While Growing ROAS From 2.53x to 6.08x — Generating Over $54.9M in Revenue",
  subheadline: "MEGA deployed always-on AI optimization agents and AI-powered creative production to help a massive DTC skincare brand systematically improve return on ad spend from 2.53x to 6.08x at scale — maintaining over $1.2M in monthly ad spend while generating $54.9M in ecommerce revenue across 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "6.08", unit: "x", label: "Peak ROAS Achieved" },
    { value: "54.9", unit: "M", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Skincare"],
  company: {
    industry: "Skin Care",
    employees: "145",
    revenue: "$48M",
    location: "National (USA)",
    description: "A large direct-to-consumer skincare brand selling a comprehensive line of serums, moisturizers, cleansers, sunscreens, and treatment products through its own Shopify Plus storefront and select marketplace channels. The brand had built massive market presence through organic social, influencer partnerships, and retail distribution, generating roughly $48M in annual revenue. Paid advertising was managed by a top-tier agency spending approximately $1.2M per month across Meta and Google, achieving a ~2.5x ROAS that had remained flat for over six months. The agency's weekly optimization cadence couldn't keep pace with auction dynamics at this scale, creative was refreshed quarterly at significant additional cost, and the brand's leadership wanted ROAS to improve toward 5-6x without reducing spend — a challenge the agency had been unable to solve despite multiple strategy pivots. At $1.2M monthly ad spend, even small ROAS improvements translated to millions in additional revenue.",
  },
  challenges: [
    {
      title: "Flat ROAS at 2.5x Despite $1.2M Monthly Investment",
      description: "At $1.2M per month in ad spend, the brand was generating roughly $3M in attributed revenue — a 2.5x ROAS that had plateaued for six months. Every optimization attempt by the previous agency yielded marginal improvements that disappeared within weeks. The broad campaign structure — a handful of prospecting campaigns and standard retargeting — meant budget was distributed evenly rather than weighted toward what was converting. At this scale, even a 0.5x ROAS improvement meant $600K+ in additional monthly revenue, making the optimization challenge enormously high-stakes.",
    },
    {
      title: "Creative Stagnation at Scale Driving Up Acquisition Costs",
      description: "The agency rotated 8-10 product-focused ads that were refreshed quarterly at $15K-$25K per creative cycle. In the skincare category — where consumers respond to transformation imagery, routine demonstrations, ingredient education, and authentic testimonials — generic product shots generated scroll-past behavior and steadily climbing CPAs. At $1.2M monthly spend, creative fatigue hit faster and harder, burning through audiences in days rather than weeks. The economics of agency creative production at this velocity were unsustainable.",
    },
    {
      title: "Fragmented Attribution Across a Massive Campaign Portfolio",
      description: "With dozens of active campaigns across Meta, Google, and Shopping, attribution was a mess. Meta pixel lacked server-side Conversions API tracking, losing an estimated 15-25% of conversion events. Google Ads lacked proper ecommerce event tracking across the full product catalog. Without reliable data at this spend level, millions were allocated based on incomplete signals — the equivalent of navigating a billion-dollar brand with a broken compass.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Tracking Overhaul & Campaign Architecture Rebuild",
      items: [
        "Complete attribution infrastructure rebuild — implemented Meta Conversions API with server-side event tracking, configured Google Ads enhanced conversions, and established consistent UTM taxonomy across all campaigns to create a single source of truth for revenue attribution across $1.2M+ monthly spend",
        "Audited all existing campaigns and identified that roughly 22% of attributed conversions were branded search cannibalization — at this spend level, that represented over $260K/month in misattributed budget. Restructured to exclude branded traffic from prospecting ROAS calculations",
        "Product-level analysis across 200+ SKUs — mapped each product by margin, repeat purchase rate, and review sentiment to identify hero products (vitamin C serum, retinol night cream, peptide eye cream, hydrating cleanser) for aggressive scaling versus efficiency-focused products",
        "Rebuilt campaign architecture from scratch: 18 separate prospecting and retargeting structures segmented by product category, skin concern, and price point with margin-adjusted ROAS targets — high-margin serums received aggressive scaling budgets while lower-margin basics received efficiency-focused bids",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — continuously monitoring performance signals and adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the previous agency's weekly review cadence",
        "Launched initial creative testing suite with 85 AI-generated ad variations across formats — before-and-after skin transformation sequences, ingredient science carousels, morning/evening routine walkthroughs, and authentic UGC-style testimonials — replacing the stale rotation immediately",
        "On-site conversion optimization — redesigned product pages with clinical ingredient breakdowns, real customer photo reviews, and optimized checkout flow with progressive free shipping thresholds to increase add-to-cart and purchase conversion rates",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & ROAS Acceleration",
      items: [
        "Reviewed 30-day performance data with clean attribution — UGC-style transformation creative outperformed legacy product shots by 3.1x on click-through rate and 2.2x on purchase conversion, validating the creative strategy shift and informing the next production cycle",
        "Scaled AI-generated creative production to 120+ new variations per month, testing hook styles (ingredient education vs. transformation journeys vs. routine demos vs. dermatologist-style authority), visual approaches (close-up texture shots vs. lifestyle imagery), and copy angles (clean beauty converts vs. skincare skeptics vs. routine builders) — all included in MEGA's flat management fee with zero additional creative charges",
        "AI optimization agents identified that 28-42 female audiences with wellness, clean beauty, and anti-aging interests had 38% lower cost per acquisition than broader targeting — shifted hundreds of thousands in budget automatically within hours, a change that would have waited for the next weekly agency call under the previous arrangement",
        "ROAS improvement from 2.5x to 3.8x in 90 days while maintaining $1.2M+ monthly spend — translating to an additional $1.5M+ in monthly revenue from the same ad investment through pure optimization gains",
        "Built dynamic retargeting sequences — cart abandoners received product-specific reminders within 2 hours, browse abandoners entered a 5-day skincare education sequence, and past purchasers received cross-sell campaigns timed to product replenishment cycles (60-90 days for serums, 45 days for cleansers)",
        "Launched subscribe-and-save creative testing — AI-generated ads promoting 15% recurring discount drove 23% of new orders into subscription, increasing projected customer lifetime value and justifying higher initial acquisition costs at scale",
      ],
    },
    {
      phase: 3,
      months: "90–300 days",
      title: "Scale to Peak Efficiency & Seasonal Dominance",
      items: [
        "With 100+ creatives in active rotation at any given time, the campaign eliminated creative fatigue entirely — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable even at $1.2M+ monthly spend",
        "Built dedicated Black Friday and Cyber Monday campaign structure 6 weeks in advance — pre-warmed lookalike audiences from existing high-LTV purchasers, created urgency-driven gift set bundles and limited-edition holiday kits, and configured automated budget scaling rules that increased daily spend during peak conversion windows",
        "AI agents detected the seasonal shift toward holiday gifting in November and automatically adjusted creative messaging from personal skincare routine angles to gift-giving hooks within hours — capturing intent that competitors running static seasonal campaigns missed entirely",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, achieving 6.08x ROAS at elevated spend levels even as auction competition drove CPMs up 35-45% across the skincare category",
        "Expanded Google Shopping presence with optimized product feeds across 200+ SKUs, lifestyle imagery, competitive pricing annotations, and seasonal promotional callouts that captured high-intent searches the brand had previously been invisible for",
        "Advanced audience segmentation using AI-identified behavioral patterns — high-LTV repeat buyers, subscription-prone customers, gift purchasers, and ingredient-focused researchers each received tailored creative and messaging, improving relevance scores and reducing wasted spend across the massive campaign portfolio",
        "Post-holiday retention strategy — January campaigns shifted to New Year skincare resolution messaging, replenishment reminders for holiday purchasers, and subscription conversion offers for one-time gift recipients, maintaining strong 5.9x ROAS even as the seasonal peak subsided",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time rather than the typical agency cycle of weekly reviews, resulting in consistent ROAS improvement from 2.53x to 6.08x over the entire engagement",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$12.42M" },
      { label: "Add to Carts", value: "1,276,858" },
      { label: "Avg Cost Per Cart", value: "$9.73", note: "↓41% reduction" },
      { label: "Orders", value: "682,470" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Apr 2025: Month 1 — baseline with inherited campaigns, new tracking deployed. ~2.53x ROAS.
      { month: "Apr '25", spend: 1172345, leads: 1174520, cpl: 1.00, qualified: 96755, cpql: 12.12, deals: 40637, revenue: 2942514.17, roas: 2.51 },
      // May 2025: Campaign architecture rebuilt. AI agents deployed. Early optimization gains.
      { month: "May '25", spend: 1198712, leads: 1278431, cpl: 0.94, qualified: 103707, cpql: 11.56, deals: 46668, revenue: 3464022.64, roas: 2.89 },
      // Jun 2025: Summer skincare demand rising. Creative testing scaled to 120+ variations. Spend steady.
      { month: "Jun '25", spend: 1243891, leads: 1305890, cpl: 0.95, qualified: 113615, cpql: 10.95, deals: 54535, revenue: 4192205.45, roas: 3.37 },
      // Jul 2025: Peak summer. Body care + SPF categories surging. AI shifted budget to top performers.
      { month: "Jul '25", spend: 1267543, leads: 1291823, cpl: 0.98, qualified: 123012, cpql: 10.30, deals: 61506, revenue: 4828851.12, roas: 3.81 },
      // Aug 2025: Subscription campaigns matured. Retargeting sequences optimized.
      { month: "Aug '25", spend: 1228176, leads: 1356422, cpl: 0.91, qualified: 121639, cpql: 10.10, deals: 64469, revenue: 5132777.47, roas: 4.18 },
      // Sep 2025: Fall transition. Google Shopping expansion. AI identified high-value audience micro-segments.
      { month: "Sep '25", spend: 1214893, leads: 1382741, cpl: 0.88, qualified: 126040, cpql: 9.64, deals: 69322, revenue: 5625019.08, roas: 4.63 },
      // Oct 2025: Q4 prep. Pre-warming holiday audiences. Gift set creative testing launched.
      { month: "Oct '25", spend: 1251678, leads: 1432021, cpl: 0.87, qualified: 134536, cpql: 9.30, deals: 76686, revenue: 6346458.36, roas: 5.07 },
      // Nov 2025: Black Friday / Cyber Monday. Elevated spend. AI managed real-time bids for peak ROAS.
      { month: "Nov '25", spend: 1362415, leads: 1706768, cpl: 0.80, qualified: 158865, cpql: 8.58, deals: 98496, revenue: 8281481.28, roas: 6.08 },
      // Dec 2025: Holiday gifting tail + early winter skincare. Strong month normalizing from BF peak.
      { month: "Dec '25", spend: 1285932, leads: 1343084, cpl: 0.96, qualified: 144241, cpql: 8.92, deals: 83660, revenue: 6982410.20, roas: 5.43 },
      // Jan 2026: New Year skincare resolutions. Replenishment + subscription push. ROAS holding strong.
      { month: "Jan '26", spend: 1193847, leads: 1414589, cpl: 0.84, qualified: 154448, cpql: 7.73, deals: 86491, revenue: 7056395.78, roas: 5.91 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$54.85M", growth: "+141% ROAS improvement" },
    { label: "Total Orders", value: "682,470", growth: "across 10 months" },
    { label: "Average Order Value", value: "$80.38", growth: "national skincare DTC" },
    { label: "Blended ROAS", value: "4.42x", growth: "from 2.51x starting" },
  ],
};
