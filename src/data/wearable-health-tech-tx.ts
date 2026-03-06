import { CaseStudyData } from "./types";

export const wearableHealthTechTx: CaseStudyData = {
  slug: "wearable-health-tech-tx",
  industry: "Ecommerce",
  headline: "How a Texas-Based Wearable Health Tech Startup Scaled Ad Spend From $20K to $60K — While Lifting ROAS From 1.3x to 4.6x",
  subheadline: "MEGA helped a subscription-based wearable health technology startup in Texas transform struggling paid campaigns and build organic search authority — scaling monthly ad spend from $20,000 to $60,000 while improving ROAS from a below-breakeven 1.3x to a profitable 4.6x across 7 months of hyper growth.",
  heroStats: [
    { value: "4.6", unit: "x", label: "Peak ROAS (from 1.3x)" },
    { value: "4,617", unit: "+", label: "Ranking Keywords" },
    { value: "$1.05", unit: "M", label: "Total Revenue" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Ecommerce", "Subscription Model"],
  company: {
    industry: "Ecommerce — Wearable Health Technology & Subscription Wellness Devices",
    employees: "18",
    revenue: "$1.4M",
    location: "Austin, Texas",
    description: "A subscription-based wearable health technology startup headquartered in Austin, Texas, selling connected health monitoring devices bundled with a $34.99/month wellness subscription. Their product lineup included a wrist-worn biometric tracker ($249 device + subscription), a smart ring for sleep and recovery monitoring ($299 + subscription), and a clinical-grade continuous health monitor ($399 + subscription). The subscription unlocked real-time health insights, personalized coaching, physician dashboards, and advanced analytics. With a growing Texas customer base and expanding nationally, the startup had achieved strong product-market fit with health-conscious consumers aged 30–55 — particularly in corporate wellness programs and preventive health communities across the Dallas-Fort Worth, Houston, and Austin metros. However, their paid advertising was hemorrhaging money. Before partnering with MEGA, the team had been running paid campaigns for eight months with consistently disappointing results — ROAS hovered between 1.1x and 1.4x, barely covering device costs let alone subscription acquisition value. Every attempt to scale spend beyond $20,000 per month resulted in even worse returns, with cost per subscriber acquisition climbing above $180 while their target was under $90. The campaigns lacked audience segmentation, had no subscription-value-based bidding, and were optimizing for one-time device purchases rather than lifetime subscription revenue. Meanwhile, organic search was nonexistent — they ranked for just 108 keywords, almost all branded, while competitors dominated every health wearable search query in Texas and nationally. The startup was in hyper growth mode with venture backing and needed a partner who could scale paid acquisition profitably while building a sustainable organic channel to reduce long-term customer acquisition costs.",
  },
  challenges: [
    {
      title: "Paid Campaigns Were Losing Money at Scale — ROAS Stuck Below Breakeven",
      description: "The startup had been running paid advertising for eight months before engaging MEGA, and the results were dire. ROAS fluctuated between 1.1x and 1.4x — well below the 2.5x breakeven threshold needed to cover device COGS, fulfillment, and subscription onboarding costs. The fundamental problem was that campaigns were optimizing for one-time device purchases ($249-$399) without accounting for subscription lifetime value ($34.99/month × average 14-month retention = $490 LTV per subscriber). Audiences were broadly targeted with no segmentation by health interest, device tier, or purchase intent. Creative was generic product imagery with no messaging around the subscription value proposition. Every time the team pushed spend past $20,000, cost per acquisition ballooned and returns deteriorated further. With venture capital burn rate pressure, the startup couldn't afford to keep spending $20K/month at 1.3x returns — they needed either dramatic efficiency improvement or to pull back entirely.",
    },
    {
      title: "Zero Organic Visibility in a Fiercely Competitive Health Wearable Category",
      description: "The subscription health wearable space is dominated by well-funded brands — Whoop, Oura, Apple, Fitbit, and Garmin control the first page for virtually every relevant search term. The Texas startup ranked for just 108 keywords, nearly all branded queries generating fewer than 400 monthly organic sessions. Their product pages were thin — averaging 120 words of manufacturer-style copy with no unique content about sensor technology, health metric explanations, or subscription benefits. No blog, no buyer guides, no health education content, no comparison pages. Domain authority sat at 14. For a subscription business where customer lifetime value depends on organic discovery reducing paid acquisition costs, the complete absence of organic search was an existential problem — it meant every single subscriber had to be acquired through paid channels at unsustainable costs.",
    },
    {
      title: "No Subscription-Centric Acquisition Strategy or MRR Growth Framework",
      description: "The startup was measuring success by device sales rather than subscription activations and monthly recurring revenue. Their analytics tracked one-time purchase revenue but couldn't attribute subscription signups, trial-to-paid conversion rates, or subscriber lifetime value back to specific campaigns or channels. This meant the paid team was optimizing for a $249 device sale when the true customer value was $739+ (device + 14 months of subscription). Without subscription-aware attribution, every scaling decision was based on incomplete data — campaigns that appeared unprofitable on a device-sale basis might have been highly profitable when subscription revenue was included. The disconnect between acquisition strategy and subscription economics was the root cause of their inability to scale confidently.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1–2",
      title: "Audit, Subscription Attribution & SEO Foundation",
      items: [
        "Full audit of 8 months of paid campaign data — discovered campaigns were optimizing for device purchase value ($249-$399) instead of subscriber LTV ($739+), causing the algorithm to undervalue high-intent subscription buyers",
        "Built subscription-aware attribution model tracking device purchase → subscription activation → 30-day retention → 90-day retention, enabling campaigns to optimize for subscriber acquisition rather than one-time device sales",
        "Audience segmentation across five health verticals: preventive health monitors (35-55, health-conscious Texas professionals), fitness and recovery trackers (25-40, active lifestyle), sleep optimization seekers (30-50, corporate wellness), chronic condition monitors (45-65, physician-recommended), and corporate wellness program buyers",
        "Product-tiered campaign architecture — separate campaigns for entry biometric tracker ($249), premium smart ring ($299), and clinical-grade monitor ($399) with subscription LTV-based ROAS targets",
        "Comprehensive technical SEO audit — identified 287 crawlability issues, missing structured data, no product schema, Core Web Vitals failures on 81% of mobile pages, and zero internal linking between content and product pages",
        "Product page overhaul — expanded each page from ~120 words to 1,400+ words with sensor technology deep-dives, subscription benefit breakdowns, health metric explanations, and comparison tables against Whoop, Oura, and Fitbit",
        "Keyword research targeting 1,847 terms across wearable health subcategories: health monitors, fitness trackers, sleep tracking devices, subscription health wearables, and Texas-specific health technology queries",
        "Implemented enhanced ecommerce tracking with full subscription funnel: sessions → product views → add-to-carts → device orders → subscription activations → MRR attribution by channel",
        "Published 4 foundational pillar pages: 'Complete Guide to Health Monitoring Wearables,' 'Subscription Health Tech: What You Get Beyond the Device,' 'Sleep Tracking Technology Comparison 2025,' and 'Heart Rate Variability Monitoring Explained'",
      ],
    },
    {
      phase: 2,
      months: "Months 3–5",
      title: "Aggressive Scaling & Content Acceleration",
      items: [
        "Budget scaled from $20K to $42K as subscription-aware campaigns proved 2.7x+ blended ROAS — strict scaling rules: only increase spend on audience segments maintaining target subscriber acquisition cost below $85",
        "Launched health-condition-targeted campaigns: sleep improvement (insomnia awareness audiences across Texas metros), cardiac health monitoring (40-65 demographic, physician referral audiences), athletic recovery tracking (marathon and triathlon communities in Dallas, Houston, Austin)",
        "Published 18 comparison and buyer guide articles — 'Whoop vs [Brand] for Subscription Health Tracking,' 'Best Health Wearables in Texas 2025,' 'Health Monitor Subscription Comparison,' driving long-tail organic traffic",
        "Created subscription-value content series — 8 articles on what subscribers get: personalized coaching, physician dashboard access, health trend analysis, emergency alerts, and wellness program integrations",
        "Retargeting architecture built around subscription journey: device page viewers (1-3 days), subscription page readers (1-7 days), add-to-cart abandoners (1-14 days), device purchasers not yet subscribed (1-30 days), and churned subscriber win-back",
        "Dynamic creative optimization — subscription ROI calculators in ads showing '$34.99/mo = $1.17/day for 24/7 health monitoring,' personalized by health interest vertical",
        "Internal linking overhaul connecting health education articles → comparison guides → product pages → subscription signup, building topical authority clusters around wearable health technology",
        "Backlink outreach to Texas health publications, fitness blogs, and health tech reviewers — secured 11 referring domains in first outreach wave",
      ],
    },
    {
      phase: 3,
      months: "Months 6–7",
      title: "Hyper Growth & Seasonal Optimization",
      items: [
        "Budget scaled to $52K-$60K monthly as ROAS strengthened past 4.2x — expanded into wellness-adjacent audiences: biohacking communities, corporate HR wellness buyers, preventive medicine advocates, and health-conscious holiday gift shoppers",
        "Holiday and New Year's resolution campaign strategy — 'Give the Gift of Health' creative for November-December, 'Start 2026 With Better Health Data' messaging for New Year resolution audiences",
        "Published 12 seasonal content pieces targeting 'best health wearable gifts 2025,' 'health tracker subscription deals,' 'New Year health monitoring,' capturing seasonal search demand spikes",
        "Digital PR campaign — secured product mentions in 3 Texas business publications, 2 national health tech outlets, and 6 wellness influencer partnerships with backlinks to product and subscription pages",
        "Subscription retention campaigns — email and paid retargeting for subscribers approaching month 3 (highest churn risk), offering annual plan discounts and feature unlocks to improve retention from 14 to 17+ months",
        "Advanced value-based bidding using subscriber LTV data — campaigns optimizing for predicted 12-month subscription value rather than device purchase price, dramatically improving acquisition efficiency at scale",
        "MRR tracking dashboard — real-time visibility into monthly recurring revenue by acquisition channel, enabling the team to see that organic subscribers retained 23% longer than paid subscribers",
        "End-of-engagement performance documentation and strategic roadmap for scaling to $100K+ monthly ad spend while maintaining 4x+ ROAS through 2026",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,617", growth: "+4,175%", from: "from 108" },
      { label: "Top 10 Rankings", value: "412", growth: "+5,050%", from: "from 8" },
      { label: "Organic Traffic", value: "11,234/mo", growth: "+2,701%", from: "from 401" },
      { label: "Domain Authority", value: "31", growth: "+121%", from: "from 14" },
    ],
    monthly: [
      { month: "Jun 2025", keywords: 108, top10: 8, top3: 0, traffic: 401, pages: 18, avgPos: 57.3, ctr: 0.3 },
      { month: "Jul 2025", keywords: 167, top10: 14, top3: 0, traffic: 523, pages: 32, avgPos: 52.8, ctr: 0.4 },
      { month: "Aug 2025", keywords: 341, top10: 37, top3: 2, traffic: 894, pages: 54, avgPos: 46.2, ctr: 0.6 },
      { month: "Sep 2025", keywords: 847, top10: 89, top3: 8, traffic: 2134, pages: 78, avgPos: 40.7, ctr: 0.9 },
      { month: "Oct 2025", keywords: 1823, top10: 178, top3: 19, traffic: 4567, pages: 106, avgPos: 35.4, ctr: 1.2 },
      { month: "Nov 2025", keywords: 3214, top10: 298, top3: 38, traffic: 7891, pages: 138, avgPos: 30.1, ctr: 1.6 },
      { month: "Dec 2025", keywords: 4617, top10: 412, top3: 57, traffic: 11234, pages: 174, avgPos: 26.4, ctr: 1.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$261.7K" },
      { label: "Total Orders", value: "3,847" },
      { label: "Avg Cost Per Acquisition", value: "$68.02", note: "↓64% from $186.61" },
      { label: "Blended ROAS", value: "3.56x", note: "from 1.28x baseline" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jun 2025: Starting — struggling, $20K budget, low ROAS
      { month: "Jun 2025", spend: 20340, leads: 11054, cpl: 1.84, qualified: 643, cpql: 31.63, deals: 109, revenue: 25942, roas: 1.28 },
      // Jul 2025: Early optimization, subscription attribution live
      { month: "Jul 2025", spend: 22180, leads: 13124, cpl: 1.69, qualified: 789, cpql: 28.11, deals: 173, revenue: 41347, roas: 1.86 },
      // Aug 2025: Segmented campaigns kicking in, budget increase
      { month: "Aug 2025", spend: 28470, leads: 18487, cpl: 1.54, qualified: 1148, cpql: 24.80, deals: 319, revenue: 76879, roas: 2.70 },
      // Sep 2025: Scaling hard — subscription LTV bidding deployed
      { month: "Sep 2025", spend: 35230, leads: 24636, cpl: 1.43, qualified: 1579, cpql: 22.31, deals: 489, revenue: 118827, roas: 3.37 },
      // Oct 2025: Pre-holiday ramp — corporate wellness Q4 budgets
      { month: "Oct 2025", spend: 42890, leads: 31307, cpl: 1.37, qualified: 2073, cpql: 20.69, deals: 694, revenue: 167948, roas: 3.92 },
      // Nov 2025: Holiday peak — gift buyer audiences, maximum scaling
      { month: "Nov 2025", spend: 52170, leads: 39824, cpl: 1.31, qualified: 2791, cpql: 18.69, deals: 921, revenue: 222882, roas: 4.27 },
      // Dec 2025: Hyper growth peak — $60K budget, strongest ROAS
      { month: "Dec 2025", spend: 60430, leads: 45780, cpl: 1.32, qualified: 3213, cpql: 18.81, deals: 1142, revenue: 277506, roas: 4.59 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Orders", value: "487", growth: "+4,770%", note: "1/mo → 198/mo" },
      { label: "Total Organic Revenue", value: "$114.2K", growth: "+5,318%", note: "$287/mo → $58.5K/mo" },
      { label: "Avg Order Value", value: "$294.87", note: "device + first month subscription" },
      { label: "Subscription Activation Rate", value: "91.4%", note: "of device purchasers" },
    ],
    columnLabels: {
      formFills: "Add to Carts",
      calls: "Orders",
      totalLeads: "Revenue",
      conversionRate: "AOV",
    },
    monthly: [
      { month: "Jun 2025", formFills: 5, calls: 1, totalLeads: 287, conversionRate: 287.00 },
      { month: "Jul 2025", formFills: 9, calls: 3, totalLeads: 891, conversionRate: 297.00 },
      { month: "Aug 2025", formFills: 22, calls: 8, totalLeads: 2344, conversionRate: 293.00 },
      { month: "Sep 2025", formFills: 58, calls: 23, totalLeads: 6786, conversionRate: 295.04 },
      { month: "Oct 2025", formFills: 124, calls: 52, totalLeads: 15314, conversionRate: 294.50 },
      { month: "Nov 2025", formFills: 247, calls: 102, totalLeads: 30078, conversionRate: 294.88 },
      { month: "Dec 2025", formFills: 412, calls: 198, totalLeads: 58479, conversionRate: 295.35 },
    ],
    sources: [
      { source: "Organic Search (Non-Branded)", percentage: 54, leads: 263 },
      { source: "Organic Search (Branded)", percentage: 31, leads: 151 },
      { source: "Content & Comparison Pages", percentage: 15, leads: 73 },
    ],
  },
  impact: [
    { label: "Total Ad Revenue", value: "$931.3K", growth: "+289%" },
    { label: "Blended ROAS", value: "3.56x", growth: "from 1.28x" },
    { label: "Ranking Keywords", value: "4,617", growth: "+4,175%" },
    { label: "Total Ad Spend", value: "$261.7K", growth: "Scaled 200%" },
  ],
};
