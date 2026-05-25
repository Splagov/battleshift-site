import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account | BattleShift",
  description:
    "How to request BattleShift account deletion and what data is removed.",
};

export default function DeleteAccountPage() {
  return (
    <main className="battle-grid min-h-screen text-white">
      <div className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-[#09131f]/88 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-12">
          <p className="text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
            BattleShift
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-[0.08em] uppercase md:text-5xl">
            Account Deletion
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-white/74">
            <p>
              To request deletion of your BattleShift account, email
              {" "}
              <a className="text-[var(--accent)]" href="mailto:game@getbattleshift.com">
                game@getbattleshift.com
              </a>
              {" "}
              from the email address tied to the account.
            </p>
            <p>
              We will use that request to verify ownership and process removal of
              account access, profile data, and associated social records where
              feasible.
            </p>
            <p>
              Some operational records may be retained for security, fraud
              prevention, support, or legal compliance.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/8 bg-[#061019]/92">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8 text-sm text-white/66 lg:px-10">
          <div className="flex flex-wrap gap-5 font-semibold tracking-[0.12em] uppercase">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/delete-account">Delete Account</Link>
            <a href="mailto:game@getbattleshift.com">Support</a>
          </div>
          <p>© 2026 BattleShift. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
