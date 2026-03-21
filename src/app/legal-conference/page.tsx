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
    stat: "Overwhelmed with unqualified leads",
    quote: "We pump budget into this prior to that and then afterwards we get overwhelmed with leads and follow up and deals.",
    attribution: "— Santos G., Business Owner",
    description: "Firms are drowning in unqualified leads. High volume doesn't mean high quality — attorneys waste billable hours on tire kickers and price shoppers who never convert to paying clients.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    rank: 2,
    title: "Skyrocketing PPC Costs",
    severity: 5,
    stat: "$7,000/mo minimum commitment",
    quote: "So you're saying 5,000 minimum spend with a 2,000 management fee. That's a $7,000 a month commitment.",
    attribution: "— Anthony K., Attorney",
    description: "Legal is the most expensive PPC vertical. To get minimum 3 conversions per day, firms need $8-10K/month in ad spend alone. Smaller budgets simply can't compete in the auction.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    rank: 3,
    title: "Agency Trust Deficit",
    severity: 5,
    stat: "Multiple agencies tried, same broken promises",
    quote: "We just parted ways with our last marketing company. Who we really liked, but they just couldn't really get the results we were looking for.",
    attribution: "— Banks L., Estate Planning Attorney",
    description: "Law firms have deep skepticism born from repeated bad experiences. Agencies overpromise, underdeliver, and hide poor results behind confusing dashboards and jargon.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    rank: 4,
    title: "SEO Timeline Frustration",
    severity: 4,
    stat: "SEO is the biggest unmet need",
    quote: "Well, our biggest need right now I guess in terms of this is really SEO.",
    attribution: "— Weber Law",
    description: "Firms need cases now to cover overhead, but SEO is a long game. The tension between immediate cash flow needs and long-term organic growth creates a painful gap that most agencies fail to address.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    rank: 5,
    title: "ROI Attribution Black Box",
    severity: 4,
    stat: "$5,000/mo with no measurable return",
    quote: "Yeah, so we're right at about $5,000 anyway, you know, but the problem is, is we haven't been getting the return.",
    attribution: "— Banks L., Estate Planning Attorney",
    description: "Multiple touchpoints, overlapping campaigns, and poor tracking make it nearly impossible for firms to know which marketing dollars actually bring in cases. Decisions get made on gut feeling.",
    color: "from-teal-500/20 to-teal-500/5",
  },
  {
    rank: 6,
    title: "Budget Spreading Problem",
    severity: 4,
    stat: "Limited budgets, unlimited competition",
    quote: "I don't think I want to spend like just 5,000 for only ad for Google every month.",
    attribution: "— Britney F., Attorney",
    description: "Firms dilute their ad spend across too many campaigns, preventing any single campaign from gathering enough data to optimize. The result: no campaign performs well, and the entire budget is wasted.",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    rank: 7,
    title: "AI & Search Disruption",
    severity: 3,
    stat: "ChatGPT changing how people search",
    quote: "It's been around for a while but I think ChatGPT is kind of taking over what people used to do Google for.",
    attribution: "— Anthony K., Attorney",
    description: "As AI-generated content becomes ubiquitous, attorneys worry about the shifting search landscape. The fear of losing hard-won rankings to changing user behavior creates hesitation around modern content strategies.",
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    rank: 8,
    title: "Competitive Market Pressure",
    severity: 3,
    stat: "Competitors outspending 4-5x",
    quote: "In the personal injury space, you know, competitors are spending, I mean... like we're small.",
    attribution: "— Anthony S., Fusion Legal",
    description: "Small and mid-size firms are up against competitors spending $40-50K/month. The gap between what they can afford and what the market demands creates a seemingly impossible competitive landscape.",
    color: "from-pink-500/20 to-pink-500/5",
  },
];

const budgetData = [
  {
    size: "Small Firms",
    attorneys: "1–3 attorneys",
    budget: "$3K–5K/mo",
    mindset: "I spent all together, including agency fees, around 4 to 5K a month.",
    attribution: "— Jacob L., Practice Owner",
    decision: "Founding partner decides fast",
    timeline: "Need results within 90 days",
    note: "Per our data, this isn't enough for competitive legal PPC. Firms at this level struggle to hit minimum conversion thresholds.",
    icon: "🏠",
  },
  {
    size: "Recommended Minimum",
    attorneys: "3–8 attorneys",
    budget: "$10K+/mo",
    mindset: "So you're saying 5,000 minimum spend with a 2,000 management fee. That's a $7,000 a month commitment.",
    attribution: "— Anthony K., Attorney",
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
    mindset: "And, you know, we're spending in excess of $100,000 a year on marketing.",
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
    quote: "Right now we're putting money towards LSA, which is working nice. And we're considering increasing that budget whether we stay with our current company or change.",
    attribution: "— Stephen H., Workers Comp Attorney",
    detail: "Previous SEO providers failed to deliver rankings. Firms found their websites riddled with technical issues, broken content, and strategies that never moved the needle — now they're looking to switch.",
  },
  {
    method: "Google Ads With Poor Targeting",
    icon: "💸",
    quote: "We did Google Ad campaigns, like, for the last year, but we, like, ran out nearly our phones the last few months, so we already paused it.",
    attribution: "— Jacob L., Practice Owner",
    detail: "Firms poured money into Google Ads without proper negative keywords, geo-targeting, or landing page optimization. When results dried up, they paused campaigns entirely — losing all momentum.",
  },
  {
    method: "DIY Campaign Management",
    icon: "📱",
    quote: "I'm not the guy that really spends a lot of time and manages our Google Ad accounts. It's another guy I work with and he's pretty familiar with it and he's done a lot of tuning or trying to tune with his limited knowledge.",
    attribution: "— Santos G., Business Owner",
    detail: "Many firms tried managing campaigns internally without the expertise to optimize effectively. Limited knowledge led to wasted spend, poor targeting, and campaigns that never reached their potential.",
  },
  {
    method: "Referral Networks Only",
    icon: "🤝",
    quote: "Mobile, Alabama is not particularly affluent. The number of people willing to spend 4 to $5,000 on a trust plan isn't really that prevalent.",
    attribution: "— Banks L., Estate Planning Attorney",
    detail: "Many firms relied solely on referrals and word-of-mouth, avoiding digital marketing entirely. While referrals convert well, this approach doesn't scale — especially in less affluent markets.",
  },
];

const keyStats = [
  { value: "70+", label: "Transcripts Analyzed", sublabel: "Real sales calls & client conversations" },
  { value: "$7K/mo", label: "Minimum Commitment", sublabel: "\"$5K spend + $2K fee\" (Anthony K.)" },
  { value: "$10K+/mo", label: "Recommended Minimum", sublabel: "For competitive legal PPC results" },
  { value: "$350", label: "Cost Per Client", sublabel: "Acquisition cost (Genus Law Group)" },
  { value: "$100K+/yr", label: "Marketing Spend", sublabel: "Large firm benchmark (Banks L.)" },
  { value: "$40-50K/mo", label: "Top Competitor Spend", sublabel: "\"Parnell's probably spending...\" (Anthony S.)" },
];

const objections = [
  {
    objection: "We've tried marketing before — it didn't work",
    why: "Multiple agencies have overpromised and underdelivered. Deep skepticism is the norm.",
    response: "Ask what specifically failed. Show transparent dashboards — not vanity metrics. Let them see real campaign data from similar practice areas.",
    quote: "We just parted ways with our last marketing company. Who we really liked, but they just couldn't really get the results we were looking for.",
    attribution: "— Banks L., Estate Planning Attorney",
  },
  {
    objection: "It's too expensive for our budget",
    why: "Legal PPC is genuinely expensive. Firms see $7K/month minimums and hesitate.",
    response: "Frame cost against case value. One estate planning trust is $4-5K. One PI case can be $10K+. The math works — but only with sufficient budget to hit conversion minimums.",
    quote: "So you're saying 5,000 minimum spend with a 2,000 management fee. That's a $7,000 a month commitment.",
    attribution: "— Anthony K., Attorney",
  },
  {
    objection: "SEO takes too long to see results",
    why: "Need immediate cash flow to cover overhead. Can't wait 6-12 months.",
    response: "Hybrid approach: paid ads for immediate case flow while SEO builds organic pipeline. Show 30-day milestones and technical fixes that improve rankings early.",
    quote: "Well, our biggest need right now I guess in terms of this is really SEO.",
    attribution: "— Weber Law",
  },
  {
    objection: "We don't have time to manage another vendor",
    why: "Lawyers are overwhelmed with caseloads. They can't babysit a marketing agency.",
    response: "White-glove service with AI automation handling the heavy lifting. Simple dashboards showing metrics attorneys actually care about, not marketing jargon.",
    quote: "That's fine as long as the leads are coming in, but the last thing I want to do is, you know, you don't, you'd rather not be treading water.",
    attribution: "— Anthony K., Attorney",
  },
  {
    objection: "Our practice area is too competitive",
    why: "Seeing competitors spend $40-50K/month and wondering how to compete.",
    response: "Geographic micro-targeting, long-tail keywords, and content-driven SEO can level the playing field. Not every firm needs to outspend — they need to out-target.",
    quote: "Whatever you guys do to develop leads, you guys are using the same processes... I understand there is a distinction and throwing the amount of money that you think might be adequate, may not.",
    attribution: "— Anthony S., Fusion Legal",
  },
];

const ppcFacts = [
  {
    title: "Budget Gets Eaten Fast",
    quote: "Our experience is anytime we raise the budget, it always gets spent.",
    attribution: "— Santos G., Business Owner",
    detail: "Legal keywords command the highest cost-per-click of virtually any industry. Budgets evaporate quickly without tight optimization and strategic allocation.",
  },
  {
    title: "Small Firms Can't Compete",
    quote: "In the personal injury space, you know, competitors are spending, I mean... like we're small.",
    attribution: "— Anthony S., Fusion Legal",
    detail: "Larger competitors dominate the auction. Smaller firms need smarter strategies — not just bigger budgets — to compete effectively in expensive legal verticals.",
  },
  {
    title: "Minimum Budget Reality",
    quote: "And, you know, we're spending in excess of $100,000 a year on marketing.",
    attribution: "— Banks L., Estate Planning Attorney",
    detail: "Below $8-10K/month, campaigns can't gather enough conversion data to optimize. You're essentially paying to learn — without ever reaching the performance threshold.",
  },
  {
    title: "Market-Specific Challenges",
    quote: "We've kind of realized that we're in kind of a working class town.",
    attribution: "— Banks L., Estate Planning Attorney",
    detail: "Geographic and demographic factors dramatically affect campaign performance. A strategy that works in an affluent metro may fail completely in a working-class market, requiring tailored approaches.",
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
              Every quote is verbatim from real attorneys. Every number comes from actual transcripts. We analyzed 70+ real conversations with law firm owners — here&apos;s what they&apos;re actually saying about marketing, budgets, and what&apos;s broken.
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
                    The numbers tell the story: firms are committing $7,000+ per month just to get started. Law is the most expensive PPC vertical in existence. And firms are spending $100K+ per year on marketing without confidence it&apos;s working. They don&apos;t need another pitch — they need proof.
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
          <SectionTitle badge="Pain Points" title="8 Pain Points From Real Transcripts" subtitle="Every quote below is verbatim from actual attorneys and law firm owners" />
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
          <SectionTitle badge="Budget Reality" title="What Firms Actually Need to Spend" subtitle="Real budget numbers from attorneys — not industry averages" />
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
                      <span className="text-gray-500"> — Anthony S., Fusion Legal</span>
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
          <SectionTitle badge="PPC Reality" title="The True Cost of Legal PPC" subtitle="Direct quotes from attorneys experiencing the cost of legal advertising firsthand" />
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
          <SectionTitle badge="Objection Handling" title="Common Objections" subtitle="The 5 objections heard most often — with real quotes from attorneys" />
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
                          <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-2">Real Quote From Attorneys</div>
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
                Law firms are spending $100K+ per year on marketing without confidence it&apos;s working. Attorneys are committing $7,000+ per month just to get started — the most expensive PPC vertical in any industry. They&apos;ve been burned by agencies before and need <span className="text-[#2965FF] font-semibold">transparent, data-driven proof</span> before trusting again.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                The minimum viable ad budget is $10K/month. Below that, campaigns can&apos;t gather enough data to optimize. But with the right strategy, a $350 cost per client acquisition is achievable — and one $4-5K estate planning trust or PI case more than covers the investment.
              </p>
              <div className="border-t border-white/[0.08] pt-6">
                <p className="text-[#2965FF] font-medium italic text-lg">
                  &ldquo;The real question is, how do you get those trust clients and how much are you willing to spend to get those trust clients?&rdquo;
                </p>
                <p className="text-gray-500 text-sm mt-2">— Banks L., Estate Planning Attorney</p>
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
            Analysis based on 70+ real conversations with law firm owners and attorneys. Every quote is verbatim from transcripts. Prepared by MEGA AI.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mega. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
