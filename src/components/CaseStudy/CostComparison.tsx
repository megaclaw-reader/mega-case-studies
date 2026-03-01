"use client";

import { motion } from "framer-motion";

const Check = () => <span className="text-[#10B981] font-bold text-lg">✓</span>;
const Cross = () => <span className="text-[#EF4444] font-bold text-lg">✗</span>;

const features = [
  { name: "AI-Powered Optimization", mega: true, inHouse: false, agency: false },
  { name: "Paid Ads Management", mega: true, inHouse: true, agency: true },
  { name: "SEO & Content", mega: true, inHouse: true, agency: true },
  { name: "No Long-Term Contracts", mega: true, inHouse: false, agency: false },
  { name: "Full-Stack Coverage", mega: true, inHouse: false, agency: false },
  { name: "24/7 Campaign Monitoring", mega: true, inHouse: false, agency: false },
  { name: "Transparent Reporting", mega: true, inHouse: true, agency: false },
  { name: "Scales Without Hiring", mega: true, inHouse: false, agency: true },
];

export default function CostComparison() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">How MEGA Compares</h2>
          <p className="text-[#6B7280] text-center mb-10 max-w-2xl mx-auto">Get more for less — without the overhead, markups, or long-term commitments.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-4 text-sm font-medium text-[#6B7280]"></th>
                {[
                  { title: "MEGA AI", price: "$999–2,998/mo", highlight: true },
                  { title: "In-House Marketer", price: "$60–80K/yr + tools", highlight: false },
                  { title: "Traditional Agency", price: "$3–5K/mo + ad markup", highlight: false },
                ].map(col => (
                  <th key={col.title} className={`py-4 px-4 text-center ${col.highlight ? "bg-[#2965FF]/5 rounded-t-xl" : ""}`}>
                    <p className={`font-bold text-base ${col.highlight ? "text-[#2965FF]" : "text-[#374151]"}`}>{col.title}</p>
                    <p className="text-xs text-[#6B7280] mt-1">{col.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.name} className={i % 2 === 0 ? "bg-[#F9FAFB]" : ""}>
                  <td className="py-3 px-4 text-sm text-[#374151] font-medium">{f.name}</td>
                  <td className="py-3 px-4 text-center bg-[#2965FF]/5">{f.mega ? <Check /> : <Cross />}</td>
                  <td className="py-3 px-4 text-center">{f.inHouse ? <Check /> : <Cross />}</td>
                  <td className="py-3 px-4 text-center">{f.agency ? <Check /> : <Cross />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
