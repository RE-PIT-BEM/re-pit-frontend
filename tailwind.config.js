/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        uhuy: "#305CDE",
        home: "#131416",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],
};
