import { CaseStudyData } from "./types";

export const peptidesEcommerce: CaseStudyData = {
  slug: "peptides-ecommerce",
  industry: "Peptides",
  headline: "How a Subscription Peptide Brand Scaled to $619.7K in Revenue at 6.50x Blended ROAS — Growing from 72 to 143 Monthly Subscription Orders in 6 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and a dual SEO + paid advertising strategy to transform a subscription-based peptide delivery company into a high-performing ecommerce engine — scaling orders 1.99x, building organic traffic to 3,558 monthly visitors across 903 ranking keywords, and generating $619.7K in subscription revenue on $95.4K in ad spend.",
  heroStats: [
    { value: "$619.7K", unit: "", label: "Subscription Revenue Generated" },
    { value: "6.50", unit: "x", label: "Blended ROAS" },
    { value: "903", unit: "", label: "Ranking Keywords" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "Peptides", "Subscription"],
  company: {
    industry: "Peptides",
    employees: "8",
    revenue: "$1.2M",
    location: "Austin, TX (National)",
    description: "A direct-to-consumer subscription peptide delivery company headquartered in Austin, Texas, offering monthly peptide protocol subscriptions ranging from $179 to $389 per month. The business had built a loyal subscriber base through word-of-mouth referrals and organic search, generating approximately $1.2M in annual revenue with a 34% subscriber retention rate beyond six months. Subscription tiers included foundational protocols (BPC-157, TB-500), performance stacks (peptide combinations for recovery and longevity), and premium comprehensive protocols with quarterly blood work integration. The company had attempted paid advertising independently, spending roughly $8K–$10K per month with inconsistent results — high ad disapproval rates in the peptide category, broad targeting that attracted supplement browsers rather than peptide-specific subscribers, and no structured creative testing framework. With strong product quality, third-party lab testing on every batch, and an average subscriber lifetime value exceeding $2,400, the company had clear product-market fit but lacked the acquisition infrastructure to scale beyond organic growth. The founder needed a partner who could navigate health-adjacent advertising compliance, build an efficient subscription acquisition funnel, and demonstrate enough return to justify scaling from $10K to $15K+ monthly ad investment.",
  },
  challenges: [
    {
      title: "Subscription Acquisition Costs Exceeding Sustainable Thresholds",
      description: "The company's self-managed paid campaigns were generating new subscribers at a cost per acquisition of $210–$260 — well above the $150 threshold that made unit economics work given the average subscription value and retention curve. At $8K–$10K monthly spend, this meant only 35–45 new subscribers per month, insufficient to offset natural churn of 12–15% monthly. The campaigns relied on generic supplement targeting that attracted clicks from consumers shopping for protein powder, collagen pills, and multivitamins — none of whom understood or valued research-grade peptide protocols at $179–$389 per month. Session-to-order conversion rates sat below 1.8%, and the vast majority of ad spend was wasted on visitors who bounced within 15 seconds of landing on pages describing lyophilized peptide compounds and subcutaneous administration protocols.",
    },
    {
      title: "Advertising Compliance Creating a Creative Bottleneck",
      description: "Peptide subscriptions sit in one of the most restrictive advertising categories — straddling pharmaceutical, supplement, and health claim policies. The company experienced 40–50% ad disapproval rates, meaning nearly half of submitted creatives were rejected or flagged for policy review. On a constrained budget, each disapproved ad represented lost testing capacity and delayed optimization. Three account warnings had been issued in the prior six months. The founder's approach of using clinical language and protocol-specific terminology triggered automated policy flags, while attempts at softer messaging failed to resonate with the sophisticated peptide buyer who evaluates suppliers on purity certificates, synthesis methods, and compound specificity. There was no systematic compliance framework — each creative was a gamble between being too clinical (flagged) or too vague (ignored by the target audience).",
    },
    {
      title: "Underperforming Organic Presence Despite High-Intent Search Volume",
      description: "The ecommerce storefront ranked for 203 keywords — mostly branded terms and exact product names with a smattering of low-competition long-tail queries. Organic traffic averaged approximately 1,200 sessions per month, contributing less than 9% of total site visits despite the peptide category having thousands of high-intent informational and commercial queries. There was no content strategy: no protocol guides, no compound comparison articles, no subscription FAQ content, and no educational resources explaining peptide stacking, cycling, or dosing protocols. Product pages contained minimal copy — compound names, basic descriptions, and pricing — without the depth that peptide-savvy consumers need before committing to a $179–$389 monthly subscription. Competitors with established content libraries were capturing the research phase of the buyer journey, and this company was largely invisible during the 4–8 week consideration period that typically precedes a peptide subscription commitment.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Compliance Infrastructure, Subscription Funnel & SEO Foundation",
      items: [
        "Conducted a comprehensive audit of advertising platform health and supplement content policies specific to peptide subscriptions — mapping approved terminology, claim boundaries, and compliant creative formats to build a systematic framework that would maximize approval rates on every dollar of the $15K monthly budget",
        "Deployed always-on AI optimization agents directly within ad accounts for continuous bid management, budget allocation, and audience refinement — replacing the founder's sporadic weekly review approach with real-time adjustments that caught disapproved ads within minutes and automatically reallocated budget to approved campaigns",
        "Launched initial creative testing suite with 20–25 AI-generated ad variations built within the compliance framework — focusing on approved angles: third-party lab testing transparency, subscription flexibility (pause/cancel anytime), protocol customization, and educational research content — all at zero marginal creative cost",
        "Rebuilt the subscription landing page funnel with compliance-vetted copy: protocol comparison pages, subscription tier breakdowns, lab certificate showcases, and a streamlined checkout flow optimized for subscription commitment rather than one-time purchases",
        "Implemented server-side conversion tracking with enhanced ecommerce events — session start, protocol page views, subscription tier selection, add-to-cart, and completed subscription signup — providing granular signals for AI optimization across the full subscription consideration funnel",
        "Built a 30-day SEO content publishing plan targeting high-intent peptide research queries — compound protocol guides for BPC-157, TB-500, NAD+, and CJC-1295/Ipamorelin, subscription model explainers, purity testing methodology articles, and peptide storage guides — establishing foundational content that would serve both organic discovery and paid landing page quality",
        "Created dedicated landing pages for each subscription tier with protocol-specific content, subscriber testimonials (anonymized), and certificate-of-analysis integration — improving ad relevance scores and reducing bounce rates from paid traffic",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "AI-Driven Audience Refinement & Content Scaling",
      items: [
        "Reviewed 30-day performance data — compliance-first creative framework achieved 89% ad approval rate versus the previous 40–50%, effectively doubling usable creative capacity; subscription-focused educational ads outperformed product-only ads by 2.7x on return on ad spend among refined audience segments",
        "Scaled AI-generated creative production to 25–30 active variations, testing compliance-approved hooks: protocol customization angles, purity comparison content, subscriber transformation stories, and research transparency messaging — rotating winners weekly based on real-time performance data rather than the typical monthly agency creative refresh cycle",
        "AI optimization agents identified a high-converting micro-audience: males 32–52 with demonstrated interest in longevity protocols, functional medicine, and performance optimization — automatically concentrated prospecting budget on this segment, reducing cost per acquisition by 26% within three weeks of audience refinement",
        "Published 16 SEO-optimized articles in months 2–3 targeting mid-funnel peptide queries — protocol comparison guides, subscription vs. single-purchase analysis, peptide stacking education, cycling protocol explainers, and compound bioavailability deep-dives — each serving dual duty as organic traffic drivers and higher-quality paid ad landing pages",
        "Built retargeting sequences based on subscription buyer behavior: protocol page viewers who spent 90+ seconds received subscription benefit ads, tier comparison visitors saw protocol-specific value propositions, and cart abandoners received lab testing verification content paired with subscription flexibility messaging — maximizing conversion from every session",
        "Implemented dynamic subscription bundle recommendations within retargeting — AI identified that visitors researching BPC-157 protocols had a 3.2x higher conversion rate when shown performance stack bundles versus individual compound subscriptions, driving average order value growth from the first optimization cycle",
      ],
    },
    {
      phase: 3,
      months: "90–180 days",
      title: "Subscription Scaling, AOV Growth & Organic Compounding",
      items: [
        "With 25+ creatives in active rotation and a 92% sustained approval rate, creative fatigue was eliminated — AI-generated variations replaced underperformers within days, keeping the subscription acquisition funnel fresh at a pace that would require dedicated creative staff at a traditional agency",
        "Scaled monthly spend progressively from $15.8K to $16.7K between months 4–6 as each efficiency improvement funded incremental budget increases — the compound effect of better targeting, higher approval rates, and stronger creative drove ROAS from 4.16x to 7.99x even as total spend increased",
        "Deployed protocol upgrade campaigns targeting existing subscribers — AI identified that subscribers on foundational protocols ($179/mo) who engaged with performance stack content had a 28% upgrade rate to premium tiers ($289–$389/mo), increasing average subscription value across the customer base",
        "AI agents detected the summer wellness and biohacking interest surge in June–August and pre-positioned budget increases and seasonal creative — capturing elevated demand from longevity-focused consumers researching peptide protocols during peak optimization season",
        "SEO content engine reached critical mass with 44 indexed pages and 903 ranking keywords by month 6 — organic traffic grew from 1,218 to 3,558 monthly visitors, creating a compounding subscription acquisition channel that reduced dependence on paid spend and improved blended customer acquisition cost",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time, maintaining the 89–92% approval rate while expanding into new compound categories and audience segments",
        "Returning subscriber reactivation campaigns generated 14% of monthly orders by month 6 — AI-driven timing based on typical lapse patterns brought back churned subscribers at roughly one-third the acquisition cost of new subscribers, compounding ROAS improvements month over month",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Organic Traffic", value: "3,558/mo", growth: "+192%", from: "from 1,218/mo" },
      { label: "Ranking Keywords", value: "903", growth: "+345%", from: "from 203" },
      { label: "Monthly Impressions", value: "57,814", growth: "+79%", from: "from 32,267" },
      { label: "Avg Click-Through Rate", value: "4.70%", growth: "+25%", from: "from 3.77%" },
    ],
    monthly: [
      { month: "Apr '26", keywords: 203, top10: 19, top3: 4, traffic: 1218, pages: 16, avgPos: 37.4, ctr: 3.8 },
      { month: "May '26", keywords: 324, top10: 34, top3: 8, traffic: 1717, pages: 23, avgPos: 32.6, ctr: 4.1 },
      { month: "Jun '26", keywords: 478, top10: 56, top3: 14, traffic: 2391, pages: 29, avgPos: 28.1, ctr: 4.5 },
      { month: "Jul '26", keywords: 632, top10: 81, top3: 21, traffic: 2844, pages: 35, avgPos: 24.2, ctr: 4.9 },
      { month: "Aug '26", keywords: 779, top10: 108, top3: 29, traffic: 3272, pages: 40, avgPos: 20.8, ctr: 5.4 },
      { month: "Sep '26", keywords: 903, top10: 138, top3: 38, traffic: 3558, pages: 44, avgPos: 17.9, ctr: 5.9 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$95.4K" },
      { label: "Add to Carts", value: "1,957" },
      { label: "Avg Cost Per Acquisition", value: "$143.46", note: "↓32% from baseline" },
      { label: "Orders", value: "665" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Apr 2026: Campaign launch. Compliance framework deployed. AI agents live. Broad targeting being refined. High CPA expected.
      { month: "Apr '26", spend: 15230, leads: 2847, cpl: 5.35, qualified: 198, cpql: 76.92, deals: 72, revenue: 63288, roas: 4.16 },
      // May 2026: Audience refinement showing results. Approval rate at 89%. Educational content ads outperforming product-only.
      { month: "May '26", spend: 15470, leads: 3342, cpl: 4.63, qualified: 241, cpql: 64.19, deals: 87, revenue: 78909, roas: 5.10 },
      // Jun 2026: Summer wellness demand rising. Protocol bundle campaigns driving AOV growth. Retargeting sequences maturing.
      { month: "Jun '26", spend: 15840, leads: 3918, cpl: 4.04, qualified: 306, cpql: 51.76, deals: 106, revenue: 99322, roas: 6.27 },
      // Jul 2026: Peak biohacking season. AI pre-positioned seasonal creative. Cross-sell and upgrade campaigns live.
      { month: "Jul '26", spend: 16380, leads: 4623, cpl: 3.54, qualified: 378, cpql: 43.33, deals: 126, revenue: 120708, roas: 7.37 },
      // Aug 2026: Best month — all systems compounding. Organic traffic augmenting paid. Subscriber reactivation campaigns live.
      { month: "Aug '26", spend: 16720, leads: 5147, cpl: 3.25, qualified: 436, cpql: 38.35, deals: 143, revenue: 133562, roas: 7.99 },
      // Sep 2026: Slight seasonal pullback but strong performance maintained. Protocol upgrade campaigns lifting AOV.
      { month: "Sep '26", spend: 15760, leads: 4712, cpl: 3.34, qualified: 398, cpql: 39.60, deals: 131, revenue: 123926, roas: 7.86 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$619,715", growth: "+96% monthly revenue growth" },
    { label: "Total Orders", value: "665", growth: "subscription signups across 6 months" },
    { label: "Average Order Value", value: "$931.90", growth: "multi-month protocol bundles" },
    { label: "Blended ROAS", value: "6.50x", growth: "from 4.16x starting" },
    { label: "Avg Cost Per Acquisition", value: "$143.46", growth: "within $125–$150 target range" },
    { label: "Organic Traffic", value: "3,558/mo", growth: "+192% in 6 months" },
  ],
};
