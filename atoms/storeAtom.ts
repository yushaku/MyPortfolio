import { atom } from 'recoil'

export const themeMode = atom({
  key: 'theme',
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
