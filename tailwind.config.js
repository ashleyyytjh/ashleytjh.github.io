/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
      },

      colors: {
        "primary" : "#4E565A",
      }
    },
  },
  plugins: [
  ],
}

