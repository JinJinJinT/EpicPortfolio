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
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tree-light": "url('/public/light/tree.png')",
        "tree-dark": "url('/public/dark/tree-dark.png')",
        "grass-light": "url('/public/light/grass.png')",
        "grass-dark": "url('/public/dark/grass-dark.png')",
        "floor-light": "url('/public/light/floor.png')",
        "floor-dark": "url('/public/dark/floor-dark.png')",
        "door-light": "url('/public/light/door.png')",
        "door-dark": "url('/public/dark/door-dark.png')",
        sun: "url('/public/light/sun.png')",
        moon: "url('/public/dark/moon.png')",
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
          primary: "#fffbf4", // light back

          secondary: "#241d1d", // dark back (in css)

          accent: "#fcf0d1", // light accent (rectangle)

          // neutral: "#767784", // dark accent
          neutral: "#7b7673", // dark accent

          "base-100": "#fffbf4", // light back

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
