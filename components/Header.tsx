import React, { useEffect, useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useRecoilState } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import Image from 'next/image'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: -10,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}
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
          <motion.a
            initial='hidden'
            animate='visible'
            variants={variants}
            href='#'
            className='text-[24px] font-semibold  
            dark:text-colorGreen flex items-center justify-center'
          >
            <Image src='/logo.png' width={35} height={35} className='cursor-pointer object-contain mt-2' />
            <span className=' pl-3'>Yushaku</span>
          </motion.a>
        </h1>
      </div>
      <div>
        <ul className=' hidden sm:flex sm:items-center sm:gap-8 sm:text-lg '>
          <motion.li initial='hidden' animate='visible' variants={variants}>
            <span className='dark:text-colorGreen'>01.</span>
            <a className='hover:text-colorGreen' href='#About'>
              About
            </a>
          </motion.li>
          <motion.li initial='hidden' animate='visible' variants={variants}>
            <span className='dark:text-colorGreen'>02.</span>
            <a className='hover:text-colorGreen' href='#Experience'>
              Experience
            </a>
          </motion.li>
          <motion.li initial='hidden' animate='visible' variants={variants}>
            <span className='dark:text-colorGreen'>03.</span>
            <a className='hover:text-colorGreen' href='#Work'>
              Work
            </a>
          </motion.li>
          <motion.li initial='hidden' animate='visible' variants={variants}>
            <span className='dark:text-colorGreen'>04.</span>
            <a className='hover:text-colorGreen' href='#Contact'>
              Contact
            </a>
          </motion.li>
        </ul>
      </div>

      <motion.div className='hidden sm:block' initial='hidden' animate='visible' variants={variants}>
        <button className='dark:text-colorGreen' onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        className='sm:hidden z-100'
        onClick={() => setIsShowNavbar(!isShowNavbar)}
      >
        <DensityMediumIcon className='dark:text-colorGreen text-3xl' />
      </motion.div>
    </header>
  )
}

export default Header
