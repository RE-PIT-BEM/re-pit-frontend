/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        uhuy: "#305CDE",
        home: "#131416",
        sukses: "#7FDF4B",
        warning: "#EEBA56",
        error: "#E5342F",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
};
