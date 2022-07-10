import React from 'react'
import { motion } from 'framer-motion'
// import Spline from '@splinetool/react-spline'

const variants = {
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
function Intro() {
  return (
    <div
      className='h-[100vh] w-[100vw]
      pl-[25px] sm:pl-[50px] md:pl-[100px] lg:pl-[250px] mt-[8vh] 
      md:-translate-y-[40px]
      flex flex-col items-center justify-center md:flex-row'
    >
      <div className='max-w-50%'>
        <motion.h3
          variants={{
            ...variants,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.2,
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='dark:text-colorGreen text-[17.6px]'
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          variants={{
            ...variants,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.3,
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className=' text-[45px] pb-2 sm:text-[50px] md:text-[80px] lg:text-[90px] font-semibold leading-normal'
        >
          Yushaku.
        </motion.h1>
        <motion.h2
          variants={{
            ...variants,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.5,
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className=' dark:text-textGray text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-semibold  leading-[1] pb-6'
        >
          I'm a full-stack developer.
        </motion.h2>
        <motion.p
          variants={{
            ...variants,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.7,
              },
            },
          }}
          initial='hidden'
          animate='visible'
          className='dark:text-textGray pr-[80px] text-[20px] max-w-[800px] mb-[5.35rem]'
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital
          experiences. Currently, I'm focused on building accessible, human-centered products at
          <a
            href='https://zinza.com.vn/vi/'
            className='dark:text-colorGreen hover:decoration-solid hover:underline pl-2 transition-all duration-700'
          >
            Zinza technology.
          </a>
        </motion.p>
        <motion.a
          variants={{
            ...variants,
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 1,
              },
            },
          }}
          initial='hidden'
          animate='visible'
          href='#'
          className='button y-10 px-10 '
        >
          check out my resume!
        </motion.a>
      </div>
      <div className=' hidden lg:block animate-blob duration-300'>
        <img src="/21.png" alt="" />
        {/* <Spline scene='https://prod.spline.design/DMK2wN12tqEY2-Wb/scene.splinecode' /> */}
      </div>
    </div>
  )
}

export default Intro
