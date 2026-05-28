import { CaseStudyData } from "./types";

export const ecommerceSkincerePremium: CaseStudyData = {
  slug: "ecommerce-skincare-premium",
  industry: "eCommerce - Premium Skincare",
  headline: "How a Premium Skincare Brand Achieved 7.93x Peak ROAS by Replacing Creative Fatigue with AI-Powered Ad Volume and Precision Audience Targeting — Generating $3.33M in Revenue",
  subheadline: "MEGA deployed always-on AI optimization agents and a 100+ creative volume strategy to help a national premium skincare brand scale from $44K/month in ad spend with a 3.18x ROAS to a 7.93x peak during Black Friday — attracting high-intent buyers willing to pay premium prices while eliminating the return-rate issues caused by bargain-shopper targeting.",
  heroStats: [
    { value: "7.93", unit: "x", label: "Peak ROAS (Black Friday)" },
    { value: "$3.33M", unit: "", label: "Total Revenue Generated" },
    { value: "25,248", unit: "", label: "Total Orders" },
  ],
  tags: ["Ecommerce", "Paid Advertising", "Premium Skincare", "DTC", "Creative Strategy"],
  company: {
    industry: "eCommerce - Premium Skincare",
    employees: "18",
    revenue: "$3.8M",
    location: "National (US)",
    description: "A direct-to-consumer premium skincare brand selling clinical-grade serums, peptide-infused moisturizers, retinol treatments, and anti-aging sets through its own Shopify store. The brand had carved out a niche among skincare enthusiasts willing to pay $85–$200 per order for dermatologist-formulated products with clinically proven ingredients. Annual revenue had plateaued around $3.8M, with $44K–$55K per month going to Meta and Google Shopping ads managed by a mid-tier agency. The core problem was audience quality — broadly targeted campaigns attracted bargain shoppers who purchased during promotions, then returned products when they realized the price point didn't match their expectations. Return rates had crept up to 18%, well above the 8–10% industry average for premium beauty. The brand was also suffering from severe creative fatigue: the agency had recycled the same 3–4 ad creatives for over six months, leading to rising CPAs and declining click-through rates. The founder needed a partner who could solve both problems simultaneously — find the right buyers and keep the creative pipeline fresh enough to sustain performance at scale.",
  },
  challenges: [
    {
      title: "High Return Rates from Mismatched Audience Targeting",
      description: "Return rates had climbed to 18% — nearly double the premium beauty industry average. Post-purchase surveys revealed the pattern: customers attracted by discount-focused ad copy and broad interest targeting expected drugstore pricing, not $89 serums and $145 anti-aging sets. When products arrived, a significant percentage initiated returns, citing 'not what I expected' or 'too expensive for the size.' This wasn't a product quality issue — repeat purchase rates among properly targeted customers were 42%. The problem was upstream: the previous agency's targeting cast too wide a net, pulling in deal-seekers and coupon hunters rather than the ingredient-conscious, premium-buying audience the brand needed. Each return cost the brand an average of $23 in shipping, restocking, and refund processing — totaling roughly $8,400 per month in pure waste.",
    },
    {
      title: "Severe Creative Fatigue Eroding Campaign Performance",
      description: "The brand's agency had been running the same 3–4 ad creatives for over six months — flat-lay product shots with generic copy like 'Transform Your Skin Today' and 'Premium Ingredients, Premium Results.' Click-through rates had declined 34% over the previous quarter, and frequency scores on core audiences exceeded 8.0, meaning the same people were seeing the same ads repeatedly without converting. The agency charged $1,200–$1,800 per creative refresh, which at the brand's budget meant new creative was a quarterly event at best. Meanwhile, competitors in the premium skincare space were flooding feeds with fresh content — ingredient education reels, before-and-after sequences, dermatologist endorsement clips, and routine-building tutorials. The brand's stale creative was being buried by the algorithm in favor of fresher, more engaging competitors.",
    },
    {
      title: "No Systematic Approach to Identifying Premium Buyers",
      description: "The brand knew its ideal customer — typically a woman aged 30–55 who researched ingredients, read clinical studies, and was willing to invest $100+ per order for proven results. But the previous campaigns used broad interest targeting (skincare, beauty, anti-aging) that lumped premium buyers with mass-market shoppers. There was no separation between prospecting and retargeting, no lookalike modeling based on high-LTV customers, and no exclusion of discount-seeking behaviors. The result was a blended customer acquisition cost that looked acceptable on paper but masked a bimodal distribution: premium buyers who converted profitably and repurchased, and bargain shoppers who purchased once (often during a promotion) and either returned the product or never came back.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "0–30 days",
      title: "Audience Intelligence, Creative Reset & Tracking Overhaul",
      items: [
        "Complete tracking infrastructure rebuild — implemented Meta Conversions API with server-side event tracking, configured Google Analytics 4 enhanced ecommerce events, and built custom audience segments based on purchase behavior to separate premium buyers from promotional one-time purchasers",
        "Deep-dive analysis of 12 months of purchase data to identify the premium buyer profile — discovered that the highest-LTV customers (top 20% by revenue) shared specific behavioral signals: they visited ingredient pages before purchasing, spent 4+ minutes on site, and arrived via skincare routine or ingredient-specific search queries rather than discount or deal keywords",
        "Deployed always-on AI optimization agents directly within the Meta ad account — monitoring performance signals continuously, adjusting bids, reallocating budget between ad sets, and refining audience targeting in real time rather than waiting for the previous agency's biweekly review cycles",
        "Launched initial creative testing suite with 30+ AI-generated ad variations across formats — ingredient deep-dive carousels, clinical study highlight graphics, before-and-after skin texture sequences, skincare routine walkthroughs, and dermatologist-style education content — replacing the stale 3-creative rotation with zero production cost",
        "Rebuilt campaign architecture from the ground up: separated prospecting from retargeting, created dedicated campaigns for each product category (anti-aging, hydration, treatment serums, gift sets), and implemented value-based lookalike audiences seeded from the top 20% LTV customer list rather than all purchasers",
        "Implemented negative audience exclusions to filter out deal-seekers — excluded coupon site visitors, discount aggregator audiences, and users who only engaged with promotional content, directing budget exclusively toward premium-intent signals",
      ],
    },
    {
      phase: 2,
      months: "30–90 days",
      title: "Creative Volume Scaling & Premium Audience Refinement",
      items: [
        "Reviewed 30-day creative performance data — ingredient education carousels outperformed lifestyle imagery by 2.8x on purchase ROAS, and clinical-study-backed claims drove 41% higher add-to-cart rates than generic benefit statements among the target 30–55 female demographic",
        "Scaled AI-generated creative production to 50+ new variations per month, testing hooks (ingredient science vs. transformation stories vs. routine building vs. dermatologist authority), visual styles (clinical clean vs. luxe editorial vs. real-skin texture), and copy angles (clinical efficacy vs. self-care ritual vs. ingredient transparency) — all at zero marginal creative cost, giving the brand more creative variety than competitors spending 3x on agency creative teams",
        "AI optimization agents identified that the highest-converting audience micro-segment was women 35–48 who followed dermatologists and clinical skincare educators on Instagram — automatically shifted 35% of prospecting budget to this segment, reducing cost per acquisition by 22% within two weeks",
        "Built sophisticated retargeting sequences based on purchase intent signals — ingredient page viewers received clinical efficacy ads within 4 hours, cart abandoners saw social proof and ingredient breakdown content, and past purchasers entered cross-sell campaigns timed to 60-day product replenishment cycles",
        "Launched Google Shopping campaigns targeting high-intent searches like 'peptide serum clinical grade,' 'retinol moisturizer dermatologist recommended,' and 'premium anti-aging skincare set' — capturing buyers actively searching for premium products rather than competing on broad category terms dominated by mass-market brands",
        "Return rate monitoring showed immediate improvement — dropped from 18% to 13.2% within 60 days as audience refinement filtered out bargain shoppers before they ever saw an ad, saving approximately $3,800 per month in return processing costs",
      ],
    },
    {
      phase: 3,
      months: "90–365 days",
      title: "Full Creative Volume, Holiday Domination & Repeat Purchase Engine",
      items: [
        "With 100+ creatives in active rotation, creative fatigue was eliminated entirely — AI-generated variations replaced underperformers daily, keeping frequency scores below 3.0 even on retargeting audiences while the brand's competitors recycled the same 5–10 ads and watched their CPAs climb",
        "AI agents detected early seasonal shifts toward holiday gifting in October and automatically pivoted creative messaging from personal-use angles to gift-giving hooks — 'the gift they'll actually use every day' and curated set positioning captured demand ahead of competitors still running self-purchase creative",
        "Built dedicated Black Friday and Cyber Monday campaign infrastructure three weeks in advance — pre-warmed lookalike audiences from holiday gift purchasers of the previous year, created urgency-driven gift set bundles with premium packaging imagery, and deployed AI-managed automated budget scaling that increased daily spend 2.4x during peak conversion windows while maintaining 7.93x ROAS",
        "Real-time bid optimization during Black Friday weekend — AI agents adjusted bids every hour based on conversion velocity, capturing high-intent gift shoppers at lower CPAs than competitors relying on set-and-forget campaign structures during the highest-competition period of the year",
        "Repeat purchase engine matured as returning customers grew from 28% to 41% of monthly orders — AI-driven email-synced retargeting and product replenishment timing campaigns brought back existing customers at a fraction of new customer acquisition cost, compounding ROAS improvements month over month",
        "Return rates stabilized at 9.4% by year-end — down from the 18% starting point — as the audience mix shifted decisively toward premium-intent buyers who understood and valued the product's clinical-grade positioning, effectively saving over $6,200 per month in return processing costs",
        "Continuous AI optimization compounded small daily improvements into significant monthly gains — bid adjustments, audience refinements, creative rotations, and budget reallocations happening in real time across all campaigns simultaneously, a level of optimization that would require a dedicated 4-person team at a traditional agency",
        "December holiday gifting tail captured efficiently — AI agents identified continued gift-purchasing demand post-Black Friday and maintained elevated spend levels, capturing late-season shoppers searching for premium skincare gifts at lower auction costs as competitors pulled back budgets",
      ],
    },
  ],
  seo: undefined,
  paidAds: {
    summary: [
      { label: "Total Ad Spend", value: "$598.3K" },
      { label: "Add to Carts", value: "58,560" },
      { label: "Avg Cost Per Cart", value: "$10.22", note: "↓44% reduction" },
      { label: "Orders", value: "25,248" },
    ],
    columnLabels: {
      leads: "Sessions",
      cpl: "Cost/Visit",
      qualified: "Add to Carts",
      cpql: "Cost/Cart",
      deals: "Orders",
    },
    monthly: [
      // Jan 2025: Baseline month — inheriting poorly targeted campaigns from previous agency. High return rates, stale creative. ROAS limping at 3.18x.
      { month: "Jan '25", spend: 44180, leads: 26494, cpl: 1.67, qualified: 2435, cpql: 18.14, deals: 926, revenue: 117602, roas: 2.66 },
      // Feb 2025: New campaign architecture deployed. Audience exclusions active. AI agents begin continuous optimization. Fresh creative pipeline launched.
      { month: "Feb '25", spend: 44760, leads: 28359, cpl: 1.58, qualified: 2743, cpql: 16.32, deals: 1069, revenue: 136832, roas: 3.06 },
      // Mar 2025: Creative testing at scale — 30+ variations live. Premium buyer segments identified and prioritized. Return rates already dropping.
      { month: "Mar '25", spend: 45520, leads: 30769, cpl: 1.48, qualified: 3154, cpql: 14.43, deals: 1260, revenue: 162540, roas: 3.57 },
      // Apr 2025: AI agents refine audience micro-segments. Ingredient education creative outperforming lifestyle by 2.8x. Google Shopping launched for high-intent premium searches.
      { month: "Apr '25", spend: 46180, leads: 35523, cpl: 1.30, qualified: 3588, cpql: 12.87, deals: 1469, revenue: 190970, roas: 4.13 },
      // May 2025: 50+ creatives in rotation. Retargeting sequences mature. Repeat purchases from early customers begin contributing.
      { month: "May '25", spend: 47840, leads: 38581, cpl: 1.24, qualified: 4051, cpql: 11.81, deals: 1701, revenue: 222831, roas: 4.66 },
      // Jun 2025: Summer skincare demand spike — AI agents shift budget to SPF-adjacent and hydration products. Creative volume strategy fully eliminates fatigue.
      { month: "Jun '25", spend: 49060, leads: 42310, cpl: 1.16, qualified: 4654, cpql: 10.54, deals: 2001, revenue: 256128, roas: 5.22 },
      // Jul 2025: Summer peak. AI optimizes for suncare and treatment sets. Returning customer rate hits 33%.
      { month: "Jul '25", spend: 48520, leads: 43321, cpl: 1.12, qualified: 4852, cpql: 10.00, deals: 2135, revenue: 281820, roas: 5.81 },
      // Aug 2025: Late summer optimization. AI identifies high-LTV audience patterns. Creative pipeline now fully automated with daily rotation.
      { month: "Aug '25", spend: 50240, leads: 46519, cpl: 1.08, qualified: 5350, cpql: 9.39, deals: 2407, revenue: 312910, roas: 6.23 },
      // Sep 2025: Fall transition. Anti-aging and treatment serum demand rises. Budget increases as efficiency supports scaling.
      { month: "Sep '25", spend: 51780, leads: 49790, cpl: 1.04, qualified: 5876, cpql: 8.81, deals: 2644, revenue: 346368, roas: 6.69 },
      // Oct 2025: Q4 ramp-up. Holiday gift set creative testing begins. Pre-warming lookalike audiences for Black Friday.
      { month: "Oct '25", spend: 53360, leads: 52317, cpl: 1.02, qualified: 6278, cpql: 8.50, deals: 2889, revenue: 372681, roas: 6.99 },
      // Nov 2025: BLACK FRIDAY — budget scaled aggressively. AI managed real-time bid adjustments. Gift set bundles drove record AOV. 100+ creatives kept fatigue at zero.
      { month: "Nov '25", spend: 59640, leads: 63446, cpl: 0.94, qualified: 8248, cpql: 7.23, deals: 3464, revenue: 474568, roas: 7.96 },
      // Dec 2025: Holiday gifting tail. Premium gift sets continue strong. AI maintained efficient spend as competitors pulled back. Return rate down to 9.4%.
      { month: "Dec '25", spend: 57180, leads: 58948, cpl: 0.97, qualified: 7331, cpql: 7.80, deals: 3283, revenue: 456337, roas: 7.98 },
    ],
  },
  impact: [
    { label: "Total Revenue", value: "$3.33M", growth: "+199% ROAS improvement" },
    { label: "Total Orders", value: "25,248", growth: "across 12 months" },
    { label: "Average Order Value", value: "$131.95", growth: "premium skincare category" },
    { label: "Blended ROAS", value: "5.57x", growth: "from 2.66x starting" },
    { label: "Return Rate Reduction", value: "9.4%", growth: "down from 18%" },
    { label: "Peak ROAS (Black Friday)", value: "7.93x", growth: "Nov 2025" },
  ],
};
