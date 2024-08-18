/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: '#000505',
        customdviolet: '#3B3355',
        customlviolet: '#5D5D81',
        customlblue:'#BFCCE0',
        customwhite:'#FEFCFD',
      }
    },
  },
  plugins: [],
}

