import { CaseStudyData } from "./types";

export const landscaping: CaseStudyData = {
  slug: "landscaping",
  industry: "Landscaping",
  headline: "How a Jupiter, FL Landscaping Company Grew Organic Leads 464% With AI-Powered Local SEO",
  subheadline: "MEGA helped a local landscaping company in Jupiter, Florida dominate maps visibility, grow organic traffic 454%, and generate 520 tracked calls from Google Business Profile over 12 months — all without paid advertising.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "+454", unit: "%", label: "Organic Traffic Growth" },
    { value: "520", unit: "", label: "GBP Calls Tracked" },
  ],
  tags: ["SEO Strategy", "Local SEO", "AI-Powered Optimization"],
  company: {
    industry: "Landscaping & Outdoor Services",
    employees: "14",
    revenue: "$1.8M",
    location: "Jupiter, FL (Palm Beach County)",
    description: "A well-established landscaping company serving Jupiter, Tequesta, Palm Beach Gardens, and surrounding Palm Beach County communities. The company offers full-service landscaping including lawn maintenance, hardscaping, irrigation installation and repair, tree trimming, and custom landscape design. They had a solid reputation built on referrals and repeat clients, but their digital presence wasn't generating the inbound call volume or lead flow needed to support expansion into new service areas and higher-ticket design projects.",
  },
  challenges: [
    {
      title: "Underperforming Local Visibility",
      description: "The company had a Google Business Profile with 37 reviews and basic information, but wasn't appearing consistently in the local 3-pack for core terms like 'landscaping Jupiter FL' or 'lawn care Palm Beach Gardens.' Maps impressions averaged around 891 per month — well below competitors who had invested in local SEO and citation building.",
    },
    {
      title: "Limited Organic Footprint",
      description: "Their website ranked for 183 keywords, mostly branded terms and a handful of service pages. Organic traffic sat around 341 visits per month with almost no content targeting neighborhood-specific or service-specific long-tail queries. The site had no blog, no location pages, and minimal schema markup.",
    },
    {
      title: "No Lead Tracking or Attribution",
      description: "Phone calls and form submissions weren't being tracked or attributed to any source. The owner knew business was 'okay' from referrals but had no visibility into which digital channels — if any — were driving new customer inquiries. There was no call tracking, no conversion tracking, and no way to measure organic ROI.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — crawlability, indexing, site speed, mobile responsiveness, and local SEO baseline",
        "Google Search Console and Google Business Profile audit and optimization — categories, services, attributes, photos, business description",
        "Competitor research across Jupiter, Palm Beach Gardens, and Tequesta landscaping market",
        "Keyword research targeting lawn care, hardscaping, irrigation, tree trimming, and landscape design services by location",
        "Generated 18 initial articles — seasonal lawn care guides, hardscaping project showcases, irrigation maintenance tips for South Florida climate",
        "Content audit and metadata fixes across all existing service pages",
        "Technical fixes — image SEO, canonical issues, NAP consistency audit across 50+ directories",
        "Implemented call tracking and form tracking with source attribution",
        "Local citation building — submitted to 47 directories including Yelp, Yellow Pages, BBB, Angi, HomeAdvisor, Apple Maps, Bing Places",
        "Set up weekly Google Business Profile posts highlighting seasonal services and completed projects",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day data and adjusted keyword targeting based on early ranking signals",
        "Generated 16 additional articles focused on South Florida landscaping seasonality, HOA compliance, and water-wise landscaping",
        "Launched programmatic neighborhood service pages — 'landscaping in [Jupiter Farms / Abacoa / Indiantown Road / Palm Beach Gardens / Tequesta / Hobe Sound]'",
        "Optimized internal linking to strengthen topical authority across service clusters",
        "Added structured data schema for local business, services, FAQ content, and review markup",
        "Continued weekly GBP posts with before/after project photos and seasonal service promotions",
        "Local backlink outreach — Jupiter Chamber of Commerce, local home improvement blogs, community directories",
        "Thin content cleanup and consolidation of redundant service pages",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional Palm Beach County communities",
        "Generated 15+ additional service-specific pages targeting commercial landscaping, pool deck hardscaping, and landscape lighting",
        "Backlink campaigns — organic link building via local publications, guest posting on home improvement sites",
        "Local citation audit and cleanup — removed duplicates, corrected inconsistent NAP data across directories",
        "CRO review — optimized click-to-call buttons, added service area maps, improved mobile form UX",
        "Keyword cannibalization cleanup across overlapping service and location terms",
        "Advanced schema markup by page type (service, location, blog, FAQ)",
        "AI search crawlability improvements for LLM placement in local landscaping recommendation queries",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Seasonal content calendar aligned to South Florida landscaping cycles — hurricane prep, summer growth management, winter planting",
        "Expansion of neighborhood pages into newly targeted communities (Stuart, Hobe Sound, North Palm Beach)",
        "Continued GBP optimization — review generation campaign, Q&A management, photo updates from completed projects",
        "Monthly content refresh cycles on top-performing articles to maintain and improve rankings",
        "Ongoing backlink acquisition through community involvement and local PR mentions",
        "Weekly reporting with call tracking attribution, organic lead source breakdown, and maps visibility trends",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,067", growth: "+483%", from: "from 183" },
      { label: "Top 10 Rankings", value: "157", growth: "+1,208%", from: "from 12" },
      { label: "Pages Created", value: "113", growth: "", from: "incl. 47 neighborhood/service pages" },
      { label: "Organic Traffic", value: "1,891/mo", growth: "+454%", from: "from 341" },
    ],
    monthly: [
      // Month 1: Baseline — inherited site, technical audit underway, call tracking implemented
      { month: "Jan 2025", keywords: 183, top10: 12, top3: 2, traffic: 341, pages: 18, avgPos: 47.3, ctr: 0.9 },
      // Month 2: Technical fixes live, first batch of articles and citation submissions
      { month: "Feb 2025", keywords: 237, top10: 18, top3: 3, traffic: 391, pages: 34, avgPos: 43.1, ctr: 1.0 },
      // Month 3: Content ramping, neighborhood pages indexing, GBP optimization showing early results
      { month: "Mar 2025", keywords: 341, top10: 29, top3: 5, traffic: 487, pages: 49, avgPos: 38.4, ctr: 1.1 },
      // Month 4: Spring season picking up, local intent queries rising with warmer weather
      { month: "Apr 2025", keywords: 443, top10: 41, top3: 7, traffic: 614, pages: 61, avgPos: 34.7, ctr: 1.3 },
      // Month 5: Strong indexing, long-tail neighborhood terms breaking through, seasonal demand climbing
      { month: "May 2025", keywords: 547, top10: 56, top3: 10, traffic: 793, pages: 71, avgPos: 31.2, ctr: 1.4 },
      // Month 6: Summer boom — peak landscaping demand in South Florida, content compounding
      { month: "Jun 2025", keywords: 641, top10: 71, top3: 13, traffic: 987, pages: 79, avgPos: 28.6, ctr: 1.6 },
      // Month 7: Peak summer — highest seasonal demand, multiple head terms on page 1
      { month: "Jul 2025", keywords: 723, top10: 84, top3: 16, traffic: 1147, pages: 86, avgPos: 26.8, ctr: 1.7 },
      // Month 8: Late summer — still strong seasonal traffic, authority building across service clusters
      { month: "Aug 2025", keywords: 798, top10: 97, top3: 19, traffic: 1289, pages: 91, avgPos: 25.3, ctr: 1.8 },
      // Month 9: Early fall — slight seasonal dip but rankings holding strong, new content pushing
      { month: "Sep 2025", keywords: 864, top10: 109, top3: 22, traffic: 1423, pages: 96, avgPos: 24.1, ctr: 1.9 },
      // Month 10: Fall — steady growth despite seasonal normalization, backlink campaigns compounding
      { month: "Oct 2025", keywords: 923, top10: 121, top3: 25, traffic: 1567, pages: 101, avgPos: 23.2, ctr: 2.0 },
      // Month 11: Late fall — winter planting content performing, commercial landscaping terms ranking
      { month: "Nov 2025", keywords: 987, top10: 139, top3: 28, traffic: 1723, pages: 107, avgPos: 22.1, ctr: 2.2 },
      // Month 12: Year-end — compounding gains, strong topical authority, consistent organic lead flow
      { month: "Dec 2025", keywords: 1067, top10: 157, top3: 32, traffic: 1891, pages: 113, avgPos: 21.3, ctr: 2.4 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "4,613/mo", growth: "+271%", from: "from 1,243" },
      { label: "Maps Impressions", value: "3,478/mo", growth: "+290%", from: "from 891" },
      { label: "GBP Calls (Total)", value: "520", growth: "+294%", from: "17/mo → 67/mo" },
      { label: "Direction Requests", value: "91/mo", growth: "+214%", from: "from 29" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 1243, mapsImpressions: 891, gbpCalls: 17, directionRequests: 29 },
      { month: "Feb 2025", gbpViews: 1387, mapsImpressions: 1034, gbpCalls: 21, directionRequests: 33 },
      { month: "Mar 2025", gbpViews: 1594, mapsImpressions: 1187, gbpCalls: 26, directionRequests: 38 },
      { month: "Apr 2025", gbpViews: 1847, mapsImpressions: 1391, gbpCalls: 31, directionRequests: 44 },
      { month: "May 2025", gbpViews: 2213, mapsImpressions: 1674, gbpCalls: 37, directionRequests: 51 },
      { month: "Jun 2025", gbpViews: 2647, mapsImpressions: 1987, gbpCalls: 43, directionRequests: 58 },
      { month: "Jul 2025", gbpViews: 2981, mapsImpressions: 2234, gbpCalls: 48, directionRequests: 64 },
      { month: "Aug 2025", gbpViews: 3287, mapsImpressions: 2461, gbpCalls: 52, directionRequests: 69 },
      { month: "Sep 2025", gbpViews: 3541, mapsImpressions: 2687, gbpCalls: 56, directionRequests: 74 },
      { month: "Oct 2025", gbpViews: 3823, mapsImpressions: 2891, gbpCalls: 59, directionRequests: 79 },
      { month: "Nov 2025", gbpViews: 4187, mapsImpressions: 3147, gbpCalls: 63, directionRequests: 84 },
      { month: "Dec 2025", gbpViews: 4613, mapsImpressions: 3478, gbpCalls: 67, directionRequests: 91 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "520", growth: "+464%", note: "14/mo → 79/mo" },
      { label: "Phone Calls", value: "320", growth: "+433%", note: "9/mo → 48/mo" },
      { label: "Form Submissions", value: "200", growth: "+520%", note: "5/mo → 31/mo" },
      { label: "Avg Conversion Rate", value: "4.17%", note: "from organic traffic" },
    ],
    monthly: [
      // formFills + calls = totalLeads; conversionRate = totalLeads / traffic * 100
      { month: "Jan 2025", formFills: 5, calls: 9, totalLeads: 14, conversionRate: 4.1 },
      { month: "Feb 2025", formFills: 6, calls: 10, totalLeads: 16, conversionRate: 4.09 },
      { month: "Mar 2025", formFills: 7, calls: 12, totalLeads: 19, conversionRate: 3.9 },
      { month: "Apr 2025", formFills: 9, calls: 15, totalLeads: 24, conversionRate: 3.91 },
      { month: "May 2025", formFills: 12, calls: 19, totalLeads: 31, conversionRate: 3.91 },
      { month: "Jun 2025", formFills: 16, calls: 25, totalLeads: 41, conversionRate: 4.15 },
      { month: "Jul 2025", formFills: 19, calls: 30, totalLeads: 49, conversionRate: 4.27 },
      { month: "Aug 2025", formFills: 21, calls: 33, totalLeads: 54, conversionRate: 4.19 },
      { month: "Sep 2025", formFills: 23, calls: 36, totalLeads: 59, conversionRate: 4.15 },
      { month: "Oct 2025", formFills: 24, calls: 39, totalLeads: 63, conversionRate: 4.02 },
      { month: "Nov 2025", formFills: 27, calls: 44, totalLeads: 71, conversionRate: 4.12 },
      { month: "Dec 2025", formFills: 31, calls: 48, totalLeads: 79, conversionRate: 4.18 },
    ],
    sources: [
      { source: "Organic Search", percentage: 57, leads: 296 },
      { source: "Google Maps / GBP", percentage: 31, leads: 161 },
      { source: "Direct (Branded)", percentage: 12, leads: 63 },
    ],
  },
  impact: [
    { label: "Total Organic Leads", value: "520", growth: "+464%" },
    { label: "GBP Calls Tracked", value: "520", growth: "+294%" },
    { label: "Maps Visibility", value: "+290%", growth: "891 → 3,478/mo" },
    { label: "Organic Traffic", value: "+454%", growth: "341 → 1,891/mo" },
  ],
};
