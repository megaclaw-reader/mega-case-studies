import { CaseStudyData } from "./types";

export const multiChainRestaurantNyc: CaseStudyData = {
  slug: "multi-chain-restaurant-nyc",
  industry: "Multi-Chain Restaurant Fast Food",
  headline: "How a Multi-Location Fast Food Chain in New York Generated 876 Qualified Leads and Cut CPQL 47% in 10 Months",
  subheadline: "MEGA helped a multi-location quick-service restaurant chain across New York City deploy AI-driven local SEO and targeted paid advertising to dominate neighborhood search results, drive direct online orders, and acquire 414 new regular customers — generating over $179K in tracked revenue at a blended 2.89x return on ad spend.",
  heroStats: [
    { value: "876", unit: "", label: "Qualified Leads" },
    { value: "47", unit: "%", label: "CPQL Reduction" },
    { value: "$179K", unit: "+", label: "Tracked Revenue" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Local SEO"],
  company: {
    industry: "Multi-Chain Restaurant — Fast Food & Quick Service",
    employees: "85",
    revenue: "$3.2M",
    location: "New York City, NY (Brooklyn, Queens, Manhattan, Bronx)",
    description: "A fast-growing quick-service restaurant chain operating multiple locations across New York City boroughs. The brand specializes in made-to-order meals with delivery and pickup options, targeting the lunch rush and dinner crowd across Brooklyn, Queens, midtown Manhattan, and the South Bronx. Despite strong foot traffic at flagship locations, the chain was struggling to drive online orders, compete with aggregator platforms taking 25-30% commission, and build consistent visibility across all locations. Several newer locations were underperforming, and the lack of a cohesive digital marketing strategy meant each store operated in a silo — no unified local SEO, no coordinated paid campaigns, and no system for tracking which channels were actually driving in-store visits and online orders.",
  },
  challenges: [
    {
      title: "Heavy Dependence on Third-Party Delivery Platforms Eroding Margins",
      description: "Over 60% of the chain's delivery orders came through third-party aggregators charging 25-30% commission per order. A $25 order netted only $17-19 after platform fees. The business had no owned digital ordering channel generating meaningful volume — their website ordering system accounted for less than 8% of total delivery orders. Without a strategy to drive direct orders, the chain was essentially paying a $6-8 tax on every delivery, making several locations barely profitable on delivery alone.",
    },
    {
      title: "Inconsistent Local Visibility Across Multiple Locations",
      description: "Each location had a separate business profile, but none were optimized. Review counts ranged from 12 to 187 across locations with no review generation strategy. Three locations didn't appear in the local map pack for any relevant searches. The brand ranked for only 123 keywords organically — almost all branded terms. Competitors with single locations were outranking the chain for high-intent queries like 'fast food near me' and 'quick lunch delivery' in multiple boroughs because they had invested in local content and citation consistency while this chain had not.",
    },
    {
      title: "No Attribution System Connecting Marketing to Orders",
      description: "The marketing team had no way to track which campaigns, keywords, or channels were driving actual orders versus just clicks. Paid campaigns were running with broad targeting across all of New York with no location-level optimization. The monthly ad budget was being split equally across locations regardless of demand density, competition, or performance. Without order-level attribution, every optimization decision was guesswork — and the guesses weren't working. Two newer locations in Queens and the Bronx were consistently underperforming with no data to diagnose why.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation — Attribution, Local SEO Baseline & Campaign Architecture",
      items: [
        "Full technical audit across the main domain and all location-specific landing pages — fixed crawlability issues, mobile speed (critical for on-the-go ordering), and structured data markup for restaurants",
        "Implemented order attribution system tracking the full journey from ad click or organic visit through to completed order, with location-level breakdowns",
        "Deployed call tracking with source attribution across all locations — every phone order tagged by campaign, keyword, and source",
        "Optimized all business profiles across locations: updated menus, hours, photos, service areas, and ordering links pointing to the direct ordering system instead of third-party platforms",
        "Built location-specific landing pages for each borough with neighborhood targeting — 'Order delivery in Bushwick,' 'Quick lunch in Astoria,' 'Late night food in Hell's Kitchen'",
        "Keyword research targeting high-intent food ordering queries: 'food delivery near me,' 'quick lunch [neighborhood],' 'order food online [borough]' — 340+ keyword opportunities identified",
        "Generated 14 initial SEO articles: neighborhood food guides, seasonal menu content for New York winter comfort food, office lunch ordering guides",
        "Local citation audit and cleanup — fixed NAP inconsistencies across 67 directories, submitted to NYC-specific food directories and neighborhood guides",
        "Restructured paid campaigns from one broad New York campaign into location-specific campaigns with radius targeting around each store",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation by location, and audience refinement — replacing the previous set-it-and-forget-it approach with real-time adjustments across all location campaigns simultaneously",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization — Location Performance Data & Direct Order Push",
      items: [
        "Analyzed 30 days of order attribution data — discovered Brooklyn locations converting at 2.1x the rate of Queens locations, triggering budget reallocation",
        "Identified that lunch-hour campaigns (11am-2pm) drove 43% of orders at 31% lower cost per lead than dinner campaigns — shifted budget weighting accordingly",
        "Launched direct ordering incentive campaigns: messaging highlighting price advantage and faster delivery when ordering direct versus through aggregators",
        "Generated 16 additional SEO articles: 'Best delivery in [neighborhood]' series, catering guides for NYC offices, group ordering content for teams",
        "Built out neighborhood-specific pages for 12 additional NYC neighborhoods with unique local content and ordering calls-to-action",
        "AI agents analyzed performance data across all locations simultaneously, identifying which creative messages, dayparts, and audience segments drove the highest order volume at each location — optimizations that would take a traditional agency weeks happened continuously",
        "Launched review generation campaign across all locations — QR codes on receipts, follow-up prompts after online orders",
        "Implemented menu-item-level tracking to identify which promoted items drove the highest average order values",
        "Weekly business profile posts featuring daily specials, new menu items, and location-specific promotions",
        "Began retargeting campaigns for website visitors who viewed the menu but didn't complete an order — recovery rate of 8.7% on abandoned order intents",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale — Multi-Location Expansion & Seasonal Optimization",
      items: [
        "Expanded paid campaigns to target catering and group ordering segments — higher average values ($85-150 per catering order vs. $24 individual)",
        "Built catering-specific landing pages targeting NYC office lunch market, event catering, and corporate ordering",
        "AI optimization agents detected seasonal demand shifts as spring arrived and automatically reallocated budget toward outdoor dining and pickup-friendly messaging within hours of seeing the trend",
        "Generated 12 additional content pieces: summer menu guides, outdoor dining options by location, late-night ordering content for Manhattan locations",
        "Expanded neighborhood pages to cover 8 more micro-neighborhoods based on search demand data",
        "Location-level bid strategies fully optimized — underperforming Bronx location saw 67% order increase after AI identified that radius targeting was too narrow and expanded to adjacent neighborhoods",
        "Cross-location remarketing: customers who ordered from one location shown ads for their nearest location when traveling to different boroughs",
        "Backlink campaigns through NYC food blogs, local event sponsorship pages, and borough-specific community directories",
        "Speed of iteration advantage: when a competitor launched a promotion in Astoria, campaigns were restructured within hours to defend market share with counter-positioning",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing — Compounding Growth & Market Dominance",
      items: [
        "Monthly performance review by location with AI-driven budget recommendations based on demand density, seasonality, and competition levels",
        "Seasonal campaign optimization: summer BBQ promotions, fall comfort food campaigns, back-to-school lunch specials",
        "Continuous direct-order percentage growth — reducing third-party platform dependency month over month",
        "New content targeting emerging search trends: plant-based options, health-conscious fast food, sustainable packaging messaging",
        "Review generation maintained: 127 new reviews added across all locations during the engagement, average rating improving from 3.8 to 4.4 stars",
        "Ongoing AI optimization compounding daily improvements — bid adjustments, location-level budget shifts, audience refinements, and daypart optimization happening continuously across all locations",
        "Catering pipeline development: dedicated landing pages and campaigns generated 89 catering inquiries over the engagement period",
        "Data-driven menu promotion strategy: AI identified which menu items to feature in ads based on margin data and conversion rates",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,847", growth: "+3,840%", from: "from 123" },
      { label: "Top 10 Rankings", value: "127", growth: "+1,488%", from: "from 8" },
      { label: "Pages Created", value: "84", growth: "", from: "incl. 34 neighborhood pages" },
      { label: "Organic Traffic", value: "3,412/mo", growth: "+751%", from: "from 401" },
    ],
    monthly: [
      { month: "Jan '26", keywords: 198, top10: 11, top3: 2, traffic: 401, pages: 6, avgPos: 52.3, ctr: 0.7 },
      { month: "Feb '26", keywords: 387, top10: 19, top3: 4, traffic: 588, pages: 14, avgPos: 48.1, ctr: 0.9 },
      { month: "Mar '26", keywords: 741, top10: 31, top3: 7, traffic: 892, pages: 22, avgPos: 43.7, ctr: 1.1 },
      { month: "Apr '26", keywords: 1243, top10: 48, top3: 12, traffic: 1198, pages: 31, avgPos: 39.2, ctr: 1.3 },
      { month: "May '26", keywords: 1876, top10: 63, top3: 18, traffic: 1547, pages: 42, avgPos: 35.8, ctr: 1.5 },
      { month: "Jun '26", keywords: 2534, top10: 79, top3: 24, traffic: 2047, pages: 51, avgPos: 32.4, ctr: 1.7 },
      { month: "Jul '26", keywords: 3187, top10: 94, top3: 31, traffic: 2489, pages: 60, avgPos: 29.7, ctr: 1.9 },
      { month: "Aug '26", keywords: 3742, top10: 108, top3: 38, traffic: 2891, pages: 68, avgPos: 27.3, ctr: 2.1 },
      { month: "Sep '26", keywords: 4318, top10: 119, top3: 43, traffic: 3147, pages: 76, avgPos: 25.8, ctr: 2.2 },
      { month: "Oct '26", keywords: 4847, top10: 127, top3: 49, traffic: 3412, pages: 84, avgPos: 24.1, ctr: 2.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$62.3K" },
      { label: "Total Leads", value: "3,054" },
      { label: "Qualified Leads", value: "876" },
      { label: "Avg CPQL", value: "$71.11", note: "↓47% from $107.23 to $57.22 by Month 10" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "New Customers",
      costPerDeal: "Cost/Customer",
    },
    monthly: [
      // Month 1 (Jan '26): Foundation, broad targeting, winter slow season
      { month: "Jan '26", spend: 5147, leads: 185, cpl: 27.82, qualified: 48, cpql: 107.23, deals: 23, revenue: 8694, roas: 1.69 },
      // Month 2 (Feb '26): Ramping, attribution live
      { month: "Feb '26", spend: 5283, leads: 219, cpl: 24.12, qualified: 59, cpql: 89.54, deals: 28, revenue: 10752, roas: 2.04 },
      // Month 3 (Mar '26): Spring, direct order push starting
      { month: "Mar '26", spend: 5618, leads: 246, cpl: 22.84, qualified: 69, cpql: 81.42, deals: 33, revenue: 13134, roas: 2.34 },
      // Month 4 (Apr '26): Optimization kicking in, warmer weather
      { month: "Apr '26", spend: 6042, leads: 276, cpl: 21.89, qualified: 80, cpql: 75.53, deals: 38, revenue: 15732, roas: 2.60 },
      // Month 5 (May '26): Warm weather, outdoor dining surge
      { month: "May '26", spend: 6517, leads: 300, cpl: 21.72, qualified: 90, cpql: 72.41, deals: 43, revenue: 18404, roas: 2.82 },
      // Month 6 (Jun '26): Summer peak begins
      { month: "Jun '26", spend: 7134, leads: 355, cpl: 20.10, qualified: 103, cpql: 69.26, deals: 49, revenue: 21462, roas: 3.01 },
      // Month 7 (Jul '26): Full summer, highest volume
      { month: "Jul '26", spend: 7389, leads: 371, cpl: 19.92, qualified: 115, cpql: 64.25, deals: 54, revenue: 23922, roas: 3.24 },
      // Month 8 (Aug '26): Late summer, strong performance
      { month: "Aug '26", spend: 6891, leads: 353, cpl: 19.52, qualified: 106, cpql: 65.01, deals: 50, revenue: 22900, roas: 3.32 },
      // Month 9 (Sep '26): Back to school, catering kicks in
      { month: "Sep '26", spend: 6378, leads: 368, cpl: 17.33, qualified: 103, cpql: 61.92, deals: 48, revenue: 22272, roas: 3.49 },
      // Month 10 (Oct '26): Fall comfort food, mature optimization
      { month: "Oct '26", spend: 5894, leads: 381, cpl: 15.47, qualified: 103, cpql: 57.22, deals: 48, revenue: 22560, roas: 3.83 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views (All Locations)", value: "14,287/mo", growth: "+389%", from: "from 2,921" },
      { label: "Maps Impressions", value: "11,432/mo", growth: "+367%", from: "from 2,451" },
      { label: "GBP Calls (Total)", value: "3,847", growth: "+312%", from: "147/mo → 604/mo" },
      { label: "Direction Requests", value: "891/mo", growth: "+278%", from: "from 236" },
    ],
    monthly: [
      { month: "Jan '26", gbpViews: 2921, mapsImpressions: 2451, gbpCalls: 147, directionRequests: 236 },
      { month: "Feb '26", gbpViews: 3487, mapsImpressions: 2893, gbpCalls: 178, directionRequests: 287 },
      { month: "Mar '26", gbpViews: 4298, mapsImpressions: 3567, gbpCalls: 223, directionRequests: 341 },
      { month: "Apr '26", gbpViews: 5643, mapsImpressions: 4612, gbpCalls: 289, directionRequests: 418 },
      { month: "May '26", gbpViews: 7234, mapsImpressions: 5891, gbpCalls: 367, directionRequests: 512 },
      { month: "Jun '26", gbpViews: 9187, mapsImpressions: 7423, gbpCalls: 438, directionRequests: 621 },
      { month: "Jul '26", gbpViews: 11243, mapsImpressions: 8976, gbpCalls: 512, directionRequests: 723 },
      { month: "Aug '26", gbpViews: 12187, mapsImpressions: 9834, gbpCalls: 548, directionRequests: 784 },
      { month: "Sep '26", gbpViews: 13412, mapsImpressions: 10743, gbpCalls: 579, directionRequests: 841 },
      { month: "Oct '26", gbpViews: 14287, mapsImpressions: 11432, gbpCalls: 604, directionRequests: 891 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "521", growth: "+607%", note: "14/mo → 99/mo" },
      { label: "Phone Calls", value: "298", growth: "+613%", note: "8/mo → 57/mo" },
      { label: "Online Orders", value: "223", growth: "+600%", note: "6/mo → 42/mo" },
      { label: "Avg Conversion Rate", value: "3.14%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Online Orders",
      calls: "Phone Calls",
      totalLeads: "Total Organic Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Jan '26", formFills: 6, calls: 8, totalLeads: 14, conversionRate: 3.49 },
      { month: "Feb '26", formFills: 8, calls: 11, totalLeads: 19, conversionRate: 3.23 },
      { month: "Mar '26", formFills: 11, calls: 15, totalLeads: 26, conversionRate: 2.91 },
      { month: "Apr '26", formFills: 14, calls: 19, totalLeads: 33, conversionRate: 2.75 },
      { month: "May '26", formFills: 18, calls: 24, totalLeads: 42, conversionRate: 2.71 },
      { month: "Jun '26", formFills: 23, calls: 31, totalLeads: 54, conversionRate: 2.64 },
      { month: "Jul '26", formFills: 29, calls: 39, totalLeads: 68, conversionRate: 2.73 },
      { month: "Aug '26", formFills: 34, calls: 44, totalLeads: 78, conversionRate: 2.70 },
      { month: "Sep '26", formFills: 38, calls: 50, totalLeads: 88, conversionRate: 2.80 },
      { month: "Oct '26", formFills: 42, calls: 57, totalLeads: 99, conversionRate: 2.90 },
    ],
    sources: [
      { source: "Organic Search", percentage: 46, leads: 240 },
      { source: "Google Maps / GBP", percentage: 40, leads: 208 },
      { source: "Direct (Branded)", percentage: 14, leads: 73 },
    ],
  },
  impact: [
    { label: "Cost Per Qualified Lead", value: "$107.23 → $57.22", growth: "↓47%" },
    { label: "Qualified Lead Growth", value: "48 → 103/mo", growth: "+115%" },
    { label: "Total Revenue", value: "$179,832", growth: "2.89x blended ROAS" },
    { label: "Organic Traffic", value: "+751%", growth: "401 → 3,412/mo" },
  ],
};
