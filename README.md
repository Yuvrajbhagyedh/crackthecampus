# CrackTheCampus — Landing Page

A marketing landing page for **CrackTheCampus**, a platform that helps students
prepare for placements, internships and competitive aptitude tests. Built from
scratch with Next.js, Tailwind CSS and Framer Motion. No UI kits, no design
templates, no cloned references.

**Live demo:** _add your deployment URL here (Vercel / Netlify)_

---

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | Next.js 14 (App Router, React Server Components)     |
| Language       | TypeScript (strict mode)                            |
| Styling        | Tailwind CSS 3 with a small custom design system     |
| Animation      | Framer Motion                                       |
| Fonts          | `next/font` (Inter for body, Sora for display)       |
| Icons / art    | Hand-built inline SVG (no icon library, no images)   |

---

## Technical approach

The page is composed of **isolated, reusable components** grouped by
responsibility:

- **`ui/`** — design-system primitives (`MotionButton`, `Icon`, `Logo`,
  `RollingText`, `Reveal`, `SectionHeading`, `ThemeToggle`, `AuroraOrbs`,
  `Skeleton`). These have no business knowledge and are reused everywhere.
- **`sections/`** — one component per landing-page section. Each section reads
  its content from **`data/`**, so copy and layout stay decoupled and there is
  zero hard-coded duplication in the markup.
- **`layout/`** — the `Navbar` (scroll-aware, with an accessible mobile drawer)
  and the `Footer`.
- **`data/`** — all marketing copy (features, stats, testimonials, companies,
  courses, navigation). Editing the page is a content change, not a code change.
- **`lib/`** — `utils.ts` (`cn` class combiner) and `motion.ts` (shared Framer
  Motion presets so animation feel stays consistent sitewide).

Design decisions worth calling out:

- **White-first theme.** The palette is white-dominant with near-black ink and
  vivid indigo→violet→fuchsia→cyan accents. Light is the default; dark mode is
  opt-in via the toggle. Colours are CSS-variable tokens in `globals.css`, and
  an inline script in `layout.tsx` applies the saved theme **before paint** to
  avoid a flash of the wrong colour scheme.
- **Motion with restraint.** Framer Motion powers staggered scroll reveals, a
  rolling-word headline, an animated stat counter, a 3D-tilt hero card, a
  partner marquee and drifting aurora orbs — all gated behind
  `prefers-reduced-motion`, which short-circuits to static markup.
- **Performance first.** Server Components by default; only genuinely
  interactive pieces are client components. First-load JS is ~100 kB and there
  are no raster image requests — every illustration is inline SVG/markup.
- **Loading skeletons.** `app/loading.tsx` renders a shimmering skeleton of the
  navbar + hero instantly while the route streams in.
- **Accessibility baked in.** Semantic landmarks (`header`/`main`/`section`/
  `nav`/`footer`), a skip-to-content link, labelled icon buttons, visible focus
  rings, `aria-expanded`/`aria-controls` on the menu, `aria-live` on the rolling
  headline, and screen-reader text for animated numbers.
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
│   │   ├── loading.tsx        # Route-level skeleton loading UI
│   │   ├── page.tsx           # Assembles the sections in order
│   │   ├── icon.svg           # Favicon
│   │   ├── robots.ts          # SEO: robots.txt
│   │   └── sitemap.ts         # SEO: sitemap.xml
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav + animated mobile drawer
│   │   │   └── Footer.tsx      # Nav columns, contact, socials
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroVisual.tsx  # Hand-built product-preview card
│   │   │   ├── Features.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── CountUp.tsx     # Animated number counter
│   │   │   ├── Courses.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Companies.tsx   # Logo marquee
│   │   │   └── CallToAction.tsx
│   │   └── ui/
│   │       ├── AuroraOrbs.tsx  # Ambient animated background
│   │       ├── Icon.tsx        # Inline SVG icon set
│   │       ├── Logo.tsx
│   │       ├── MotionButton.tsx
│   │       ├── Reveal.tsx      # Scroll-reveal wrapper
│   │       ├── RollingText.tsx # Vertical rolling-word carousel
│   │       ├── SectionHeading.tsx
│   │       ├── Skeleton.tsx    # Shimmer placeholder
│   │       └── ThemeToggle.tsx
│   ├── data/
│   │   ├── content.ts         # Features, stats, testimonials, companies, courses
│   │   └── navigation.ts      # Header + footer links
│   └── lib/
│       ├── motion.ts          # Shared Framer Motion presets
│       └── utils.ts           # cn() classname helper
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

---

## Sections

1. **Hero** — rolling-word headline, value proposition, primary + secondary
   CTAs, and a hand-built product-preview card with a radial score ring, a
   weekly-scores chart and skill bars.
2. **Companies** — auto-scrolling marquee of hiring partners.
3. **Features** — six core capabilities in a responsive card grid.
4. **Stats** — key success metrics with an animated count-up on a near-black band.
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

- **Mobile** — single-column layout, hamburger menu opening an animated slide-in
  drawer with a dimmed backdrop and body-scroll lock.
- **Tablet** — two-column feature/testimonial grids, full navbar.
- **Desktop** — hero splits into copy + visual; three-column course grid.

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

- **Framer Motion micro-interactions** — staggered scroll reveals, a 3D-tilt
  hero card, hover/tap spring buttons with a shimmer sweep, animated gradient
  borders and an animated stat counter.
- **Rolling-word headline** — a vertical word carousel in the hero.
- **Dark / light mode** — white-first, with a no-flash theme script and
  `localStorage` persistence; dark is opt-in.
- **Loading skeletons** — route-level shimmer skeleton via `app/loading.tsx`.
- **Auto-scrolling partner marquee** and an ambient aurora-orb background.
- **Accessible mobile drawer** with body-scroll lock and `aria` wiring.
- **Hand-built SVG illustration** (the hero product preview) — zero image payload.
- **SEO foundations** — metadata, Open Graph/Twitter cards, `robots.txt`,
  `sitemap.xml` and a favicon.
- **Accessibility** — skip link, semantic landmarks, visible focus states,
  labelled controls, an `aria-live` headline and keyboard-friendly navigation.
- **Reduced-motion aware** — every animation respects `prefers-reduced-motion`.
```
