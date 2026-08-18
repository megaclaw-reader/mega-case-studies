import { CaseStudyData } from "./types";

export const conversionAgent: CaseStudyData = {
  slug: "conversion-agent",
  industry: "Product Overview",
  headline: "MEGA's Conversion Agent: Turn Every Lead Into a Booked Appointment — Automatically",
  subheadline: "Your AI-powered lead conversion engine that answers every call 24/7, qualifies prospects instantly, books appointments into your calendar, and nurtures your pipeline with multi-channel follow-up — so your team closes deals instead of chasing cold leads.",
  heroStats: [
    { value: "24/7", unit: "", label: "Always-On Call Handling" },
    { value: "<5s", unit: "", label: "Average Response Time" },
    { value: "100%", unit: "", label: "Calls Answered" },
    { value: "3x", unit: "", label: "More Booked Appointments" },
  ],
  tags: ["AI Call Handling", "Lead Qualification", "Appointment Booking", "Pipeline Nurturing"],
  company: {
    industry: "MEGA AI — Conversion Agent",
    employees: "",
    revenue: "",
    location: "",
    description: "The Conversion Agent is MEGA's AI-powered lead conversion system built for service businesses, healthcare practices, professional firms, and any company where every missed call is a missed opportunity. It replaces the chaos of voicemails, missed after-hours calls, and manual lead follow-up with an intelligent system that handles your entire lead-to-booking pipeline automatically.",
  },
  challenges: [
    {
      title: "You're Losing Leads Before Your Team Even Sees Them",
      description: "78% of customers buy from the company that responds first. When a prospect calls after hours, gets sent to voicemail during a busy lunch rush, or fills out a form that sits in an inbox for 3 hours — that lead is gone. They've already called your competitor. Your ad spend generated the click, but your intake process lost the customer.",
    },
    {
      title: "Your Team Is Drowning in Unqualified Leads",
      description: "Your front desk or sales team spends hours fielding calls from tire-kickers, price shoppers, people outside your service area, and prospects who aren't ready to buy. Every minute spent on a bad-fit lead is a minute not spent on someone ready to book. Without automated qualification, your highest-paid people are doing the lowest-value work.",
    },
    {
      title: "Leads Fall Through the Cracks Every Single Day",
      description: "A prospect calls, seems interested, says they'll think about it — and then nobody follows up. No text. No email. No second call. Your CRM shows hundreds of 'contacted' leads that were never actually nurtured. The follow-up gap between first contact and booked appointment is where most of your marketing ROI disappears.",
    },
    {
      title: "You Have No Idea What's Actually Working",
      description: "Which campaigns are generating real appointments? Which lead sources produce clients that actually show up? Without closed-loop attribution from ad click to booked appointment to completed service, you're making budget decisions blind. You know you're spending money on marketing — you just can't prove what it's returning.",
    },
  ],
  strategy: [
    {
      phase: 1,
      months: "Always On",
      title: "Instant Call Handling & Response",
      items: [
        "Every inbound call answered instantly — 24 hours a day, 7 days a week, 365 days a year. No voicemail, no hold music, no missed opportunities",
        "After-hours and overflow calls captured automatically — the AI handles evenings, weekends, holidays, and lunch rush overflow when your team can't pick up",
        "AI-powered call routing based on caller intent — emergency requests escalated immediately, general inquiries handled conversationally, spam filtered out",
        "Automatic call recording and transcription — every conversation logged with a full transcript and AI-generated summary pushed to your pipeline",
        "Web form and chat inquiries responded to in under 5 seconds — while your competitor's contact form sends an auto-reply saying 'we'll get back to you in 24-48 hours'",
      ],
    },
    {
      phase: 2,
      months: "Every Lead",
      title: "AI-Powered Lead Qualification",
      items: [
        "The AI asks the right qualification questions for YOUR business — service needed, location, timeline, budget range, and any custom criteria you define",
        "Lead scoring based on real conversation signals — not just form fields. The AI reads intent, urgency, and fit from how prospects respond",
        "Automatic disqualification of bad-fit leads — people outside your service area, price shoppers below your minimums, and wrong-industry inquiries are filtered before they waste your team's time",
        "Custom qualification criteria tailored to your business model — a plumber's qualifying questions are different from a med spa's, and the AI adapts to each",
        "Qualified leads are tagged, scored, and routed instantly — your team only sees prospects who are actually ready to have a real conversation",
      ],
    },
    {
      phase: 3,
      months: "Automatic",
      title: "Appointment Booking & Calendar Sync",
      items: [
        "Qualified prospects are booked directly into your calendar in real time — no back-and-forth emails, no phone tag, no 'let me check our availability'",
        "Syncs with your existing scheduling system and availability rules — the AI knows when you're free and books accordingly",
        "Automated confirmation sequences — text and email confirmations sent immediately after booking with all relevant details",
        "Reminder sequences reduce no-shows — automated reminders at 24 hours, 2 hours, and 30 minutes before the appointment",
        "Reschedule and cancellation handling — if a client needs to move their appointment, the AI handles it without involving your staff",
      ],
    },
    {
      phase: 4,
      months: "Ongoing",
      title: "Multi-Channel Pipeline Nurturing",
      items: [
        "Not every qualified lead books immediately — the AI follows up via call, text, and email over days and weeks to keep your business top of mind",
        "Intelligent follow-up timing based on engagement signals — the AI knows when to reach out again and when to back off",
        "Cold lead reactivation campaigns — prospects who went dark 30, 60, or 90 days ago are automatically re-engaged with fresh messaging",
        "Every interaction logged and synced to your CRM — HubSpot, Salesforce, HighLevel, ServiceTitan, or MEGA's built-in CRM at no extra cost",
        "The system gets smarter over time — AI analyzes which scripts, timing, and channels produce the most bookings and continuously optimizes",
      ],
    },
  ],
  impact: [
    { label: "Response Time", value: "<5 seconds", growth: "vs. industry avg of 47 hours" },
    { label: "Calls Answered", value: "100%", growth: "24/7/365 — zero missed leads" },
    { label: "Qualification Accuracy", value: "90%+", growth: "only real prospects reach your team" },
    { label: "Follow-Up Rate", value: "100%", growth: "every lead nurtured automatically" },
    { label: "No-Show Reduction", value: "40-60%", growth: "automated reminder sequences" },
    { label: "Works With Your CRM", value: "Any", growth: "HubSpot, Salesforce, GHL, or MEGA's built-in" },
  ],
};
