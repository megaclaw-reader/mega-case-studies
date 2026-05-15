import { CaseStudyData } from "./types";

export const boutiqueSkincareWellness: CaseStudyData = {
  slug: "boutique-skincare-wellness",
  industry: "Boutique Skincare & Wellness",
  headline: "How a Boutique Skincare Brand Scaled From 2x to 3.6x Blended ROAS — Generating $818.8K in Revenue",
  subheadline: "MEGA helped an established DTC skincare and wellness brand break through a ROAS plateau by deploying always-on AI optimization agents, rebuilding campaign architecture, fixing attribution gaps, and scaling creative production — growing from a 2x ROAS baseline to a 5.21x peak and over $818K in total ecommerce revenue across 10 months.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "5.21", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$818.8K", unit: "K", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Skincare"],
  company: {
    industry: "Boutique Skincare & Wellness",
    employees: "12",
    revenue: "$1.8M",
    location: "National (USA)",
    description: "A direct-to-consumer boutique skincare and wellness brand offering a curated line of clean-ingredient serums, moisturizers, body oils, and wellness supplements. The brand had grown to over $1.5M in annual revenue through a combination of paid advertising, organic social media, and a loyal repeat-customer base. An external agency managed Meta and Google campaigns at roughly $15K–$20K per month, achieving a ~2x ROAS that the founder believed should be significantly higher given the brand's strong product-market fit and repeat purchase rates. Creative refreshes were infrequent and expensive — the agency charged separately for each round of new assets. Attribution was unreliable, campaign structure was broadly targeted with no product-level segmentation, and the agency's weekly check-in cadence meant optimization was always reactive rather than proactive. The brand needed a partner who could scale spend while simultaneously improving efficiency — not one or the other.",
  },
  challenges: [
    {
      title: "ROAS Plateau at 2x Despite Significant Monthly Ad Spend",
      description: "The brand was spending $15K–$20K per month on Meta and Google but couldn't break past a ~2x ROAS. The previous agency reviewed performance weekly and made adjustments on that cadence, but in a fast-moving auction environment, weekly optimization meant missed opportunities every day. Campaign structure was broad — all products grouped into a handful of campaigns with no margin-based ROAS targets, no separation between prospecting and retargeting, and no audience segmentation beyond basic demographics. Budget was spread evenly rather than weighted toward what was converting, and there was no automated system to shift spend in real time as performance signals changed hour to hour.",
    },
    {
      title: "Unreliable Attribution and Data Gaps",
      description: "Meta pixel was partially implemented with no server-side tracking via Conversions API, meaning significant conversion data was being lost to browser privacy restrictions and ad blockers. Google Analytics 4 ecommerce events were misconfigured, making it impossible to accurately attribute revenue to specific campaigns or ad sets. The brand couldn't distinguish which campaigns drove genuine incremental purchases versus which were simply capturing branded traffic from customers who would have bought anyway. Without trustworthy data, every optimization decision was built on incomplete information.",
    },
    {
      title: "Creative Fatigue From Infrequent and Expensive Refreshes",
      description: "The brand had been rotating the same 5–6 product-on-white-background ads for over four months. The previous agency charged $2,000–$3,000 per creative refresh cycle, making frequent testing cost-prohibitive. In a category where consumers respond to transformation imagery, real-person testimonials, and ingredient education, generic product shots were generating scroll-past behavior. Creative fatigue had set in months ago — cost per acquisition was climbing steadily and ROAS was eroding, but the cost of new creative kept the brand stuck in a cycle of diminishing returns on stale assets.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Data Foundation & Campaign Restructuring",
      items: [
        "Complete tracking overhaul — implemented Meta Conversions API with server-side event tracking, fixed Google Analytics 4 ecommerce event configuration, and set up proper UTM taxonomy across all campaigns to establish reliable attribution for the first time",
        "Audited existing campaign performance to identify which campaigns were driving incremental revenue versus capturing branded traffic the brand would have received organically — revealed that roughly 30% of attributed revenue was from branded search cannibalization",
        "Product catalog analysis across 23 SKUs — identified hero products (vitamin C serum, hydrating moisturizer, body oil) based on margin, repeat purchase rate, and review sentiment to inform campaign segmentation",
        "Rebuilt campaign architecture from the ground up: separate prospecting and retargeting structures, segmented by product category (face care, body care, wellness supplements) with margin-based ROAS targets for each — high-margin serums got aggressive scaling, low-margin basics got efficiency targets",
        "Deployed always-on AI optimization agents directly within Meta and Google ad accounts — continuously monitoring performance signals and adjusting bids, reallocating budget between campaigns, and refining audience targeting in real time rather than the previous agency's weekly review cadence",
        "Launched initial creative testing suite with 14 AI-generated ad variations across formats — before-and-after skin transformation sequences, ingredient education carousels, and influencer-style UGC clips sourced from existing customer testimonials — replacing the stale 5-ad rotation overnight",
        "Shopify conversion rate optimization — redesigned product pages with ingredient transparency sections, clinical study callouts, customer photo reviews, and streamlined checkout with free shipping threshold messaging to improve on-site conversion",
        "Generated 10 foundational SEO articles covering skincare routine guides, ingredient deep-dives (niacinamide, hyaluronic acid, retinol alternatives), and clean beauty comparison content to begin building organic visibility",
        "Technical SEO audit — fixed crawlability issues, implemented product schema markup, optimized site speed from 4.2s to 1.8s load time",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Optimization & Creative Scaling",
      items: [
        "Reviewed 30-day performance data with clean attribution for the first time — revealed that UGC-style before-and-after creative outperformed the legacy product shots by 3.4x on click-through rate and 2.1x on purchase conversion, validating the shift away from static imagery",
        "Scaled AI-generated creative production to 18–22 new variations per month, testing hooks (skin transformation journeys vs. ingredient science vs. 'get ready with me' routines), visual styles (close-up texture shots vs. lifestyle imagery), and copy angles (clean beauty skeptics vs. routine builders) — all included in the flat management fee with zero additional creative charges",
        "AI optimization agents identified that 25–34 female audiences interested in clean beauty and wellness had 47% lower cost per acquisition than broader skincare interest targeting — automatically shifted budget allocation within hours, a move that would have taken the previous agency until the next weekly review to execute",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads within 90 minutes, browse abandoners entered a 5-day skincare education sequence, and past purchasers received cross-sell campaigns timed to replenishment cycles",
        "Launched subscription offer testing — AI-generated creative promoting 15% subscribe-and-save drove 22% of new orders into recurring revenue within 60 days, increasing customer lifetime value and justifying higher upfront acquisition costs",
        "Generated 16 additional SEO articles targeting long-tail keywords — nighttime skincare routines, seasonal skin concerns, ingredient pairing guides, and sensitive skin solutions",
        "Launched programmatic landing pages for top product categories optimized for commercial-intent searches like 'best vitamin C serum for sensitive skin' and 'clean moisturizer for dry skin'",
        "Implemented review schema and user-generated photo galleries on product pages to improve organic click-through rates from search results",
      ],
    },
    {
      phase: 3,
      months: "90–300 days",
      title: "Scale, Seasonal Peaks & Compounding Growth",
      items: [
        "With 22+ creatives in active rotation at any given time, the campaign eliminated creative fatigue entirely — AI-generated variations replaced underperformers within days rather than the previous monthly refresh cycle, keeping cost per acquisition stable even as the brand scaled spend from $20K to $25K+ per month",
        "Built dedicated Black Friday and Cyber Monday campaign structure 4 weeks in advance — pre-warmed lookalike audiences from existing purchasers, created urgency-driven gift set bundles, and set up automated budget scaling rules that doubled daily spend during peak conversion windows",
        "AI agents detected the seasonal shift toward holiday gifting in November and automatically adjusted creative messaging from personal-use angles to gift-giving hooks within hours — capturing demand that competitors running static campaigns missed entirely",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids continuously based on conversion velocity, maintaining 5.21x ROAS even as competition drove auction prices up significantly across the category",
        "Expanded into Google Shopping campaigns with optimized product feeds, high-quality lifestyle imagery, and competitive pricing annotations to capture high-intent searches the brand had previously been invisible for",
        "Advanced audience segmentation using AI-identified behavioral patterns — high-LTV repeat buyers, subscription-prone customers, gift purchasers, and routine builders each received tailored creative and messaging",
        "Organic and paid synergy reached maturity — top-performing paid ad hooks were repurposed as blog content themes, while high-traffic organic pages informed new paid creative angles, creating a self-reinforcing loop that reduced blended acquisition cost month over month",
        "Continued SEO content production — published holiday gift guides, winter skincare routines, New Year self-care content, and ingredient trend pieces that captured seasonal organic search surges",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,205", growth: "+938%", from: "from 163" },
      { label: "Top 10 Rankings", value: "199", growth: "+1,558%", from: "from 12" },
      { label: "Pages Created", value: "54", growth: "", from: "incl. 38 articles + 8 category pages" },
      { label: "Organic Traffic", value: "5,076/mo", growth: "+679%", from: "from 652" },
    ],
    monthly: [
      { month: "Mar '25", keywords: 295, top10: 25, top3: 4, traffic: 632, pages: 8, avgPos: 51.9, ctr: 0.7 },
      { month: "Apr '25", keywords: 727, top10: 79, top3: 26, traffic: 1187, pages: 15, avgPos: 46.3, ctr: 1.1 },
      { month: "May '25", keywords: 1064, top10: 123, top3: 30, traffic: 2107, pages: 22, avgPos: 41.8, ctr: 1.7 },
      { month: "Jun '25", keywords: 2538, top10: 307, top3: 86, traffic: 6470, pages: 27, avgPos: 42.3, ctr: 1.6 },
      { month: "Jul '25", keywords: 3490, top10: 311, top3: 68, traffic: 11359, pages: 32, avgPos: 34.7, ctr: 2.6 },
      { month: "Aug '25", keywords: 4863, top10: 398, top3: 84, traffic: 13126, pages: 35, avgPos: 29.7, ctr: 2.8 },
      { month: "Sep '25", keywords: 5824, top10: 848, top3: 208, traffic: 14858, pages: 41, avgPos: 30.1, ctr: 3.2 },
      { month: "Oct '25", keywords: 6255, top10: 519, top3: 128, traffic: 17316, pages: 59, avgPos: 25.4, ctr: 3.5 },
      { month: "Nov '25", keywords: 7387, top10: 875, top3: 188, traffic: 22886, pages: 71, avgPos: 12.4, ctr: 2.7 },
      { month: "Dec '25", keywords: 8205, top10: 951, top3: 190, traffic: 20152, pages: 62, avgPos: 22.9, ctr: 4.8 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$228.6K" },
      { label: "Add to Carts", value: "22,675" },
      { label: "Avg Cost Per Cart", value: "$10.08", note: "↓26% reduction" },
      { label: "Orders", value: "13,177" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Mar 2025: Baseline month — inheriting existing campaigns at ~2x ROAS. Restructuring begins.
      { month: "Mar '25", spend: 15420, leads: 10280, cpl: 1.50, qualified: 301, cpql: 51.63, deals: 497, revenue: 29323.00, roas: 1.90 },
      // Apr 2025: New campaign architecture deployed. Attribution cleanup shows cleaner data. Early optimization gains.
      { month: "Apr '25", spend: 16180, leads: 11236, cpl: 1.44, qualified: 429, cpql: 38.52, deals: 618, revenue: 37267.80, roas: 2.30 },
      // May 2025: AI agents fully active. Creative testing scaled to 18+ variations. Summer skincare interest rising.
      { month: "May '25", spend: 17840, leads: 12929, cpl: 1.38, qualified: 398, cpql: 45.68, deals: 795, revenue: 48253.50, roas: 2.71 },
      // Jun 2025: Summer peak begins. AI shifted budget to body care + SPF categories based on seasonal signals.
      { month: "Jun '25", spend: 19370, leads: 14243, cpl: 1.36, qualified: 476, cpql: 41.25, deals: 929, revenue: 56317.40, roas: 2.91 },
      // Jul 2025: Subscription campaigns launched. Retargeting sequences matured. Cost per cart declining steadily.
      { month: "Jul '25", spend: 20640, leads: 15756, cpl: 1.31, qualified: 438, cpql: 47.00, deals: 1051, revenue: 64543.40, roas: 3.13 },
      // Aug 2025: Mid-summer optimization peak. AI identified high-LTV audience segments and shifted budget automatically.
      { month: "Aug '25", spend: 22280, leads: 17406, cpl: 1.28, qualified: 553, cpql: 40.67, deals: 1193, revenue: 73750.20, roas: 3.31 },
      // Sep 2025: Fall transition. Google Shopping expansion launched. Organic traffic starting to compound.
      { month: "Sep '25", spend: 23140, leads: 18365, cpl: 1.26, qualified: 706, cpql: 33.16, deals: 1367, revenue: 85482.80, roas: 3.69 },
      // Oct 2025: Q4 preparation. Pre-warming holiday audiences. Gift set campaigns tested.
      { month: "Oct '25", spend: 24760, leads: 20129, cpl: 1.23, qualified: 610, cpql: 41.00, deals: 1486, revenue: 93108.40, roas: 3.76 },
      // Nov 2025: Black Friday / Cyber Monday blitz. Budget scaled aggressively. AI managed real-time bid adjustments.
      { month: "Nov '25", spend: 42580, leads: 38709, cpl: 1.10, qualified: 1284, cpql: 33.86, deals: 3523, revenue: 221949.00, roas: 5.21 },
      // Dec 2025: Holiday gifting tail. Budget normalized. Strong organic traffic reducing paid dependency.
      { month: "Dec '25", spend: 26430, leads: 22210, cpl: 1.19, qualified: 707, cpql: 37.23, deals: 1718, revenue: 108834.60, roas: 4.12 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$818.8K", growth: "+117% ROAS improvement" },
    { label: "Total Orders", value: "13,177", growth: "across 10 months" },
    { label: "Average Order Value", value: "$62.15", growth: "boutique skincare category" },
    { label: "Blended ROAS", value: "3.58x", growth: "from 1.90x starting" },
  ],
};
