import Image from "next/image";

const appStoreUrl = "https://apps.apple.com/app/id6760688990";

const featuredHeroes = [
  {
    name: "Astra Vale",
    title: "Starblade Captain",
    portrait: "/assets/heroes/astra_vale.png",
    accent: "from-sky-400/55 to-cyan-300/15",
    role: "Strength",
    attack: "Melee",
    skill: "Photon Slash",
    copy:
      "Front-line timing duelist built to punish mispositioning and turn short windows into burst damage.",
  },
  {
    name: "Nyx Ember",
    title: "Ash Trickster",
    portrait: "/assets/heroes/nyx_ember.png",
    accent: "from-orange-400/55 to-red-400/15",
    role: "Agility",
    attack: "Melee",
    skill: "Flash Cut",
    copy:
      "Tempo assassin that wins by pressure, angle changes, and repeatable physical burst before the enemy stabilizes.",
  },
  {
    name: "Solenne Mire",
    title: "Tide Oracle",
    portrait: "/assets/heroes/solenne_mire.png",
    accent: "from-cyan-300/55 to-emerald-300/15",
    role: "Intellect",
    attack: "Ranged",
    skill: "Orbit Breaker",
    copy:
      "Long-range controller who bends spacing, resets fights, and punishes teams that drift too deep into lane pressure.",
  },
];

const gameFeatures = [
  {
    eyebrow: "Live PvP",
    title: "One lane, real-time duels, no fake waiting room gameplay.",
    body:
      "Create a room, join a friend, lock a hero, and fight over towers, creeps, fountain pressure, kills, respawns, and map control.",
  },
  {
    eyebrow: "Social Layer",
    title: "Chat, friends, player profiles, and direct rivalry.",
    body:
      "BattleShift already includes friends, direct messages, player search by nickname, push notifications, and public profile history.",
  },
  {
    eyebrow: "Hero Identity",
    title: "Real heroes with stats, skills, ranges, mana, cooldowns, and roles.",
    body:
      "Strength, Agility, and Intellect heroes are built from actual combat values that can be balanced over time instead of generic labels.",
  },
  {
    eyebrow: "Lane Objective",
    title: "You do not win by farming damage numbers. You break the enemy side.",
    body:
      "Tower pressure, creep waves, respawn timing, and fountain vulnerability force decisions that feel closer to a focused lane game than an arena sandbox.",
  },
];

const systems = [
  { label: "Chat", value: "Direct messages, typing state, unread badge" },
  { label: "Friends", value: "Search by nickname, requests, instant invites" },
  { label: "Community", value: "Network feed, updates, lore, player surface" },
  { label: "Hero Kits", value: "Targeted skills, AoE skills, mana and cooldown rules" },
];

const skillHighlights = [
  {
    name: "Photon Slash",
    type: "Targeted Skill",
    detail: "Closes space, commits to a target, and punishes poor lane spacing.",
  },
  {
    name: "Nova Guard",
    type: "Defense Utility",
    detail: "Lets front-liners survive tower pressure and flip a siege window.",
  },
  {
    name: "Orbit Breaker",
    type: "Ranged Burst",
    detail: "Projectile pressure that turns map distance and timing into control.",
  },
  {
    name: "Captain Command",
    type: "Arena Control",
    detail: "Shifts initiative with a high-impact cast instead of passive stats.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(86,214,255,0.22),transparent_16%),radial-gradient(circle_at_80%_18%,rgba(109,255,189,0.14),transparent_18%),radial-gradient(circle_at_50%_58%,rgba(20,66,105,0.28),transparent_30%)]" />

      <section className="battle-grid relative isolate overflow-hidden border-b border-white/8">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <header className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_0_40px_rgba(80,212,255,0.18)]">
                <Image
                  src="/assets/branding/battleshift_logo_mark.png"
                  alt="BattleShift logo"
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-2xl"
                />
              </div>
              <div>
                <p className="font-display text-2xl tracking-[0.28em] text-white uppercase">
                  BattleShift
                </p>
                <p className="mt-2 text-sm tracking-[0.26em] text-(--muted) uppercase">
                  Hero Duel Arena
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold tracking-[0.2em] text-white/78 uppercase">
              <a href="#heroes">Heroes</a>
              <a href="#skills">Skills</a>
              <a href="#map">Map</a>
              <a href="#community">Community</a>
              <a
                href={appStoreUrl}
                className="inline-flex h-11 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 px-6 text-white transition-colors duration-200 hover:bg-white/10"
              >
                App Store
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-14 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-(--line) bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/84 uppercase backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-(--accent)" />
                Available on App Store
              </div>
              <h1 className="max-w-5xl font-display text-5xl leading-[0.92] tracking-[0.06em] text-white uppercase sm:text-6xl lg:text-7xl">
                Break the lane. Crush the tower. Finish the fountain.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-8 text-(--muted) sm:text-2xl">
                BattleShift is a live mobile hero arena with real heroes, direct PvP rooms,
                towers, creeps, chat, friends, community feed, and objective pressure that
                decides who actually wins.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={appStoreUrl}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#58d8ff,#79ffb3)] px-8 font-bold tracking-[0.18em] text-slate-950 uppercase transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Download on App Store
                </a>
                <a
                  href="#community"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/14 bg-white/5 px-8 font-bold tracking-[0.18em] text-white uppercase backdrop-blur transition-colors duration-200 hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {systems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/10 bg-[#0a1624]/82 px-5 py-5 backdrop-blur"
                  >
                    <p className="text-xs font-bold tracking-[0.24em] text-(--accent-cool) uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/84">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-cyan-400/14 blur-3xl" />
              <div className="absolute -right-4 bottom-12 h-48 w-48 rounded-full bg-emerald-300/14 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/12 bg-(--panel) p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(160deg,rgba(8,20,32,0.96),rgba(5,12,19,0.98))] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-[0.28em] text-(--accent-cool) uppercase">
                        Live Match
                      </p>
                      <p className="mt-2 font-display text-3xl tracking-[0.1em] text-white uppercase">
                        Real Battle View
                      </p>
                    </div>
                    <div className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                      1v1 Arena
                    </div>
                  </div>

                  <div className="relative mt-6 overflow-hidden rounded-[1.8rem] border border-white/8 bg-[#07111d] p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(88,216,255,0.15),transparent_18%),radial-gradient(circle_at_76%_26%,rgba(121,255,179,0.12),transparent_18%)]" />
                    <Image
                      src="/assets/branding/battleshift_home_scene.png"
                      alt="BattleShift battle scene"
                      width={1200}
                      height={900}
                      className="relative z-10 h-auto w-full rounded-[1.25rem] border border-white/8"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                        Objective
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">Tower into fountain</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                        Control
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">Move, stop, cast</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
                        Pressure
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">Lane, kills, siege</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {gameFeatures.map((card) => (
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
        id="heroes"
        className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-(--accent) uppercase">
                Real Heroes
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
                The same heroes from the mobile app, with real kits and pressure styles.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-(--muted)">
              Strength, Agility, and Intellect heroes all carry their own attack style, ranges,
              projectile logic, targeted skills, AoE skills, mana costs, cooldowns, and lane identity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {featuredHeroes.map((hero) => (
              <article
                key={hero.name}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091521]/88 p-7"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${hero.accent} opacity-80`}
                />
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div className="max-w-[14rem]">
                    <p className="text-xs font-bold tracking-[0.24em] text-white/70 uppercase">
                      {hero.role} • {hero.attack}
                    </p>
                    <h3 className="mt-4 font-display text-3xl tracking-[0.06em] text-white uppercase">
                      {hero.name}
                    </h3>
                    <p className="mt-2 text-lg text-(--accent-cool)">{hero.title}</p>
                    <p className="mt-5 text-base leading-7 text-(--muted)">{hero.copy}</p>
                    <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/82 uppercase">
                      Signature: {hero.skill}
                    </div>
                  </div>
                  <div className="relative h-80 w-56 shrink-0">
                    <div className="absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(86,214,255,0.22),transparent_42%)]" />
                    <Image
                      src={hero.portrait}
                      alt={hero.name}
                      fill
                      className="object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-(--accent-cool) uppercase">
              Skill Layer
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
              Skills are not decoration. They define how the lane is won.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              BattleShift supports targeted skills, AoE skills, ranged projectiles, melee contact effects,
              mana checks, cooldown rules, respawn timing, and target pursuit that matches the live combat loop.
            </p>
            <a
              href={appStoreUrl}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-cyan-300/16 bg-cyan-300/10 px-6 text-sm font-bold tracking-[0.18em] text-white uppercase"
            >
              Play the current build
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillHighlights.map((skill, index) => (
              <div
                key={skill.name}
                className="rounded-[1.8rem] border border-white/10 bg-[#0a1623]/85 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white/72 uppercase">
                    {skill.type}
                  </span>
                  <span className="font-display text-2xl tracking-[0.14em] text-(--accent)">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl tracking-[0.06em] text-white uppercase">
                  {skill.name}
                </h3>
                <p className="mt-4 text-lg leading-8 text-(--muted)">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="border-y border-white/8 bg-[linear-gradient(180deg,rgba(7,18,29,0.95),rgba(5,10,17,1))]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-(--accent-warm) uppercase">
                The Map
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
                One clear lane with towers, creeps, free mid-space, and a real finish line.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-(--muted)">
              Towers lock fountain pressure until they fall. Creeps spawn in waves. Mid lane stays open enough
              for duels, while structures force timing, positioning, and siege commitment.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#08131f] p-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#0a1824] p-6">
                <Image
                  src="/assets/map/ground.png"
                  alt="BattleShift lane map texture"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-[1.2rem] opacity-88"
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between px-16 py-12">
                  <div className="flex items-center gap-10">
                    <Image src="/assets/lane/fountain_ally.png" alt="Fountain" width={88} height={88} />
                    <Image src="/assets/lane/tower_ally.png" alt="Tower" width={72} height={72} />
                  </div>
                  <div className="flex items-center gap-5 rounded-full border border-white/10 bg-black/25 px-5 py-3 text-xs font-bold tracking-[0.18em] text-white/82 uppercase backdrop-blur">
                    <Image src="/assets/lane/melee_creep_ally.png" alt="Melee creep" width={38} height={38} />
                    <Image src="/assets/lane/melee_creep_ally.png" alt="Melee creep" width={38} height={38} />
                    <Image src="/assets/lane/ranged_creep_ally.png" alt="Ranged creep" width={38} height={38} />
                    <span>Creep wave pressure</span>
                  </div>
                  <div className="flex items-center gap-10">
                    <Image src="/assets/lane/tower_ally.png" alt="Enemy tower" width={72} height={72} />
                    <Image src="/assets/lane/fountain_ally.png" alt="Enemy fountain" width={88} height={88} />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Tower range creates a readable pressure band instead of random full-map punishment.",
                "Fountain stays protected until its tower drops, so sieges have a real progression.",
                "Two melee creeps and one ranged creep create lane push, target priority, and map rhythm.",
                "Mid lane stays free enough for direct hero fights before structure range takes over.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 rounded-[1.8rem] border border-white/10 bg-[#0a1623]/88 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/16 bg-cyan-300/10 font-display text-xl tracking-[0.14em] text-(--accent-cool)">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-lg leading-8 text-white/84">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold tracking-[0.28em] text-(--accent) uppercase">
              More Than Combat
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
              The app already includes the social layer players actually use.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              BattleShift is not just a combat prototype. It already ships with account flow, chat,
              friend search, player history, community feed, profile pages, and push-driven social loops.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Friends", "Find players by nickname, add them, and open direct chat without leaving the app ecosystem."],
              ["Messages", "Unread badges, direct conversations, push notifications, and in-app foreground delivery."],
              ["Public Profiles", "Browse player history, hero usage, K/D patterns, and overall match record."],
              ["Network", "Read updates, community notes, lore-like posts, and future live content drops."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-[1.8rem] border border-white/10 bg-[#0b1725]/86 p-6"
              >
                <h3 className="font-display text-3xl tracking-[0.06em] text-white uppercase">
                  {title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-(--muted)">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2.4rem] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(8,21,34,0.98),rgba(10,25,40,0.96))] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.28em] text-(--accent-cool) uppercase">
                  BattleShift for iPhone and iPad
                </p>
                <h2 className="mt-5 font-display text-4xl leading-tight tracking-[0.08em] text-white uppercase sm:text-5xl">
                  Download the live build and enter the lane.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
                  Real heroes, direct PvP, bot practice, messaging, friends, player profiles, and one clear
                  objective: break the other side before they break yours.
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-4 sm:min-w-72">
                <a
                  href={appStoreUrl}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#58d8ff,#79ffb3)] px-8 font-bold tracking-[0.16em] text-slate-950 uppercase transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Download on App Store
                </a>
                <a
                  href="/privacy"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 text-sm font-semibold tracking-[0.16em] text-white uppercase"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
