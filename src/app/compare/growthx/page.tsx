"use client";

import { motion } from "framer-motion";
import Header from "@/components/CaseStudy/Header";
import Footer from "@/components/CaseStudy/Footer";
import AnimatedSection from "@/components/CaseStudy/AnimatedSection";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const comparisonRows = [
  { dimension: "Starting Price", mega: "From $699/mo", growthx: "From $15,000/mo" },
  { dimension: "Services", mega: "SEO/GEO + Paid Ads + Website", growthx: "SEO, AEO, GEO, Content only" },
  { dimension: "Paid Ads Management", mega: "Always-on AI optimization + creative", growthx: "Not offered" },
  { dimension: "Website Management", mega: "Included — built & optimized", growthx: "Not offered" },
  { dimension: "Content Output", mega: "20–25 SEO pages/month, daily optimization", growthx: "High-volume AI-assisted publishing" },
  { dimension: "AI Approach", mega: "AI agents inside your accounts, optimizing 24/7", growthx: "AI workflows with human expert refinement" },
  { dimension: "Business Types", mega: "B2B, B2C, ecommerce, local, lead gen — any industry", growthx: "Primarily B2B SaaS / tech companies" },
  { dimension: "Team Model", mega: "Dedicated account manager + AI agents", growthx: "Dedicated growth strategist + Slack access" },
  { dimension: "Ad Creative", mega: "AI-generated at zero extra cost", growthx: "N/A — no ads service" },
  { dimension: "Speed to Deploy", mega: "AI agents deploy immediately", growthx: "Onboarding sprint required" },
];

const sections = [
  {
    icon: "💰",
    title: "$699/mo vs. $15,000/mo",
    description: "Enterprise-grade AI marketing at a fraction of the cost.",
    detail:
      "GrowthX.ai charges $15,000/month and up — pricing designed for well-funded Series B+ companies. MEGA delivers AI-powered SEO starting at $699/month. That's not a stripped-down version — you get 20–25 optimized pages per month, daily AI optimization, and GEO-ready content. For the cost of one month with GrowthX, you could run MEGA for nearly two years.",
  },
  {
    icon: "🔧",
    title: "Full Stack vs. SEO Only",
    description: "One partner for every growth channel — not just organic content.",
    detail:
      "GrowthX.ai does SEO and content. That's it. No paid ads, no website management, no creative. If you need Google Ads, Meta campaigns, or landing pages, you'll need another vendor on top of your $15K/month. MEGA handles SEO, paid ads, ad creative, and website — all in one platform. One partner, one bill, every channel covered.",
  },
  {
    icon: "🤖",
    title: "AI-First Execution vs. AI-Assisted Workflows",
    description: "AI agents that live in your accounts vs. AI tools that assist humans.",
    detail:
      'GrowthX positions as "services as software" — AI workflows refined by human experts. MEGA is AI-native from the ground up. Our AI agents live inside your ad accounts and CMS, optimizing bids, testing creative, and publishing content 24/7. It\'s not AI helping a human work faster — it\'s AI doing the work, with humans providing strategic oversight.',
  },
  {
    icon: "📢",
    title: "Paid Ads? Only With MEGA.",
    description: "GrowthX doesn't touch paid acquisition. MEGA runs it around the clock.",
    detail:
      "If you need paid search, social ads, or retargeting, GrowthX can't help. You'd need to hire another agency or build an in-house team — adding another $5K–$15K/month to your marketing spend. MEGA's Paid Ads plan ($1,999/mo) includes always-on AI optimization, AI-generated ad creative, and multi-platform campaign management. SEO + Ads under one roof.",
  },
  {
    icon: "🌍",
    title: "Built for Everyone, Not Just SaaS",
    description: "From local businesses to enterprise — MEGA works for any company.",
    detail:
      "GrowthX.ai's client roster reads like a VC portfolio: Lovable, Abnormal AI, Webflow. Great for funded tech companies, but what about the ecommerce brand, the local service business, or the B2C startup? MEGA works across industries and business models — B2B, B2C, ecommerce, local services, lead generation. If you need customers, MEGA can help.",
  },
];

export default function GrowthXComparison() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2965FF]/5 via-white to-[#2965FF]/3" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#2965FF]/5 blur-3xl" />
        <motion.div
          className="relative max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/10 text-[#2965FF] text-sm font-medium mb-6">
              MEGA AI vs GrowthX.ai — Honest Comparison
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-[#111827] leading-tight mb-6"
          >
            AI-Powered Marketing.
            <br />
            <span className="text-[#2965FF]">21× Less.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12"
          >
            Both platforms use AI to grow your business. One charges $15,000/month for SEO content alone. The other starts at $699/month and covers SEO, paid ads, and your website.
          </motion.p>

          {/* Stat cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "$699", label: "MEGA starting price", sub: "vs $15,000/mo" },
              { value: "3", label: "Services in one platform", sub: "SEO + Ads + Website" },
              { value: "24/7", label: "AI optimization", sub: "Always-on agents" },
            ].map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
              >
                <div className="text-3xl font-bold text-[#2965FF] mb-1">{s.value}</div>
                <div className="text-sm font-medium text-[#111827]">{s.label}</div>
                <div className="text-xs text-[#6B7280] mt-1">{s.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <AnimatedSection id="comparison" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            Side-by-Side Comparison
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            How MEGA AI and GrowthX.ai stack up across pricing, services, and approach.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-4 px-6 font-semibold text-[#6B7280] w-1/4" />
                  <th className="py-4 px-6 font-bold text-[#2965FF] bg-[#2965FF]/5 w-[37.5%]">
                    MEGA AI
                  </th>
                  <th className="py-4 px-6 font-bold text-[#374151] w-[37.5%]">GrowthX.ai</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.dimension}
                    className={i % 2 === 0 ? "bg-gray-50/50" : "bg-white"}
                  >
                    <td className="py-4 px-6 font-medium text-[#374151]">{row.dimension}</td>
                    <td className="py-4 px-6 text-[#111827] bg-[#2965FF]/[0.03]">{row.mega}</td>
                    <td className="py-4 px-6 text-[#6B7280]">{row.growthx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedSection>

      {/* Detail Sections */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title}>
              <div
                className={`rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${
                  i % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-[#F9FAFB] to-white"
                }`}
              >
                <div className="p-8 md:p-10">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">{s.title}</h3>
                  <p className="text-[#2965FF] font-medium mb-4">{s.description}</p>
                  <p className="text-[#374151] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What GrowthX Does Well */}
      <AnimatedSection className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            What GrowthX.ai Does Well
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Fair is fair — here&apos;s where GrowthX.ai genuinely excels.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Enterprise SEO Pedigree",
                text: "Founded by ex-CMOs from Deepgram, Scale AI, HashiCorp, and ServiceTitan. Deep expertise in B2B SaaS growth marketing.",
              },
              {
                title: "Impressive Client Results",
                text: "200× click increase for Abnormal AI, 32K+ weekly visits for Webflow, 6× traffic for Discern. Real, documented outcomes.",
              },
              {
                title: "High-Touch Strategy",
                text: "Dedicated growth strategist, Slack integration, and a 'services as software' model that blends AI efficiency with senior human judgment.",
              },
            ].map((c) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h4 className="font-bold text-[#111827] mb-2">{c.title}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Who Should Choose */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Who Should Choose What?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* MEGA */}
            <div className="rounded-2xl border-2 border-[#2965FF] bg-[#2965FF]/[0.02] p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#2965FF] text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold text-[#2965FF] mb-4">Choose MEGA AI if you…</h3>
              <ul className="space-y-3 text-[#374151]">
                {[
                  "Want AI-powered marketing without enterprise pricing",
                  "Need SEO and paid ads managed together",
                  "Run any type of business — not just B2B SaaS",
                  "Want a full website included in your plan",
                  "Prefer AI agents working 24/7, not just business hours",
                  "Need to stretch every marketing dollar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#2965FF] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* GrowthX */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-[#374151] mb-4">
                Choose GrowthX.ai if you…
              </h3>
              <ul className="space-y-3 text-[#6B7280]">
                {[
                  "Have $15K+/month budget for content alone",
                  "Are a B2B SaaS company with VC backing",
                  "Want a senior strategist from enterprise backgrounds",
                  "Only need SEO/content — no ads or website",
                  "Prefer human-led strategy with AI-assisted execution",
                  "Value established agency credentials over price",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl bg-gradient-to-br from-[#2965FF] to-[#1a4fd4] p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to grow — without the $15K price tag?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Get AI-powered SEO, paid ads, and a managed website starting at $699/month.
            </p>
            <a
              href="https://www.gomega.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#2965FF] font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-shadow text-lg"
            >
              Get Started with MEGA AI →
            </a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
