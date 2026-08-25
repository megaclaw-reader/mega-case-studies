import { CaseStudyData } from "./types";

export const peptidesNational: CaseStudyData = {
  slug: "peptides-national",
  industry: "Peptides",
  headline: "How a DTC Peptide Brand Broke Through Compliance Walls to Scale from $20K to $58K/Month in Ad Spend — Generating $2.54M in Revenue at 5.76x Blended ROAS",
  subheadline: "A compliance-first creative strategy and always-on AI optimization turned a restricted-category ceiling into a scaling engine — growing spend 190% while cutting cost-per-cart 48%.",
  heroStats: [
    { value: "$2.54M", unit: "", label: "Total Revenue Generated" },
    { value: "7.83", unit: "x", label: "Peak Monthly ROAS" },
    { value: "18,005", unit: "", label: "Total Orders" },
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
      { month: "Feb '25", keywords: 264, top10: 48, top3: 10, traffic: 1618, pages: 21, avgPos: 36.1, ctr: 1.9 },
      { month: "Mar '25", keywords: 423, top10: 79, top3: 15, traffic: 1847, pages: 29, avgPos: 33.4, ctr: 2.1 },
      { month: "Apr '25", keywords: 687, top10: 118, top3: 24, traffic: 2291, pages: 36, avgPos: 29.8, ctr: 2.3 },
      { month: "May '25", keywords: 1024, top10: 186, top3: 39, traffic: 3042, pages: 43, avgPos: 26.1, ctr: 2.6 },
      { month: "Jun '25", keywords: 1398, top10: 261, top3: 56, traffic: 4187, pages: 50, avgPos: 23.2, ctr: 2.9 },
      { month: "Jul '25", keywords: 1683, top10: 318, top3: 71, traffic: 4836, pages: 55, avgPos: 21.4, ctr: 3.1 },
      { month: "Aug '25", keywords: 2241, top10: 432, top3: 98, traffic: 6918, pages: 63, avgPos: 18.3, ctr: 3.4 },
      { month: "Sep '25", keywords: 2794, top10: 541, top3: 127, traffic: 8642, pages: 70, avgPos: 16.2, ctr: 3.6 },
      { month: "Oct '25", keywords: 3187, top10: 628, top3: 156, traffic: 10148, pages: 76, avgPos: 14.9, ctr: 3.8 },
      { month: "Nov '25", keywords: 3612, top10: 714, top3: 189, traffic: 12341, pages: 82, avgPos: 13.6, ctr: 4.1 },
      { month: "Dec '25", keywords: 4218, top10: 847, top3: 234, traffic: 14820, pages: 89, avgPos: 12.2, ctr: 4.4 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$441.3K" },
      { label: "Add to Carts", value: "39,183" },
      { label: "Avg Cost Per Cart", value: "$11.26", note: "↓48% reduction" },
      { label: "Orders", value: "18,005" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Baseline — inheriting compliance-challenged campaigns. High disapproval rate. Broad targeting.
      { month: "Jan '25", spend: 20140, leads: 11189, cpl: 1.80, qualified: 1007, cpql: 20.00, deals: 403, revenue: 48571, roas: 2.41 },
      // Feb 2025: Compliance framework deployed. AI agents live. Some creative paused for review — spend flat.
      { month: "Feb '25", spend: 20860, leads: 12565, cpl: 1.66, qualified: 1148, cpql: 18.17, deals: 467, revenue: 57645, roas: 2.76 },
      // Mar 2025: Audience architecture rebuilt. New creative passing review. First real improvements showing.
      { month: "Mar '25", spend: 24310, leads: 15382, cpl: 1.58, qualified: 1512, cpql: 16.08, deals: 662, revenue: 84802, roas: 3.49 },
      // Apr 2025: Hit a policy flag — 3 ad sets pulled for review mid-month. Spend pulled back, ROAS dipped.
      { month: "Apr '25", spend: 22740, leads: 14839, cpl: 1.53, qualified: 1389, cpql: 16.37, deals: 594, revenue: 77915, roas: 3.43 },
      // May 2025: Bounced back hard. Flagged ads reinstated + new compliant variants. Retargeting sequences live.
      { month: "May '25", spend: 30180, leads: 21557, cpl: 1.40, qualified: 2327, cpql: 12.97, deals: 1047, revenue: 140820, roas: 4.67 },
      // Jun 2025: Summer peptide interest picks up. Stack recommendation engine boosting AOV. Solid month.
      { month: "Jun '25", spend: 34920, leads: 25313, cpl: 1.38, qualified: 2916, cpql: 11.98, deals: 1298, revenue: 181006, roas: 5.18 },
      // Jul 2025: Summer plateau — competitive auction heats up, CPVs rise slightly. Budget held at $36K.
      { month: "Jul '25", spend: 36470, leads: 26621, cpl: 1.37, qualified: 2987, cpql: 12.21, deals: 1361, revenue: 193264, roas: 5.30 },
      // Aug 2025: Late summer push. New compound-specific landing pages live. Returning customers growing.
      { month: "Aug '25", spend: 41830, leads: 33464, cpl: 1.25, qualified: 3986, cpql: 10.49, deals: 1842, revenue: 263925, roas: 6.31 },
      // Sep 2025: Competitor suspension creates opportunity. AI captures displaced demand. Big month.
      { month: "Sep '25", spend: 46290, leads: 38575, cpl: 1.20, qualified: 4813, cpql: 9.62, deals: 2274, revenue: 332364, roas: 7.18 },
      // Oct 2025: Post-surge normalization. Budget kept high but auction rebalanced. Slight efficiency dip.
      { month: "Oct '25", spend: 48710, leads: 39927, cpl: 1.22, qualified: 4978, cpql: 9.78, deals: 2317, revenue: 340426, roas: 6.99 },
      // Nov 2025: BLACK FRIDAY + holiday gifting. Gift sets drive peak performance. Massive volume.
      { month: "Nov '25", spend: 56380, leads: 47797, cpl: 1.18, qualified: 6472, cpql: 8.71, deals: 3154, revenue: 441446, roas: 7.83 },
      // Dec 2025: Holiday tail + New Year health prep. Volume normalizes off BF highs but strong close.
      { month: "Dec '25", spend: 58470, leads: 44785, cpl: 1.31, qualified: 5648, cpql: 10.35, deals: 2586, revenue: 378986, roas: 6.48 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$2.54M", growth: "+190% budget scaling achieved" },
    { label: "Total Orders", value: "18,005", growth: "across 12 months" },
    { label: "Average Order Value", value: "$141.14", growth: "$121→$147 through stacking strategy" },
    { label: "Blended ROAS", value: "5.76x", growth: "from 2.41x starting" },
    { label: "Ad Approval Rate", value: "93%", growth: "up from 60-65%" },
    { label: "Budget Scaling", value: "190%", growth: "$20K/mo to $58K/mo" },
  ],
};
