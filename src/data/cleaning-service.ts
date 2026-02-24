import { CaseStudyData } from "./types";

export const cleaningService: CaseStudyData = {
  slug: "cleaning-service",
  industry: "Cleaning Service",
  headline: "How a Columbus Cleaning Company Cut CPQL 37% Using ICP Data From Landing Pages & Phone Call Analysis",
  subheadline: "MEGA helped a residential and commercial cleaning service in Columbus, OH generate $412K in attributed revenue, reduce cost per qualified lead from $189 to $119, and grow organic traffic 341% over 10 months — all by feeding ICP insights back into campaign targeting.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "$412", unit: "K", label: "Revenue Attributed" },
    { value: "37", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO", "ICP Optimization"],
  company: {
    industry: "Cleaning Service — Residential & Commercial",
    employees: "27",
    revenue: "$2.1M",
    location: "Columbus, OH (Greater Franklin County)",
    description: "A growing residential and commercial cleaning company serving the Columbus metro area — including Upper Arlington, Worthington, Dublin, Westerville, New Albany, and German Village. The company offered recurring residential house cleaning, deep cleans, move-in/move-out cleaning, post-construction cleanup, and commercial office and facility cleaning for small-to-mid-size businesses. With a strong reputation built on referrals and a 4.7-star rating across 89 reviews, they had steady demand but were struggling to scale beyond word-of-mouth. Their digital marketing efforts had been inconsistent — sporadic ad campaigns with no clear targeting strategy, a basic website with no location-specific pages, and no system for distinguishing high-value leads from price shoppers. They needed a data-driven approach that could identify their ideal customer profile and systematically lower acquisition costs while growing both residential recurring clients and commercial contracts.",
  },
  challenges: [
    {
      title: "No Visibility Into Lead Quality or Ideal Customer Profile",
      description: "The company was spending on digital ads but had no system for tracking which leads actually converted to paying clients — let alone recurring ones. Phone calls went unrecorded and untagged, form submissions had no qualifying questions, and there was no distinction between a one-time deep clean inquiry and a potential $400/month recurring residential client or a $1,200/month commercial contract. The result was a cost per lead of $47 that looked reasonable on paper but a cost per qualified lead of $189 that made profitable scaling impossible. Without ICP data feeding back into campaign targeting, every month felt like starting from scratch.",
    },
    {
      title: "Broad Targeting Wasting Budget on Low-Intent and Mismatched Leads",
      description: "Paid campaigns were targeting anyone searching cleaning-related terms across the entire Columbus metro without segmentation by service type, property size, neighborhood, or commercial vs. residential intent. This meant budget was being spent equally on price-shopping college students looking for a one-time apartment clean and affluent homeowners in Upper Arlington seeking weekly recurring service. The landing page was a single generic page with no differentiation — the same messaging for a $89 apartment clean and a $1,500/month office contract. Bounce rate sat at 54% and qualified lead rate was under 22%.",
    },
    {
      title: "Minimal Organic Presence in a Competitive Local Market",
      description: "The company's website ranked for just 134 keywords, almost all branded. They were invisible for high-intent searches like 'house cleaning Columbus OH', 'office cleaning near me', 'recurring cleaning service Worthington', and 'commercial cleaning Columbus.' Three competitors dominated the local 3-pack with aggressive review generation and location-specific content strategies. Organic traffic was averaging 287 visits/month, producing almost no leads — a missed opportunity given that organic cleaning service searches have some of the highest local intent in the home services category.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & ICP Data Infrastructure",
      items: [
        "Full site audit — crawlability, indexing, mobile performance, and local SEO baseline across Columbus metro neighborhoods",
        "Google Business Profile optimization — separate service categories for residential and commercial cleaning, updated photos of teams, equipment, and completed projects",
        "Implemented call tracking with recording and AI-powered call analysis — tagging each call by service type (recurring residential, one-time deep clean, move-in/out, commercial), property type, neighborhood, and lead quality score",
        "Redesigned landing pages with qualifying questions — property size, cleaning frequency preference, residential vs. commercial, and zip code — creating an ICP data capture layer on every form submission",
        "Keyword research targeting house cleaning, office cleaning, maid service, deep cleaning, move-out cleaning, janitorial service, and recurring cleaning by Columbus neighborhood",
        "Generated 11 initial articles — cleaning frequency guides, move-out cleaning checklists, commercial cleaning ROI content for office managers",
        "Technical fixes — schema markup for local business, NAP consistency audit across 45+ directories, image optimization",
        "Local citation building — submitted to 48 directories including Yelp, BBB, Angi, Thumbtack, HomeAdvisor, Apple Maps, Columbus Chamber",
        "Competitor analysis of top 5 Columbus cleaning companies — ad messaging, landing page structure, review strategy, and keyword positioning",
        "Launched initial paid campaigns with broad geographic and demographic targeting to establish baseline ICP data — intentionally wide net to gather phone call and landing page behavior data for refinement",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "ICP Pattern Recognition & Campaign Refinement",
      items: [
        "Analyzed 30 days of phone call recordings — identified that 73% of qualified leads mentioned recurring service, 61% were in households with 2,000+ sq ft, and the highest-converting neighborhoods were Upper Arlington, Worthington, Dublin, and New Albany",
        "Landing page data revealed: leads selecting 'weekly' or 'bi-weekly' frequency converted to paying clients at 3.2x the rate of 'one-time' selections — shifted messaging to lead with recurring service value propositions",
        "Commercial lead analysis showed office managers at 15-50 employee companies had the highest close rate — created dedicated commercial landing page targeting this segment",
        "Generated 16 additional articles — neighborhood-specific cleaning guides, seasonal deep clean content for Columbus weather patterns, commercial cleaning compliance content",
        "Launched programmatic neighborhood service pages across 28 Columbus communities — 'house cleaning [Upper Arlington / Dublin / Worthington / German Village / Clintonville / Grandview Heights]'",
        "Restructured paid campaigns based on ICP findings — increased bids on zip codes with highest qualified lead rates, reduced spend on areas producing price-shoppers",
        "Added negative targeting to exclude one-time clean seekers from recurring service campaigns and vice versa",
        "Implemented retargeting sequences segmented by residential vs. commercial page behavior",
        "Weekly GBP posts featuring before/after photos, seasonal cleaning tips, and customer testimonials",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "ICP Optimization & Scale",
      items: [
        "Reviewed 60 days of accumulated ICP data — phone call analysis revealed that leads mentioning 'pets' had 41% higher lifetime value (recurring need), added pet-related ad copy and landing page messaging",
        "Identified income-level correlation: neighborhoods with median household income above $87K produced 78% of qualified residential leads — concentrated residential campaign budget accordingly",
        "Commercial ICP refinement: medical offices, law firms, and real estate offices had highest contract values — created industry-specific landing pages and ad copy",
        "Generated 10 additional service-specific pages — post-construction cleaning, Airbnb turnover cleaning, seasonal deep cleaning packages, green cleaning options",
        "Backlink campaigns — Columbus business publications, local lifestyle blogs, and home services roundup features",
        "CRO optimization — simplified booking flow to 3 steps, added instant quote calculator for residential, added portfolio of commercial client logos",
        "Expanded neighborhood pages into Hilliard, Powell, Grove City, and Reynoldsburg based on emerging demand signals",
        "Review generation campaign launched — 34 new reviews added over next 3 months",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Compound Growth & Continuous ICP Feedback",
      items: [
        "Seasonal budget optimization — increased spend during spring cleaning surge (Mar-May) and pre-holiday deep clean demand (Nov-Dec), reduced during summer slowdown",
        "Phone call analysis automated with weekly ICP reports — new patterns fed directly into campaign bid adjustments and ad copy testing",
        "Landing page A/B testing based on ICP segments — different hero images, CTAs, and social proof for affluent residential vs. young professional vs. commercial audiences",
        "Monthly content refresh cycles on top-performing neighborhood and service pages to maintain rankings",
        "Commercial pipeline nurture — email sequences for office managers who submitted quote requests but didn't convert within 7 days",
        "Ongoing backlink acquisition through Columbus community involvement, local charity sponsorships, and home services content partnerships",
        "Weekly full-funnel reporting with attribution from click → lead → qualified lead → booked client, segmented by residential recurring, residential one-time, and commercial",
        "Continuous ICP feedback loop refinement — each month's phone call and landing page data informing next month's targeting, messaging, and budget allocation",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "891", growth: "+565%", from: "from 134" },
      { label: "Top 10 Rankings", value: "107", growth: "+970%", from: "from 10" },
      { label: "Pages Created", value: "79", growth: "", from: "incl. 28 neighborhood service pages" },
      { label: "Organic Traffic", value: "1,266/mo", growth: "+341%", from: "from 287" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 134, top10: 10, top3: 1, traffic: 287, pages: 11, avgPos: 48.2, ctr: 0.8 },
      { month: "Feb 2025", keywords: 198, top10: 15, top3: 2, traffic: 347, pages: 27, avgPos: 44.1, ctr: 0.9 },
      { month: "Mar 2025", keywords: 289, top10: 24, top3: 3, traffic: 451, pages: 43, avgPos: 39.7, ctr: 1.0 },
      { month: "Apr 2025", keywords: 387, top10: 36, top3: 5, traffic: 589, pages: 53, avgPos: 36.3, ctr: 1.1 },
      { month: "May 2025", keywords: 478, top10: 47, top3: 7, traffic: 723, pages: 60, avgPos: 33.4, ctr: 1.2 },
      { month: "Jun 2025", keywords: 561, top10: 58, top3: 9, traffic: 834, pages: 65, avgPos: 31.1, ctr: 1.3 },
      { month: "Jul 2025", keywords: 643, top10: 69, top3: 12, traffic: 941, pages: 70, avgPos: 29.2, ctr: 1.4 },
      { month: "Aug 2025", keywords: 724, top10: 81, top3: 15, traffic: 1047, pages: 74, avgPos: 27.6, ctr: 1.5 },
      { month: "Sep 2025", keywords: 809, top10: 93, top3: 18, traffic: 1154, pages: 77, avgPos: 26.1, ctr: 1.6 },
      { month: "Oct 2025", keywords: 891, top10: 107, top3: 21, traffic: 1266, pages: 79, avgPos: 24.8, ctr: 1.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$49.3K" },
      { label: "Qualified Leads", value: "387" },
      { label: "Avg Cost Per Qualified Lead", value: "$127", note: "↓33% from $189" },
      { label: "Closed Clients", value: "118", note: "avg new client value $1,047" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Closed Clients",
    },
    monthly: [
      // Jan 2025: Winter slow, broad targeting to gather ICP data, higher CPQL expected
      { month: "Jan 2025", spend: 3847, leads: 67, cpl: 57, qualified: 19, cpql: 203, deals: 6, revenue: 5834, roas: 1.52 },
      // Feb 2025: Still gathering data, slight improvements from initial landing page changes
      { month: "Feb 2025", spend: 4123, leads: 78, cpl: 53, qualified: 23, cpql: 179, deals: 7, revenue: 8247, roas: 2.00 },
      // Mar 2025: Spring cleaning surge + first ICP refinements from phone call analysis kicking in
      { month: "Mar 2025", spend: 5634, leads: 113, cpl: 50, qualified: 42, cpql: 134, deals: 14, revenue: 16423, roas: 2.92 },
      // Apr 2025: Peak spring, ICP targeting refined — high-income neighborhoods, recurring focus
      { month: "Apr 2025", spend: 6247, leads: 134, cpl: 47, qualified: 54, cpql: 116, deals: 18, revenue: 21834, roas: 3.49 },
      // May 2025: Sustained spring, commercial campaigns hitting stride with refined ICP
      { month: "May 2025", spend: 5987, leads: 121, cpl: 49, qualified: 49, cpql: 122, deals: 16, revenue: 18947, roas: 3.16 },
      // Jun 2025: Move-in/move-out summer surge begins
      { month: "Jun 2025", spend: 5478, leads: 108, cpl: 51, qualified: 43, cpql: 127, deals: 14, revenue: 15623, roas: 2.85 },
      // Jul 2025: Summer — steady, ICP loop fully mature, targeting very precise
      { month: "Jul 2025", spend: 4834, leads: 94, cpl: 51, qualified: 37, cpql: 131, deals: 11, revenue: 12478, roas: 2.58 },
      // Aug 2025: Late summer slowdown
      { month: "Aug 2025", spend: 4267, leads: 82, cpl: 52, qualified: 31, cpql: 138, deals: 9, revenue: 9847, roas: 2.31 },
      // Sep 2025: Back to school, offices reopening — commercial pickup
      { month: "Sep 2025", spend: 4623, leads: 93, cpl: 50, qualified: 39, cpql: 119, deals: 12, revenue: 14234, roas: 3.08 },
      // Oct 2025: Pre-holiday prep demand + fully optimized ICP targeting
      { month: "Oct 2025", spend: 4247, leads: 89, cpl: 48, qualified: 50, cpql: 85, deals: 11, revenue: 13547, roas: 3.19 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "3,847/mo", growth: "+312%", from: "from 934" },
      { label: "Maps Impressions", value: "2,934/mo", growth: "+287%", from: "from 758" },
      { label: "GBP Calls (Total)", value: "389", growth: "+298%", from: "13/mo → 54/mo" },
      { label: "Direction Requests", value: "67/mo", growth: "+253%", from: "from 19" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 934, mapsImpressions: 758, gbpCalls: 13, directionRequests: 19 },
      { month: "Feb 2025", gbpViews: 1123, mapsImpressions: 897, gbpCalls: 16, directionRequests: 23 },
      { month: "Mar 2025", gbpViews: 1423, mapsImpressions: 1089, gbpCalls: 21, directionRequests: 28 },
      { month: "Apr 2025", gbpViews: 1834, mapsImpressions: 1387, gbpCalls: 27, directionRequests: 34 },
      { month: "May 2025", gbpViews: 2198, mapsImpressions: 1678, gbpCalls: 33, directionRequests: 41 },
      { month: "Jun 2025", gbpViews: 2567, mapsImpressions: 1947, gbpCalls: 38, directionRequests: 47 },
      { month: "Jul 2025", gbpViews: 2934, mapsImpressions: 2213, gbpCalls: 43, directionRequests: 52 },
      { month: "Aug 2025", gbpViews: 3234, mapsImpressions: 2478, gbpCalls: 47, directionRequests: 57 },
      { month: "Sep 2025", gbpViews: 3547, mapsImpressions: 2713, gbpCalls: 51, directionRequests: 62 },
      { month: "Oct 2025", gbpViews: 3847, mapsImpressions: 2934, gbpCalls: 54, directionRequests: 67 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "247", growth: "+394%", note: "7/mo → 41/mo" },
      { label: "Phone Calls", value: "152", growth: "+380%", note: "5/mo → 24/mo" },
      { label: "Form Submissions", value: "95", growth: "+417%", note: "2/mo → 17/mo" },
      { label: "Avg Conversion Rate", value: "3.41%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Form Fills",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 5, totalLeads: 7, conversionRate: 2.44 },
      { month: "Feb 2025", formFills: 3, calls: 6, totalLeads: 9, conversionRate: 2.59 },
      { month: "Mar 2025", formFills: 5, calls: 9, totalLeads: 14, conversionRate: 3.10 },
      { month: "Apr 2025", formFills: 7, calls: 12, totalLeads: 19, conversionRate: 3.23 },
      { month: "May 2025", formFills: 9, calls: 15, totalLeads: 24, conversionRate: 3.32 },
      { month: "Jun 2025", formFills: 11, calls: 17, totalLeads: 28, conversionRate: 3.36 },
      { month: "Jul 2025", formFills: 13, calls: 20, totalLeads: 33, conversionRate: 3.51 },
      { month: "Aug 2025", formFills: 14, calls: 22, totalLeads: 36, conversionRate: 3.44 },
      { month: "Sep 2025", formFills: 15, calls: 23, totalLeads: 38, conversionRate: 3.29 },
      { month: "Oct 2025", formFills: 17, calls: 24, totalLeads: 41, conversionRate: 3.24 },
    ],
    sources: [
      { source: "Organic Search", percentage: 52, leads: 128 },
      { source: "Google Maps / GBP", percentage: 35, leads: 86 },
      { source: "Direct (Branded)", percentage: 13, leads: 33 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$412K", growth: "+187%" },
    { label: "Closed Clients", value: "118", growth: "+163%" },
    { label: "Cost Per Qualified Lead", value: "$119", growth: "↓37%" },
    { label: "Blended ROAS", value: "2.81x", growth: "" },
  ],
};
