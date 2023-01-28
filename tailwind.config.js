/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "#22212C",
        backgroundSection: "#302F3D",
        backgroundTec: "#CB92B1"
      },
      gridTemplateColumns: {
        r: "300px 1fr"
      },
      textColor: {
        main: "#837E9F"
      },
      fontFamily: {
        body: ['Merriweather Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}