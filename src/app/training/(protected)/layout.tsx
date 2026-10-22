import type { ReactNode } from "react";
import { cookies } from "next/headers";
import {
  validConfig,
  verifySession,
  SESSION_COOKIE,
} from "@/lib/training/session";
import TrainingLogin from "@/components/TrainingStudio/TrainingLogin";
import MegaLogo from "@/components/TrainingStudio/MegaLogo";
import { lockTraining } from "../actions";
import "@/components/TrainingStudio/training.css";
export const dynamic = "force-dynamic";
export default async function TrainingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const password = process.env.TRAINING_ACCESS_PASSWORD;
  const secret = process.env.TRAINING_SESSION_SECRET;
  if (!validConfig(password, secret)) {
    if (process.env.NODE_ENV === "development")
      return (
        <>
          <div className="ts-access-bar">
            Local preview · Hosted training links require a team passphrase.
          </div>
          {children}
        </>
      );
    return (
      <main className="ts-shell ts-access">
        <MegaLogo />
        <h1>The training library is not open yet.</h1>
        <p>
          Your administrator needs to configure training access before these
          links can be used.
        </p>
      </main>
    );
  }
  if (!verifySession((await cookies()).get(SESSION_COOKIE)?.value, secret!))
    return <TrainingLogin />;
  return (
    <>
      <div className="ts-access-bar">
        <span>MEGA training area</span>
        <form action={lockTraining}>
          <button>Sign out</button>
        </form>
      </div>
      {children}
    </>
  );
}
