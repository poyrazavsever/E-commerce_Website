/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '623px',
      md: '1024px',
    },
    extend: {
      screens : {
        "mobile" : {"max" : "623px", "min" : "0px"},
        "desktop" : {"min": "624px"}
      },

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
      
      keyframes : {
        card: {
          '0%' : {opacity:0},
          '100%': { opacity:1 }
        },
      },

      animation: {
        card : 'card .3s ease-in forwards',
      },
    },
  },
  plugins: [],
}
