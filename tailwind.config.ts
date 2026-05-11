import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F8F8F6",
          50: "#FBFBFA",
          100: "#F8F8F6",
          200: "#EFEFEC",
          300: "#E2E2DE",
        },
        navy: {
          DEFAULT: "#0F1A2E",
          950: "#0A1322",
          900: "#0F1A2E",
          800: "#162241",
          700: "#1B2A4A",
          600: "#243663",
          500: "#34467A",
        },
        ember: {
          DEFAULT: "#D14A2C",
          700: "#A93A22",
          600: "#BC3F26",
          500: "#D14A2C",
          400: "#E26749",
        },
        graphite: {
          DEFAULT: "#2A2A2A",
          900: "#1A1A1A",
          800: "#2A2A2A",
          700: "#3D3D3D",
          500: "#6B6B6B",
          400: "#8C8C8C",
          300: "#B5B5B5",
          200: "#D6D6D6",
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Manrope"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest: "0.22em",
        ultra: "0.32em",
      },
      boxShadow: {
        plate: "0 1px 0 rgba(15,26,46,0.08), 0 30px 60px -40px rgba(15,26,46,0.45)",
        sharp: "0 0 0 1px rgba(15,26,46,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
