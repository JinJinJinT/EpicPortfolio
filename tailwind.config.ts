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
        "tree-light":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/tree.PNG')",
        "tree-dark":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/tree-dark.PNG')",
        "grass-light":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/grass.PNG')",
        "grass-dark":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/grass-dark.PNG')",
        "floor-light":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/floor.PNG')",
        "floor-dark":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/floor-dark.PNG')",
        "door-light":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/door.PNG')",
        "door-dark":
          "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/door-dark.PNG')",
        sun: "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/sun.PNG')",
        moon: "url('https://epic-portfolio-assets.s3.us-west-2.amazonaws.com/moon.PNG')",
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
