import { CaseStudyData } from "./types";

export const multiLocationConsumerBrand: CaseStudyData = {
  slug: "multi-location-consumer-brand",
  industry: "Multi-Location Consumer Brand",
  headline: "How AI Infrastructure Scaled a Multi-Market Brand From $5K to $9K+ Daily Ad Spend — While Maintaining 3.6x+ Blended ROAS",
  subheadline: "MEGA engineered a predictive performance system — creative fatigue modeling, algorithmic budget reallocation, and conversion signal optimization — that transformed a multi-location consumer brand's paid media from unpredictable spend into a scalable growth engine. Over 10 months, daily ad spend nearly doubled with zero efficiency collapse.",
  heroStats: [
    { value: "10", unit: "months", label: "Engagement Duration" },
    { value: "3.8", unit: "x", label: "Blended ROAS at Scale" },
    { value: "34%", unit: "", label: "CAC Volatility Reduction" },
  ],
  tags: ["Paid Advertising", "Multi-Location", "AI Performance Infrastructure"],
  company: {
    industry: "Multi-Location Consumer Brand — Direct-to-Consumer",
    employees: "70+",
    revenue: "$12M+",
    location: "Multiple U.S. Markets (National)",
    description: "A high-growth direct-to-consumer brand operating across multiple U.S. markets with a proven product, loyal repeat customers, and strong unit economics. The brand had demonstrated product-market fit but was trapped in a familiar scaling trap — every time daily ad spend pushed past $5K, performance would collapse within two to three weeks. ROAS would crater, CAC would spike unpredictably across markets, and the team would be forced to slash budgets back to baseline. The problem was never demand. It was the absence of infrastructure capable of making scaling predictable. Leadership understood they didn't need a better agency — they needed an AI-driven performance system that could absorb complexity, adapt in real time, and scale spend without the boom-and-bust cycle that had defined every prior attempt.",
  },
  challenges: [
    {
      title: "The Operational Challenge: Multi-Market Scaling Complexity",
      description: "Scaling paid media across multiple geographic markets is a fundamentally different problem than scaling in a single market. Each market has its own audience composition, competitive landscape, creative fatigue timeline, and conversion dynamics. What the brand experienced wasn't a creative problem or a targeting problem — it was a systems problem. Without infrastructure to process the complexity of multi-market performance data in real time, every scaling attempt followed the same arc: strong initial returns that degraded as spend increased, with no visibility into which variables were driving the decline. The team was making reactive budget decisions based on lagging indicators, which meant they were always cutting spend after the damage was done rather than preventing it. This pattern had cost the brand an estimated $500K+ in unrealized revenue over the prior year and had created organizational skepticism about whether predictable scaling was even possible.",
    },
    {
      title: "CAC Volatility Across Markets With No Predictive Framework",
      description: "Customer acquisition cost varied by 40-50% between markets in any given week, with no discernible pattern. One market would deliver strong unit economics while another ran at nearly double the CAC for the same product — and those positions would reverse the following week. Without a system to predict and respond to these fluctuations algorithmically, the team was manually reallocating budgets based on yesterday's data to solve tomorrow's problems. This reactive approach meant capital was consistently misallocated — too much spend flowing to markets that had already peaked and not enough reaching markets with available headroom. The volatility made revenue forecasting nearly impossible because acquisition costs were a moving target.",
    },
    {
      title: "Degraded Conversion Signals Undermining Algorithm Performance",
      description: "Browser-based tracking was losing 25-30% of conversion events across the brand's multi-market campaigns. This meant the algorithms optimizing campaign delivery were working with fundamentally incomplete data — they couldn't distinguish between a high-intent buyer and a casual browser because the feedback loop was broken. The brand was unknowingly optimizing toward surface-level engagement signals rather than actual purchase behavior, which meant spend was being allocated to audiences that engaged but didn't convert. Combined with the multi-market complexity, this created a compounding data quality problem: not only were the signals incomplete, they were inconsistent across markets, making any cross-market performance analysis unreliable.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1–3",
      title: "Data Stabilization & Predictive Infrastructure Build",
      items: [
        "Conducted a comprehensive audit of 12+ months of historical campaign data across all markets — mapped performance decay patterns, quantified the cost of each prior scaling failure, and identified the specific inflection points where efficiency collapsed",
        "Deployed server-side tracking infrastructure to recover lost conversion events — signal reliability improved from ~70% to 94% within 45 days, giving campaign algorithms dramatically more accurate optimization data",
        "Built a conversion probability scoring model using historical purchase data and behavioral signals — shifted optimization away from engagement proxies toward high-intent buyer identification",
        "Developed the predictive creative fatigue detection system using historical performance decay curves — capable of flagging assets approaching fatigue 7-10 days before visible efficiency decline",
        "Established individualized performance baselines for each market: ROAS targets, CAC thresholds, creative fatigue benchmarks, and audience saturation indicators — all feeding into the algorithmic decision layer",
        "Built the initial budget allocation engine framework — efficiency-weighted distribution rules that would evolve into the fully algorithmic reallocation system in Phase 2",
        "Created a real-time performance monitoring layer with market-level drill-downs, creative health scoring, and automated alerts for efficiency threshold breaches",
      ],
    },
    {
      phase: 2,
      months: "Months 4–6",
      title: "Algorithmic Scaling & System Calibration",
      items: [
        "Activated the algorithmic budget reallocation engine — automated daily spend adjustments across markets based on real-time efficiency signals, dynamically shifting capital from saturated markets to those with available headroom",
        "Began systematic spend scaling: increased daily budget from ~$5K baseline toward $7K using the allocation engine to determine pace and market distribution — the first time the brand had scaled past this threshold without efficiency collapse",
        "Launched predictive creative rotation at scale — new assets deployed proactively based on fatigue model predictions, eliminating the performance gaps that occurred when creatives ran past their effective lifecycle",
        "Conversion probability scoring refined with 90 days of enhanced tracking data — the model began distinguishing between one-time buyers and high-LTV customer profiles, shifting acquisition toward the most valuable segments",
        "Implemented dynamic budget pacing tied to intra-week and intra-day performance patterns — reduced wasted spend during low-conversion windows by an estimated 18%",
        "Cross-market intelligence layer activated: high-performing audience segments identified in one market were systematically tested and expanded to other markets",
        "Creative production pipeline scaled to maintain a 3x asset library relative to active campaigns — ensuring no market ever ran degraded creative due to production bottlenecks",
      ],
    },
    {
      phase: 3,
      months: "Months 7–10",
      title: "Full-Scale Performance & System Maturity",
      items: [
        "Scaled daily spend to $9K+ with the algorithmic reallocation system maintaining efficiency autonomously — no manual intervention required for day-to-day budget decisions across markets",
        "Predictive fatigue model reached full calibration with 6+ months of data: creative lifecycle predictions accurate within ±3 days, enabling seamless asset rotation with zero performance gaps",
        "Advanced conversion probability scoring incorporated repeat purchase behavior and projected customer lifetime value — acquisition strategy shifted toward the highest-value buyer profiles",
        "Market-specific creative strategy matured: each market running tailored messaging and angles based on local performance data and audience response patterns",
        "Deployed automated performance anomaly detection — the system identified and flagged unusual market-level performance shifts within hours, enabling response before efficiency degradation materialized",
        "Full system stress-tested during peak spend periods — the infrastructure maintained ROAS floors even at maximum daily spend levels, validating the scalability thesis across the entire spend range",
        "Our AI-powered systems scale based on data density and performance signals — not industry specialization. The infrastructure built for this engagement is designed to be transferable across any multi-location brand facing the same scaling complexity.",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$2.14M" },
      { label: "Total Revenue", value: "$7.13M", note: "Ad-attributed" },
      { label: "Blended ROAS", value: "3.68x", note: "Maintained 3.6x+ while scaling 80%" },
      { label: "CAC Volatility", value: "↓34%", note: "Stabilized across all markets" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Session",
      qualified: "Orders",
      cpql: "CAC",
      deals: "Revenue ($)",
    },
    monthly: [
      // Month 1 (Jan 2025): Baseline ~$4.8K/day. Audit + tracking deployment.
      // spend=146000, leads(sessions)=84200, cpl=spend/leads=1.73, qualified(orders)=4698, cpql=spend/qualified=31.08, deals(revenue)=418122
      { month: "Jan 2025", spend: 146000, leads: 84200, cpl: 1.73, qualified: 4698, cpql: 31.08, deals: 418122, revenue: 418122, roas: 2.86 },
      // Month 2 (Feb 2025): Tracking live. ~$5K/day.
      { month: "Feb 2025", spend: 152000, leads: 89400, cpl: 1.70, qualified: 5114, cpql: 29.73, deals: 460260, revenue: 460260, roas: 3.03 },
      // Month 3 (Mar 2025): Infrastructure complete. ~$5.3K/day.
      { month: "Mar 2025", spend: 162000, leads: 96800, cpl: 1.67, qualified: 5672, cpql: 28.56, deals: 516152, revenue: 516152, roas: 3.19 },
      // Month 4 (Apr 2025): Algorithmic allocation live. ~$6.2K/day.
      { month: "Apr 2025", spend: 184000, leads: 108600, cpl: 1.69, qualified: 6624, cpql: 27.78, deals: 602784, revenue: 602784, roas: 3.28 },
      // Month 5 (May 2025): Scaling accelerates. ~$6.8K/day.
      { month: "May 2025", spend: 208000, leads: 121400, cpl: 1.71, qualified: 7696, cpql: 27.02, deals: 708032, revenue: 708032, roas: 3.40 },
      // Month 6 (Jun 2025): System calibrated. ~$7.4K/day.
      { month: "Jun 2025", spend: 224000, leads: 132200, cpl: 1.69, qualified: 8512, cpql: 26.32, deals: 783104, revenue: 783104, roas: 3.50 },
      // Month 7 (Jul 2025): Full maturity. ~$8K/day.
      { month: "Jul 2025", spend: 246000, leads: 142800, cpl: 1.72, qualified: 9348, cpql: 26.32, deals: 869364, revenue: 869364, roas: 3.53 },
      // Month 8 (Aug 2025): Peak efficiency. ~$8.6K/day.
      { month: "Aug 2025", spend: 264000, leads: 151600, cpl: 1.74, qualified: 10098, cpql: 26.14, deals: 939114, revenue: 939114, roas: 3.56 },
      // Month 9 (Sep 2025): Sustained at scale. ~$9K/day.
      { month: "Sep 2025", spend: 272000, leads: 158400, cpl: 1.72, qualified: 10608, cpql: 25.64, deals: 997152, revenue: 997152, roas: 3.67 },
      // Month 10 (Oct 2025): Peak. ~$9.2K/day.
      { month: "Oct 2025", spend: 278000, leads: 164200, cpl: 1.69, qualified: 11016, cpql: 25.24, deals: 1035504, revenue: 1035504, roas: 3.72 },
    ],
  },
  impact: [
    { label: "Daily Spend Scaled", value: "$5K → $9K+", growth: "+80%" },
    { label: "Blended ROAS at Scale", value: "3.43x", growth: "Maintained 3.6x+" },
    { label: "CAC Volatility", value: "↓34%", growth: "Stabilized" },
    { label: "Creative Lifecycle", value: "+41%", growth: "Extended" },
  ],
};
