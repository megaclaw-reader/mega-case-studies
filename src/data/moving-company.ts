import { CaseStudyData } from "./types";

export const movingCompany: CaseStudyData = {
  slug: "moving-company",
  industry: "Moving Company",
  headline: "How an Atlanta Moving Company Dropped CPQL 34% by Refining Lead Quality Through Call Analysis & Landing Page Qualification",
  subheadline: "MEGA helped a full-service moving company in Atlanta, GA transform their paid advertising from a volume game into a precision lead engine — reducing cost per qualified lead from $247 to $163 while scaling monthly ad spend from $19K to $29K and generating $636.9K in attributed revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "636.9", unit: "K", label: "Revenue Attributed" },
    { value: "34", unit: "%", label: "CPQL Reduction" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO", "Lead Quality Optimization"],
  company: {
    industry: "Moving Company — Residential & Commercial",
    employees: "47",
    revenue: "$4.1M",
    location: "Atlanta, GA (Metro Atlanta & Surrounding Counties)",
    description: "A full-service moving company operating across the greater Atlanta metro area — serving Buckhead, Midtown, Decatur, Marietta, Roswell, Alpharetta, Sandy Springs, and Kennesaw. The company offered local residential moves, long-distance relocations within the Southeast, commercial office moves, senior downsizing assistance, and packing/unpacking services. With a fleet of 14 trucks and a 4.7-star rating across 287 reviews, they had built a solid reputation through referrals and repeat business. However, their digital advertising efforts were generating high lead volume with poor qualification — too many inquiries for moves outside their service area, single-item moves that weren't profitable, and tire-kickers comparing five companies with no intent to book. They needed a strategy that would shift from maximizing lead count to maximizing qualified lead quality, ensuring every dollar spent attracted homeowners and businesses ready to book full-service moves.",
  },
  challenges: [
    {
      title: "High Lead Volume but Dismal Qualification Rates",
      description: "The company was generating roughly 190 leads per month through paid advertising, but only 22% were qualifying as legitimate moving prospects. The sales team was spending 60% of their time fielding calls from people wanting to move a single couch across town, renters looking for the cheapest possible option with no packing needs, and inquiries from areas 50+ miles outside their service radius. Cost per lead looked acceptable at $99, but cost per qualified lead was $247 — making it nearly impossible to maintain healthy margins on local moves averaging $1,400. Without a system to pre-qualify leads before they reached the sales team, the company was essentially paying to overwhelm their own staff with dead-end conversations.",
    },
    {
      title: "No Differentiation Between High-Value and Low-Value Move Inquiries",
      description: "All advertising traffic was being sent to a single generic landing page that offered a 'free moving quote' with no qualifying questions. A family relocating a 4-bedroom house in Buckhead ($3,200 move) received the same experience as someone wanting to move a studio apartment's worth of furniture ($400 move). The form captured name, phone, and 'moving from/to' — nothing about home size, timeline, services needed, or move distance. Phone calls were similarly unfiltered, with the main business line receiving every inquiry without any IVR routing or pre-qualification. The result was a flat lead funnel where the sales team couldn't prioritize, and high-value prospects often waited hours for callbacks while the team was busy quoting $300 single-room moves.",
    },
    {
      title: "Weak Organic Presence in Atlanta's Competitive Moving Market",
      description: "Despite being established for 6 years, the company's website ranked for only 155 keywords — nearly all branded terms. They were invisible for high-intent searches like 'movers near me Atlanta', 'moving company Buckhead', 'local movers Marietta', and 'office movers Atlanta GA.' Four larger competitors and two national franchises dominated the local 3-pack. Organic traffic averaged just 312 visits per month, producing fewer than 8 leads. In an industry where customers typically search and book within 2-3 weeks of their move date, this organic invisibility meant ceding the highest-intent, lowest-cost traffic to competitors.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Lead Quality Infrastructure & Baseline Data Collection",
      items: [
        "Full site audit — crawlability, mobile performance, page speed, and local SEO baseline across Atlanta metro neighborhoods and suburbs",
        "Business profile optimization — service categories updated to reflect residential moving, commercial moving, packing services, and senior moving; added fleet photos and team images",
        "Implemented call tracking with recording and AI-powered analysis — tagging each call by move type (local residential, long-distance, commercial, single-item), home size, timeline, and service area match",
        "Redesigned landing pages with qualifying intake forms — number of bedrooms, move date range, origin/destination zip codes, services needed (packing, storage, specialty items), and move type selection",
        "Created separate landing page experiences for residential vs. commercial moving inquiries to capture different qualification data",
        "Keyword research targeting moving company, movers, local movers, office movers, packing services, and moving quotes across 23 Atlanta metro neighborhoods and suburbs",
        "Generated 14 initial content pieces — moving checklists, neighborhood guides for relocating to Atlanta areas, commercial moving planning guides",
        "Technical SEO fixes — local business schema markup, NAP consistency audit across 53 directories, image optimization and alt text for fleet/service photos",
        "Local citation building across 48 directories including major platforms, Atlanta Chamber of Commerce, and neighborhood business associations",
        "Launched paid campaigns at $19,200/month with intentionally broad targeting to establish baseline lead quality data — gathering phone call and form submission patterns for refinement",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Lead Quality Pattern Analysis & Targeting Refinement",
      items: [
        "Analyzed 30 days of phone call recordings — discovered 41% of unqualified calls were for single-item or small apartment moves under $500, and 23% were for moves outside the service area",
        "Form submission data revealed: leads selecting '3+ bedrooms' and 'full packing service' converted to booked moves at 4.1x the rate of leads selecting 'studio/1BR' with no additional services",
        "Implemented negative keyword strategy to filter out searches related to DIY moving, truck rental, single-item delivery, and storage-only inquiries",
        "Added zip code validation to landing page forms — instantly flagging out-of-area moves and redirecting to a referral partner page instead of wasting sales team time",
        "Created dedicated landing pages for high-value segments: family home relocations (3+ BR), corporate/office moves, and senior downsizing with white-glove service",
        "Generated 16 additional content pieces — neighborhood-specific moving guides for Buckhead, Midtown, Decatur, Marietta, Roswell, and Sandy Springs",
        "Launched 19 programmatic location pages targeting 'movers near me [neighborhood]' and 'moving company [suburb]' across the Atlanta metro",
        "Restructured paid campaigns to weight budget toward zip codes producing highest qualified lead rates — Buckhead, Sandy Springs, Alpharetta, and Roswell indexed 2.7x above average",
        "Adjusted bid strategy to prioritize searches indicating larger moves — 'moving company for house', 'full service movers', 'packing and moving service'",
        "Increased spend to $21,400 as initial quality refinements showed measurable improvement in qualified lead rate",
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Advanced Qualification & Seasonal Scaling",
      items: [
        "Phone call analysis at 60-day mark revealed timing patterns: leads calling between 9-11 AM on weekdays had 67% higher booking rates than evening/weekend callers — adjusted ad scheduling accordingly",
        "Identified that leads mentioning a 'closing date' or 'lease end date' on calls had 83% qualification rates — trained the IVR greeting to ask about move timeline upfront",
        "Landing page A/B testing: adding an estimated move value calculator increased form completion by 28% while simultaneously filtering out low-value inquiries (users seeing $300 estimates self-selected out)",
        "Commercial moving segment analysis: office relocations for 20-75 employee companies had highest close rates — created targeted campaign with case study content and dedicated landing page",
        "Summer peak season (June) — scaled budget to $28,700 to capture peak family relocation demand when school ends",
        "Generated 12 additional service-specific pages — piano moving, antique/specialty item moving, last-minute moves, military relocation assistance",
        "Backlink acquisition through Atlanta real estate blogs, apartment community partnerships, and relocation resource roundups",
        "CRO improvements — added instant callback request with 15-minute response guarantee for qualified leads, added video testimonials from recent moves",
        "Review generation campaign launched — 47 new reviews added over the following 3 months targeting specific service categories",
        "Expanded neighborhood pages into Kennesaw, Smyrna, Johns Creek, Dunwoody, and Peachtree City based on emerging demand signals",
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Optimized Lead Engine & Sustained Quality at Scale",
      items: [
        "Continued seasonal budget management — July peak at $29,100, tapering to $23,800 in August as summer moving season wound down",
        "Phone call quality scoring fully automated — weekly reports feeding directly into campaign bid adjustments and geographic targeting refinements",
        "Landing page qualification flow so refined that sales team now spending 80% of time on qualified prospects vs. 40% at start — dramatic improvement in team morale and close rates",
        "Implemented post-booking survey to track which ad touchpoints influenced the decision — data used to optimize creative and messaging",
        "Monthly content refresh cycles on top-performing neighborhood and service pages to maintain and improve rankings",
        "Commercial pipeline nurture — automated follow-up sequences for office managers who requested quotes but hadn't booked within 10 days",
        "Ongoing backlink acquisition through Atlanta community involvement, real estate agent partnerships, and home services content collaborations",
        "Weekly full-funnel reporting: visit → lead → qualified lead → booked move, segmented by move type (local residential, long-distance, commercial) and average job value",
        "By month 8, qualified lead rate improved from 22% to 37% — meaning the same ad spend now produced 68% more bookable opportunities",
        "CPQL reduced to $163 even as spend reached $29K at peak — proving that quality refinement sustained efficiency at higher budgets",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,817", growth: "+3,011%", from: "from 155" },
      { label: "Top 10 Rankings", value: "412", growth: "+4,478%", from: "from 9" },
      { label: "Pages Created", value: "83", growth: "", from: "incl. 23 neighborhood pages" },
      { label: "Organic Traffic", value: "6,934/mo", growth: "+2,122%", from: "from 312" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 155, top10: 9, top3: 1, traffic: 312, pages: 11, avgPos: 54.7, ctr: 0.5 },
      { month: "Feb 2025", keywords: 214, top10: 23, top3: 2, traffic: 478, pages: 25, avgPos: 48.3, ctr: 0.7 },
      { month: "Mar 2025", keywords: 487, top10: 52, top3: 6, traffic: 847, pages: 42, avgPos: 41.6, ctr: 0.9 },
      { month: "Apr 2025", keywords: 1134, top10: 118, top3: 17, traffic: 1923, pages: 56, avgPos: 34.2, ctr: 1.4 },
      { month: "May 2025", keywords: 1987, top10: 198, top3: 34, traffic: 3241, pages: 64, avgPos: 28.7, ctr: 1.8 },
      { month: "Jun 2025", keywords: 2891, top10: 274, top3: 52, traffic: 4567, pages: 72, avgPos: 24.3, ctr: 2.1 },
      { month: "Jul 2025", keywords: 3847, top10: 347, top3: 71, traffic: 5823, pages: 78, avgPos: 21.8, ctr: 2.4 },
      { month: "Aug 2025", keywords: 4817, top10: 412, top3: 89, traffic: 6934, pages: 83, avgPos: 19.6, ctr: 2.7 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$195.4K" },
      { label: "Qualified Leads", value: "783" },
      { label: "Avg Cost Per Qualified Lead", value: "$250", note: "↓34% from $447 start → $203 final" },
      { label: "Booked Moves", value: "289", note: "avg job value $2,147" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "CPL",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Booked Moves",
    },
    monthly: [
      // Jan 2025: $19.2K, winter slow season, broad targeting to gather baseline data, low qualified rate
      { month: "Jan 2025", spend: 19200, leads: 194, cpl: 99, qualified: 43, cpql: 447, deals: 14, revenue: 28763, roas: 1.50 },
      // Feb 2025: $21400, slight pickup, first call analysis insights applied, zip code filtering on forms
      { month: "Feb 2025", spend: 21400, leads: 218, cpl: 98, qualified: 61, cpql: 351, deals: 21, revenue: 43917, roas: 2.05 },
      // Mar 2025: $22800, spring moving demand building, negative keywords + landing page qualification live
      { month: "Mar 2025", spend: 22800, leads: 247, cpl: 92, qualified: 84, cpql: 271, deals: 31, revenue: 68423, roas: 3.00 },
      // Apr 2025: $24100, spring peak starting, ICP targeting refined to high-value neighborhoods
      { month: "Apr 2025", spend: 24100, leads: 271, cpl: 89, qualified: 102, cpql: 236, deals: 39, revenue: 87234, roas: 3.62 },
      // May 2025: $26300, summer moving season ramps up, families booking before school ends
      { month: "May 2025", spend: 26300, leads: 298, cpl: 88, qualified: 118, cpql: 223, deals: 46, revenue: 102847, roas: 3.91 },
      // Jun 2025: $28700, peak summer demand, highest budget month, quality refinements fully live
      { month: "Jun 2025", spend: 28700, leads: 319, cpl: 90, qualified: 131, cpql: 219, deals: 51, revenue: 114623, roas: 3.99 },
      // Jul 2025: $29100, peak continues, lead quality at its best with all refinements mature
      { month: "Jul 2025", spend: 29100, leads: 307, cpl: 95, qualified: 127, cpql: 229, deals: 49, revenue: 108934, roas: 3.74 },
      // Aug 2025: $23800, summer winding down, still strong but tapering, maintaining quality gains
      { month: "Aug 2025", spend: 23800, leads: 261, cpl: 91, qualified: 117, cpql: 203, deals: 38, revenue: 82147, roas: 3.45 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "8,234/mo", growth: "+782%", from: "from 934" },
      { label: "Maps Impressions", value: "6,147/mo", growth: "+719%", from: "from 751" },
      { label: "GBP Calls (Total)", value: "684", growth: "+750%", from: "14/mo → 119/mo" },
      { label: "Direction Requests", value: "178/mo", growth: "+674%", from: "from 23" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 934, mapsImpressions: 751, gbpCalls: 14, directionRequests: 23 },
      { month: "Feb 2025", gbpViews: 1423, mapsImpressions: 1087, gbpCalls: 21, directionRequests: 34 },
      { month: "Mar 2025", gbpViews: 2187, mapsImpressions: 1634, gbpCalls: 34, directionRequests: 51 },
      { month: "Apr 2025", gbpViews: 3412, mapsImpressions: 2547, gbpCalls: 53, directionRequests: 78 },
      { month: "May 2025", gbpViews: 4891, mapsImpressions: 3623, gbpCalls: 74, directionRequests: 107 },
      { month: "Jun 2025", gbpViews: 6234, mapsImpressions: 4687, gbpCalls: 91, directionRequests: 134 },
      { month: "Jul 2025", gbpViews: 7412, mapsImpressions: 5534, gbpCalls: 107, directionRequests: 158 },
      { month: "Aug 2025", gbpViews: 8234, mapsImpressions: 6147, gbpCalls: 119, directionRequests: 178 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "587", growth: "+1,371%", note: "7/mo → 143/mo" },
      { label: "Phone Calls", value: "361", growth: "+1,340%", note: "5/mo → 87/mo" },
      { label: "Form Submissions", value: "226", growth: "+1,420%", note: "2/mo → 56/mo" },
      { label: "Avg Conversion Rate", value: "2.89%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Quote Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 5, totalLeads: 7, conversionRate: 2.24 },
      { month: "Feb 2025", formFills: 4, calls: 9, totalLeads: 13, conversionRate: 2.72 },
      { month: "Mar 2025", formFills: 9, calls: 17, totalLeads: 26, conversionRate: 3.07 },
      { month: "Apr 2025", formFills: 19, calls: 34, totalLeads: 53, conversionRate: 2.76 },
      { month: "May 2025", formFills: 31, calls: 52, totalLeads: 83, conversionRate: 2.56 },
      { month: "Jun 2025", formFills: 42, calls: 68, totalLeads: 110, conversionRate: 2.41 },
      { month: "Jul 2025", formFills: 49, calls: 79, totalLeads: 128, conversionRate: 2.20 },
      { month: "Aug 2025", formFills: 56, calls: 87, totalLeads: 143, conversionRate: 2.06 },
    ],
    sources: [
      { source: "Organic Search", percentage: 48, leads: 282 },
      { source: "Google Maps / GBP", percentage: 38, leads: 223 },
      { source: "Direct (Branded)", percentage: 14, leads: 82 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$636.9K", growth: "+187%" },
    { label: "Booked Moves", value: "289", growth: "+164%" },
    { label: "Cost Per Qualified Lead", value: "$163", growth: "↓34%" },
    { label: "Blended ROAS", value: "3.26x", growth: "" },
  ],
};
