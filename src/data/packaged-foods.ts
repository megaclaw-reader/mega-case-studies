import { CaseStudyData } from "./types";

export const packagedFoods: CaseStudyData = {
  slug: "packaged-foods",
  industry: "Food and Beverage / Packaged Foods",
  headline: "How a DTC Packaged Foods Brand Achieved 3.10x Blended ROAS — Generating Over $289K in Ecommerce Revenue in 12 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and scaled creative production to help a specialty packaged foods brand break through a ROAS plateau, growing from 1.28x to a 5.47x peak and generating over $289K in ecommerce revenue while building a compounding organic search presence from scratch.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "5.47", unit: "x", label: "Peak ROAS Achieved" },
    { value: "289.5", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Food & Beverage"],
  company: {
    industry: "Food and Beverage / Packaged Foods",
    employees: "8",
    revenue: "$620K",
    location: "National (USA)",
    description: "A direct-to-consumer packaged foods brand selling a curated line of artisanal sauces, seasonings, and specialty snack products through its own Shopify storefront and Amazon. The brand had built a loyal following through farmers markets and local retail before expanding online, reaching roughly $620K in annual revenue. Paid advertising was managed in-house by the founder spending approximately $6K–$8K per month on Meta and Google, achieving a ~1.8x ROAS that barely broke even after product costs and fulfillment. Creative consisted of a handful of product-on-white photos that had been running for months. The brand had virtually no organic search presence — the website was built for transactions, not content — and was entirely dependent on paid channels for customer acquisition. With rising ad costs in the food and beverage category and no SEO foundation to fall back on, the founder needed a partner who could simultaneously improve paid efficiency and build a sustainable organic traffic engine.",
  },
  challenges: [
    {
      title: "Break-Even ROAS at 1.8x With No Room to Scale",
      description: "At $6K–$8K per month in ad spend, the brand was generating roughly $11K–$14K in attributed revenue — a ~1.8x ROAS that left almost nothing after accounting for cost of goods sold, fulfillment, and packaging. The founder managed campaigns personally between production runs, checking performance every few days and making adjustments when time allowed. Campaign structure was minimal — one broad prospecting campaign on Meta and a basic branded search campaign on Google — with no audience segmentation, no product-level targeting, and no retargeting sequences. Budget was spread thin across products rather than concentrated on proven winners, and there was no systematic approach to testing or optimization.",
    },
    {
      title: "Zero Organic Search Presence and Total Paid Dependency",
      description: "The brand's website was purely transactional — product pages with basic descriptions, no blog, no recipe content, no ingredient pages, and no SEO infrastructure whatsoever. Organic search drove fewer than 200 visitors per month, almost entirely branded queries from existing customers. In a category where consumers actively search for recipes, dietary solutions, ingredient alternatives, and specialty food recommendations, the brand was invisible to millions of potential customers discovering products through search. Every single new customer had to be acquired through paid channels, making the business fragile and entirely dependent on ad platform economics.",
    },
    {
      title: "Stale Creative and No Testing Infrastructure",
      description: "The brand had been running the same 4 product photos for over five months — simple shots of jars and bags against white backgrounds that blended into every other food brand in the feed. In a category where consumers respond to recipe demonstrations, plating inspiration, behind-the-scenes production content, and taste-test reactions, static product imagery generated minimal engagement. The founder couldn't justify paying a food photographer $2K–$3K per shoot for new creative when ad performance was already barely breaking even, creating a vicious cycle where poor creative drove poor results which constrained the budget for better creative.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Tracking Foundation & Campaign Architecture",
      items: [
        "Complete tracking infrastructure setup — implemented Meta Conversions API with server-side event tracking, configured Google Ads enhanced ecommerce conversions, and established proper UTM taxonomy across all campaigns to create reliable attribution for the first time",
        "Product catalog analysis across 18 SKUs — identified top performers (signature hot sauce, everything seasoning blend, artisanal granola) based on margin, repeat purchase rate, and customer reviews to prioritize in campaign segmentation",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures segmented by product category (sauces and seasonings, snacks, gift sets) with margin-based ROAS targets — high-margin hero products received aggressive scaling budgets while lower-margin items received efficiency-focused bids",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — continuously monitoring performance signals and adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the founder's every-few-days check-in cadence",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — recipe-in-action videos, ingredient close-ups, unboxing experiences, and lifestyle plating shots — replacing the stale product-on-white rotation immediately with zero production costs",
        "Technical SEO audit and foundation — fixed site speed (3.8s to 1.6s load time), implemented product schema markup, set up proper URL structure for future content hub, and created XML sitemap",
        "Published 8 foundational SEO articles covering recipe guides using the brand's products, ingredient sourcing stories, dietary lifestyle content (keto-friendly cooking, clean eating), and food pairing guides to begin building organic visibility in high-intent search categories",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & Content Scaling",
      items: [
        "Reviewed 30-day performance data with clean attribution — recipe-in-action video creative outperformed static product shots by 2.8x on click-through rate and 1.9x on purchase conversion, confirming that food content needs to show the product in use, not sitting on a shelf",
        "Scaled AI-generated creative production to 16–20 new variations per month, testing hooks (recipe walkthroughs vs. taste-test reactions vs. pantry-essentials education vs. meal prep content), visual styles (overhead cooking shots vs. close-up texture shots vs. lifestyle dinner table scenes), and copy angles (health-conscious foodies vs. home chefs vs. gift buyers) — all included in the flat management fee with zero additional production charges",
        "AI optimization agents identified that 28–45 audiences interested in home cooking, specialty foods, and clean eating had 41% lower cost per acquisition than broader foodie targeting — automatically shifted budget allocation within hours rather than waiting for periodic manual review",
        "Built dynamic retargeting sequences — cart abandoners received product-specific reminders featuring recipe inspiration within 2 hours, browse abandoners entered a 5-day cooking content sequence, and past purchasers received cross-sell campaigns timed to product consumption cycles (30–45 days for sauces, 20–30 days for snacks)",
        "Published 14 additional SEO articles targeting long-tail keywords — specific recipe applications, dietary restriction guides, holiday cooking content, and comparison articles positioning the brand's ingredients against grocery store alternatives",
        "Launched programmatic category pages optimized for commercial-intent searches like 'best artisanal hot sauce online' and 'gourmet seasonings for home cooking'",
        "Implemented review schema and customer recipe photo galleries on product pages to improve organic click-through rates and on-site conversion",
        "Organic and paid synergy emerging — top-performing paid ad hooks (recipe-focused content) informed SEO content calendar, while early organic traffic data revealed high-intent keywords that shaped paid campaign targeting",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scale, Seasonal Peaks & Compounding Organic Growth",
      items: [
        "With 18+ creatives in active rotation at any given time, the campaign eliminated creative fatigue entirely — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable as the brand scaled monthly spend from $6K to $9K+",
        "Built dedicated Black Friday and Cyber Monday campaign structure 5 weeks in advance — pre-warmed lookalike audiences from existing high-LTV purchasers, created holiday gift box bundles and limited-edition seasonal flavors, and configured automated budget scaling rules for peak conversion windows",
        "AI agents detected the seasonal shift toward holiday gifting and entertaining in November and automatically adjusted creative messaging from everyday cooking angles to gift-giving and holiday hosting hooks within hours — capturing intent that competitors running static campaigns missed",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, achieving 5.47x ROAS at elevated spend even as competition drove costs up across the specialty food category",
        "Expanded Google Shopping presence with optimized product feeds featuring lifestyle photography, recipe suggestions in product descriptions, and seasonal promotional callouts to capture high-intent searches",
        "SEO content engine hit compounding growth — recipe and food content began ranking for hundreds of long-tail queries, driving organic sessions that converted at higher rates than paid traffic due to educational intent alignment",
        "Advanced audience segmentation using AI-identified behavioral patterns — repeat subscription buyers, holiday gift purchasers, health-conscious meal preppers, and cooking enthusiasts each received tailored creative and messaging, improving relevance and reducing wasted spend",
        "Launched subscribe-and-save campaigns for consumable products — AI-generated creative highlighting convenience and savings drove recurring orders that improved customer lifetime value and reduced acquisition cost pressure",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening in real time, resulting in ROAS growth from 1.8x to 5.47x over the full engagement",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,341", growth: "+7,223%", from: "from 114" },
      { label: "Top 10 Rankings", value: "847", growth: "+8,370%", from: "from 10" },
      { label: "Pages Created", value: "72", growth: "", from: "incl. 58 articles + 6 category pages" },
      { label: "Organic Traffic", value: "18,247/mo", growth: "+3,464%", from: "from 512" },
    ],
    monthly: [
      // Jan 2025: Baseline. Tiny organic presence, mostly branded queries.
      { month: "Jan '25", keywords: 114, top10: 10, top3: 1, traffic: 512, pages: 0, avgPos: 48.3, ctr: 0.6 },
      // Feb 2025: Technical fixes deployed, first 8 articles published. Foundation month.
      { month: "Feb '25", keywords: 189, top10: 16, top3: 2, traffic: 738, pages: 8, avgPos: 44.7, ctr: 0.7 },
      // Mar 2025: Articles indexing. More content published. Early keyword growth.
      { month: "Mar '25", keywords: 341, top10: 29, top3: 4, traffic: 1194, pages: 16, avgPos: 40.1, ctr: 0.8 },
      // Apr 2025: Content starting to rank. Recipe guides gaining traction.
      { month: "Apr '25", keywords: 587, top10: 52, top3: 8, traffic: 1243, pages: 22, avgPos: 36.4, ctr: 1.0 },
      // May 2025: Hockey stick beginning. Long-tail recipes ranking well.
      { month: "May '25", keywords: 948, top10: 89, top3: 14, traffic: 2187, pages: 28, avgPos: 32.6, ctr: 1.2 },
      // Jun 2025: Summer cooking content performing. Strong organic growth.
      { month: "Jun '25", keywords: 1467, top10: 141, top3: 23, traffic: 3521, pages: 34, avgPos: 28.9, ctr: 1.4 },
      // Jul 2025: Grilling and BBQ seasonal content surge. Significant traffic jump.
      { month: "Jul '25", keywords: 2184, top10: 213, top3: 36, traffic: 5294, pages: 40, avgPos: 25.3, ctr: 1.7 },
      // Aug 2025: Back-to-school meal prep content. Consistent growth.
      { month: "Aug '25", keywords: 3102, top10: 304, top3: 52, traffic: 7183, pages: 46, avgPos: 22.1, ctr: 1.9 },
      // Sep 2025: Fall recipes and comfort food content. Rankings maturing.
      { month: "Sep '25", keywords: 4218, top10: 412, top3: 71, traffic: 9647, pages: 52, avgPos: 19.4, ctr: 2.1 },
      // Oct 2025: Holiday cooking prep content live. Organic compounding hard.
      { month: "Oct '25", keywords: 5473, top10: 537, top3: 94, traffic: 12038, pages: 58, avgPos: 17.2, ctr: 2.3 },
      // Nov 2025: Thanksgiving and holiday recipe traffic surge. Peak seasonal organic.
      { month: "Nov '25", keywords: 6892, top10: 683, top3: 121, traffic: 15714, pages: 65, avgPos: 15.1, ctr: 2.6 },
      // Dec 2025: Holiday gifting searches + winter recipes. Strong organic close to year.
      { month: "Dec '25", keywords: 8341, top10: 847, top3: 152, traffic: 18247, pages: 72, avgPos: 13.6, ctr: 2.8 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$93.5K" },
      { label: "Add to Carts", value: "9,770" },
      { label: "Avg Cost Per Cart", value: "$9.57", note: "↓33% reduction" },
      { label: "Orders", value: "5,582" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Month 1 — baseline with founder's inherited campaigns. ~1.8x ROAS.
      { month: "Jan '25", spend: 6120, leads: 4284, cpl: 1.43, qualified: 428, cpql: 14.30, deals: 193, revenue: 7836.83, roas: 1.28 },
      // Feb 2025: Campaign rebuild deployed. AI agents active. Early tracking improvements.
      { month: "Feb '25", spend: 6340, leads: 4687, cpl: 1.35, qualified: 492, cpql: 12.89, deals: 231, revenue: 9817.50, roas: 1.55 },
      // Mar 2025: Optimization kicking in. Creative testing showing results. Spring cooking interest rising.
      { month: "Mar '25", spend: 6580, leads: 5126, cpl: 1.28, qualified: 564, cpql: 11.67, deals: 282, revenue: 12353.64, roas: 1.88 },
      // Apr 2025: AI agents identified winning audiences. Recipe video creative outperforming. Spend increasing.
      { month: "Apr '25", spend: 6870, leads: 5493, cpl: 1.25, qualified: 626, cpql: 10.97, deals: 331, revenue: 15063.41, roas: 2.19 },
      // May 2025: Summer grilling season starting. Budget scaling on performers. ROAS crossing 2.5x.
      { month: "May '25", spend: 7240, leads: 6034, cpl: 1.20, qualified: 699, cpql: 10.36, deals: 385, revenue: 18164.65, roas: 2.51 },
      // Jun 2025: Peak summer cooking. Strong seasonal demand. AI shifted to outdoor cooking angles.
      { month: "Jun '25", spend: 7680, leads: 6528, cpl: 1.18, qualified: 771, cpql: 9.96, deals: 438, revenue: 21371.34, roas: 2.78 },
      // Jul 2025: BBQ season peak. Highest summer performance. Creative rotation strong.
      { month: "Jul '25", spend: 8140, leads: 7163, cpl: 1.14, qualified: 858, cpql: 9.49, deals: 497, revenue: 25098.53, roas: 3.08 },
      // Aug 2025: Late summer. Back-to-school meal prep angle working. Retargeting sequences mature.
      { month: "Aug '25", spend: 7890, leads: 6952, cpl: 1.14, qualified: 834, cpql: 9.46, deals: 483, revenue: 24801.57, roas: 3.14 },
      // Sep 2025: Fall transition. Comfort food creative. Google Shopping expansion launched.
      { month: "Sep '25", spend: 7560, leads: 6804, cpl: 1.11, qualified: 816, cpql: 9.26, deals: 478, revenue: 25283.02, roas: 3.34 },
      // Oct 2025: Q4 prep. Holiday gifting audiences pre-warmed. Gift box campaigns tested.
      { month: "Oct '25", spend: 8230, leads: 7818, cpl: 1.05, qualified: 938, cpql: 8.77, deals: 563, revenue: 30575.37, roas: 3.72 },
      // Nov 2025: Black Friday / Cyber Monday. Budget scaled aggressively. AI managed real-time bids. Peak ROAS.
      { month: "Nov '25", spend: 12470, leads: 13593, cpl: 0.92, qualified: 1766, cpql: 7.06, deals: 1129, revenue: 68211.36, roas: 5.47 },
      // Dec 2025: Holiday gifting tail. Strong but normalizing from BF peak. Organic reducing paid pressure.
      { month: "Dec '25", spend: 8380, leads: 8139, cpl: 1.03, qualified: 978, cpql: 8.57, deals: 572, revenue: 30938.52, roas: 3.69 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$289.5K", growth: "+327% ROAS improvement" },
    { label: "Total Orders", value: "5,582", growth: "across 12 months" },
    { label: "Average Order Value", value: "$51.87", growth: "specialty packaged foods" },
    { label: "Blended ROAS", value: "3.10x", growth: "from 1.28x starting" },
  ],
};
