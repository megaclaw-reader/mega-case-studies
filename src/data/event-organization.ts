import { CaseStudyData } from "./types";

export const eventOrganization: CaseStudyData = {
  slug: "event-organization",
  industry: "Event Organization",
  headline: "How a Montreal Event Company Grew Bookings 89% With AI-Powered Marketing",
  subheadline: "MEGA helped a local event organization company in Montreal optimize their digital presence, reducing cost per qualified lead by 27%, growing organic traffic 312%, and generating $149.5K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "89", unit: "%", label: "Booking Growth Rate" },
    { value: "163.0", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Local SEO", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Event Organization",
    employees: "14",
    revenue: "$1.3M",
    location: "Montreal, QC",
    description: "A boutique event planning and production company serving the greater Montreal area, specializing in corporate events, weddings, conferences, private parties, and fundraisers. The company had built a solid local reputation through referrals and repeat clients over 9 years, but was struggling to capture new inbound demand from online search. They had a bilingual website (English and French) and had run some paid campaigns intermittently, but digital marketing was never a consistent growth channel.",
  },
  challenges: [
    {
      title: "Underperforming Local Visibility",
      description: "Despite serving Montreal for nearly a decade, the company ranked for only 173 keywords organically, with just 11 in the top 10. Their Google Business Profile was partially optimized, and they had inconsistent NAP data across local directories — hurting their visibility in Maps and local pack results for high-intent searches like 'event planner Montreal' and 'planificateur événements Montréal.'",
    },
    {
      title: "Inefficient Paid Lead Generation",
      description: "Paid campaigns were running but without proper conversion tracking or lead qualification. The company was generating about 13 inquiries per month at an average cost of $231 per lead, but only about 38% were genuinely qualified — putting the effective cost per qualified lead near $608. For an average event booking of $4,700, the unit economics worked but left significant room for improvement.",
    },
    {
      title: "Seasonal Revenue Volatility",
      description: "Roughly 71% of annual revenue came from May through October (wedding and corporate event season), leaving the team underutilized in winter months. The company wanted to smooth demand through better year-round digital visibility and targeted campaigns for holiday parties, galas, and winter corporate retreats.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, bilingual URL structure, and mobile performance review",
        "Google Business Profile optimization — complete category setup, bilingual descriptions, photo refresh, Q&A seeding, and review response strategy",
        "Google Search Console setup and optimization for both English and French event planning queries",
        "Competitor research across Montreal event planners, wedding coordinators, and corporate event companies",
        "Keyword research across both languages — corporate events, weddings, conferences, private parties, fundraisers, and venue-related terms",
        "Generated 21 initial articles (wedding planning guides, corporate event checklists, Montreal venue roundups, seasonal event trends)",
        "Content audit and metadata fixes across all existing service pages in both English and French",
        "Technical fixes — image SEO, canonical issues between language versions, E-E-A-T optimization with portfolio and testimonial markup",
        "Full audit of past ad performance and re-instrumented site with proper pixel and conversion tracking",
        "CRM integration for lead-to-booking attribution across event inquiry types",
        "Comprehensive ad strategy built around cost per qualified lead by event type, not raw inquiry volume",
        "Reduced spend inefficiencies and launched first round of creative and landing page tests targeting wedding and corporate segments",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for wedding vs. corporate vs. social event segments",
        "Generated 23 additional articles — bilingual content targeting seasonal event planning queries and Montreal-specific topics",
        "Launched programmatic neighborhood landing pages ('event planner in Old Montreal,' 'traiteur événementiel Plateau Mont-Royal')",
        "Optimized internal linking between service pages, portfolio pieces, and blog content for topical authority",
        "Weekly Google Business Profile posts showcasing recent events with bilingual captions",
        "Local citation building across 50+ directories — ensuring NAP consistency for Montreal-area listings",
        "Added structured data schema for local business, event services, FAQ content, and review markup",
        "Rapid iterations of ad creative testing — messaging pivots around event type, seasonal urgency, and bilingual targeting",
        "Retargeting layer for portfolio page viewers and quote request abandoners",
        "Keyword and negative keyword refinement based on booking qualification data",
        "Landing page refinement with event-type-specific social proof and venue photography",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional Montreal neighborhoods and surrounding areas (Laval, South Shore)",
        "Continued content updates — refreshed underperforming articles with updated venue information and seasonal trends",
        "Backlink campaigns — local link building via Montreal lifestyle publications, wedding directories, and chamber of commerce listings",
        "CRO review and keyword cannibalization cleanup across overlapping English/French service terms",
        "Advanced schema markup by page type (service, portfolio, FAQ, neighborhood landing page)",
        "AI search crawlability improvements for LLM placement in Montreal event planning recommendation queries",
        "Complex audience segmentations by event type, budget tier, and planning timeline",
        "Multi-approach bidding strategies based on campaign maturity and seasonal booking patterns",
        "Fully robust lead scoring integrating ad engagement signals with CRM booking stage progression",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on seasonal performance — increased spend ahead of peak wedding and corporate seasons, strategic winter holiday campaigns",
        "Expansion of programmatic pages into additional event types (galas, product launches, team-building retreats) and surrounding municipalities",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from confirmed bookings",
        "Bid strategy tuning based on seasonal demand cycles and average booking value by event type",
        "Weekly reporting with booking attribution and actionable recommendations tied to revenue by event category",
        "Content refresh cycles aligned to seasonal planning windows — spring wedding content in January, holiday party content in September",
        "Bilingual content expansion to capture growing French-language search demand for event services across Quebec",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "714", growth: "+312%", from: "from 173" },
      { label: "Top 10 Rankings", value: "83", growth: "+655%", from: "from 11" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 41 neighborhood & bilingual pages" },
      { label: "Organic Traffic", value: "2,617/mo", growth: "+312%", from: "from 634" },
    ],
    monthly: [
      // Month 1: Baseline — inherited site, audit underway, GBP optimization starting
      { month: "Jan 2025", keywords: 173, top10: 11, top3: 2, traffic: 634, pages: 0, avgPos: 47.3, ctr: 0.9 },
      // Month 2: Technical fixes live, first content batch, GBP optimized — winter slowdown
      { month: "Feb 2025", keywords: 213, top10: 16, top3: 3, traffic: 712, pages: 21, avgPos: 43.1, ctr: 1.0 },
      // Month 3: More content indexing, neighborhood pages launching — still winter low season
      { month: "Mar 2025", keywords: 267, top10: 23, top3: 4, traffic: 843, pages: 38, avgPos: 39.8, ctr: 1.1 },
      // Month 4: Spring planning picks up, bilingual content gaining traction, citations building
      { month: "Apr 2025", keywords: 331, top10: 32, top3: 6, traffic: 1067, pages: 51, avgPos: 36.2, ctr: 1.3 },
      // Month 5: Wedding season searches surge, programmatic pages ranking, strong GBP visibility
      { month: "May 2025", keywords: 398, top10: 41, top3: 9, traffic: 1389, pages: 59, avgPos: 33.1, ctr: 1.5 },
      // Month 6: Peak season — corporate events + weddings driving record traffic
      { month: "Jun 2025", keywords: 461, top10: 51, top3: 12, traffic: 1728, pages: 66, avgPos: 30.7, ctr: 1.7 },
      // Month 7: Sustained summer demand, backlink campaigns compounding
      { month: "Jul 2025", keywords: 517, top10: 58, top3: 14, traffic: 1893, pages: 72, avgPos: 28.9, ctr: 1.8 },
      // Month 8: Late summer — still strong, slight plateau as wedding peak passes
      { month: "Aug 2025", keywords: 563, top10: 64, top3: 16, traffic: 1971, pages: 78, avgPos: 27.4, ctr: 1.9 },
      // Month 9: Fall corporate event season, conferences picking up
      { month: "Sep 2025", keywords: 607, top10: 69, top3: 18, traffic: 2147, pages: 83, avgPos: 26.1, ctr: 2.0 },
      // Month 10: Strong fall — fundraiser galas and corporate holiday planning searches
      { month: "Oct 2025", keywords: 643, top10: 74, top3: 20, traffic: 2341, pages: 87, avgPos: 25.2, ctr: 2.1 },
      // Month 11: Holiday party content paying off, Nov-Dec planning queries peak
      { month: "Nov 2025", keywords: 683, top10: 79, top3: 22, traffic: 2489, pages: 91, avgPos: 24.3, ctr: 2.2 },
      // Month 12: Compounding authority, bilingual coverage strong, year-end push
      { month: "Dec 2025", keywords: 714, top10: 83, top3: 24, traffic: 2617, pages: 94, avgPos: 23.6, ctr: 2.3 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$72.0K" },
      { label: "Qualified Leads", value: "92" },
      { label: "Avg Cost Per Qualified Lead", value: "$782", note: "↓27% from $608" },
      { label: "Closed Bookings", value: "36" },
    ],
    monthly: [
      // Month 1: Inherited campaigns — baseline, winter slow season (Jan), auditing
      { month: "Jan 2025", spend: 5205, leads: 8, cpl: 651, qualified: 3, cpql: 1735, deals: 1, revenue: 4318, roas: 0.83 },
      // Month 2: Restructured campaigns, still winter — low demand (Feb)
      { month: "Feb 2025", spend: 5197, leads: 9, cpl: 577, qualified: 4, cpql: 1299, deals: 1, revenue: 4741, roas: 0.91 },
      // Month 3: Spring planning starting, creative tests landing (Mar)
      { month: "Mar 2025", spend: 5271, leads: 14, cpl: 376, qualified: 6, cpql: 879, deals: 2, revenue: 9623, roas: 1.83 },
      // Month 4: Wedding + corporate season ramping, seasonal urgency messaging (Apr)
      { month: "Apr 2025", spend: 6760, leads: 23, cpl: 294, qualified: 10, cpql: 676, deals: 4, revenue: 19087, roas: 2.82 },
      // Month 5: Peak season — high-intent wedding and event queries (May)
      { month: "May 2025", spend: 7339, leads: 26, cpl: 282, qualified: 11, cpql: 667, deals: 5, revenue: 19847, roas: 2.71 },
      // Month 6: Peak continues, corporate conferences driving volume (Jun)
      { month: "Jun 2025", spend: 7122, leads: 29, cpl: 246, qualified: 12, cpql: 594, deals: 5, revenue: 18623, roas: 2.62 },
      // Month 7: Summer strong but slight pullback in new wedding inquiries (Jul)
      { month: "Jul 2025", spend: 6124, leads: 21, cpl: 292, qualified: 8, cpql: 766, deals: 3, revenue: 14192, roas: 2.32 },
      // Month 8: Late summer, some seasonal softening (Aug)
      { month: "Aug 2025", spend: 5169, leads: 16, cpl: 323, qualified: 6, cpql: 862, deals: 2, revenue: 10847, roas: 2.10 },
      // Month 9: Fall corporate season picks up — conferences, retreats (Sep)
      { month: "Sep 2025", spend: 6161, leads: 21, cpl: 293, qualified: 8, cpql: 770, deals: 3, revenue: 15213, roas: 2.47 },
      // Month 10: Strong fall — fundraiser galas, corporate year-end planning (Oct)
      { month: "Oct 2025", spend: 6590, leads: 24, cpl: 275, qualified: 10, cpql: 659, deals: 4, revenue: 18687, roas: 2.84 },
      // Month 11: Holiday party push — Nov events + Dec planning (Nov)
      { month: "Nov 2025", spend: 5857, leads: 23, cpl: 255, qualified: 9, cpql: 651, deals: 4, revenue: 17918, roas: 3.06 },
      // Month 12: Winter slowdown begins but holiday events still closing (Dec)
      { month: "Dec 2025", spend: 5170, leads: 13, cpl: 398, qualified: 5, cpql: 1034, deals: 2, revenue: 9891, roas: 1.91 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$163.0K", growth: "+89%" },
    { label: "Total Pipeline", value: "$261K", growth: "+74%" },
    { label: "Avg Revenue Per Booking", value: "$149.5K", growth: "" },
    { label: "Blended ROAS", value: "2.26x", growth: "" },
  ],
};
