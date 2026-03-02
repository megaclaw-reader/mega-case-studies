"use client";

import { motion } from "framer-motion";
import { CaseStudyData } from "@/data/types";

export default function BeforeAfterComparison({ data }: { data: CaseStudyData }) {
  const metrics: { label: string; before: string; after: string; improved: boolean }[] = [];

  if (data.paidAds?.monthly?.length && data.paidAds.monthly.length >= 2) {
    const first = data.paidAds.monthly[0];
    const last = data.paidAds.monthly[data.paidAds.monthly.length - 1];
    metrics.push(
      { label: "Leads / Month", before: first.leads.toLocaleString(), after: last.leads.toLocaleString(), improved: last.leads > first.leads },
      { label: "Cost Per Lead", before: `$${first.cpl.toFixed(2)}`, after: `$${last.cpl.toFixed(2)}`, improved: last.cpl < first.cpl },
      { label: "Qualified Leads", before: first.qualified.toLocaleString(), after: last.qualified.toLocaleString(), improved: last.qualified > first.qualified },
    );
    if (first.revenue && last.revenue) {
      metrics.push({ label: "Monthly Revenue", before: `$${first.revenue.toLocaleString()}`, after: `$${last.revenue.toLocaleString()}`, improved: last.revenue > first.revenue });
    }
  }

  if (data.seo?.monthly?.length && data.seo.monthly.length >= 2) {
    const first = data.seo.monthly[0];
    const last = data.seo.monthly[data.seo.monthly.length - 1];
    metrics.push(
      { label: "Organic Traffic", before: first.traffic.toLocaleString(), after: last.traffic.toLocaleString(), improved: last.traffic > first.traffic },
      { label: "Keywords Ranking", before: first.keywords.toLocaleString(), after: last.keywords.toLocaleString(), improved: last.keywords > first.keywords },
    );
  }

  if (metrics.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">The Transformation</h2>
          <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">Month 1 vs. final month — see the real impact of AI-powered marketing.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-[#6B7280] mb-4">{m.label}</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 text-center">
                  <span className="text-xs uppercase tracking-wider text-[#9CA3AF] font-semibold">Before</span>
                  <p className="text-xl md:text-2xl font-bold text-[#6B7280] mt-1">{m.before}</p>
                </div>
                <div className="text-[#6B7280] text-2xl">→</div>
                <div className="flex-1 text-center">
                  <span className={`text-xs uppercase tracking-wider font-semibold ${m.improved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>After</span>
                  <p className={`text-xl md:text-2xl font-bold mt-1 ${m.improved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>{m.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
