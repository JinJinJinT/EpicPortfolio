import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
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
export default config;
