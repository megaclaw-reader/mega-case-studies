"use client";

import { motion } from "framer-motion";
import { CaseStudyData } from "@/data/types";

function avg(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/** Find the best consecutive window of `size` months in `arr` (second half only) by a scoring function.
 *  For "higher is better" metrics, pass the metric extractor directly.
 *  Returns the best window slice. */
function bestWindow<T>(arr: T[], size: number, startFrom: number, scorer: (slice: T[]) => number): T[] {
  if (arr.length <= size) return arr.slice(startFrom);
  let best = arr.slice(startFrom, startFrom + size);
  let bestScore = scorer(best);
  for (let i = startFrom + 1; i <= arr.length - size; i++) {
    const slice = arr.slice(i, i + size);
    const score = scorer(slice);
    if (score > bestScore) {
      bestScore = score;
      best = slice;
    }
  }
  return best;
}

export default function BeforeAfterComparison({ data }: { data: CaseStudyData }) {
  const metrics: { label: string; before: string; after: string; improved: boolean }[] = [];

  if (data.paidAds?.monthly?.length && data.paidAds.monthly.length >= 2) {
    const m = data.paidAds.monthly;
    const cl = data.paidAds.columnLabels;
    const hiddenCols = new Set(data.paidAds.hiddenColumns ?? []);
    const isEcom = !!(cl?.leads || cl?.qualified); // ecom uses custom column labels

    // Baseline = first 3 months; Optimized = best 3-month window from month 4+
    // This handles seasonality — we show peak optimized performance vs starting baseline
    let earlySlice, lateSlice;
    if (m.length >= 6) {
      earlySlice = m.slice(0, 3);
      // Find the best 3-month window starting from month 4 (index 3), scored by qualified leads
      lateSlice = bestWindow(m, 3, 3, (s) => avg(s.map(x => x.qualified)));
    } else if (m.length >= 4) {
      earlySlice = m.slice(0, 2);
      lateSlice = m.slice(-2);
    } else {
      const mid = Math.floor(m.length / 2);
      earlySlice = m.slice(0, mid || 1);
      lateSlice = m.slice(mid);
    }

    const earlyLeads = avg(earlySlice.map(x => x.leads));
    const lateLeads = avg(lateSlice.map(x => x.leads));
    const earlyCpl = avg(earlySlice.map(x => x.cpl));
    const lateCpl = avg(lateSlice.map(x => x.cpl));
    const earlyQual = avg(earlySlice.map(x => x.qualified));
    const lateQual = avg(lateSlice.map(x => x.qualified));

    metrics.push(
      { label: `Avg. ${cl?.leads || "Leads"} / Month`, before: Math.round(earlyLeads).toLocaleString(), after: Math.round(lateLeads).toLocaleString(), improved: lateLeads > earlyLeads },
    );
    if (!hiddenCols.has("cpl")) {
      metrics.push(
        { label: `Avg. ${cl?.cpl || "Cost Per Lead"}`, before: `$${earlyCpl.toFixed(2)}`, after: `$${lateCpl.toFixed(2)}`, improved: lateCpl < earlyCpl },
      );
    }
    metrics.push(
      { label: `Avg. ${cl?.qualified || "Qualified Leads"}`, before: Math.round(earlyQual).toLocaleString(), after: Math.round(lateQual).toLocaleString(), improved: lateQual > earlyQual },
    );

    // For ecom, also show avg orders
    if (isEcom) {
      const earlyDeals = earlySlice.map(x => x.deals).filter((d): d is number => d != null);
      const lateDeals = lateSlice.map(x => x.deals).filter((d): d is number => d != null);
      if (earlyDeals.length && lateDeals.length) {
        const earlyAvgDeals = avg(earlyDeals);
        const lateAvgDeals = avg(lateDeals);
        metrics.push({ label: `Avg. ${cl?.deals || "Orders"} / Month`, before: Math.round(earlyAvgDeals).toLocaleString(), after: Math.round(lateAvgDeals).toLocaleString(), improved: lateAvgDeals > earlyAvgDeals });
      }
    }

    const earlyRev = earlySlice.map(x => x.revenue).filter((r): r is number => r != null);
    const lateRev = lateSlice.map(x => x.revenue).filter((r): r is number => r != null);
    if (earlyRev.length && lateRev.length) {
      const earlyAvgRev = avg(earlyRev);
      const lateAvgRev = avg(lateRev);
      metrics.push({ label: "Avg. Monthly Revenue", before: `$${Math.round(earlyAvgRev).toLocaleString()}`, after: `$${Math.round(lateAvgRev).toLocaleString()}`, improved: lateAvgRev > earlyAvgRev });
    }
  }

  if (data.seo?.monthly?.length && data.seo.monthly.length >= 4) {
    const m = data.seo.monthly;
    const earlySlice = m.slice(0, 3);
    const lateSlice = m.length >= 6
      ? bestWindow(m, 3, 3, (s) => avg(s.map(x => x.traffic)))
      : m.slice(-3);
    metrics.push(
      { label: "Avg. Organic Traffic", before: Math.round(avg(earlySlice.map(x => x.traffic))).toLocaleString(), after: Math.round(avg(lateSlice.map(x => x.traffic))).toLocaleString(), improved: avg(lateSlice.map(x => x.traffic)) > avg(earlySlice.map(x => x.traffic)) },
      { label: "Avg. Keywords Ranking", before: Math.round(avg(earlySlice.map(x => x.keywords))).toLocaleString(), after: Math.round(avg(lateSlice.map(x => x.keywords))).toLocaleString(), improved: avg(lateSlice.map(x => x.keywords)) > avg(earlySlice.map(x => x.keywords)) },
    );
  } else if (data.seo?.monthly?.length && data.seo.monthly.length >= 2) {
    const m = data.seo.monthly;
    const mid = Math.floor(m.length / 2);
    const earlySlice = m.slice(0, mid || 1);
    const lateSlice = m.slice(mid);
    metrics.push(
      { label: "Avg. Organic Traffic", before: Math.round(avg(earlySlice.map(x => x.traffic))).toLocaleString(), after: Math.round(avg(lateSlice.map(x => x.traffic))).toLocaleString(), improved: avg(lateSlice.map(x => x.traffic)) > avg(earlySlice.map(x => x.traffic)) },
      { label: "Avg. Keywords Ranking", before: Math.round(avg(earlySlice.map(x => x.keywords))).toLocaleString(), after: Math.round(avg(lateSlice.map(x => x.keywords))).toLocaleString(), improved: avg(lateSlice.map(x => x.keywords)) > avg(earlySlice.map(x => x.keywords)) },
    );
  }

  if (metrics.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">The Transformation</h2>
          <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">Baseline performance vs. peak optimized results — average metrics that show the real impact.</p>
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
                  <span className={`text-xs uppercase tracking-wider font-semibold ${m.before === m.after ? 'text-[#6B7280]' : m.improved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>After</span>
                  <p className={`text-xl md:text-2xl font-bold mt-1 ${m.before === m.after ? 'text-[#6B7280]' : m.improved ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>{m.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
