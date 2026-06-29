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
          50: "#eef4ff",
          100: "#dae5ff",
          200: "#bcd0ff",
          300: "#8eb1ff",
          400: "#5887ff",
          500: "#2f5fff",
          600: "#1640f5",
          700: "#102fe1",
          800: "#1429b6",
          900: "#172a8f",
          950: "#101a57",
        },
        accent: {
          400: "#34e0c3",
          500: "#10c9a8",
          600: "#06a98c",
        },
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(16 26 87 / 0.08), 0 12px 32px -8px rgb(16 26 87 / 0.12)",
        glow: "0 0 0 1px rgb(47 95 255 / 0.12), 0 18px 50px -12px rgb(47 95 255 / 0.45)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgb(16 26 87 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(16 26 87 / 0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
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
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.21, 0.62, 0.31, 1) both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 1.6s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
