import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { Logo } from "@/components/ui/Logo";

const socials = [
  {
    label: "LinkedIn",
    href: "#footer",
    path: "M6.94 8.5H4.06V20h2.88V8.5ZM5.5 3.5A1.7 1.7 0 1 0 5.5 7a1.7 1.7 0 0 0 0-3.4ZM20 13.4c0-2.9-1.55-4.25-3.62-4.25a3.12 3.12 0 0 0-2.83 1.56h-.04V8.5H10.7V20h2.88v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20H20v-6.6Z",
  },
  {
    label: "Twitter / X",
    href: "#footer",
    path: "M17.2 3h3.3l-7.2 8.24L22 21h-6.64l-4.2-5.5L6.3 21H3l7.7-8.8L2.5 3h6.8l3.8 5.02L17.2 3Zm-1.16 16h1.83L8.05 4.9H6.1L16.04 19Z",
  },
  {
    label: "Instagram",
    href: "#footer",
    path: "M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-7.78a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0ZM20 7.04a5.3 5.3 0 0 0-1.45-3.75A5.3 5.3 0 0 0 14.8 1.8C13.33 1.72 8.67 1.72 7.2 1.8A5.3 5.3 0 0 0 3.45 3.3 5.3 5.3 0 0 0 2 7.04c-.08 1.47-.08 6.13 0 7.6a5.3 5.3 0 0 0 1.45 3.75 5.3 5.3 0 0 0 3.75 1.45c1.47.08 6.13.08 7.6 0a5.3 5.3 0 0 0 3.75-1.45A5.3 5.3 0 0 0 20 14.64c.08-1.47.08-6.13 0-7.6Zm-1.92 9.18a3.04 3.04 0 0 1-1.71 1.71c-1.18.47-4 .36-5.37.36-1.37 0-4.19.1-5.37-.36a3.04 3.04 0 0 1-1.71-1.71c-.47-1.18-.36-4-.36-5.38 0-1.37-.1-4.19.36-5.37a3.04 3.04 0 0 1 1.71-1.71c1.18-.47 4-.36 5.37-.36 1.37 0 4.19-.1 5.37.36a3.04 3.04 0 0 1 1.71 1.71c.47 1.18.36 4 .36 5.37 0 1.38.11 4.2-.36 5.38Z",
  },
  {
    label: "YouTube",
    href: "#footer",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z",
  },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-[rgb(var(--border))] bg-[rgb(var(--bg-subtle))]"
    >
      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The all-in-one prep platform helping students crack placements,
              internships and competitive aptitude tests — from first concept to
              final offer.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:support@crackthecampus.com"
                className="flex items-center gap-2 text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                <span aria-hidden="true">✉</span> support@crackthecampus.com
              </a>
              <a
                href="tel:+918000000000"
                className="flex items-center gap-2 text-muted transition-colors hover:text-[rgb(var(--fg))]"
              >
                <span aria-hidden="true">☎</span> +91 80000 00000
              </a>
              <p className="flex items-center gap-2 text-muted">
                <span aria-hidden="true">⚲</span> Bengaluru, India · Helpdesk 9am–9pm IST
              </p>
            </div>

            <ul className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="surface grid h-10 w-10 place-items-center rounded-full border text-muted transition-colors hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {footerNav.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-[rgb(var(--fg))]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[rgb(var(--border))] pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} CrackTheCampus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#footer" className="transition-colors hover:text-[rgb(var(--fg))]">
              Privacy
            </Link>
            <Link href="#footer" className="transition-colors hover:text-[rgb(var(--fg))]">
              Terms
            </Link>
            <Link href="#footer" className="transition-colors hover:text-[rgb(var(--fg))]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
