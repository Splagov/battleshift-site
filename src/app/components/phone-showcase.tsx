"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Shot = {
  title: string;
  subtitle: string;
  src: string;
};

const shots: Shot[] = [
  {
    title: "Home lobby",
    subtitle: "PvP rooms, bot battle, and live battle entry.",
    src: "/assets/screens/01-home.png",
  },
  {
    title: "Hero roster",
    subtitle: "Strength, Agility, and Intellect heroes with real kits.",
    src: "/assets/screens/02-heroes.png",
  },
  {
    title: "Hero details",
    subtitle: "Stats, skills, ranges, and role identity.",
    src: "/assets/screens/03-hero-detail.png",
  },
  {
    title: "Live match",
    subtitle: "One-lane combat with towers, creeps, siege, and pressure.",
    src: "/assets/screens/04-battle.png",
  },
  {
    title: "Network feed",
    subtitle: "Community signals, updates, and player surface.",
    src: "/assets/screens/05-network.png",
  },
];

export function PhoneShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % shots.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const activeShot = shots[activeIndex] ?? shots[0];
  const visibleShots = useMemo(() => shots.slice(0, 5), []);

  return (
    <div className="relative">
      <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="absolute -right-6 bottom-14 h-52 w-52 rounded-full bg-emerald-300/14 blur-3xl" />
      <div className="hero-aura relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[3rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,18,29,0.98),rgba(5,12,19,1))] p-4 backdrop-blur-xl">
        <div className="absolute left-1/2 top-3 z-20 h-7 w-40 -translate-x-1/2 rounded-b-[1.3rem] bg-black/90" />
        <div className="absolute inset-x-5 top-8 z-10 flex items-center justify-between text-[11px] font-semibold tracking-[0.18em] text-white/58 uppercase">
          <span>BattleShift</span>
          <span>Live build</span>
        </div>
        <div className="relative mt-8 overflow-hidden rounded-[2.35rem] border border-white/8 bg-[#050d15]">
          <div className="aurora-ring left-[16%] top-[14%] h-28 w-28 bg-cyan-300/26" />
          <div className="aurora-ring right-[14%] top-[24%] h-36 w-36 bg-emerald-300/18" />
          <div className="lightning-strand left-[14%] top-[11%] h-24 -rotate-12" />
          <div className="lightning-strand right-[18%] top-[44%] h-28 rotate-[18deg]" />
          <div className="relative aspect-[9/19.5] w-full">
            {visibleShots.map((shot, index) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.title}
                fill
                priority={index === 0}
                className={`object-cover object-top transition-all duration-700 ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-[1.03] opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-[#0a1623]/88 px-5 py-4">
          <div>
            <p className="text-[11px] font-bold tracking-[0.24em] text-(--accent-cool) uppercase">
              iPhone Showcase
            </p>
            <p className="mt-2 text-xl font-semibold text-white">{activeShot.title}</p>
            <p className="mt-1 text-sm leading-6 text-(--muted)">{activeShot.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {visibleShots.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                aria-label={`Show ${shot.title}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-8 rounded-full transition-all duration-200 ${
                  index === activeIndex ? "bg-(--accent)" : "bg-white/18 hover:bg-white/32"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
              Rooms
            </p>
            <p className="mt-2 text-base font-semibold text-white">Live PvP and bot practice</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
              Control
            </p>
            <p className="mt-2 text-base font-semibold text-white">Move, stop, target, cast</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/55 uppercase">
              Social
            </p>
            <p className="mt-2 text-base font-semibold text-white">Friends, chat, community</p>
          </div>
        </div>
      </div>
    </div>
  );
}
