"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-18"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeToggle />
          <Link
            href="#footer"
            className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-[rgb(var(--fg))]"
          >
            Log in
          </Link>
          <Button href="#courses" size="md">
            Start free
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="surface grid h-10 w-10 place-items-center rounded-full border text-[rgb(var(--fg))]"
          >
            <Icon name="menu" size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(20rem,82vw)] flex-col gap-1 border-l border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="surface grid h-10 w-10 place-items-center rounded-full border text-[rgb(var(--fg))]"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-[rgb(var(--fg))] transition-colors hover:bg-brand-50 dark:hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-5">
            <Button href="#footer" variant="secondary" onClick={() => setOpen(false)}>
              Log in
            </Button>
            <Button href="#courses" onClick={() => setOpen(false)}>
              Start free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
