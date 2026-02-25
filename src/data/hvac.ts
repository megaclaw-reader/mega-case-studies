import { CaseStudyData } from "./types";

export const hvac: CaseStudyData = {
  slug: "hvac",
  industry: "HVAC",
  headline: "How a Dallas HVAC Company Generated 234 Qualified Leads and $187K in Revenue in 6 Months",
  subheadline: "MEGA helped a local HVAC company in Dallas, TX reduce their cost per qualified lead by 37%, grow organic traffic 290%, and build a predictable lead pipeline through SEO and paid advertising.",
  heroStats: [
    { value: "6", unit: "months", label: "Partnership Duration" },
    { value: "290", unit: "%", label: "Organic Traffic Growth" },
    { value: "$187", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Local SEO", "Paid Advertising", "Lead Generation"],
  company: {
    industry: "HVAC",
    employees: "22",
    revenue: "$3.1M",
    location: "Dallas, TX",
    description: "A family-owned HVAC company serving the Dallas–Fort Worth metroplex for over 16 years. They built their reputation on emergency AC repair and full system installations, with strong word-of-mouth referrals. However, their digital presence was outdated — a basic website with no location pages, a Google Business Profile with only 31 reviews, and paid campaigns running without any lead quality tracking. With Texas summers driving urgent AC repair calls and increasing competition from franchise HVAC brands, they needed a modern digital strategy to capture high-intent local demand year-round.",
  },
  challenges: [
    {
      title: "Invisible in Local Search Results",
      description: "The company had only 142 indexed keywords and almost no neighborhood or service-area content targeting specific DFW communities. They weren't appearing in the local map pack for critical searches like 'AC repair near me' or 'emergency HVAC Dallas' — losing the majority of high-intent phone calls to competitors with stronger local SEO foundations.",
    },
    {
      title: "Paid Campaigns Burning Budget Without Tracking",
      description: "Paid advertising was generating phone calls and form fills, but with no lead quality tracking or call recording in place, the team had no idea which leads turned into booked jobs. The estimated cost per qualified lead was around $189, and nearly half of all inquiries were unqualified — wrong service area, DIY questions, or commercial jobs they didn't handle.",
    },
    {
      title: "Extreme Seasonal Swings with No Strategy",
      description: "Like most Texas HVAC companies, demand surged from May through September when AC units fail in 100°+ heat, then dropped sharply in the cooler months. Without a year-round content or advertising plan, the company scrambled each spring to rebuild pipeline momentum — wasting the first weeks of peak season on ramp-up instead of revenue.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and mobile performance review for local service searches",
        "Google Search Console and Google Business Profile optimization — completed profile, added all DFW service areas, launched review generation campaign targeting recent customers",
        "Competitor research and keyword mapping across AC repair, furnace repair, HVAC installation, emergency service, and seasonal maintenance verticals",
        "Generated 15 initial articles (AC maintenance guides, emergency repair checklists, Texas heat survival tips, HVAC buying guides, seasonal tune-up content)",
        "Content audit and metadata fixes across all existing service pages, including image SEO and E-E-A-T signals for licensed contractor authority",
        "Local citation building across 45+ directories — NAP consistency audit and corrections across major platforms and HVAC-specific listings",
        "Full audit of past ad performance — installed call tracking, implemented conversion tracking across phone calls and form submissions",
        "CRM integration for closed-loop lead-to-job attribution with same-day and next-day booking tracking",
        "Rebuilt ad strategy around cost per qualified lead and average job value — separated emergency repair from installation campaigns",
        "Paused low-intent keywords, launched landing page A/B tests for emergency AC repair vs. scheduled maintenance vs. new installation",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and refined targeting for emergency repair vs. installation vs. maintenance segments",
        "Generated 22+ additional articles focused on neighborhood-specific HVAC topics and seasonal content",
        "Launched programmatic service-area landing pages ('AC repair in [neighborhood], Dallas' — covering 38 neighborhoods across DFW)",
        "Optimized internal linking to strengthen topical authority across HVAC service clusters",
        "Weekly Google Business Profile posts with seasonal HVAC tips, job photos, and review highlights",
        "Added structured data schema for local business, service pages, FAQ content, and review markup",
        "Rapid ad creative testing — messaging pivots around emergency urgency vs. seasonal tune-up savings vs. financing options for installations",
        "Retargeting layer for estimate request page visitors and phone call non-converters",
        "Negative keyword refinement based on call recording data — filtering out DIY searches, commercial HVAC, and non-service-area clicks",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional service-specific and seasonal terms",
        "Continued content production — added AC installation comparison guides, energy efficiency content, and emergency repair FAQs",
        "Local citation building and backlink campaigns via home improvement publications and DFW community blogs",
        "CRO review and keyword cannibalization cleanup across overlapping service and location terms",
        "Advanced schema markup by page type (service, neighborhood, blog, FAQ, review)",
        "AI search crawlability improvements for LLM placement in local HVAC recommendation queries",
        "Complex audience segmentations by service type (repair vs. install), neighborhood, and urgency signals",
        "Multi-approach bidding strategies optimized for peak summer demand and emergency intent",
        "Fully robust lead scoring integrating call duration, time-of-day patterns, and CRM job stage progression",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "698", growth: "+391%", from: "from 142" },
      { label: "Top 10 Rankings", value: "74", growth: "+640%", from: "from 10" },
      { label: "Pages Created", value: "71", growth: "", from: "incl. 38 service-area landing pages" },
      { label: "Organic Traffic", value: "1,217/mo", growth: "+290%", from: "from 312" },
    ],
    monthly: [
      { month: "Apr 2025", keywords: 142, top10: 10, top3: 2, traffic: 312, pages: 7, avgPos: 48.7, ctr: 0.7 },
      { month: "May 2025", keywords: 218, top10: 19, top3: 3, traffic: 487, pages: 22, avgPos: 43.2, ctr: 0.9 },
      { month: "Jun 2025", keywords: 341, top10: 31, top3: 6, traffic: 723, pages: 39, avgPos: 37.4, ctr: 1.1 },
      { month: "Jul 2025", keywords: 478, top10: 47, top3: 9, traffic: 1043, pages: 52, avgPos: 32.1, ctr: 1.4 },
      { month: "Aug 2025", keywords: 587, top10: 61, top3: 13, traffic: 1189, pages: 62, avgPos: 28.7, ctr: 1.5 },
      { month: "Sep 2025", keywords: 698, top10: 74, top3: 16, traffic: 1217, pages: 71, avgPos: 26.3, ctr: 1.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$31.2K" },
      { label: "Qualified Leads", value: "234" },
      { label: "Avg Cost Per Qualified Lead", value: "$119", note: "↓37% from $189" },
      { label: "Closed Jobs", value: "89" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Booked Jobs",
    },
    monthly: [
      // Apr: Foundation month, audit & restructure, spring shoulder season
      { month: "Apr 2025", spend: 3800, leads: 38, cpl: 100, qualified: 21, cpql: 181, deals: 8, revenue: 9200, roas: 2.42 },
      // May: Campaigns optimized, summer starting, AC demand rising fast
      { month: "May 2025", spend: 4700, leads: 56, cpl: 84, qualified: 34, cpql: 138, deals: 13, revenue: 18700, roas: 3.98 },
      // Jun: Peak summer — AC units dying in 105° heat, emergency calls flooding in
      { month: "Jun 2025", spend: 6800, leads: 89, cpl: 76, qualified: 58, cpql: 117, deals: 22, revenue: 37400, roas: 5.50 },
      // Jul: Sustained peak — highest volume month, strong conversion
      { month: "Jul 2025", spend: 7000, leads: 94, cpl: 74, qualified: 61, cpql: 115, deals: 24, revenue: 42100, roas: 6.01 },
      // Aug: Late summer — still hot, demand slightly tapering but strong
      { month: "Aug 2025", spend: 5400, leads: 72, cpl: 75, qualified: 42, cpql: 129, deals: 15, revenue: 48600, roas: 9.00 },
      // Sep: Fall transition — maintenance season, installs before winter
      { month: "Sep 2025", spend: 3500, leads: 41, cpl: 85, qualified: 18, cpql: 194, deals: 7, revenue: 31200, roas: 8.91 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "127", growth: "+215%", note: "from ~40 in prior 6 months" },
      { label: "Phone Calls from Organic", value: "89", growth: "+243%" },
      { label: "Form Fills from Organic", value: "38", growth: "+172%" },
      { label: "Organic Conversion Rate", value: "4.1%", growth: "+52%" },
    ],
    columnLabels: {
      calls: "Phone Calls",
      formFills: "Form Fills",
      totalLeads: "Total Leads",
      conversionRate: "Conversion Rate",
    },
    monthly: [
      { month: "Apr 2025", formFills: 3, calls: 6, totalLeads: 9, conversionRate: 2.7 },
      { month: "May 2025", formFills: 5, calls: 11, totalLeads: 16, conversionRate: 3.3 },
      { month: "Jun 2025", formFills: 7, calls: 17, totalLeads: 24, conversionRate: 3.8 },
      { month: "Jul 2025", formFills: 9, calls: 23, totalLeads: 32, conversionRate: 4.2 },
      { month: "Aug 2025", formFills: 8, calls: 19, totalLeads: 27, conversionRate: 4.4 },
      { month: "Sep 2025", formFills: 6, calls: 13, totalLeads: 19, conversionRate: 4.1 },
    ],
    sources: [
      { source: "Google Organic", percentage: 62, leads: 79 },
      { source: "Google Maps / Local Pack", percentage: 24, leads: 30 },
      { source: "Direct (branded search)", percentage: 9, leads: 11 },
      { source: "Bing / Other", percentage: 5, leads: 7 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Profile Views", value: "4,870/mo", growth: "+312%", from: "from 1,182" },
      { label: "Maps Impressions", value: "9,340/mo", growth: "+278%", from: "from 2,471" },
      { label: "GBP Phone Calls", value: "187/mo", growth: "+345%", from: "from 42" },
      { label: "Direction Requests", value: "94/mo", growth: "+261%", from: "from 26" },
    ],
    monthly: [
      { month: "Apr 2025", gbpViews: 1182, mapsImpressions: 2471, gbpCalls: 42, directionRequests: 26 },
      { month: "May 2025", gbpViews: 1847, mapsImpressions: 3892, gbpCalls: 71, directionRequests: 41 },
      { month: "Jun 2025", gbpViews: 3124, mapsImpressions: 6213, gbpCalls: 118, directionRequests: 63 },
      { month: "Jul 2025", gbpViews: 4291, mapsImpressions: 8471, gbpCalls: 167, directionRequests: 84 },
      { month: "Aug 2025", gbpViews: 4613, mapsImpressions: 8917, gbpCalls: 174, directionRequests: 89 },
      { month: "Sep 2025", gbpViews: 4870, mapsImpressions: 9340, gbpCalls: 187, directionRequests: 94 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$187.2K", growth: "+143%" },
    { label: "Total Qualified Leads", value: "234", growth: "+37% lower CPL" },
    { label: "Avg Revenue Per Job", value: "$2,103", growth: "" },
    { label: "Blended ROAS", value: "6.00x", growth: "" },
  ],
};
