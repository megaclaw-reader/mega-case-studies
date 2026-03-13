"use client";

import { useState } from "react";
import { CaseStudyData } from "@/data/types";
import CaseStudyPage from "@/components/CaseStudy/CaseStudyPage";

export default function ReviewPageClient({ data, slug }: { data: CaseStudyData; slug: string }) {
  const [feedback, setFeedback] = useState("");
  const [reviewer, setReviewer] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim() || !reviewer.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://mega-case-studies.vercel.app/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, feedback, reviewer }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setFeedback("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      {/* Review banner */}
      <div style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "linear-gradient(135deg, #1e293b, #334155)",
        color: "#94a3b8",
        textAlign: "center",
        padding: "10px 16px",
        fontSize: "13px",
        fontFamily: "system-ui, sans-serif",
        letterSpacing: "0.02em",
        borderBottom: "1px solid rgba(148, 163, 184, 0.2)",
      }}>
        <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Internal Review</span>
        {" — "}feedback submitted here will be actioned automatically
      </div>

      {/* Reuse the full case study page */}
      <CaseStudyPage data={data} />

      {/* Feedback panel */}
      <div style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 24px 80px",
        fontFamily: "system-ui, sans-serif",
      }}>
        <div style={{
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: 12,
          padding: "32px",
        }}>
          <h2 style={{ color: "#e2e8f0", fontSize: 20, fontWeight: 600, margin: "0 0 4px" }}>
            📝 Internal Review Feedback
          </h2>
          <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 24px" }}>
            Your feedback will be sent directly to the team for action.
          </p>

          {status === "success" ? (
            <div style={{
              background: "#065f46",
              border: "1px solid #059669",
              borderRadius: 8,
              padding: "16px 20px",
              color: "#d1fae5",
              fontSize: 14,
            }}>
              ✅ Feedback submitted — thank you!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: 13, marginBottom: 6 }}>
                Your name
              </label>
              <input
                type="text"
                value={reviewer}
                onChange={(e) => setReviewer(e.target.value)}
                placeholder="e.g. John Smith"
                required
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  color: "#e2e8f0",
                  fontSize: 14,
                  marginBottom: 16,
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />

              <label style={{ display: "block", color: "#94a3b8", fontSize: 13, marginBottom: 6 }}>
                What needs to change?
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Describe what should be updated, corrected, or improved..."
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  color: "#e2e8f0",
                  fontSize: 14,
                  marginBottom: 16,
                  boxSizing: "border-box",
                  outline: "none",
                  resize: "vertical",
                }}
              />

              {status === "error" && (
                <div style={{
                  background: "#7f1d1d",
                  border: "1px solid #dc2626",
                  borderRadius: 8,
                  padding: "10px 14px",
                  color: "#fecaca",
                  fontSize: 13,
                  marginBottom: 16,
                }}>
                  {errorMsg || "Failed to submit. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  background: status === "sending" ? "#334155" : "#3b82f6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "10px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
