import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        auroraDark: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightAuroraBackground: "#fae6cf",
        "aurora-green": "#cffad0",
        "aurora-blue": "#cfe3fa",
        "aurora-purple": "#facff8",
      },
    },
  },
  plugins: [require("daisyui"), addVariablesForColors],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d8b4fe",

          secondary: "#fed7aa",

          accent: "#fde68a",

          neutral: "#78716c",

          "base-100": "#e0e7ff",

          info: "#155e75",

          success: "#22c55e",

          warning: "#f59e0b",

          error: "#ef4444",
        },
      },
      {
        mytheme2: {
          primary: "#ed959f",

          secondary: "#edbb57",

          accent: "#e0d623",

          neutral: "#241825",

          "base-100": "#313149",

          info: "#6e80d4",

          success: "#15745e",

          warning: "#f7b926",

          error: "#eb4d47",
        },
      },
    ],
  },
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
