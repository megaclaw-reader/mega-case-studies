import { CaseStudyData } from "./types";

export const businessBrokerage: CaseStudyData = {
  slug: "business-brokerage",
  industry: "Business Brokerage",
  headline: "How a National Business Brokerage Firm Built a Predictable Seller Pipeline and Reduced Cost Per Qualified Lead by 81% in 9 Months",
  subheadline: "MEGA helped a national business brokerage firm transform paid advertising into a predictable pipeline engine — shifting from unqualified inquiries to high-value seller conversations and credible buyer engagements, achieving 3.5x ROAS while reducing cost per qualified opportunity from $693 to $134 over 9 months of AI-powered campaign optimization.",
  heroStats: [
    { value: "121", unit: "K", label: "Revenue Attributed" },
    { value: "81", unit: "%", label: "Cost/Qualified Lead Reduction" },
    { value: "3.5", unit: "x", label: "Average ROAS" },
    { value: "52", unit: "%", label: "Qualified Lead Rate (Final)" }
  ],
  tags: ["Paid Advertising", "AI-Powered Optimization", "B2B Lead Generation", "Pipeline Acceleration"],
  company: {
    industry: "Business Brokerage",
    employees: "11",
    revenue: "$1.8M",
    location: "National (US-based)",
    description: "A national business brokerage firm specializing in facilitating the sale and acquisition of small-to-mid-market businesses across multiple sectors including retail, food service, professional services, and light manufacturing. The firm earns commissions of 8–12% on completed transactions, with average business sale prices ranging from $200K to $2M+. Each deal involves extensive due diligence, valuation preparation, buyer qualification, and negotiation — with typical sales cycles spanning 3 to 6 months from initial lead to closed transaction. The firm had relied primarily on referrals, industry networking, and outbound prospecting to generate both seller listings and buyer interest. As competition in the brokerage space intensified and referral volume plateaued, the firm engaged MEGA to build a scalable, paid advertising–driven pipeline targeting both business owners considering a sale and qualified buyers seeking acquisition opportunities."
  },
  challenges: [
    {
      title: "No Scalable Lead Generation Beyond Referrals and Networking",
      description: "The firm's entire pipeline depended on personal relationships, industry events, and word-of-mouth referrals. While these channels produced high-quality introductions, they were unpredictable and impossible to scale. Monthly lead flow varied wildly — some months producing 8–10 seller inquiries, others just 1–2. There was no system to proactively reach business owners considering a sale or buyers actively searching for acquisition targets. The team spent significant time on outbound cold outreach with low conversion rates, and had never run structured digital advertising campaigns."
    },
    {
      title: "Difficulty Separating Qualified Sellers and Buyers from Tire-Kickers",
      description: "Business brokerage attracts a wide spectrum of inquiries — from serious business owners ready to sell within 6–12 months to casual browsers curious about their business value with no real intent. On the buyer side, the range was even wider: from funded, experienced acquirers with proof of funds and clear acquisition criteria to individuals with unrealistic expectations and no capital. The firm wasted significant broker time on unqualified conversations, with less than 25% of inbound inquiries leading to a meaningful consultation. There was no pre-qualification system, no lead scoring, and no way to filter intent before a broker invested time in a phone call."
    },
    {
      title: "Long Sales Cycles Made Traditional ROI Measurement Difficult",
      description: "With 3–6 month timelines from initial inquiry to a signed listing agreement (seller side) or completed acquisition (buyer side), measuring the effectiveness of any marketing effort required patience and sophisticated attribution. The firm had no CRM tracking marketing source through the full deal cycle, making it impossible to determine which lead sources actually produced closed transactions versus just initial inquiries. Commission revenue per deal ($20K–$200K+) meant even a single additional closed transaction per quarter could justify significant marketing investment — but without attribution, the firm couldn't make that case confidently."
    }
  ],
  strategy: [
    {
      phase: 1,
      months: "Months 1–3",
      title: "Foundation, Launch & Learning Phase",
      items: [
        "Comprehensive paid advertising audit and campaign architecture — designed separate campaign structures for seller acquisition (valuation requests, exit planning inquiries) and buyer acquisition (business search, acquisition opportunity inquiries) with distinct messaging, landing pages, and qualification paths",
        "Built dedicated landing pages for each audience segment — seller pages emphasized confidential business valuations, market timing insights, and exit planning resources; buyer pages highlighted curated deal flow, due diligence support, and acquisition financing guidance",
        "Deployed always-on AI optimization agents within ad accounts for continuous bid management, budget allocation, and audience refinement — monitoring performance signals and adjusting in real time rather than waiting for weekly agency review cycles",
        "Launched initial keyword campaigns targeting high-intent search terms — 'sell my business,' 'business valuation,' 'buy a business,' 'businesses for sale,' and industry-specific acquisition terms across multiple business categories",
        "Implemented aggressive negative keyword filtering during weeks 1–4 — identified and excluded 140+ irrelevant search terms including franchise opportunities, business plan templates, startup advice, and job-seeking queries that burned early budget",
        "Installed full-funnel tracking infrastructure — form submissions, phone calls, consultation bookings, and CRM integration to track every lead from first click through signed listing agreement or completed acquisition",
        "Created lead scoring framework distinguishing seller quality tiers (casual valuation curiosity vs. active exit planning vs. ready-to-list) and buyer quality tiers (browsing vs. proof-of-funds-ready vs. actively acquiring)",
        "A/B tested landing page conversion elements — tested form length (short vs. detailed qualification questions), trust signals (transaction volume, confidentiality guarantees), and call-to-action copy across both seller and buyer funnels"
      ]
    },
    {
      phase: 2,
      months: "Months 4–6",
      title: "Optimization & Qualification Improvement",
      items: [
        "AI agents identified winning keyword and audience patterns — shifted budget toward search terms producing qualified seller conversations (valuation requests from businesses with $500K+ revenue) and away from low-intent informational queries",
        "Refined landing page conversion paths based on 90-day performance data — seller page conversion rate improved from 5.2% to 8.7% by adding industry-specific valuation context and reducing form friction",
        "Launched remarketing campaigns targeting website visitors who engaged with valuation tools or business listings but didn't convert — tailored messaging addressed common hesitations around confidentiality, timing, and broker fees",
        "Implemented automated lead qualification sequences — pre-screening questions on forms filtered out unqualified inquiries before broker time was invested, improving the qualified lead percentage from 27% to 38%",
        "Advanced audience refinement using AI-powered signal detection — identified demographic, behavioral, and search patterns that correlated with high-quality seller leads versus casual browsers, enabling more precise targeting",
        "Budget reallocation based on pipeline economics — shifted 60% of spend toward seller acquisition campaigns (higher value per conversion) while maintaining buyer presence at efficient cost levels",
        "Tested consultation booking integration — direct calendar scheduling for qualified leads reduced response time from 48 hours to same-day, improving lead-to-consultation rate from 12% to 18%",
        "Developed seasonal messaging variations — adjusted ad copy and landing page emphasis around tax season (exit planning urgency), year-end (business valuation timing), and economic cycle messaging"
      ]
    },
    {
      phase: 3,
      months: "Months 7–9",
      title: "Pipeline Economics & Scale",
      items: [
        "Shifted optimization focus from cost per lead to cost per signed listing/engagement — the true north-star metric for brokerage profitability — with AI agents tracking full-funnel conversion data to optimize campaigns against downstream outcomes",
        "AI optimization compounded daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening continuously rather than in periodic review cycles",
        "Scaled seller acquisition campaigns into adjacent business categories showing strong conversion rates — expanded from core sectors into healthcare practices, e-commerce businesses, and professional services firms",
        "Advanced buyer qualification funnel — implemented proof-of-funds verification and NDA completion steps earlier in the process, dramatically reducing broker time spent on unqualified buyer conversations",
        "Real-time performance monitoring detected competitive shifts and seasonal demand changes — campaigns adjusted within hours to capture emerging opportunities around year-end exit planning and January acquisition activity",
        "Developed attribution model connecting marketing spend to signed listings and closed transactions — demonstrating clear ROI from advertising investment with commission values far exceeding total campaign spend",
        "Expanded geographic targeting for buyer campaigns — identified metro areas with highest concentration of qualified buyers based on conversion data and expanded reach to capture cross-market acquisition interest",
        "Continuous landing page optimization — final seller landing page conversion rate reached 11.4%, with buyer pages converting at 7.8%, both well above industry benchmarks for professional services advertising"
      ]
    }
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Avg Cost Per Lead", value: "$100.03" },
      { label: "Avg Cost Per Qualified Lead", value: "$231.84" },
      { label: "Lead-to-Qualification Rate", value: "43.1%" },
      { label: "Total Signed Listings/Engagements", value: "18" },
      { label: "Avg ROAS", value: "3.53x" }
    ],
    columnLabels: {
      leads: "Leads (Inquiries)",
      cpl: "Cost/Lead",
      qualified: "Qualified Leads",
      cpql: "Cost/Qualified Lead",
      deals: "Signed Listings"
    },
    monthly: [
      {
        month: "Jun '25",
        spend: 3465,
        leads: 22,
        cpl: 157.50,
        qualified: 5,
        cpql: 693.00,
        deals: 0,
        revenue: 4851,
        roas: 1.40
      },
      {
        month: "Jul '25",
        spend: 3521,
        leads: 25,
        cpl: 140.84,
        qualified: 7,
        cpql: 503.00,
        deals: 1,
        revenue: 7922,
        roas: 2.25
      },
      {
        month: "Aug '25",
        spend: 3678,
        leads: 28,
        cpl: 131.36,
        qualified: 10,
        cpql: 367.80,
        deals: 1,
        revenue: 9747,
        roas: 2.65
      },
      {
        month: "Sep '25",
        spend: 3842,
        leads: 34,
        cpl: 113.00,
        qualified: 13,
        cpql: 295.54,
        deals: 2,
        revenue: 12871,
        roas: 3.35
      },
      {
        month: "Oct '25",
        spend: 4127,
        leads: 41,
        cpl: 100.66,
        qualified: 18,
        cpql: 229.28,
        deals: 2,
        revenue: 16095,
        roas: 3.90
      },
      {
        month: "Nov '25",
        spend: 3986,
        leads: 43,
        cpl: 92.70,
        qualified: 21,
        cpql: 189.81,
        deals: 3,
        revenue: 17259,
        roas: 4.33
      },
      {
        month: "Dec '25",
        spend: 3587,
        leads: 39,
        cpl: 91.97,
        qualified: 17,
        cpql: 211.00,
        deals: 2,
        revenue: 14312,
        roas: 3.99
      },
      {
        month: "Jan '26",
        spend: 4214,
        leads: 56,
        cpl: 75.25,
        qualified: 28,
        cpql: 150.50,
        deals: 3,
        revenue: 19427,
        roas: 4.61
      },
      {
        month: "Feb '26",
        spend: 3892,
        leads: 55,
        cpl: 70.76,
        qualified: 29,
        cpql: 134.21,
        deals: 4,
        revenue: 18604,
        roas: 4.78
      }
    ]
  },
  impact: [
    { label: "Total Revenue Attributed", value: "$121,088", growth: "From $0 digital pipeline" },
    { label: "Blended ROAS", value: "3.53x", growth: "Against $34,312 total spend" },
    { label: "Total Qualified Leads", value: "148", growth: "43.1% qualification rate" },
    { label: "Signed Listings/Engagements", value: "18", growth: "From 0 digitally sourced" },
    { label: "Cost Per Qualified Lead Reduction", value: "81%", growth: "From $693 to $134" },
    { label: "Seller Landing Page Conversion", value: "11.4%", growth: "From 5.2% initial" },
    { label: "Lead to Consultation Rate", value: "24%", growth: "From 10% initial" },
    { label: "Qualified Lead Rate", value: "52%", growth: "From 25% in month 1" }
  ]
};
