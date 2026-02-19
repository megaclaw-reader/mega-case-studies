import { NextRequest, NextResponse } from "next/server";

const BLOB_ID = "019c774c-e330-7907-82c3-c5067e627822";
const BLOB_URL = `https://jsonblob.com/api/jsonBlob/${BLOB_ID}`;

async function getExistingRequests(): Promise<Record<string, unknown>[]> {
  try {
    const res = await fetch(BLOB_URL, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function saveRequests(requests: Record<string, unknown>[]): Promise<boolean> {
  try {
    const res = await fetch(BLOB_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requests),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function notifySlack(entry: Record<string, unknown>) {
  const token = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHANNEL;
  if (!token || !channel) return;

  const services = Array.isArray(entry.services) ? (entry.services as string[]).join(", ") : entry.services;
  const text = `📋 *New case study request submitted*\n• *From:* ${entry.requesterName}\n• *Industry:* ${entry.industry}\n• *Scope:* ${entry.scope}\n• *Monthly Ad Spend:* ${entry.monthlySpend}\n• *Duration:* ${entry.clientDuration} months\n• *Services:* ${services}\n• *Region:* ${entry.region || "Not specified"}\n• *Notes:* ${entry.highlights || "None"}\n\nPlease start building this case study now.`;

  try {
    await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel, text }),
    });
  } catch {
    // notification failure shouldn't block the request
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["requesterName", "industry", "scope", "monthlySpend", "clientDuration", "services"];
    for (const field of required) {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    const entry: Record<string, unknown> = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: new Date().toISOString(),
      status: "pending",
      ...body,
    };

    // Store to JSONBlob
    const existing = await getExistingRequests();
    existing.push(entry);
    await saveRequests(existing);

    // Instantly notify via Slack DM
    await notifySlack(entry);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
