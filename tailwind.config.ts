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
  darkMode: ["selector"],
  mode: "jit",
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
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tree-light": "url('/images/tree.PNG')",
        "tree-dark": "url('/images/tree-dark.PNG')",
        "grass-light": "url('/images/grass.PNG')",
        "grass-dark": "url('/images/grass-dark.PNG')",
        "floor-light": "url('/images/floor.PNG')",
        "floor-dark": "url('/images/floor-dark.PNG')",
        "door-light": "url('/images/door.PNG')",
        "door-dark": "url('/images/door-dark.PNG')",
        sun: "url('/images/sun.PNG')",
        moon: "url('/images/moon.PNG')",
        cars: "url('/images/cars.PNG')",
      },
      colors: {
        lightAuroraBackground: "#fae6cf",
        "aurora-green": "#cffad0",
        "aurora-blue": "#cfe3fa",
        "aurora-purple": "#facff8",
        "light-text": "#fffbf4",
        "dark-text": "#241d1d",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), addVariablesForColors],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff8eb", // light back (text)

          secondary: "#241d1d", // dark back (in css)

          accent: "#fcf0d1", // light accent (rectangle)

          // neutral: "#767784", // dark accent
          neutral: "#7b7673", // dark accent

          "base-100": "#fff8eb", // light back (background)

          info: "#155e75",

          success: "#22c55e",

          warning: "#f59e0b",

          error: "#ef4444",

          darkBackground: "#241d1d",
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
