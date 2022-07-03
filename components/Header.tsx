import React, { useEffect, useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useRecoilState } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import Image from 'next/image'

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)
  const [isShowNavbar, setIsShowNavbar] = useRecoilState(showNavbar)

  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header>
      <div>
        <h1>
          <a
            href='#'
            className='text-[24px] font-semibold text-textLight dark:text-colorGreen flex items-center justify-center'
          >
            <Image src='/logo.png' width={35} height={35} className='cursor-pointer object-contain mt-2' />
            <span className=' pl-3'>Yushaku</span>
          </a>
        </h1>
      </div>
      <div>
        <ul className=' hidden sm:flex sm:items-center sm:gap-4 '>
          <li>
            <span className='dark:text-colorGreen'>01.</span>
            <a className='hover:text-colorGreen' href='#About'>
              About
            </a>
          </li>
          <li className='hover:text-[color:var(--color-green)]'>
            <span className='dark:text-colorGreen'>02.</span>
            <a className='hover:text-colorGreen' href='#Experience'>
              Experience
            </a>
          </li>
          <li className='hover:text-[color:var(--color-green)]'>
            <span className='dark:text-colorGreen'>03.</span>
            <a className='hover:text-colorGreen' href='#Work'>
              Work
            </a>
          </li>
          <li className='hover:text-[color:var(--color-green)]'>
            <span className='dark:text-colorGreen'>04.</span>
            <a className='hover:text-colorGreen' href='#Contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='hidden sm:block'>
        <button className='dark:text-colorGreen' onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
      <div className='sm:hidden z-100' onClick={() => setIsShowNavbar(!isShowNavbar)}>
        <DensityMediumIcon className='dark:text-colorGreen text-3xl' />
      </div>
      {/* <div className='navActon sm:hidden flex flex-col gap-[5px] items-end dark:text-[color:var(--color-green)]'>
        <p className='iconNavbar w-8'></p>
        <p className='iconNavbar w-6'></p>
        <p className='iconNavbar w-4'></p>
      </div> */}
    </header>
  )
}

export default Header
