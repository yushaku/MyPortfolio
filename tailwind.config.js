/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: 'blob 5s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) ',
          },
          '33%': {
            transform: 'translate(-0px, -50px) ',
          },
          '100%': {
            transform: 'translate(0px, 0px) ',
          },
        },
      },
      colors: {
        bgDark: '#0a192f',
        bgNavDark: '#0f2243',
        bgChildDark: '#1d293d',
        colorGreen: '#64ffda',
        textDark: '#ccd6f6',
        textGray: '#8992b0',
        textLight: '#1d1d1f',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },  
}
