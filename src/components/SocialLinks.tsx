"use client";

import { Mail } from "lucide-react";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const link =
    "grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent-text";
  return (
    <ul aria-label={t(ui.controls.social)} className={`flex items-center gap-2 ${className}`}>
      <li>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={link}>
          <GithubIcon className="size-4" />
        </a>
      </li>
      <li>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={link}>
          <LinkedinIcon className="size-4" />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label="Email" className={link}>
          <Mail className="size-4" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
