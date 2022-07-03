import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import { useRecoilState } from 'recoil'

function Navbar() {
  const [isShowNavbar, setIsShowNavbar] = useRecoilState(showNavbar)
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)

  return (
    <div
      className='fixed top-0 right-0 z-50
      min-w-full backdrop-blur-sm
      flex justify-end
      '
    >
      <div className='absolute top-4 left-3 dark:text-colorGreen text-[24px] font-semibold'>
        <h1>Yushaku</h1>
      </div>
      <div onClick={() => setIsShowNavbar(!isShowNavbar)} className='absolute top-3 right-3 dark:text-colorGreen '>
        <CloseIcon className='text-4xl' />
      </div>
      <nav
        className='min-h-screen w-[80%]
        justify-center flex items-center
      dark:bg-bgNavDark dark:text-textDark
`      text-xl
      '
      >
        <ul className='flex flex-col items-center  gap-8'>
          <li className='navItem'>
            <p className='dark:text-colorGreen'>01.</p>
            <a href='#'>About</a>
          </li>
          <li className='navItem'>
            <p className='dark:text-colorGreen'>02.</p>
            <a href=''>Experience</a>
          </li>
          <li className='navItem'>
            <p className='dark:text-colorGreen'>03.</p>
            <a href=''>Work</a>
          </li>
          <li className='navItem'>
            <p className='dark:text-colorGreen'>04.</p>
            <a href=''>Contact</a>
          </li>
          <li>
            <button className='button '>resume</button>
          </li>
          <li>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className='button w-[93px]'>
              {isDarkMode ? 'Dark' : 'Light'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
