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
        border: {
          primary: "var(--border-primary)",
        },
        background: {
          primary: "var(--background-primary)",
        },
        foreground: {
          primary: "var(--foreground-primary)",
        },
        brand: {
          blue: "var(--brand-blue)",
        },
      },
      boxShadow: {
        "blue-shadow": "var(--blue-shadow)",
      },
    },
  },
  plugins: [],
};
export default config;
