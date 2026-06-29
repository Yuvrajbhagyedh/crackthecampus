# CrackTheCampus — Landing Page

A high-converting marketing landing page for **CrackTheCampus**, a platform that
helps students prepare for placements, internships and competitive aptitude
tests. Built from scratch with Next.js and Tailwind CSS — no UI kits, no design
templates, no cloned references.

🔗 **Live demo:** _add your deployment URL here (Vercel / Netlify)_

---

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | Next.js 14 (App Router, React Server Components)     |
| Language       | TypeScript (strict mode)                            |
| Styling        | Tailwind CSS 3 with a small custom design system     |
| Fonts          | `next/font` (Inter for body, Sora for display)       |
| Icons / art    | Hand-built inline SVG (no icon library, no images)   |
| Deployment     | Static export friendly — deploy to any host          |

---

## Technical approach

The page is composed of **isolated, reusable components** grouped by
responsibility:

- **`ui/`** — design-system primitives (`Button`, `Icon`, `SectionHeading`,
  `Reveal`, `ThemeToggle`, `Logo`). These have no business knowledge and are
  reused everywhere.
- **`sections/`** — one component per landing-page section. Each section reads
  its content from **`data/`**, so copy and layout stay decoupled and there is
  zero hard-coded duplication in the markup.
- **`layout/`** — the `Navbar` (with a scroll-aware state and an accessible
  mobile drawer) and the `Footer`.
- **`data/`** — all marketing copy (features, stats, testimonials, companies,
  courses, navigation). Editing the page is a content change, not a code change.

Design decisions worth calling out:

- **Theming via CSS variables.** Light/dark colours are defined as RGB channel
  variables in `globals.css` and consumed through Tailwind. An inline script in
  `layout.tsx` applies the saved theme **before paint** to avoid a flash of the
  wrong colour scheme.
- **Performance first.** Server Components by default; only the genuinely
  interactive pieces (`Navbar`, `ThemeToggle`, `Reveal`, `CountUp`) are client
  components. First-load JS is ~100 kB and there are no raster image requests —
  every illustration is inline SVG/markup.
- **Motion that respects the user.** Scroll-reveal and count-up animations use a
  single shared `IntersectionObserver` pattern and fully honour
  `prefers-reduced-motion`.
- **Accessibility baked in.** Semantic landmarks (`header`/`main`/`section`/
  `nav`/`footer`), a skip-to-content link, labelled icon buttons, visible focus
  rings, `aria-expanded`/`aria-controls` on the menu, and screen-reader text for
  decorative numbers.
- **SEO foundations.** Rich metadata + Open Graph/Twitter tags, a generated
  `robots.txt` and `sitemap.xml`, and an SVG favicon.

---

## Project structure

```
crackthecampus/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind layers + theme tokens + base styles
│   │   ├── layout.tsx         # Root layout, fonts, metadata, no-flash theme script
│   │   ├── page.tsx           # Assembles the sections in order
│   │   ├── icon.svg           # Favicon
│   │   ├── robots.ts          # SEO: robots.txt
│   │   └── sitemap.ts         # SEO: sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav + mobile drawer
│   │   │   └── Footer.tsx      # Nav columns, contact, socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroVisual.tsx  # Hand-built product-preview mockup
│   │   │   ├── Features.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── CountUp.tsx     # Animated number counter
│   │   │   ├── Courses.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Companies.tsx   # Logo marquee
│   │   │   └── CallToAction.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Icon.tsx        # Inline SVG icon set
│   │       ├── Logo.tsx
│   │       ├── Reveal.tsx      # Scroll-reveal wrapper
│   │       ├── SectionHeading.tsx
│   │       └── ThemeToggle.tsx
│   ├── data/
│   │   ├── content.ts         # Features, stats, testimonials, companies, courses
│   │   └── navigation.ts      # Header + footer links
│   └── lib/
│       └── utils.ts           # cn() classname helper
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Sections

1. **Hero** — headline, value proposition, primary + secondary CTAs and a
   hand-built product-preview visual with floating stat badges.
2. **Companies** — auto-scrolling marquee of hiring partners.
3. **Features** — six core capabilities in a responsive card grid.
4. **Stats** — key success metrics with an animated count-up.
5. **Courses / Test Series** — three preparation tracks, one highlighted.
6. **Testimonials** — student success stories with ratings.
7. **Call to action** — closing conversion band.
8. **Footer** — grouped navigation, contact/helpdesk info and social links.

---

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev          # http://localhost:3000

# production build
npm run build
npm run start
```

> Requires Node 18.18+ (developed on Node 22).

---

## Responsiveness

Designed mobile-first and verified across breakpoints:

- **Mobile** — single-column layout, hamburger menu opening a slide-in drawer.
- **Tablet** — two-column feature/testimonial grids.
- **Desktop** — full multi-column layouts with the hero split into copy + visual.

---

## Assumptions

- This is a **marketing landing page only** — the CTAs (“Start free”, “Log in”,
  “Explore track”) link to in-page anchors as placeholders for real
  authentication/checkout routes that would exist in the full product.
- All metrics, testimonials and student names are **representative sample
  content** for demonstration, not real user data.
- Company names are rendered as plain text wordmarks (not official logo assets)
  to keep the project trademark-safe while still communicating the section's
  intent.
- Contact details (email, phone, address) are placeholders.

---

## Extra features (beyond the brief)

- 🌗 **Dark / light mode** with a no-flash theme script and `localStorage`
  persistence that also respects the OS preference.
- ✨ **Scroll-reveal animations** and an **animated stat counter**, both
  gated behind `prefers-reduced-motion`.
- 🎞️ **Auto-scrolling partner marquee** that pauses on hover.
- 📱 **Accessible mobile drawer** with body-scroll lock and `aria` wiring.
- 🧩 **Hand-built SVG illustration** (hero product preview) — zero image
  payload, perfectly crisp on any display.
- 🔍 **SEO foundations** — metadata, Open Graph/Twitter cards, `robots.txt`,
  `sitemap.xml` and a favicon.
- ♿ **Accessibility** — skip link, semantic landmarks, visible focus states,
  labelled controls and keyboard-friendly navigation.
- ⚡ **Lean bundle** — ~100 kB first-load JS, mostly static pre-rendered HTML.
```
