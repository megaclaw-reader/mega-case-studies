import { CaseStudyData } from "./types";

export const luxuryHomeDecor: CaseStudyData = {
  slug: "luxury-home-decor",
  industry: "Luxury Home Decor / Furnishings",
  headline: "How a National Luxury Home Decor Brand Scaled From 1.8x to 4.0x Blended ROAS — Generating $348K in Revenue Over 12 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and scaled creative production to transform an underperforming ecommerce operation into a high-efficiency revenue engine — reducing cost per cart by 51%, growing organic traffic past 11,000 monthly visitors, and generating $348K in attributed revenue across paid and organic channels in 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "6.41", unit: "x", label: "Peak ROAS Achieved" },
    { value: "348", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "National", "Home Decor"],
  company: {
    industry: "Luxury Home Decor / Furnishings",
    employees: "18",
    revenue: "$2.4M",
    location: "United States (National)",
    description: "A direct-to-consumer luxury home decor and furnishings brand offering curated collections of artisan ceramics, decorative lighting, handwoven textiles, statement wall art, and accent furniture pieces. The brand had built a loyal following through organic social media and word-of-mouth referrals, generating roughly $2M in annual revenue through a combination of email marketing, organic social, and modest paid advertising managed by a freelance media buyer. Average order values ranged from $120 for individual accent pieces like vases and throw pillows to $800+ for curated room collections and statement furniture. The freelancer was running three to four static campaigns on Meta with monthly creative refreshes, achieving a roughly 1.8x ROAS that the founder knew was leaving significant revenue on the table. Google Shopping was untouched, search campaigns were nonexistent, and the website had no SEO strategy despite carrying over 600 SKUs across dozens of style categories. With competitors investing heavily in digital acquisition, the brand needed a partner who could scale paid performance while simultaneously building the organic foundation that would reduce long-term customer acquisition costs.",
  },
  challenges: [
    {
      title: "Stagnant ROAS at 1.8x With No Path to Scale",
      description: "The brand was spending roughly $5,000 per month on Meta ads but couldn't break past a 1.8x ROAS. The freelance media buyer reviewed performance biweekly and made adjustments on that cadence, meaning optimization was always reactive — by the time underperforming ad sets were paused or budget was shifted, days of inefficient spend had already accumulated. Campaign structure was flat: all product categories lumped into two broad campaigns with no separation between prospecting and retargeting, no audience segmentation beyond basic interest targeting, and no margin-based ROAS targets to ensure higher-margin categories received proportional budget allocation. Google was completely untapped, leaving thousands of high-intent commercial searches on the table.",
    },
    {
      title: "Zero Organic Visibility in a Competitive Home Decor Category",
      description: "Despite carrying over 600 SKUs across ceramics, lighting, textiles, wall art, and furniture, the website ranked for just 112 keywords nationally — nearly all branded terms. High-value commercial searches like 'luxury accent furniture,' 'handcrafted table lamps,' 'artisan throw pillows,' and 'modern wall art for living room' were dominated by Wayfair, Pottery Barn, West Elm, and Amazon. Product pages had no structured content beyond basic specifications, category pages lacked editorial copy, and there was zero topical authority content around interior design, room styling, or decor trends. The brand was invisible to the thousands of high-intent shoppers searching for exactly the products they sold.",
    },
    {
      title: "Creative Fatigue and Rising Acquisition Costs on Luxury Products",
      description: "Selling luxury home decor online presents a unique challenge — customers need to visualize products in their space before committing to a purchase. The brand had been rotating the same four lifestyle photos and two product-on-white-background images for over three months. Creative fatigue was evident in rising CPMs and declining click-through rates. The freelancer charged separately for each round of new creative assets, making frequent testing cost-prohibitive at the $5K monthly budget. In a category where room-scene imagery, styling inspiration, and social proof drive conversions, the static product shots were failing to create the emotional connection that justifies premium pricing.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation, Tracking & Campaign Architecture",
      items: [
        "Complete tracking overhaul — implemented Meta Conversions API with server-side event tracking, configured Google Analytics 4 enhanced ecommerce events, and established proper UTM taxonomy across all channels to create a reliable attribution foundation for the first time",
        "Product catalog analysis across 600+ SKUs — identified hero products by margin, sell-through rate, and customer review sentiment: artisan ceramic collections, handwoven textile sets, and decorative lighting emerged as the highest-potential categories for paid amplification",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting structures on Meta, segmented by product category (ceramics, lighting, textiles, wall art, furniture) with margin-weighted ROAS targets — high-margin lighting and art categories got aggressive scaling budgets while lower-margin textiles received efficiency-focused targets",
        "Deployed always-on AI optimization agents directly within Meta ad accounts — continuously monitoring performance signals, adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than the previous biweekly review cadence",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — room-scene lifestyle imagery showing products in styled interiors, before-and-after room transformation carousels, and close-up texture detail videos — replacing the stale 6-ad rotation immediately with zero additional creative production costs",
        "Technical SEO audit and fixes — resolved crawlability issues across 600+ product pages, implemented product schema markup with pricing and availability, optimized site speed from 3.8s to 1.9s load time, and fixed duplicate content issues from product color and size variants",
        "Published 8 foundational SEO articles covering room styling guides, decor trend roundups, material care guides (handcrafted wood furniture maintenance, artisan textile cleaning), and seasonal decorating inspiration to begin building topical authority",
        "Launched Google Shopping campaigns with optimized product feeds — high-quality lifestyle imagery, competitive pricing annotations, and category-specific bidding strategies targeting high-intent commercial searches the brand had never appeared in",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Scaling & AI-Driven Optimization",
      items: [
        "Reviewed 30-day performance data with clean attribution — revealed that room-scene lifestyle creative outperformed product-on-white shots by 2.8x on click-through rate and 1.9x on purchase conversion, confirming that luxury home decor buyers need to visualize products in context before purchasing",
        "Scaled AI-generated creative production to 14–16 new variations per month, testing hooks (room transformation reveals vs. designer tips vs. seasonal refresh inspiration), visual styles (minimalist modern vs. warm traditional vs. eclectic bohemian), and copy angles (investment piece positioning vs. statement maker vs. conversation starter) — all included in the flat management fee with zero additional creative charges",
        "AI optimization agents identified that homeowners aged 30–50 interested in interior design and home renovation had 38% lower cost per acquisition than broader home decor interest targeting — budget automatically reallocated within hours, a shift that would have waited until the next biweekly review under the previous arrangement",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads featuring the exact items they viewed within 2 hours, browse abandoners entered a 7-day room inspiration sequence showcasing complementary pieces, and past purchasers received cross-sell campaigns featuring items from collections they had started",
        "Expanded Google Shopping with smart bidding strategies informed by Meta performance data — high-converting product categories on social received proportionally higher Shopping bids to capture search intent from customers who had seen Meta ads but converted through Google",
        "Published 14 additional SEO articles targeting long-tail commercial intent keywords — 'modern accent furniture for small spaces,' 'luxury table lamp buying guide,' 'how to style a gallery wall with original art,' and seasonal decor transition guides",
        "Created 6 optimized category landing pages with editorial content, styling tips, and curated collection features designed to rank for mid-funnel searches and improve on-site conversion for paid traffic landing on category pages",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Seasonal Scaling, Black Friday & Compounding Growth",
      items: [
        "With 14+ creatives in active rotation at any given time, the campaign eliminated creative fatigue — AI-generated variations replaced underperformers within days, keeping cost per acquisition stable as the brand scaled spend during peak seasonal periods",
        "AI agents detected the summer entertaining and outdoor refresh trend in June and automatically shifted creative messaging to emphasize patio-adjacent indoor pieces, outdoor-to-indoor styling, and summer hosting preparation — capturing seasonal demand within hours of trend signals appearing in performance data",
        "Built dedicated Black Friday and Cyber Monday campaign architecture 5 weeks in advance — pre-warmed lookalike audiences from high-LTV purchasers, created limited-time curated gift collections at multiple price points, and configured automated budget scaling rules that tripled daily spend during peak conversion windows",
        "Real-time AI bid optimization during Black Friday weekend maintained 6.41x ROAS even as auction competition drove CPMs up 40%+ across the home decor category — continuous adjustments captured conversion windows that competitors running on weekly optimization cycles missed entirely",
        "Advanced audience segmentation using AI-identified behavioral patterns — interior design enthusiasts, new homeowners, renovation completers, and gift shoppers each received tailored creative highlighting different product benefits and price points",
        "Organic and paid synergy reached maturity — top-performing paid ad room scenes were repurposed as blog content themes and style guide illustrations, while high-traffic organic articles informed new paid creative angles, creating a self-reinforcing acquisition loop that reduced blended customer acquisition cost month over month",
        "Continued SEO content production through fall and winter — published holiday gift guides for home decor lovers, winter styling and hygge inspiration content, New Year home refresh guides, and trend forecast pieces that captured seasonal organic search surges",
        "Expanded into Pinterest advertising for supplementary visual discovery — leveraging the AI-generated lifestyle imagery library already built for Meta to capture high-intent decorating browsers on the platform where home decor purchase intent is highest",
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
      { label: "Add to Carts", value: "3,744" },
      { label: "Avg Cost Per Cart", value: "$23.34", note: "↓51% reduction" },
      { label: "Orders", value: "1,771" },
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
      { month: "Jan '25", spend: 5120, leads: 5565, cpl: 0.92, qualified: 153, cpql: 33.46, deals: 55, revenue: 9460, roas: 1.85 },
      // Feb 2025: Tracking overhaul complete. New campaign architecture deployed. Early signals improving.
      { month: "Feb '25", spend: 5280, leads: 5933, cpl: 0.89, qualified: 161, cpql: 32.80, deals: 61, revenue: 10858, roas: 2.06 },
      // Mar 2025: AI agents fully operational. Creative testing suite launched. Spring decor interest rising.
      { month: "Mar '25", spend: 5640, leads: 6558, cpl: 0.86, qualified: 188, cpql: 30.00, deals: 75, revenue: 13725, roas: 2.43 },
      // Apr 2025: Spring refresh season — peak decor buying begins. Budget scaled modestly.
      { month: "Apr '25", spend: 6180, leads: 7446, cpl: 0.83, qualified: 217, cpql: 28.48, deals: 91, revenue: 17017, roas: 2.75 },
      // May 2025: Strong spring performance. AI shifted budget to outdoor-adjacent categories.
      { month: "May '25", spend: 6740, leads: 8321, cpl: 0.81, qualified: 252, cpql: 26.75, deals: 111, revenue: 21201, roas: 3.15 },
      // Jun 2025: Summer hosting season. Retargeting sequences matured. Google Shopping gaining traction.
      { month: "Jun '25", spend: 7210, leads: 9244, cpl: 0.78, qualified: 284, cpql: 25.39, deals: 128, revenue: 25088, roas: 3.48 },
      // Jul 2025: Mid-summer optimization peak. AI identified high-LTV audience segments.
      { month: "Jul '25", spend: 7480, leads: 9842, cpl: 0.76, qualified: 306, cpql: 24.44, deals: 144, revenue: 28944, roas: 3.87 },
      // Aug 2025: Late summer. Budget holding steady. Creative rotation keeping fatigue at bay.
      { month: "Aug '25", spend: 7120, leads: 9493, cpl: 0.75, qualified: 307, cpql: 23.19, deals: 141, revenue: 27918, roas: 3.92 },
      // Sep 2025: Fall transition. Seasonal content driving new traffic. Q4 prep begins.
      { month: "Sep '25", spend: 6890, leads: 9438, cpl: 0.73, qualified: 296, cpql: 23.28, deals: 142, revenue: 28826, roas: 4.18 },
      // Oct 2025: Q4 launch. Holiday pre-warming. Gift collection campaigns deployed.
      { month: "Oct '25", spend: 7640, leads: 10761, cpl: 0.71, qualified: 343, cpql: 22.27, deals: 168, revenue: 34944, roas: 4.57 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — Budget tripled. AI managed real-time bid optimization.
      { month: "Nov '25", spend: 14820, leads: 23156, cpl: 0.64, qualified: 907, cpql: 16.34, deals: 490, revenue: 95060, roas: 6.41 },
      // Dec 2025: Holiday gifting tail. Strong organic reducing paid dependency.
      { month: "Dec '25", spend: 7260, leads: 10522, cpl: 0.69, qualified: 330, cpql: 22.00, deals: 165, revenue: 34980, roas: 4.82 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$348.0K", growth: "+247% ROAS improvement" },
    { label: "Total Orders", value: "1,771", growth: "across 12 months" },
    { label: "Average Order Value", value: "$196.51", growth: "luxury home decor category" },
    { label: "Blended ROAS", value: "3.98x", growth: "from 1.85x starting" },
  ],
};
