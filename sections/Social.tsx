import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import BookIcon from '@mui/icons-material/Book'
import EmailIcon from '@mui/icons-material/Email'
import { motion } from 'framer-motion'
import { socialVariant } from '../mocks/framerMotionEffect'

function Social() {
  return (
    <div className="hidden md:block dark:text-textGrayDark">
      <div className="right text-2xl fixed bottom-[10px] left-[1.8rem]">
        <ul className="flex flex-col items-center justify-center gap-8">
          <motion.li initial="hidden" animate="visible" variants={socialVariant}>
            <a
              target="_blank"
              className="dark:hover:text-colorGreen hover:text-colorPrimary"
              href="https://github.com/yushaku"
              rel="noreferrer"
            >
              <GitHubIcon className="text-3xl transition-all duration-700 hover:-translate-y-2" />
            </a>
          </motion.li>
          <motion.li initial="hidden" animate="visible" variants={socialVariant}>
            <a
              target="_blank"
              className="dark:hover:text-colorGreen hover:text-colorPrimary "
              href="https://www.linkedin.com/in/levanson180200/"
              rel="noreferrer"
            >
              <LinkedInIcon className="text-3xl transition-all duration-700 hover:-translate-y-2" />
            </a>
          </motion.li>
          <motion.li initial="hidden" animate="visible" variants={socialVariant}>
            <a target="_blank" className="dark:hover:text-colorGreen hover:text-colorPrimary" href="">
              <BookIcon className="text-3xl transition-all duration-700 hover:-translate-y-2" />
            </a>
          </motion.li>
          <li className="w-[2px] h-[100px] dark:bg-textGrayDark bg-textGrayLight"></li>
        </ul>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={socialVariant}
        className="left flex flex-col gap-4 items-center w-2 fixed bottom-[10px] right-8 dark:hover:text-colorGreen hover:text-colorPrimary hover:text-md"
      >
        <span className="rotate-90 -translate-y-[90px] tracking-wide text-sm">levanson180200@gmail.com</span>
        <EmailIcon className="rotate-90" />
        <span className="w-[2px] h-[100px] bg-textGrayLight dark:bg-textGrayDark"></span>
      </motion.div>
    </div>
  )
}

export default Social
