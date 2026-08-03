import { CaseStudyData } from "./types";

export const fragranceEcommerceNational: CaseStudyData = {
  slug: "fragrance-ecommerce-national",
  industry: "Fragrance Brand",
  headline: "How a Niche Fragrance Brand Scaled From $3K/Month in Ad Spend to 4.81x Blended ROAS — Generating $426K+ in Revenue Over 13 Months",
  subheadline: "MEGA deployed always-on AI optimization agents and a high-velocity creative testing strategy to help a direct-to-consumer fragrance brand with zero paid advertising history build a profitable acquisition engine — scaling from $3,000/month to over $14,000/month in ad spend while achieving a 4.81x blended ROAS and generating 5,064 orders across 13 months.",
  heroStats: [
    { value: "5.92", unit: "x", label: "Peak ROAS Achieved" },
    { value: "$426K", unit: "+", label: "Total Revenue Generated" },
    { value: "5,064", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "DTC", "Fragrance"],
  company: {
    industry: "Fragrance Brand",
    employees: "4",
    revenue: "$180K",
    location: "National (USA)",
    description: "A direct-to-consumer fragrance brand specializing in handcrafted perfumes, colognes, and scented body products made with natural and sustainably sourced ingredients. The brand had cultivated a loyal following through organic social media content, artisan markets, and word-of-mouth referrals — generating approximately $180K in annual revenue primarily through its ecommerce store and a small wholesale channel. Despite strong product-market fit evidenced by a 42% repeat purchase rate and a devoted community of fragrance enthusiasts, the business had never invested in paid advertising. The founder was hesitant about paid channels, concerned that the brand's artisanal positioning would be diluted by aggressive advertising and uncertain whether the unit economics could support customer acquisition costs at scale. With organic growth plateauing and competitors in the niche fragrance space beginning to invest heavily in paid channels, the founder recognized the need for a structured, data-driven paid advertising strategy that could scale profitably without compromising the brand's premium positioning.",
  },
  challenges: [
    {
      title: "Zero Paid Advertising Infrastructure or Historical Data",
      description: "Unlike brands that come to an agency with underperforming campaigns and months of pixel data, this client was starting from absolute zero. There were no conversion events configured, no pixel data accumulated, no audience segments built, no retargeting pools established, and no historical performance benchmarks to reference. Every campaign decision — from audience targeting to creative format to budget allocation — would need to be made without the benefit of historical conversion data. The advertising algorithms had no purchase signals to optimize against, meaning the early weeks would require significant manual oversight and rapid iteration to build the data foundation that most brands take for granted. Additionally, the modest $3,000 monthly starting budget meant there was very little room for inefficient learning — every dollar of wasted spend during the ramp-up period would be felt acutely.",
    },
    {
      title: "Premium Pricing in a Fragrance Market Dominated by Mass-Market Brands",
      description: "The brand's average order value of $82–$95 placed it firmly in the artisan/niche segment — significantly above mass-market fragrances but below luxury designer houses. This positioning created a unique advertising challenge: the target audience was sophisticated enough to recognize and value quality ingredients and craftsmanship, but not necessarily searching for the brand by name. Paid advertising would need to educate potential customers on the brand's value proposition — the sourcing story, the ingredient quality, the handcrafted process — before asking for a purchase. Standard product-shot ads that work for commodity beauty products would fail to communicate the brand's differentiation, requiring a creative strategy that could convey artisanal quality within the constraints of short-form ad formats.",
    },
    {
      title: "Seasonal Demand Patterns With a Narrow Gift-Giving Window",
      description: "Fragrance is one of the most seasonally concentrated product categories in ecommerce, with an estimated 35–40% of annual sales occurring in November and December during the holiday gift-giving season. Valentine's Day and Mother's Day create secondary spikes, but the core challenge was building sufficient campaign maturity and audience data by Q4 to capitalize on the holiday window. Starting paid advertising in January meant the brand had roughly 10 months to build its advertising infrastructure, refine its creative strategy, identify its highest-value audience segments, and accumulate enough conversion data for the algorithms to optimize effectively — all before the make-or-break holiday season. Missing the Q4 window would mean waiting an entire year for the next major revenue opportunity.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Pixel Foundation, Audience Architecture & Initial Creative Testing",
      items: [
        "Implemented comprehensive conversion tracking infrastructure from scratch — configured purchase, add-to-cart, view-content, and initiate-checkout events with server-side tracking to ensure accurate attribution from the very first campaign dollar spent",
        "Deployed always-on AI optimization agents directly within the ad account — monitoring performance signals continuously and adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than waiting for weekly manual review cycles that would waste precious learning budget at $3K/month",
        "Built foundational audience architecture using the brand's existing customer list (2,100+ purchasers) as seed data for lookalike audiences, layered with interest-based targeting around artisan products, natural ingredients, niche perfumery, and luxury gifting",
        "Launched initial creative testing suite with 10 AI-generated ad variations across formats — ingredient close-ups highlighting natural botanicals, behind-the-scenes craftsmanship sequences, scent profile storytelling cards, and customer unboxing experiences — all produced at zero marginal cost, giving the brand more creative variety on a $3K budget than competitors spending $10K with traditional agencies",
        "Structured campaign architecture around the fragrance purchase journey: prospecting campaigns focused on brand discovery and ingredient education, mid-funnel campaigns featuring scent quiz engagement and sample set offers, and retargeting campaigns with urgency-driven messaging for site visitors who browsed but didn't purchase",
        "Established baseline performance benchmarks across all metrics — cost per visit, add-to-cart rate, cart-to-purchase conversion rate, and ROAS — creating the measurement framework needed for systematic optimization in subsequent phases",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Data-Driven Scaling & Creative Velocity",
      items: [
        "Analyzed first 30 days of structured campaign data — discovered that behind-the-scenes craftsmanship content outperformed product-only imagery by 2.3x on purchase conversion, and that ingredient storytelling carousels drove 41% higher add-to-cart rates than standard lifestyle shots among the core 28–45 demographic",
        "Scaled AI-generated creative production to 15–20 new variations per month, iterating on winning patterns — layering scent profile descriptions over visual sequences, testing different opening hooks (ingredient origin stories vs. customer transformation narratives vs. seasonal occasion framing), and rotating formats between static, carousel, and short-form video",
        "AI optimization agents identified that evening hours between 8–11 PM drove 34% higher conversion rates for fragrance purchases — automatically shifting budget weighting to capture these high-intent browsing sessions when customers were most receptive to discovery-oriented content",
        "Increased monthly budget from $3,000 to $4,500 as early campaign data validated profitable unit economics — ROAS climbed above 3x threshold, justifying incremental spend while maintaining the disciplined scaling approach required at this budget level",
        "Built dynamic retargeting sequences calibrated to fragrance purchase behavior — cart abandoners received product-specific ads featuring scent note breakdowns within 4 hours, browse abandoners entered a 7-day fragrance education sequence highlighting ingredient sourcing stories, and past purchasers received complementary product recommendations timed to 60-day replenishment cycles",
        "AI agents detected that sample set and discovery kit campaigns generated 2.1x higher lifetime value per acquired customer compared to full-size direct purchases — automatically reallocated 25% of prospecting budget toward sample-first acquisition funnels that created a pipeline of future full-size purchasers",
      ],
    },
    {
      phase: 3,
      months: "90–180 days",
      title: "Audience Expansion & Pre-Holiday Foundation",
      items: [
        "With 20+ creatives in active rotation, creative fatigue was eliminated — AI-generated variations replaced underperformers within days rather than the typical monthly refresh cycle, keeping cost per acquisition stable as spend scaled from $5K to $8K per month",
        "Expanded audience targeting beyond core fragrance enthusiasts to adjacent interest categories — clean beauty consumers, luxury candle collectors, artisan gift shoppers, and wellness-oriented demographics — uncovering new customer segments with comparable or higher conversion rates",
        "AI agents analyzed cross-product purchase patterns and identified that customers who purchased a full-size fragrance after starting with a discovery set had 68% higher 90-day revenue per customer — this insight reshaped the entire funnel strategy to prioritize sample-to-full-size conversion paths",
        "Launched Valentine's Day and Mother's Day seasonal campaigns with gift-focused messaging, custom bundle offers, and complimentary gift wrapping positioning — generating seasonal revenue spikes without disrupting the evergreen campaign structure",
        "Budget allocation decisions driven entirely by real-time performance data — AI agents continuously shifted spend between audience segments, creative formats, and campaign objectives based on conversion velocity rather than arbitrary monthly allocation plans",
        "Began Q4 preparation in September — built and warmed holiday-specific lookalike audiences, developed gift guide creative concepts, and structured a Black Friday campaign architecture designed to scale spend aggressively during peak conversion windows",
      ],
    },
    {
      phase: 4,
      months: "180–390 days",
      title: "Holiday Scaling, Black Friday Execution & Sustained Growth",
      items: [
        "Executed a meticulously planned Black Friday and Cyber Monday campaign that more than doubled daily ad spend during peak windows — AI agents managed real-time bid adjustments across all campaign segments, capturing holiday gift shoppers at scale while maintaining 5.87x ROAS during the highest-converting weekend of the year",
        "AI agents detected the seasonal shift toward gift purchasing in early November and automatically pivoted creative messaging from personal-use angles to gift-giving hooks — 'the perfect gift for someone who has everything' and curated gift set positioning captured demand that competitors running static self-purchase campaigns missed",
        "Scaled monthly budget to $14,200 during November — a 4.7x increase from the starting $3,000 — with every incremental dollar validated by real-time ROAS data and managed by AI agents that throttled or accelerated spend hour-by-hour based on conversion performance",
        "Post-Black Friday December optimization — rather than retreating to baseline spend, AI agents identified sustained gift-purchasing demand through December 20th and maintained elevated spending at profitable ROAS levels, capturing late-season shoppers at lower auction costs as competitors pulled back",
        "January 2026 demonstrated the compounding value of 13 months of accumulated data — New Year self-care campaigns and gift card redemptions drove 5.92x ROAS at $9,400 monthly spend, proving the advertising engine could sustain and even accelerate growth beyond holiday peaks",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, and budget reallocations happening continuously rather than in periodic review cycles, delivering results that would require a dedicated 3-person media team to replicate manually",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$88.7K" },
      { label: "Add to Carts", value: "8,125" },
      { label: "Avg Cost Per Cart", value: "$10.92", note: "↓43% reduction" },
      { label: "Orders", value: "5,064" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Month 1 — Starting from zero. Pixel deployed, first campaigns launched. Learning phase with minimal data.
      { month: "Jan '25", spend: 3010, leads: 2148, cpl: 1.40, qualified: 158, cpql: 19.05, deals: 82, revenue: 6724, roas: 2.23 },
      // Feb 2025: Valentine's Day creates first seasonal opportunity. Early creative wins emerging from testing.
      { month: "Feb '25", spend: 3240, leads: 2468, cpl: 1.31, qualified: 210, cpql: 15.43, deals: 118, revenue: 9912, roas: 3.06 },
      // Mar 2025: Post-Valentine normalization. Algorithm learning continues. Budget held steady.
      { month: "Mar '25", spend: 3180, leads: 2507, cpl: 1.27, qualified: 226, cpql: 14.07, deals: 131, revenue: 10743, roas: 3.38 },
      // Apr 2025: Spring scent launch. Creative testing scaled. First budget increase justified by data.
      { month: "Apr '25", spend: 4520, leads: 3738, cpl: 1.21, qualified: 345, cpql: 13.10, deals: 198, revenue: 16632, roas: 3.68 },
      // May 2025: Mother's Day gift campaigns. Strong seasonal uplift. AI agents optimize gifting audiences.
      { month: "May '25", spend: 5180, leads: 4456, cpl: 1.16, qualified: 423, cpql: 12.25, deals: 251, revenue: 21836, roas: 4.22 },
      // Jun 2025: Summer fragrance discovery period. New audience segments performing well.
      { month: "Jun '25", spend: 5640, leads: 4971, cpl: 1.13, qualified: 467, cpql: 12.08, deals: 279, revenue: 23478, roas: 4.16 },
      // Jul 2025: Mid-summer. Testing summer-specific scent messaging. Steady performance.
      { month: "Jul '25", spend: 5890, leads: 5326, cpl: 1.11, qualified: 502, cpql: 11.73, deals: 304, revenue: 25840, roas: 4.39 },
      // Aug 2025: Late summer. Back-to-school adjacent gift positioning. Pre-Q4 audience building begins.
      { month: "Aug '25", spend: 6210, leads: 5721, cpl: 1.09, qualified: 548, cpql: 11.33, deals: 332, revenue: 28554, roas: 4.60 },
      // Sep 2025: Fall scent collection launch. Q4 preparation. Budget scaled for holiday runway.
      { month: "Sep '25", spend: 7340, leads: 6888, cpl: 1.07, qualified: 639, cpql: 11.49, deals: 389, revenue: 34138, roas: 4.65 },
      // Oct 2025: Pre-holiday ramp. Gift guide campaigns launched. Audience warming for BFCM.
      { month: "Oct '25", spend: 9480, leads: 9102, cpl: 1.04, qualified: 873, cpql: 10.86, deals: 521, revenue: 45843, roas: 4.84 },
      // Nov 2025: BLACK FRIDAY / CYBER MONDAY — Major spike. AI agents manage real-time bid adjustments at peak scale.
      { month: "Nov '25", spend: 14210, leads: 14923, cpl: 0.95, qualified: 1512, cpql: 9.40, deals: 1038, revenue: 83532, roas: 5.87 },
      // Dec 2025: Holiday gifting tail. Sustained high spend for last-minute gift shoppers.
      { month: "Dec '25", spend: 11370, leads: 11142, cpl: 1.02, qualified: 1098, cpql: 10.35, deals: 763, revenue: 63558, roas: 5.59 },
      // Jan 2026: New Year self-care campaigns + gift card redemptions drive continued momentum.
      { month: "Jan '26", spend: 9430, leads: 11248, cpl: 0.84, qualified: 1124, cpql: 8.39, deals: 658, revenue: 55872, roas: 5.92 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$426.7K", growth: "+165% ROAS improvement" },
    { label: "Total Orders", value: "5,064", growth: "across 13 months" },
    { label: "Average Order Value", value: "$84.25", growth: "niche fragrance category" },
    { label: "Blended ROAS", value: "4.81x", growth: "from 2.23x starting" },
  ],
};
