import { CaseStudyData } from "./types";

export const lawFirmMontreal: CaseStudyData = {
  slug: "law-firm-montreal",
  industry: "Legal Services",
  headline: "How a Montreal Law Firm Increased Qualified Consultations 187% With Strategic SEO & Paid Advertising",
  subheadline: "MEGA helped a bilingual Montreal law firm generate $1.27M in attributed case revenue, reduce cost per qualified lead by 37%, and grow organic traffic 312% over 12 months.",
  heroStats: [
    { value: "12", unit: "months", label: "Partnership Duration" },
    { value: "$1.27", unit: "M", label: "Revenue Attributed" },
    { value: "312", unit: "%", label: "Organic Traffic Growth" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "Local SEO"],
  company: {
    industry: "Legal Services — Personal Injury & Family Law",
    employees: "23",
    revenue: "$3.8M",
    location: "Montreal, QC (West Island & South Shore)",
    description: "A mid-size bilingual law firm serving the greater Montreal metro area with a focus on personal injury, family law, immigration, and real estate transactions. Founded 11 years ago, the firm had built a strong reputation through referrals and courtroom results — including several notable PI settlements — but was losing ground digitally to aggressive competitors running year-round paid campaigns and content strategies in both French and English. With offices in Ville-Marie and a satellite location in Brossard, the firm needed a dual-language digital strategy to capture high-intent prospects across the island of Montreal, Laval, the West Island, and the South Shore. Their goal was to grow consultation volume by at least 40% while maintaining lead quality and reducing reliance on expensive referral fees paid to third-party lead aggregators.",
  },
  challenges: [
    {
      title: "Minimal Bilingual Digital Footprint in a Competitive Market",
      description: "Despite 11 years of strong case results and a 4.7-star rating across 89 reviews, the firm ranked for just 143 keywords — almost all branded. Organic traffic averaged 287 monthly visits, with virtually no French-language content indexed despite 62% of their clientele being francophone. Competitors like major PI firms were investing $25K–$40K monthly in paid search alone, pushing this firm off page one for critical queries like 'avocat blessure corporelle Montréal' and 'personal injury lawyer Montreal.' The firm's bilingual advantage was entirely untapped online.",
    },
    {
      title: "High Cost Per Lead From Aggregator Dependency",
      description: "Nearly 34% of the firm's new client intake came through third-party legal lead aggregators charging $175–$290 per lead, with qualification rates below 22%. The firm was spending roughly $4,100/month on aggregator leads that converted to signed retainers at just 8.3%. Meanwhile, their own paid campaigns were poorly structured — a single campaign mixing personal injury, family law, and immigration keywords — resulting in a blended cost per qualified lead of $247 and an irrelevant click rate above 38%. Budget was being wasted on informational queries and mismatched practice area targeting.",
    },
    {
      title: "No Practice-Area Segmentation or Conversion Infrastructure",
      description: "The firm's website had a single 'Contact Us' page serving all practice areas, with no intake forms tailored to case type, no consultation booking system, and no call tracking. There was no way to attribute leads to specific campaigns or practice areas. Landing pages didn't exist — paid traffic was sent to the homepage. The site loaded in 6.2 seconds on mobile, had no schema markup, and lacked French-language URL structures. Conversion rate from paid traffic was 1.7%, roughly half the industry benchmark for legal services in Canada.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Comprehensive site audit — crawlability, Core Web Vitals, mobile performance, bilingual URL structure assessment, and local SEO baseline across Montreal, Laval, West Island, and South Shore",
        "Google Business Profile optimization for both locations — practice area categories, bilingual descriptions, updated photos of offices and team, Q&A population in French and English",
        "Competitor analysis across top 14 Montreal law firms in personal injury, family law, and immigration — ad spend estimates, keyword gaps, content strategy mapping",
        "Bilingual keyword research targeting 'avocat/lawyer' variations across all practice areas and Montreal sub-regions — 847 target keywords identified",
        "Generated 11 initial articles — bilingual content covering PI claim timelines in Quebec, family law process guides, immigration pathway content, and Quebec Civil Code explainers",
        "Built dedicated landing pages per practice area in both languages with tailored intake forms, consultation CTAs, and case-type-specific trust signals",
        "Technical fixes — implemented hreflang tags, fixed canonical issues, optimized images, reduced mobile load time from 6.2s to 2.1s",
        "Deployed call tracking with practice-area routing, form attribution by source and language, and consultation booking integration",
        "Local citation building — submitted to 47 directories including Pages Jaunes, Yelp, Avvo, Canadian Lawyer Magazine directory, Barreau du Québec, CCMM, and regional chambers",
        "Restructured paid campaigns into practice-area-specific ad groups with language targeting — separate French and English campaigns for PI, family, and immigration",
        "Implemented negative keyword lists — removed informational queries, DIY legal terms, and cross-practice contamination",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed first 30 days of data — adjusted keyword targeting based on early ranking signals and lead quality by practice area and language",
        "Generated 16 additional bilingual articles — Quebec-specific legal guides, statute of limitations content, child custody process, spousal support calculators, and work permit timelines",
        "Launched programmatic neighborhood service pages across 28 Montreal areas — 'avocat [Plateau / NDG / Verdun / Laval / Longueuil / Dorval / Pointe-Claire]' in both languages",
        "Optimized internal linking structure to build topical authority clusters around each practice area separately",
        "Added structured data — legal service schema, FAQ schema, attorney profile schema, and review markup for both GBP locations",
        "Bi-weekly GBP posts featuring case results (anonymized), client testimonials, and community involvement in French and English",
        "Ad creative testing — empathy-driven messaging vs. results-driven messaging by practice area; French creative outperformed English by 23% in PI",
        "Launched retargeting campaigns segmented by practice area intent based on page visits and form abandonment",
        "Negative keyword expansion — removed competitor branded terms, legal education queries, and bar exam content consuming budget",
        "Local backlink outreach — Journal de Montréal legal column, Montreal Gazette, Quebec Bar Association publications, local community organizations",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 60-day data — expanded programmatic pages to North Shore communities and additional South Shore municipalities",
        "Generated 13 additional service-specific pages targeting niche practice areas — wrongful dismissal, landlord-tenant disputes, notarial services, and medical malpractice",
        "Backlink campaigns via Quebec legal publications, guest posts on Canadian immigration blogs, and local business association partnerships",
        "Local citation audit — removed 23 duplicate listings, corrected NAP inconsistencies across directories",
        "CRO sprint — added live chat in French/English, improved mobile form UX, added social proof banners with anonymized settlement amounts, implemented exit-intent consultation offers",
        "Keyword cannibalization cleanup across overlapping French/English terms and practice area crossover content",
        "Expanded paid campaigns to target underserved practice areas showing organic traction — immigration consultations up 67% from content alone",
        "Audience refinement — layered demographic and geographic targeting based on case value data by neighborhood and practice area",
        "AI search optimization — structured content for featured snippets and LLM-friendly answers to common Quebec legal questions",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Seasonal budget reallocation — increased spend during January (New Year divorce filings), September (back-to-school custody disputes), and spring (construction injury season)",
        "Expansion of neighborhood pages to cover Gatineau, Trois-Rivières, and Sherbrooke for immigration practice area only",
        "Referral pipeline development — email nurture sequences for past clients and professional referral partners (doctors, accountants, real estate agents)",
        "Monthly content refresh cycles on top-performing bilingual articles to maintain and improve rankings against aggressive competitors",
        "GBP review generation campaign — 63 new reviews added over 6 months, maintaining 4.8-star average",
        "Weekly reporting with full-funnel attribution from click to signed retainer, segmented by practice area, language, and geography",
        "Ongoing backlink acquisition through community involvement, pro bono case publicity, and Quebec legal community partnerships",
        "Bid strategy optimization based on seasonal demand curves, case value by practice area, and day-of-week conversion patterns",
        "Gradual reduction of aggregator dependency — third-party lead spend decreased from $4,100/mo to $1,200/mo as owned channels scaled",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,487", growth: "+940%", from: "from 143" },
      { label: "Top 10 Rankings", value: "167", growth: "+1,191%", from: "from 13" },
      { label: "Pages Created", value: "112", growth: "", from: "incl. 56 bilingual neighborhood pages" },
      { label: "Organic Traffic", value: "1,183/mo", growth: "+312%", from: "from 287" },
    ],
    monthly: [
      // Month 1: Baseline — inherited site, audit underway, mid-winter Montreal
      { month: "Jan 2025", keywords: 143, top10: 13, top3: 1, traffic: 287, pages: 11, avgPos: 48.3, ctr: 0.8 },
      // Month 2: Technical fixes live, first bilingual content batch, GBP optimized
      { month: "Feb 2025", keywords: 198, top10: 18, top3: 2, traffic: 321, pages: 27, avgPos: 44.7, ctr: 0.9 },
      // Month 3: Content indexing, neighborhood pages launching, spring starting
      { month: "Mar 2025", keywords: 289, top10: 27, top3: 3, traffic: 398, pages: 43, avgPos: 41.2, ctr: 1.0 },
      // Month 4: Spring — PI season starting (construction), immigration uptick
      { month: "Apr 2025", keywords: 394, top10: 39, top3: 5, traffic: 487, pages: 55, avgPos: 38.1, ctr: 1.1 },
      // Month 5: Strong spring — bilingual pages gaining traction, long-tail breaking through
      { month: "May 2025", keywords: 512, top10: 53, top3: 7, traffic: 578, pages: 64, avgPos: 35.4, ctr: 1.2 },
      // Month 6: Summer — slight seasonal softening for family law, PI strong
      { month: "Jun 2025", keywords: 634, top10: 67, top3: 9, traffic: 651, pages: 72, avgPos: 33.1, ctr: 1.3 },
      // Month 7: Mid-summer — authority building, French content compounding
      { month: "Jul 2025", keywords: 748, top10: 79, top3: 11, traffic: 723, pages: 79, avgPos: 31.2, ctr: 1.3 },
      // Month 8: Late summer — consistent gains, backlink campaigns paying off
      { month: "Aug 2025", keywords: 867, top10: 93, top3: 14, traffic: 801, pages: 86, avgPos: 29.4, ctr: 1.4 },
      // Month 9: September — custody/family law surge, strong organic pipeline
      { month: "Sep 2025", keywords: 987, top10: 109, top3: 17, traffic: 894, pages: 93, avgPos: 27.8, ctr: 1.5 },
      // Month 10: Fall — compound gains across all practice areas
      { month: "Oct 2025", keywords: 1098, top10: 124, top3: 20, traffic: 967, pages: 100, avgPos: 26.3, ctr: 1.6 },
      // Month 11: Late fall — strong authority, PI and immigration terms dominating
      { month: "Nov 2025", keywords: 1287, top10: 146, top3: 23, traffic: 1078, pages: 106, avgPos: 25.1, ctr: 1.7 },
      // Month 12: Year-end — peak authority, bilingual dominance established
      { month: "Dec 2025", keywords: 1487, top10: 167, top3: 27, traffic: 1183, pages: 112, avgPos: 23.7, ctr: 1.8 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$118.4K" },
      { label: "Qualified Leads", value: "761" },
      { label: "Avg Cost Per Qualified Lead", value: "$156", note: "↓37% from $247" },
      { label: "Signed Retainers", value: "89", note: "avg case value $14.3K" },
    ],
    columnLabels: {
      leads: "Consultations",
      cpl: "Cost/Visit",
      qualified: "Qualified Leads",
      cpql: "Cost Per Lead",
      deals: "Retainers",
    },
    monthly: [
      // Jan 2025: Winter, restructuring campaigns, family law spike (New Year divorces)
      { month: "Jan 2025", spend: 9847, leads: 134, cpl: 73, qualified: 43, cpql: 229, deals: 4, revenue: 51234, roas: 5.20 },
      // Feb 2025: Restructured campaigns live, still winter but PI inquiries starting
      { month: "Feb 2025", spend: 9234, leads: 141, cpl: 65, qualified: 51, cpql: 181, deals: 5, revenue: 63478, roas: 6.87 },
      // Mar 2025: Spring — construction season starting, PI volume climbing
      { month: "Mar 2025", spend: 10123, leads: 168, cpl: 60, qualified: 67, cpql: 151, deals: 7, revenue: 89734, roas: 8.87 },
      // Apr 2025: Strong spring — PI and immigration both surging
      { month: "Apr 2025", spend: 10467, leads: 187, cpl: 56, qualified: 78, cpql: 134, deals: 9, revenue: 118247, roas: 11.30 },
      // May 2025: Peak spring — highest lead volume, landing pages optimized
      { month: "May 2025", spend: 10734, leads: 193, cpl: 56, qualified: 82, cpql: 131, deals: 10, revenue: 134567, roas: 12.54 },
      // Jun 2025: Early summer — sustained volume, family law settling seasonally
      { month: "Jun 2025", spend: 10287, leads: 178, cpl: 58, qualified: 73, cpql: 141, deals: 8, revenue: 107823, roas: 10.48 },
      // Jul 2025: Summer — vacation period, slight dip, PI still strong from construction
      { month: "Jul 2025", spend: 9567, leads: 152, cpl: 63, qualified: 59, cpql: 162, deals: 7, revenue: 89134, roas: 9.32 },
      // Aug 2025: Late summer — pre-September family law buildup starting
      { month: "Aug 2025", spend: 9347, leads: 147, cpl: 64, qualified: 56, cpql: 167, deals: 6, revenue: 78923, roas: 8.44 },
      // Sep 2025: September surge — back-to-school custody, fall PI cases
      { month: "Sep 2025", spend: 10478, leads: 181, cpl: 58, qualified: 76, cpql: 138, deals: 9, revenue: 121467, roas: 11.59 },
      // Oct 2025: Fall — strong across all practice areas
      { month: "Oct 2025", spend: 10123, leads: 173, cpl: 59, qualified: 71, cpql: 143, deals: 8, revenue: 109234, roas: 10.79 },
      // Nov 2025: Late fall — immigration surge (year-end applications), PI wrapping up
      { month: "Nov 2025", spend: 9623, leads: 159, cpl: 61, qualified: 62, cpql: 155, deals: 9, revenue: 118934, roas: 12.36 },
      // Dec 2025: Winter — holiday slowdown but family law inquiries climbing
      { month: "Dec 2025", spend: 8547, leads: 128, cpl: 67, qualified: 43, cpql: 199, deals: 7, revenue: 87423, roas: 10.23 },
    ],
  },
  localSeo: {
    summary: [
      { label: "GBP Views", value: "4,823/mo", growth: "+341%", from: "from 1,093" },
      { label: "Maps Impressions", value: "3,567/mo", growth: "+318%", from: "from 853" },
      { label: "GBP Calls (Total)", value: "684", growth: "+347%", from: "from 16/mo → 72/mo" },
      { label: "Direction Requests", value: "87/mo", growth: "+284%", from: "from 23" },
    ],
    monthly: [
      { month: "Jan 2025", gbpViews: 1093, mapsImpressions: 853, gbpCalls: 16, directionRequests: 23 },
      { month: "Feb 2025", gbpViews: 1287, mapsImpressions: 987, gbpCalls: 19, directionRequests: 27 },
      { month: "Mar 2025", gbpViews: 1534, mapsImpressions: 1178, gbpCalls: 24, directionRequests: 33 },
      { month: "Apr 2025", gbpViews: 1923, mapsImpressions: 1467, gbpCalls: 31, directionRequests: 41 },
      { month: "May 2025", gbpViews: 2347, mapsImpressions: 1789, gbpCalls: 38, directionRequests: 49 },
      { month: "Jun 2025", gbpViews: 2789, mapsImpressions: 2123, gbpCalls: 44, directionRequests: 56 },
      { month: "Jul 2025", gbpViews: 3134, mapsImpressions: 2398, gbpCalls: 49, directionRequests: 62 },
      { month: "Aug 2025", gbpViews: 3498, mapsImpressions: 2687, gbpCalls: 54, directionRequests: 68 },
      { month: "Sep 2025", gbpViews: 3912, mapsImpressions: 2987, gbpCalls: 61, directionRequests: 74 },
      { month: "Oct 2025", gbpViews: 4234, mapsImpressions: 3198, gbpCalls: 66, directionRequests: 79 },
      { month: "Nov 2025", gbpViews: 4567, mapsImpressions: 3389, gbpCalls: 70, directionRequests: 83 },
      { month: "Dec 2025", gbpViews: 4823, mapsImpressions: 3567, gbpCalls: 72, directionRequests: 87 },
    ],
  },
  organicConversions: {
    summary: [
      { label: "Total Organic Leads", value: "412", growth: "+467%", note: "6/mo → 54/mo" },
      { label: "Phone Calls", value: "247", growth: "+443%", note: "4/mo → 32/mo" },
      { label: "Form Submissions", value: "165", growth: "+500%", note: "2/mo → 22/mo" },
      { label: "Avg Conversion Rate", value: "3.94%", note: "from organic traffic" },
    ],
    columnLabels: {
      formFills: "Form Submissions",
      calls: "Phone Calls",
      totalLeads: "Total Leads",
      conversionRate: "Conv. Rate",
    },
    monthly: [
      { month: "Jan 2025", formFills: 2, calls: 4, totalLeads: 6, conversionRate: 2.09 },
      { month: "Feb 2025", formFills: 4, calls: 5, totalLeads: 9, conversionRate: 2.80 },
      { month: "Mar 2025", formFills: 6, calls: 8, totalLeads: 14, conversionRate: 3.52 },
      { month: "Apr 2025", formFills: 8, calls: 12, totalLeads: 20, conversionRate: 4.11 },
      { month: "May 2025", formFills: 11, calls: 16, totalLeads: 27, conversionRate: 4.67 },
      { month: "Jun 2025", formFills: 13, calls: 19, totalLeads: 32, conversionRate: 4.92 },
      { month: "Jul 2025", formFills: 14, calls: 21, totalLeads: 35, conversionRate: 4.84 },
      { month: "Aug 2025", formFills: 16, calls: 24, totalLeads: 40, conversionRate: 4.99 },
      { month: "Sep 2025", formFills: 19, calls: 28, totalLeads: 47, conversionRate: 5.26 },
      { month: "Oct 2025", formFills: 20, calls: 29, totalLeads: 49, conversionRate: 5.07 },
      { month: "Nov 2025", formFills: 21, calls: 30, totalLeads: 51, conversionRate: 4.73 },
      { month: "Dec 2025", formFills: 22, calls: 32, totalLeads: 54, conversionRate: 4.56 },
    ],
    sources: [
      { source: "Organic Search", percentage: 51, leads: 210 },
      { source: "Google Maps / GBP", percentage: 36, leads: 148 },
      { source: "Direct (Branded)", percentage: 13, leads: 54 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1.27M", growth: "+187%" },
    { label: "Signed Retainers", value: "89", growth: "+156%" },
    { label: "Cost Per Qualified Lead", value: "$156", growth: "↓37%" },
    { label: "Blended ROAS", value: "5.18x", growth: "" },
  ],
};
