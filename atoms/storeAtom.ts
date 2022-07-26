import { atom } from 'recoil'

export const themeMode = atom({
  key: 'darkMode',
  default: true,
})

export const showNavbar = atom({
  key: 'navbar',
  default: false,
})

export const showFormContact = atom({
  key: 'formContact',
  default: false,
})
