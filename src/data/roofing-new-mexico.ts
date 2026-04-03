import { CaseStudyData } from "./types";

export const roofingNewMexico: CaseStudyData = {
  slug: "roofing-new-mexico",
  industry: "Roofing",
  headline: "How a New Mexico Roofing Company Generated $595.2K in Revenue From Paid Advertising in 10 Months",
  subheadline: "MEGA helped a residential roofing contractor in New Mexico reduce their cost per qualified lead by 38% and close 44 deals worth $595.2K through AI-powered paid advertising — leveraging monsoon season demand and always-on campaign optimization.",
  heroStats: [
    { value: "10", unit: "months", label: "Partnership Duration" },
    { value: "595.2", unit: "K", label: "Revenue Attributed" },
    { value: "4.26", unit: "x", label: "Blended ROAS" },
  ],
  tags: ["Paid Advertising", "Lead Generation", "Local"],
  company: {
    industry: "Roofing",
    employees: "28",
    revenue: "$3.8M",
    location: "New Mexico",
    description: "A residential and commercial roofing contractor based in Albuquerque, New Mexico serving the greater Albuquerque metro, Rio Rancho, Santa Fe, Las Cruces, and surrounding communities across the state. Established over 14 years ago, the company specializes in roof replacements, storm damage repairs, and new construction roofing — handling everything from asphalt shingle systems to flat roof installations suited to New Mexico's arid climate. Despite a strong reputation built through word-of-mouth referrals and consistent insurance restoration work, the company had struggled to build a reliable digital lead pipeline. Their previous agency managed Google Ads campaigns with minimal oversight, producing high volumes of unqualified clicks from out-of-area searches and DIY repair queries. With New Mexico's intense monsoon season from July through September driving a massive but time-sensitive surge in storm damage repair demand, the company needed a paid advertising strategy that could scale aggressively during peak months while maintaining cost-efficient lead generation during the quieter winter and spring periods.",
  },
  challenges: [
    {
      title: "Inefficient Ad Spend With No Lead Quality Tracking",
      description: "The company was spending approximately $10,000 per month on Google Ads through a previous agency but had no visibility into which leads actually converted to signed contracts. Call tracking was nonexistent, form submissions weren't tagged by campaign, and the estimated cost per qualified lead was around $247 — well above industry benchmarks for a market like New Mexico. Roughly 40% of paid inquiries were unqualified: out-of-service-area requests, commercial projects the company didn't handle, or price shoppers looking for the cheapest patch job rather than full replacements.",
    },
    {
      title: "Monsoon Season Demand Spikes Without a Capture Strategy",
      description: "New Mexico's monsoon season (July through September) creates a massive but compressed window of storm damage repair demand. Hailstorms, high winds, and flash flooding damage hundreds of roofs across the Albuquerque and Santa Fe corridors each summer — but the previous advertising strategy treated every month the same. There was no budget surge plan, no storm-specific ad creative, and no landing pages addressing insurance claim processes or emergency tarping services. Competitors with dedicated storm response campaigns were capturing the majority of high-value insurance restoration leads during these critical months.",
    },
    {
      title: "Seasonal Revenue Valleys in Winter and Spring",
      description: "Outside of monsoon season, lead volume dropped significantly from October through May. The company relied almost entirely on referrals during these months, with paid campaigns generating inconsistent results at elevated costs. Without a strategy for shoulder-season demand — preventive maintenance, roof inspections before monsoon season, energy-efficiency upgrades, and new construction projects — the business experienced cash flow valleys that made it difficult to retain skilled roofing crews year-round.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Campaign Architecture",
      items: [
        "Complete Google Ads account audit and restructure — separated campaigns by service type (storm damage repair, full replacement, new construction, maintenance/inspection) with dedicated landing pages for each",
        "Installed call tracking with keyword-level attribution, form submission tracking, and CRM integration for closed-loop lead-to-contract reporting",
        "Built New Mexico-specific landing pages targeting Albuquerque, Rio Rancho, Santa Fe, Las Cruces, and 12 additional service areas with localized content addressing regional roofing challenges (monsoon damage, UV degradation, flat roof systems)",
        "Competitor analysis across the New Mexico roofing market — identified gaps in competitors' keyword coverage for insurance restoration, hail damage, and emergency repair terms",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for weekly agency review cycles",
        "Launched initial campaign structure with 15 AI-generated ad variations across search and local service ads, testing multiple hooks: storm damage urgency, free inspection offers, insurance claim assistance, and financing options",
        "Implemented negative keyword strategy filtering DIY repair searches, commercial roofing, out-of-state queries, and competitor brand terms that weren't converting",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Optimization & Monsoon Preparation",
      items: [
        "Reviewed 30-day performance data and refined targeting — AI agents identified that insurance restoration keywords converted at 2.3x the rate of general roofing terms, triggering automatic budget reallocation",
        "Built pre-monsoon campaign strategy: storm damage awareness ads, emergency response landing pages, and insurance claim assistance content scheduled to activate at first weather event",
        "Expanded to 25+ ad variations with seasonal messaging — transitioning from spring maintenance hooks to monsoon preparedness and storm damage response",
        "AI agents analyzed call recording data to identify highest-converting lead qualifying questions, informing ad copy and landing page optimization",
        "Launched retargeting campaigns targeting previous website visitors who hadn't converted — particularly homeowners who'd researched roof inspections but hadn't scheduled",
        "Geographic bid adjustments based on hail damage frequency maps — increasing bids in historically storm-prone areas of Bernalillo, Sandoval, and Santa Fe counties",
        "A/B testing ran continuously with AI selecting winners automatically — new landing page variants deployed and tested within 48 hours rather than the typical 2-3 week agency cycle",
      ],
    },
    {
      phase: 3,
      months: "60–90+ days",
      title: "Scale During Peak & Year-Round Optimization",
      items: [
        "Activated monsoon surge strategy — budget scaled 40% above baseline during July-September to capture storm damage demand, with AI agents monitoring weather events and adjusting campaigns within hours of major storms",
        "AI agents detected emerging search patterns after specific weather events and automatically created responsive campaigns targeting affected zip codes within the same day",
        "Scaled ad creative to 30+ active variations during peak season, testing storm-specific urgency messaging, insurance process education, and emergency response guarantees",
        "Implemented advanced lead scoring integrating call duration, service type, estimated project value, and insurance claim status to prioritize high-value replacement and restoration leads",
        "Post-monsoon transition strategy: shifted messaging from emergency repairs to preventive maintenance, roof inspections before winter, and energy-efficiency upgrades during cooler months",
        "Continuous AI optimization compounded daily improvements — bid adjustments, audience refinements, and budget reallocations happening in real time, capturing opportunities that traditional agencies reviewing campaigns weekly would miss",
        "Built year-round campaign calendar aligned with New Mexico's climate: monsoon prep (May-Jun), storm response (Jul-Sep), winter prep (Oct-Nov), spring inspection push (Mar-May)",
      ],
    },
  ],
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$139.7K" },
      { label: "Qualified Leads", value: "611" },
      { label: "Avg Cost Per Qualified Lead", value: "$229" },
      { label: "Closed Deals", value: "44" },
    ],
    columnLabels: {
      leads: "Total Leads",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Closed Deals",
    },
    monthly: [
      { month: "Jun '25", spend: 12400, leads: 87, cpl: 143, qualified: 49, cpql: 253, deals: 4, revenue: 54000, roas: 4.35 },
      { month: "Jul '25", spend: 16800, leads: 134, cpl: 125, qualified: 82, cpql: 205, deals: 6, revenue: 76800, roas: 4.57 },
      { month: "Aug '25", spend: 17200, leads: 141, cpl: 122, qualified: 89, cpql: 193, deals: 6, revenue: 79200, roas: 4.60 },
      { month: "Sep '25", spend: 15900, leads: 119, cpl: 134, qualified: 74, cpql: 215, deals: 5, revenue: 70500, roas: 4.43 },
      { month: "Oct '25", spend: 13600, leads: 91, cpl: 149, qualified: 58, cpql: 234, deals: 4, revenue: 58800, roas: 4.32 },
      { month: "Nov '25", spend: 12700, leads: 78, cpl: 163, qualified: 51, cpql: 249, deals: 4, revenue: 53600, roas: 4.22 },
      { month: "Dec '25", spend: 12100, leads: 69, cpl: 175, qualified: 44, cpql: 275, deals: 3, revenue: 44400, roas: 3.67 },
      { month: "Jan '26", spend: 12300, leads: 72, cpl: 171, qualified: 47, cpql: 262, deals: 3, revenue: 40800, roas: 3.32 },
      { month: "Feb '26", spend: 12800, leads: 81, cpl: 158, qualified: 54, cpql: 237, deals: 4, revenue: 51600, roas: 4.03 },
      { month: "Mar '26", spend: 13900, leads: 96, cpl: 145, qualified: 63, cpql: 221, deals: 5, revenue: 65500, roas: 4.71 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$595.2K", growth: "+284%" },
    { label: "Total Qualified Leads", value: "611", growth: "↓38% Cost Per Lead" },
    { label: "Closed Deals", value: "44", growth: "+167%" },
    { label: "Blended ROAS", value: "4.26x", growth: "" },
  ],
};
