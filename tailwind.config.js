/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: '#0f172b',
        bgNavDark: '#0f2243',
        bgChildDark: '#1d293d',
        colorGreen: '#64ffda',
        textDark: '#ccd6f6',
        textGray: '#8992b0',
        textLight: '#1d1d1f',
      }
    },
  },
  plugins: [],
}
