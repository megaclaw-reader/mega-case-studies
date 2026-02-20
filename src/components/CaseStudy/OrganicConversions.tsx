"use client";

import AnimatedSection from "./AnimatedSection";
import { MetricHeader } from "./MetricTooltip";
import { CaseStudyData } from "@/data/types";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell,
} from "recharts";

const COLORS = ["#2965FF", "#4A7DFF", "#93B4FF"];

export default function OrganicConversions({ data }: { data: CaseStudyData }) {
  if (!data.organicConversions) return null;
  const { organicConversions } = data;
  const ocl = organicConversions.columnLabels;

  return (
    <AnimatedSection id="conversions" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Organic Conversions</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {organicConversions.summary.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-sm text-[#6B7280] mb-1">{s.label}</div>
              <div className="text-2xl font-bold">{s.value}</div>
              {s.growth && <div className="text-sm text-green-600 font-medium mt-1">{s.growth}</div>}
              {s.note && <div className="text-xs text-[#6B7280] mt-0.5">{s.note}</div>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Monthly Organic Leads</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={organicConversions.monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="formFills" name={ocl?.formFills || "Form Fills"} stackId="a" fill="#2965FF" radius={[0, 0, 0, 0]} />
                <Bar dataKey="calls" name={ocl?.calls || "Phone Calls"} stackId="a" fill="#4A7DFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold mb-4">Lead Sources</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={organicConversions.sources}
                  dataKey="leads"
                  nameKey="source"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, payload }: { name?: string; payload?: { percentage?: number } }) => `${name} (${payload?.percentage ?? 0}%)`}
                >
                  {organicConversions.sources.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="font-bold p-6 pb-4">Monthly Conversion Data</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Month", ocl?.formFills || "Form Fills", ocl?.calls || "Calls", ocl?.totalLeads || "Total Leads", ocl?.conversionRate || "Conversion Rate"].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                      <MetricHeader label={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {organicConversions.monthly.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-gray-50/50" : ""}>
                    <td className="px-6 py-3 font-medium">{row.month}</td>
                    <td className="px-6 py-3">{row.formFills}</td>
                    <td className="px-6 py-3">{row.calls}</td>
                    <td className="px-6 py-3 font-semibold">{row.totalLeads}</td>
                    <td className="px-6 py-3">{row.conversionRate}%</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {(() => {
                  const m = organicConversions.monthly;
                  const avgRate = (m.reduce((s, r) => s + r.conversionRate, 0) / m.length).toFixed(1);
                  return (
                    <tr className="border-t-2 border-gray-200 bg-gray-100 font-semibold">
                      <td className="px-6 py-3">Total / Avg</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.formFills, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.calls, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{m.reduce((s, r) => s + r.totalLeads, 0).toLocaleString()}</td>
                      <td className="px-6 py-3">{avgRate}%</td>
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
