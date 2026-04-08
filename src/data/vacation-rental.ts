import { CaseStudyData } from "./types";

export const vacationRental: CaseStudyData = {
  slug: "vacation-rental",
  industry: "Vacation Rental",
  headline: "How a New York Vacation Rental Company Grew Bookings 187% With AI-Powered Marketing",
  subheadline: "MEGA helped a vacation rental property management company in New York's Catskills, Hudson Valley, and Hamptons markets drive booking volume from 4 per month to 11+ while reducing cost per qualified lead 41% — generating $547K in revenue across 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "187", unit: "%", label: "Booking Growth" },
    { value: "$547", unit: "K", label: "Total Revenue Generated" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO"],
  company: {
    industry: "Vacation Rental — Property Management & Direct Bookings",
    employees: "14",
    revenue: "$1.8M",
    location: "New York (Catskills, Hudson Valley, Hamptons)",
    description: "A vacation rental management company operating across New York's most popular getaway destinations — the Catskills, Hudson Valley, and the Hamptons. The company manages a portfolio of 35+ premium short-term rental properties ranging from cozy mountain cabins to lakefront estates and luxury beach houses. Their business model relies on driving direct bookings through their own website to avoid OTA commission fees (typically 15-20% on platforms like Airbnb and VRBO). Despite having beautiful properties and strong guest satisfaction ratings, they were overly dependent on OTA platforms for 78% of their bookings, eroding margins significantly. Their direct marketing efforts — a basic website with minimal SEO and sporadic Google Ads — were generating fewer than 15 qualified inquiries per month, and they had no systematic approach to capturing the high-intent travel demand flowing through search engines for New York vacation rental queries.",
  },
  challenges: [
    {
      title: "Heavy OTA Dependency Crushing Margins",
      description: "With 78% of bookings coming through Airbnb and VRBO, the company was paying $180K+ annually in platform commissions. Every booking through an OTA meant 15-20% of the rental revenue went to the platform rather than the business. The owner knew that shifting even 20-30% of bookings to direct channels would add $50-80K to the bottom line annually, but previous attempts at Google Ads had been poorly managed — broad targeting, no seasonal bid adjustments, and landing pages that sent visitors to a generic homepage rather than property-specific booking pages.",
    },
    {
      title: "No Organic Visibility for High-Intent Travel Searches",
      description: "The company's website ranked for only 112 keywords, almost all branded terms. Searches like 'Catskills cabin rental,' 'Hudson Valley vacation home,' and 'Hamptons beach house rental' — queries with clear booking intent — were going entirely to OTAs and competitors. Organic traffic averaged just 340 visits per month, and the site had no area guides, no seasonal content, and no destination-specific landing pages that could capture the tens of thousands of monthly searches for New York vacation rental queries.",
    },
    {
      title: "Extreme Seasonality With No Strategy to Smooth It",
      description: "The vacation rental market in New York is intensely seasonal. Summer months (June-August) and holiday periods (Thanksgiving, Christmas/New Year) see massive demand spikes, while January through March can drop to 30-40% occupancy. The company had no marketing strategy to match this seasonality — they spent the same amount on ads year-round, missing the window to capture peak-season demand while wasting budget during low-intent winter months. There was no content strategy targeting shoulder-season travel (fall foliage, spring getaways) that could help smooth the revenue curve.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Seasonal Campaign Architecture",
      items: [
        "Full site audit — crawlability, page speed, mobile experience, schema markup, and local SEO baseline across all three New York markets (Catskills, Hudson Valley, Hamptons)",
        "Deployed call and form tracking with source attribution — every inquiry tagged by campaign, keyword, property type, and destination area",
        "Built lead qualification framework: qualified = genuine booking inquiry with dates, guest count, and budget-aligned property interest; unqualified = price shoppers, event-only inquiries, wrong-area requests",
        "Comprehensive keyword research across 3 destination clusters — 'Catskills cabin rental,' 'Hudson Valley vacation home,' 'Hamptons beach house,' plus long-tail seasonal and amenity-specific terms",
        "Generated 14 initial content pieces — area guides for each destination, seasonal travel guides (summer in the Catskills, fall foliage Hudson Valley, winter escapes), and property-type roundups",
        "Created 12 destination-specific landing pages optimized for each property cluster and location",
        "Local citation building — submitted to 38 travel directories, local tourism boards, and New York travel resources",
        "Business profile optimization with updated photos, seasonal rates, amenity highlights, and area descriptions",
        "Restructured Google Ads into seasonal campaign groups with destination-specific ad groups and property-type targeting",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management and budget allocation — replacing the previous set-it-and-forget-it approach with real-time adjustments responding to booking demand signals",
        "Set up weekly reporting separating total inquiries from qualified booking leads with full source and destination attribution",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Seasonal Optimization & Content Scaling",
      items: [
        "Analyzed 30 days of inquiry data — identified that Catskills properties converted at 2.1x the rate of Hamptons due to lower price sensitivity and shorter booking windows",
        "Discovered that searches including specific amenity terms ('hot tub,' 'lakefront,' 'pet-friendly') converted 3.4x higher than generic destination queries",
        "Refined ad targeting to weight high-intent amenity and activity-based keywords alongside destination terms",
        "Generated 16 additional content pieces — amenity-specific guides ('Best Pet-Friendly Cabins in the Catskills'), activity guides ('Hiking Near Our Hudson Valley Properties'), and seasonal event content",
        "Launched programmatic area pages covering 18 specific towns and neighborhoods across all three New York markets",
        "Optimized internal linking structure connecting area guides to property listings to booking pages",
        "Weekly business profile posts featuring seasonal property highlights and guest testimonials",
        "Local backlink outreach to New York travel blogs, Hudson Valley tourism sites, and Catskills travel publications",
        "AI agents analyzed booking inquiry patterns daily, identifying which search terms, times of day, and geographic origins produced the highest-quality leads — reallocating budget in real time rather than waiting for monthly performance reviews",
        "A/B testing landing page layouts — property gallery-first vs. area guide-first, testing booking widget placement and urgency messaging",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Peak Season Capture & Conversion Optimization",
      items: [
        "Spring campaign ramp-up in preparation for summer peak — increased budgets on high-performing destination and amenity keywords",
        "Launched retargeting campaigns for visitors who viewed properties but didn't inquire — segmented by destination and price tier",
        "Built dynamic ad creative matching seasonal demand — spring wildflower imagery for Hudson Valley, summer beach content for Hamptons, cozy cabin creative for Catskills",
        "Expanded content library with 12 additional pieces — summer activity guides, comparison content ('Catskills vs. Hudson Valley: Which New York Getaway Is Right for You?'), and booking-focused bottom-funnel content",
        "CRO improvements — streamlined booking inquiry forms, added availability calendars to landing pages, implemented instant quote functionality",
        "Negative keyword expansion removing non-converting terms — timeshare, long-term rental, real estate, and hotel-intent queries",
        "AI search optimization for LLM visibility on travel recommendation queries about New York vacation destinations",
        "Continuous AI optimization compounded daily bid adjustments, audience refinements, and budget reallocations — detecting the spring-to-summer demand shift and proactively increasing bids on peak-season terms weeks before a traditional agency would have noticed the trend",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Year-Round Revenue Optimization & Shoulder Season Strategy",
      items: [
        "Seasonal budget reallocation — aggressive spend during summer peak and holiday periods, strategic shoulder-season campaigns targeting fall foliage and spring getaways, reduced but targeted winter campaigns emphasizing ski-adjacent Catskills properties and cozy winter escapes",
        "Monthly content refresh on top-performing seasonal guides to maintain and improve rankings as each season approached",
        "Launched fall foliage campaign in August targeting early planners — captured demand 6-8 weeks before competitors ramped up seasonal content",
        "Holiday season campaign — Thanksgiving and Christmas/New Year booking promotions with family-focused messaging and multi-property group booking options",
        "Winter strategy pivot — targeted NYC-based remote workers seeking extended winter cabin stays, ski-trip planners, and holiday week bookings",
        "Review generation campaign — 47 new reviews added across Google, TripAdvisor, and direct testimonials over the engagement period",
        "Monthly reporting with full-funnel attribution from search to booking, including revenue per destination, seasonal conversion patterns, and OTA vs. direct booking ratio tracking",
        "Ongoing AI-driven bid strategy tuning matching real-time demand curves — the system learned seasonal patterns and began pre-positioning budgets ahead of demand spikes automatically",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "8,437", growth: "+7,433%", from: "from 112" },
      { label: "Top 10 Rankings", value: "743", growth: "+7,330%", from: "from 10" },
      { label: "Pages Created", value: "94", growth: "", from: "incl. 42 destination & area pages" },
      { label: "Organic Traffic", value: "19,847/mo", growth: "+5,737%", from: "from 340" },
    ],
    monthly: [
      // Month 1 (Jan 2025): Baseline — winter low season, audit underway
      { month: "Jan '25", keywords: 112, top10: 10, top3: 2, traffic: 340, pages: 8, avgPos: 47.3, ctr: 0.9 },
      // Month 2 (Feb 2025): Technical fixes, first content batch published
      { month: "Feb '25", keywords: 187, top10: 16, top3: 3, traffic: 498, pages: 22, avgPos: 44.1, ctr: 1.0 },
      // Month 3 (Mar 2025): Content indexing, spring interest picking up
      { month: "Mar '25", keywords: 341, top10: 29, top3: 5, traffic: 847, pages: 36, avgPos: 40.6, ctr: 1.1 },
      // Month 4 (Apr 2025): Hockey stick begins, spring travel searches surging
      { month: "Apr '25", keywords: 1043, top10: 87, top3: 14, traffic: 2341, pages: 48, avgPos: 35.2, ctr: 1.3 },
      // Month 5 (May 2025): Pre-summer surge, destination pages ranking well
      { month: "May '25", keywords: 2187, top10: 178, top3: 31, traffic: 5123, pages: 58, avgPos: 30.7, ctr: 1.5 },
      // Month 6 (Jun 2025): Summer peak — massive search volume for NY vacation terms
      { month: "Jun '25", keywords: 3412, top10: 289, top3: 52, traffic: 8967, pages: 66, avgPos: 27.4, ctr: 1.7 },
      // Month 7 (Jul 2025): Peak summer — highest traffic month
      { month: "Jul '25", keywords: 4298, top10: 374, top3: 71, traffic: 12438, pages: 72, avgPos: 25.1, ctr: 1.9 },
      // Month 8 (Aug 2025): Late summer, still strong seasonal demand
      { month: "Aug '25", keywords: 5187, top10: 438, top3: 89, traffic: 14213, pages: 78, avgPos: 23.6, ctr: 2.0 },
      // Month 9 (Sep 2025): Fall foliage content performing — shoulder season strength
      { month: "Sep '25", keywords: 5943, top10: 512, top3: 108, traffic: 15847, pages: 83, avgPos: 22.3, ctr: 2.1 },
      // Month 10 (Oct 2025): Peak foliage season — second traffic spike
      { month: "Oct '25", keywords: 6712, top10: 587, top3: 127, traffic: 17234, pages: 87, avgPos: 21.1, ctr: 2.2 },
      // Month 11 (Nov 2025): Holiday planning searches strong
      { month: "Nov '25", keywords: 7584, top10: 663, top3: 143, traffic: 18412, pages: 91, avgPos: 20.4, ctr: 2.3 },
      // Month 12 (Dec 2025): Year-end, strong holiday booking searches
      { month: "Dec '25", keywords: 8437, top10: 743, top3: 158, traffic: 19847, pages: 94, avgPos: 19.8, ctr: 2.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$93.6K" },
      { label: "Total Leads (Calls + Forms)", value: "1,147" },
      { label: "Qualified Leads", value: "467" },
      { label: "Avg CPQL", value: "$200", note: "↓41% from $278 to $164 by Month 12" },
    ],
    columnLabels: {
      leads: "Total Inquiries",
      cpl: "Cost/Inquiry",
      qualified: "Qualified Leads",
      cpql: "CPQL",
      deals: "Bookings",
    },
    monthly: [
      // Month 1 (Jan 2025): Winter low — minimum spend, low demand
      // spend=6000, leads=58, cpl=103.45, qual=21, cpql=285.71, deals=4, rev=12800 (4×3200), roas=2.13
      { month: "Jan '25", spend: 6000, leads: 58, cpl: 103.45, qualified: 21, cpql: 285.71, deals: 4, revenue: 12800, roas: 2.13 },
      // Month 2 (Feb 2025): Still winter, slightly better
      // spend=6000, leads=62, cpl=96.77, qual=23, cpql=260.87, deals=4, rev=13400 (4×3350), roas=2.23
      { month: "Feb '25", spend: 6000, leads: 62, cpl: 96.77, qualified: 23, cpql: 260.87, deals: 4, revenue: 13400, roas: 2.23 },
      // Month 3 (Mar 2025): Spring interest picking up
      // spend=6200, leads=71, cpl=87.32, qual=28, cpql=221.43, deals=5, rev=16250 (5×3250), roas=2.62
      { month: "Mar '25", spend: 6200, leads: 71, cpl: 87.32, qualified: 28, cpql: 221.43, deals: 5, revenue: 16250, roas: 2.62 },
      // Month 4 (Apr 2025): Spring travel searches heating up
      // spend=7100, leads=84, cpl=84.52, qual=34, cpql=208.82, deals=6, rev=19800 (6×3300), roas=2.79
      { month: "Apr '25", spend: 7100, leads: 84, cpl: 84.52, qualified: 34, cpql: 208.82, deals: 6, revenue: 19800, roas: 2.79 },
      // Month 5 (May 2025): Pre-summer surge — ramping budget
      // spend=8400, leads=103, cpl=81.55, qual=43, cpql=195.35, deals=8, rev=27200 (8×3400), roas=3.24
      { month: "May '25", spend: 8400, leads: 103, cpl: 81.55, qualified: 43, cpql: 195.35, deals: 8, revenue: 27200, roas: 3.24 },
      // Month 6 (Jun 2025): Summer peak begins — max budget
      // spend=10200, leads=127, cpl=80.31, qual=54, cpql=188.89, deals=10, rev=35000 (10×3500), roas=3.43
      { month: "Jun '25", spend: 10200, leads: 127, cpl: 80.31, qualified: 54, cpql: 188.89, deals: 10, revenue: 35000, roas: 3.43 },
      // Month 7 (Jul 2025): Peak summer — highest demand, premium pricing
      // spend=10800, leads=138, cpl=78.26, qual=59, cpql=183.05, deals=11, rev=39600 (11×3600), roas=3.67
      { month: "Jul '25", spend: 10800, leads: 138, cpl: 78.26, qualified: 59, cpql: 183.05, deals: 11, revenue: 39600, roas: 3.67 },
      // Month 8 (Aug 2025): Late summer — still strong
      // spend=9800, leads=129, cpl=75.97, qual=55, cpql=178.18, deals=10, rev=34500 (10×3450), roas=3.52
      { month: "Aug '25", spend: 9800, leads: 129, cpl: 75.97, qualified: 55, cpql: 178.18, deals: 10, revenue: 34500, roas: 3.52 },
      // Month 9 (Sep 2025): Fall shoulder — foliage demand
      // spend=7800, leads=98, cpl=79.59, qual=41, cpql=190.24, deals=7, rev=23100 (7×3300), roas=2.96
      { month: "Sep '25", spend: 7800, leads: 98, cpl: 79.59, qualified: 41, cpql: 190.24, deals: 7, revenue: 23100, roas: 2.96 },
      // Month 10 (Oct 2025): Peak foliage — second demand spike
      // spend=8200, leads=107, cpl=76.64, qual=46, cpql=178.26, deals=8, rev=27200 (8×3400), roas=3.32
      { month: "Oct '25", spend: 8200, leads: 107, cpl: 76.64, qualified: 46, cpql: 178.26, deals: 8, revenue: 27200, roas: 3.32 },
      // Month 11 (Nov 2025): Holiday bookings — Thanksgiving demand
      // spend=7100, leads=87, cpl=81.61, qual=35, cpql=202.86, deals=6, rev=20400 (6×3400), roas=2.87
      { month: "Nov '25", spend: 7100, leads: 87, cpl: 81.61, qualified: 35, cpql: 202.86, deals: 6, revenue: 20400, roas: 2.87 },
      // Month 12 (Dec 2025): Holiday peak — Christmas/NYE bookings, premium rates
      // spend=6000, leads: 83, cpl=72.29, qual=28, cpql=214.29, deals=5, rev=17500 (5×3500), roas=2.92
      { month: "Dec '25", spend: 6000, leads: 83, cpl: 72.29, qualified: 28, cpql: 214.29, deals: 5, revenue: 17500, roas: 2.92 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "4,187/mo", growth: "+387%", from: "from 859" },
      { label: "Maps Impressions", value: "3,247/mo", growth: "+412%", from: "from 634" },
      { label: "GBP Calls (Total)", value: "487", growth: "+334%", from: "14/mo → 61/mo" },
      { label: "Direction Requests", value: "78/mo", growth: "+290%", from: "from 20" },
    ],
    monthly: [
      { month: "Jan '25", gbpViews: 859, mapsImpressions: 634, gbpCalls: 14, directionRequests: 20 },
      { month: "Feb '25", gbpViews: 943, mapsImpressions: 712, gbpCalls: 17, directionRequests: 22 },
      { month: "Mar '25", gbpViews: 1187, mapsImpressions: 867, gbpCalls: 21, directionRequests: 27 },
      { month: "Apr '25", gbpViews: 1534, mapsImpressions: 1123, gbpCalls: 28, directionRequests: 34 },
      { month: "May '25", gbpViews: 2143, mapsImpressions: 1587, gbpCalls: 37, directionRequests: 43 },
      { month: "Jun '25", gbpViews: 2867, mapsImpressions: 2134, gbpCalls: 47, directionRequests: 56 },
      { month: "Jul '25", gbpViews: 3412, mapsImpressions: 2567, gbpCalls: 54, directionRequests: 64 },
      { month: "Aug '25", gbpViews: 3187, mapsImpressions: 2389, gbpCalls: 51, directionRequests: 61 },
      { month: "Sep '25", gbpViews: 2943, mapsImpressions: 2198, gbpCalls: 46, directionRequests: 57 },
      { month: "Oct '25", gbpViews: 3234, mapsImpressions: 2412, gbpCalls: 52, directionRequests: 63 },
      { month: "Nov '25", gbpViews: 3687, mapsImpressions: 2789, gbpCalls: 56, directionRequests: 68 },
      { month: "Dec '25", gbpViews: 4187, mapsImpressions: 3247, gbpCalls: 61, directionRequests: 78 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "412", growth: "+743%", note: "5/mo → 58/mo" },
      { label: "Phone Calls", value: "237", growth: "+712%", note: "3/mo → 34/mo" },
      { label: "Form Submissions", value: "175", growth: "+788%", note: "2/mo → 24/mo" },
      { label: "Avg Conversion Rate", value: "2.87%", note: "from organic traffic" },
    ],
    monthly: [
      { month: "Jan '25", formFills: 2, calls: 3, totalLeads: 5, conversionRate: 1.47 },
      { month: "Feb '25", formFills: 3, calls: 4, totalLeads: 7, conversionRate: 1.41 },
      { month: "Mar '25", formFills: 5, calls: 7, totalLeads: 12, conversionRate: 1.42 },
      { month: "Apr '25", formFills: 8, calls: 12, totalLeads: 20, conversionRate: 0.85 },
      { month: "May '25", formFills: 12, calls: 17, totalLeads: 29, conversionRate: 0.57 },
      { month: "Jun '25", formFills: 17, calls: 24, totalLeads: 41, conversionRate: 0.46 },
      { month: "Jul '25", formFills: 21, calls: 29, totalLeads: 50, conversionRate: 0.40 },
      { month: "Aug '25", formFills: 19, calls: 27, totalLeads: 46, conversionRate: 0.32 },
      { month: "Sep '25", formFills: 17, calls: 25, totalLeads: 42, conversionRate: 0.27 },
      { month: "Oct '25", formFills: 19, calls: 28, totalLeads: 47, conversionRate: 0.27 },
      { month: "Nov '25", formFills: 21, calls: 30, totalLeads: 51, conversionRate: 0.28 },
      { month: "Dec '25", formFills: 24, calls: 34, totalLeads: 58, conversionRate: 0.29 },
    ],
    sources: [
      { source: "Organic Search", percentage: 56, leads: 231 },
      { source: "Google Maps / GBP", percentage: 29, leads: 119 },
      { source: "Direct (Branded)", percentage: 15, leads: 62 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$286.8K", growth: "from paid campaigns" },
    { label: "Blended ROAS", value: "3.06x", growth: "across all 12 months" },
    { label: "CPQL Reduction", value: "$286 → $164", growth: "↓43%" },
    { label: "Monthly Bookings", value: "4 → 11", growth: "+175%" },
  ],
};
