"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Braces, Briefcase, GraduationCap, House, LayoutGrid, Mail, Menu, User, X } from "lucide-react";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";
import { LanguageSwitch, ThemeToggle } from "./Controls";
import { SocialLinks } from "./SocialLinks";

const sections = [
  { id: "home", icon: House, label: ui.nav.home },
  { id: "about", icon: User, label: ui.nav.about },
  { id: "education", icon: GraduationCap, label: ui.nav.education },
  { id: "skills", icon: Braces, label: ui.nav.skills },
  { id: "projects", icon: LayoutGrid, label: ui.nav.projects },
  { id: "experience", icon: Briefcase, label: ui.nav.experience },
  { id: "contact", icon: Mail, label: ui.nav.contact },
] as const;

const sectionIds = sections.map((section) => section.id);

/** Highlights the nav item of the section that is currently in the middle of the screen. */
function useActiveSection() {
  const [active, setActive] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return active;
}

function NavList({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  const { t } = useLang();
  return (
    <ul className="space-y-1">
      {sections.map(({ id, icon: Icon, label }) => {
        const isActive = active === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onNavigate}
              aria-current={isActive ? "location" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-accent-soft text-accent-text" : "text-muted hover:bg-panel-2 hover:text-fg"
              }`}
            >
              <Icon className="size-4" aria-hidden="true" />
              {t(label)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function Brand() {
  return (
    <a href="#home" className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-fg">
      <Image src={profile.photo} alt="" width={36} height={36} className="size-9 rounded-full ring-2 ring-accent" />
      {profile.displayName}
    </a>
  );
}

export function Navbar() {
  const active = useActiveSection();
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col justify-between border-r border-line bg-panel px-4 py-6 lg:flex">
        <div>
          <div className="mb-8 px-2">
            <Brand />
          </div>
          <nav aria-label={t(ui.controls.mainNav)}>
            <NavList active={active} />
          </nav>
        </div>
        <div className="space-y-4 px-2">
          <div className="flex items-center justify-between">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
          <SocialLinks />
        </div>
      </aside>

      {/* Mobile and tablet: sticky top bar */}
      <header
        className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur lg:hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center justify-between gap-2 px-4 py-3">
          <Brand />
          <div className="flex items-center gap-2">
            <LanguageSwitch />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={t(open ? ui.controls.closeMenu : ui.controls.openMenu)}
              className="grid size-9 place-items-center rounded-lg border border-line bg-panel-2 text-muted transition-colors hover:text-fg"
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" aria-label={t(ui.controls.mainNav)} className="border-t border-line bg-panel px-4 py-3">
            <NavList active={active} onNavigate={() => setOpen(false)} />
          </nav>
        ) : null}
      </header>
    </>
  );
}
