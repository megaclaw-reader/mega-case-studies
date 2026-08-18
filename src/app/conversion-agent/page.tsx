import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEGA Conversion Agent — Turn Every Lead Into a Booked Appointment",
};

const FEATURES = [
  {
    icon: "📞",
    title: "24/7 Call Handling",
    description: "Every inbound call answered instantly — no voicemail, no hold music, no missed opportunities. After-hours, weekends, holidays, lunch rush overflow — all covered automatically.",
  },
  {
    icon: "🎯",
    title: "AI Lead Qualification",
    description: "The AI asks your specific qualifying questions — service needed, location, timeline, budget — and scores each lead in real time. Only qualified prospects reach your team.",
  },
  {
    icon: "📅",
    title: "Automatic Appointment Booking",
    description: "Qualified leads are booked directly into your calendar. Confirmation texts sent instantly. Automated reminders at 24h, 2h, and 30 min cut no-shows by 40-60%.",
  },
  {
    icon: "🔄",
    title: "Multi-Channel Nurturing",
    description: "Not ready to book? The AI follows up via call, text, and email over days and weeks. Cold leads are automatically reactivated at 30, 60, and 90 days. Nothing falls through the cracks.",
  },
  {
    icon: "🔌",
    title: "Works With Your CRM",
    description: "Integrates with HubSpot, Salesforce, HighLevel, ServiceTitan, or any CRM with an open API. Or use MEGA's built-in CRM at no extra cost. Every interaction logged automatically.",
  },
  {
    icon: "📊",
    title: "Closed-Loop Attribution",
    description: "Track every lead from ad click → call → qualification → booked appointment → completed service. Know exactly which campaigns produce real customers, not just clicks.",
  },
];

const STATS = [
  { value: "<5s", label: "Average Response Time", detail: "Industry average: 47 hours" },
  { value: "100%", label: "Calls Answered", detail: "24/7/365 — zero go to voicemail" },
  { value: "40-60%", label: "No-Show Reduction", detail: "Automated reminder sequences" },
  { value: "3x", label: "More Booked Appointments", detail: "vs. manual intake processes" },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Lead Comes In",
    description: "Phone call, web form, chat, or ad click — the Conversion Agent responds in under 5 seconds, every time, on every channel.",
  },
  {
    step: "02",
    title: "AI Qualifies Instantly",
    description: "Custom questions for your business. Service type, location, budget, timeline, urgency — scored and categorized in real time during the conversation.",
  },
  {
    step: "03",
    title: "Appointment Booked",
    description: "Qualified leads are booked into your calendar automatically. Confirmation and reminders sent via text and email. Your team shows up to a warm, pre-qualified prospect.",
  },
  {
    step: "04",
    title: "Pipeline Nurtured",
    description: "Leads not ready today get automated multi-channel follow-up — call, text, email — until they book or opt out. Cold leads are reactivated automatically.",
  },
];

const INDUSTRIES = [
  "Home Services", "Healthcare & MedSpa", "Legal & Professional Services",
  "Financial Advisory", "Dental & Orthodontics", "Automotive",
  "Real Estate", "SaaS & Technology", "Franchise & Multi-Location",
  "E-Commerce", "Wellness & Fitness", "Education & Training",
];

export default function ConversionAgentPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="https://www.gomega.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <svg width="112" height="40" viewBox="0 0 56 19.871" xmlns="http://www.w3.org/2000/svg">
              <path d="M 52.483 5.276 L 52.483 3.883 L 56 3.883 L 56 15.303 L 52.483 15.303 L 52.483 13.909 L 52.391 13.909 C 51.706 14.892 50.45 15.645 48.874 15.645 C 45.882 15.645 43.598 13.247 43.598 9.638 C 43.598 6.121 45.745 3.54 48.874 3.54 C 50.45 3.54 51.706 4.294 52.391 5.276 Z M 49.833 12.311 C 51.409 12.311 52.483 11.077 52.483 9.593 C 52.483 8.04 51.364 6.875 49.833 6.875 C 48.326 6.875 47.184 7.994 47.184 9.593 C 47.184 11.191 48.326 12.311 49.833 12.311 Z M 39.613 5.276 L 39.613 3.883 L 43.131 3.883 L 43.131 16.513 C 43.131 18.683 41.852 19.871 39.659 19.871 L 32.236 19.871 L 32.236 16.308 L 38.791 16.308 C 39.271 16.308 39.613 16.034 39.613 15.577 L 39.613 13.909 L 39.522 13.909 C 38.837 14.892 37.58 15.645 36.005 15.645 C 33.013 15.645 30.729 13.247 30.729 9.638 C 30.729 6.121 32.876 3.54 36.005 3.54 C 37.58 3.54 38.837 4.294 39.522 5.276 Z M 36.964 12.311 C 38.54 12.311 39.613 11.077 39.613 9.593 C 39.613 8.04 38.494 6.875 36.964 6.875 C 35.456 6.875 34.314 7.994 34.314 9.593 C 34.314 11.191 35.456 12.311 36.964 12.311 Z M 24.352 3.54 C 28.166 3.54 30.61 6.601 30.153 10.758 L 21.931 10.758 C 22.159 11.625 22.913 12.402 24.238 12.516 C 25.106 12.585 26.042 12.219 26.408 11.648 L 30.085 11.648 C 29.354 14.252 27.001 15.645 24.284 15.645 C 20.378 15.645 18.368 12.79 18.368 9.593 C 18.368 6.167 20.835 3.54 24.352 3.54 Z M 24.329 6.646 C 23.187 6.646 22.296 7.217 21.977 8.131 L 26.659 8.131 C 26.339 7.172 25.448 6.646 24.329 6.646 Z M 17.609 0 L 17.609 15.303 L 13.841 15.303 L 13.841 5.573 L 9.89 15.303 L 7.72 15.303 L 3.769 5.573 L 3.769 15.303 L 0 15.303 L 0 0 L 5.23 0 L 8.816 9.09 L 12.425 0 Z" fill="#2454FF"/>
            </svg>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-500 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-500 hover:text-primary transition-colors">How It Works</a>
            <a href="#results" className="text-sm text-gray-500 hover:text-primary transition-colors">Results</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-[#f0f4ff]">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-base font-semibold mb-6">
                Conversion Agent
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Every Lead Into a{" "}
                <span className="text-primary">Booked Appointment</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                Your AI-powered lead conversion engine that answers every call 24/7, qualifies prospects instantly, books appointments into your calendar, and nurtures your pipeline automatically — so your team closes deals instead of chasing cold leads.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.gomega.ai/demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                  Book a Demo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">The Problem</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              You&apos;re spending money to generate leads. But your intake process is losing them before they ever become customers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { stat: "78%", text: "of customers buy from the first company to respond. If your team takes hours to call back, that lead already booked with your competitor." },
                { stat: "50%", text: "of leads are never followed up on. No second call, no text, no email. They expressed interest and heard nothing back." },
                { stat: "47h", text: "is the average business response time to a web lead. Your Conversion Agent responds in under 5 seconds." },
                { stat: "35%", text: "of appointments are no-shows without automated reminders. That's revenue your team prepared for and never received." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-5">
                  <div className="text-3xl font-bold text-primary flex-shrink-0 w-16">{item.stat}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section id="results" className="bg-primary py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/90 font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-white/60 text-xs">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Your Intake Process Should Be</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">One AI agent replaces missed calls, manual qualification, scheduling chaos, and forgotten follow-ups.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURES.map((feature, i) => (
                <div key={i} className="group bg-gray-50 hover:bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-[#f8faff] to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-500">From first contact to booked appointment — fully automated.</p>
            </div>
            <div className="space-y-8">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/20">
                    {step.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Built for Every Industry That Relies on Leads</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry, i) => (
                <span key={i} className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Losing the Leads You Already Paid For</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Every missed call, slow response, and forgotten follow-up is revenue walking out the door. The Conversion Agent makes sure it doesn&apos;t happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.gomega.ai/demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Book a Demo →
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} MEGA AI. All rights reserved.
        </div>
      </footer>
    </>
  );
}
