"use client";

import { profile, ui } from "@/data/portfolio";
import { useLang } from "@/lib/site-state";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-4 border-t border-line pt-6 text-sm text-muted">
      <p>
        &copy; 2026 {profile.fullName}. {t(ui.footer)}
      </p>
    </footer>
  );
}
