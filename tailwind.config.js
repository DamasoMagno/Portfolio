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
        section: "#302F3D",
        backgroundSecondary: "#837E9F"
      },
      boxShadow: {
        section: "2px 2px 2px 1px rgba(0, 0, 0, .2);"
      },
      borderColor: {
        "ghost-900": "rgb(131, 126, 159)",
        "ghost-500": "rgba(131, 126, 159, .5)"
      },
      gridTemplateColumns: {
        layout: "350px 1fr"
      },
      textColor: {
        primary: "#837E9F"
      },
      fontFamily: {
        body: ['Merriweather Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}