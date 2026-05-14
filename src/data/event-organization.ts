import { CaseStudyData } from "./types";

export const eventOrganization: CaseStudyData = {
  slug: "event-organization",
  industry: "Event Organization",
  headline: "How a Montreal Event Company Grew Bookings 89% With AI-Powered Marketing",
  subheadline: "MEGA helped a local event organization company in Montreal optimize their digital presence, reducing cost per qualified lead by 27%, growing organic traffic 312%, and generating $149.5K in attributed revenue over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "89", unit: "%", label: "Booking Growth Rate" },
    { value: "$163.0K", unit: "K", label: "Revenue Attributed" },
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
        "Search engine Console setup and optimization for both English and French event planning queries",
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
      { label: "Total Keywords", value: "10,023", growth: "+312%", from: "from 173" },
      { label: "Top 10 Rankings", value: "83", growth: "+655%", from: "from 11" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 41 neighborhood & bilingual pages" },
      { label: "Organic Traffic", value: "2,617/mo", growth: "+312%", from: "from 634" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 157, top10: 17, top3: 4, traffic: 355, pages: 8, avgPos: 50.7, ctr: 0.7 },
      { month: "Feb 2025", keywords: 647, top10: 72, top3: 18, traffic: 1460, pages: 15, avgPos: 46.4, ctr: 1.0 },
      { month: "Mar 2025", keywords: 959, top10: 105, top3: 35, traffic: 1843, pages: 16, avgPos: 41.3, ctr: 1.7 },
      { month: "Apr 2025", keywords: 2610, top10: 220, top3: 47, traffic: 7839, pages: 24, avgPos: 39.0, ctr: 1.9 },
      { month: "May 2025", keywords: 3742, top10: 537, top3: 160, traffic: 11333, pages: 23, avgPos: 32.7, ctr: 2.0 },
      { month: "Jun 2025", keywords: 4831, top10: 684, top3: 140, traffic: 11032, pages: 24, avgPos: 35.6, ctr: 2.6 },
      { month: "Jul 2025", keywords: 5765, top10: 538, top3: 116, traffic: 19845, pages: 35, avgPos: 25.3, ctr: 2.8 },
      { month: "Aug 2025", keywords: 6673, top10: 680, top3: 140, traffic: 21168, pages: 52, avgPos: 22.9, ctr: 4.1 },
      { month: "Sep 2025", keywords: 7491, top10: 969, top3: 237, traffic: 17869, pages: 68, avgPos: 15.6, ctr: 2.5 },
      { month: "Oct 2025", keywords: 8283, top10: 905, top3: 169, traffic: 17744, pages: 48, avgPos: 21.3, ctr: 4.4 },
      { month: "Nov 2025", keywords: 9186, top10: 1186, top3: 328, traffic: 31166, pages: 43, avgPos: 11.2, ctr: 3.0 },
      { month: "Dec 2025", keywords: 10023, top10: 832, top3: 201, traffic: 21858, pages: 52, avgPos: 15.1, ctr: 4.8 }
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$72.0K" },
      { label: "Qualified Leads", value: "345" },
      { label: "Avg Cost Per Qualified Lead", value: "$209", note: "↓66% from $608" },
      { label: "Closed Bookings", value: "36" },
    ],
    monthly: [
      // Month 1: Inherited campaigns — baseline, winter slow season (Jan), auditing
      { month: "Jan 2025", spend: 5205, leads: 29, cpl: 179.48, qualified: 10, cpql: 520.5, deals: 1, revenue: 4318, roas: 0.83 },
      // Month 2: Restructured campaigns, still winter — low demand (Feb)
      { month: "Feb 2025", spend: 5197, leads: 33, cpl: 157.48, qualified: 15, cpql: 346.47, deals: 1, revenue: 4741, roas: 0.91 },
      // Month 3: Spring planning starting, creative tests landing (Mar)
      { month: "Mar 2025", spend: 5271, leads: 52, cpl: 101.37, qualified: 21, cpql: 251.0, deals: 2, revenue: 9623, roas: 1.83 },
      // Month 4: Wedding + corporate season ramping, seasonal urgency messaging (Apr)
      { month: "Apr 2025", spend: 6760, leads: 86, cpl: 78.6, qualified: 40, cpql: 169.0, deals: 4, revenue: 19087, roas: 2.82 },
      // Month 5: Peak season — high-intent wedding and event queries (May)
      { month: "May 2025", spend: 7339, leads: 97, cpl: 75.66, qualified: 42, cpql: 174.74, deals: 5, revenue: 19847, roas: 2.71 },
      // Month 6: Peak continues, corporate conferences driving volume (Jun)
      { month: "Jun 2025", spend: 7122, leads: 108, cpl: 65.94, qualified: 47, cpql: 151.53, deals: 5, revenue: 18623, roas: 2.62 },
      // Month 7: Summer strong but slight pullback in new wedding inquiries (Jul)
      { month: "Jul 2025", spend: 6124, leads: 78, cpl: 78.51, qualified: 30, cpql: 204.13, deals: 3, revenue: 14192, roas: 2.32 },
      // Month 8: Late summer, some seasonal softening (Aug)
      { month: "Aug 2025", spend: 5169, leads: 60, cpl: 86.15, qualified: 24, cpql: 215.38, deals: 2, revenue: 10847, roas: 2.10 },
      // Month 9: Fall corporate season picks up — conferences, retreats (Sep)
      { month: "Sep 2025", spend: 6161, leads: 78, cpl: 78.99, qualified: 32, cpql: 192.53, deals: 3, revenue: 15213, roas: 2.47 },
      // Month 10: Strong fall — fundraiser galas, corporate year-end planning (Oct)
      { month: "Oct 2025", spend: 6590, leads: 89, cpl: 74.04, qualified: 36, cpql: 183.06, deals: 4, revenue: 18687, roas: 2.84 },
      // Month 11: Holiday party push — Nov events + Dec planning (Nov)
      { month: "Nov 2025", spend: 5857, leads: 86, cpl: 68.1, qualified: 31, cpql: 188.94, deals: 4, revenue: 17918, roas: 3.06 },
      // Month 12: Winter slowdown begins but holiday events still closing (Dec)
      { month: "Dec 2025", spend: 5170, leads: 48, cpl: 107.71, qualified: 17, cpql: 304.12, deals: 2, revenue: 9891, roas: 1.91 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$163.0K", growth: "+89%" },
    { label: "Total Pipeline", value: "$261K", growth: "+74%" },
    { label: "Avg Revenue Per Booking", value: "$149.5K", growth: "" },
    { label: "Blended ROAS", value: "2.3x", growth: "" },
  ],
};
