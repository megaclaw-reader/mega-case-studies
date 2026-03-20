"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

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
    stat: "50 leads/mo → only 2-3 actual cases",
    quote: "We're getting leads but they're not good quality — lots of people just shopping around.",
    description: "Firms drown in unqualified leads from generic keywords, poor targeting, and no qualification process. Tire kickers and price shoppers waste attorneys' valuable time.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    rank: 2,
    title: "Skyrocketing Ad Costs",
    severity: 5,
    stat: "$300+ per click for PI keywords",
    quote: "We're spending $5,000/month and getting maybe 2-3 good cases.",
    description: "Google Ads costs have become unsustainable in legal verticals. Personal injury, divorce, and criminal defense keywords command some of the highest CPCs in any industry.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    rank: 3,
    title: "Marketing PTSD",
    severity: 4,
    stat: "90% say previous agencies overpromised",
    quote: "We've tried 3 different marketing companies and they all say the same thing.",
    description: "Bad experiences with past agencies have created deep skepticism. Lawyers have heard every promise — guaranteed rankings, hundreds of leads — and been burned every time.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    rank: 4,
    title: "SEO Timeline Mismatch",
    severity: 4,
    stat: "6-12 months before organic results",
    quote: "We need cases now, not in 6-12 months when SEO might kick in.",
    description: "Monthly overhead demands consistent case flow. Firms can't afford to wait for SEO while paying rent, staff, and insurance. They need a bridge strategy.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    rank: 5,
    title: "Marketing Black Box",
    severity: 3,
    stat: "Most firms can't attribute cases to marketing",
    quote: "We don't really know which marketing is working and which isn't.",
    description: "Multiple touchpoints, poor tracking, and referral networks muddy attribution. Firms make budget decisions based on gut feeling rather than data.",
    color: "from-teal-500/20 to-teal-500/5",
  },
];

const budgetData = [
  {
    size: "Small Firms",
    attorneys: "1–3 attorneys",
    budget: "$1K–3K/mo",
    mindset: "Show me ROI first, then we'll scale",
    decision: "Founding partner decides fast",
    timeline: "Need results within 90 days",
    icon: "🏠",
  },
  {
    size: "Medium Firms",
    attorneys: "4–10 attorneys",
    budget: "$3K–8K/mo",
    mindset: "We need systems that scale",
    decision: "Managing partner + marketing coordinator",
    timeline: "6-month commitment acceptable",
    icon: "🏢",
    highlight: true,
  },
  {
    size: "Large Firms",
    attorneys: "10+ attorneys",
    budget: "$8K–25K+/mo",
    mindset: "Brand management + comprehensive strategy",
    decision: "Committee-based, slower process",
    timeline: "Long-term strategic thinking",
    icon: "🏛️",
  },
];

const practiceAreas = [
  {
    area: "Personal Injury",
    icon: "⚖️",
    challenge: "$300+ per click for 'car accident lawyer'",
    opportunity: "Target specific accident types & geographic micro-areas",
    metric: "Cost per qualified case, not cost per lead",
    gradient: "from-red-500 to-orange-500",
  },
  {
    area: "Family Law / Divorce",
    icon: "👨‍👩‍👧",
    challenge: "Emotional clients, price-sensitive decisions",
    opportunity: "Educational content + long-tail keywords",
    metric: "January spike — New Year resolution divorces",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    area: "Criminal Defense",
    icon: "🛡️",
    challenge: "Urgent needs, budget constraints",
    opportunity: "24/7 landing pages, emergency consultation offers",
    metric: "Mobile-optimized — people search on phones when arrested",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    area: "Estate Planning",
    icon: "📋",
    challenge: "Procrastination factor, complex education needed",
    opportunity: "Life event triggers, educational content marketing",
    metric: "Partner with financial advisors for referral pipeline",
    gradient: "from-green-500 to-emerald-500",
  },
];

const objections = [
  {
    objection: "We've tried marketing before — it didn't work",
    why: "Previous agencies overpromised and underdelivered",
    response: "Ask what specifically failed. Show case studies from their exact practice area. Explain what's changed.",
  },
  {
    objection: "It's too expensive for our budget",
    why: "Fear of wasting money again",
    response: "Focus on cost per case vs. hourly billing rates. One PI case = $10K+ in fees. Start with test budgets.",
  },
  {
    objection: "Takes too long to see results",
    why: "Need immediate cash flow to cover overhead",
    response: "Hybrid approach: quick wins with PPC + long-term growth with SEO. Show 30-day milestones.",
  },
  {
    objection: "We don't have time to manage another vendor",
    why: "Lawyers are already overwhelmed with caseloads",
    response: "White-glove service — 30 minutes monthly reviewing results. Automated reporting, single point of contact.",
  },
  {
    objection: "Our practice area is too competitive",
    why: "Seeing $300+ CPCs in Google Ads",
    response: "Long-tail intent-based keywords, geographic micro-targeting, content marketing for thought leadership.",
  },
];

const keyStats = [
  { value: "70+", label: "Law Firms Analyzed", sublabel: "Across multiple practice areas" },
  { value: "$300+", label: "Per Click (PI)", sublabel: "Average for competitive keywords" },
  { value: "$5K/mo", label: "Budget Sweet Spot", sublabel: "For firms wanting real results" },
  { value: "90%", label: "Agency Burned", sublabel: "Say previous agencies overpromised" },
  { value: "95", label: "Budget Mentions", sublabel: "Extracted from real conversations" },
  { value: "38", label: "Pain Points Found", sublabel: "Identified from transcript analysis" },
];

const winningStrategies = [
  {
    title: "Target Long-Tail, Not Generic",
    before: "\"Personal injury lawyer\"",
    after: "\"Uber accident lawyer in [City]\"",
    result: "70% lower CPC, 3x higher conversion rate",
    icon: "🎯",
  },
  {
    title: "Geographic Micro-Targeting",
    before: "Broad city-wide targeting",
    after: "5-mile radius around courthouse",
    result: "Higher quality leads, better case values",
    icon: "📍",
  },
  {
    title: "Practice-Specific Landing Pages",
    before: "Generic firm homepage",
    after: "Dedicated pages with local social proof",
    result: "2x conversion rate improvement",
    icon: "📄",
  },
  {
    title: "Hybrid PPC + SEO Strategy",
    before: "SEO only — wait 6-12 months",
    after: "Quick wins (ads) + long-term growth (SEO)",
    result: "Immediate case flow while building organic pipeline",
    icon: "⚡",
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
              Based on 70+ Real Conversations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl mb-6">
              Law Firm Marketing:{" "}
              <span className="bg-gradient-to-r from-[#2965FF] to-[#6B8AFF] bg-clip-text text-transparent">
                What 70+ Real Conversations Revealed
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
              An analysis of actual sales calls and client conversations with attorneys across PI, family law, criminal defense, and estate planning. Real voices. Real pain points. Real solutions.
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
                    After analyzing 70+ transcripts from actual law firm conversations, one pattern dominates everything else: attorneys are experiencing a <span className="text-white font-semibold">marketing trust crisis</span>. They&apos;ve been burned by agencies before and are increasingly skeptical of new solutions — even when they desperately need help.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    This isn&apos;t about budgets or channels. It&apos;s about broken promises. Guaranteed rankings that never materialized. Cookie-cutter strategies. Reports that obscured rather than revealed. The result? Smart buyers who need proof, not pitches.
                  </p>
                </div>
              </div>
              <div className="border-t border-white/[0.08] pt-6 mt-6">
                <p className="text-[#2965FF] font-medium italic">
                  &ldquo;Lawyers are smart buyers who&apos;ve been burned before. They don&apos;t need another sales pitch — they need proof.&rdquo;
                </p>
              </div>
            </GlassCard>
          </AnimatedDiv>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Pain Points" title="Top 5 Pain Points" subtitle="Ranked by frequency across 70+ conversations with attorneys" />
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
                        <div className="flex-1 bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Real Quote</div>
                          <div className="text-gray-300 italic text-sm">&ldquo;{point.quote}&rdquo;</div>
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
          <SectionTitle badge="By The Numbers" title="Key Statistics" subtitle="The headline numbers from our analysis" />
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

      {/* Budget Reality */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Budget Reality" title="What Firms Actually Spend" subtitle="Budget ranges by firm size — based on 95 budget mentions from real conversations" />
          <div className="grid md:grid-cols-3 gap-6">
            {budgetData.map((tier, i) => (
              <AnimatedDiv key={tier.size} delay={i * 0.1}>
                <GlassCard className={`p-8 h-full relative ${tier.highlight ? "border-[#2965FF]/30 ring-1 ring-[#2965FF]/20" : ""}`}>
                  {tier.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#2965FF] rounded-full text-xs font-medium text-white">
                      Sweet Spot
                    </div>
                  )}
                  <div className="text-3xl mb-4">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{tier.size}</h3>
                  <p className="text-gray-500 text-sm mb-4">{tier.attorneys}</p>
                  <div className="text-2xl font-bold text-[#2965FF] mb-4">{tier.budget}</div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Mindset</div>
                      <div className="text-gray-300 italic">&ldquo;{tier.mindset}&rdquo;</div>
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
        </div>
      </section>

      {/* Practice Area Insights */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Practice Areas" title="Practice Area Insights" subtitle="Each practice area has unique challenges and opportunities" />
          <div className="grid md:grid-cols-2 gap-6">
            {practiceAreas.map((area, i) => (
              <AnimatedDiv key={area.area} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center text-lg opacity-80`}>
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.area}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-red-400 uppercase tracking-wider font-medium mb-1">⚠ Challenge</div>
                      <p className="text-gray-300 text-sm">{area.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs text-green-400 uppercase tracking-wider font-medium mb-1">✦ Opportunity</div>
                      <p className="text-gray-300 text-sm">{area.opportunity}</p>
                    </div>
                    <div>
                      <div className="text-xs text-[#2965FF] uppercase tracking-wider font-medium mb-1">📊 Key Insight</div>
                      <p className="text-gray-300 text-sm">{area.metric}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Common Objections */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#2965FF]/[0.03] to-transparent">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="Objection Handling" title="Common Objections" subtitle="The 5 objections you'll hear in every law firm conversation — and how to respond" />
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
                      <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.06]">
                        <div className="bg-red-500/5 rounded-xl p-4 border border-red-500/10">
                          <div className="text-xs text-red-400 uppercase tracking-wider font-medium mb-2">Why They Say It</div>
                          <p className="text-gray-300 text-sm">{obj.why}</p>
                        </div>
                        <div className="bg-green-500/5 rounded-xl p-4 border border-green-500/10">
                          <div className="text-xs text-green-400 uppercase tracking-wider font-medium mb-2">Response Strategy</div>
                          <p className="text-gray-300 text-sm">{obj.response}</p>
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

      {/* What Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle badge="What Works" title="Winning Strategies" subtitle="Proven approaches that deliver results for law firms" />
          <div className="grid md:grid-cols-2 gap-6">
            {winningStrategies.map((strategy, i) => (
              <AnimatedDiv key={strategy.title} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{strategy.icon}</span>
                    <h3 className="text-lg font-bold text-white">{strategy.title}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 text-xs font-bold mt-0.5 flex-shrink-0 w-14">BEFORE</span>
                      <span className="text-gray-500 text-sm line-through">{strategy.before}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xs font-bold mt-0.5 flex-shrink-0 w-14">AFTER</span>
                      <span className="text-gray-300 text-sm">{strategy.after}</span>
                    </div>
                  </div>
                  <div className="bg-[#2965FF]/10 rounded-xl p-4 border border-[#2965FF]/20">
                    <div className="text-xs text-[#2965FF] uppercase tracking-wider font-medium mb-1">Result</div>
                    <div className="text-white font-medium text-sm">{strategy.result}</div>
                  </div>
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
                Lawyers are smart buyers who&apos;ve been burned before. They don&apos;t need another sales pitch — they need <span className="text-[#2965FF] font-semibold">proof</span>. Show them you understand their specific practice area, set realistic expectations, and deliver transparent results.
              </p>
              <p className="text-xl text-white font-semibold">
                Do that, and they&apos;ll become clients for life.
              </p>
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
            Analysis based on 70+ real sales calls and client conversations with law firms across multiple practice areas. Prepared by MEGA AI.
          </p>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Mega. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
