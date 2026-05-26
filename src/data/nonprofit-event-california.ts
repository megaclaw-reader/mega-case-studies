import { CaseStudyData } from "./types";

export const nonprofitEventCalifornia: CaseStudyData = {
  slug: 'nonprofit-event-california',
  industry: 'Non-Profit Organization / Event',

  // Hero Section
  headline: "How a California Non-Profit Event Organization Grew Organic Traffic by 11,400% and Drove $312K in Event Registrations Through SEO",
  subheadline: "A 13-month SEO transformation that turned a nearly invisible community events organization into California's go-to resource for charity galas, fundraising runs, and community giving — all without a dollar in paid advertising.",

  heroStats: [
    { value: "11,400", unit: "%", label: "Organic Traffic Growth" },
    { value: "$312.1", unit: "K", label: "Event Revenue Generated" },
    { value: "9,847", unit: "", label: "Keywords Ranked" },
    { value: "24,738", unit: "/mo", label: "Peak Monthly Traffic" },
  ],

  tags: ["SEO", "Non-Profit", "Events", "California", "Local"],

  company: {
    industry: "Non-Profit Organization / Event",
    employees: "8-12",
    revenue: "$480K (annual — event registrations, donations, sponsorships)",
    location: "Los Angeles, California",
    description: "A Southern California non-profit dedicated to organizing community fundraising events — including charity galas, 5K runs, food drives, and volunteer coordination campaigns across Los Angeles and surrounding counties. Founded in 2019, the organization partners with local businesses and civic groups to raise funds for underserved communities, housing programs, and youth development initiatives."
  },

  // Challenges
  challenges: [
    {
      title: "Virtually No Online Visibility",
      description: "The organization's website attracted fewer than 215 organic visitors per month, with almost no rankings for relevant California charity event and fundraising search terms — leaving them entirely dependent on word-of-mouth and social media for event promotion."
    },
    {
      title: "Event Registration Shortfalls",
      description: "Key fundraising events were consistently falling 30-40% short of registration targets, directly impacting donation revenue and sponsor confidence. Without organic search presence, they relied on email blasts to the same shrinking list."
    },
    {
      title: "No Systematic Content or SEO Strategy",
      description: "The website had 11 static pages with no blog, no event landing pages optimized for search, and no local SEO presence — meaning potential supporters searching for volunteer opportunities or charity events in California never found them."
    },
    {
      title: "Seasonal Funding Gaps",
      description: "Over 55% of annual revenue came from two holiday-season galas, creating cash flow crises in Q1 and Q2. The organization needed year-round event visibility to smooth out revenue and sustain operations."
    }
  ],

  // Strategy
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Technical Foundation & Content Infrastructure",
      items: [
        "Comprehensive technical SEO audit — fixed crawl errors, improved site speed from 4.2s to 1.8s load time, and restructured URL hierarchy for California event and charity search terms",
        "Keyword research identifying 180+ high-intent terms around California charity events, fundraising galas, community volunteer opportunities, and donation-driven event planning",
        "Built dedicated landing pages for each event type (charity runs, galas, food drives, volunteer days) optimized for Los Angeles and Southern California search queries",
        "Implemented schema markup for events (Event structured data) to capture rich snippets in search results and improve click-through rates",
        "Created foundational blog content calendar with 12 articles addressing California giving guides, volunteer resources, and community event planning tips",
        "Deployed AI-driven SEO optimization agents to continuously monitor keyword rankings, identify content gaps, and prioritize high-impact opportunities — replacing the typical monthly agency review cycle with real-time adjustments"
      ]
    },
    {
      phase: 2,
      months: "30–120 days",
      title: "Content Scaling & Local Authority Building",
      items: [
        "Aggressive content production: published 6-8 articles per month covering neighborhood-specific charity guides, sponsor spotlights, and post-event impact reports",
        "Launched location-specific landing pages for 14 California counties and major cities — capturing searches like 'charity events near [city]' and 'volunteer opportunities in [neighborhood]'",
        "Built partnerships with local media outlets and community organizations, earning 23 backlinks from California-based .org and .edu domains",
        "Optimized Google Business Profile with event photos, impact statistics, and regular posts to dominate local pack results for charity and nonprofit searches",
        "AI content optimization tools identified trending search patterns around seasonal giving, allowing the team to publish timely content weeks ahead of competitors — capitalizing on search demand before it peaked",
        "Developed donor resource hub with guides on tax-deductible giving in California, corporate sponsorship benefits, and volunteer hour tracking"
      ]
    },
    {
      phase: 3,
      months: "120+ days",
      title: "Authority Consolidation & Year-Round Visibility",
      items: [
        "Scaled keyword portfolio past 9,000 rankings through comprehensive topical authority covering every facet of California charitable events and community giving",
        "Created evergreen event planning resource pages that rank year-round for high-volume informational queries — driving consistent traffic even outside event seasons",
        "Launched community impact report series with data-driven content showcasing funds raised, families served, and volunteer hours — earning organic media coverage and backlinks",
        "Optimized conversion paths from organic traffic to event registration, implementing streamlined sign-up flows that increased organic visitor conversion rate from 1.2% to 3.8%",
        "AI-powered content analysis identified underperforming pages and recommended updates that recovered declining rankings within days rather than the weeks typical of manual review processes",
        "Built sustainable organic traffic engine generating 24,000+ monthly visitors — establishing the organization as the authoritative voice for California community events and charitable giving"
      ]
    }
  ],

  // SEO Section — 13 months, Mar '25 to Mar '26
  seo: {
    summary: [
      { label: "Total Keywords", value: "9,847", growth: "+8,956%", from: "from 109" },
      { label: "Top 10 Rankings", value: "743", growth: "+7,330%", from: "from 10" },
      { label: "Pages Created", value: "87", growth: "", from: "incl. 14 county-specific event pages" },
      { label: "Organic Traffic", value: "24,738/mo", growth: "+11,406%", from: "from 215" },
    ],
    monthly: [
      // Month 1 (Mar '25): Baseline — tiny site, minimal SEO, small nonprofit
      { month: "Mar '25", keywords: 109, top10: 10, top3: 2, traffic: 215, pages: 11, avgPos: 54.1, ctr: 0.7 },
      // Month 2 (Apr '25): Technical fixes live, first batch of content published
      { month: "Apr '25", keywords: 187, top10: 19, top3: 4, traffic: 412, pages: 17, avgPos: 48.3, ctr: 0.9 },
      // Month 3 (May '25): Event landing pages indexed, early traction on long-tail
      { month: "May '25", keywords: 341, top10: 38, top3: 8, traffic: 893, pages: 24, avgPos: 43.7, ctr: 1.1 },
      // Month 4 (Jun '25): Hockey stick begins — content volume kicks in
      { month: "Jun '25", keywords: 1284, top10: 97, top3: 21, traffic: 2847, pages: 33, avgPos: 37.2, ctr: 1.4 },
      // Month 5 (Jul '25): Summer event searches spike, location pages ranking
      { month: "Jul '25", keywords: 2563, top10: 178, top3: 39, traffic: 5234, pages: 42, avgPos: 32.6, ctr: 1.7 },
      // Month 6 (Aug '25): Authority building with backlinks accelerates growth
      { month: "Aug '25", keywords: 3891, top10: 271, top3: 61, traffic: 8173, pages: 51, avgPos: 28.4, ctr: 2.0 },
      // Month 7 (Sep '25): Back-to-school charity drives boost seasonal traffic
      { month: "Sep '25", keywords: 5147, top10: 362, top3: 84, traffic: 11429, pages: 58, avgPos: 25.1, ctr: 2.2 },
      // Month 8 (Oct '25): Holiday giving content starts ranking early
      { month: "Oct '25", keywords: 6238, top10: 441, top3: 107, traffic: 14856, pages: 65, avgPos: 22.8, ctr: 2.5 },
      // Month 9 (Nov '25): Peak giving season — massive search demand
      { month: "Nov '25", keywords: 7412, top10: 537, top3: 134, traffic: 19237, pages: 72, avgPos: 20.3, ctr: 2.8 },
      // Month 10 (Dec '25): Holiday gala + year-end giving — highest traffic month
      { month: "Dec '25", keywords: 8193, top10: 612, top3: 158, traffic: 23461, pages: 78, avgPos: 18.7, ctr: 3.0 },
      // Month 11 (Jan '26): Post-holiday dip but sustained baseline much higher
      { month: "Jan '26", keywords: 8674, top10: 654, top3: 171, traffic: 18934, pages: 82, avgPos: 17.9, ctr: 2.9 },
      // Month 12 (Feb '26): New year campaigns and Valentine's charity events
      { month: "Feb '26", keywords: 9241, top10: 698, top3: 189, traffic: 21387, pages: 85, avgPos: 17.2, ctr: 3.1 },
      // Month 13 (Mar '26): Anniversary — full year of compounding SEO authority
      { month: "Mar '26", keywords: 9847, top10: 743, top3: 204, traffic: 24738, pages: 87, avgPos: 16.4, ctr: 3.3 },
    ]
  },

  // NO paidAds section — this is SEO only

  // Impact Section
  impact: [
    { label: "Total Event Revenue Generated", value: "$312.1K", growth: "from organic traffic alone" },
    { label: "Event Registrations from Organic", value: "2,847", growth: "from 112 in first 3 months" },
    { label: "Organic Traffic Growth", value: "24,738/mo", growth: "from 215/mo (+11,406%)" },
    { label: "Total Keywords Ranked", value: "9,847", growth: "from 109 (+8,956%)" },
    { label: "Top 10 Rankings", value: "743", growth: "from 10 (+7,330%)" },
    { label: "Organic Conversion Rate", value: "3.8%", growth: "from 1.2%" },
  ]
};
