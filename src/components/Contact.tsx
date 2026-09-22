"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard can be blocked; the address is visible above for manual copy */
    }
  }

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(t(ui.contact.subject))}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="contact-title">{t(ui.contact.title)}</SectionHeading>
        <div className="panel p-6 sm:p-8">
          <p className="max-w-prose leading-relaxed text-muted">{t(ui.contact.body)}</p>
          <p className="mt-4 break-all font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {profile.email}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={mailto}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <Mail className="size-4" aria-hidden="true" />
              {t(ui.contact.send)}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent-text"
            >
              {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
              {t(ui.contact.copy)}
            </button>
            <SocialLinks />
          </div>
          <p role="status" className="mt-3 min-h-5 text-sm text-accent-text">
            {copied ? t(ui.contact.copied) : ""}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
