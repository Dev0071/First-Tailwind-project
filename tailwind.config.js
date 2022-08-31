/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    fontFamily: {
      poppins: ["Poppin, sans-serif"],
    },
    extend: {
      colors: {
        "custom-blue": "#00BAF",
        "cutom-purple": "#6336FA",
      }
    },
  },
  plugins: [],
}
