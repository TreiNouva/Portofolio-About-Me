"use client";

import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="about-title">{t(ui.about.title)}</SectionHeading>
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="panel space-y-4 p-6 leading-relaxed text-muted sm:p-8">
            {profile.about.map((paragraph) => (
              <p key={paragraph.en} className="max-w-prose">
                {t(paragraph)}
              </p>
            ))}
          </div>
          <div className="panel p-6">
            <h3 className="font-display text-lg font-semibold text-fg">{t(ui.about.factsTitle)}</h3>
            <dl className="mt-3 divide-y divide-line">
              {profile.facts.map((fact) => (
                <div key={fact.label.en} className="flex items-baseline justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-muted">{t(fact.label)}</dt>
                  <dd className="text-right font-medium text-fg">{t(fact.value)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
