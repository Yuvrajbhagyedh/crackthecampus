"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MotionButton } from "@/components/ui/MotionButton";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useSession } from "@/lib/useSession";
import { clearSession } from "@/lib/auth";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const session = useSession();

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
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
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
          {session ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--fg))]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-xs font-bold text-white">
                  {session.name.charAt(0).toUpperCase()}
                </span>
                {session.name.split(" ")[0]}
              </span>
              <button
                type="button"
                onClick={() => clearSession()}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                <Icon name="logout" size={16} />
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                Log in
              </Link>
              <MotionButton href="/register" size="md">
                Start free
              </MotionButton>
            </>
          )}
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

      <AnimatePresence>
        {open && (
          <div
            id="mobile-menu"
            className="fixed inset-0 z-50 md:hidden"
            aria-hidden={!open}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[min(20rem,82vw)] flex-col gap-1 border-l border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 shadow-2xl"
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
            {session ? (
              <>
                <div className="flex items-center gap-2.5 px-1">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-sm font-bold text-white">
                    {session.name.charAt(0).toUpperCase()}
                  </span>
                  <span className="text-sm font-medium text-[rgb(var(--fg))]">
                    {session.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    clearSession();
                    setOpen(false);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--fg))]"
                >
                  <Icon name="logout" size={16} /> Log out
                </button>
              </>
            ) : (
              <>
                <MotionButton href="/login" variant="secondary" onClick={() => setOpen(false)}>
                  Log in
                </MotionButton>
                <MotionButton href="/register" onClick={() => setOpen(false)}>
                  Start free
                </MotionButton>
              </>
            )}
          </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
