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
  { dimension: "AI Architecture", mega: "Autonomous AI agents living inside your accounts 24/7", growthx: "AI-assisted workflows refined by human editors" },
  { dimension: "Competitive Intelligence", mega: "AI agents monitor competitors' rankings, content gaps, and ad strategies in real time", growthx: "Manual competitor research by strategist" },
  { dimension: "Optimization Cycle", mega: "Continuous — AI agents adjust bids, content, and targeting every hour", growthx: "Weekly/biweekly human review cycles" },
  { dimension: "Content Output", mega: "20–25 SEO pages/month + daily optimization of existing content", growthx: "High-volume AI-assisted publishing" },
  { dimension: "Services", mega: "SEO/GEO + Paid Ads + Website — full growth stack", growthx: "SEO and content only" },
  { dimension: "Business Types", mega: "B2B, B2C, ecommerce, local, lead gen — any industry", growthx: "Primarily B2B SaaS / tech" },
  { dimension: "Speed to Deploy", mega: "AI agents deploy into your accounts within days", growthx: "Onboarding sprint, then ramp-up period" },
  { dimension: "Team Model", mega: "Dedicated account manager + autonomous AI agents", growthx: "Dedicated growth strategist + Slack access" },
  { dimension: "Learning & Adaptation", mega: "AI learns your market daily — auto-adapts to algorithm changes, seasonality, and competitor moves", growthx: "Strategy updated based on periodic human analysis" },
];

const sections = [
  {
    icon: "🤖",
    title: "Truly Agentic AI vs. AI-Assisted Humans",
    description: "MEGA built autonomous AI agents. GrowthX built AI tools for their team.",
    detail:
      "This is the fundamental difference. MEGA's AI agents are autonomous — they live inside your ad accounts, your CMS, and your analytics. They don't wait for a human to review a dashboard and make decisions. They monitor your competitors' rankings in real time, spot content gaps the moment they appear, adjust bids when conversion patterns shift, and publish optimized content on a schedule no human team could sustain. GrowthX uses AI to help their human team work faster. MEGA built AI that works for you directly — 24 hours a day, 7 days a week, including holidays.",
  },
  {
    icon: "🔍",
    title: "Real-Time Competitive Intelligence",
    description: "AI agents that spy on your competitors while you sleep.",
    detail:
      "MEGA's AI agents continuously monitor your competitive landscape — tracking competitors' keyword movements, new content they publish, ad copy changes, and ranking shifts. When a competitor starts ranking for a term you own, our agents detect it within hours and respond: adjusting content, strengthening pages, or shifting ad spend to defend your position. GrowthX relies on periodic manual competitor research by their strategist. By the time they spot a competitive threat, MEGA's agents have already countered it.",
  },
  {
    icon: "⚡",
    title: "Always-On Optimization vs. Weekly Reviews",
    description: "AI that optimizes every hour vs. humans who check in every week.",
    detail:
      "Traditional agencies — even AI-assisted ones like GrowthX — operate on human review cycles: weekly check-ins, biweekly strategy updates, monthly reporting. MEGA's agents optimize continuously. Bids adjust based on real-time conversion signals. Content gets refreshed when engagement drops. New keyword opportunities get targeted the day they emerge. Algorithm updates? Our agents detect ranking shifts within hours and adapt immediately. That compounding advantage — thousands of micro-optimizations per month instead of a handful of manual tweaks — is what separates AI-native execution from AI-assisted services.",
  },
  {
    icon: "💰",
    title: "$699/mo vs. $15,000/mo",
    description: "21× less expensive — and you get more services, not fewer.",
    detail:
      "GrowthX charges $15,000/month minimum — pricing built for VC-backed tech companies with big marketing budgets. MEGA starts at $699/month for SEO/GEO with the same AI-powered approach. For context: the cost of one month with GrowthX covers nearly two full years with MEGA. And MEGA includes capabilities GrowthX doesn't offer at any price — paid ads management, website development, and AI-generated creative. More services, more AI, less cost.",
  },
  {
    icon: "🧠",
    title: "AI That Learns Your Market Daily",
    description: "Every day makes the next day better. Compounding intelligence.",
    detail:
      "MEGA's AI agents don't just execute — they learn. Every click, every conversion, every ranking change feeds back into the system. The agents learn which keywords drive qualified leads for your specific business, which ad angles resonate with your audience, which content formats earn the most engagement in your industry. By month 3, they know your market better than most human marketers. By month 6, they're anticipating seasonal shifts and competitive moves before they happen. This compounding intelligence is the real product — and it never stops learning.",
  },
  {
    icon: "🔧",
    title: "Full Growth Stack in One Platform",
    description: "SEO + Paid Ads + Website + Creative — no extra vendors needed.",
    detail:
      "Most companies need more than content to grow. They need search ads capturing high-intent buyers, landing pages converting that traffic, and creative that doesn't cost $2,000 per round. MEGA covers the full stack: AI-powered SEO, always-on paid ads management, website development, and unlimited AI-generated creative. GrowthX focuses on organic content — a critical piece, but just one piece. With MEGA, your AI agents coordinate across every channel, sharing learnings between SEO and paid to optimize the whole funnel.",
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
              Agentic AI vs AI-Assisted — How They Compare
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-[#111827] leading-tight mb-6"
          >
            Autonomous AI Agents.
            <br />
            <span className="text-[#2965FF]">Not AI-Assisted Humans.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12"
          >
            MEGA built autonomous AI agents that live inside your accounts — optimizing 24/7, spying on competitors, and adapting in real time. GrowthX uses AI to help their human team work faster. Same word, very different reality.
          </motion.p>

          {/* Stat cards */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "$699", label: "MEGA starting price", sub: "vs $15,000/mo" },
              { value: "1000s", label: "Micro-optimizations/month", sub: "vs weekly human reviews" },
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

      {/* AI Architecture Diagram */}
      <AnimatedSection className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            How the AI Actually Works
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Two fundamentally different architectures. One is AI doing the work. The other is humans using AI tools.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* MEGA diagram */}
            <div className="bg-white rounded-2xl border-2 border-[#2965FF] p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-[#2965FF] text-white text-xs font-bold rounded-full">MEGA AI — Agentic</div>
              <div className="space-y-4 mt-2">
                {[
                  { step: "1", label: "AI agents monitor", detail: "Rankings, competitors, conversions — every hour" },
                  { step: "2", label: "AI agents decide", detail: "Spot opportunities, detect threats, prioritize actions" },
                  { step: "3", label: "AI agents execute", detail: "Publish content, adjust bids, test creative, fix pages" },
                  { step: "4", label: "AI agents learn", detail: "Every result feeds back — the system gets smarter daily" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2965FF] text-white flex items-center justify-center text-sm font-bold">{item.step}</div>
                    <div>
                      <div className="font-semibold text-[#111827] text-sm">{item.label}</div>
                      <div className="text-xs text-[#6B7280]">{item.detail}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center pt-2">
                  <div className="text-xs font-medium text-[#2965FF] bg-[#2965FF]/10 px-3 py-1 rounded-full">↻ Continuous loop — 24/7/365</div>
                </div>
              </div>
            </div>
            {/* GrowthX diagram */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-gray-500 text-white text-xs font-bold rounded-full">GrowthX — AI-Assisted</div>
              <div className="space-y-4 mt-2">
                {[
                  { step: "1", label: "Human strategist reviews", detail: "Weekly/biweekly analysis of performance data" },
                  { step: "2", label: "Human decides strategy", detail: "Sets priorities, picks topics, assigns work" },
                  { step: "3", label: "AI assists production", detail: "Drafts content that humans review and refine" },
                  { step: "4", label: "Human publishes & reports", detail: "Manual QA, scheduling, and monthly reporting" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center text-sm font-bold">{item.step}</div>
                    <div>
                      <div className="font-semibold text-[#374151] text-sm">{item.label}</div>
                      <div className="text-xs text-[#6B7280]">{item.detail}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center pt-2">
                  <div className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">↻ Weekly cycle — business hours only</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* MEGA Results — Social Proof */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-4">
            What MEGA&apos;s AI Agents Deliver
          </h2>
          <p className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto">
            Real results from real clients — powered by autonomous AI, not human review cycles.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "1,231%", label: "Organic traffic growth", sub: "Cybersecurity firm, 8 months" },
              { value: "3,847", label: "Keywords ranking", sub: "From 291 baseline" },
              { value: "412", label: "Top 10 rankings", sub: "From 24 baseline" },
              { value: "$655K", label: "Revenue attributed", sub: "Blended SEO + Paid Ads" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#2965FF]/5 to-white rounded-2xl border border-[#2965FF]/20 p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#2965FF] mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-[#111827]">{stat.label}</div>
                <div className="text-xs text-[#6B7280] mt-1">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/cybersecurity" className="text-[#2965FF] font-medium text-sm hover:underline">
              View the full cybersecurity case study →
            </a>
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
                  "Want truly autonomous AI agents, not AI-assisted human services",
                  "Need 24/7 optimization that compounds — not weekly human check-ins",
                  "Want real-time competitive intelligence monitoring your market",
                  "Need SEO, paid ads, and website in one AI-powered platform",
                  "Run any type of business — B2B, B2C, ecommerce, local, or enterprise",
                  "Want enterprise-grade AI at $699/mo instead of $15,000/mo",
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
                  "Have $15K+/month budget for organic content alone",
                  "Are a well-funded B2B SaaS company",
                  "Want a human strategist leading with AI tools assisting",
                  "Only need SEO/content — no paid ads or website needed",
                  "Prefer weekly human review cycles over autonomous AI",
                  "Value agency pedigree (ex-Deepgram, Scale AI, HashiCorp team)",
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
