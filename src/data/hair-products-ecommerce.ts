import { CaseStudyData } from "./types";

export const hairProductsEcommerce: CaseStudyData = {
  slug: "hair-products-ecommerce",
  industry: "Hair Products",
  headline: "How a DTC Hair Care Brand Achieved a 3.22x Blended ROAS While Building an Organic Traffic Engine — Generating $88.7K in Revenue in 7 Months",
  subheadline: "MEGA deployed always-on AI optimization and creative testing to help a small but ambitious national DTC hair care brand scale from a 1.80x starting ROAS to a 4.25x Black Friday peak — generating over $88K in ecommerce revenue across 7 months while simultaneously growing organic traffic from 372 to 5,247 monthly visitors through strategic SEO content.",
  heroStats: [
    { value: "4.25", unit: "x", label: "Peak ROAS Achieved" },
    { value: "88.7", unit: "K", label: "Revenue Generated" },
    { value: "1,836", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC", "Hair Care"],
  company: {
    industry: "Hair Products",
    employees: "6",
    revenue: "$320K",
    location: "National (USA)",
    description: "A direct-to-consumer hair care brand specializing in sulfate-free shampoos, deep conditioning treatments, leave-in products, and styling essentials formulated for textured and curly hair types. The brand had built a modest but loyal following through organic social media and influencer seeding, generating roughly $300K in annual revenue with strong repeat purchase rates among its core customer base. Paid advertising had been managed in-house by the founder with a $2K–$3K monthly budget across Meta, producing inconsistent results that hovered around a 1.5x–2x ROAS. The founder knew the product had strong market fit — customer reviews were overwhelmingly positive and repeat purchase rates exceeded 40% — but lacked the expertise and bandwidth to scale paid acquisition profitably. Creative consisted of three product-on-white-background images that had been running unchanged for five months. There was no SEO strategy, no content marketing, and the website ranked for fewer than 100 keywords despite operating in a category with significant search demand for ingredient education, hair type guides, and routine recommendations. The brand needed a partner who could build both an immediate paid acquisition engine and a long-term organic growth foundation — without requiring an enterprise-level budget to get started.",
  },
  challenges: [
    {
      title: "Inconsistent ROAS With No Optimization Framework",
      description: "The founder was managing Meta campaigns manually, checking performance every few days and making broad budget adjustments based on gut feel rather than systematic data analysis. Some weeks delivered 2.5x ROAS while others dipped below 1x — but there was no infrastructure to diagnose why. Campaign structure was a single campaign with two ad sets and three static creatives, meaning the algorithm had no room to optimize across audiences, placements, or creative formats. Budget allocation was flat regardless of day-of-week performance patterns or seasonal demand shifts. At $3K per month, every dollar of misallocated spend was painful — and without real-time optimization, misallocation was the default state rather than the exception.",
    },
    {
      title: "Zero Organic Visibility in a Content-Rich Category",
      description: "Hair care is one of the most content-driven ecommerce categories — consumers actively search for hair type guides, ingredient breakdowns, routine recommendations, and product comparisons before purchasing. The brand's website had no blog, no educational content, and no programmatic landing pages targeting these high-intent searches. It ranked for fewer than 100 keywords, nearly all branded, with organic traffic under 400 monthly visitors. Competitors with established content hubs were capturing thousands of monthly organic visits and converting them into customers at zero marginal acquisition cost. Every month without an SEO strategy meant ceding more ground to competitors whose content moats were deepening.",
    },
    {
      title: "Creative Stagnation Driving Rising Acquisition Costs",
      description: "The same three product photos had been running across all Meta campaigns for over five months. In a category where consumers respond to transformation imagery, hair texture close-ups, routine demonstrations, and before-and-after results, generic product-on-white shots generated minimal engagement. Click-through rates had declined steadily as the algorithm exhausted these assets across the brand's target audiences. The founder couldn't justify the cost of professional photography or video production at the current revenue level, creating a catch-22 where the creative needed to drive growth couldn't be funded without growth. Cost per acquisition had climbed 35% over the prior quarter while conversion rates declined.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation — Tracking, Architecture & Content Launch",
      items: [
        "Comprehensive audit of 90 days of Meta campaign data — identified that the single-campaign structure was forcing the algorithm to optimize across conflicting objectives, with prospecting and retargeting audiences competing for the same limited budget and cannibalizing each other's performance",
        "Deployed always-on AI optimization agents directly within the Meta ad account — monitoring performance signals continuously and adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than the founder's every-few-days manual check-in approach",
        "Implemented Meta Conversions API with server-side event tracking to recover approximately 18% of conversion data lost to iOS privacy restrictions and browser ad blockers — critical for accurate optimization even at modest spend levels",
        "Rebuilt campaign architecture from scratch: separated prospecting from retargeting, segmented by product category (shampoo/conditioner systems, treatments, styling products, bundles) with margin-adjusted ROAS targets — high-margin treatment products got aggressive scaling goals while commodity basics got efficiency targets",
        "Launched initial creative testing suite with 12 AI-generated ad variations across formats — hair transformation sequences, ingredient close-ups highlighting key actives like argan oil and shea butter, wash-day routine clips, and texture comparison shots — replacing the stale 3-image rotation and giving the algorithm diverse creative signals from day one",
        "Technical SEO audit and fixes — improved site speed from 3.8s to 1.6s, implemented product schema markup, fixed crawl errors on 14 product pages, and set up proper canonical tags across variant URLs",
        "Published 8 foundational SEO articles targeting high-intent long-tail keywords: curly hair care routines, sulfate-free shampoo benefits, deep conditioning frequency guides, and ingredient education content around keratin, biotin, and botanical extracts",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Optimization — Creative Velocity & Content Scaling",
      items: [
        "Analyzed 30 days of structured creative test data — revealed that wash-day routine video clips outperformed static product shots by 2.6x on purchase ROAS, and ingredient-education carousels drove 38% higher add-to-cart rates than lifestyle imagery among 25–44 female audiences with textured hair interests",
        "Scaled AI-generated creative production to 15–18 new variations per month, testing hooks (transformation before/after vs. ingredient science vs. 'get ready with me' routines), visual styles (close-up texture shots vs. bathroom shelf aesthetics), and copy angles (ingredient-conscious shoppers vs. routine simplifiers) — all at zero additional production cost, keeping 100% of the $3K+ monthly budget in media spend",
        "AI optimization agents identified that Sunday evenings and Monday mornings drove 42% higher conversion rates for treatment products — automatically shifted budget weighting to capture these high-intent windows, a micro-optimization invisible in weekly reporting but worth approximately $800 in incremental monthly revenue at this spend level",
        "Built dynamic retargeting sequences — cart abandoners received product-specific ads within 2 hours, browse abandoners entered a 4-day hair education sequence that led to product recommendations, and past purchasers received replenishment reminders timed to typical product usage cycles",
        "Published 14 additional SEO articles targeting mid-funnel and long-tail keywords — hair porosity testing guides, protein vs. moisture balance content, seasonal hair care transitions, curly hair product ingredient glossaries, and comparative content positioning clean formulations against conventional alternatives",
        "Launched programmatic landing pages optimized for commercial-intent searches like 'best sulfate-free shampoo for curly hair' and 'deep conditioner for damaged hair' — each with product recommendations, customer reviews, and ingredient transparency sections",
        "Implemented review schema and user-generated photo galleries on product pages to improve organic click-through rates and on-site conversion from search visitors",
      ],
    },
    {
      phase: 3,
      months: "90–210 days",
      title: "Scale — Seasonal Peaks & Compounding Growth",
      items: [
        "With 15+ creatives in active rotation, eliminated creative fatigue entirely at this budget level — AI-generated variations replaced declining performers within days rather than the months-long stagnation the brand experienced before, keeping cost per acquisition stable even as the campaign entered more competitive Q4 auction environments",
        "Pre-Black Friday strategy launched 3 weeks in advance: expanded prospecting audiences by 35%, seeded new customer pools with education-led creative, and built gift set bundle campaigns featuring holiday-themed creative angles — all AI-generated and tested before the promotional window opened",
        "Black Friday and Cyber Monday execution: AI agents managed real-time bid adjustments across 8 active ad sets, automatically scaling budget to top performers during peak conversion windows — achieving 4.25x ROAS during the most competitive auction period of the year, the campaign's peak performance month",
        "AI agents detected the shift from self-purchase to gift-giving intent in early November and automatically generated and tested gift-themed creative variations — stocking stuffer bundles, 'gifts for curly girls' angles, and holiday packaging close-ups that captured seasonal demand competitors running static campaigns missed entirely",
        "December holiday gifting tail maintained strong performance — rather than pulling back aggressively, AI agents identified continued gift-purchase and New Year self-care intent, sustaining a 3.91x ROAS at lower auction costs while competitors retreated after Black Friday",
        "SEO compounding reached inflection point — organic traffic surpassed 5,200 monthly visitors by December with a 20x keyword portfolio expansion, as top-ranking content pieces drove product page visits at zero marginal acquisition cost, reducing blended customer acquisition cost across channels",
        "Published holiday and seasonal content — winter hair care routines, gift guides for textured hair, holiday styling tutorials, and New Year hair transformation content that captured seasonal organic search surges and supported paid campaign themes",
        "Cross-channel synergy matured: top-performing paid ad hooks were repurposed as blog content themes, while high-traffic organic pages informed new paid creative angles — creating a reinforcing loop that improved efficiency in both channels simultaneously",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,918", growth: "+1,940%", from: "from 94" },
      { label: "Top 10 Rankings", value: "172", growth: "+2,767%", from: "from 6" },
      { label: "Pages Created", value: "37", growth: "", from: "incl. 30 articles + 7 landing pages" },
      { label: "Organic Traffic", value: "5,247/mo", growth: "+1,311%", from: "from 372" },
    ],
    monthly: [
      { month: "Jun '25", keywords: 94, top10: 6, top3: 1, traffic: 372, pages: 2, avgPos: 48.7, ctr: 0.6 },
      { month: "Jul '25", keywords: 198, top10: 16, top3: 3, traffic: 682, pages: 10, avgPos: 43.2, ctr: 0.7 },
      { month: "Aug '25", keywords: 387, top10: 34, top3: 7, traffic: 1243, pages: 17, avgPos: 38.1, ctr: 0.9 },
      { month: "Sep '25", keywords: 648, top10: 58, top3: 13, traffic: 2087, pages: 23, avgPos: 33.4, ctr: 1.2 },
      { month: "Oct '25", keywords: 1024, top10: 92, top3: 22, traffic: 3184, pages: 28, avgPos: 28.7, ctr: 1.4 },
      { month: "Nov '25", keywords: 1487, top10: 134, top3: 34, traffic: 4516, pages: 33, avgPos: 24.1, ctr: 1.7 },
      { month: "Dec '25", keywords: 1918, top10: 172, top3: 44, traffic: 5247, pages: 37, avgPos: 20.3, ctr: 1.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$36.7K" },
      { label: "Add to Carts", value: "3,248" },
      { label: "Avg Cost Per Cart", value: "$8.50", note: "↓41% reduction" },
      { label: "Orders", value: "1,836" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Baseline — inheriting founder-managed campaigns at ~1.8x ROAS. Full restructuring begins. AI agents deployed.
      { month: "Jun '25", spend: 5058, leads: 2748, cpl: 1.12, qualified: 247, cpql: 20, deals: 119, revenue: 5560.87, roas: 1.1 },
      // Jul 2025: New architecture in place. Creative testing at 12+ variations. AI optimization compounding. Summer hair care demand.
      { month: "Jul '25", spend: 5064, leads: 3118, cpl: 1.04, qualified: 296, cpql: 17, deals: 148, revenue: 6982.64, roas: 1.38 },
      // Aug 2025: Back-to-school season drives styling product demand. AI agents identified weekend conversion peaks.
      { month: "Aug '25", spend: 5044, leads: 3491, cpl: 0.97, qualified: 352, cpql: 14, deals: 187, revenue: 8774.04, roas: 1.74 },
      // Sep 2025: Fall transition. AI-optimized creative featuring seasonal hair care routines. Retargeting sequences matured.
      { month: "Sep '25", spend: 5126, leads: 3870, cpl: 0.91, qualified: 410, cpql: 13, deals: 229, revenue: 11024.06, roas: 2.15 },
      // Oct 2025: Q4 ramp-up. Pre-Black Friday audience warming. Gift bundle campaigns launched.
      { month: "Oct '25", spend: 5329, leads: 4312, cpl: 0.87, qualified: 478, cpql: 11, deals: 277, revenue: 13174.12, roas: 2.47 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — aggressive spend scale-up. AI managed real-time bid adjustments. Peak ROAS month.
      { month: "Nov '25", spend: 5843, leads: 6764, cpl: 0.86, qualified: 812, cpql: 7.20, deals: 498, revenue: 24835.26, roas: 4.25 },
      // Dec 2025: Holiday gifting tail. Gift sets and stocking stuffers. Organic traffic reducing paid dependency.
      { month: "Dec '25", spend: 5242, leads: 5782, cpl: 0.83, qualified: 653, cpql: 7.32, deals: 378, revenue: 18382.14, roas: 3.51 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$88.7K", growth: "+79% ROAS improvement" },
    { label: "Total Orders", value: "1,836", growth: "across 7 months" },
    { label: "Average Order Value", value: "$48.33", growth: "hair care category" },
    { label: "Blended ROAS", value: "2.42x", growth: "from 1.80x starting" },
  ],
};
