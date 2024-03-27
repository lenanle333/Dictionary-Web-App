import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lora: ["Lora", "serif"],
      inconsolata: ["Inconsolata", "mono"],
    },

    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        primary: {
          100: "#A445ED",
          500: "#d29af7",
        },
        secondary: "#E8D0FB",
        err: "#FF5252",
        white: "#FDFAFF",
        dark: {
          100: "#050505",
          200: "#202020",
          300: "#373737",
          400: "#515151",
          500: "#6b6b6b",
          600: "#878787",
          700: "#e9e9e9",
        },
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
  darkMode: ["class"],
};
export default config;
