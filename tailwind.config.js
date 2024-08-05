/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      colors: {
        background: {
          DEFAULT: '#f8f8f8',
        },
      },
    },
  },
  plugins: [],
}
