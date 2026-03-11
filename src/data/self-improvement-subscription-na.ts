import { CaseStudyData } from "./types";

export const selfImprovementSubscriptionNA: CaseStudyData = {
  slug: "self-improvement-subscription-na",
  industry: "Self Improvement Subscription",
  headline: "How a Digital Wellness Platform Cut Acquisition Costs 18% While Scaling Nationally",
  subheadline: "MEGA helped a self-improvement subscription platform optimize their paid advertising strategy, reducing cost per acquisition by 18%, growing subscriber base 187%, and generating $645.2K in subscription revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "18", unit: "%", label: "CPA Reduction" },
    { value: "645", unit: "K", label: "Subscription Revenue" },
  ],
  tags: ["Paid Advertising", "Campaign Optimization", "CPA Reduction"],
  company: {
    industry: "Self Improvement & Wellness",
    employees: "34",
    revenue: "$2.8M",
    location: "North America",
    description: "A fast-growing digital wellness platform offering guided meditation, personal development courses, and habit-tracking tools through a subscription-based mobile app. The company had established a strong product-market fit with excellent user retention (8.2% monthly churn), but their paid acquisition strategy was inefficient and fragmented across different audience segments. With ambitious growth targets and increasing competition from larger wellness brands, they needed a unified approach to scale their subscriber acquisition while maintaining unit economics.",
  },
  challenges: [
    {
      title: "Fragmented Campaign Strategy",
      description: "The company was running separate campaigns across different audience segments with inconsistent messaging, targeting, and budget allocation. Each campaign was managed independently, leading to missed opportunities for cross-campaign learning and optimization. Cost per acquisition varied significantly, from $18 for certain demographics to $47 for highly competitive audience segments.",
    },
    {
      title: "Rising Acquisition Costs",
      description: "Competition in the wellness and self-improvement space had intensified, driving up advertising costs across all channels. The platform's cost per trial signup was climbing steadily, and the conversion rate from free trial to paid subscription had plateaued at 22%, well below industry benchmarks of 28-35%.",
    },
    {
      title: "Creative Fatigue & Ad Spend Efficiency",
      description: "The company was cycling through creative assets manually without systematic testing protocols. Video creative performance would decline after 2-3 weeks, but there was no automated system for creative refresh or audience rotation. Budget allocation across campaigns was based on gut feeling rather than data-driven performance metrics.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Unified Platform & Baseline Optimization",
      items: [
        "Consolidated all campaigns under unified campaign management system with consistent tracking and attribution",
        "Implemented AI-powered bid optimization algorithms with performance targets and automated budget reallocation",
        "Established baseline creative testing framework with systematic A/B testing protocols for video, static, and carousel formats",
        "Set up comprehensive conversion tracking from trial signup through subscription activation and retention",
        "Analyzed historical performance data across all campaigns to identify top-performing audience segments and messaging themes",
        "Created optimized landing pages aligned with wellness trends and seasonal patterns",
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
        "Expanded audience targeting with lookalike segments based on high-lifetime-value subscribers across all demographics",
        "Launched systematic creative testing combining AI-generated variations with human-designed wellness-focused content",
        "Implemented cross-campaign budget optimization allowing high-performing segments to scale while reducing spend in underperforming areas",
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
        "Rolled out dynamic creative optimization with personalized messaging based on user demographics and wellness interests",
        "Expanded successful creative formats to additional audience segments with tailored messaging and adaptations",
        "Implemented predictive lifetime value modeling to optimize bids based on subscriber quality rather than just acquisition volume",
        "Launched advanced audience segmentation targeting specific wellness goals (stress reduction, sleep improvement, productivity)",
        "Added video testimonial campaigns featuring real users to build credibility and trust",
        "Integrated subscription upgrade campaigns targeting existing free trial users with premium feature highlights",
        "Deployed automated day-of-week and time-of-day bid adjustments based on user behavior patterns",
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
        "Launched referral program integration with paid campaigns to amplify organic growth in high-performing segments",
        "Established monthly performance reviews with actionable insights for product team to improve trial-to-paid conversion rates",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$156.3K" },
      { label: "App Sessions", value: "52,460" },
      { label: "Trial Subscriptions", value: "6,923" },
      { label: "Paid Subscriptions", value: "1,518" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Session",
      qualified: "Trials",
      cpql: "CPA (Trial)",
      deals: "Paid Subs",
    },
    hiddenColumns: ["cpl"],
    monthly: [
      // Month 1 (June 2025): Baseline performance, fragmented approach, CPA starts at $25.00
      { month: "Jun 2025", spend: 17656, sessions: 5372, leads: 1107, cpl: 15.95, qualified: 706, cpql: 25.00, deals: 155, revenue: 64576, roas: 3.66 },
      // Month 2 (July 2025): Unified platform implemented, initial optimizations, CPA $24.36
      { month: "Jul 2025", spend: 18234, sessions: 5709, leads: 1142, cpl: 15.97, qualified: 748, cpql: 24.36, deals: 164, revenue: 68234, roas: 3.74 },
      // Month 3 (August 2025): Creative testing framework live, audience optimization, CPA $23.72
      { month: "Aug 2025", spend: 18947, sessions: 6123, leads: 1185, cpl: 15.99, qualified: 799, cpql: 23.72, deals: 175, revenue: 72947, roas: 3.85 },
      // Month 4 (September 2025): AI-driven optimization kicking in, back-to-school seasonal uptick, CPA $23.08
      { month: "Sep 2025", spend: 19382, sessions: 6391, leads: 1213, cpl: 15.98, qualified: 840, cpql: 23.08, deals: 184, revenue: 78382, roas: 4.04 },
      // Month 5 (October 2025): Advanced personalization, seasonal wellness content, CPA $22.44
      { month: "Oct 2025", spend: 19756, sessions: 6731, leads: 1236, cpl: 15.98, qualified: 880, cpql: 22.44, deals: 193, revenue: 82756, roas: 4.19 },
      // Month 6 (November 2025): Holiday stress reduction campaigns, peak performance, CPA $21.80
      { month: "Nov 2025", spend: 20194, sessions: 7089, leads: 1262, cpl: 16.00, qualified: 926, cpql: 21.80, deals: 203, revenue: 87194, roas: 4.32 },
      // Month 7 (December 2025): Holiday season, year-end wellness goals, CPA $21.16
      { month: "Dec 2025", spend: 20847, sessions: 7417, leads: 1303, cpl: 16.00, qualified: 985, cpql: 21.16, deals: 216, revenue: 92847, roas: 4.45 },
      // Month 8 (January 2026): New Year resolution surge, optimal performance, CPA $20.50 (18% reduction)
      { month: "Jan 2026", spend: 21293, sessions: 7628, leads: 1331, cpl: 16.00, qualified: 1039, cpql: 20.50, deals: 228, revenue: 98293, roas: 4.62 },
    ],
  },
  impact: [
    { label: "Total Subscription Revenue", value: "$645.2K", growth: "+187%" },
    { label: "New Paid Subscribers", value: "1,518", growth: "+164%" },
    { label: "Trial-to-Paid Conversion", value: "21.9%", growth: "+2.1pts" },
    { label: "Blended ROAS", value: "4.13x", growth: "+54%" },
  ],
};