import { atom } from 'recoil'

export const themeMode = atom({
  key: 'darkMode',
  default: true,
})

export const showNavbar = atom({
  key: 'navbar',
  default: false,
})
