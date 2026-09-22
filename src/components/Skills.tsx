"use client";

import { ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const { t } = useLang();
  const groups = ui.skills.groups;
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="skills-title">{t(ui.skills.title)}</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => (
            <div key={group.title.en} className={`panel p-6 ${index === groups.length - 1 ? "md:col-span-2" : ""}`}>
              <h3 className="font-display text-lg font-semibold text-fg">{t(group.title)}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill.en} className="rounded-md border border-line bg-panel-2 px-2.5 py-1 text-sm text-fg">
                    {t(skill)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
