"use client";

import { useState } from "react";

const SERVICES = [
  "SEO",
  "Paid Advertising",
];

export default function RequestPage() {
  const [form, setForm] = useState({
    requesterName: "",
    email: "",
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
            Your case study request has been received. June will build it and send you the link on Slack once it&apos;s ready. This usually takes about 15-20 minutes.
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
          <svg width="112" height="40" viewBox="0 0 56 19.871" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Mega">
            <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
          </svg>
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

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Your Work Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="e.g. julien@gomega.ai"
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
              Monthly Ad Spend <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={form.monthlySpend}
              onChange={(e) => update("monthlySpend", e.target.value)}
              placeholder="e.g. $10,000"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2454FF]/30 focus:border-[#2454FF] transition"
            />
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
