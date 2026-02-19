"use client";

import { motion } from "framer-motion";
import { CaseStudyData } from "@/data/types";

export default function Hero({ data }: { data: CaseStudyData }) {
  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2965FF]/10 text-[#2965FF] text-sm font-medium mb-6">
            {data.industry} Case Study
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-6">
            {data.headline}
          </h1>
          <p className="text-lg text-[#6B7280] max-w-3xl mb-10 leading-relaxed">
            {data.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {data.heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#2965FF]">
                {stat.value}
                <span className="text-2xl md:text-3xl ml-1">{stat.unit}</span>
              </div>
              <div className="text-[#6B7280] mt-2 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
