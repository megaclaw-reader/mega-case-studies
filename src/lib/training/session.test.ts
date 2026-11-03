import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createSession,
  verifySession,
  SESSION_SECONDS,
  matchesPassword,
  validConfig,
} from "./session.ts";
const secret = "test-only-session-secret-at-least-32-characters";
const now = 1792627200000;
test("session expires after eight hours and rejects tampering, another key and future issuance", () => {
  const token = createSession(secret, now);
  assert.ok(verifySession(token, secret, now));
  assert.ok(verifySession(token, secret, now + 1000));
  assert.ok(!verifySession(token, secret, now + SESSION_SECONDS * 1000));
  assert.ok(!verifySession(token, secret, now - 1000));
  assert.ok(!verifySession(token, secret + "wrong", now));
  assert.ok(
    !verifySession(
      token.slice(0, -1) + (token.endsWith("a") ? "b" : "a"),
      secret,
      now,
    ),
  );
  for (const invalid of [undefined, "", "x".repeat(160), "1.2.abc"])
    assert.ok(!verifySession(invalid, secret, now));
});
test("production configuration fails closed and passphrases compare exactly", () => {
  assert.ok(validConfig("a-long-team-passphrase-for-testing", secret));
  assert.ok(!validConfig(undefined, secret));
  assert.ok(!validConfig("short", secret));
  assert.ok(!validConfig("a-long-team-passphrase-for-testing", "short"));
  assert.ok(matchesPassword("correct phrase", "correct phrase"));
  assert.ok(!matchesPassword("incorrect phrase", "correct phrase"));
});
