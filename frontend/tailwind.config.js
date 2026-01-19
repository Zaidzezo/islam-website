/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-gold': '#c9a961',
        'accent-gold-light': '#d4af37',
        'accent-gold-dark': '#b8954a',
        'accent-brown': '#8b6914',
        'accent-green': '#2d5016',
      },
      fontFamily: {
        'arabic': ['Amiri', 'Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
}