import { CaseStudyData } from "./types";

export const probiotics: CaseStudyData = {
  slug: "probiotics",
  industry: "Probiotics",
  headline: "How a National DTC Probiotics Brand Generated $1.4M in Revenue in 7 Months",
  subheadline: "MEGA helped a direct-to-consumer probiotics company drive $1.4M in ecommerce revenue through AI-powered paid advertising and SEO — steadily improving ROAS every single month while capitalizing on Black Friday demand and building a compounding organic search presence.",
  heroStats: [
    { value: "7", unit: "months", label: "Partnership Duration" },
    { value: "7.70", unit: "x", label: "Peak ROAS Achieved" },
    { value: "1.4", unit: "M", label: "Revenue Generated" },
  ],
  tags: ["Ecommerce", "SEO", "Paid Advertising", "DTC"],
  company: {
    industry: "Probiotics — DTC Health & Wellness",
    employees: "42",
    revenue: "$6.8M",
    location: "National (USA)",
    description: "A direct-to-consumer probiotics brand offering a range of gut health supplements including daily probiotic capsules, prebiotic fiber blends, women's health formulas, and targeted digestive support products. The company had established a strong retail presence through partnerships with natural grocery chains and Amazon, generating roughly $6.8M in annual revenue — but their own ecommerce channel was underperforming despite growing consumer demand for gut health products. Paid advertising was running at inconsistent ROAS with no structured testing framework, creative was refreshed quarterly at best, and the brand had virtually no organic search footprint despite operating in a category where consumers actively research before purchasing. They needed a partner who could systematically scale their DTC channel while building the long-term organic presence that supplement brands depend on for sustainable growth.",
  },
  challenges: [
    {
      title: "Inconsistent ROAS With No Systematic Optimization",
      description: "The brand was spending over $20K per month on Meta and Google Shopping but ROAS fluctuated wildly between 2.5x and 4.8x with no discernible pattern. There was no A/B testing framework, no audience segmentation beyond basic interest targeting, and campaign optimizations happened during monthly agency calls rather than in real time. Creative consisted of the same six static product images that had been running for over four months, leading to severe creative fatigue and rising CPMs. Retargeting was a single catch-all audience with no segmentation by product interest or purchase stage.",
    },
    {
      title: "Minimal Organic Search Presence in a Research-Heavy Category",
      description: "Probiotics is one of the most research-intensive supplement categories — consumers search for specific strains, CFU counts, clinical studies, and condition-specific benefits before purchasing. Despite this, the brand had only 420 indexed keywords and roughly 2,300 monthly organic visitors. Product pages had manufacturer-standard descriptions with no educational depth, there was no blog or content hub addressing the hundreds of high-volume questions consumers ask about gut health, and zero schema markup for product rich snippets. Competitors with robust content strategies were capturing tens of thousands of monthly organic visitors at zero acquisition cost.",
    },
    {
      title: "No Seasonal Strategy Despite Clear Demand Patterns",
      description: "Gut health and probiotics follow predictable seasonal demand curves — New Year's wellness resolutions drive a January surge, back-to-school immune support peaks in August-September, and Black Friday represents the largest supplement buying event of the year. Yet the brand ran flat budgets year-round with no seasonal creative, no promotional calendar, and no inventory-aligned campaign strategy. Their previous November performance was actually lower than October, leaving significant revenue on the table during the highest-intent shopping period of the year.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Foundation, Tracking & Audience Architecture",
      items: [
        "Complete tracking audit — reconfigured Meta Conversions API for server-side purchase attribution, fixed Google Analytics event tracking for add-to-cart and checkout steps, and established proper UTM taxonomy across all campaigns",
        "Product catalog audit across 34 SKUs — segmented by margin tier, search volume, and competitive positioning with gut health daily capsules and women's probiotics identified as highest-opportunity products",
        "Competitive analysis of top 12 DTC probiotic and supplement brands — mapped their ad creative strategies, keyword portfolios, pricing models, and content approaches to identify positioning gaps",
        "Rebuilt campaign architecture from scratch: separate prospecting and retargeting streams, segmented by product category (daily gut health, women's formula, digestive support, prebiotic blends) and customer intent level",
        "Deployed always-on AI optimization agents directly within ad accounts — monitoring performance signals, adjusting bids, reallocating budget, and refining audience targeting in real time rather than waiting for monthly agency review cycles",
        "Launched initial creative testing suite with 20 AI-generated ad variations across static images, carousels, and short-form video — seeding the algorithm with diverse signals from day one while eliminating the $500-$2K per-creative production costs typical of agency engagements",
        "Generated 8 foundational SEO articles covering probiotic strain guides, CFU count explanations, gut-brain connection content, and condition-specific supplement guides targeting high-volume informational queries",
        "Product page SEO overhaul — rewrote descriptions for all 34 SKUs with unique benefit-focused copy emphasizing strain specificity, clinical backing, and use-case differentiation, plus structured data markup for product rich snippets",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Scaling & Conversion Optimization",
      items: [
        "Reviewed 30-day performance data — AI agents identified daily gut health capsules and women's probiotics as the highest-ROAS product segments, triggering automatic budget reallocation of 40% away from underperforming digestive support campaigns",
        "Scaled AI-generated creative production to 40+ new variations per month, testing transformation stories, ingredient science hooks, doctor-endorsed messaging, and before/after gut health journeys — keeping the feed fresh at a pace impossible for traditional creative teams",
        "AI agents detected early signs of creative fatigue on top-performing static ads within hours and automatically rotated in fresh variations, maintaining click-through rates while competitors recycled the same handful of ads",
        "Built dynamic retargeting sequences — cart abandoners saw product-specific ads with strain benefit reminders within 2 hours, browse abandoners entered a 7-day gut health education sequence, and past purchasers received cross-sell campaigns for complementary products",
        "Generated 22 additional SEO articles targeting long-tail keywords — probiotic strain comparisons, gut health for specific conditions, prebiotic vs probiotic guides, and seasonal immune support content",
        "Launched category landing pages optimized for commercial-intent keywords like 'best probiotic supplement,' 'women's probiotic capsules,' and 'gut health supplements online'",
        "Implemented review schema and clinical study callouts on product pages to improve organic click-through rates and build purchase confidence",
        "Budget allocation decisions driven entirely by real-time performance data across all channels — not arbitrary splits based on industry benchmarks or account manager intuition",
      ],
    },
    {
      phase: 3,
      months: "90–210 days",
      title: "Seasonal Capitalization & Black Friday Execution",
      items: [
        "With 50+ creatives in active rotation, campaign eliminated creative fatigue entirely — new AI-generated variations replaced underperformers daily while traditional competitors recycled the same 4-5 ads month after month",
        "Built comprehensive Black Friday and Cyber Monday campaign structure 3 weeks in advance — pre-warmed audiences with gut health education content, created urgency-driven creative variants featuring bundle deals and subscription offers, and set up automated budget scaling rules to capture peak demand",
        "November budget surge of 49% above baseline to capture Black Friday and Cyber Monday demand — AI agents managed the increased spend in real time, optimizing bids every 15 minutes during peak shopping hours to maintain profitability even as auction competition drove CPMs up 35%",
        "AI agents identified the seasonal shift toward New Year's wellness resolution traffic in December and proactively reallocated budget toward immune support and digestive health products — capturing demand 2 weeks before competitors adjusted their campaigns",
        "Continued SEO content production at scale — published New Year's gut health reset guides, winter immune support content, probiotic FAQ compilations, and strain comparison articles that captured seasonal search surges",
        "Advanced audience segmentation using AI-identified patterns — subscription-prone customers, seasonal buyers, and high-LTV gut health enthusiasts each received tailored creative and offers",
        "Expanded Google Shopping campaigns with optimized product feeds, competitive pricing annotations, and seller ratings to improve impression share on high-intent commercial searches",
        "Real-time performance monitoring detected and responded to competitive shifts, seasonal trends, and algorithm changes within hours rather than the typical agency cycle of days or weeks — compounding small daily improvements into the consistent month-over-month ROAS growth the brand was seeking",
      ],
    },
  ],
  seo: {
    summary: [
      { label: "Total Keywords", value: "1,867", growth: "+345%", from: "from 420" },
      { label: "Top 10 Rankings", value: "276", growth: "+886%", from: "from 28" },
      { label: "Pages Created", value: "76", growth: "", from: "incl. 52 articles + 14 category pages" },
      { label: "Organic Traffic", value: "9,840/mo", growth: "+320%", from: "from 2,340" },
    ],
    monthly: [
      { month: "Jul 2025", keywords: 420, top10: 28, top3: 4, traffic: 2340, pages: 8, avgPos: 42.8, ctr: 0.9 },
      { month: "Aug 2025", keywords: 612, top10: 47, top3: 8, traffic: 2890, pages: 18, avgPos: 36.4, ctr: 1.2 },
      { month: "Sep 2025", keywords: 834, top10: 78, top3: 14, traffic: 3580, pages: 30, avgPos: 31.2, ctr: 1.6 },
      { month: "Oct 2025", keywords: 1067, top10: 118, top3: 23, traffic: 4490, pages: 42, avgPos: 26.8, ctr: 2.0 },
      { month: "Nov 2025", keywords: 1312, top10: 164, top3: 34, traffic: 5870, pages: 54, avgPos: 22.4, ctr: 2.3 },
      { month: "Dec 2025", keywords: 1578, top10: 214, top3: 48, traffic: 7420, pages: 64, avgPos: 19.1, ctr: 2.7 },
      { month: "Jan 2026", keywords: 1867, top10: 276, top3: 64, traffic: 9840, pages: 76, avgPos: 16.4, ctr: 3.1 },
    ],
  },
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$212.2K" },
      { label: "Add to Carts", value: "46,010" },
      { label: "Avg Cost Per Cart", value: "$4.61", note: "↓32% reduction" },
      { label: "Orders", value: "26,411" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jul 2025: Launch month — foundation, audience building. Summer gut health steady state.
      { month: "Jul 2025", spend: 23456, leads: 38614, cpl: 0.61, qualified: 4247, cpql: 5.52, deals: 2309, revenue: 120089, roas: 5.12 },
      // Aug 2025: Optimization kicking in, back-to-school immune support. Improving efficiency.
      { month: "Aug 2025", spend: 25890, leads: 43150, cpl: 0.60, qualified: 4890, cpql: 5.29, deals: 2718, revenue: 141876, roas: 5.48 },
      // Sep 2025: Fall wellness season, creative scaling in full effect.
      { month: "Sep 2025", spend: 27340, leads: 47138, cpl: 0.58, qualified: 5382, cpql: 5.08, deals: 3120, revenue: 161592, roas: 5.91 },
      // Oct 2025: Pre-holiday ramp-up, audience warming for Q4. Strong steady performance.
      { month: "Oct 2025", spend: 29670, leads: 52982, cpl: 0.56, qualified: 6106, cpql: 4.86, deals: 3583, revenue: 188104, roas: 6.34 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — massive revenue spike. Peak ecom month.
      { month: "Nov 2025", spend: 44230, leads: 88460, cpl: 0.50, qualified: 11500, cpql: 3.85, deals: 5989, revenue: 319812, roas: 7.23 },
      // Dec 2025: Holiday gifting + post-BF momentum. Strong retention campaigns.
      { month: "Dec 2025", spend: 31450, leads: 57182, cpl: 0.55, qualified: 7217, cpql: 4.36, deals: 4372, revenue: 236528, roas: 7.52 },
      // Jan 2026: New Year's wellness resolutions — strong gut health demand.
      { month: "Jan 2026", spend: 30120, leads: 53786, cpl: 0.56, qualified: 6668, cpql: 4.52, deals: 4320, revenue: 231999, roas: 7.70 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$1.40M", growth: "+50% ROAS improvement" },
    { label: "Total Orders", value: "26,411", growth: "across 7 months" },
    { label: "Average Order Value", value: "$53.01", growth: "probiotics category" },
    { label: "Blended ROAS", value: "6.60x", growth: "from 5.12x starting" },
  ],
};
