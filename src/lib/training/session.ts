import { createHmac, timingSafeEqual, createHash } from "node:crypto";
export const SESSION_COOKIE = "mega_training_session";
export const SESSION_SECONDS = 8 * 60 * 60;
export function validConfig(
  password: string | undefined,
  secret: string | undefined,
) {
  return (
    !!password &&
    password.length >= 24 &&
    password.length <= 256 &&
    !!secret &&
    secret.length >= 32
  );
}
export function matchesPassword(candidate: string, expected: string) {
  const digest = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(digest(candidate), digest(expected));
}
const sign = (payload: string, secret: string) =>
  createHmac("sha256", secret).update(payload).digest("hex");
export function createSession(secret: string, now = Date.now()) {
  const payload = `${Math.floor(now / 1000)}.${Math.floor(now / 1000) + SESSION_SECONDS}`;
  return `${payload}.${sign(payload, secret)}`;
}
export function verifySession(
  token: string | undefined,
  secret: string,
  now = Date.now(),
) {
  if (!token || token.length > 150) return false;
  const match = /^(\d{10})\.(\d{10})\.([a-f0-9]{64})$/.exec(token);
  if (!match) return false;
  const [, issued, expiry, signature] = match;
  const current = Math.floor(now / 1000);
  if (
    +issued > current ||
    +expiry <= current ||
    +expiry - +issued !== SESSION_SECONDS
  )
    return false;
  return timingSafeEqual(
    Buffer.from(signature, "hex"),
    Buffer.from(sign(`${issued}.${expiry}`, secret), "hex"),
  );
}
