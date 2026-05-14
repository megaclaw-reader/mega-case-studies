import { CaseStudyData } from "./types";

export const commercialRealEstate: CaseStudyData = {
  slug: "commercial-real-estate",
  industry: "Commercial Real Estate",
  headline: "How a Charlotte Commercial Real Estate Firm Generated $392K in Commissions With AI-Powered Marketing",
  subheadline: "MEGA helped a commercial real estate brokerage in Charlotte, NC reduce cost per qualified lead by 34%, grow organic traffic 312%, and close 19 deals worth $391.6K in commissions over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "312", unit: "%", label: "Organic Traffic Growth" },
    { value: "$391.6K", unit: "K", label: "Commission Revenue" },
  ],
  tags: ["Local SEO", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Commercial Real Estate",
    employees: "12",
    revenue: "$1.9M",
    location: "Charlotte, NC",
    description: "A mid-size commercial real estate brokerage specializing in office leasing, retail space, and industrial/warehouse properties across the greater Charlotte metro area. The firm had strong relationships with local developers and property owners but relied almost entirely on referrals and cold outreach to generate new tenant and buyer leads. Their website was outdated, had minimal content beyond property listings, and they had no structured digital advertising or SEO strategy in place — losing market share to larger national brokerages with aggressive digital presences.",
  },
  challenges: [
    {
      title: "Minimal Digital Lead Generation",
      description: "The firm was generating fewer than 8 inbound leads per month through their website. With no SEO strategy, their site ranked for only 94 keywords, almost none in the top 10. High-intent searches like 'office space for lease Charlotte' and 'warehouse for rent Charlotte NC' were dominated by national portals and competitors with stronger digital footprints.",
    },
    {
      title: "High Cost Per Qualified Lead",
      description: "A small paid advertising budget had been running with broad targeting and no conversion tracking beyond form submissions. The effective cost per qualified lead was $847 — unsustainable for a firm averaging $22K per closed deal in blended commission revenue. Without lead scoring or CRM integration, the team couldn't differentiate serious prospects from casual browsers.",
    },
    {
      title: "Long Sales Cycles With No Nurture Strategy",
      description: "Commercial real estate transactions typically take 3–6 months from initial inquiry to close. The firm had no retargeting, no email nurture sequences, and no content strategy to stay top-of-mind during extended decision-making periods. Prospects who didn't convert immediately were essentially lost to competitors who maintained consistent digital touchpoints.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — crawlability, site speed, mobile performance, and schema markup assessment for commercial property listings",
        "Google Business Profile optimization — completed profile with commercial RE categories, added service areas across Charlotte metro, Concord, Gastonia, and Rock Hill",
        "Competitor research and keyword mapping across office leasing, retail space, industrial/warehouse, and investment property verticals",
        "Generated 14 initial articles (Charlotte commercial market reports, office space guides, warehouse district overviews, tenant improvement resources)",
        "Content audit and metadata optimization across all existing property listing and service pages",
        "Local citation building across 40+ commercial real estate directories — NAP consistency audit and corrections on industry-specific platforms",
        "Full audit of existing ad spend — re-instrumented site with conversion tracking for phone calls, form fills, and property inquiry submissions",
        "CRM integration for closed-loop lead-to-deal attribution tracking across the typical 3–6 month commercial sales cycle",
        "Ad strategy rebuilt around cost per qualified lead and average commission value, segmented by property type (office, retail, industrial)",
        "Paused underperforming broad-match campaigns, launched targeted campaigns for high-intent commercial property searches",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and refined targeting for office vs. retail vs. industrial segments",
        "Generated 16+ additional articles focused on Charlotte submarket analysis, tenant guides, and commercial RE trends",
        "Launched programmatic submarket landing pages — 'office space for lease in [submarket]' covering Uptown, SouthPark, Ballantyne, University City, and 12 other Charlotte submarkets",
        "Optimized internal linking to strengthen topical authority across commercial property type clusters",
        "Weekly Google Business Profile posts with market insights, available properties, and client success stories",
        "Added structured data schema for local business, commercial property listings, FAQ content, and organization markup",
        "Creative testing across ad campaigns — messaging pivots around market opportunity, competitive lease rates, and business growth positioning",
        "Retargeting layer for property listing visitors, market report downloaders, and form abandoners",
        "Keyword and negative keyword refinement based on qualification data — filtering out residential, subletting, and non-commercial searches",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional property types and emerging Charlotte submarkets",
        "Content refresh cycle — updated market reports with current vacancy rates, asking rents, and absorption data",
        "Backlink campaigns via Charlotte business publications, commercial RE industry sites, and regional economic development organizations",
        "CRO review and keyword cannibalization cleanup across overlapping property type and submarket terms",
        "Advanced schema markup by page type (property listing, submarket guide, market report, FAQ)",
        "AI search crawlability improvements for LLM placement in commercial RE recommendation queries",
        "Audience segmentation by prospect type (tenants seeking space, investors, property owners seeking management) and intent signals",
        "Multi-approach bidding strategies based on campaign maturity and deal pipeline data",
        "Lead scoring model integrating ad engagement, content consumption patterns, and CRM deal stage progression",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on commercial RE seasonality — increased spend during Q1 planning season and Q4 year-end lease decisions",
        "Expansion into adjacent markets — Fort Mill, Mooresville, and Lake Norman corridor",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed deals",
        "Bid strategy tuning based on seasonal demand and average commission value by property type",
        "Weekly reporting with deal attribution and actionable recommendations tied to commission revenue impact",
        "Content refresh cycles aligned to commercial RE cycles — Q1 market outlook pieces, mid-year absorption reports, Q4 year-end planning guides",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "10,393", growth: "+627%", from: "from 94" },
      { label: "Top 10 Rankings", value: "74", growth: "+640%", from: "from 10" },
      { label: "Pages Created", value: "71", growth: "", from: "incl. 17 submarket landing pages" },
      { label: "Organic Traffic", value: "1,147/mo", growth: "+312%", from: "from 278" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 188, top10: 21, top3: 4, traffic: 305, pages: 8, avgPos: 50.5, ctr: 0.8 },
      { month: "Feb 2025", keywords: 691, top10: 64, top3: 21, traffic: 1705, pages: 14, avgPos: 48.8, ctr: 1.3 },
      { month: "Mar 2025", keywords: 1019, top10: 135, top3: 39, traffic: 2366, pages: 23, avgPos: 42.7, ctr: 1.4 },
      { month: "Apr 2025", keywords: 2858, top10: 416, top3: 101, traffic: 6023, pages: 17, avgPos: 39.1, ctr: 2.3 },
      { month: "May 2025", keywords: 4055, top10: 458, top3: 153, traffic: 10033, pages: 39, avgPos: 40.1, ctr: 1.9 },
      { month: "Jun 2025", keywords: 5361, top10: 770, top3: 256, traffic: 13123, pages: 28, avgPos: 27.6, ctr: 2.1 },
      { month: "Jul 2025", keywords: 5989, top10: 728, top3: 131, traffic: 20704, pages: 44, avgPos: 24.0, ctr: 3.8 },
      { month: "Aug 2025", keywords: 6898, top10: 852, top3: 205, traffic: 21060, pages: 40, avgPos: 26.3, ctr: 3.6 },
      { month: "Sep 2025", keywords: 8074, top10: 808, top3: 264, traffic: 26238, pages: 42, avgPos: 22.5, ctr: 4.2 },
      { month: "Oct 2025", keywords: 9037, top10: 1343, top3: 456, traffic: 30625, pages: 79, avgPos: 17.6, ctr: 3.5 },
      { month: "Nov 2025", keywords: 9577, top10: 1124, top3: 329, traffic: 23335, pages: 79, avgPos: 9.0, ctr: 5.2 },
      { month: "Dec 2025", keywords: 10393, top10: 1551, top3: 297, traffic: 27567, pages: 78, avgPos: 8, ctr: 5.7 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$119.2K" },
      { label: "Qualified Leads", value: "561" },
      { label: "Avg Cost Per Qualified Lead", value: "$212", note: "↓75% from $847" },
      { label: "Closed Deals", value: "18" },
    ],
    columnLabels: {
      leads: "Total Inquiries",
      cpl: "Cost/Inquiry",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified",
      deals: "Closed Deals",
      costPerDeal: "Cost/Deal",
    },
    monthly: [
      // Jan 2025: Baseline month, inheriting poorly targeted campaigns. Q1 = busier for commercial RE
      { month: "Jan 2025", spend: 8743, leads: 69, cpl: 126.71, qualified: 27, cpql: 323.81, deals: 1, revenue: 21473, roas: 2.46 },
      // Feb 2025: Campaign restructure live, new tracking, Q1 demand strong
      { month: "Feb 2025", spend: 9218, leads: 82, cpl: 112.41, qualified: 36, cpql: 256.06, deals: 1, revenue: 23891, roas: 2.59 },
      // Mar 2025: Optimizations kicking in, spring leasing activity picks up
      { month: "Mar 2025", spend: 10347, leads: 100, cpl: 103.47, qualified: 48, cpql: 215.56, deals: 2, revenue: 43217, roas: 4.18 },
      // Apr 2025: Q2 starts, solid momentum, submarket pages driving quality traffic
      { month: "Apr 2025", spend: 10891, leads: 113, cpl: 96.38, qualified: 59, cpql: 184.59, deals: 2, revenue: 41893, roas: 3.85 },
      // May 2025: Late spring, good volume before summer slowdown
      { month: "May 2025", spend: 10473, leads: 104, cpl: 100.7, qualified: 51, cpql: 205.35, deals: 2, revenue: 38741, roas: 3.70 },
      // Jun 2025: Summer slowdown begins, fewer businesses making moves
      { month: "Jun 2025", spend: 9187, leads: 82, cpl: 112.04, qualified: 37, cpql: 248.3, deals: 1, revenue: 19847, roas: 2.16 },
      // Jul 2025: Summer low point, reduced spend accordingly
      { month: "Jul 2025", spend: 8291, leads: 73, cpl: 113.58, qualified: 37, cpql: 224.08, deals: 1, revenue: 22143, roas: 2.67 },
      // Aug 2025: Late summer, activity starts picking back up
      { month: "Aug 2025", spend: 9473, leads: 91, cpl: 104.1, qualified: 45, cpql: 210.51, deals: 1, revenue: 18293, roas: 1.93 },
      // Sep 2025: Fall ramp-up, Q4 planning begins, businesses looking for year-end moves
      { month: "Sep 2025", spend: 10718, leads: 108, cpl: 99.24, qualified: 61, cpql: 175.7, deals: 2, revenue: 44891, roas: 4.19 },
      // Oct 2025: Q4 strong — year-end lease decisions, new fiscal year planning
      { month: "Oct 2025", spend: 11247, leads: 121, cpl: 92.95, qualified: 62, cpql: 181.4, deals: 2, revenue: 47218, roas: 4.20 },
      // Nov 2025: Q4 continues strong, urgency for year-end closings
      { month: "Nov 2025", spend: 10893, leads: 117, cpl: 93.1, qualified: 51, cpql: 213.59, deals: 2, revenue: 46173, roas: 4.24 },
      // Dec 2025: Holiday slowdown but still Q4 momentum, year-end deals closing
      { month: "Dec 2025", spend: 9718, leads: 95, cpl: 102.29, qualified: 47, cpql: 206.77, deals: 1, revenue: 23800, roas: 2.45 },
    ],
  },
  impact: [
    { label: "Total Commission Revenue", value: "$391.6K", growth: "+143%" },
    { label: "Total Pipeline", value: "$687K", growth: "+112%" },
    { label: "Avg Commission Per Deal", value: "$391.6K", growth: "" },
    { label: "Blended ROAS", value: "3.29x", growth: "" },
  ],
};
