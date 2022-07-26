import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { delayShowOf } from '../mocks/framerMotionEffect'

function Intro() {
  return (
    <div
      className="h-[100vh] w-[100vw]
      pl-[25px] sm:pl-[50px] md:pl-[100px] lg:pl-[250px] mt-[8vh] 
      md:-translate-y-[40px]
      flex items-center md:flex-row"
    >
      <div className="max-w-50%">
        <motion.h3
          custom={2}
          variants={delayShowOf}
          initial="hidden"
          animate="visible"
          className="dark:text-colorGreen text-colorPrimary text-[17.6px]"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          custom={3}
          variants={delayShowOf}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.001,
            transition: { duration: 1 },
          }}
          className=" text-[45px] pb-2 sm:text-[50px] md:text-[80px] lg:text-[90px] font-semibold leading-normal"
        >
          Yushaku.
        </motion.h1>
        <motion.h2
          custom={4}
          variants={delayShowOf}
          initial="hidden"
          animate="visible"
          className="text-textGrayLight dark:text-textGrayDark text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-semibold  leading-[1] pb-6"
        >
          I am a full-stack developer.
        </motion.h2>
        <motion.p
          custom={5}
          variants={delayShowOf}
          initial="hidden"
          animate="visible"
          className="text-textGrayLight dark:text-textGrayDark pr-[80px] text-[20px] max-w-[800px] mb-[5.35rem]"
        >
          I am a software engineer specializing in building (and occasionally designing) exceptional digital
          experiences. Currently, I am focused on building accessible, human-centered products at
          <a
            href="https://zinza.com.vn/vi/"
            className="pl-2 transition-all duration-700 text-colorPrimary dark:text-colorGreenhover:decoration-solid hover:underline"
          >
            Zinza technology.
          </a>
        </motion.p>
        <motion.a
          custom={6}
          variants={delayShowOf}
          initial="hidden"
          animate="visible"
          href="#"
          className="px-10 button y-10 "
        >
          check out my resume!
        </motion.a>
      </div>
      <motion.div
        custom={7}
        variants={delayShowOf}
        initial="hidden"
        animate="visible"
        className="hidden duration-300 lg:block animate-blob"
      >
        <Image src="/21.png" alt="intro image 3d" width={500} height={500} />
      </motion.div>
    </div>
  )
}

export default Intro
