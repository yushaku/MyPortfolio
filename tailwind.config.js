/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation:{
        blob: "blob 5s infinite"
      },
      keyframes:{
        blob:{
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(-30px, -50px) scale(1.2)"
          },
          "66%":{
            transform: "translate(20px, -40px) scale(1.1)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      },
      colors: {
        bgDark: '#0a192f',
        bgNavDark: '#0f2243',
        bgChildDark: '#1d293d',
        colorGreen: '#64ffda',
        textDark: '#ccd6f6',
        textGray: '#8992b0',
        textLight: '#1d1d1f',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}
