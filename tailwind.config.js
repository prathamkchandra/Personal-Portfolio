/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',   // all files in src
    './pages/**/*.{js,ts,jsx,tsx}', // if you ever add non-src pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
