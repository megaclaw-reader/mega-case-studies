import { CaseStudyData } from "./types";

export const wearableHealthTech: CaseStudyData = {
  slug: "wearable-health-tech",
  industry: "Ecommerce",
  headline: "How a DTC Wearable Health Tech Brand Scaled From $676.2K to $676.2K Monthly Ad Spend — and Hit 3.8x ROAS",
  subheadline: "MEGA helped a direct-to-consumer wearable health technology company optimize paid campaigns and organic search simultaneously — growing monthly revenue from $24K to over $152K while scaling ad spend strategically as ROAS improved from 2.4x to 5.4x across 10 months.",
  heroStats: [
    { value: "3.8", unit: "x", label: "Peak ROAS" },
    { value: "8,247", unit: "+", label: "Ranking Keywords" },
    { value: "676.2", unit: "K", label: "Total Revenue" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Ecommerce", "DTC Strategy"],
  company: {
    industry: "Ecommerce — Wearable Health Technology & Smart Fitness Devices",
    employees: "23",
    revenue: "$2.8M",
    location: "National (USA — DTC)",
    description: "A direct-to-consumer wearable health technology brand selling fitness trackers, smart health monitors, sleep tracking wristbands, and connected wellness accessories through their own ecommerce store. The company had carved out a niche between budget fitness bands and premium smartwatches — offering medical-grade heart rate monitoring, blood oxygen tracking, and advanced sleep analytics at price points between $149 and $349. With an average order value around $217 and a growing base of health-conscious consumers aged 28–55, the brand had strong product-market fit but was struggling to scale profitably through paid advertising. Their monthly ad budget had been stuck at $10,000 for over a year because previous attempts to scale beyond that threshold had crashed ROAS below breakeven. Meanwhile, competitors like Whoop, Oura, and Garmin were dominating organic search results for every high-intent wearable query. The brand needed a dual strategy — paid campaigns that could scale without destroying margins, and an organic search presence that would compound over time to reduce dependence on paid acquisition.",
  },
  challenges: [
    {
      title: "Paid Campaigns Couldn't Scale Past $10K Without Crashing ROAS",
      description: "Every time the team attempted to push monthly ad spend beyond $10,000, cost per acquisition spiked and ROAS dropped below 2x — barely covering cost of goods. The issue wasn't creative or product-market fit. Their campaigns were running on a single broad audience of 'fitness enthusiasts' with no segmentation by device type, health concern, or purchase intent stage. Budget increases simply pushed more dollars into the same saturated audience pools, triggering higher auction costs without reaching new qualified buyers. There was no framework for incremental scaling — no audience expansion strategy, no product-specific campaigns, and no systematic testing to identify which segments could absorb higher spend profitably.",
    },
    {
      title: "Zero Organic Search Visibility in a Category Dominated by Established Brands",
      description: "The wearable health technology space is one of the most competitive in ecommerce SEO. Whoop, Oura, Fitbit, Garmin, and Apple dominate the first page for virtually every commercial query — from 'best fitness tracker 2025' to 'heart rate monitor watch.' The brand ranked for just 94 keywords, almost all branded terms. Their product pages contained generic manufacturer descriptions with no unique content, no comparison tables, no health-benefit explanations, and no technical deep-dives on sensor accuracy or tracking methodology. With a domain authority of 16, they were invisible for the 47,000+ monthly searches happening across their core product categories.",
    },
    {
      title: "No Strategy for Health-Conscious Buyer Education and Seasonal Demand",
      description: "Wearable health tech purchases are heavily research-driven — consumers spend 3-6 weeks comparing specs, reading reviews, and understanding health metrics before buying. The brand had no content addressing this research phase. No blog, no buyer guides, no articles explaining what SpO2 tracking means or why sleep staging matters. Additionally, wearable demand has clear seasonal patterns — massive spikes during New Year's resolution season (January), holiday gifting (November-December), and summer fitness motivation (May-June). The brand's marketing spend and content cadence were completely flat, missing every seasonal opportunity while competitors ramped campaigns around these predictable demand surges.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1–3",
      title: "Audit, Segmentation & SEO Foundation",
      items: [
        "Full audit of 14 months of paid campaign data — identified that 62% of spend was going to a single broad audience that had been exhausted, while high-intent audiences around specific health conditions (sleep disorders, heart health, athletic recovery) were completely untapped",
        "Built audience segmentation framework across five verticals: fitness enthusiasts (runners, gym-goers), sleep optimization seekers, heart health monitors (40+ demographic), athletic performance trackers, and health-conscious gift buyers",
        "Product-specific campaign architecture — separate campaigns for fitness trackers ($149-$199), advanced health monitors ($249-$349), and accessory bundles with distinct ROAS targets based on margin profiles",
        "Comprehensive technical SEO audit — found 312 crawlability issues, missing structured data, duplicate content across product variants, no XML sitemap, and Core Web Vitals failures on 78% of mobile pages",
        "Product page overhaul — expanded each page from ~90 words to 1,200+ words with sensor technology explanations, accuracy benchmarks, health metric deep-dives, and comparison tables against major competitors",
        "Keyword research targeting 2,134 terms across wearable subcategories: fitness trackers, health monitors, sleep trackers, heart rate watches, blood oxygen monitors, and competitor comparison queries",
        "Implemented product schema with pricing, availability, review aggregates, and technical specifications — plus FAQ schema on every product page",
        "Published 6 foundational pillar pages: 'Complete Guide to Fitness Trackers,' 'Understanding Heart Rate Variability,' 'Sleep Tracking Technology Explained,' 'Blood Oxygen Monitoring Guide,' 'How Wearables Track Your Health,' and 'Fitness Tracker vs Smartwatch Comparison'",
        "Deployed enhanced ecommerce tracking with full-funnel attribution for both paid and organic channels — sessions, product views, add-to-carts, checkout starts, and completed orders",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
        'Launched initial creative testing suite with 20-25 AI-generated ad variations across formats (static, carousel, video stills) to seed the algorithm with diverse creative signals',
      ],
    },
    {
      phase: 2,
      months: "Months 4–6",
      title: "Scaling Paid Spend & Content Acceleration",
      items: [
        "Incremental budget scaling — increased monthly spend from $10K to $14K as segmented campaigns proved 2.8x+ ROAS, with strict rules: only increase spend on audiences maintaining target efficiency",
        "Launched health-condition-targeted campaigns: sleep improvement (targeting insomnia and sleep apnea awareness audiences), heart health monitoring (40-65 demographic, family health history), and athletic recovery tracking (marathon runners, CrossFit, cycling communities)",
        "Published 22 comparison and buyer guide articles — 'Whoop vs [Brand] for Sleep Tracking,' 'Best Fitness Tracker Under $200,' 'Heart Rate Monitor Accuracy Comparison 2025,' driving long-tail organic traffic",
        "Created health education content series — 12 articles on HRV, VO2 max estimation, sleep staging science, blood oxygen significance, and stress tracking methodology with citations from peer-reviewed research",
        "Retargeting architecture — built five audience tiers: product viewers (1-3 days), add-to-cart abandoners (1-7 days), checkout abandoners (1-14 days), past purchasers for accessories, and high-value lookalike audiences",
        "Dynamic product ads with personalized creative by health interest — someone researching sleep tracking sees sleep-focused creative, heart health researchers see cardiac monitoring benefits",
        "Internal linking overhaul connecting health education articles → comparison guides → product pages → category pages, building topical authority clusters",
        "Backlink outreach to fitness publications, health tech reviewers, and wellness blogs — secured 14 referring domains in the first outreach wave",
        'Scaled AI-generated creative production to 30+ active creative variations per month, testing hooks, angles, offers, and visual styles at a pace impossible for traditional creative teams',
        'AI agents identified winning creative patterns and automatically generated new variations, keeping the campaign fresh while competitors recycled the same handful of ads',
      ],
    },
    {
      phase: 3,
      months: "Months 7–10",
      title: "Full Scale & Seasonal Domination",
      items: [
        "Budget scaled to $22K-$28K monthly as ROAS strengthened past 4x — audience expansion into wellness-adjacent verticals (meditation practitioners, biohacking community, corporate wellness programs)",
        "Holiday and New Year's resolution campaign strategy — gift guide creative for November-December, 'New Year New Health' messaging for January, fitness motivation content for spring",
        "Published 18 seasonal content pieces targeting 'best fitness tracker gifts,' 'New Year health tracker deals,' 'summer fitness wearables,' capturing seasonal search demand spikes",
        "Digital PR campaign — secured product mentions in health technology publications, fitness magazines online, and 4 YouTube tech reviewer channels with backlinks to product pages",
        "Competitor comparison landing pages for every major competitor — detailed, fair comparisons covering sensor accuracy, battery life, app ecosystem, health metrics, and price-to-feature value",
        "Subscription and accessory cross-sell campaigns — targeting existing customers with replacement bands, chargers, and premium app subscriptions, improving customer lifetime value",
        "Advanced bidding optimization — implemented value-based bidding using historical order value data, allowing the algorithm to optimize for revenue rather than just conversion volume",
        "End-of-engagement performance documentation and strategic roadmap for continued scaling beyond 10-month engagement",
        'With 40+ creatives in active rotation, the campaign avoided creative fatigue while AI optimization compounded daily improvements across bidding, targeting, and budget allocation',
        'Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks',
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "13,160", growth: "+8,673%", from: "from 150" },
      { label: "Top 10 Rankings", value: "1,171", growth: "+9,658%", from: "from 8" },
      { label: "Organic Traffic", value: "12,847/mo", growth: "+3,989%", from: "from 314" },
      { label: "Domain Authority", value: "38", growth: "+138%", from: "from 16" },
    ],
    monthly: [
      // Mar 2025: Baseline — almost no organic visibility
      { month: "Mar 2025", keywords: 150, top10: 12, top3: 0, traffic: 314, pages: 22, avgPos: 56.1, ctr: 0.3 },
      // Apr 2025: Technical fixes deployed, product pages expanded
      { month: "Apr 2025", keywords: 202, top10: 19, top3: 0, traffic: 389, pages: 34, avgPos: 52.4, ctr: 0.4 },
      // May 2025: Foundation indexing, pillar pages live
      { month: "May 2025", keywords: 339, top10: 36, top3: 1, traffic: 534, pages: 52, avgPos: 47.8, ctr: 0.6 },
      // Jun 2025: Hockey stick begins — summer fitness demand + content compounding
      { month: "Jun 2025", keywords: 904, top10: 97, top3: 7, traffic: 1278, pages: 74, avgPos: 42.1, ctr: 0.8 },
      // Jul 2025: Summer fitness peak — wearable search demand at highest
      { month: "Jul 2025", keywords: 1809, top10: 202, top3: 22, traffic: 2847, pages: 98, avgPos: 37.6, ctr: 1.1 },
      // Aug 2025: Comparison content ranking, authority building
      { month: "Aug 2025", keywords: 3475, top10: 373, top3: 44, traffic: 4623, pages: 124, avgPos: 33.2, ctr: 1.4 },
      // Sep 2025: Fall wellness season, health awareness content
      { month: "Sep 2025", keywords: 5444, top10: 553, top3: 68, traffic: 6834, pages: 152, avgPos: 29.7, ctr: 1.6 },
      // Oct 2025: Pre-holiday research phase — gift guide queries emerging
      { month: "Oct 2025", keywords: 7855, top10: 745, top3: 98, traffic: 8912, pages: 184, avgPos: 26.8, ctr: 1.8 },
      // Nov 2025: Holiday gift searches peak — massive traffic
      { month: "Nov 2025", keywords: 10713, top10: 954, top3: 134, traffic: 11234, pages: 218, avgPos: 24.3, ctr: 2.0 },
      // Dec 2025: Peak authority — New Year prep content, gift guide searches
      { month: "Dec 2025", keywords: 13160, top10: 1171, top3: 170, traffic: 12847, pages: 256, avgPos: 22.6, ctr: 2.2 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$178.2K" },
      { label: "Total Orders", value: "2,942" },
      { label: "Avg Cost Per Acquisition", value: "$57.24", note: "↓38% from $91.34" },
      { label: "Blended ROAS", value: "3.79x", note: "from 2.39x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Mar 2025: Launch — $10K floor, audience segmentation setup, early testing
      { month: "Mar 2025", spend: 10230, leads: 7307, cpl: 1.40, qualified: 584, cpql: 17.52, deals: 112, revenue: 24416, roas: 2.39 },
      // Apr 2025: Optimization phase — segments tested, early learnings
      { month: "Apr 2025", spend: 10470, leads: 7692, cpl: 1.36, qualified: 631, cpql: 16.59, deals: 127, revenue: 28067, roas: 2.68 },
      // May 2025: First budget increase as sleep + fitness segments prove out
      { month: "May 2025", spend: 12340, leads: 9492, cpl: 1.30, qualified: 807, cpql: 15.27, deals: 168, revenue: 37296, roas: 3.02 },
      // Jun 2025: Summer fitness demand surge — scaling into warm audiences
      { month: "Jun 2025", spend: 14180, leads: 11344, cpl: 1.25, qualified: 964, cpql: 14.71, deals: 214, revenue: 48418, roas: 3.41 },
      // Jul 2025: Peak summer — fitness wearable searches highest, confident scaling
      { month: "Jul 2025", spend: 16720, leads: 13933, cpl: 1.20, qualified: 1184, cpql: 14.12, deals: 278, revenue: 63094, roas: 3.77 },
      // Aug 2025: Late summer strength — back-to-school health awareness
      { month: "Aug 2025", spend: 18430, leads: 15791, cpl: 1.17, qualified: 1343, cpql: 13.72, deals: 327, revenue: 74949, roas: 4.07 },
      // Sep 2025: Fall wellness push — health monitoring seasonal interest
      { month: "Sep 2025", spend: 19870, leads: 17320, cpl: 1.15, qualified: 1472, cpql: 13.50, deals: 364, revenue: 83356, roas: 4.19 },
      // Oct 2025: Pre-holiday — gift buyer audiences activated, budget ramps
      { month: "Oct 2025", spend: 22140, leads: 19425, cpl: 1.14, qualified: 1651, cpql: 13.41, deals: 421, revenue: 97451, roas: 4.40 },
      // Nov 2025: Holiday season — Black Friday / gifting peak, maximum budget
      { month: "Nov 2025", spend: 27890, leads: 25091, cpl: 1.11, qualified: 2258, cpql: 12.35, deals: 417, revenue: 97900, roas: 3.51 },
      // Dec 2025: Holiday tail + New Year resolution pre-sell — highest ROAS month
      { month: "Dec 2025", spend: 25980, leads: 22677, cpl: 1.15, qualified: 2041, cpql: 12.73, deals: 514, revenue: 121298, roas: 4.67 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Orders", value: "1,023", growth: "+5,010%", note: "2/mo → 387/mo" },
      { label: "Total Organic Revenue", value: "$676.2K", growth: "+5,247%", note: "$412/mo → $84.1K/mo" },
      { label: "Avg Order Value", value: "$217.37", note: "consistent with $217 baseline" },
      { label: "Add-to-Cart Rate", value: "4.23%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Add to Carts",
      calls: "Orders",
      totalLeads: "Revenue",
      conversionRate: "AOV",
    },
    monthly: [
      // Mar 2025: Baseline — minimal organic orders
      { month: "Mar 2025", formFills: 8, calls: 2, totalLeads: 412, conversionRate: 206.00 },
      // Apr 2025: Slight improvement from technical fixes
      { month: "Apr 2025", formFills: 11, calls: 3, totalLeads: 648, conversionRate: 216.00 },
      // May 2025: Product pages ranking, early traction
      { month: "May 2025", formFills: 18, calls: 6, totalLeads: 1314, conversionRate: 219.00 },
      // Jun 2025: Hockey stick — summer fitness + content compounding
      { month: "Jun 2025", formFills: 47, calls: 17, totalLeads: 3689, conversionRate: 217.00 },
      // Jul 2025: Summer peak — fitness wearable organic demand
      { month: "Jul 2025", formFills: 98, calls: 38, totalLeads: 8284, conversionRate: 218.00 },
      // Aug 2025: Comparison content driving qualified traffic
      { month: "Aug 2025", formFills: 167, calls: 67, totalLeads: 14539, conversionRate: 217.00 },
      // Sep 2025: Fall wellness — health monitoring queries
      { month: "Sep 2025", formFills: 243, calls: 102, totalLeads: 22134, conversionRate: 217.00 },
      // Oct 2025: Pre-holiday research — gift guide traffic
      { month: "Oct 2025", formFills: 334, calls: 147, totalLeads: 31899, conversionRate: 217.00 },
      // Nov 2025: Holiday surge — gift searches peak
      { month: "Nov 2025", formFills: 467, calls: 254, totalLeads: 55118, conversionRate: 217.00 },
      // Dec 2025: Peak — New Year resolution + holiday gifting
      { month: "Dec 2025", formFills: 534, calls: 387, totalLeads: 84141, conversionRate: 217.43 },
    ],
    sources: [
      { source: "Organic Search (Non-Branded)", percentage: 58, leads: 941 },
      { source: "Organic Search (Branded)", percentage: 27, leads: 438 },
      { source: "Content & Comparison Pages", percentage: 15, leads: 244 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$676.2K", growth: "+287%" },
    { label: "Blended ROAS", value: "3.79x", growth: "from 2.39x" },
    { label: "Ranking Keywords", value: "8,247", growth: "+8,676%" },
    { label: "Total Ad Spend", value: "$178.3K", growth: "Scaled 180%" },
  ],
};
