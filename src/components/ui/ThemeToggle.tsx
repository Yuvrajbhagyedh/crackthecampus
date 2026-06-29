"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Theme = "light" | "dark";

/**
 * Light / dark toggle. The initial class is set by an inline script in the
 * document head (see layout.tsx) to avoid a flash, so here we only sync the
 * button label and persist the user's choice.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("ctc-theme", next);
    } catch {
      /* storage may be unavailable in private mode — non-critical */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`surface grid h-10 w-10 place-items-center rounded-full border text-[rgb(var(--fg))] transition-colors hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300 ${className ?? ""}`}
    >
      {/* Render a stable icon until mounted to keep SSR and client markup aligned */}
      {mounted && theme === "dark" ? <Icon name="sun" size={18} /> : <Icon name="moon" size={18} />}
    </button>
  );
}
