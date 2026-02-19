"use client";

import AnimatedSection from "./AnimatedSection";
import { CaseStudyData } from "@/data/types";

export default function Strategy({ data }: { data: CaseStudyData }) {
  return (
    <AnimatedSection id="strategy" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Strategy</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#2965FF]/20" />

          <div className="space-y-12">
            {data.strategy.map((phase) => (
              <div key={phase.phase} className="relative pl-16 md:pl-20">
                {/* Numbered circle */}
                <div className="absolute left-0 md:left-2 w-12 h-12 rounded-full bg-[#2965FF] text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-[#2965FF]/25">
                  {phase.phase}
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-lg font-bold">{phase.title}</h3>
                    <span className="text-sm text-[#6B7280] bg-gray-100 px-3 py-1 rounded-full">
                      Months {phase.months}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#6B7280]">
                        <span className="text-[#2965FF] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
