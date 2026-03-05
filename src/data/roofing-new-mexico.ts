import { CaseStudyData } from "./types";

export const roofingNewMexico: CaseStudyData = {
  slug: "roofing-new-mexico",
  industry: "Roofing",
  headline: "How a New Mexico Roofing Company Cut Cost Per Lead 31% While Pushing Qualification Rates to 69%",
  subheadline: "MEGA helped a residential and commercial roofing company in Albuquerque, New Mexico refine their paid advertising from high-volume, low-quality leads to a qualification-first system — dropping cost per lead to $130, achieving a 69% qualification rate, and generating $164K in attributed revenue over 4 months.",
  heroStats: [
    { value: "4", unit: "months", label: "Partnership Duration" },
    { value: "69", unit: "%", label: "Qualification Rate" },
    { value: "$164", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["Paid Advertising", "Lead Quality Optimization", "Local Service Marketing"],
  company: {
    industry: "Roofing",
    employees: "24",
    revenue: "$3.6M",
    location: "Albuquerque, New Mexico",
    description: "A residential and commercial roofing company based in Albuquerque, New Mexico serving the greater metro area including Rio Rancho, Los Lunas, and Bernalillo County. Founded 11 years ago, the company specializes in flat roof systems, tile roofing, TPO commercial installations, and storm damage repair — all critical in New Mexico's high desert climate where intense UV exposure, monsoon hail events, and extreme temperature swings between day and night accelerate roof degradation. The company had been running paid advertising for two years but was drowning in unqualified leads — price shoppers, out-of-area inquiries, and homeowners looking for handyman-level patch jobs rather than full roof replacements or commercial contracts. Their existing campaigns generated volume but lacked any system to filter lead quality, and the owner estimated fewer than one in three leads were worth pursuing.",
  },
  challenges: [
    {
      title: "High Lead Volume With Abysmal Qualification Rates",
      description: "The company's paid campaigns were generating 50+ leads per month, but internal tracking showed fewer than 35% were genuinely qualified — meaning they were property owners in the service area with a legitimate roofing need and budget for professional work. The remaining 65%+ were a mix of renters calling about landlord properties, out-of-area inquiries from Santa Fe and Las Cruces, homeowners wanting $200 patch jobs on a $15,000 roof, and spam form submissions. The sales team was spending more time filtering bad leads than closing good ones, and morale was dropping as close rates cratered despite high lead counts.",
    },
    {
      title: "No Differentiation Between Service Types in Campaigns",
      description: "All roofing services — emergency storm damage repair, full residential re-roofs, commercial TPO installations, and routine maintenance — were lumped into a single campaign structure. This meant a homeowner searching for emergency hail damage repair after a July monsoon was seeing the same ad and landing on the same page as a commercial property manager researching TPO membrane options for a warehouse. The result was poor message-to-intent matching, low conversion rates on high-value commercial searches, and an inflated cost per lead across the board.",
    },
    {
      title: "Seasonal Budget Misalignment With New Mexico Weather Patterns",
      description: "New Mexico's roofing demand follows distinct seasonal patterns driven by weather — monsoon season (July through September) generates surge demand for storm damage repairs, while spring and fall are peak seasons for scheduled re-roofs and commercial projects before extreme summer heat makes installation difficult. The company was spending roughly the same amount each month regardless of these demand cycles, under-investing during peak storm repair season and wasting budget during slower winter months when homeowners are least likely to initiate major roofing projects.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Lead Quality Baseline",
      items: [
        "Comprehensive audit of existing paid campaigns — mapped every keyword, ad group, and landing page to actual lead quality outcomes using 90 days of historical call and form data",
        "Implemented call tracking with dynamic number insertion across all landing pages and the main website, tagging calls by source, duration, and disposition",
        "Built lead scoring framework distinguishing between property owners vs. renters, in-area vs. out-of-area, service type intent, and estimated project value based on initial inquiry details",
        "Restructured campaigns by service type and intent level — separated emergency storm damage repair, residential re-roofs, commercial TPO/flat roof, and maintenance into distinct campaign groups",
        "Created service-specific landing pages for each campaign group — emergency pages with click-to-call prominence and same-day messaging, re-roof pages with financing options and project galleries, commercial pages with portfolio and specifications",
        "Developed qualification-focused ad copy — shifted messaging from generic 'roofing services' to intent-qualifying language like 'full roof replacement,' 'licensed commercial roofing,' and 'storm damage inspection and repair'",
        "Built negative keyword foundation — excluded DIY terms, handyman searches, rental property queries, and geographic terms outside the Albuquerque metro service area",
        "Competitor analysis across the Albuquerque market — identified gaps in competitor messaging around New Mexico-specific concerns like UV degradation, flat roof ponding, and cool roof coatings",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Qualification Refinement & Campaign Segmentation",
      items: [
        "Analyzed month 1 lead quality data — identified that storm damage and full re-roof keywords were delivering 2x the qualification rate of generic 'roofing company' and 'roof repair' terms",
        "Shifted budget allocation — increased spend on high-qualification keywords and reduced investment in broad match terms that attracted price shoppers",
        "Expanded negative keyword lists based on actual unqualified lead patterns — added terms related to mobile home roofs, RV awnings, carport covers, and specific out-of-area zip codes",
        "A/B tested landing page pre-qualification elements — added service area maps, minimum project size language, and 'commercial and residential' positioning to filter out handyman-level inquiries",
        "Launched retargeting campaigns for visitors who viewed re-roof and commercial pages but didn't convert — emphasizing financing options, warranty coverage, and portfolio of completed New Mexico projects",
        "Implemented form pre-qualification fields — property type (residential/commercial), ownership status, project timeline, and approximate roof size to score leads before the sales team engages",
        "Optimized bid strategies by campaign group based on qualification rate data — bid more aggressively on emergency and commercial terms where qualified lead rates exceeded 50%",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale Qualified Volume & Revenue Attribution",
      items: [
        "Reviewed 60-day qualification data — storm damage repair campaigns reached 65% qualification rate; commercial campaigns at 58%; residential re-roof at 52%",
        "Scaled spend on highest-performing campaign groups — monsoon season alignment with increased storm damage budget as July/August hail events drove search volume",
        "CRM integration completed — full closed-loop tracking from ad click through signed contract and project completion, enabling revenue-per-lead analysis by campaign",
        "Advanced audience segmentation — built custom audiences from qualified leads and closed customers, deployed lookalike audiences weighted toward highest-value projects",
        "Creative refresh across all campaign groups — new ad variations featuring New Mexico-specific messaging around monsoon damage, UV-resistant materials, cool roof energy savings, and flat roof expertise",
        "Conversion rate optimization on landing pages — tested urgency messaging during monsoon season, before/after project galleries featuring Albuquerque properties, and trust signals including licensing and insurance details",
        "Lead response time optimization — implemented automated text confirmation and callback scheduling for after-hours form submissions to capture monsoon-driven emergency leads 24/7",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Performance Optimization & Qualification Mastery",
      items: [
        "Qualification rate across all campaigns reached 69% — a complete transformation from the sub-35% baseline, driven by systematic refinement of keywords, audiences, landing pages, and lead scoring",
        "Budget optimization based on full revenue attribution — shifted spend toward commercial and full re-roof campaigns delivering highest average contract values ($12K–$18K)",
        "Automated lead routing based on qualification score — high-score leads routed to senior estimators, medium-score leads to inside sales for additional qualification, low-score leads filtered to automated nurture sequences",
        "Seasonal forecasting model built from 4 months of New Mexico weather-correlated demand data — pre-staged budget increases for anticipated monsoon events and scheduled re-roof season",
        "Weekly performance reviews with the owner — full-funnel reporting from ad spend through qualified leads, estimates scheduled, contracts signed, and revenue closed by service type and geographic sub-market",
        "Continuous negative keyword and audience exclusion refinement — monthly audits of search term reports and lead disposition data to maintain qualification rate above 65%",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$31.8K" },
      { label: "Total Leads", value: "207", note: "Phone calls + form submissions" },
      { label: "Qualified Leads", value: "121", note: "Property owners, in-area, legitimate project" },
      { label: "Avg Cost/Qualified Lead", value: "$263", note: "↓48% from $504 baseline" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Signed Contracts",
    },
    monthly: [
      { month: "Jun 2025", spend: 7567, leads: 39, cpl: 194, qualified: 15, cpql: 504, deals: 6, revenue: 27600, roas: 3.65 },
      { month: "Jul 2025", spend: 8214, leads: 51, cpl: 161, qualified: 26, cpql: 316, deals: 11, revenue: 38500, roas: 4.69 },
      { month: "Aug 2025", spend: 8389, leads: 58, cpl: 145, qualified: 38, cpql: 221, deals: 17, revenue: 51000, roas: 6.08 },
      { month: "Sep 2025", spend: 7648, leads: 59, cpl: 130, qualified: 42, cpql: 182, deals: 19, revenue: 47500, roas: 6.21 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$164.6K", growth: "" },
    { label: "Signed Contracts", value: "53", growth: "" },
    { label: "Avg Contract Value", value: "$3,106", growth: "" },
    { label: "Blended ROAS", value: "5.17x", growth: "" },
    { label: "Qualification Rate", value: "36% → 69%", growth: "+33pts" },
    { label: "Cost/Lead", value: "$194 → $130", growth: "↓31%" },
  ],
};
