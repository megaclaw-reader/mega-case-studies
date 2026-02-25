import { NextRequest, NextResponse } from "next/server";

const SLACK_TOKEN = process.env.SLACK_BOT_TOKEN || "";
const SLACK_CHANNEL = process.env.SLACK_FEEDBACK_CHANNEL || "";

export async function POST(req: NextRequest) {
  try {
    const { slug, feedback, reviewer } = await req.json();

    if (!slug || !feedback || !reviewer) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const text = `📝 Case Study Feedback\n*Study:* ${slug}\n*From:* ${reviewer}\n*Feedback:* ${feedback}`;

    const slackRes = await fetch("https://slack.com/api/chat.postMessage", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SLACK_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel: SLACK_CHANNEL, text }),
    });

    const slackData = await slackRes.json();
    if (!slackData.ok) {
      return NextResponse.json({ error: "Slack delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
