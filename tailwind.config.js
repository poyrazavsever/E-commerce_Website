/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT:"#FAF8F1",
          100: "#C8C6C1",
          200:"#969591",
        },
        secondary : {
          DEFAULT: "#FAEAB1",
          100:"#C8BB8E",
          200:"#968C6A",
        },
        tert: {
          DEFAULT: "#E5BA73",
          100:"#B7955C",
          200:"#897045"
        },
        fourth: {
          DEFAULT : "#C58940",
          100: "#9E6E33",
          200: "#765226",
        }
      },
    },
  },
  plugins: [],
}
