"use client";

import { projects, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { FeaturedProject, ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const { t } = useLang();
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="projects-title" description={t(ui.projects.intro)}>
          {t(ui.projects.title)}
        </SectionHeading>
        <div className="space-y-4">
          {featured ? <FeaturedProject project={featured} /> : null}
          <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
