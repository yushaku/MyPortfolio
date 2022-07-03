import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import { useRecoilState } from 'recoil'
import { motion } from 'framer-motion'
import { navbarList } from '../lib/navbarList'

const variantsLi = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}

const variantBtn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
}

function Navbar() {
  const [isShowNavbar, setIsShowNavbar] = useRecoilState(showNavbar)
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)

  return (
    <div
      className='fixed top-0 right-0 z-50
      min-w-full backdrop-blur-sm
      flex justify-end'
    >
      <div className='absolute top-4 left-3 dark:text-colorGreen text-[24px] font-semibold'>
        <h1>Yushaku</h1>
      </div>
      <div
        onClick={() => setIsShowNavbar(!isShowNavbar)}
        className='absolute top-3 right-3 dark:text-colorGreen '
      >
        <CloseIcon className='text-4xl' />
      </div>

      <motion.nav className='navbar'>
        <ul className='flex flex-col items-center  gap-8'>
          {navbarList.map((navItem) => {
            return (
              <motion.li
                variants={variantsLi}
                initial='hidden'
                animate='visible'
                className='navItem'
                key={navItem.id}
              >
                <p className='dark:text-colorGreen'>0{navItem.id}.</p>
                <a href={navItem.link}>{navItem.title}</a>
              </motion.li>
            )
          })}

          <motion.li variants={variantBtn} initial='hidden' animate='visible'>
            <button className='button '>resume</button>
          </motion.li>

          <motion.li variants={variantBtn} initial='hidden' animate='visible'>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className='button w-[93px]'>
              {isDarkMode ? 'Dark' : 'Light'}
            </button>
          </motion.li>
        </ul>
      </motion.nav>
      <motion.div layout />
    </div>
  )
}

export default Navbar
