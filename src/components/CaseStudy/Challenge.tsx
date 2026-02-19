"use client";

import AnimatedSection from "./AnimatedSection";
import { CaseStudyData } from "@/data/types";

export default function Challenge({ data }: { data: CaseStudyData }) {
  return (
    <AnimatedSection id="challenge" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">The Challenge</h2>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
          <h3 className="text-lg font-bold mb-4">About the Company</h3>
          <p className="text-[#6B7280] leading-relaxed mb-6">{data.company.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Industry", data.company.industry],
              ["Employees", data.company.employees],
              ["Revenue", data.company.revenue],
              ["Location", data.company.location],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider mb-1">{label}</div>
                <div className="font-semibold text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.challenges.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#2965FF]/10 text-[#2965FF] flex items-center justify-center font-bold text-lg mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
