import { CaseStudyData } from "./types";

export const cybersecurity: CaseStudyData = {
  slug: "cybersecurity",
  industry: "Cybersecurity",
  headline: "How a National Cybersecurity Firm Scaled Pipeline 145% With AI-Powered Marketing",
  subheadline: "MEGA helped a nationwide cybersecurity company optimize their digital marketing, reducing cost per qualified lead by 30%, growing organic traffic 418%, and generating $691K in attributed revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "145", unit: "%", label: "Revenue Growth Rate" },
    { value: "$691", unit: "K", label: "Revenue Attributed" },
  ],
  tags: ["SEO Strategy", "Paid Advertising", "AI-Powered Optimization"],
  company: {
    industry: "Cybersecurity",
    employees: "47",
    revenue: "$6.2M",
    location: "Nationwide US",
    description: "A mid-sized cybersecurity firm specializing in managed detection and response (MDR), penetration testing, and compliance consulting for mid-market enterprises. The company had built a strong reputation through technical expertise and word-of-mouth, but their digital presence wasn't generating the inbound pipeline needed to support their growth targets. They had a basic website and some paid campaigns running, but neither was performing at the level their sales team needed.",
  },
  challenges: [
    {
      title: "Thin Digital Footprint",
      description: "The company had a functional website with around 291 indexed keywords, but almost no thought leadership content or landing pages targeting specific service lines. Organic traffic was negligible relative to their market opportunity, contributing fewer than 3 qualified leads per month.",
    },
    {
      title: "High Cost Per Qualified Lead",
      description: "Paid campaigns were generating inquiries, but the qualification rate hovered around 31% — putting the effective cost per qualified lead near $1,650. For a B2B sales cycle averaging 47 days, the unit economics were workable but far from efficient.",
    },
    {
      title: "Over-Reliance on Channel Partners",
      description: "Roughly 68% of new business came through channel partners and existing client referrals. The company wanted to build a direct inbound pipeline to reduce dependency and improve margins on new contract acquisitions.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation & Quick Wins",
      items: [
        "Full site audit — sitemap, robots.txt, crawlability, site speed, and security-focused technical review",
        "Google Search Console setup and optimization for B2B cybersecurity queries",
        "Competitor research and keyword research across MDR, penetration testing, compliance, and incident response verticals",
        "Generated 22 initial articles (CISO buying guides, compliance framework comparisons, threat landscape briefings)",
        "Content audit and metadata fixes across all existing service and solution pages",
        "Technical fixes — image SEO, canonical issues, E-E-A-T optimization for security authority signals",
        "Full audit of past ad performance and re-instrumented site with proper pixel and conversion tracking",
        "CRM integration for closed-loop lead-to-deal attribution across longer B2B sales cycles",
        "Comprehensive ad strategy built around cost per qualified lead and pipeline value, not inquiry volume",
        "Reduced spend inefficiencies and launched first round of creative and landing page A/B tests targeting security decision-makers",
      ],
    },
    {
      phase: 2,
      months: "30–60 days",
      title: "Content & Optimization Engine",
      items: [
        "Reviewed 0–30 day performance data and adjusted targeting for B2B buying committee personas",
        "Generated 20+ additional articles focused on compliance verticals (HIPAA, SOC 2, PCI-DSS, CMMC)",
        "Launched programmatic service-specific landing pages ('managed detection and response for [industry]')",
        "Optimized internal linking to strengthen topical authority across cybersecurity service clusters",
        "Added structured data schema for service pages, FAQ content, and organization markup",
        "Rapid iterations of ad creative testing — messaging pivots around risk reduction vs. compliance vs. cost savings",
        "Retargeting and remarketing layer for whitepaper downloaders and pricing page visitors",
        "Keyword and negative keyword refinement based on SQL qualification data from CRM",
        "Landing page refinement with industry-specific proof points and case references",
      ],
    },
    {
      phase: 3,
      months: "60–90 days",
      title: "Scale & Compound",
      items: [
        "Reviewed 0–60 day data and expanded programmatic pages to additional industry verticals",
        "Continued content updates, refreshed underperforming articles with updated threat intelligence",
        "Backlink campaigns — organic link building via cybersecurity publications, guest posting on industry blogs",
        "CRO review and keyword cannibalization cleanup across overlapping service terms",
        "Advanced schema markup by page type (service, blog, FAQ, comparison)",
        "AI search crawlability improvements for LLM placement in cybersecurity recommendation queries",
        "Complex audience segmentations by company size, industry, and security maturity level",
        "Multi-approach bidding strategies based on campaign maturity and deal pipeline data",
        "Fully robust lead scoring integrating ad engagement signals with CRM deal stage progression",
      ],
    },
    {
      phase: 4,
      months: "90+ days",
      title: "Ongoing Optimization",
      items: [
        "Budget reallocation based on performance — shifted spend toward highest-converting industry verticals",
        "Expansion of programmatic pages into additional compliance frameworks and emerging threat categories",
        "Audience pruning — removed low-intent segments, tested lookalike audiences from closed-won accounts",
        "Bid strategy tuning based on pipeline velocity and average contract value by segment",
        "Weekly reporting with pipeline attribution and actionable recommendations tied to revenue impact",
        "Content refresh cycles aligned to quarterly threat landscape shifts and compliance deadline seasons",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,263", growth: "+334%", from: "from 291" },
      { label: "Top 10 Rankings", value: "168", growth: "+600%", from: "from 24" },
      { label: "Pages Created", value: "109", growth: "", from: "incl. 67 programmatic service pages" },
      { label: "Organic Traffic", value: "4,391/mo", growth: "+418%", from: "from 847" },
    ],
    monthly: [
      // Month 1: Inherited site, technical audit underway, baseline measurement
      { month: "Month 1", keywords: 291, top10: 24, top3: 4, traffic: 847, pages: 22, avgPos: 43.2, ctr: 1.1 },
      // Month 2: Technical fixes live, first batch of articles and service pages published
      { month: "Month 2", keywords: 378, top10: 37, top3: 6, traffic: 1143, pages: 41, avgPos: 38.6, ctr: 1.3 },
      // Month 3: Content ramping, programmatic pages indexing, compliance content gaining traction
      { month: "Month 3", keywords: 523, top10: 56, top3: 9, traffic: 1687, pages: 64, avgPos: 33.4, ctr: 1.5 },
      // Month 4: Strong indexing, but competitive head terms (MDR, pen testing) still tough — slight plateau
      { month: "Month 4", keywords: 694, top10: 78, top3: 13, traffic: 2241, pages: 79, avgPos: 29.7, ctr: 1.7 },
      // Month 5: Backlink efforts compounding, long-tail cybersecurity queries breaking through
      { month: "Month 5", keywords: 847, top10: 103, top3: 17, traffic: 2893, pages: 91, avgPos: 27.1, ctr: 1.9 },
      // Month 6: Authority building — compliance pages ranking, some head terms cracking page 1
      { month: "Month 6", keywords: 987, top10: 124, top3: 21, traffic: 3412, pages: 98, avgPos: 25.3, ctr: 2.1 },
      // Month 7: Content refresh cycle paying off, featured snippets for FAQ content
      { month: "Month 7", keywords: 1134, top10: 147, top3: 26, traffic: 3947, pages: 104, avgPos: 23.8, ctr: 2.3 },
      // Month 8: Compounding gains — strong topical authority, consistent organic lead flow
      { month: "Month 8", keywords: 1263, top10: 168, top3: 31, traffic: 4391, pages: 109, avgPos: 22.4, ctr: 2.5 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$165.7K" },
      { label: "Qualified Leads (SQLs)", value: "128" },
      { label: "Avg Cost Per Qualified Lead", value: "$1,294", note: "↓22% from $1,654" },
      { label: "Closed Contracts", value: "30" },
    ],
    monthly: [
      // Month 1: Inherited account — baseline performance, auditing and restructuring
      { month: "Month 1", spend: 19847, leads: 29, cpl: 684, qualified: 12, cpql: 1654, deals: 2, revenue: 47283, roas: 2.38 },
      // Month 2: Campaign restructure live, paused low-intent keywords, new landing pages
      { month: "Month 2", spend: 20413, leads: 33, cpl: 619, qualified: 14, cpql: 1458, deals: 3, revenue: 68917, roas: 3.37 },
      // Month 3: Creative iterations paying off, compliance-focused messaging resonating
      { month: "Month 3", spend: 21176, leads: 37, cpl: 572, qualified: 16, cpql: 1324, deals: 4, revenue: 91847, roas: 4.34 },
      // Month 4: Seasonal softening — Q4 budget freezes at some target accounts, slight dip
      { month: "Month 4", spend: 19638, leads: 34, cpl: 578, qualified: 15, cpql: 1309, deals: 3, revenue: 78213, roas: 3.98 },
      // Month 5: Recovery and optimization — lead scoring refinements, audience pruning working
      { month: "Month 5", spend: 20761, leads: 38, cpl: 546, qualified: 17, cpql: 1221, deals: 4, revenue: 97463, roas: 4.69 },
      // Month 6: Lookalike audiences from closed-won hitting stride, strong deal flow
      { month: "Month 6", spend: 21384, leads: 41, cpl: 522, qualified: 18, cpql: 1188, deals: 5, revenue: 103847, roas: 4.86 },
      // Month 7: Summer slowdown in enterprise buying cycles, slight dip in deal velocity
      { month: "Month 7", spend: 20293, leads: 39, cpl: 520, qualified: 17, cpql: 1194, deals: 4, revenue: 94187, roas: 4.64 },
      // Month 8: Budget increase + Q4 compliance deadline urgency driving high-intent traffic
      { month: "Month 8", spend: 22147, leads: 43, cpl: 515, qualified: 19, cpql: 1166, deals: 5, revenue: 108917, roas: 4.92 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$690.7K", growth: "+145%" },
    { label: "Total Pipeline", value: "$1.43M", growth: "+106%" },
    { label: "Avg Revenue Per Contract", value: "$23,022", growth: "" },
    { label: "Blended ROAS", value: "4.17x", growth: "" },
  ],
};
