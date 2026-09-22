"use client";

import { ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  const { t } = useLang();
  const items = ui.education.items;
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="education-title">{t(ui.education.title)}</SectionHeading>
        {/* Newest first; the vertical line marks the order of study. */}
        <ol className="panel p-6 sm:p-8">
          {items.map((item, index) => (
            <li key={item.school.en} className="relative pb-8 pl-8 last:pb-0">
              <span aria-hidden="true" className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-accent bg-panel" />
              {index < items.length - 1 ? (
                <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-6 w-px bg-line" />
              ) : null}
              <h3 className="font-display text-xl font-semibold text-fg">{t(item.school)}</h3>
              <p className="mt-1 text-fg">{t(item.program)}</p>
              {item.period ? <p className="mt-1 text-sm text-muted">{t(item.period)}</p> : null}
              {item.note ? <p className="text-sm text-muted">{t(item.note)}</p> : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
