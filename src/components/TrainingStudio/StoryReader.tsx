"use client";

/* Full navigations re-check the private server gate; story fragments stay out of router state. */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useSyncExternalStore } from "react";
import { decodeStory, type TrainingStory } from "@/lib/training/stories";
import StoryReport from "./StoryReport";
import { ReaderToolbar } from "./TrainingStudio";
import "./training.css";
const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};
export default function StoryReader() {
  const fragment = useSyncExternalStore(
    subscribe,
    () => window.location.hash,
    () => null,
  );
  if (fragment === null)
    return <main className="ts-shell ts-reader-message">Opening story…</main>;
  let story: TrainingStory | undefined;
  let message = "Please copy the full link from the library.";
  try {
    story = decodeStory(fragment.slice(1));
  } catch (error) {
    message = error instanceof Error ? error.message : message;
  }
  if (!story)
    return (
      <main className="ts-shell ts-reader-message">
        <h1>This story link is incomplete.</h1>
        <p>{message}</p>
        <a className="ts-primary" href="/training">
          Open the generator →
        </a>
      </main>
    );
  return (
    <main className="ts-shell">
      <ReaderToolbar story={story} />
      <StoryReport story={story} />
    </main>
  );
}
