"use client";

import { Award, ExternalLink } from "lucide-react";
import { certificates, organization, otherActivities, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t, lang } = useLang();
  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(iso));
  const list = "mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted marker:text-accent-text";

  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20">
      <Reveal>
        <SectionHeading id="experience-title">{t(ui.experience.title)}</SectionHeading>
        <div className="grid items-start gap-4 lg:grid-cols-2">
          <div className="panel space-y-6 p-6 sm:p-8">
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">{t(ui.experience.organizationTitle)}</h3>
              <p className="mt-3 font-medium text-fg">
                {t(organization.role)}, {organization.name}
              </p>
              <p className="text-sm text-muted">{organization.place}</p>
              <ul className={list}>
                {organization.points.map((point) => (
                  <li key={point.en}>{t(point)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">{t(ui.experience.activitiesTitle)}</h3>
              <ul className={list}>
                {otherActivities.map((activity) => (
                  <li key={activity.en}>{t(activity)}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-fg">{t(ui.experience.certificatesTitle)}</h3>
            <ul className="mt-4 space-y-6">
              {certificates.map((certificate) => (
                <li key={certificate.file} className="flex gap-3">
                  <Award className="mt-0.5 size-5 shrink-0 text-accent-text" aria-hidden="true" />
                  <div>
                    <p className="font-medium leading-snug text-fg">{certificate.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {t(certificate.kind)}, {certificate.issuer}
                    </p>
                    <p className="text-sm text-muted">
                      {certificate.hours} {t(ui.experience.learningHours)}, {formatDate(certificate.date)}
                    </p>
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:underline"
                    >
                      {t(ui.experience.viewCertificate)}
                      <ExternalLink className="size-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
