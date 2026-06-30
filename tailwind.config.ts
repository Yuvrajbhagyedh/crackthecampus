import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        fuchsia: {
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
        },
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(8 10 20 / 0.08), 0 16px 40px -12px rgb(8 10 20 / 0.14)",
        glow: "0 14px 40px -16px rgb(79 70 229 / 0.5)",
        neon: "0 0 0 1px rgb(99 102 241 / 0.15), 0 8px 32px -8px rgb(99 102 241 / 0.35), 0 0 60px -20px rgb(168 85 247 / 0.25)",
        "neon-lg": "0 0 0 1px rgb(99 102 241 / 0.2), 0 16px 48px -12px rgb(99 102 241 / 0.45), 0 0 80px -24px rgb(217 70 239 / 0.3)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgb(8 10 20 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(8 10 20 / 0.045) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.21, 0.62, 0.31, 1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 1.6s infinite",
        "gradient-shift": "gradient-shift 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
