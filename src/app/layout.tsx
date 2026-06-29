import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const siteUrl = "https://crackthecampus.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CrackTheCampus — Crack placements, internships & aptitude tests",
    template: "%s · CrackTheCampus",
  },
  description:
    "CrackTheCampus helps students crack placements, internships and competitive aptitude tests with adaptive mock tests, company-specific tracks, coding practice and mentor-led prep.",
  keywords: [
    "placement preparation",
    "aptitude test practice",
    "campus placements",
    "internship preparation",
    "coding practice",
    "mock tests",
  ],
  authors: [{ name: "CrackTheCampus" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "CrackTheCampus — Crack placements, internships & aptitude tests",
    description:
      "Adaptive mock tests, company-specific tracks and mentor-led prep that get students placement-ready.",
    siteName: "CrackTheCampus",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrackTheCampus",
    description:
      "Crack placements, internships and aptitude tests with adaptive prep built for students.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080b1c" },
  ],
};

// Set the theme before paint to avoid a flash of the wrong colour scheme.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('ctc-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
