export default function Home() {
  const heroClasses = [
    {
      name: "Void Casters",
      description:
        "Long-range controllers who break positioning with burst spells, snares, and lane pressure.",
    },
    {
      name: "Iron Duelists",
      description:
        "Close-range bruisers built for engages, fountain dives, and punishing overextended enemies.",
    },
    {
      name: "Arc Rangers",
      description:
        "Precision skirmishers that win fights through tempo, range control, and repeatable pressure.",
    },
  ];

  const featureCards = [
    {
      eyebrow: "Live PvP",
      title: "Two players, one battlefield, zero dead time.",
      body: "Create a room, lock a hero, and enter a direct real-time match where both players move, cast, respawn, and fight over structures.",
    },
    {
      eyebrow: "Hero Identity",
      title: "Every hero has a real kit and real tradeoffs.",
      body: "BattleShift heroes are built around defined stats, mana costs, damage ranges, cooldowns, and battlefield roles instead of cosmetic class labels.",
    },
    {
      eyebrow: "Win Condition",
      title: "You do not only kill heroes. You end the map.",
      body: "Each side defends a fountain. Winning means managing pressure, surviving picks, and breaking the enemy base before they break yours.",
    },
  ];

  const gameplaySteps = [
    "Choose a hero with a skillset that fits your pressure style.",
    "Move across lanes, manage spacing, and punish the enemy with cooldown timing.",
    "Destroy the opposing fountain before your side loses map control.",
  ];

  return (
    <main className="relative overflow-hidden">
      <section className="battle-grid relative isolate overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(97,215,255,0.20),transparent_20%),radial-gradient(circle_at_82%_14%,rgba(255,177,94,0.14),transparent_22%),radial-gradient(circle_at_50%_68%,rgba(137,255,186,0.10),transparent_30%)]" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <header className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="font-display text-2xl tracking-[0.35em] text-white uppercase">
                BattleShift
              </p>
              <p className="mt-2 text-sm tracking-[0.28em] text-(--muted) uppercase">
                Real-time hero arena
              </p>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-semibold tracking-[0.22em] text-white/78 uppercase md:flex">
              <a href="#about">About</a>
              <a href="#gameplay">Gameplay</a>
              <a href="#heroes">Heroes</a>
            </nav>
          </header>

          <div className="relative z-10 grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-(--line) bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/84 uppercase backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-(--accent)" />
                Mobile Arena Prototype
              </div>
              <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-[0.08em] text-white uppercase sm:text-6xl lg:text-7xl">
                Shift the fight. Break the fountain. Own the map.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-(--muted) sm:text-2xl">
                BattleShift is a competitive hero battle game built around direct PvP rooms,
                distinct hero kits, live movement, timed respawns, and structure pressure that
                decides who actually wins the arena.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#gameplay"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-(--accent) px-8 font-bold tracking-[0.18em] text-slate-950 uppercase transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Gameplay
                </a>
                <a
                  href="#heroes"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/14 bg-white/5 px-8 font-bold tracking-[0.18em] text-white uppercase backdrop-blur transition-colors duration-200 hover:bg-white/10"
                >
                  View Hero Roles
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/12 bg-(--panel) p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(160deg,rgba(10,25,39,0.92),rgba(4,10,16,0.96))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-[0.28em] text-(--accent-cool) uppercase">
                        Match Flow
                      </p>
                      <p className="mt-2 font-display text-3xl tracking-[0.12em] text-white uppercase">
                        Hero vs Hero
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">
                      Live Arena
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[#07111d] p-6">
                    <div className="flex items-center justify-between text-xs font-bold tracking-[0.24em] text-white/56 uppercase">
                      <span>Enemy Fountain</span>
                      <span>Respawn 10s</span>
                    </div>
                    <div className="mt-4 h-52 rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,#223718_0%,#314a20_24%,#6b5538_50%,#354d21_76%,#203417_100%)] p-5">
                      <div className="flex h-full flex-col justify-between">
                        <div className="mx-auto h-14 w-24 rounded-[999px] border border-cyan-300/20 bg-cyan-300/15 shadow-[0_0_30px_rgba(97,215,255,0.25)]" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-20 rounded-[1.2rem] bg-black/20" />
                          <div className="h-20 rounded-[1.2rem] bg-black/20" />
                        </div>
                        <div className="mx-auto h-16 w-28 rounded-[999px] border border-emerald-300/25 bg-emerald-300/18 shadow-[0_0_30px_rgba(137,255,186,0.22)]" />
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                          Goal
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">Break fountain</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                          Control
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">Move + cast</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                          Pressure
                        </p>
                        <p className="mt-2 text-base font-semibold text-white">Kill and siege</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur"
            >
              <p className="text-xs font-bold tracking-[0.26em] text-(--accent-warm) uppercase">
                {card.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl leading-tight tracking-[0.06em] text-white uppercase">
                {card.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-(--muted)">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="gameplay"
        className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-(--accent-cool) uppercase">
              How It Plays
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
              Short matches, readable systems, real pressure.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              BattleShift is built to stay legible. Player movement, cooldown timing, mana usage,
              death windows, respawns, and base damage should all be easy to read while still
              leaving room for hero mastery and balance tuning.
            </p>
          </div>

          <div className="space-y-5">
            {gameplaySteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[1.8rem] border border-white/10 bg-[#0a1623]/85 p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 font-display text-xl tracking-[0.18em] text-(--accent) uppercase">
                  0{index + 1}
                </div>
                <p className="pt-1 text-xl leading-8 text-white/88">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="heroes" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-(--accent) uppercase">
              Hero System
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
              Built around hero kits, not generic classes.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-(--muted)">
            The roster is designed for tuning. Every hero can expose stats, mana, damage,
            cooldowns, ranges, and battlefield roles that can be balanced as the meta evolves.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {heroClasses.map((heroClass, index) => (
            <article
              key={heroClass.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(5,11,18,0.88))] p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--accent-cool),var(--accent),var(--accent-warm))]" />
              <p className="text-sm font-bold tracking-[0.24em] text-white/50 uppercase">
                Track 0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-[0.08em] text-white uppercase">
                {heroClass.name}
              </h3>
              <p className="mt-5 text-lg leading-8 text-(--muted)">{heroClass.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(16,34,52,0.95),rgba(7,13,20,0.98))] px-8 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.32)] sm:px-12 sm:py-14">
          <p className="text-xs font-bold tracking-[0.26em] text-(--accent-warm) uppercase">
            Current Direction
          </p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
                BattleShift is being shaped as a focused competitive game, not a bloated platform.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-(--muted)">
                The current roadmap centers on hero balance, room-based multiplayer, responsive
                controls, structure combat, and a fast loop that is clean enough to iterate
                aggressively.
              </p>
            </div>
            <a
              href="mailto:hello@getbattleshift.com"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/12 bg-white/6 px-8 font-bold tracking-[0.18em] text-white uppercase backdrop-blur transition-colors duration-200 hover:bg-white/10"
            >
              Contact Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
