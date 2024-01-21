import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import React from 'react'
import { useRecoilState } from 'recoil'
import { delayShowOf } from '@/utils/mocks/framerMotionEffect'
import { navbarList } from '@/utils/mocks/navbarList'
import { themeMode } from '@/utils/storeAtom'

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
      delay: 0.5,
    },
  },
}

function Navbar({ onToggle, isShow }: { onToggle: () => void; isShow: boolean }) {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeMode)

  return (
    <div
      className={`fixed transition-all duration-300 top-0 ${
        isShow ? 'right-0' : '-right-[150%]'
      } z-50 flex justify-end min-w-full backdrop-blur-sm`}
    >
      <div onClick={() => onToggle()} className="absolute top-12 right-3 dark:text-colorGreen ">
        <CloseIcon className="text-7xl" />
      </div>

      <motion.nav className="navbar">
        <ul className="flex flex-col items-center gap-8">
          {navbarList.map((navItem, i) => {
            return (
              <motion.li
                custom={i}
                variants={delayShowOf}
                initial="hidden"
                animate="visible"
                className="navItem"
                key={navItem.id}
              >
                <p className="dark:text-colorGreen">0{navItem.id}.</p>
                <a href={navItem.link}>{navItem.title}</a>
              </motion.li>
            )
          })}

          <motion.li variants={variantBtn} initial="hidden" animate="visible">
            <button className="button ">resume</button>
          </motion.li>

          <motion.li variants={variantBtn} initial="hidden" animate="visible">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="button w-[93px]">
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
