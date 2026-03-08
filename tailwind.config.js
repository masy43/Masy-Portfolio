/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        surface: "var(--color-surface)",
        "bg-main": "var(--color-bg)",
        "bg-alt": "var(--color-bg-alt)",
        "text-main": "var(--color-text-main)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
      },
      fontFamily: {
        main: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.4)",
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.2)",
            boxShadow: "0 0 0 6px rgba(34, 197, 94, 0)",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "orb-float-1": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -30px) scale(1.1)" },
          "100%": { transform: "translate(-20px, 20px) scale(1.05)" },
        },
        "orb-float-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, -20px) scale(1.08)" },
          "100%": { transform: "translate(25px, 15px) scale(1.12)" },
        },
        "orb-float-3": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, 30px) scale(1.15)" },
          "100%": { transform: "translate(-15px, -25px) scale(1)" },
        },
        "testi-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "badge-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(var(--color-primary-rgb), 0.3)",
          },
          "50%": { boxShadow: "0 0 0 8px rgba(var(--color-primary-rgb), 0)" },
        },
        "avail-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 3px rgba(74, 222, 128, 0.2)" },
          "50%": { boxShadow: "0 0 0 8px rgba(74, 222, 128, 0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "orb-1": "orb-float-1 20s ease-in-out infinite alternate",
        "orb-2": "orb-float-2 18s ease-in-out infinite alternate",
        "orb-3": "orb-float-3 22s ease-in-out infinite alternate",
        "testi-marquee": "testi-marquee 35s linear infinite",
        "badge-pulse": "badge-pulse 2.5s ease-in-out infinite",
        "avail-pulse": "avail-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
