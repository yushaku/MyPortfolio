/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: 'blob 5s infinite',
        spinAround: 'spinAround 7s infinite linear ',
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
        spinAround: {
          '0%': {
            transform: 'rotate(0deg) ',
          },
          '100%': {
            transform: 'rotate(360deg) ',
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
    backgroundImage: {
      'team-shape': "url('./public/team-shape.png')",
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
}
