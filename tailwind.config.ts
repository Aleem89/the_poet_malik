import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-black": "var(--color-off-black)",
        "dark-gray": "var(--color-dark-gray)",
        "medium-gray": "var(--color-medium-gray)",
        "light-gray": "var(--color-light-gray)",
        "accent-gold": "var(--color-accent-gold)",
        "soft-white": "var(--color-soft-white)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
};

export default config;
