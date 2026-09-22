"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { L, Lang } from "@/data/portfolio";

export type Theme = "dark" | "light";

/**
 * A tiny localStorage-backed store, read with useSyncExternalStore.
 * The server (and the first client render) always use the fallback value, so
 * there is no hydration mismatch; the saved choice is applied right after.
 */
function createPersistentStore<T extends string>(
  key: string,
  fallback: T,
  allowed: readonly T[],
  apply: (value: T) => void,
) {
  const listeners = new Set<() => void>();

  const read = (): T => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved && (allowed as readonly string[]).includes(saved) ? (saved as T) : fallback;
    } catch {
      return fallback;
    }
  };

  const notify = () => listeners.forEach((listener) => listener());

  return {
    subscribe(listener: () => void) {
      listeners.add(listener);
      const onStorage = (event: StorageEvent) => {
        if (event.key === key) {
          apply(read());
          notify();
        }
      };
      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
      };
    },
    getSnapshot: read,
    getServerSnapshot: () => fallback,
    set(value: T) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* storage can be blocked (private mode); the choice then lasts for this visit only */
      }
      apply(value);
      notify();
    },
  };
}

/** Default language is Indonesian. Change the fallback ("id") to "en" to default to English. */
const langStore = createPersistentStore<Lang>("portfolio-lang", "id", ["id", "en"], (value) => {
  document.documentElement.lang = value;
});

/** Default theme is dark, as in the design brief. */
const themeStore = createPersistentStore<Theme>("portfolio-theme", "dark", ["dark", "light"], (value) => {
  document.documentElement.dataset.theme = value;
});

export function useLang() {
  const lang = useSyncExternalStore(langStore.subscribe, langStore.getSnapshot, langStore.getServerSnapshot);
  const t = useCallback((text: L) => text[lang], [lang]);
  return { lang, setLang: langStore.set, t };
}

export function useTheme() {
  const theme = useSyncExternalStore(themeStore.subscribe, themeStore.getSnapshot, themeStore.getServerSnapshot);
  return { theme, setTheme: themeStore.set };
}
