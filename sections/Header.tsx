import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useRecoilState } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { listVariants, delayShowOf, showOut } from '../mocks/framerMotionEffect'
import { navbarList } from '../mocks/navbarList'

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)
  const [isShowNavbar, setIsShowNavbar] = useRecoilState(showNavbar)

  return (
    <header>
      <div>
        <h1>
          <motion.a
            initial="hidden"
            animate="visible"
            variants={showOut}
            href="#"
            className="text-[24px] font-semibold dark:text-colorGreen flex items-center justify-center"
          >
            <Image src="/logo.png" width={35} height={35} className="object-contain mt-2 cursor-pointer" />
            <span className="pl-3 ">Yushaku</span>
          </motion.a>
        </h1>
      </div>

      <div>
        <motion.ul
          className="hidden sm:flex sm:items-center sm:justify-center sm:gap-8 sm:text-lg"
          variants={listVariants}
        >
          {navbarList.map((listItem, i) => (
            <motion.li custom={i} initial="hidden" animate="visible" variants={delayShowOf}>
              <span className="dark:text-colorGreen">0{listItem.id}.</span>
              <a className="hover:text-colorGreen" href="#Contact">
                {listItem.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div className="hidden sm:block" initial="hidden" animate="visible" variants={showOut}>
        <button className="dark:text-colorGreen" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={showOut}
        className="sm:hidden z-100"
        onClick={() => setIsShowNavbar(!isShowNavbar)}
      >
        <DensityMediumIcon className="text-3xl dark:text-colorGreen" />
      </motion.div>
    </header>
  )
}

export default Header
