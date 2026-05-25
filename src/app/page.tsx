import Image from "next/image";
import { PhoneShowcase } from "./components/phone-showcase";

const appStoreUrl = "https://apps.apple.com/app/id6760688990";

const heroes = [
  {
    name: "Astra Vale",
    title: "Starblade Captain",
    portrait: "/assets/heroes/astra_vale.png",
    accent: "from-sky-400/55 to-cyan-300/10",
    role: "Strength",
    attack: "Melee",
    skill: "Photon Slash",
    description:
      "Front-line timing duelist built to punish mispositioning and convert short windows into burst damage.",
  },
  {
    name: "Brakka Thorn",
    title: "Wild Bastion",
    portrait: "/assets/heroes/brakka_thorn.png",
    accent: "from-emerald-400/50 to-lime-300/10",
    role: "Strength",
    attack: "Melee",
    skill: "Rootbreaker",
    description:
      "Siege tank that can anchor a lane, hold tower space, and punish overcommitment with raw frontline pressure.",
  },
  {
    name: "Kairo Vex",
    title: "Volt Repeater",
    portrait: "/assets/heroes/kairo_vex.png",
    accent: "from-violet-400/52 to-cyan-300/10",
    role: "Agility",
    attack: "Ranged",
    skill: "Arc Relay",
    description:
      "Ranged tempo specialist that wins on spacing, repeat fire, and punishing tower windows before the fight stabilizes.",
  },
  {
    name: "Lockscord",
    title: "Seal Warden",
    portrait: "/assets/heroes/lockscord.png",
    accent: "from-emerald-500/45 to-cyan-300/10",
    role: "Strength",
    attack: "Melee",
    skill: "Ward Bind",
    description:
      "Discipline-heavy bruiser that turns lane geometry, control, and survivability into clean siege progress.",
  },
  {
    name: "Nyx Ember",
    title: "Ash Trickster",
    portrait: "/assets/heroes/nyx_ember.png",
    accent: "from-orange-400/55 to-red-400/12",
    role: "Agility",
    attack: "Melee",
    skill: "Flash Cut",
    description:
      "Mobile assassin built to break timing, hit angles fast, and exploit panic before the enemy side resets.",
  },
  {
    name: "Solenne Mire",
    title: "Tide Oracle",
    portrait: "/assets/heroes/solenne_mire.png",
    accent: "from-cyan-300/55 to-emerald-300/14",
    role: "Intellect",
    attack: "Ranged",
    skill: "Orbit Breaker",
    description:
      "Long-range controller who bends spacing, resets fights, and punishes teams drifting too deep into lane pressure.",
  },
];

const featureCards = [
  {
    eyebrow: "Live PvP",
    title: "Direct duel rooms, not fake menu multiplayer.",
    body:
      "Create a room, join a rival, lock a hero, and fight over lane control, towers, creeps, kills, respawns, and the final fountain break.",
  },
  {
    eyebrow: "Hero Systems",
    title: "Real kits with ranges, mana, cooldowns, and attack identity.",
    body:
      "Strength, Agility, and Intellect heroes all use real combat stats and support targeted skills, AoE pressure, and lane-specific timing.",
  },
  {
    eyebrow: "Social Layer",
    title: "Friends, chat, profiles, unread badges, and in-app rivalry.",
    body:
      "BattleShift already ships with direct messages, typing state, player search, notifications, community feed, and public player history.",
  },
];

const communityPosts = [
  {
    source: "Arena Ops",
    type: "Pinned update",
    topic: "Update",
    body:
      "Duel room tempo is the main focus. Towers, creeps, and structure pressure now shape how real matches close.",
  },
  {
    source: "Kairo Vex",
    type: "Strategy thread",
    topic: "Tech",
    body:
      "Spacing beats panic. If you can hold the safe middle lane, you choose when tower range becomes relevant.",
  },
  {
    source: "Lockscord",
    type: "Field report",
    topic: "Lore",
    body:
      "The lane remembers every hesitation. Lose tower timing once and the siege writes the rest of the story for you.",
  },
];

const skills = [
  {
    name: "Photon Slash",
    type: "Targeted skill",
    detail: "Short pursuit into burst contact that punishes enemy spacing errors.",
  },
  {
    name: "Orbit Breaker",
    type: "Ranged burst",
    detail: "Projectile pressure with real timing, mana cost, and punish windows.",
  },
  {
    name: "Nova Guard",
    type: "Defense utility",
    detail: "Lets front-liners hold siege pressure long enough to flip a lane state.",
  },
  {
    name: "Captain Command",
    type: "Control cast",
    detail: "High-impact tempo shift instead of empty stat padding.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "BattleShift",
  applicationCategory: "GameApplication",
  operatingSystem: "iOS, iPadOS",
  url: "https://getbattleshift.com",
  image: "https://getbattleshift.com/assets/branding/battleshift_home_scene.png",
  description:
    "BattleShift is a live mobile hero duel arena with direct PvP rooms, bot practice, real heroes, towers, creeps, chat, friends, player profiles, and community feed.",
  genre: ["Action", "Strategy", "Multiplayer Online Battle Arena"],
  publisher: {
    "@type": "Organization",
    name: "BattleShift",
  },
  offers: {
    "@type": "Offer",
    url: appStoreUrl,
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(86,214,255,0.18),transparent_15%),radial-gradient(circle_at_78%_14%,rgba(109,255,189,0.14),transparent_18%),radial-gradient(circle_at_50%_52%,rgba(20,66,105,0.22),transparent_28%)]" />

      <section className="battle-grid relative isolate overflow-hidden border-b border-white/8">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <header className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_0_40px_rgba(80,212,255,0.18)]">
                <Image
                  src="/assets/branding/battleshift_logo_mark.png"
                  alt="BattleShift logo"
                  width={72}
                  height={72}
                  className="h-[4.5rem] w-[4.5rem]"
                />
              </div>
              <div>
                <p className="text-[2rem] font-black tracking-[0.18em] text-white uppercase">
                  BattleShift
                </p>
                <p className="mt-1 text-xs font-semibold tracking-[0.34em] text-(--muted) uppercase">
                  Mobile hero duel arena
                </p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm font-semibold tracking-[0.18em] text-white/78 uppercase">
              <a href="#heroes">Heroes</a>
              <a href="#skills">Skills</a>
              <a href="#community">Community</a>
              <a href="#map">Map</a>
              <a
                href={appStoreUrl}
                className="inline-flex h-11 items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 px-6 text-white transition-colors duration-200 hover:bg-white/10"
              >
                Download on App Store
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.02fr_0.9fr] lg:py-16">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-(--line) bg-white/6 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-white/84 uppercase backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-(--accent)" />
                Available now on the App Store
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.94] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.15rem]">
                Real heroes. One lane. Towers, creeps, chat, friends, and live pressure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted) sm:text-xl">
                BattleShift is a focused mobile hero duel game for iPhone and iPad. Fight in
                direct PvP rooms, practice in bot matches, break towers, protect your fountain,
                and keep the rivalry alive with messages, friends, and player profiles.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={appStoreUrl}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#58d8ff,#79ffb3)] px-8 text-sm font-black tracking-[0.18em] text-slate-950 uppercase transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Download on App Store
                </a>
                <a
                  href="#community"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/14 bg-white/5 px-8 text-sm font-black tracking-[0.18em] text-white uppercase backdrop-blur transition-colors duration-200 hover:bg-white/10"
                >
                  See the social layer
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#0a1624]/82 px-5 py-5 backdrop-blur">
                  <p className="text-xs font-black tracking-[0.24em] text-(--accent-cool) uppercase">
                    What is live
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/84">
                    PvP rooms, bot practice, hero roster, lane combat, friends, chat, profiles,
                    community feed, and App Store delivery.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[#0a1624]/82 px-5 py-5 backdrop-blur">
                  <p className="text-xs font-black tracking-[0.24em] text-(--accent-cool) uppercase">
                    Why it is different
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/84">
                    The game is built around readable lane pressure: move, stop, cast, siege,
                    respawn, wave timing, and objective control.
                  </p>
                </div>
              </div>
            </div>

            <PhoneShowcase />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {featureCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur"
            >
              <p className="text-xs font-black tracking-[0.26em] text-(--accent-warm) uppercase">
                {card.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] text-white">
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
              <p className="text-xs font-black tracking-[0.28em] text-(--accent) uppercase">
                Full Hero Roster
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Every real BattleShift hero, not placeholder classes.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-(--muted)">
              The landing now uses the same hero assets and identity the mobile app uses: real
              portraits, attack styles, hero titles, and signature skills.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {heroes.map((hero) => (
              <article
                key={hero.name}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#091521]/90 p-7"
              >
                <div className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${hero.accent} opacity-90`} />
                <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
                <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end">
                  <div className="relative h-[20rem] w-full shrink-0 md:h-[24rem] md:w-[16.5rem]">
                    <div className="absolute left-1/2 top-6 h-28 w-28 -translate-x-1/2 rounded-full bg-white/12 blur-2xl" />
                    <div className="lightning-strand left-[18%] top-[16%] h-28 -rotate-[16deg]" />
                    <div className="lightning-strand right-[20%] top-[30%] h-32 rotate-[18deg]" />
                    <Image
                      src={hero.portrait}
                      alt={hero.name}
                      fill
                      className="object-contain object-bottom drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                    />
                  </div>

                  <div className="max-w-[24rem]">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-white/78 uppercase">
                        {hero.role}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-white/78 uppercase">
                        {hero.attack}
                      </span>
                    </div>
                    <h3 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">
                      {hero.name}
                    </h3>
                    <p className="mt-2 text-lg text-(--accent-cool)">{hero.title}</p>
                    <p className="mt-5 text-base leading-7 text-(--muted)">{hero.description}</p>
                    <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black tracking-[0.16em] text-white/82 uppercase">
                      Signature skill: {hero.skill}
                    </div>
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
            <p className="text-xs font-black tracking-[0.28em] text-(--accent-cool) uppercase">
              Skill Layer
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Skills, projectiles, mana, cooldowns, and targeted pressure all matter.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              BattleShift supports targeted skills, AoE skills, ranged projectile pressure,
              melee contact effects, mana checks, cooldown rules, respawn timing, and live
              target pursuit tied to actual combat rules.
            </p>
            <a
              href={appStoreUrl}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-cyan-300/16 bg-cyan-300/10 px-6 text-sm font-black tracking-[0.18em] text-white uppercase"
            >
              Play the current App Store build
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="rounded-[1.8rem] border border-white/10 bg-[#0a1623]/85 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-white/72 uppercase">
                    {skill.type}
                  </span>
                  <span className="text-2xl font-black tracking-[0.04em] text-(--accent)">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] text-white">
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
              <p className="text-xs font-black tracking-[0.28em] text-(--accent-warm) uppercase">
                The Map
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                One readable lane with towers, creeps, free mid-space, and a real finish line.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-(--muted)">
              Towers protect fountains. Creeps open and close pressure windows. The middle lane
              leaves enough safe space for direct duels before structure range takes over.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-[#08131f] p-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#0a1824] p-6">
                <Image
                  src="/assets/map/ground.png"
                  alt="BattleShift lane map"
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-[1.2rem] opacity-88"
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between px-16 py-12">
                  <div className="flex items-center gap-10">
                    <Image src="/assets/lane/fountain_ally.png" alt="Fountain" width={88} height={88} />
                    <Image src="/assets/lane/tower_ally.png" alt="Tower" width={72} height={72} />
                  </div>
                  <div className="flex items-center gap-5 rounded-full border border-white/10 bg-black/28 px-5 py-3 text-xs font-black tracking-[0.18em] text-white/82 uppercase backdrop-blur">
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
                "Fountain stays protected until its tower drops, so siege has a real progression.",
                "Two melee creeps and one ranged creep create target priority, lane push, and timing rhythm.",
                "The center lane stays open enough for duels before structure range becomes the deciding factor.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 rounded-[1.8rem] border border-white/10 bg-[#0a1623]/88 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/16 bg-cyan-300/10 text-xl font-black tracking-[0.04em] text-(--accent-cool)">
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
            <p className="text-xs font-black tracking-[0.28em] text-(--accent) uppercase">
              Community Surface
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              The app already includes posts, updates, chat, friends, and public rivalry.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-(--muted)">
              BattleShift is not just a combat prototype. It already ships with account flow,
              friend search, direct messages, typing state, unread badges, push alerts, network
              posts, and public player history.
            </p>
          </div>

          <div className="space-y-5">
            {communityPosts.map((post, index) => (
              <article
                key={post.source + post.type}
                className="rounded-[1.8rem] border border-white/10 bg-[#0b1725]/88 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-black text-white">
                      {post.source.charAt(0)}
                    </div>
                    <div>
                      <p className="text-lg font-black text-white">{post.source}</p>
                      <p className="text-sm text-(--muted)">
                        {post.type} · {post.topic}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black tracking-[0.18em] text-white/70 uppercase">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-5 text-lg leading-8 text-white/84">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2.4rem] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(8,21,34,0.98),rgba(10,25,40,0.96))] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black tracking-[0.28em] text-(--accent-cool) uppercase">
                  BattleShift for iPhone and iPad
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                  Download the live build and enter the lane.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">
                  Real heroes, direct PvP, bot practice, chat, friends, player profiles,
                  community posts, and one clear objective: break the other side before they
                  break yours.
                </p>
              </div>

              <div className="flex flex-col items-stretch gap-4 sm:min-w-72">
                <a
                  href={appStoreUrl}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#58d8ff,#79ffb3)] px-8 text-sm font-black tracking-[0.16em] text-slate-950 uppercase transition-transform duration-200 hover:-translate-y-0.5"
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

      <footer className="border-t border-white/8 bg-[#061019]/92">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/branding/battleshift_logo_mark.png"
              alt="BattleShift logo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <div>
              <p className="text-lg font-black tracking-[0.12em] text-white uppercase">BattleShift</p>
              <p className="text-sm leading-6 text-white/58">
                Mobile hero duel arena for iPhone and iPad.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold tracking-[0.12em] text-white/72 uppercase">
            <a href={appStoreUrl}>App Store</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/delete-account">Delete Account</a>
            <a href="mailto:game@getbattleshift.com">Support</a>
          </div>

          <p className="text-sm text-white/48">© 2026 BattleShift. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
