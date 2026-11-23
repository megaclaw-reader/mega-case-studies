"use client";

/* Full navigations re-check the private server gate; story fragments stay out of router state. */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useRef, useState } from "react";
import {
  encodeStory,
  decodeStory,
  makeStory,
  FOCUSES,
  PROFILES,
  type ProfileKey,
  type FocusKey,
  type TrainingStory,
} from "@/lib/training/stories";
import { validateInput } from "@/lib/scenarios/model";
import MegaLogo from "./MegaLogo";
import StoryReport from "./StoryReport";
import "./training.css";

const LIBRARY_KEY = "mega-training-library-v1";
type Entry = { encoded: string; created: string };
function storyUrl(encoded: string) {
  return `${window.location.origin}/training/story#${encoded}`;
}
export function ReaderToolbar({
  story,
  onBack,
}: {
  story: TrainingStory;
  onBack?: () => void;
}) {
  const [status, setStatus] = useState("");
  const [manualLink, setManualLink] = useState("");
  async function copy() {
    const url = storyUrl(encodeStory(story));
    try {
      await navigator.clipboard.writeText(url);
      setStatus(
        ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname)
          ? "Local preview link copied. This address works only on this computer."
          : "Link copied. Recipients need access to the training area.",
      );
    } catch {
      setManualLink(url);
      setStatus("Select and copy the link below.");
    }
  }
  function print() {
    const details = Array.from(
      document.querySelectorAll<HTMLDetailsElement>("#training-report details"),
    );
    const open = details.map((d) => d.open);
    details.forEach((d) => (d.open = true));
    window.addEventListener(
      "afterprint",
      () => details.forEach((d, i) => (d.open = open[i])),
      { once: true },
    );
    window.print();
  }
  return (
    <div className="ts-reader-tools">
      <div>
        {onBack ? (
          <button onClick={onBack}>← Back to generator</button>
        ) : (
          <a href="/training">← Training library</a>
        )}
        <span>{story.input.industry} / 12-month story</span>
        <div>
          <button onClick={copy}>Copy story link ↗</button>
          <button className="ts-primary" onClick={print}>
            Print / PDF
          </button>
        </div>
      </div>
      <p role="status">{status}</p>
      {manualLink && (
        <input
          aria-label="Story link"
          value={manualLink}
          readOnly
          onFocus={(e) => e.target.select()}
        />
      )}
    </div>
  );
}
export default function TrainingStudio() {
  const [profile, setProfile] = useState<ProfileKey>("hvac");
  const [industry, setIndustry] = useState<string>(PROFILES.hvac.name);
  const [region, setRegion] = useState<string>(PROFILES.hvac.region);
  const [challenge, setChallenge] = useState("");
  const [audience, setAudience] = useState("");
  const [focus, setFocus] = useState<FocusKey>("quality");
  const [draft, setDraft] = useState(makeStory("hvac").input);
  const [active, setActive] = useState<TrainingStory | null>(null);
  const [saved, setSaved] = useState<Entry[]>([]);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const reportTop = useRef<HTMLDivElement>(null);
  useEffect(() => {
    try {
      const raw: unknown = JSON.parse(
        localStorage.getItem(LIBRARY_KEY) || "[]",
      );
      if (!Array.isArray(raw)) throw new Error();
      const entries = raw.slice(0, 50).filter((entry): entry is Entry => {
        try {
          return (
            typeof entry.created === "string" && !!decodeStory(entry.encoded)
          );
        } catch {
          return false;
        }
      });
      // This browser-local library is loaded only after hydration.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSaved(entries);
    } catch {
      setStatus(
        "Saved stories could not be loaded in this browser. You can still create and copy a story link.",
      );
    }
  }, []);
  function choose(value: ProfileKey) {
    const story = makeStory(value);
    setChallenge("");
    setAudience("");
    setProfile(value);
    setIndustry(value === "general" ? "" : story.input.industry);
    setRegion(story.input.region);
    setDraft(story.input);
    setErrors([]);
  }
  function generate(e: React.FormEvent) {
    e.preventDefault();
    const input = {
      ...draft,
      industry: industry.trim(),
      region: region.trim(),
    };
    const issues = validateInput(input);
    setErrors(issues);
    if (issues.length) return;
    const story: TrainingStory = {
      version: 1,
      profile,
      focus,
      input,
      ...(challenge.trim() ? { challenge: challenge.trim() } : {}),
      ...(audience.trim() ? { audience: audience.trim() } : {}),
    };
    const encoded = encodeStory(story);
    const next = [
      { encoded, created: new Date().toISOString() },
      ...saved.filter((s) => s.encoded !== encoded),
    ].slice(0, 50);
    setSaved(next);
    try {
      localStorage.setItem(LIBRARY_KEY, JSON.stringify(next));
      setStatus(
        "Saved in this browser. Copy the story link to keep this example.",
      );
    } catch {
      setStatus(
        "Browser storage is unavailable. Keep the story link to reopen this example.",
      );
    }
    setActive(story);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function field(
    label: string,
    key: keyof typeof draft,
    min = 0,
    max = 10000000,
    step: string | number = "0.01",
  ) {
    const value = draft[key];
    return (
      <label className="ts-field" key={key}>
        <span>{label}</span>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          required
          value={
            typeof value === "number" && Number.isFinite(value) ? value : ""
          }
          onChange={(e) =>
            setDraft((d) => ({
              ...d,
              [key]: e.target.value === "" ? NaN : Number(e.target.value),
            }))
          }
        />
      </label>
    );
  }
  if (active)
    return (
      <main className="ts-shell" ref={reportTop}>
        <ReaderToolbar story={active} onBack={() => setActive(null)} />
        <p className="ts-save-status" role="status">
          {status}
        </p>
        <StoryReport story={active} />
      </main>
    );
  const profileInfo = PROFILES[profile];
  return (
    <main className="ts-shell ts-builder">
      <header className="ts-builder-header">
        <a href="/training" aria-label="MEGA training library">
          <MegaLogo />
        </a>
        <span>
          REP ENABLEMENT <span>/</span> STORY STUDIO
        </span>
        <a href="#saved-stories">
          My library <b>{saved.length}</b>
        </a>
      </header>
      <section className="ts-builder-intro">
        <span className="ts-eyebrow">A BETTER WAY TO LEARN THE STORY</span>
        <h1>
          Make the value
          <br />
          <em>easy to explain.</em>
        </h1>
        <p>
          Choose an industry. Build a connected growth story.
          <br />
          Practice the conversation behind the results.
        </p>
      </section>
      <div className="ts-builder-grid">
        <form onSubmit={generate} className="ts-builder-form">
          <div className="ts-form-heading">
            <span>01</span>
            <div>
              <h2>Set the scene.</h2>
              <p>Every good case study starts with the business.</p>
            </div>
          </div>
          <div className="ts-field-grid">
            <label className="ts-field">
              <span>Industry profile</span>
              <select
                value={profile}
                onChange={(e) => choose(e.target.value as ProfileKey)}
              >
                {Object.entries(PROFILES).map(([key, p]) => (
                  <option value={key} key={key}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="ts-field">
              <span>Industry name</span>
              <input
                required
                maxLength={100}
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Commercial landscaping"
              />
            </label>
            <label className="ts-field">
              <span>Location</span>
              <input
                required
                maxLength={100}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </label>
            <label className="ts-field">
              <span>Story focus</span>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value as FocusKey)}
              >
                {Object.entries(FOCUSES).map(([key, f]) => (
                  <option value={key} key={key}>
                    {f.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {profile === "general" && (
            <p className="ts-field-hint">
              Enter any industry. This profile uses a service-business funnel
              and general tactics; adapt the assumptions to the business you
              want to practice.
            </p>
          )}
          <details className="ts-form-details ts-story-context">
            <summary>
              Add business context <span>+</span>
            </summary>
            <div className="ts-context-fields">
              <label className="ts-field">
                <span>Business challenge (optional)</span>
                <textarea
                  maxLength={800}
                  rows={3}
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                  placeholder={profileInfo.problem}
                />
              </label>
              <label className="ts-field">
                <span>Ideal customer (optional)</span>
                <textarea
                  maxLength={300}
                  rows={2}
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder={profileInfo.audience}
                />
              </label>
            </div>
          </details>
          <div className="ts-form-heading ts-form-heading-second">
            <span>02</span>
            <div>
              <h2>Give the story a foundation.</h2>
              <p>Starting assumptions for a 12-month example.</p>
            </div>
          </div>
          <div className="ts-field-grid">
            {field("Monthly ad spend", "monthlyAdSpend", 0.01)}
            {field(profileInfo.sale, "averageSale")}
          </div>
          <div className="ts-included">
            <span>INCLUDED IN EVERY STORY</span>
            <p>
              <b>↗ SEO</b>
              <b>◎ Paid ads</b>
              <b>▤ Website</b>
              <b>↳ Conversion</b>
            </p>
          </div>
          <details className="ts-form-details">
            <summary>
              Adjust the underlying assumptions <span>+</span>
            </summary>
            <p>
              These teaching defaults are not industry benchmarks. All displayed
              results are recalculated from your inputs.
            </p>
            <div className="ts-field-grid">
              <label className="ts-field">
                <span>Currency</span>
                <select
                  value={draft.currency}
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      currency: e.target.value as typeof d.currency,
                    }))
                  }
                >
                  {["USD", "CAD", "GBP", "EUR"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              {field("Monthly service fee", "monthlyServiceFee")}
              {field("Website setup cost", "websiteInvestment")}
              {field("Starting organic visits", "organicStart", 0, 1000000, 1)}
              {field("Month 12 organic visits", "organicEnd", 0, 1000000, 1)}
              {field(
                "Starting paid cost / visit",
                "visitCostStart",
                0.01,
                10000,
              )}
              {field("Month 12 paid cost / visit", "visitCostEnd", 0.01, 10000)}
              {field(
                "Starting website conversion %",
                "websiteRateStart",
                0,
                100,
              )}
              {field("Month 12 website conversion %", "websiteRateEnd", 0, 100)}
              {field("Agent engagement %", "agentEngagementRate", 0, 100)}
              {field("Agent capture %", "agentCaptureRate", 0, 100)}
              {profile !== "ecommerce" && (
                <>
                  {field(
                    "Starting qualification %",
                    "qualificationRate",
                    0,
                    100,
                  )}
                  {field(
                    "Month 12 qualification %",
                    "qualificationRateEnd",
                    0,
                    100,
                  )}
                  {field("Starting qualified close %", "closeRate", 0, 100)}
                  {field("Month 12 qualified close %", "closeRateEnd", 0, 100)}
                </>
              )}
              <label className="ts-field">
                <span>Gross margin % (optional)</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={draft.grossMargin ?? ""}
                  placeholder="Unknown"
                  onChange={(e) =>
                    setDraft((d) => ({
                      ...d,
                      grossMargin:
                        e.target.value === "" ? null : Number(e.target.value),
                    }))
                  }
                />
              </label>
            </div>
          </details>
          {errors.length > 0 && (
            <div className="ts-error" role="alert">
              {errors.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </div>
          )}
          <button type="submit" className="ts-primary ts-generate">
            Create case study <span>↗</span>
          </button>
          <p className="ts-form-fineprint">
            Creates an illustrative example with its own link. No customer data
            or API key required.
          </p>
        </form>
        <aside className="ts-preview-card">
          <div className="ts-preview-top">
            <span>YOUR NEXT STORY</span>
            <span>12 MONTHS</span>
          </div>
          <div className="ts-preview-body">
            <span className="ts-preview-category">
              {industry || "Your industry"} / {region || "Your location"}
            </span>
            <h2>{FOCUSES[focus].title}</h2>
            <div className="ts-preview-bars" aria-hidden="true">
              {[22, 31, 37, 43, 49, 55, 61, 67, 74, 82, 88, 100].map((v, i) => (
                <div key={i} style={{ height: `${v}%` }} />
              ))}
            </div>
            <span className="ts-preview-caption">
              A story built around the full customer journey.
            </span>
          </div>
          <div className="ts-preview-bottom">
            <MegaLogo />
            <span>Illustrative example</span>
          </div>
          <div className="ts-preview-description">
            <h3>A narrative, not a spreadsheet.</h3>
            <p>
              Business context, specific tactics, a 12-month results table and
              prompts to help reps explain what each agent contributes.
            </p>
            <div>
              <span>01 Challenge</span>
              <span>02 Work</span>
              <span>03 Results</span>
              <span>04 Discussion</span>
            </div>
          </div>
        </aside>
      </div>
      <section className="ts-library" id="saved-stories">
        <div className="ts-heading-row">
          <div>
            <span className="ts-eyebrow">YOUR COLLECTION</span>
            <h2>Ready for the next conversation.</h2>
          </div>
          <p>
            Saved in this browser. Each link carries the story’s assumptions, so
            it can be reopened on another device with access once the app is
            hosted.
          </p>
        </div>
        <p role="status">{status}</p>
        {!saved.length ? (
          <div className="ts-empty-library">
            Your first case study will appear here. Create one above to start
            your library.
          </div>
        ) : (
          <div className="ts-library-grid">
            {saved.map((entry) => {
              const s = decodeStory(entry.encoded);
              return (
                <a
                  className="ts-library-card"
                  key={entry.encoded}
                  href={`/training/story#${entry.encoded}`}
                >
                  <span>
                    {s.input.region} <b>↗</b>
                  </span>
                  <h3>{s.input.industry}</h3>
                  <p>{FOCUSES[s.focus].label}</p>
                  <small>12 months · Illustrative example</small>
                </a>
              );
            })}
          </div>
        )}
      </section>
      <footer className="ts-builder-footer">
        MEGA · Rep enablement{" "}
        <span>
          Illustrative examples for practice. No actual customer outcomes are
          represented.
        </span>
      </footer>
    </main>
  );
}
