import { CaseStudyData } from "./types";

export const cleaningService: CaseStudyData = {
  slug: "cleaning-service",
  industry: "Cleaning Service",
  headline: "How a Columbus Cleaning Company Cut CPQL 38% by Feeding ICP Data From Landing Pages & Phone Calls Back Into Campaign Targeting",
  subheadline: "MEGA helped a residential and commercial cleaning service in Columbus, OH scale ad spend from $5K to $9K/month while reducing cost per qualified lead from $195 to $121 — generating $487K in attributed revenue over 10 months through a continuous ICP feedback loop.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "$487", unit: "K", label: "Revenue Attributed" },
    { value: "38", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO", "ICP Optimization"],
  company: {
    industry: "Cleaning Service — Residential & Commercial",
    employees: "31",
    revenue: "$2.4M",
    location: "Columbus, OH (Greater Franklin County)",
    description: "A growing residential and commercial cleaning company serving the Columbus metro area — including Upper Arlington, Worthington, Dublin, Westerville, New Albany, and German Village. The company offered recurring residential house cleaning, deep cleans, move-in/move-out cleaning, post-construction cleanup, and commercial office and facility cleaning for small-to-mid-size businesses. With a strong reputation built on referrals and a 4.8-star rating across 112 reviews, they had steady demand but were struggling to scale beyond word-of-mouth. Their digital marketing efforts had been inconsistent — sporadic ad campaigns with no clear targeting strategy, a basic website with no location-specific pages, and no system for distinguishing high-value leads from price shoppers. They needed a data-driven approach that could identify their ideal customer profile and systematically lower acquisition costs while growing both residential recurring clients and commercial contracts.",
  },
  challenges: [
    {
      title: "No Visibility Into Lead Quality or Ideal Customer Profile",
      description: "The company was spending on digital ads but had no system for tracking which leads actually converted to paying clients — let alone recurring ones. Phone calls went unrecorded and untagged, form submissions had no qualifying questions, and there was no distinction between a one-time deep clean inquiry and a potential $400/month recurring residential client or a $1,200/month commercial contract. The result was a cost per lead of $52 that looked reasonable on paper but a cost per qualified lead of $195 that made profitable scaling impossible. Without ICP data feeding back into campaign targeting, every month felt like starting from scratch.",
    },
    {
      title: "Broad Targeting Wasting Budget on Low-Intent and Mismatched Leads",
      description: "Paid campaigns were targeting anyone searching cleaning-related terms across the entire Columbus metro without segmentation by service type, property size, neighborhood, or commercial vs. residential intent. This meant budget was being spent equally on price-shopping college students looking for a one-time apartment clean and affluent homeowners in Upper Arlington seeking weekly recurring service. The landing page was a single generic page with no differentiation — the same messaging for a $89 apartment clean and a $1,500/month office contract. Bounce rate sat at 58% and qualified lead rate was under 20%.",
    },
    {
      title: "Minimal Organic Presence in a Competitive Local Market",
      description: "The company's website ranked for just 128 keywords, almost all branded. They were invisible for high-intent searches like 'house cleaning Columbus OH', 'office cleaning near me', 'recurring cleaning service Worthington', and 'commercial cleaning Columbus.' Three competitors dominated the local 3-pack with aggressive review generation and location-specific content strategies. Organic traffic was averaging 264 visits/month, producing almost no leads — a missed opportunity given that organic cleaning service searches have some of the highest local intent in the home services category.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & ICP Data Infrastructure",
      items: [
        "Full site audit — crawlability, indexing, mobile performance, and local SEO baseline across Columbus metro neighborhoods",
        "Business profile optimization — separate service categories for residential and commercial cleaning, updated photos of teams, equipment, and completed projects",
        "Implemented call tracking with recording and AI-powered call analysis — tagging each call by service type (recurring residential, one-time deep clean, move-in/out, commercial), property type, neighborhood, and lead quality score",
        "Redesigned landing pages with qualifying questions — property size, cleaning frequency preference, residential vs. commercial, and zip code — creating an ICP data capture layer on every form submission",
        "Keyword research targeting house cleaning, office cleaning, maid service, deep cleaning, move-out cleaning, janitorial service, and recurring cleaning by Columbus neighborhood",
        "Generated 12 initial articles — cleaning frequency guides, move-out cleaning checklists, commercial cleaning ROI content for office managers",
        "Technical fixes — schema markup for local business, NAP consistency audit across 47 directories, image optimization",
        "Local citation building — submitted to 52 directories including major review platforms, business directories, Apple Maps, and the Columbus Chamber",
        "Competitor analysis of top 5 Columbus cleaning companies — ad messaging, landing page structure, review strategy, and keyword positioning",
        "Launched initial paid campaigns with broad geographic and demographic targeting at $5K/month to establish baseline ICP data — intentionally wide net to gather phone call and landing page behavior data for refinement",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "ICP Pattern Recognition & Campaign Refinement",
      items: [
        "Analyzed 30 days of phone call recordings — identified that 76% of qualified leads mentioned recurring service, 63% were in households with 2,000+ sq ft, and the highest-converting neighborhoods were Upper Arlington, Worthington, Dublin, and New Albany",
        "Landing page data revealed: leads selecting 'weekly' or 'bi-weekly' frequency converted to paying clients at 3.4x the rate of 'one-time' selections — shifted messaging to lead with recurring service value propositions",
        "Commercial lead analysis showed office managers at 15-50 employee companies had the highest close rate — created dedicated commercial landing page targeting this segment",
        "Generated 18 additional articles — neighborhood-specific cleaning guides, seasonal deep clean content for Columbus weather patterns, commercial cleaning compliance content",
        "Launched programmatic neighborhood service pages across 28 Columbus communities — 'house cleaning [Upper Arlington / Dublin / Worthington / German Village / Clintonville / Grandview Heights]'",
        "Restructured paid campaigns based on ICP findings — increased bids on zip codes with highest qualified lead rates, reduced spend on areas producing price-shoppers",
        "Added negative targeting to exclude one-time clean seekers from recurring service campaigns and vice versa",
        "Implemented retargeting sequences segmented by residential vs. commercial page behavior",
        "Weekly business profile posts featuring before/after photos, seasonal cleaning tips, and customer testimonials",
        "Scaled budget from $5K to $5.4K based on early ICP data showing which segments justified additional spend",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "ICP Optimization & Scaling Spend With Confidence",
      items: [
        "Reviewed 60 days of accumulated ICP data — phone call analysis revealed that leads mentioning 'pets' had 43% higher lifetime value (recurring need), added pet-related ad copy and landing page messaging",
        "Identified income-level correlation: neighborhoods with median household income above $87K produced 79% of qualified residential leads — concentrated residential campaign budget accordingly",
        "Commercial ICP refinement: medical offices, law firms, and real estate offices had highest contract values — created industry-specific landing pages and ad copy",
        "With ICP targeting now validated, confidently increased monthly budget to $6.1K — spring cleaning season demand justified the scale",
        "Generated 10 additional service-specific pages — post-construction cleaning, Airbnb turnover cleaning, seasonal deep cleaning packages, green cleaning options",
        "Backlink campaigns — Columbus business publications, local lifestyle blogs, and home services roundup features",
        "CRO optimization — simplified booking flow to 3 steps, added instant quote calculator for residential, added portfolio of commercial client logos",
        "Expanded neighborhood pages into Hilliard, Powell, Grove City, and Reynoldsburg based on emerging demand signals from ICP data",
        "Review generation campaign launched — 38 new reviews added over next 3 months",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Compound Growth & Continuous ICP Feedback Loop at Scale",
      items: [
        "Continued budget scaling from $6.8K through $9K as ICP refinements consistently lowered CPQL — each dollar spent more efficiently than the last",
        "Phone call analysis automated with weekly ICP reports — new patterns fed directly into campaign bid adjustments and ad copy testing",
        "Landing page A/B testing based on ICP segments — different hero images, CTAs, and social proof for affluent residential vs. young professional vs. commercial audiences",
        "Monthly content refresh cycles on top-performing neighborhood and service pages to maintain rankings",
        "Commercial pipeline nurture — email sequences for office managers who submitted quote requests but didn't convert within 7 days",
        "Ongoing backlink acquisition through Columbus community involvement, local charity sponsorships, and home services content partnerships",
        "Weekly full-funnel reporting with attribution from visit → lead → qualified lead → booked client, segmented by residential recurring, residential one-time, and commercial",
        "Continuous ICP feedback loop refinement — each month's phone call and landing page data informing next month's targeting, messaging, and budget allocation, enabling confident spend scaling",
        "By month 10, ICP targeting so refined that CPQL dropped to $121 even as spend reached $9K — proving the feedback loop sustained efficiency at scale",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "923", growth: "+621%", from: "from 128" },
      { label: "Top 10 Rankings", value: "112", growth: "+1020%", from: "from 10" },
      { label: "Pages Created", value: "82", growth: "", from: "incl. 28 neighborhood service pages" },
      { label: "Organic Traffic", value: "1,341/mo", growth: "+408%", from: "from 264" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 128, top10: 10, top3: 1, traffic: 264, pages: 12, avgPos: 49.1, ctr: 0.7 },
      { month: "Feb 2025", keywords: 193, top10: 14, top3: 2, traffic: 321, pages: 30, avgPos: 45.3, ctr: 0.8 },
      { month: "Mar 2025", keywords: 297, top10: 26, top3: 3, traffic: 437, pages: 48, avgPos: 40.1, ctr: 1.0 },
      { month: "Apr 2025", keywords: 402, top10: 39, top3: 6, traffic: 612, pages: 58, avgPos: 36.7, ctr: 1.1 },
      { month: "May 2025", keywords: 498, top10: 51, top3: 8, traffic: 754, pages: 63, avgPos: 33.2, ctr: 1.2 },
      { month: "Jun 2025", keywords: 587, top10: 62, top3: 10, traffic: 867, pages: 68, avgPos: 30.8, ctr: 1.3 },
      { month: "Jul 2025", keywords: 672, top10: 74, top3: 13, traffic: 978, pages: 72, avgPos: 28.7, ctr: 1.4 },
      { month: "Aug 2025", keywords: 756, top10: 86, top3: 16, traffic: 1089, pages: 76, avgPos: 27.1, ctr: 1.5 },
      { month: "Sep 2025", keywords: 841, top10: 99, top3: 19, traffic: 1213, pages: 79, avgPos: 25.6, ctr: 1.6 },
      { month: "Oct 2025", keywords: 923, top10: 112, top3: 22, traffic: 1341, pages: 82, avgPos: 24.3, ctr: 1.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$68.8K" },
      { label: "Qualified Leads", value: "493" },
      { label: "Avg Cost Per Qualified Lead", value: "$140", note: "↓28% from $195" },
      { label: "Closed Clients", value: "151", note: "avg new client value $1,124" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Closed Clients",
    },
    monthly: [
      // Jan 2025: $5K start, broad targeting to gather ICP data, high CPQL
      { month: "Jan 2025", spend: 5000, leads: 96, cpl: 52, qualified: 26, cpql: 192, deals: 8, revenue: 8247, roas: 1.65 },
      // Feb 2025: $5.4K, initial landing page ICP data coming in
      { month: "Feb 2025", spend: 5400, leads: 108, cpl: 50, qualified: 31, cpql: 174, deals: 10, revenue: 11834, roas: 2.19 },
      // Mar 2025: $6.1K, spring cleaning surge + first ICP refinements from phone call analysis
      { month: "Mar 2025", spend: 6100, leads: 137, cpl: 45, qualified: 48, cpql: 127, deals: 16, revenue: 19423, roas: 3.18 },
      // Apr 2025: $6.8K, peak spring + ICP targeting refined to high-income neighborhoods, recurring focus
      { month: "Apr 2025", spend: 6800, leads: 156, cpl: 44, qualified: 58, cpql: 117, deals: 19, revenue: 24567, roas: 3.61 },
      // May 2025: $6.5K, late spring — slight seasonal pullback but ICP loop sustaining quality
      { month: "May 2025", spend: 6500, leads: 141, cpl: 46, qualified: 51, cpql: 127, deals: 16, revenue: 19847, roas: 3.05 },
      // Jun 2025: $7.0K, summer move-in/move-out demand + commercial pipeline
      { month: "Jun 2025", spend: 7000, leads: 148, cpl: 47, qualified: 52, cpql: 135, deals: 16, revenue: 18923, roas: 2.70 },
      // Jul 2025: $7.2K, steady summer, ICP loop fully mature
      { month: "Jul 2025", spend: 7200, leads: 143, cpl: 50, qualified: 48, cpql: 150, deals: 14, revenue: 16234, roas: 2.25 },
      // Aug 2025: $7.6K, late summer — scaling into back-to-school/commercial restart
      { month: "Aug 2025", spend: 7600, leads: 147, cpl: 52, qualified: 46, cpql: 165, deals: 13, revenue: 14847, roas: 1.95 },
      // Sep 2025: $8.2K, offices reopening, commercial pickup + ICP data now deeply refined
      { month: "Sep 2025", spend: 8200, leads: 167, cpl: 49, qualified: 59, cpql: 139, deals: 18, revenue: 21423, roas: 2.61 },
      // Oct 2025: $9.0K, pre-holiday demand + fully optimized ICP — CPQL at lowest despite highest spend
      { month: "Oct 2025", spend: 9000, leads: 187, cpl: 48, qualified: 74, cpql: 122, deals: 21, revenue: 25134, roas: 2.79 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "4,123/mo", growth: "+334%", from: "from 951" },
      { label: "Maps Impressions", value: "3,147/mo", growth: "+301%", from: "from 784" },
      { label: "GBP Calls (Total)", value: "412", growth: "+308%", from: "12/mo → 57/mo" },
      { label: "Direction Requests", value: "72/mo", growth: "+263%", from: "from 20" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 951, mapsImpressions: 784, gbpCalls: 12, directionRequests: 20 },
      { month: "Feb 2025", gbpViews: 1147, mapsImpressions: 923, gbpCalls: 16, directionRequests: 24 },
      { month: "Mar 2025", gbpViews: 1489, mapsImpressions: 1134, gbpCalls: 22, directionRequests: 30 },
      { month: "Apr 2025", gbpViews: 1923, mapsImpressions: 1456, gbpCalls: 29, directionRequests: 37 },
      { month: "May 2025", gbpViews: 2347, mapsImpressions: 1789, gbpCalls: 35, directionRequests: 43 },
      { month: "Jun 2025", gbpViews: 2734, mapsImpressions: 2078, gbpCalls: 41, directionRequests: 49 },
      { month: "Jul 2025", gbpViews: 3089, mapsImpressions: 2367, gbpCalls: 46, directionRequests: 54 },
      { month: "Aug 2025", gbpViews: 3423, mapsImpressions: 2634, gbpCalls: 50, directionRequests: 59 },
      { month: "Sep 2025", gbpViews: 3789, mapsImpressions: 2898, gbpCalls: 54, directionRequests: 65 },
      { month: "Oct 2025", gbpViews: 4123, mapsImpressions: 3147, gbpCalls: 57, directionRequests: 72 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "261", growth: "+414%", note: "6/mo → 43/mo" },
      { label: "Phone Calls", value: "161", growth: "+400%", note: "4/mo → 27/mo" },
      { label: "Form Submissions", value: "100", growth: "+440%", note: "2/mo → 16/mo" },
      { label: "Avg Conversion Rate", value: "3.38%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Form Fills",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 4, totalLeads: 6, conversionRate: 2.27 },
      { month: "Feb 2025", formFills: 3, calls: 6, totalLeads: 9, conversionRate: 2.80 },
      { month: "Mar 2025", formFills: 5, calls: 9, totalLeads: 14, conversionRate: 3.20 },
      { month: "Apr 2025", formFills: 8, calls: 13, totalLeads: 21, conversionRate: 3.43 },
      { month: "May 2025", formFills: 10, calls: 16, totalLeads: 26, conversionRate: 3.45 },
      { month: "Jun 2025", formFills: 11, calls: 18, totalLeads: 29, conversionRate: 3.34 },
      { month: "Jul 2025", formFills: 13, calls: 21, totalLeads: 34, conversionRate: 3.48 },
      { month: "Aug 2025", formFills: 14, calls: 23, totalLeads: 37, conversionRate: 3.40 },
      { month: "Sep 2025", formFills: 15, calls: 25, totalLeads: 40, conversionRate: 3.30 },
      { month: "Oct 2025", formFills: 16, calls: 27, totalLeads: 43, conversionRate: 3.21 },
    ],
    sources: [
      { source: "Organic Search", percentage: 53, leads: 138 },
      { source: "Google Maps / GBP", percentage: 34, leads: 89 },
      { source: "Direct (Branded)", percentage: 13, leads: 34 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$180.5K", growth: "+203%" },
    { label: "Closed Clients", value: "131", growth: "+178%" },
    { label: "Cost Per Qualified Lead", value: "$121", growth: "↓38%" },
    { label: "Blended ROAS", value: "2.62x", growth: "" },
  ],
};
