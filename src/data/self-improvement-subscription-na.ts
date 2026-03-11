import { CaseStudyData } from "./types";

export const selfImprovementSubscriptionNA: CaseStudyData = {
  slug: "self-improvement-subscription-na",
  industry: "Self Improvement Subscription",
  headline: "How a Digital Wellness Platform Cut Acquisition Costs 23% While Scaling Across 22 Cities",
  subheadline: "MEGA helped a self-improvement subscription platform optimize their multi-city paid advertising strategy, reducing cost per acquisition by 23%, growing subscriber base 187%, and generating $847.3K in subscription revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "23", unit: "%", label: "CPA Reduction" },
    { value: "847", unit: "K", label: "Subscription Revenue" },
  ],
  tags: ["Paid Advertising", "Multi-City Optimization", "CPA Reduction"],
  company: {
    industry: "Self Improvement & Wellness",
    employees: "34",
    revenue: "$2.8M",
    location: "North America (22 cities)",
    description: "A fast-growing digital wellness platform offering guided meditation, personal development courses, and habit-tracking tools through a subscription-based mobile app. The company had established a strong product-market fit with excellent user retention (8.2% monthly churn), but their paid acquisition strategy was inefficient and fragmented across multiple city markets. With ambitious growth targets and increasing competition from larger wellness brands, they needed a unified approach to scale their subscriber acquisition while maintaining unit economics.",
  },
  challenges: [
    {
      title: "Fragmented Multi-City Strategy",
      description: "The company was running separate campaigns across 22 North American cities with inconsistent messaging, targeting, and budget allocation. Each market was managed independently, leading to missed opportunities for cross-market learning and optimization. Cost per acquisition varied wildly by city, from $18 in smaller markets to $47 in competitive metropolitan areas.",
    },
    {
      title: "Rising Acquisition Costs",
      description: "Competition in the wellness and self-improvement space had intensified, driving up advertising costs across all channels. The platform's cost per trial signup was climbing steadily, and the conversion rate from free trial to paid subscription had plateaued at 22%, well below industry benchmarks of 28-35%.",
    },
    {
      title: "Creative Fatigue & Ad Spend Efficiency",
      description: "The company was cycling through creative assets manually without systematic testing protocols. Video creative performance would decline after 2-3 weeks, but there was no automated system for creative refresh or audience rotation. Budget allocation across cities was based on gut feeling rather than data-driven performance metrics.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Unified Platform & Baseline Optimization",
      items: [
        "Consolidated all 22 city campaigns under unified campaign management system with consistent tracking and attribution",
        "Implemented AI-powered bid optimization algorithms with city-specific performance targets and automated budget reallocation",
        "Established baseline creative testing framework with systematic A/B testing protocols for video, static, and carousel formats",
        "Set up comprehensive conversion tracking from trial signup through subscription activation and retention",
        "Analyzed historical performance data across all markets to identify top-performing audience segments and messaging themes",
        "Created market-specific landing pages optimized for local wellness trends and seasonal patterns",
        "Implemented automated bid adjustments based on real-time cost per acquisition and lifetime value calculations",
        "Launched initial round of video creative featuring authentic user success stories and guided meditation previews",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "AI-Driven Creative & Audience Optimization",
      items: [
        "Deployed machine learning models to predict creative fatigue and automatically rotate ad sets before performance decline",
        "Expanded audience targeting with lookalike segments based on high-lifetime-value subscribers from each city market",
        "Launched systematic creative testing combining AI-generated variations with human-designed wellness-focused content",
        "Implemented cross-city budget optimization allowing high-performing markets to scale while reducing spend in underperforming areas",
        "Added retargeting campaigns for trial users who didn't convert, with personalized messaging based on in-app behavior",
        "Introduced seasonal creative themes aligned with wellness trends (New Year resolutions, spring wellness, back-to-school stress)",
        "Set up automated competitive intelligence monitoring to adjust messaging and positioning in real-time",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Advanced Personalization & Scaling",
      items: [
        "Rolled out dynamic creative optimization with personalized messaging based on user demographics and city-specific wellness interests",
        "Expanded successful creative formats to additional markets with localized messaging and cultural adaptations",
        "Implemented predictive lifetime value modeling to optimize bids based on subscriber quality rather than just acquisition volume",
        "Launched advanced audience segmentation targeting specific wellness goals (stress reduction, sleep improvement, productivity)",
        "Added video testimonial campaigns featuring real users from each city market to build local credibility and trust",
        "Integrated subscription upgrade campaigns targeting existing free trial users with premium feature highlights",
        "Deployed automated day-of-week and time-of-day bid adjustments based on city-specific user behavior patterns",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Optimization & Expansion",
      items: [
        "Continuously refined AI models with new performance data, reducing manual optimization workload by 78%",
        "Expanded to adjacent wellness verticals (sleep health, productivity tools) with proven creative and targeting frameworks",
        "Implemented advanced attribution modeling accounting for multi-touch journeys and cross-device conversions",
        "Added seasonal campaign automation with predictive budget allocation based on historical wellness engagement patterns",
        "Launched referral program integration with paid campaigns to amplify organic growth in high-performing city markets",
        "Established monthly performance reviews with actionable insights for product team to improve trial-to-paid conversion rates",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$156.3K" },
      { label: "App Sessions", value: "47,284" },
      { label: "Trial Subscriptions", value: "4,847" },
      { label: "Paid Subscriptions", value: "1,284" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Session",
      qualified: "Trials",
      cpql: "CPA (Trial)",
      deals: "Paid Subs",
    },
    monthly: [
      // Month 1 (June 2025): Baseline performance, fragmented approach
      { month: "Jun 2025", spend: 17656, sessions: 5372, leads: 537, cpl: 32.87, qualified: 142, cpql: 124.34, deals: 28, revenue: 58437, roas: 3.31 },
      // Month 2 (July 2025): Unified platform implemented, initial optimizations
      { month: "Jul 2025", spend: 18234, sessions: 5709, leads: 571, cpl: 31.93, qualified: 153, cpql: 119.17, deals: 31, revenue: 62184, roas: 3.41 },
      // Month 3 (August 2025): Creative testing framework live, audience optimization
      { month: "Aug 2025", spend: 18947, sessions: 6123, leads: 612, cpl: 30.96, qualified: 167, cpql: 113.49, deals: 34, revenue: 67892, roas: 3.58 },
      // Month 4 (September 2025): AI-driven optimization kicking in, back-to-school seasonal uptick
      { month: "Sep 2025", spend: 19382, sessions: 6391, leads: 641, cpl: 30.23, qualified: 179, cpql: 108.28, deals: 37, revenue: 74263, roas: 3.83 },
      // Month 5 (October 2025): Advanced personalization, seasonal wellness content
      { month: "Oct 2025", spend: 19756, sessions: 6731, leads: 673, cpl: 29.35, qualified: 194, cpql: 101.83, deals: 41, revenue: 81647, roas: 4.13 },
      // Month 6 (November 2025): Holiday stress reduction campaigns, peak performance
      { month: "Nov 2025", spend: 20194, sessions: 7089, leads: 709, cpl: 28.48, qualified: 213, cpql: 94.83, deals: 46, revenue: 93782, roas: 4.64 },
      // Month 7 (December 2025): Holiday season, year-end wellness goals
      { month: "Dec 2025", spend: 20847, sessions: 7417, leads: 741, cpl: 28.14, qualified: 227, cpql: 91.83, deals: 49, revenue: 102194, roas: 4.90 },
      // Month 8 (January 2026): New Year resolution surge, optimal performance
      { month: "Jan 2026", spend: 21293, sessions: 7628, leads: 763, cpl: 27.91, qualified: 239, cpql: 89.09, deals: 52, revenue: 108647, roas: 5.10 },
    ],
  },
  impact: [
    { label: "Total Subscription Revenue", value: "$649.0K", growth: "+187%" },
    { label: "New Paid Subscribers", value: "318", growth: "+164%" },
    { label: "Trial-to-Paid Conversion", value: "6.6%", growth: "+2.1pts" },
    { label: "Blended ROAS", value: "4.15x", growth: "+54%" },
  ],
};