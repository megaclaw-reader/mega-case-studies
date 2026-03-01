"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CaseStudyData } from "@/data/types";

export default function ROICalculator({ data }: { data: CaseStudyData }) {
  const [budget, setBudget] = useState(2500);

  const benchmarks = useMemo(() => {
    if (!data.paidAds?.monthly?.length) return null;
    const m = data.paidAds.monthly;
    const avgCPL = m.reduce((s, r) => s + r.cpl, 0) / m.length;
    const avgQualRate = m.reduce((s, r) => s + (r.qualified / (r.leads || 1)), 0) / m.length;
    const withDeals = m.filter(r => r.deals && r.deals > 0);
    const avgDealRate = withDeals.length > 0
      ? withDeals.reduce((s, r) => s + ((r.deals || 0) / (r.qualified || 1)), 0) / withDeals.length
      : 0.25;
    const avgDealValue = withDeals.length > 0
      ? withDeals.reduce((s, r) => s + ((r.revenue || 0) / (r.deals || 1)), 0) / withDeals.length
      : 5000;
    return { avgCPL, avgQualRate, avgDealRate, avgDealValue };
  }, [data]);

  if (!benchmarks) return null;

  const projLeads = Math.round(budget / benchmarks.avgCPL);
  const projQualified = Math.round(projLeads * benchmarks.avgQualRate);
  const projDeals = Math.max(1, Math.round(projQualified * benchmarks.avgDealRate));
  const projRevenue = Math.round(projDeals * benchmarks.avgDealValue);

  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">ROI Calculator for {data.industry}</h2>
          <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">See what AI-powered marketing could do for your business, based on real performance data.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-sm">
          <label className="block text-sm font-medium text-[#374151] mb-2">Your Monthly Ad Budget</label>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-lg font-semibold text-[#374151]">$</span>
            <input
              type="range"
              min={500}
              max={15000}
              step={250}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="flex-1 accent-[#2965FF] h-2"
            />
            <span className="text-lg font-bold text-[#2965FF] min-w-[80px] text-right">{budget.toLocaleString()}</span>
          </div>
          <p className="text-xs text-[#9CA3AF] mb-8">Drag to adjust — projections update instantly</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Leads / Month", value: projLeads },
              { label: "Qualified Leads", value: projQualified },
              { label: "Estimated Deals", value: projDeals },
              { label: "Estimated Revenue", value: `$${projRevenue.toLocaleString()}` },
            ].map((item, i) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-[#2965FF]">{typeof item.value === "number" ? item.value.toLocaleString() : item.value}</p>
                <p className="text-sm text-[#6B7280] mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="https://gomega.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#2965FF] text-white font-semibold rounded-xl hover:bg-[#1E4FD9] transition-colors">
              Get Started →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
