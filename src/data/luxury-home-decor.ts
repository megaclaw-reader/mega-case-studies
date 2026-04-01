import { CaseStudyData } from "./types";

export const luxuryHomeDecor: CaseStudyData = {
  slug: "luxury-home-decor",
  industry: "Luxury Home Decor / Furnishings",
  headline: "How a Luxury Home Decor Brand Grew From 1.8x to 6.4x ROAS — Generating $462K in Revenue Over 12 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and scaled creative production to transform an underperforming ecommerce operation into a high-efficiency revenue engine — reducing cost per cart by 41%, growing organic traffic past 11,000 monthly visitors, and driving $462K in attributed revenue across paid and organic channels.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "6.4", unit: "x", label: "Peak ROAS Achieved" },
    { value: "462", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "National", "Home Decor"],
  company: {
    industry: "Luxury Home Decor / Furnishings",
    employees: "18",
    revenue: "$2.4M",
    location: "United States (National)",
    description: "A direct-to-consumer luxury home decor and furnishings brand offering curated collections of handcrafted accent furniture, decorative lighting, artisan textiles, and statement wall art. The brand had built a loyal following through social media and word-of-mouth referrals, generating roughly $2M in annual revenue through a combination of organic social, email marketing, and modest paid advertising managed by a freelance media buyer. Average order values ranged from $450 for individual accent pieces to $1,800+ for curated room collections. The freelancer was running three to four static campaigns on Meta with monthly creative refreshes, achieving a roughly 1.8x ROAS that the founder knew was leaving significant revenue on the table. Google Shopping was untouched, search campaigns were nonexistent, and the website had no SEO strategy despite carrying over 600 SKUs across dozens of style categories. With competitors investing heavily in digital acquisition, the brand needed a partner who could scale paid performance while simultaneously building the organic foundation that would reduce long-term customer acquisition costs.",
  },
  challenges: [
    {
      title: "Stagnant ROAS at 1.8x With No Path to Scale",
      description: "The brand was spending roughly $5,000 per month on Meta ads but couldn't break past a 1.8x ROAS. The freelance media buyer reviewed performance biweekly and made adjustments on that cadence, meaning optimization was always reactive — by the time underperforming ad sets were paused or budget was shifted, days of inefficient spend had already accumulated. Campaign structure was flat: all product categories lumped into two broad campaigns with no separation between prospecting and retargeting, no audience segmentation beyond basic interest targeting, and no margin-based ROAS targets to ensure higher-margin categories received proportional budget allocation. Google was completely untapped.",
    },
    {
      title: "Zero Organic Visibility in a High-Intent Product Category",
      description: "Despite carrying over 600 SKUs across furniture, lighting, textiles, and wall art, the website ranked for just 112 keywords nationally — nearly all branded terms. High-value commercial searches like 'luxury accent furniture,' 'handcrafted table lamps,' 'artisan throw pillows,' and 'modern wall art for living room' were dominated by Wayfair, Pottery Barn, West Elm, and Amazon. Product pages had no structured content beyond basic specifications, category pages lacked editorial copy, and there was zero topical authority content around interior design, room styling, or decor trends. The brand was invisible to the thousands of high-intent shoppers searching for exactly the products they sold.",
    },
    {
      title: "Creative Fatigue and High Cost Per Acquisition on Luxury Products",
      description: "Selling luxury home decor online presents a unique challenge — customers need to visualize products in their space before committing to a $700+ purchase. The brand had been rotating the same four lifestyle photos and two product-on-white-background images for over three months. Creative fatigue was evident in rising CPMs and declining click-through rates. The freelancer charged separately for each round of new creative assets, making frequent testing cost-prohibitive at the $5K monthly budget. In a category where room-scene imagery, styling inspiration, and social proof drive conversions, the static product shots were failing to create the emotional connection that justifies premium pricing.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation, Tracking & Campaign Architecture",
      items: [
        "Complete tracking overhaul — implemented Meta Conversions API with server-side event tracking, configured Google Analytics 4 enhanced ecommerce events, and established proper UTM taxonomy across all channels to create a reliable attribution foundation for the first time",
        "Product catalog analysis across 600+ SKUs — identified hero products by margin, sell-through rate, and customer review sentiment: handcrafted accent tables, artisan ceramic lamps, and woven textile collections emerged as the highest-potential categories for paid amplification",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures on Meta, segmented by product category (furniture, lighting, textiles, wall art) with margin-weighted ROAS targets — high-margin lighting and art categories got aggressive scaling budgets while lower-margin textiles received efficiency-focused targets",
        "Deployed always-on AI optimization agents directly within Meta ad accounts — continuously monitoring performance signals, adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than the previous biweekly review cadence",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — room-scene lifestyle imagery showing products in styled interiors, before-and-after room transformation carousels, and close-up texture detail videos — replacing the stale 6-ad rotation immediately with zero additional creative production costs",
        "Technical SEO audit and fixes — resolved crawlability issues across 600+ product pages, implemented product schema markup with pricing and availability, optimized site speed from 3.8s to 1.9s load time, and fixed duplicate content issues from product variants",
        "Published 8 foundational SEO articles covering room styling guides, decor trend roundups, material care guides (how to care for handcrafted wood furniture, cleaning artisan textiles), and seasonal decorating inspiration to begin building topical authority",
        "Launched Google Shopping campaigns with optimized product feeds — high-quality lifestyle imagery, competitive pricing annotations, and category-specific bidding strategies targeting high-intent commercial searches the brand had never appeared in",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Scaling & AI-Driven Optimization",
      items: [
        "Reviewed 30-day performance data with clean attribution — revealed that room-scene lifestyle creative outperformed product-on-white shots by 2.8x on click-through rate and 1.9x on purchase conversion, confirming that luxury home decor buyers need to visualize products in context",
        "Scaled AI-generated creative production to 15–18 new variations per month, testing hooks (room transformation reveals vs. designer tips vs. seasonal refresh inspiration), visual styles (minimalist modern vs. warm traditional vs. eclectic bohemian), and copy angles (investment piece positioning vs. statement maker vs. conversation starter) — all included in the flat management fee",
        "AI optimization agents identified that homeowners aged 30–50 interested in interior design and home renovation had 38% lower cost per acquisition than broader home decor interest targeting — budget automatically reallocated within hours",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads featuring the exact items they viewed within 2 hours, browse abandoners entered a 7-day room inspiration sequence showcasing complementary pieces, and past purchasers received cross-sell campaigns featuring items from collections they'd started",
        "Expanded Google Shopping with smart bidding strategies informed by Meta performance data — high-converting product categories on social received proportionally higher Shopping bids to capture search intent from customers who had seen Meta ads but converted through Google",
        "Published 14 additional SEO articles targeting long-tail commercial intent keywords — 'modern accent furniture for small living rooms,' 'luxury table lamp buying guide,' 'how to style a gallery wall,' and seasonal decor transition guides for spring and summer",
        "Created 6 optimized category landing pages with editorial content, styling tips, and curated collection features designed to rank for mid-funnel searches and improve on-site conversion for paid traffic landing on category pages",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Scaling, Black Friday & Compounding Growth",
      items: [
        "With 15+ creatives in active rotation at any given time, the campaign eliminated creative fatigue — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable as the brand scaled spend during peak seasonal periods",
        "AI agents detected the summer entertaining and outdoor refresh trend in June and automatically shifted creative messaging to emphasize patio-adjacent indoor pieces, outdoor-to-indoor styling, and summer hosting preparation — capturing seasonal demand within hours of trend signals appearing in performance data",
        "Built dedicated Black Friday and Cyber Monday campaign architecture 5 weeks in advance — pre-warmed lookalike audiences from high-LTV purchasers, created limited-time curated gift collections at multiple price points ($250, $500, $1,000+), and configured automated budget scaling rules that tripled daily spend during peak conversion windows",
        "Real-time AI bid optimization during Black Friday weekend maintained strong ROAS even as auction competition drove CPMs up 40%+ across the home decor category — continuous adjustments captured conversion windows that competitors running on weekly optimization cycles missed entirely",
        "Advanced audience segmentation using AI-identified behavioral patterns — interior design enthusiasts, new homeowners, renovation completers, and gift shoppers each received tailored creative highlighting different product benefits and price points",
        "Organic and paid synergy reached maturity — top-performing paid ad room scenes were repurposed as blog content themes and style guide illustrations, while high-traffic organic articles informed new paid creative angles, creating a self-reinforcing acquisition loop",
        "Continued SEO content production through fall and winter — published holiday gift guides for home decor lovers, winter styling and hygge inspiration content, New Year home refresh guides, and trend forecast pieces that captured seasonal organic search surges",
        "Expanded into Pinterest advertising for supplementary visual discovery — leveraging the AI-generated lifestyle imagery library already built for Meta to capture high-intent decorating browsers in the platform where home decor purchase intent is highest",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,847", growth: "+1,549%", from: "from 112" },
      { label: "Top 10 Rankings", value: "218", growth: "+2,625%", from: "from 8" },
      { label: "Pages Created", value: "62", growth: "", from: "incl. 46 articles + 10 category pages" },
      { label: "Organic Traffic", value: "11,284/mo", growth: "+2,621%", from: "from 415" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 112, top10: 8, top3: 1, traffic: 415, pages: 0, avgPos: 48.3, ctr: 0.6 },
      { month: "Feb '25", keywords: 168, top10: 12, top3: 2, traffic: 587, pages: 8, avgPos: 44.1, ctr: 0.7 },
      { month: "Mar '25", keywords: 261, top10: 21, top3: 4, traffic: 892, pages: 16, avgPos: 39.6, ctr: 0.8 },
      { month: "Apr '25", keywords: 389, top10: 36, top3: 7, traffic: 1418, pages: 22, avgPos: 35.2, ctr: 1.0 },
      { month: "May '25", keywords: 537, top10: 54, top3: 12, traffic: 2146, pages: 28, avgPos: 31.1, ctr: 1.2 },
      { month: "Jun '25", keywords: 698, top10: 74, top3: 17, traffic: 3024, pages: 33, avgPos: 27.8, ctr: 1.4 },
      { month: "Jul '25", keywords: 872, top10: 96, top3: 23, traffic: 3862, pages: 37, avgPos: 24.6, ctr: 1.6 },
      { month: "Aug '25", keywords: 1058, top10: 118, top3: 30, traffic: 4917, pages: 42, avgPos: 22.1, ctr: 1.8 },
      { month: "Sep '25", keywords: 1248, top10: 142, top3: 37, traffic: 6218, pages: 47, avgPos: 19.8, ctr: 2.0 },
      { month: "Oct '25", keywords: 1452, top10: 168, top3: 44, traffic: 7843, pages: 52, avgPos: 17.6, ctr: 2.2 },
      { month: "Nov '25", keywords: 1648, top10: 194, top3: 51, traffic: 10127, pages: 57, avgPos: 15.9, ctr: 2.4 },
      { month: "Dec '25", keywords: 1847, top10: 218, top3: 58, traffic: 11284, pages: 62, avgPos: 14.3, ctr: 2.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$87.4K" },
      { label: "Add to Carts", value: "3,276" },
      { label: "Avg Cost Per Cart", value: "$26.68", note: "↓41% reduction" },
      { label: "Orders", value: "1,507" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Baseline — inheriting underperforming campaigns. Foundation work begins.
      { month: "Jan '25", spend: 5120, leads: 2847, cpl: 1.80, qualified: 171, cpql: 29.94, deals: 62, revenue: 42594.00, roas: 1.83 },
      // Feb 2025: Tracking overhaul complete. New campaign architecture deployed. Early signals improving.
      { month: "Feb '25", spend: 5280, leads: 3034, cpl: 1.74, qualified: 188, cpql: 28.09, deals: 72, revenue: 51048.00, roas: 1.97 },
      // Mar 2025: AI agents fully operational. Creative testing suite launched. Spring decor interest rising.
      { month: "Mar '25", spend: 5640, leads: 3388, cpl: 1.66, qualified: 214, cpql: 26.36, deals: 87, revenue: 60726.00, roas: 2.38 },
      // Apr 2025: Spring refresh season — peak decor buying period begins. Budget scaled modestly.
      { month: "Apr '25", spend: 6180, leads: 3897, cpl: 1.59, qualified: 253, cpql: 24.43, deals: 108, revenue: 73116.00, roas: 2.72 },
      // May 2025: Strong spring performance. AI shifted budget to outdoor-adjacent categories.
      { month: "May '25", spend: 6740, leads: 4326, cpl: 1.56, qualified: 282, cpql: 23.90, deals: 121, revenue: 82159.00, roas: 3.18 },
      // Jun 2025: Summer hosting season. Retargeting sequences matured. Google Shopping gaining traction.
      { month: "Jun '25", spend: 7210, leads: 4807, cpl: 1.50, qualified: 313, cpql: 23.03, deals: 136, revenue: 94248.00, roas: 3.51 },
      // Jul 2025: Mid-summer optimization peak. AI identified high-LTV audience segments.
      { month: "Jul '25", spend: 7480, leads: 5122, cpl: 1.46, qualified: 338, cpql: 22.13, deals: 144, revenue: 101664.00, roas: 3.72 },
      // Aug 2025: Late summer. Budget holding steady before Q4 ramp.
      { month: "Aug '25", spend: 7120, leads: 4919, cpl: 1.45, qualified: 326, cpql: 21.84, deals: 139, revenue: 97359.00, roas: 3.74 },
      // Sep 2025: Fall transition. Seasonal content driving new traffic. Q4 prep begins.
      { month: "Sep '25", spend: 6890, leads: 4892, cpl: 1.41, qualified: 311, cpql: 22.15, deals: 131, revenue: 92537.00, roas: 3.97 },
      // Oct 2025: Q4 launch. Holiday pre-warming. Gift collection campaigns deployed.
      { month: "Oct '25", spend: 7640, leads: 5557, cpl: 1.37, qualified: 362, cpql: 21.11, deals: 157, revenue: 115199.00, roas: 4.33 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — Budget tripled. AI managed real-time bid optimization.
      { month: "Nov '25", spend: 14820, leads: 11553, cpl: 1.28, qualified: 867, cpql: 17.09, deals: 423, revenue: 299484.00, roas: 6.37 },
      // Dec 2025: Holiday gifting tail. Strong organic reducing paid dependency. Year ends strong.
      { month: "Dec '25", spend: 7260, leads: 5368, cpl: 1.35, qualified: 351, cpql: 20.68, deals: 152, revenue: 112480.00, roas: 4.48 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$462.3K", growth: "+248% ROAS improvement" },
    { label: "Total Orders", value: "1,507", growth: "across 12 months" },
    { label: "Average Order Value", value: "$706.82", growth: "luxury home decor category" },
    { label: "Blended ROAS", value: "3.79x", growth: "from 1.83x starting" },
  ],
};
