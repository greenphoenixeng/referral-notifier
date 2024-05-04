import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFB52C",
        "primary-blue": "#00215E",
        border: "#d4d4d8",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        input:
          "0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),0px 0px 1px rgba(0, 0, 0, 0.04)",
        box: "rgba(34, 41, 47, 0.1) 0px 4px 24px 0px",
        sidebar: "rgba(47, 43, 61, 0.14) 0px 2px 6px 0px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
