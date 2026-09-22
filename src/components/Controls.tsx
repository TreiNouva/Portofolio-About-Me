"use client";

import { Moon, Sun } from "lucide-react";
import { ui } from "@/data/portfolio";
import { useLang, useTheme } from "@/lib/site-state";

const languages = [
  { code: "id", label: "Bahasa Indonesia" },
  { code: "en", label: "English" },
] as const;

export function LanguageSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t(ui.controls.language)}
      className="inline-flex rounded-lg border border-line bg-panel-2 p-0.5 text-sm font-medium"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={label}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            lang === code ? "bg-accent text-white" : "text-muted hover:text-fg"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t(isDark ? ui.controls.switchToLight : ui.controls.switchToDark)}
      className="grid size-9 place-items-center rounded-lg border border-line bg-panel-2 text-muted transition-colors hover:text-fg"
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  );
}
