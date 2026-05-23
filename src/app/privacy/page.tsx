import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BattleShift",
  description:
    "Privacy Policy for BattleShift covering account data, chat messages, matchmaking, and notifications.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "BattleShift may collect account information such as your email address, nickname, and profile details when you create or manage an account.",
      "If you use social features, BattleShift may store friend relationships, direct messages, match history, and gameplay results tied to your account.",
      "If you allow notifications, BattleShift and its notification providers may process device and push identifiers needed to deliver alerts.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use account information to authenticate players, secure accounts, restore sessions, and enable online gameplay.",
      "We use gameplay and social data to run matchmaking rooms, direct chat, player profiles, match statistics, and push notifications.",
      "We do not use your personal data for third-party advertising inside BattleShift.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "BattleShift uses infrastructure and service providers that process data on our behalf, such as hosting, email delivery, and push notification services.",
      "We do not sell personal information to data brokers.",
    ],
  },
  {
    title: "Retention",
    body: [
      "We retain account and gameplay data for as long as reasonably necessary to operate the service, maintain match history, handle support requests, and meet legal obligations.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You can request account deletion or other privacy support by contacting game@getbattleshift.com.",
      "You can disable push notifications from your device settings at any time.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions or requests, contact game@getbattleshift.com.",
      "Effective date: May 23, 2026.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="battle-grid min-h-screen px-6 py-16 text-white lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-white/10 bg-[#09131f]/88 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-12">
          <p className="text-xs font-bold tracking-[0.28em] text-[var(--accent)] uppercase">
            BattleShift
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-[0.08em] uppercase md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
            This policy explains what data BattleShift collects, how it is used,
            and how players can request support or deletion.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl tracking-[0.08em] uppercase text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-white/74">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
