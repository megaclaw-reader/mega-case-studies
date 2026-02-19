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
      status: "pending",
      ...body,
    };

    const existing = await getExistingRequests();
    existing.push(entry);
    await saveRequests(existing);

    return NextResponse.json({ success: true, id: entry.id });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
