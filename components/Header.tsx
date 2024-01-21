import DarkModeIcon from '@mui/icons-material/DarkMode'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import LightModeIcon from '@mui/icons-material/LightMode'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import Navbar from './Navbar'
import { listVariants, delayShowOf, showOut } from '@/utils/mocks/framerMotionEffect'
import { navbarList } from '@/utils/mocks/navbarList'
import { themeMode } from '@/utils/storeAtom'

function Topbar() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)
  const [isShow, setIsShow] = useState(false)

  return (
    <header className="container px-4 md:px-0">
      <div>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={showOut}
          href="#"
          className="text-[24px] font-semibold dark:text-colorGreen text-colorPrimary flex items-center justify-center"
        >
          <Image
            src="/logo.png"
            alt="logo yushaku"
            width={35}
            height={35}
            className="object-contain mt-2 cursor-pointer"
            loading="lazy"
          />
          <span className="pl-3 green_text_gradient">Yushaku</span>
        </motion.a>
      </div>

      <motion.ul
        className="hidden sm:flex sm:items-center sm:justify-center sm:gap-8 sm:text-lg"
        variants={listVariants}
      >
        {navbarList.map((listItem, i) => (
          <motion.li
            key={listItem.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={delayShowOf}
            className="cursor-pointer"
          >
            <a href={`#${listItem.link}`}>
              <>
                <span className="dark:text-colorGreen text-colorPrimary">0{listItem.id}.</span>
                <span className="dark:hover:text-colorGreen hover:text-colorPrimary">{listItem.title}</span>
              </>
            </a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div className="hidden sm:block" initial="hidden" animate="visible" variants={showOut}>
        <button className="dark:text-colorGreen text-colorPrimary" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={showOut}
        className="sm:hidden z-100"
        onClick={() => setIsShow(!isShow)}
      >
        <DensityMediumIcon className="text-4xl dark:text-colorGreen text-colorPrimary" />
      </motion.div>

      <Navbar isShow={isShow} onToggle={() => setIsShow(!isShow)} />
    </header>
  )
}

export default Topbar
