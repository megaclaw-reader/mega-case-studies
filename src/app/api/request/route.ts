import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["requesterName", "industry", "scope", "monthlySpend", "clientDuration", "services"];
    for (const field of required) {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
        return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
      }
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: new Date().toISOString(),
      ...body,
    };

    // Notify via webhook if configured
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `📋 New case study request from ${entry.requesterName}\n• Industry: ${entry.industry}\n• Scope: ${entry.scope}\n• Spend: ${entry.monthlySpend}\n• Duration: ${entry.clientDuration} months\n• Services: ${(entry.services as string[]).join(", ")}\n• Region: ${entry.region || "Not specified"}\n• Notes: ${entry.highlights || "None"}`,
          }),
        });
      } catch {
        // notification failure shouldn't block the request
      }
    }

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
