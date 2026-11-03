"use client";
import { useState } from "react";
import { unlockTraining } from "@/app/training/actions";
import MegaLogo from "./MegaLogo";
export default function TrainingLogin() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    try {
      const result = await unlockTraining(new FormData(event.currentTarget));
      if (result.ok) window.location.reload();
      else setError(result.error || "Unable to sign in.");
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setPending(false);
    }
  }
  return (
    <main className="ts-shell ts-access">
      <MegaLogo />
      <span className="ts-eyebrow">MEGA REP ENABLEMENT</span>
      <h1>A good story starts here.</h1>
      <p>
        Enter your team’s passphrase to open the training library or this story
        link.
      </p>
      <form onSubmit={submit}>
        <label className="ts-field">
          <span>Team passphrase</span>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={256}
          />
        </label>
        <button className="ts-primary" disabled={pending}>
          {pending ? "Opening…" : "Open training →"}
        </button>
        <p role="alert">{error}</p>
      </form>
    </main>
  );
}
