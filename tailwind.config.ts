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
        caribbean: {
          50: "#e6f7fb",
          100: "#b3e8f4",
          200: "#80d9ed",
          300: "#4dcae6",
          400: "#26bddf",
          500: "#00b4d8",
          600: "#0096b8",
          700: "#0077b6",
          800: "#005f92",
          900: "#004770",
        },
        turquoise: {
          DEFAULT: "#40e0d0",
          light: "#7ee8dc",
          dark: "#2db8aa",
        },
        tropical: {
          coral: "#ff6b6b",
          mango: "#ffa94d",
          palm: "#2d6a4f",
          sand: "#f4e4c1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #40e0d0 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(0,119,182,0.05) 0%, rgba(255,255,255,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
