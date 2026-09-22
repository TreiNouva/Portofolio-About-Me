"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { ui, type Project } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { GithubIcon } from "./Icons";

function StatusBadge({ status }: { status: Project["status"] }) {
  const { t } = useLang();
  const deployed = status === "deployed";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${
        deployed ? "bg-accent-soft text-accent-text" : "border border-line text-muted"
      }`}
    >
      {deployed ? <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> : null}
      {t(ui.projects.status[status])}
    </span>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tech.map((name) => (
        <li key={name} className="rounded-md border border-line bg-panel-2 px-2 py-0.5 text-xs text-muted">
          {name}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLang();
  const link =
    "inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent-text";
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.links.live ? (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(ui.projects.liveDemo)}: ${project.name}`}
          className={link}
        >
          <ExternalLink className="size-3.5" aria-hidden="true" />
          {t(ui.projects.liveDemo)}
        </a>
      ) : null}
      {project.links.github ? (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(ui.projects.source)}: ${project.name}`}
          className={link}
        >
          <GithubIcon className="size-3.5" />
          {t(ui.projects.source)}
        </a>
      ) : null}
    </div>
  );
}

function DetailSections({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <div className="space-y-4">
      {project.sections.map((section) => (
        <div key={section.title.en}>
          <h4 className="text-sm font-semibold text-fg">{t(section.title)}</h4>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent-text">
            {section.items.map((entry) => (
              <li key={entry.en}>{t(entry)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** The lead project: always fully open, because the reader should not have to click to see the main work. */
export function FeaturedProject({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <article
      aria-labelledby={`${project.slug}-name`}
      className="panel relative grid gap-6 overflow-hidden p-6 pl-8 sm:p-8 sm:pl-10 md:grid-cols-2"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-accent" />
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-sm font-medium text-accent-text">{t(ui.hero.featured.title)}</p>
          <div className="mt-1 flex items-start justify-between gap-3">
            <h3 id={`${project.slug}-name`} className="font-display text-2xl font-semibold tracking-tight text-fg">
              {project.name}
            </h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-1 text-sm text-muted">
            {t(ui.projects.role)}: {t(project.role)}
          </p>
        </div>
        <p className="leading-relaxed text-muted">{t(project.description)}</p>
        <TechList tech={project.tech} />
        <div className="mt-auto pt-2">
          <ProjectLinks project={project} />
        </div>
      </div>
      <div className="rounded-xl bg-panel-2 p-5">
        <DetailSections project={project} />
      </div>
    </article>
  );
}

/** Regular project card. Details open on request and the card grows without moving its neighbours. */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const detailsId = `${project.slug}-details`;

  return (
    <article aria-labelledby={`${project.slug}-name`} className="panel flex flex-col gap-4 p-6">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 id={`${project.slug}-name`} className="font-display text-lg font-semibold leading-snug text-fg">
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="mt-1 text-sm text-muted">
          {t(ui.projects.role)}: {t(project.role)}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-muted">{t(project.description)}</p>
      <TechList tech={project.tech} />

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={detailsId}
            key="details"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: "easeOut" }}
          >
            <div className="rounded-xl bg-panel-2 p-4">
              <DetailSections project={project} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent-text transition-colors hover:bg-accent hover:text-white"
        >
          {t(open ? ui.projects.hideDetails : ui.projects.details)}
          <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
