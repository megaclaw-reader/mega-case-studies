import { NextRequest, NextResponse } from "next/server";

// In-memory store for pending requests (persists across warm invocations)
// Also writes to a public endpoint for polling
const REQUESTS_KEY = "case-study-requests";

async function notifySlack(entry: Record<string, unknown>) {
  const token = (process.env.SLACK_BOT_TOKEN || "").trim();
  const channel = (process.env.SLACK_CHANNEL || "").trim();
  if (!token || !channel) {
    console.error("Missing SLACK_BOT_TOKEN or SLACK_CHANNEL");
    return;
  }

  const services = Array.isArray(entry.services) ? (entry.services as string[]).join(", ") : entry.services;
  const text = [
    `📋 *New case study request submitted*`,
    `• *ID:* ${entry.id}`,
    `• *From:* ${entry.requesterName}`,
    `• *Email:* ${entry.email || "Not provided"}`,
    `• *Industry:* ${entry.industry}`,
    `• *Scope:* ${entry.scope}`,
    `• *Monthly Ad Spend:* ${entry.monthlySpend}`,
    `• *Duration:* ${entry.clientDuration} months`,
    `• *Services:* ${services}`,
    `• *Region:* ${entry.region || "Not specified"}`,
    `• *Notes:* ${entry.highlights || "None"}`,
    ``,
    `_Submitted at ${entry.timestamp}_`,
  ].join("\n");

  try {
    const res = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel, text }),
    });
    const data = await res.json();
    if (!data.ok) {
      console.error("Slack API error:", data.error);
    }
  } catch (err) {
    console.error("Slack notification failed:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["requesterName", "email", "industry", "scope", "monthlySpend", "clientDuration", "services"];
    for (const field of required) {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const entry: Record<string, unknown> = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: new Date().toISOString(),
      status: "pending",
      ...body,
    };

    // Notify Slack instantly
    await notifySlack(entry);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// GET endpoint — returns pending requests for polling
export async function GET() {
  return NextResponse.json({ message: "Form API active. POST to submit a case study request." });
}
