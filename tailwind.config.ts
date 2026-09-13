import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003580",
          dark: "#002458",
        },
        secondary: "#2a77bd",
        accent: {
          green: "#0da84c",
          red: "#f02c30",
        },
        ink: "#060709",
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          400: "#94a3b8",
          600: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "1.1", fontWeight: "700" }],
        "h1-lg": ["56px", { lineHeight: "1.08", fontWeight: "700" }],
        h2: ["28px", { lineHeight: "1.15", fontWeight: "700" }],
        "h2-lg": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        h3: ["22px", { lineHeight: "1.25", fontWeight: "600" }],
        "h3-lg": ["28px", { lineHeight: "1.25", fontWeight: "600" }],
        body: ["15px", { lineHeight: "1.6" }],
        "body-lg": ["16px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        card: "20px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06)",
        "card-hover": "0 16px 40px -12px rgba(15,23,42,0.16)",
      },
      spacing: {
        "section-y": "96px",
        "section-y-mobile": "64px",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(10px)" },
        },
        "bounce-chevron": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(8px)", opacity: "0.6" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 12s ease infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "bounce-chevron": "bounce-chevron 1.8s ease-in-out infinite",
      },
      backgroundSize: {
        "gradient-lg": "200% 200%",
      },
    },
  },
  plugins: [],
};

export default config;
