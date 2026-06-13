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
          "linear-gradient(135deg, #004770 0%, #0077b6 42%, #00b4d8 78%, #40e0d0 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(0,119,182,0.04) 0%, rgba(255,255,255,1) 55%)",
        "card-shine":
          "radial-gradient(ellipse at top right, rgba(64,224,208,0.08), transparent 55%)",
        "footer-depth":
          "linear-gradient(180deg, #043a5c 0%, #032f4a 40%, #021f33 100%)",
      },
      boxShadow: {
        premium: "0 4px 24px -4px rgba(0, 71, 112, 0.12), 0 2px 8px -2px rgba(0, 0, 0, 0.06)",
        "premium-hover":
          "0 12px 40px -8px rgba(0, 71, 112, 0.18), 0 4px 16px -4px rgba(0, 0, 0, 0.08)",
        editorial: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -6px rgba(0, 71, 112, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
