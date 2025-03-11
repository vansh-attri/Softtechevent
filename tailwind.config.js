/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-color': '#344673',
      'secondary-color': '#00a1d4',
      'tertiary-color': '#0c8cc4',
      'white-color': '#fff',
      'black-color': '#000',
      'header-dark': 'rgb(43 43 44)',
      'light-white': '#e0e9ff',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
}

)