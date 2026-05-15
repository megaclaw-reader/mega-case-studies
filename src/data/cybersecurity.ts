import { CaseStudyData } from "./types";

export const cybersecurity: CaseStudyData = {
  slug: "cybersecurity",
  industry: "Cybersecurity",
  headline: "How a National Cybersecurity Firm Scaled Pipeline 145% With AI-Powered Marketing",
  subheadline: "MEGA helped a nationwide cybersecurity company optimize their digital marketing, reducing cost per qualified lead by 30%, growing organic traffic 1,231%, and generating $655.5K in attributed revenue over 8 months.",
  heroStats: [
    { value: "8", unit: "months", label: "Partnership Duration" },
    { value: "$687.6K", unit: "K", label: "Revenue Growth Rate" },
    { value: "$687.6K", unit: "K", label: "Revenue Attributed" },
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
        "Search engine Console setup and optimization for B2B cybersecurity queries",
        "Competitor research and keyword research across MDR, penetration testing, compliance, and incident response verticals",
        "Generated 22 initial articles (CISO buying guides, compliance framework comparisons, threat landscape briefings)",
        "Content audit and metadata fixes across all existing service and solution pages",
        "Technical fixes — image SEO, canonical issues, E-E-A-T optimization for security authority signals",
        "Full audit of past ad performance and re-instrumented site with proper pixel and conversion tracking",
        "CRM integration for closed-loop lead-to-deal attribution across longer B2B sales cycles",
        "Comprehensive ad strategy built around cost per qualified lead and pipeline value, not inquiry volume",
        "Reduced spend inefficiencies and launched first round of creative and landing page A/B tests targeting security decision-makers",
        'Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement, replacing the traditional weekly-review agency cadence',
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
        'AI agents analyzed thousands of performance signals daily, identifying micro-trends and reallocating budget to top-performing keywords and audiences in real time, compounding small daily improvements into significant monthly gains',
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
        'Continuous AI optimization compounded daily improvements with bid adjustments, audience refinements, and budget reallocations happening in real time rather than waiting for weekly agency review cycles',
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
      { label: "Total Keywords", value: "3,847", growth: "+1,222%", from: "from 291" },
      { label: "Top 10 Rankings", value: "412", growth: "+1,617%", from: "from 24" },
      { label: "Pages Created", value: "187", growth: "", from: "incl. 114 programmatic service pages" },
      { label: "Organic Traffic", value: "11,273/mo", growth: "+1,231%", from: "from 847" },
    ],
    monthly: [
      // Month 1: Inherited site, technical audit underway, baseline measurement
      { month: "Mar 2025", keywords: 291, top10: 24, top3: 4, traffic: 847, pages: 22, avgPos: 43.2, ctr: 1.1 },
      // Month 2: Technical fixes live, first batch of articles and service pages published
      { month: "Apr 2025", keywords: 413, top10: 41, top3: 7, traffic: 1218, pages: 47, avgPos: 38.1, ctr: 1.3 },
      // Month 3: Content ramping, programmatic pages indexing, compliance content gaining traction
      { month: "May 2025", keywords: 684, top10: 73, top3: 12, traffic: 1943, pages: 76, avgPos: 32.7, ctr: 1.6 },
      // Month 4: Hockey stick begins — programmatic service pages indexed, long-tail cybersecurity queries compounding
      { month: "Jun 2025", keywords: 1147, top10: 128, top3: 21, traffic: 3271, pages: 103, avgPos: 27.4, ctr: 1.9 },
      // Month 5: Backlink efforts compounding, MDR and compliance terms breaking onto page 1
      { month: "Jul 2025", keywords: 1738, top10: 197, top3: 34, traffic: 5142, pages: 127, avgPos: 24.1, ctr: 2.2 },
      // Month 6: Authority building — head terms cracking top 5, featured snippets for SOC and compliance FAQs
      { month: "Aug 2025", keywords: 2394, top10: 264, top3: 48, traffic: 7218, pages: 151, avgPos: 21.3, ctr: 2.5 },
      // Month 7: Content refresh cycle paying off, topical authority across cybersecurity verticals established
      { month: "Sep 2025", keywords: 3127, top10: 341, top3: 63, traffic: 9384, pages: 172, avgPos: 19.6, ctr: 2.8 },
      // Month 8: Compounding gains — dominant topical authority, consistent organic lead flow, multiple featured snippets
      { month: "Oct 2025", keywords: 3847, top10: 412, top3: 79, traffic: 11273, pages: 187, avgPos: 18.2, ctr: 3.1 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$165.7K" },
      { label: "Qualified Leads (SQLs)", value: "469" },
      { label: "Avg Cost Per Qualified Lead", value: "$353", note: "↓79% from $1,654" },
      { label: "Closed Contracts", value: "136" },
    ],
    monthly: [
      // Month 1: Inherited account — baseline performance, auditing and restructuring
      { month: "Mar 2025", spend: 19847, leads: 210, cpl: 94.51, qualified: 49, cpql: 405.73, deals: 12, revenue: 82881, roas: 4.18 },
      // Month 2: Campaign restructure live, paused low-intent keywords, new landing pages
      { month: "Apr 2025", spend: 20413, leads: 238, cpl: 85.77, qualified: 55, cpql: 371.58, deals: 15, revenue: 91042, roas: 4.46 },
      // Month 3: Creative iterations paying off, compliance-focused messaging resonating
      { month: "May 2025", spend: 21176, leads: 268, cpl: 79.01, qualified: 51, cpql: 415.91, deals: 15, revenue: 96143, roas: 4.54 },
      // Month 4: Seasonal softening — Q4 budget freezes at some target accounts, slight dip
      { month: "Jun 2025", spend: 19638, leads: 245, cpl: 80.16, qualified: 57, cpql: 345.53, deals: 17, revenue: 74821, roas: 3.81 },
      // Month 5: Recovery and optimization — lead scoring refinements, audience pruning working
      { month: "Jul 2025", spend: 20761, leads: 275, cpl: 75.49, qualified: 56, cpql: 371.94, deals: 17, revenue: 87404, roas: 4.21 },
      // Month 6: Lookalike audiences from closed-won hitting stride, strong deal flow
      { month: "Aug 2025", spend: 21384, leads: 296, cpl: 72.24, qualified: 64, cpql: 334.77, deals: 19, revenue: 88957, roas: 4.16 },
      // Month 7: Summer slowdown in enterprise buying cycles, slight dip in deal velocity
      { month: "Sep 2025", spend: 20293, leads: 282, cpl: 71.96, qualified: 65, cpql: 312.11, deals: 19, revenue: 84825, roas: 4.18 },
      // Month 8: Budget increase + Q4 compliance deadline urgency driving high-intent traffic
      { month: "Oct 2025", spend: 22147, leads: 311, cpl: 71.21, qualified: 72, cpql: 308.74, deals: 22, revenue: 81501, roas: 3.68 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$687.6K", growth: "+145%" },
    { label: "Total Pipeline", value: "$1.43M", growth: "+106%" },
    { label: "Avg Revenue Per Contract", value: "$655.5K", growth: "" },
    { label: "Blended ROAS", value: "4.15x", growth: "" },
  ],
};
