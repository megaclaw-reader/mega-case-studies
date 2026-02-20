"use client";

import AnimatedSection from "./AnimatedSection";
import { MetricHeader } from "./MetricTooltip";
import { CaseStudyData } from "@/data/types";
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart,
} from "recharts";

export default function PaidAdsPerformance({ data }: { data: CaseStudyData }) {
  if (!data.paidAds) return null;
  const { paidAds } = data;

  return (
    <AnimatedSection id="paid-ads" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Paid Advertising Performance</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {paidAds.summary.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-[#6B7280] mb-1">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              {s.note && <div className="text-sm text-green-600 font-medium mt-1">{s.note}</div>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Ad Spend vs Leads</h3>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={paidAds.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar yAxisId="left" dataKey="spend" fill="#2965FF" opacity={0.2} radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="leads" stroke="#2965FF" strokeWidth={2.5} dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Cost Per Lead Reduction</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={paidAds.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="cpl" stroke="#2965FF" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="cpql" stroke="#4A7DFF" strokeWidth={2} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="font-bold p-6 pb-4">Monthly Paid Ads Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Month", "Spend", "Leads", "CPL", "Qualified", "CPQL", "Deals", "Revenue", "ROAS"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      <MetricHeader label={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paidAds.monthly.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-5 py-3 font-medium">{row.month}</td>
                    <td className="px-5 py-3">${row.spend.toLocaleString()}</td>
                    <td className="px-5 py-3">{row.leads}</td>
                    <td className="px-5 py-3">${row.cpl}</td>
                    <td className="px-5 py-3">{row.qualified}</td>
                    <td className="px-5 py-3">${row.cpql.toLocaleString()}</td>
                    <td className="px-5 py-3">{row.deals}</td>
                    <td className="px-5 py-3">${row.revenue.toLocaleString()}</td>
                    <td className="px-5 py-3">{row.roas}x</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {(() => {
                  const m = paidAds.monthly;
                  const totalSpend = m.reduce((s, r) => s + r.spend, 0);
                  const totalLeads = m.reduce((s, r) => s + r.leads, 0);
                  const avgCpl = Math.round(totalSpend / totalLeads);
                  const totalQualified = m.reduce((s, r) => s + r.qualified, 0);
                  const avgCpql = Math.round(totalSpend / totalQualified);
                  const totalDeals = m.reduce((s, r) => s + r.deals, 0);
                  const totalRevenue = m.reduce((s, r) => s + r.revenue, 0);
                  const avgRoas = (totalRevenue / totalSpend).toFixed(1);
                  return (
                    <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                      <td className="px-5 py-3">Total / Avg</td>
                      <td className="px-5 py-3">${totalSpend.toLocaleString()}</td>
                      <td className="px-5 py-3">{totalLeads.toLocaleString()}</td>
                      <td className="px-5 py-3">${avgCpl}</td>
                      <td className="px-5 py-3">{totalQualified.toLocaleString()}</td>
                      <td className="px-5 py-3">${avgCpql.toLocaleString()}</td>
                      <td className="px-5 py-3">{totalDeals}</td>
                      <td className="px-5 py-3">${totalRevenue.toLocaleString()}</td>
                      <td className="px-5 py-3">{avgRoas}x</td>
                    </tr>
                  );
                })()}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
