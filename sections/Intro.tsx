import React from 'react'

import useScrollAnimation from '@/hooks/useScrollAnimation'
import { delayShowOf } from '@/mocks/framerMotionEffect'
// import ModelEarth from './model3D'
import Image from 'next/image'

function Intro() {
  const { ref, control, motion } = useScrollAnimation()

  return (
    <div
      id="Intro_Section"
      className="min-h-[100vh] container mx-auto p-8
      flex items-center md:flex-row"
    >
      <div className="">
        <motion.h3
          ref={ref}
          custom={2}
          variants={delayShowOf}
          initial="hidden"
          animate={control}
          className="dark:text-colorGreen text-colorPrimary text-[17.6px]"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          ref={ref}
          custom={3}
          variants={delayShowOf}
          initial="hidden"
          animate={control}
          whileHover={{
            scale: 1.001,
            transition: { duration: 1 },
          }}
          className=" text-[45px] pb-2 sm:text-[50px] md:text-[80px] lg:text-[90px] font-semibold leading-normal"
        >
          Yushaku.
        </motion.h1>
        <motion.h2
          ref={ref}
          custom={4}
          variants={delayShowOf}
          initial="hidden"
          animate={control}
          className="text-textGrayLight dark:text-textGrayDark text-[35px] sm:text-[45px] md:text-[50px] lg:text-[55px] font-semibold  leading-[1] pb-6"
        >
          I am a full-stack developer.
        </motion.h2>
        <motion.p
          ref={ref}
          custom={5}
          variants={delayShowOf}
          initial="hidden"
          animate={control}
          className="text-textGrayLight dark:text-textGrayDark pr-[80px] text-[20px] max-w-[800px] mb-[5.35rem]"
        >
          I am a software engineer specializing in building exceptional digital experiences, Write modern, performant,
          maintainable application for client. Currently, I am focused on building accessible, human-centered products
          at
          <a
            href="https://zinza.com.vn/vi/"
            className="pl-2 transition-all duration-700 text-colorPrimary dark:text-colorGreenhover:decoration-solid hover:underline"
          >
            Zinza technology.
          </a>
        </motion.p>
        <motion.a
          ref={ref}
          custom={6}
          variants={delayShowOf}
          initial="hidden"
          animate={control}
          href="#"
          className="px-10 button y-10 "
        >
          check out my resume!
        </motion.a>
      </div>

      <div className="hidden lg:block">
        <motion.div custom={9} variants={delayShowOf} initial="hidden" animate="visible">
          {/* <ModelEarth /> */}
          <Image src="/3.png" alt="image 3d" height={550} width={550} loading="lazy" />
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
