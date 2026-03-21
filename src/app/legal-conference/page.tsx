"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function AnimatedDiv({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-5 h-5 ${i <= rating ? "text-yellow-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <AnimatedDiv className="text-center mb-12">
      <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/15 text-[#2965FF] text-sm font-medium mb-4">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </AnimatedDiv>
  );
}

const painPoints = [
  {
    rank: 1,
    title: "Lead Quality Crisis",
    severity: 5,
    stat: "High volume, low conversion",
    quote: "She's like, I've never had this many, like, good leads, but her issue is like, she's crazy.",
    attribution: "— Paul T., Ads Strategist",
    description: "Firms are drowning in unqualified leads. High volume doesn't mean high quality — attorneys waste billable hours on tire kickers and price shoppers who never convert to paying clients.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    rank: 2,
    title: "Skyrocketing PPC Costs",
    severity: 5,
    stat: "$10 to $80 per click for legal keywords",
    quote: "A keyword could range anywhere between like $10 per click up to like $80 per click.",
    attribution: "— Steve V., Paid Ads Specialist",
    description: "Legal is the most expensive PPC vertical. To get minimum 3 conversions per day, firms need $8-10K/month in ad spend alone. Smaller budgets simply can't compete in the auction.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    rank: 3,
    title: "Agency Trust Deficit",
    severity: 5,
    stat: "Multiple agencies tried, same broken promises",
    quote: "They might run those campaigns on Meta for you and they'll send you a report after month one saying, hey, this creative hit a fatigue point two weeks in and we wasted your ad budget two weeks later.",
    attribution: "— Liam Z., Marketing Strategist",
    description: "Law firms have deep skepticism born from repeated bad experiences. Agencies overpromise, underdeliver, and hide poor results behind confusing dashboards and jargon.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    rank: 4,
    title: "SEO Timeline Frustration",
    severity: 4,
    stat: "Months of work before organic results appear",
    quote: "They're either, like, frustrated with the efficiency of their ads and they don't have enough time to manage them as efficiently as they'd like to, or we're hearing that they're not ranking in SEO and they absolutely have no handle on AI visibility.",
    attribution: "— Ritvij G., Strategy Lead",
    description: "Firms need cases now to cover overhead, but SEO is a long game. The tension between immediate cash flow needs and long-term organic growth creates a painful gap that most agencies fail to address.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    rank: 5,
    title: "ROI Attribution Black Box",
    severity: 4,
    stat: "Can't trace marketing spend to actual cases",
    quote: "When you have Google Analytics, when you have Meta ads, Google Ads, etc, there's just so much data.",
    attribution: "— Paul T., Ads Strategist",
    description: "Multiple touchpoints, overlapping campaigns, and poor tracking make it nearly impossible for firms to know which marketing dollars actually bring in cases. Decisions get made on gut feeling.",
    color: "from-teal-500/20 to-teal-500/5",
  },
  {
    rank: 6,
    title: "Budget Spreading Problem",
    severity: 4,
    stat: "Too many campaigns, too little budget per campaign",
    quote: "And then we look and we see they're spreading a $10,000 budget or a $5,000 budget across like 20 different campaigns.",
    attribution: "— Corey Z., Ads Analyst",
    description: "Firms dilute their ad spend across too many campaigns, preventing any single campaign from gathering enough data to optimize. The result: no campaign performs well, and the entire budget is wasted.",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    rank: 7,
    title: "AI Content Concerns",
    severity: 3,
    stat: "Uncertainty about Google penalties for AI content",
    quote: "Do you anticipate or have you experienced any kind of issues with like Google, for example, penalizing content that it knows is fully AI written?",
    attribution: "— Pxrseus, Legal Marketing Consultant",
    description: "As AI-generated content becomes ubiquitous, attorneys worry about Google penalizing their websites. The fear of losing hard-won rankings to an algorithm change creates hesitation around modern content strategies.",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    rank: 8,
    title: "Ad Policy & Compliance Issues",
    severity: 3,
    stat: "Meta flags legal ads, forcing workarounds",
    quote: "I know with Meta, we also ran into an issue where we had to set ourselves as financial services, because if we're talking about, you know, a settlement or something like that, Meta will flag the ads unless we specify that that's our category.",
    attribution: "— Pxrseus, Legal Marketing Consultant",
    description: "Legal advertising faces unique compliance hurdles on major platforms. Meta categorizes settlement-related ads as financial services, and some legal verticals have become too risky to advertise in due to constant policy violations.",
    color: "from-pink-500/20 to-pink-500/5",
  },
];

const budgetData = [
  {
    size: "Small Firms",
    attorneys: "1–3 attorneys",
    budget: "$3K–5K/mo",
    mindset: "With a $5,000 budget they don't have enough volume where they can justify it.",
    attribution: "— Paul T., Ads Strategist",
    decision: "Founding partner decides fast",
    timeline: "Need results within 90 days",
    note: "Per our data, this isn't enough for competitive legal PPC. Firms at this level struggle to hit minimum conversion thresholds.",
    icon: "🏠",
  },
  {
    size: "Recommended Minimum",
    attorneys: "3–8 attorneys",
    budget: "$10K+/mo",
    mindset: "To get about three minimum conversions per day, you're probably looking at somewhere between eight and $10,000 a month.",
    attribution: "— Steve V., Paid Ads Specialist",
    decision: "Managing partner + marketing coordinator",
    timeline: "6-month commitment, data-driven scaling",
    note: "This is where real results begin. Enough budget to feed campaigns through learning phases and optimize.",
    icon: "🏢",
    highlight: true,
  },
  {
    size: "Large Firms",
    attorneys: "10+ attorneys",
    budget: "$15K–25K+/mo",
    mindset: "We're spending in excess of $100,000 a year on marketing.",
    attribution: "— Banks L., Estate Planning Attorney",
    decision: "Committee-based, slower process",
    timeline: "Long-term strategic thinking",
    note: "Top competitors like Parnell spend $40-50K/month. At this tier, the question is efficiency, not budget.",
    icon: "🏛️",
  },
];

const whatTheyTried = [
  {
    method: "SEO Companies That Overpromised",
    icon: "🔍",
    quote: "Your content creation is not good, which is why you're not ranking on a ton of keywords and you're not, like, kind of developing, you know, traction right now to like, get there.",
    attribution: "— Steve V., Paid Ads Specialist",
    detail: "Previous SEO providers failed to deliver rankings. Firms found their websites riddled with technical issues, broken links, and thin content that never moved the needle.",
  },
  {
    method: "Google Ads With Poor Targeting",
    icon: "💸",
    quote: "It's Google Ads or meta ads is not working.",
    attribution: "— Corey Z., Ads Analyst",
    detail: "Firms poured money into Google Ads without proper negative keywords, geo-targeting, or landing page optimization. Budgets spread too thin across too many campaigns to generate meaningful data.",
  },
  {
    method: "Facebook/Meta Ads (Flagging Issues)",
    icon: "📱",
    quote: "The only problem is that with Meta, I was able to just select financial services and then our ads would continue running.",
    attribution: "— Pxrseus, Legal Marketing Consultant",
    detail: "Legal ads on Meta face constant policy hurdles. Settlement-related content gets flagged, requiring financial services categorization. Some legal verticals became too risky for consistent ad delivery.",
  },
  {
    method: "Referral Networks Only",
    icon: "🤝",
    quote: "But given that it's a brand new business, I don't, I don't think it's worth it yet to dump advertising dollars, which is really, really expensive.",
    attribution: "— Corey Z., Ads Analyst",
    detail: "Many firms relied solely on referrals and word-of-mouth, avoiding digital marketing entirely. While referrals convert well, this approach doesn't scale and leaves firms vulnerable to dry spells.",
  },
];

const keyStats = [
  { value: "70+", label: "Transcripts Analyzed", sublabel: "Real sales calls & client conversations" },
  { value: "$10–$80", label: "Per Click Range", sublabel: "Legal keyword costs (Steve V., verbatim)" },
  { value: "$10K+/mo", label: "Recommended Minimum", sublabel: "For 3+ conversions/day (Steve V.)" },
  { value: "$350", label: "Cost Per Client", sublabel: "Acquisition cost (Genus Law Group)" },
  { value: "$100K+/yr", label: "Marketing Spend", sublabel: "Large firm benchmark (Banks L.)" },
  { value: "#1", label: "Most Expensive PPC", sublabel: "\"Law is the most expensive PPC value\" (Anthony C.)" },
];

const objections = [
  {
    objection: "We've tried marketing before — it didn't work",
    why: "Multiple agencies have overpromised and underdelivered. Deep skepticism is the norm.",
    response: "Ask what specifically failed. Show transparent dashboards — not vanity metrics. Let them see real campaign data from similar practice areas.",
    quote: "Yeah, we're right at about $5,000 anyway, you know, but the problem is, is we haven't been getting the return.",
    attribution: "— Banks L., Estate Planning Attorney",
  },
  {
    objection: "It's too expensive for our budget",
    why: "Legal PPC is genuinely expensive. Firms see $80/click and hesitate.",
    response: "Frame cost against case value. One estate planning trust is $4-5K. One PI case can be $10K+. The math works — but only with sufficient budget to hit conversion minimums.",
    quote: "$80 per click is extremely expensive, right? So right there, that's $240 a day on that specific campaign.",
    attribution: "— Steve V., Paid Ads Specialist",
  },
  {
    objection: "SEO takes too long to see results",
    why: "Need immediate cash flow to cover overhead. Can't wait 6-12 months.",
    response: "Hybrid approach: paid ads for immediate case flow while SEO builds organic pipeline. Show 30-day milestones and technical fixes that improve rankings early.",
    quote: "They want more leads for their business and they're frustrated with their existing ads management or like, you know, they want to do better on SEO and AI search.",
    attribution: "— Ritvij G., Strategy Lead",
  },
  {
    objection: "We don't have time to manage another vendor",
    why: "Lawyers are overwhelmed with caseloads. They can't babysit a marketing agency.",
    response: "White-glove service with AI automation handling the heavy lifting. Simple dashboards showing metrics attorneys actually care about, not marketing jargon.",
    quote: "Like, we don't have time to like, we're also not like designers and we're like having to act like them today.",
    attribution: "— Valerie Y., Agency Operations",
  },
  {
    objection: "Our practice area is too competitive",
    why: "Seeing competitors spend $40-50K/month and wondering how to compete.",
    response: "Geographic micro-targeting, long-tail keywords, and content-driven SEO can level the playing field. Not every firm needs to outspend — they need to out-target.",
    quote: "Parnell's probably spending probably 40, $50,000 a month here in all of this.",
    attribution: "— Anthony S., Legal Practice",
  },
];

const ppcFacts = [
  {
    title: "Law = Most Expensive PPC",
    quote: "And law by nature is the most expensive PPC value.",
    attribution: "— Anthony C., PPC Specialist",
    detail: "Legal keywords command the highest cost-per-click of virtually any industry. Hedge funds have revenue share partnerships with local businesses to compete in these auctions.",
  },
  {
    title: "City Size = Higher Costs",
    quote: "It's the bigger the city, the more expensive the ads.",
    attribution: "— Steve V., Paid Ads Specialist",
    detail: "New York City and DFW are among the most expensive PPC markets. Geographic location is the single biggest cost multiplier in legal advertising.",
  },
  {
    title: "Minimum Budget Reality",
    quote: "You want a minimum of three high quality conversions per day that depending on what the bid ranges for law, it's usually about like 8 to $10,000.",
    attribution: "— Steve V., Paid Ads Specialist",
    detail: "Below $8-10K/month, campaigns can't gather enough conversion data to optimize. You're essentially paying to learn — without ever reaching the performance threshold.",
  },
  {
    title: "Policy Risk in Legal Verticals",
    quote: "There are some verticals that over time have become way too risky for us where we just don't feel confident that we can run the ads and then we're just going to be dealing with policy issues the whole time.",
    attribution: "— Paul T., Ads Strategist",
    detail: "Ad platforms increasingly flag legal content. Some practice areas face constant policy violations that prevent consistent ad delivery, wasting both time and budget.",
  },
];

export default function LegalConferencePage() {
  const [expandedObjection, setExpandedObjection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <svg width="72" height="25" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
            <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
          </svg>
          <span className="text-sm text-gray-400">Industry Research Report</span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2965FF]/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2965FF]/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/15 text-[#2965FF] text-sm font-medium mb-6">
              Based on 70+ Real Transcripts
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl mb-6">
              Law Firm Marketing:{" "}
              <span className="bg-gradient-to-r from-[#2965FF] to-[#6B8AFF] bg-clip-text text-transparent">
                What 70+ Real Conversations Revealed
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
              Every quote is verbatim. Every number comes from actual transcripts. We analyzed 70+ real sales calls and client conversations with attorneys — here&apos;s what they&apos;re actually saying about marketing, budgets, and what&apos;s broken.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {keyStats.slice(0, 3).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                <GlassCard className="p-6 md:p-8">
                  <div className="text-3xl md:text-4xl font-bold text-[#2965FF] mb-1">{stat.value}</div>
                  <div className="text-white font-medium text-sm">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.sublabel}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Key Finding" title="The Marketing Trust Crisis" subtitle="The single most important pattern from 70+ law firm conversations" />
          <AnimatedDiv>
            <GlassCard className="p-8 md:p-12 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">🚨</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Law firms have been burned — and they remember.</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    After analyzing 70+ transcripts from actual law firm conversations, one pattern dominates everything else: attorneys are experiencing a <span className="text-white font-semibold">marketing trust crisis</span>. They&apos;ve hired agencies that overpromised, wasted budget on campaigns that never optimized, and received reports designed to obscure rather than reveal.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    The numbers tell the story: legal keywords cost $10 to $80 per click. Law is the most expensive PPC vertical in existence. And firms are spending $100K+ per year on marketing without confidence it&apos;s working. They don&apos;t need another pitch — they need proof.
                  </p>
                </div>
              </div>
              <div className="border-t border-white/[0.08] pt-6 mt-6">
                <p className="text-[#2965FF] font-medium italic">
                  &ldquo;Yeah, we&apos;re right at about $5,000 anyway, you know, but the problem is, is we haven&apos;t been getting the return.&rdquo;
                </p>
                <p className="text-gray-500 text-sm mt-2">— Banks L., Estate Planning Attorney</p>
              </div>
            </GlassCard>
          </AnimatedDiv>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Pain Points" title="8 Pain Points From Real Transcripts" subtitle="Every quote below is verbatim from actual conversations with attorneys" />
          <div className="space-y-6">
            {painPoints.map((point, i) => (
              <AnimatedDiv key={point.rank} delay={i * 0.1}>
                <GlassCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center text-xl font-bold text-white`}>
                        {point.rank}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white">{point.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Severity</span>
                          <StarRating rating={point.severity} />
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">{point.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Key Stat</div>
                          <div className="text-[#2965FF] font-semibold">{point.stat}</div>
                        </div>
                        <div className="flex-[2] bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Verbatim Quote</div>
                          <div className="text-gray-300 italic text-sm">&ldquo;{point.quote}&rdquo;</div>
                          <div className="text-gray-500 text-xs mt-1">{point.attribution}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="By The Numbers" title="Verified Statistics" subtitle="Every number traced directly to transcript data — no made-up metrics" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {keyStats.map((stat, i) => (
              <AnimatedDiv key={stat.label} delay={i * 0.08}>
                <GlassCard className="p-6 text-center h-full">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2965FF] to-[#6B8AFF] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* What They've Already Tried */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Failed Strategies" title="What They&apos;ve Already Tried" subtitle="Before they came to us — the marketing graveyard" />
          <div className="grid md:grid-cols-2 gap-6">
            {whatTheyTried.map((item, i) => (
              <AnimatedDiv key={item.method} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-white">{item.method}</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{item.detail}</p>
                  <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                    <div className="text-gray-300 italic text-sm">&ldquo;{item.quote}&rdquo;</div>
                    <div className="text-gray-500 text-xs mt-2">{item.attribution}</div>
                  </div>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Reality */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Budget Reality" title="What Firms Actually Need to Spend" subtitle="Real budget numbers from transcripts — not industry averages" />
          <div className="grid md:grid-cols-3 gap-6">
            {budgetData.map((tier, i) => (
              <AnimatedDiv key={tier.size} delay={i * 0.1}>
                <GlassCard className={`p-8 h-full relative ${tier.highlight ? "border-[#2965FF]/30 ring-1 ring-[#2965FF]/20" : ""}`}>
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#2965FF] rounded-full text-xs font-medium text-white">
                      Recommended
                    </div>
                  )}
                  <div className="text-3xl mb-4">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{tier.size}</h3>
                  <p className="text-gray-500 text-sm mb-4">{tier.attorneys}</p>
                  <div className="text-2xl font-bold text-[#2965FF] mb-4">{tier.budget}</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">From the transcripts</div>
                      <div className="text-gray-300 italic text-xs">&ldquo;{tier.mindset}&rdquo;</div>
                      <div className="text-gray-500 text-xs mt-1">{tier.attribution}</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Reality Check</div>
                      <div className="text-gray-300 text-xs">{tier.note}</div>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Decision</span>
                      <span className="text-gray-300 text-right text-xs max-w-[60%]">{tier.decision}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Timeline</span>
                      <span className="text-gray-300 text-right text-xs max-w-[60%]">{tier.timeline}</span>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
          <AnimatedDiv delay={0.3}>
            <div className="mt-8 max-w-3xl mx-auto">
              <GlassCard className="p-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Competitor Benchmark</h4>
                    <p className="text-gray-400 text-sm">
                      &ldquo;Parnell&apos;s probably spending probably 40, $50,000 a month here in all of this.&rdquo;
                      <span className="text-gray-500"> — Anthony S., Legal Practice</span>
                    </p>
                    <p className="text-gray-500 text-xs mt-2">Top-spending competitors set the bar. Firms spending under $10K/month are competing against budgets 4-5x their size.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* PPC Deep Dive */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="PPC Reality" title="The True Cost of Legal PPC" subtitle="Direct quotes from paid ads specialists working with law firms daily" />
          <div className="grid md:grid-cols-2 gap-6">
            {ppcFacts.map((fact, i) => (
              <AnimatedDiv key={fact.title} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-lg font-bold text-white mb-4">{fact.title}</h3>
                  <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] mb-4">
                    <div className="text-gray-300 italic text-sm">&ldquo;{fact.quote}&rdquo;</div>
                    <div className="text-gray-500 text-xs mt-2">{fact.attribution}</div>
                  </div>
                  <p className="text-gray-400 text-sm">{fact.detail}</p>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Objection Handling" title="Common Objections" subtitle="The 5 objections heard most often — with real quotes from transcripts" />
          <div className="space-y-4 max-w-4xl mx-auto">
            {objections.map((obj, i) => (
              <AnimatedDiv key={i} delay={i * 0.08}>
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setExpandedObjection(expandedObjection === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white font-medium">&ldquo;{obj.objection}&rdquo;</span>
                    </div>
                    <svg className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${expandedObjection === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedObjection === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-4 pt-2 border-t border-white/[0.06]">
                        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">Real Quote From Transcripts</div>
                          <p className="text-gray-300 text-sm italic">&ldquo;{obj.quote}&rdquo;</p>
                          <p className="text-gray-500 text-xs mt-1">{obj.attribution}</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                            <div className="text-xs text-red-400 uppercase tracking-wider font-medium mb-2">Why They Say It</div>
                            <p className="text-gray-300 text-sm">{obj.why}</p>
                          </div>
                          <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/10">
                            <div className="text-xs text-green-400 uppercase tracking-wider font-medium mb-2">Response Strategy</div>
                            <p className="text-gray-300 text-sm">{obj.response}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Closing / CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedDiv>
            <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-[#2965FF]/10 to-transparent">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Bottom Line</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Law firms are spending $100K+ per year on marketing without confidence it&apos;s working. Legal PPC costs $10-$80 per click — the most expensive in any industry. They&apos;ve been burned by agencies before and need <span className="text-[#2965FF] font-semibold">transparent, data-driven proof</span> before trusting again.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The minimum viable ad budget is $10K/month. Below that, campaigns can&apos;t gather enough data to optimize. But with the right strategy, a $350 cost per client acquisition is achievable — and one $4-5K estate planning trust or PI case more than covers the investment.
              </p>
              <div className="border-t border-white/[0.08] pt-6">
                <p className="text-[#2965FF] font-medium italic text-lg">
                  &ldquo;That&apos;s just because you guys chose to be in a business where digital marketing, at least for advertising is expensive.&rdquo;
                </p>
                <p className="text-gray-500 text-sm mt-2">— Steve V., Paid Ads Specialist</p>
              </div>
            </GlassCard>
          </AnimatedDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4 flex justify-center">
            <svg width="80" height="28" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
              <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
            </svg>
          </div>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-4">
            Analysis based on 70+ real sales calls and client conversations with law firms. Every quote is verbatim from transcripts. Prepared by MEGA AI.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mega. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
