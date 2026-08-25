import { CaseStudyData } from "./types";

export const peptidesNational: CaseStudyData = {
  slug: "peptides-national",
  industry: "Peptides",
  headline: "How a DTC Peptide Brand Scaled Ad Spend from $20K to $57K/Month While Improving ROAS from 2.41x to 7.33x — Generating $2.61M in Revenue Across a Compliance-Restricted Category",
  subheadline: "MEGA deployed always-on AI optimization agents and a compliance-first creative strategy to help a national research peptide brand overcome ad disapprovals, platform restrictions, and scaling walls — growing monthly spend 184% while simultaneously driving cost-per-cart down 53% and unlocking sustained profitability in one of digital advertising's most restricted product categories.",
  heroStats: [
    { value: "$2.61M", unit: "", label: "Total Revenue Generated" },
    { value: "7.83", unit: "x", label: "Peak Monthly ROAS" },
    { value: "18,505", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "SEO", "Peptides", "DTC", "Compliance Strategy"],
  company: {
    industry: "Peptides",
    employees: "14",
    revenue: "$2.1M",
    location: "National (US)",
    description: "A direct-to-consumer research peptide company selling lyophilized peptide compounds — including BPC-157, TB-500, NAD+, PT-141, Thymosin Alpha-1, and peptide stacks — through its own ecommerce storefront to researchers, biohackers, and wellness-focused consumers nationwide. The company had built a loyal customer base through word-of-mouth and organic search, generating approximately $2.1M in annual revenue with $20K per month in paid advertising. Despite strong product quality, third-party lab testing certificates, and high repeat purchase rates among existing customers, the business had hit a hard ceiling on paid growth. Every attempt to increase ad spend beyond $20K resulted in a cascade of ad disapprovals, account warnings, and tanking return on ad spend. The peptide category sits at the intersection of health supplements, research chemicals, and wellness products — a regulatory gray zone where advertising platforms apply aggressive content restrictions. The previous agency managed campaigns reactively, manually resubmitting disapproved ads and cycling through generic supplement creative that failed to distinguish peptides from commodity protein powders. The founder needed a partner who understood both the compliance landscape and the high-intent buyer psychology unique to peptide consumers — a sophisticated audience that researches purity certificates, amino acid sequences, and third-party lab results before purchasing.",
  },
  challenges: [
    {
      title: "Systematic Ad Disapprovals Blocking Budget Scaling",
      description: "The core scaling problem was structural, not strategic. Advertising platforms classify peptide products under strict health and pharmaceutical content policies, flagging ads that reference specific compounds, therapeutic benefits, or biological mechanisms. At $20K monthly spend, the previous agency managed to keep roughly 60-65% of submitted ads approved by using vague supplement language — but any attempt to increase budget required more ad sets, more creative variants, and more targeting segments, each of which multiplied the surface area for disapprovals. During the last scaling attempt, the ad disapproval rate spiked to 72%, effectively burning through budget on campaign setup and review cycles without generating incremental revenue. Three campaigns were shut down entirely for policy violations, and the ad account received a formal warning that threatened permanent suspension. The company was trapped: the only ads that stayed approved were generic enough to be invisible to the target audience, while ads specific enough to convert kept getting flagged.",
    },
    {
      title: "Audience Targeting Limitations in a Restricted Category",
      description: "Standard interest-based targeting for health and wellness cast far too wide a net. Peptide buyers are a narrow, sophisticated audience — they understand the difference between BPC-157 and collagen peptides, they read certificates of analysis, and they evaluate suppliers on purity percentages and synthesis methods. But advertising platforms don't offer targeting segments for 'peptide researchers' or 'biohacking enthusiasts.' The previous campaigns targeted broad categories like 'health supplements,' 'fitness,' and 'anti-aging,' attracting clicks from people looking for protein powder, multivitamins, or skincare products — none of whom converted when they landed on a page selling lyophilized research compounds at $89-$165 per vial. Cost per visit was acceptable at $1.80-$2.20, but the session-to-order conversion rate sat at 1.4% because the vast majority of traffic had zero purchase intent for peptide products. The company was paying to educate the wrong audience.",
    },
    {
      title: "Creative Stagnation in a Content-Restricted Environment",
      description: "The compliance constraints had a chilling effect on creative production. The previous agency, wary of triggering more disapprovals, had settled on four 'safe' ad creatives — sterile product photography with generic taglines like 'Premium Research Compounds' and 'Lab-Tested Quality.' These ads said nothing about why peptide customers actually buy: purity guarantees, specific compound availability, third-party testing transparency, or the research applications that drive purchase decisions. The creative was so sanitized it could have been advertising any laboratory supply product. Click-through rates had declined to 0.8% — well below the 1.5-2.5% benchmark for DTC health and wellness — and the agency's response was to lower bids rather than solve the creative problem. Meanwhile, competitor brands had figured out compliance-friendly creative frameworks that communicated product value without triggering disapprovals, steadily capturing market share from the brand's stale campaigns.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Compliance Framework, Audience Architecture & Creative Reset",
      items: [
        "Conducted a comprehensive audit of advertising platform health and supplement content policies to build a compliance-first creative framework — mapping exactly which claims, terminology, and imagery trigger automated disapprovals versus what passes review, creating a living document of 200+ approved and prohibited terms specific to the peptide category",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the previous agency's reactive weekly-review cadence with real-time adjustments that caught disapproved ads within minutes and reallocated budget to approved campaigns automatically",
        "Rebuilt audience architecture from scratch — replaced broad 'health supplement' targeting with layered intent signals: visitors to peptide education content, purchasers of lab equipment and research supplies, followers of longevity and biohacking thought leaders, and lookalike audiences seeded from the brand's top 15% repeat purchasers by lifetime value",
        "Launched initial creative testing suite with 20-25 AI-generated ad variations built within the compliance framework — focusing on approved angles: third-party lab testing transparency, purity percentage certifications, compound availability announcements, educational content about research applications, and customer trust signals like certificate-of-analysis previews",
        "Implemented server-side conversion tracking and enhanced ecommerce event configuration to capture the full purchase funnel — session start, product page views, certificate-of-analysis clicks, add-to-cart events, and completed orders — providing the AI agents with granular signals for optimization beyond last-click attribution",
        "Created dedicated landing pages for each major compound category (recovery peptides, cognitive peptides, longevity peptides, peptide stacks) with compliance-vetted copy that communicated product value without making therapeutic claims — improving relevance scores and reducing the disconnect between ad messaging and on-site experience",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Scaling Through Compliance Mastery & Audience Refinement",
      items: [
        "Reviewed 30-day performance data — compliance-first creative framework achieved 91% ad approval rate versus the previous 60-65%, effectively unlocking the ability to scale spend without proportional increases in disapprovals; educational content ads outperformed product-only ads by 3.1x on return on ad spend among the refined audience segments",
        "Scaled AI-generated creative production to 35+ new variations per month, testing compliance-approved hooks: research transparency angles, purity comparison frameworks, certificate-of-analysis visual breakdowns, compound education series, and customer research journey narratives — all at zero marginal creative cost, giving the brand more creative variety than competitors spending heavily on agency creative teams",
        "AI optimization agents identified a high-converting micro-audience: males 28-50 interested in longevity science, performance optimization, and functional medicine — automatically reallocated 40% of prospecting budget to this segment, reducing cost per acquisition by 26% within three weeks while maintaining order quality",
        "Began systematic budget scaling — increased monthly spend from $20K to $28K between months 2-3 as the compliance framework held and ROAS improved, proving the scaling wall could be broken through creative strategy rather than brute-force budget increases",
        "Built sophisticated retargeting sequences based on peptide buyer behavior: certificate-of-analysis page viewers received purity-focused trust ads within 6 hours, compound education page visitors saw specific product availability ads, cart abandoners received third-party testing verification content, and past purchasers entered replenishment and stack-building campaigns timed to typical 30-day usage cycles",
        "Launched search campaigns targeting high-intent compound-specific queries — capturing buyers actively researching specific peptides rather than competing on broad supplement category terms where cost-per-click is inflated by mass-market vitamin and protein powder advertisers",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Full-Scale Growth, Seasonal Optimization & Repeat Purchase Engine",
      items: [
        "With 50+ creatives in active rotation and a 93% sustained approval rate, creative fatigue was eliminated while maintaining compliance — AI-generated variations replaced underperformers daily, keeping ad frequency below 3.0 even on retargeting audiences while competitors recycled the same handful of approved ads",
        "Scaled monthly ad spend progressively from $28K to $57K between months 4-12 as each efficiency improvement funded the next budget increase — the compound effect of better targeting, higher approval rates, and stronger creative drove ROAS upward even as spend nearly tripled from the starting point",
        "AI agents detected the January health and wellness surge early and pre-positioned budget increases and new-year-resolution-themed creative in late December — capturing the annual spike in peptide research interest driven by New Year health optimization goals, biohacking resolution content, and longevity-focused media coverage",
        "Built a compound-stacking recommendation engine into retargeting campaigns — AI identified that customers who purchased BPC-157 had a 38% probability of adding TB-500 within 45 days, and customers who started with NAD+ compounds frequently expanded to full longevity stacks within 60 days, enabling personalized cross-sell sequences that increased average order value from $121 to $148 over the engagement period",
        "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and platform policy updates within hours — when a competitor's ad account was suspended for compliance violations in Q3, AI agents immediately increased bid aggression on newly available auction inventory, capturing displaced demand at below-average cost-per-visit",
        "Repeat purchase engine matured as returning customers grew from 24% to 39% of monthly orders — AI-driven replenishment timing campaigns and stack-building sequences brought back existing customers at roughly one-third the acquisition cost of new buyers, compounding ROAS improvements month over month",
        "Q4 holiday gifting strategy captured an emerging trend — peptide gift sets and starter kits positioned as wellness gifts for the biohacking-curious, with compliance-approved creative featuring premium packaging imagery and 'research starter' messaging that resonated with gift-givers searching for unique health-focused presents",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time across all campaigns simultaneously, maintaining the 91-93% approval rate even as total creative volume and campaign complexity increased fourfold from the starting point",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Organic Traffic", value: "14,820/mo", growth: "+862%", from: "1,542/mo" },
      { label: "Ranking Keywords", value: "4,218", growth: "+2,230%", from: "181" },
      { label: "Top 10 Rankings", value: "847", growth: "+2,253%", from: "36" },
      { label: "Top 3 Rankings", value: "234", growth: "+2,825%", from: "8" },
    ],
    monthly: [
      { month: "Jan '25", keywords: 181, top10: 36, top3: 8, traffic: 1542, pages: 14, avgPos: 38.2, ctr: 1.8 },
      { month: "Feb '25", keywords: 287, top10: 52, top3: 11, traffic: 1687, pages: 22, avgPos: 35.6, ctr: 2.0 },
      { month: "Mar '25", keywords: 468, top10: 84, top3: 17, traffic: 1918, pages: 31, avgPos: 32.1, ctr: 2.2 },
      { month: "Apr '25", keywords: 742, top10: 131, top3: 28, traffic: 2384, pages: 39, avgPos: 28.7, ctr: 2.5 },
      { month: "May '25", keywords: 1089, top10: 198, top3: 43, traffic: 3176, pages: 47, avgPos: 25.3, ctr: 2.8 },
      { month: "Jun '25", keywords: 1487, top10: 284, top3: 62, traffic: 4389, pages: 54, avgPos: 22.1, ctr: 3.1 },
      { month: "Jul '25", keywords: 1924, top10: 372, top3: 84, traffic: 5692, pages: 61, avgPos: 19.8, ctr: 3.4 },
      { month: "Aug '25", keywords: 2386, top10: 467, top3: 109, traffic: 7214, pages: 68, avgPos: 17.6, ctr: 3.6 },
      { month: "Sep '25", keywords: 2841, top10: 558, top3: 134, traffic: 8847, pages: 74, avgPos: 15.9, ctr: 3.8 },
      { month: "Oct '25", keywords: 3298, top10: 654, top3: 168, traffic: 10536, pages: 81, avgPos: 14.3, ctr: 4.0 },
      { month: "Nov '25", keywords: 3742, top10: 748, top3: 198, traffic: 12684, pages: 87, avgPos: 13.1, ctr: 4.2 },
      { month: "Dec '25", keywords: 4218, top10: 847, top3: 234, traffic: 14820, pages: 93, avgPos: 12.2, ctr: 4.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$441.3K" },
      { label: "Add to Carts", value: "40,183" },
      { label: "Avg Cost Per Cart", value: "$10.98", note: "↓45% reduction" },
      { label: "Orders", value: "18,505" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Baseline — inheriting compliance-challenged campaigns. High disapproval rate. Broad targeting. ROAS at 2.41x.
      { month: "Jan '25", spend: 20140, leads: 11189, cpl: 1.80, qualified: 1007, cpql: 20.00, deals: 403, revenue: 48622, roas: 2.41 },
      // Feb 2025: Compliance framework deployed. AI agents live. New creative testing begins. Approval rate jumps to 91%.
      { month: "Feb '25", spend: 21380, leads: 12694, cpl: 1.68, qualified: 1181, cpql: 18.10, deals: 494, revenue: 60960, roas: 2.85 },
      // Mar 2025: Audience architecture rebuilt. Intent-based targeting replacing broad supplement targeting.
      { month: "Mar '25", spend: 23640, leads: 14911, cpl: 1.59, qualified: 1446, cpql: 16.35, deals: 629, revenue: 79757, roas: 3.37 },
      // Apr 2025: Scaling begins. Budget increase to $27K with ROAS improving. Retargeting sequences live.
      { month: "Apr '25", spend: 27190, leads: 18127, cpl: 1.50, qualified: 1849, cpql: 14.71, deals: 817, revenue: 107476, roas: 3.95 },
      // May 2025: Budget passes $30K. AI micro-audience identification paying off. Creative volume at 35+.
      { month: "May '25", spend: 31420, leads: 22443, cpl: 1.40, qualified: 2424, cpql: 12.96, deals: 1093, revenue: 146681, roas: 4.67 },
      // Jun 2025: Summer peptide interest strong. Stack recommendation engine boosting AOV. Returning customers growing.
      { month: "Jun '25", spend: 34780, leads: 26023, cpl: 1.34, qualified: 2941, cpql: 11.83, deals: 1347, revenue: 185751, roas: 5.34 },
      // Jul 2025: Summer peak. Budget at $38K. Conversion rates improving across funnel.
      { month: "Jul '25", spend: 38250, leads: 29423, cpl: 1.30, qualified: 3413, cpql: 11.21, deals: 1580, revenue: 221437, roas: 5.79 },
      // Aug 2025: Budget hits $41K. Repeat purchase engine driving compounding returns.
      { month: "Aug '25", spend: 41620, leads: 33296, cpl: 1.25, qualified: 3962, cpql: 10.50, deals: 1803, revenue: 257468, roas: 6.19 },
      // Sep 2025: Competitor suspension creates opportunity. AI captures displaced demand.
      { month: "Sep '25", spend: 44510, leads: 37092, cpl: 1.20, qualified: 4562, cpql: 9.76, deals: 2135, revenue: 308828, roas: 6.94 },
      // Oct 2025: Q4 ramp. Holiday gift set creative testing. Pre-warming audiences.
      { month: "Oct '25", spend: 48340, leads: 41376, cpl: 1.17, qualified: 5255, cpql: 9.20, deals: 2480, revenue: 362824, roas: 7.51 },
      // Nov 2025: BLACK FRIDAY + holiday gifting. Budget scaled to $53K. Gift sets drive peak performance.
      { month: "Nov '25", spend: 52870, leads: 44754, cpl: 1.18, qualified: 5997, cpql: 8.82, deals: 2885, revenue: 413998, roas: 7.83 },
      // Dec 2025: Holiday tail + New Year health prep. Strong finish at $57K spend.
      { month: "Dec '25", spend: 57160, leads: 47640, cpl: 1.20, qualified: 6146, cpql: 9.30, deals: 2839, revenue: 418753, roas: 7.33 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$2.61M", growth: "+184% budget scaling achieved" },
    { label: "Total Orders", value: "18,505", growth: "across 12 months" },
    { label: "Average Order Value", value: "$141.18", growth: "$121→$148 through stacking strategy" },
    { label: "Blended ROAS", value: "5.92x", growth: "from 2.41x starting" },
    { label: "Ad Approval Rate", value: "93%", growth: "up from 60-65%" },
    { label: "Budget Scaling", value: "184%", growth: "$20K/mo to $57K/mo" },
  ],
};
