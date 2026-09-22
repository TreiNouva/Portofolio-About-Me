"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { SocialLinks } from "./SocialLinks";

const snapshots = [
  { href: "#education", ...ui.hero.studying },
  { href: "#projects", ...ui.hero.featured },
  { href: "#experience", ...ui.hero.certificate },
];

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();

  // The one orchestrated moment on the page: the ring draws around the photo, then the text follows.
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.5 } } };
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

  return (
    <section id="home" aria-labelledby="hero-title" className="scroll-mt-20">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="panel flex flex-col items-center gap-8 p-6 sm:flex-row sm:items-start sm:p-8">
          <div className="relative size-44 shrink-0 sm:size-52">
            <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full -rotate-90">
              <circle cx="50" cy="50" r="48.5" fill="none" stroke="var(--line)" strokeWidth="1" />
              <motion.circle
                cx="50"
                cy="50"
                r="48.5"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </svg>
            <motion.div
              className="absolute inset-[6%] overflow-hidden rounded-full"
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={profile.photo}
                alt={t(ui.hero.photoAlt)}
                width={720}
                height={720}
                priority
                sizes="(min-width: 640px) 208px, 176px"
                className="size-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="text-center sm:text-left"
            variants={container}
            initial={reduce ? false : "hidden"}
            animate="show"
          >
            <motion.h1
              id="hero-title"
              variants={item}
              className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl"
            >
              {profile.fullName}
            </motion.h1>
            <motion.p variants={item} className="mt-2 text-lg font-medium text-accent-text">
              {t(profile.headline)}
            </motion.p>
            <motion.p variants={item} className="mt-4 max-w-prose leading-relaxed text-muted">
              {t(profile.intro)}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                {t(ui.hero.viewProjects)}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
              >
                {t(ui.hero.contactMe)}
              </a>
              <SocialLinks />
            </motion.div>

            <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="mr-1 text-sm text-muted">{t(ui.hero.focusLabel)}</span>
              {profile.focus.map((label) => (
                <span
                  key={label.en}
                  className="rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 text-sm text-accent-text"
                >
                  {t(label)}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          {snapshots.map(({ href, title, body }) => (
            <a
              key={href}
              href={href}
              className="panel flex flex-col justify-center p-5 transition-colors hover:border-accent"
            >
              <span className="text-sm text-muted">{t(title)}</span>
              <span className="mt-1 font-medium leading-snug text-fg">{t(body)}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
