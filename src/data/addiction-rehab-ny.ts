import { CaseStudyData } from "./types";

export const addictionRehabNy: CaseStudyData = {
  slug: "addiction-rehab-ny",
  industry: "Addiction Treatment",
  headline: "How a New York Residential Rehab Facility Generated $362.3K in Admissions Revenue With AI-Powered Marketing",
  subheadline: "MEGA helped a residential addiction rehabilitation and detox center in New York reduce cost per qualified lead by 37%, grow organic traffic 1,247%, and drive 30 new admissions over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "1,247", unit: "%", label: "Organic Traffic Growth" },
    { value: "$362.3K", unit: "", label: "Admissions Revenue" },
  ],
  tags: ["Paid Advertising", "SEO Strategy", "Local SEO"],
  company: {
    industry: "Residential Addiction Rehabilitation and Detox",
    employees: "42",
    revenue: "$4.8M",
    location: "New York (Hudson Valley & Westchester County)",
    description: "A licensed residential addiction rehabilitation and medical detox facility serving individuals across New York State. The center offered 30-, 60-, and 90-day inpatient programs for substance use disorders including alcohol, opioids, and prescription drug dependence, along with medically supervised detoxification and dual-diagnosis treatment. They accepted most major insurance plans and had strong clinical outcomes, but their marketing was almost entirely referral-based — relying on relationships with hospitals, therapists, and alumni networks. Their website lacked location-specific landing pages, had minimal content addressing the concerns families search for during crisis moments, and their paid campaigns were running broad match keywords with no call tracking or admission attribution. They needed a systematic digital acquisition channel to supplement referral pipelines and reduce empty bed days during slower admission periods.",
  },
  challenges: [
    {
      title: "Extremely High Competition for Addiction-Related Search Terms in New York",
      description: "The New York addiction treatment market is one of the most competitive in the country, with large national treatment networks, private equity-backed facilities, and lead aggregator sites dominating paid and organic search results. Cost-per-click for terms like 'rehab near me,' 'drug rehab New York,' and 'detox center NY' regularly exceeded $85-$130. The facility's website ranked for only 127 keywords, with zero top-10 positions for high-intent admission queries. Organic traffic was just 218 visits per month — almost invisible against competitors spending six figures monthly on SEO and content.",
    },
    {
      title: "No Admission Attribution or Call Tracking Infrastructure",
      description: "The facility had no way to connect marketing spend to actual admissions. Phone calls — the primary conversion action for families in crisis — were untracked, and the intake team couldn't distinguish between marketing-generated calls and referral calls. Without closed-loop attribution, it was impossible to determine which campaigns, keywords, or landing pages were driving qualified inquiries versus general information seekers, making budget optimization guesswork rather than data-driven.",
    },
    {
      title: "Seasonal Admission Gaps and Underutilized Bed Capacity",
      description: "While January saw a surge in admission inquiries driven by post-holiday and New Year resolution patterns, the facility experienced significant drops in inquiry volume during late spring and summer months. Bed occupancy fell below 70% during these periods, representing hundreds of thousands in unrealized revenue. Their marketing spend remained flat year-round with no seasonal messaging strategy — the same generic ads ran whether someone was searching during a holiday crisis or planning long-term recovery in the spring.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Crisis-Ready Infrastructure",
      items: [
        "Full technical site audit — crawlability, site speed, mobile responsiveness, and healthcare-specific schema markup for addiction treatment facility pages",
        "Google Business Profile optimization for the facility's primary location with updated service categories, photos, insurance accepted, and treatment program details",
        "Keyword research across addiction treatment, detox, substance abuse, and recovery verticals specific to New York — mapping search intent from crisis queries ('need help now') to research queries ('best rehab in New York')",
        "Generated 14 initial articles covering New York-specific topics: insurance coverage for rehab in NY, what to expect during medical detox, family guides to intervention, and comparing inpatient vs. outpatient options",
        "Implemented call tracking with dynamic number insertion and call recording for admission attribution — every marketing-generated call tagged by source, campaign, and keyword",
        "CRM integration connecting ad clicks to intake calls to completed admissions for closed-loop revenue attribution",
        "Full audit of existing paid campaigns — paused broad match terms bleeding budget to informational queries, added extensive negative keyword lists (jobs, training, volunteer, free, DIY)",
        "Built dedicated landing pages for high-intent verticals: alcohol detox, opioid rehab, prescription drug treatment, and dual-diagnosis programs, each with New York-specific trust signals",
        "Geographic targeting refined to New York metro area, Hudson Valley, Westchester, Long Island, and northern New Jersey — areas within realistic driving distance for family visits",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget reallocation, and audience refinement — replacing the traditional weekly-review agency cadence with real-time adjustments to capture high-intent crisis searches around the clock",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Qualified Lead Refinement",
      items: [
        "Reviewed 30-day performance data and refined keyword targeting based on which search terms drove actual admission inquiries versus informational browsing",
        "Generated 18 additional articles targeting long-tail New York recovery queries — 'rehab options near Westchester,' 'addiction treatment that accepts Medicaid in NY,' 'family support groups New York'",
        "Launched location-specific service pages for key New York areas: Manhattan, Brooklyn, Queens, Westchester County, Rockland County, and Orange County",
        "Retargeting campaigns for families who visited treatment program pages but didn't call — sensitive messaging focused on 'when you're ready' rather than aggressive remarketing",
        "Keyword and negative keyword refinement based on call recording analysis — identified which queries drove qualified families versus general information seekers",
        "Landing page A/B testing focused on trust signals: accreditation badges, insurance verification CTAs, and family testimonial frameworks",
        "AI agents analyzed call patterns and identified that evening and weekend searches converted at 2.3x the rate of weekday business hours — automatically shifted bid multipliers to capture crisis-moment searches when traditional agencies would be offline",
        "Structured data implementation for treatment facility pages, FAQ content, and insurance coverage information",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Admission Pipeline Growth",
      items: [
        "Reviewed 60-day data and expanded content to address family-focused decision-making queries that drove the highest admission conversion rates",
        "Backlink campaigns via New York health publications, addiction recovery advocacy organizations, and mental health resource directories",
        "Local citation expansion to 65+ directories including healthcare-specific listings, SAMHSA treatment locator, Psychology Today, and New York State treatment facility databases",
        "Advanced audience segmentation by treatment type interest, insurance coverage signals, and geographic proximity to the facility",
        "Multi-approach bidding strategies calibrated to admission value — higher bids for longer-stay program keywords, balanced bids for detox-only queries",
        "AI agents detected the seasonal admission pattern and proactively reallocated budget to high-intent residential treatment keywords, capturing demand shifts within hours rather than the typical agency cycle of days or weeks",
        "Conversion rate optimization across all landing pages based on 60 days of call recording and admission outcome data",
        "Content refresh and expansion covering New York insurance regulations, Medicaid and Medicare treatment coverage, and seasonal recovery planning guides",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization & Seasonal Maximization",
      items: [
        "Seasonal budget reallocation — increased spend during January post-holiday surge and September back-to-reality period, maintained efficient baseline during summer with adjusted messaging around family intervention planning",
        "Audience pruning based on admission outcome data — removed segments with high call volume but low admission rates, expanded lookalike audiences built from completed admissions",
        "Expansion of programmatic content pages targeting emerging long-tail queries around specific substances, co-occurring disorders, and New York treatment regulations",
        "Continuous AI optimization compounded daily improvements — bid adjustments responding to competitor activity, audience refinements based on admission patterns, and budget reallocations happening in real time rather than waiting for weekly agency review cycles",
        "Ongoing call recording analysis to refine intake team scripts and improve call-to-admission conversion rates",
        "Google Business Profile maintenance with regular posts about treatment approaches, facility updates, and recovery resources",
        "Content strategy aligned to seasonal patterns — New Year resolution content in December, holiday stress and relapse prevention content in November, summer family planning guides in spring",
        "Weekly reporting with admission attribution, cost-per-admission tracking, and revenue impact analysis by campaign and keyword cluster",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "4,891", growth: "+3,753%", from: "from 127" },
      { label: "Top 10 Rankings", value: "89", growth: "+1,013%", from: "from 8" },
      { label: "Pages Created", value: "96", growth: "", from: "incl. 34 location-specific treatment pages" },
      { label: "Organic Traffic", value: "2,937/mo", growth: "+1,247%", from: "from 218" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 127, top10: 8, top3: 2, traffic: 218, pages: 0, avgPos: 52.3, ctr: 0.7 },
      { month: "Feb '25", keywords: 289, top10: 14, top3: 4, traffic: 387, pages: 14, avgPos: 48.7, ctr: 0.9 },
      { month: "Mar '25", keywords: 478, top10: 19, top3: 6, traffic: 614, pages: 12, avgPos: 45.2, ctr: 1.1 },
      { month: "Apr '25", keywords: 724, top10: 27, top3: 8, traffic: 893, pages: 10, avgPos: 42.8, ctr: 1.3 },
      { month: "May '25", keywords: 1043, top10: 34, top3: 11, traffic: 1287, pages: 8, avgPos: 39.1, ctr: 1.5 },
      { month: "Jun '25", keywords: 1389, top10: 42, top3: 14, traffic: 1654, pages: 9, avgPos: 36.4, ctr: 1.7 },
      { month: "Jul '25", keywords: 1782, top10: 48, top3: 17, traffic: 1893, pages: 7, avgPos: 34.1, ctr: 1.9 },
      { month: "Aug '25", keywords: 2198, top10: 55, top3: 20, traffic: 2147, pages: 8, avgPos: 31.6, ctr: 2.1 },
      { month: "Sep '25", keywords: 2743, top10: 63, top3: 24, traffic: 2489, pages: 9, avgPos: 28.9, ctr: 2.3 },
      { month: "Oct '25", keywords: 3287, top10: 71, top3: 28, traffic: 2734, pages: 7, avgPos: 26.3, ctr: 2.4 },
      { month: "Nov '25", keywords: 3948, top10: 79, top3: 32, traffic: 2891, pages: 6, avgPos: 23.7, ctr: 2.6 },
      { month: "Dec '25", keywords: 4891, top10: 89, top3: 37, traffic: 2937, pages: 6, avgPos: 21.2, ctr: 2.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$82.7K" },
      { label: "Qualified Leads", value: "221" },
      { label: "Avg Cost Per Qualified Lead", value: "$374", note: "↓37% from $534" },
      { label: "New Admissions", value: "30" },
    ],
    monthly: [
      // Month 1 (Jan): Post-holiday surge — highest intent period, inheriting unoptimized campaigns
      { month: "Jan '25", spend: 8547, leads: 46, cpl: 185.80, qualified: 16, cpql: 534.19, deals: 2, revenue: 37000, roas: 4.33 },
      // Month 2 (Feb): Campaign restructure live, January urgency fading
      { month: "Feb '25", spend: 6218, leads: 34, cpl: 182.88, qualified: 14, cpql: 444.14, deals: 2, revenue: 27500, roas: 4.42 },
      // Month 3 (Mar): Optimization taking hold, spring search moderate
      { month: "Mar '25", spend: 6074, leads: 35, cpl: 173.54, qualified: 15, cpql: 404.93, deals: 2, revenue: 24760, roas: 4.08 },
      // Month 4 (Apr): Stable performance, spring referral season supplementing
      { month: "Apr '25", spend: 6312, leads: 37, cpl: 170.59, qualified: 16, cpql: 394.50, deals: 2, revenue: 28500, roas: 4.52 },
      // Month 5 (May): Summer approaching, slightly lower urgency in searches
      { month: "May '25", spend: 6089, leads: 36, cpl: 169.14, qualified: 16, cpql: 380.56, deals: 2, revenue: 23780, roas: 3.91 },
      // Month 6 (Jun): Summer lull — shifted to family intervention planning messaging
      { month: "Jun '25", spend: 6143, leads: 38, cpl: 161.66, qualified: 17, cpql: 361.35, deals: 2, revenue: 25300, roas: 4.12 },
      // Month 7 (Jul): Optimizations compounding, converting at higher rate despite summer
      { month: "Jul '25", spend: 6271, leads: 40, cpl: 156.78, qualified: 18, cpql: 348.39, deals: 3, revenue: 28290, roas: 4.51 },
      // Month 8 (Aug): Late summer, families making fall treatment decisions
      { month: "Aug '25", spend: 6508, leads: 42, cpl: 154.95, qualified: 19, cpql: 342.53, deals: 3, revenue: 29610, roas: 4.55 },
      // Month 9 (Sep): Fall pickup — back-to-reality searches increasing
      { month: "Sep '25", spend: 7184, leads: 46, cpl: 156.17, qualified: 21, cpql: 342.10, deals: 3, revenue: 31620, roas: 4.40 },
      // Month 10 (Oct): Strong fall — families planning intervention before holidays
      { month: "Oct '25", spend: 7423, leads: 48, cpl: 154.65, qualified: 22, cpql: 337.41, deals: 3, revenue: 33810, roas: 4.55 },
      // Month 11 (Nov): Pre-holiday urgency — intervention planning peaks
      { month: "Nov '25", spend: 7891, leads: 51, cpl: 154.73, qualified: 23, cpql: 343.09, deals: 3, revenue: 35040, roas: 4.44 },
      // Month 12 (Dec): Holiday crisis searches — ramped spend for January prep
      { month: "Dec '25", spend: 8073, leads: 52, cpl: 155.25, qualified: 24, cpql: 336.38, deals: 3, revenue: 37080, roas: 4.59 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$362.3K", growth: "+214%" },
    { label: "New Admissions", value: "30", growth: "from paid + organic" },
    { label: "Avg Cost Per Admission", value: "$2,758", growth: "↓41% from $4,672" },
    { label: "Blended ROAS", value: "4.38x", growth: "" },
  ],
};
