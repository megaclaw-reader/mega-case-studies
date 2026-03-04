import { CaseStudyData } from "./types";

export const movingCompany: CaseStudyData = {
  slug: "moving-company",
  industry: "Moving Company",
  headline: "How an Atlanta Moving Company Dropped CPQL 34% by Refining Lead Quality Through Call Analysis & Landing Page Qualification",
  subheadline: "MEGA helped a full-service moving company in Atlanta, GA transform their paid advertising from a volume game into a precision lead engine — reducing cost per qualified lead from $247 to $163 while scaling monthly ad spend from $19K to $29K and generating $1.27M in attributed revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "$1.27", unit: "M", label: "Revenue Attributed" },
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
      description: "Despite being established for 6 years, the company's website ranked for only 87 keywords — nearly all branded terms. They were invisible for high-intent searches like 'movers near me Atlanta', 'moving company Buckhead', 'local movers Marietta', and 'office movers Atlanta GA.' Four larger competitors and two national franchises dominated the local 3-pack. Organic traffic averaged just 312 visits per month, producing fewer than 8 leads. In an industry where customers typically search and book within 2-3 weeks of their move date, this organic invisibility meant ceding the highest-intent, lowest-cost traffic to competitors.",
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
      { label: "Total Keywords", value: "714", growth: "+721%", from: "from 87" },
      { label: "Top 10 Rankings", value: "89", growth: "+988%", from: "from 8" },
      { label: "Pages Created", value: "67", growth: "", from: "incl. 19 neighborhood pages" },
      { label: "Organic Traffic", value: "1,187/mo", growth: "+280%", from: "from 312" },
    ],
    monthly: [
      { month: "Jan 2025", keywords: 87, top10: 8, top3: 1, traffic: 312, pages: 11, avgPos: 51.3, ctr: 0.6 },
      { month: "Feb 2025", keywords: 156, top10: 14, top3: 2, traffic: 389, pages: 27, avgPos: 46.7, ctr: 0.7 },
      { month: "Mar 2025", keywords: 248, top10: 23, top3: 3, traffic: 487, pages: 43, avgPos: 41.2, ctr: 0.9 },
      { month: "Apr 2025", keywords: 347, top10: 34, top3: 5, traffic: 623, pages: 51, avgPos: 37.4, ctr: 1.0 },
      { month: "May 2025", keywords: 438, top10: 46, top3: 8, traffic: 789, pages: 56, avgPos: 33.8, ctr: 1.1 },
      { month: "Jun 2025", keywords: 531, top10: 57, top3: 11, traffic: 934, pages: 60, avgPos: 30.6, ctr: 1.2 },
      { month: "Jul 2025", keywords: 627, top10: 72, top3: 14, traffic: 1067, pages: 64, avgPos: 28.1, ctr: 1.3 },
      { month: "Aug 2025", keywords: 714, top10: 89, top3: 17, traffic: 1187, pages: 67, avgPos: 26.4, ctr: 1.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$195.4K" },
      { label: "Qualified Leads", value: "783" },
      { label: "Avg Cost Per Qualified Lead", value: "$250", note: "↓34% from $247" },
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
      { label: "GBP Views", value: "3,847/mo", growth: "+312%", from: "from 934" },
      { label: "Maps Impressions", value: "2,923/mo", growth: "+289%", from: "from 751" },
      { label: "GBP Calls (Total)", value: "347", growth: "+294%", from: "14/mo → 63/mo" },
      { label: "Direction Requests", value: "84/mo", growth: "+271%", from: "from 23" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 934, mapsImpressions: 751, gbpCalls: 14, directionRequests: 23 },
      { month: "Feb 2025", gbpViews: 1187, mapsImpressions: 934, gbpCalls: 19, directionRequests: 29 },
      { month: "Mar 2025", gbpViews: 1623, mapsImpressions: 1247, gbpCalls: 27, directionRequests: 38 },
      { month: "Apr 2025", gbpViews: 2134, mapsImpressions: 1623, gbpCalls: 36, directionRequests: 47 },
      { month: "May 2025", gbpViews: 2689, mapsImpressions: 2034, gbpCalls: 44, directionRequests: 57 },
      { month: "Jun 2025", gbpViews: 3178, mapsImpressions: 2412, gbpCalls: 52, directionRequests: 67 },
      { month: "Jul 2025", gbpViews: 3534, mapsImpressions: 2689, gbpCalls: 58, directionRequests: 76 },
      { month: "Aug 2025", gbpViews: 3847, mapsImpressions: 2923, gbpCalls: 63, directionRequests: 84 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "189", growth: "+381%", note: "7/mo → 41/mo" },
      { label: "Phone Calls", value: "121", growth: "+367%", note: "5/mo → 26/mo" },
      { label: "Form Submissions", value: "68", growth: "+400%", note: "2/mo → 15/mo" },
      { label: "Avg Conversion Rate", value: "3.21%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Quote Requests",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 5, totalLeads: 7, conversionRate: 2.24 },
      { month: "Feb 2025", formFills: 3, calls: 7, totalLeads: 10, conversionRate: 2.57 },
      { month: "Mar 2025", formFills: 5, calls: 10, totalLeads: 15, conversionRate: 3.08 },
      { month: "Apr 2025", formFills: 7, calls: 14, totalLeads: 21, conversionRate: 3.37 },
      { month: "May 2025", formFills: 10, calls: 18, totalLeads: 28, conversionRate: 3.55 },
      { month: "Jun 2025", formFills: 12, calls: 22, totalLeads: 34, conversionRate: 3.64 },
      { month: "Jul 2025", formFills: 14, calls: 24, totalLeads: 38, conversionRate: 3.56 },
      { month: "Aug 2025", formFills: 15, calls: 26, totalLeads: 41, conversionRate: 3.45 },
    ],
    sources: [
      { source: "Organic Search", percentage: 51, leads: 96 },
      { source: "Google Maps / GBP", percentage: 36, leads: 68 },
      { source: "Direct (Branded)", percentage: 13, leads: 25 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$636.9K", growth: "+187%" },
    { label: "Booked Moves", value: "289", growth: "+164%" },
    { label: "Cost Per Qualified Lead", value: "$163", growth: "↓34%" },
    { label: "Blended ROAS", value: "3.26x", growth: "" },
  ],
};
