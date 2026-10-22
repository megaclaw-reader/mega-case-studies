"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSession,
  matchesPassword,
  SESSION_COOKIE,
  SESSION_SECONDS,
  validConfig,
} from "@/lib/training/session";
// Small, per-process throttle. Production Admin integration should use its
// existing identity provider and shared rate limiting rather than this gate.
let failures = { count: 0, until: 0 };
export async function unlockTraining(
  form: FormData,
): Promise<{ error?: string; ok?: true }> {
  const password = process.env.TRAINING_ACCESS_PASSWORD;
  const secret = process.env.TRAINING_SESSION_SECRET;
  if (!validConfig(password, secret))
    return { error: "Training access has not been configured." };
  const now = Date.now();
  if (failures.until <= now) failures = { count: 0, until: now + 60000 };
  if (failures.count >= 20)
    return { error: "Too many attempts. Please wait a minute and try again." };
  const candidate = form.get("password");
  if (
    typeof candidate !== "string" ||
    candidate.length > 256 ||
    !matchesPassword(candidate, password!)
  ) {
    failures.count++;
    return { error: "That passphrase did not match. Please try again." };
  }
  const jar = await cookies();
  jar.set(SESSION_COOKIE, createSession(secret!), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/training",
    maxAge: SESSION_SECONDS,
  });
  return { ok: true };
}
export async function lockTraining() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/training",
    maxAge: 0,
  });
  redirect("/training");
}
