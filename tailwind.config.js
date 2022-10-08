/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "app-color": "#233328",
      "app-blue": "#2066D2",
      "app-grey": "#2F2F2F",
      "app-div-background": "#26262C",
    },
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
        robot: "Roboto, sans-serif",
        SourceSerifPro: "Source Serif Pro, sans-serif",

      },
    },
  },
  plugins: [],
}
