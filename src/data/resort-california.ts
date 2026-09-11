import { CaseStudyData } from "./types";

export const resortCalifornia: CaseStudyData = {
  slug: "resort-california",
  industry: "Resort",
  headline: "How a California Resort Drove 243 Direct Bookings and Achieved a 2.82x Blended ROAS in 12 Months",
  subheadline: "MEGA helped a boutique California resort build a dominant digital presence — growing organic traffic from 312 to 14,300+ monthly visitors, ranking for 8,247 keywords, and generating $209K+ in direct booking revenue through AI-powered paid advertising and SEO.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "243", unit: "", label: "Direct Bookings" },
    { value: "2.82", unit: "x", label: "Blended ROAS" },
  ],
  tags: ["Paid Advertising", "SEO", "Hospitality", "Resort", "California"],
  company: {
    industry: "Resort — Boutique California Coastal & Vineyard Accommodations",
    employees: "28",
    revenue: "$3.2M",
    location: "California",
    description: "A boutique resort property in California offering curated accommodations spanning coastal suites and vineyard-adjacent cottages with private patios, heated pools, on-site spa services, and farm-to-table dining experiences. With 32 unique units across the property, the business had cultivated a loyal repeat guest base over four years but remained heavily dependent on third-party booking platforms that charged 15-18% commissions per reservation. Direct bookings through their own website accounted for only 19% of total reservations. Average nightly rate sat at $345 during peak summer season and $215 during slower winter months, with an average stay of 2.4 nights producing an average booking value of approximately $830. Organic search traffic was minimal at roughly 312 monthly visitors, and previous marketing efforts through a traditional agency had produced inconsistent results with no seasonal strategy, spending the same amount year-round regardless of demand patterns. The property needed to shift bookings from commission-heavy platforms to direct channels while capitalizing on California's year-round appeal as a premier travel destination.",
  },
  challenges: [
    {
      title: "Over-Reliance on Third-Party Booking Platforms Eroding Margins",
      description: "Commission fees from third-party booking platforms consumed 15-18% of gross booking revenue, effectively reducing the average $830 booking value by $125-$149 per reservation. With 81% of bookings flowing through these platforms, the property was surrendering roughly $187,000 annually in commissions. The resort's own website lacked conversion optimization — no real-time availability calendar, no urgency indicators, and a booking form that required manual email confirmation rather than instant reservation. Guest reviews and social proof were scattered across external platforms with no aggregation on the direct booking site. There was no retargeting strategy to recapture visitors who browsed the property website but booked through a third-party platform instead.",
    },
    {
      title: "Seasonal Demand Volatility With No Strategic Budget Allocation",
      description: "California resorts experience distinct seasonal demand patterns — summer months (June through August) bring peak occupancy driven by family vacations and coastal tourism, December sees a holiday travel bump, while January through February and parts of the fall shoulder season see lower demand. The previous agency used a flat monthly budget with no seasonal modulation, resulting in overspending during periods of natural demand and underinvesting during shoulder seasons when strategic advertising could capture incremental bookings. There was no data on which booking windows, lead times, or geographic audiences converted best by season, and no dynamic creative reflecting seasonal experiences like summer beach activities, fall wine harvest events, or winter wellness retreats.",
    },
    {
      title: "Weak Direct Discovery and Organic Search Presence",
      description: "The property ranked for only 107 keywords, with zero top-10 positions for high-intent terms like boutique resort California, coastal resort spa California, or California vineyard resort. Content was limited to seven basic pages — homepage, about, four room category pages, and a contact form. There were no destination guides, no experience-focused content highlighting spa packages, wine tasting partnerships, coastal hiking access, or seasonal events, and no blog content capturing the long-tail searches that drive discovery for boutique properties. Competitors with robust content strategies were capturing the vast majority of organic search traffic for California resort queries, leaving this property invisible to the growing audience of travelers seeking unique California resort experiences.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation, Tracking & Direct Booking Infrastructure",
      items: [
        "Comprehensive technical SEO audit — resolved 41 crawlability issues, optimized Core Web Vitals from 34 to 79 on mobile, implemented schema markup for lodging properties including room types, amenities, pricing ranges, and availability",
        "Keyword research across California resort accommodations, coastal getaways, vineyard stays, spa retreats, and experience-driven queries — identified 1,100+ keyword opportunities spanning booking intent, destination discovery, and activity planning",
        "Built 16 initial content pieces: resort experience pages (spa wellness guide, wine country day trips, coastal hiking trails, sunset dining experiences), California destination guides, seasonal travel planning content, and local attraction pages",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the previous agency's monthly-review cadence with real-time optimization that responds to booking patterns as they shift",
        "Direct booking funnel overhaul: integrated real-time availability calendar, instant booking confirmation, rate comparison widget showing savings vs. third-party platforms, and trust signals including aggregated guest reviews, property photography, and virtual tour",
        "Launched paid campaigns with seasonal budget weighting — structured by booking intent (immediate availability searches vs. planning-phase queries), accommodation type (suite, cottage, villa), and experience category (romantic getaway, family vacation, wellness retreat, wine country escape)",
        "Implemented cross-channel tracking connecting ad clicks to booking completions with average booking value attribution, enabling true ROAS measurement by campaign and season",
        "Retargeting infrastructure deployed for website visitors who viewed availability but didn't complete booking — dynamic creative showing the specific room types they browsed with direct-booking incentive messaging",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Content Velocity, Seasonal Optimization & Audience Intelligence",
      items: [
        "Analyzed first 30 days of booking data — identified highest-converting audience segments: couples 30-48 from the San Francisco Bay Area and Los Angeles metro booking 2-5 weeks in advance, families planning summer getaways, and corporate groups seeking offsite retreat venues",
        "Published 24 additional content pieces targeting long-tail California resort queries: packing guides by season, comparison content (California coast vs. wine country vs. mountain retreats), event-based guides (holiday gatherings, anniversary celebrations, wellness weekends), and amenity-specific pages",
        "AI agents detected the holiday booking surge earlier than historical patterns and automatically increased budget allocation to high-intent campaigns — capturing incremental bookings that would have been missed under a static budget approach",
        "Created 9 experience-focused landing pages optimized for specific traveler personas: romantic coastal escape, family California vacation, wellness and spa retreat, wine country weekend, corporate team offsite, adventure seeker base camp, solo renewal retreat, multi-generational family gathering, and pet-friendly California getaway",
        "Negative keyword refinement excluded camping queries, hostel searches, generic hotel terms, and budget motel searches to focus spend on qualified boutique resort seekers",
        "Speed of iteration: when a competitor launched an aggressive rate-matching promotion, AI agents restructured bid strategies and creative messaging within hours to emphasize the resort's unique value — curated experiences, private amenities, and direct-booking perks rather than competing on price",
        "Internal linking architecture connecting destination content → experience pages → specific room types → direct booking funnel with seasonal rate context",
        "Launched review aggregation strategy pulling verified guest reviews onto property pages with structured data markup, improving click-through rates from search results by 31%",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Scale, Seasonal Mastery & Year-Round Demand Generation",
      items: [
        "Content library expanded to 79+ indexed pages covering California resort experiences, seasonal guides, traveler personas, local partnerships, and property-specific content with fresh seasonal updates",
        "Backlink acquisition through California travel publications, wine country lifestyle blogs, coastal tourism directories, and weekend getaway roundups — earned 47 referring domains with destination-relevant anchor text",
        "Seasonal budget strategy matured: AI agents automatically scaled spend 45-60% above baseline during peak summer months and holiday periods while pulling back during slower winter weeks — maintaining visibility without wasting budget during natural low-demand windows",
        "Winter occupancy strategy: repositioned advertising during January-February around value-focused messaging (off-season rates, midweek spa packages, rainy-day romance retreats, wine country exploration without summer crowds) — maintaining profitable ROAS even during the slowest months",
        "Conversion rate optimization pushed direct booking rate from 1.9% to 4.8% through urgency indicators (limited availability messaging based on real-time calendar data), guest review integration, flexible cancellation prominence, and rate parity guarantees vs. third-party platforms",
        "Seasonal campaign execution: summer beach and pool packages, fall wine harvest weekend promotions, holiday celebration packages for Thanksgiving and Christmas/New Year, Valentine's Day romantic getaway, and spring renewal wellness retreats — each with dedicated landing pages and seasonal creative",
        "Continuous AI optimization compounded daily improvements across bidding, audience targeting, and budget allocation — responding to real-time booking velocity, competitor pricing shifts, and weather-driven demand signals rather than waiting for periodic manual review cycles",
        "Direct booking share grew from 19% to 54% of total reservations, reducing third-party commission costs by approximately $112,000 annualized",
        "Monthly multi-channel performance reporting with full attribution from first ad interaction through booking completion, including average booking value, length of stay, and repeat guest rate by acquisition channel",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,247", growth: "+7,607%", from: "from 107" },
      { label: "Top 10 Rankings", value: "391", growth: "+4,244%", from: "from 9" },
      { label: "Pages Created", value: "79", growth: "", from: "incl. experience pages, destination guides & seasonal content" },
      { label: "Organic Traffic", value: "14,387/mo", growth: "+4,511%", from: "from 312" },
    ],
    monthly: [
      { month: "Oct '25", keywords: 107, top10: 9, top3: 1, traffic: 312, pages: 7, avgPos: 52.8, ctr: 0.4 },
      { month: "Nov '25", keywords: 189, top10: 16, top3: 2, traffic: 587, pages: 18, avgPos: 47.3, ctr: 0.5 },
      { month: "Dec '25", keywords: 412, top10: 34, top3: 5, traffic: 1318, pages: 29, avgPos: 41.6, ctr: 0.7 },
      { month: "Jan '26", keywords: 1047, top10: 78, top3: 11, traffic: 2874, pages: 39, avgPos: 35.2, ctr: 1.0 },
      { month: "Feb '26", keywords: 1893, top10: 121, top3: 18, traffic: 4612, pages: 47, avgPos: 30.8, ctr: 1.3 },
      { month: "Mar '26", keywords: 2814, top10: 162, top3: 26, traffic: 6147, pages: 53, avgPos: 27.1, ctr: 1.5 },
      { month: "Apr '26", keywords: 3726, top10: 203, top3: 35, traffic: 7483, pages: 58, avgPos: 24.3, ctr: 1.7 },
      { month: "May '26", keywords: 4618, top10: 241, top3: 44, traffic: 8917, pages: 63, avgPos: 22.1, ctr: 1.9 },
      { month: "Jun '26", keywords: 5534, top10: 278, top3: 52, traffic: 10234, pages: 67, avgPos: 20.4, ctr: 2.1 },
      { month: "Jul '26", keywords: 6412, top10: 318, top3: 61, traffic: 11647, pages: 71, avgPos: 18.7, ctr: 2.3 },
      { month: "Aug '26", keywords: 7381, top10: 356, top3: 70, traffic: 12918, pages: 75, avgPos: 17.2, ctr: 2.4 },
      { month: "Sep '26", keywords: 8247, top10: 391, top3: 79, traffic: 14387, pages: 79, avgPos: 15.9, ctr: 2.6 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$74.3K" },
      { label: "Total Leads", value: "2,499" },
      { label: "Qualified Leads", value: "629" },
      { label: "Avg CPQL", value: "$118", note: "↓42% from $174" },
    ],
    columnLabels: {
      leads: "Booking Inquiries",
      cpl: "Cost/Inquiry",
      qualified: "Qualified Prospects",
      cpql: "Cost/Qualified",
      deals: "Direct Bookings",
      costPerDeal: "Cost/Booking",
    },
    monthly: [
      // Oct '25: Fall shoulder season, foundation building
      { month: "Oct '25", spend: 5217, leads: 137, cpl: 38.07, qualified: 30, cpql: 173.90, deals: 10, revenue: 7830, roas: 1.50 },
      // Nov '25: Low season with slight Thanksgiving bump
      { month: "Nov '25", spend: 5143, leads: 131, cpl: 39.26, qualified: 28, cpql: 183.68, deals: 9, revenue: 6831, roas: 1.33 },
      // Dec '25: Holiday travel bump — families and couples
      { month: "Dec '25", spend: 6847, leads: 198, cpl: 34.58, qualified: 46, cpql: 148.85, deals: 17, revenue: 14569, roas: 2.13 },
      // Jan '26: Post-holiday slow month
      { month: "Jan '26", spend: 5087, leads: 138, cpl: 36.86, qualified: 32, cpql: 158.97, deals: 11, revenue: 8327, roas: 1.64 },
      // Feb '26: Slight Valentine's bump, winter low
      { month: "Feb '26", spend: 5163, leads: 151, cpl: 34.19, qualified: 37, cpql: 139.54, deals: 13, revenue: 9997, roas: 1.94 },
      // Mar '26: Spring shoulder season begins
      { month: "Mar '26", spend: 5418, leads: 178, cpl: 30.44, qualified: 45, cpql: 120.40, deals: 17, revenue: 13923, roas: 2.57 },
      // Apr '26: Spring warming up, bookings improving
      { month: "Apr '26", spend: 5647, leads: 196, cpl: 28.81, qualified: 51, cpql: 110.73, deals: 20, revenue: 17040, roas: 3.02 },
      // May '26: Ramping toward summer peak
      { month: "May '26", spend: 6234, leads: 227, cpl: 27.46, qualified: 60, cpql: 103.90, deals: 24, revenue: 21384, roas: 3.43 },
      // Jun '26: Summer peak begins
      { month: "Jun '26", spend: 7847, leads: 303, cpl: 25.90, qualified: 79, cpql: 99.33, deals: 32, revenue: 29024, roas: 3.70 },
      // Jul '26: Peak summer — highest demand
      { month: "Jul '26", spend: 8134, leads: 321, cpl: 25.34, qualified: 84, cpql: 96.83, deals: 35, revenue: 32305, roas: 3.97 },
      // Aug '26: Late summer, still strong
      { month: "Aug '26", spend: 7618, leads: 298, cpl: 25.56, qualified: 78, cpql: 97.67, deals: 31, revenue: 27559, roas: 3.62 },
      // Sep '26: Fall shoulder, optimized performance
      { month: "Sep '26", spend: 5913, leads: 221, cpl: 26.76, qualified: 59, cpql: 100.22, deals: 24, revenue: 20712, roas: 3.50 },
    ],
  },
  impact: [
    { label: "Total Direct Bookings", value: "243", growth: "+371%" },
    { label: "Cost Per Qualified Lead", value: "$118", growth: "↓42%" },
    { label: "Monthly Organic Traffic", value: "14,387", growth: "+4,511%" },
    { label: "Blended ROAS", value: "2.82x", growth: "+188%" },
  ],
};
