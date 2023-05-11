/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        budgetista: {
          primary: "#f9a8d4",
          secondary: "#fbcfe8",
          accent: "#fce7f3",
          neutral: "#111827",
          "base-100": "#FFFFFF",
          info: "#a5f3fc",
          success: "#a7f3d0",
          warning: "#fcd34d",
          error: "#f87171",
        },
      },
    ],
  },
};
