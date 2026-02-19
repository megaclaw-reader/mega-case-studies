"use client";

import { useState } from "react";

const SERVICES = [
  "SEO",
  "Paid Advertising",
  "Web Design",
  "Social Media",
  "Content Marketing",
  "Email Marketing",
  "CRM Setup",
];

export default function RequestPage() {
  const [form, setForm] = useState({
    requesterName: "",
    industry: "",
    scope: "local",
    monthlySpend: "",
    clientDuration: "",
    services: [] as string[],
    region: "",
    highlights: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-[#FDFDFD] flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted</h1>
          <p className="text-gray-600">
            Your case study request has been received. June will build it and notify you when it&apos;s ready.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mega-wordmark.svg" alt="Mega" className="h-6 w-auto" />
          <span className="text-sm font-medium text-gray-400">Case Study Request</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Request a Case Study</h1>
          <p className="text-gray-600">
            Fill out the details below and June will build a polished, data-driven case study for your prospect.
          </p>
        </div>

        <form onSubmit={submit} className="space-y-6">
          {/* Requester Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.requesterName}
              onChange={(e) => update("requesterName", e.target.value)}
              placeholder="e.g. Julien Comito"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Industry / Vertical <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.industry}
              onChange={(e) => update("industry", e.target.value)}
              placeholder="e.g. Roofing, Dental, Mortgage Lending"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition"
            />
          </div>

          {/* Local / National */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Business Scope <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {["local", "national"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="scope"
                    value={opt}
                    checked={form.scope === opt}
                    onChange={() => update("scope", opt)}
                    className="accent-[#2454FF]"
                  />
                  <span className="text-sm text-gray-700 capitalize">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Monthly Ad Spend */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Monthly Ad Spend Range <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={form.monthlySpend}
              onChange={(e) => update("monthlySpend", e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition bg-white"
            >
              <option value="">Select range...</option>
              <option value="$1K–$5K">$1K–$5K</option>
              <option value="$5K–$15K">$5K–$15K</option>
              <option value="$15K–$30K">$15K–$30K</option>
              <option value="$30K–$50K">$30K–$50K</option>
              <option value="$50K+">$50K+</option>
              <option value="N/A (SEO only)">N/A (SEO only)</option>
            </select>
          </div>

          {/* Client Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Client Duration (months) <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="number"
              min={1}
              max={60}
              value={form.clientDuration}
              onChange={(e) => update("clientDuration", e.target.value)}
              placeholder="e.g. 12"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition"
            />
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Services Provided <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggleService(s)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition ${
                    form.services.includes(s)
                      ? "bg-[#2454FF] text-white border-[#2454FF]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Geographic Region
            </label>
            <input
              type="text"
              value={form.region}
              onChange={(e) => update("region", e.target.value)}
              placeholder="e.g. Greater Toronto Area, Nationwide US"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition"
            />
          </div>

          {/* Highlights */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Standout Results or Notes
            </label>
            <textarea
              value={form.highlights}
              onChange={(e) => update("highlights", e.target.value)}
              placeholder="Any specific wins, context, or details you want highlighted..."
              rows={3}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || form.services.length === 0}
            className="w-full py-3 bg-[#2454FF] text-white font-semibold rounded-lg hover:bg-[#1a3fd4] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Submitting..." : "Submit Request"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
          )}
        </form>
      </main>
    </div>
  );
}
