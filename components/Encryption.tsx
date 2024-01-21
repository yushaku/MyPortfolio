import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-[80dvh]">
      <div className="absolute w-auto h-auto top-40 z-[5]">
        <motion.div variants={slideInFromTop} className="text-[40px] font-medium text-center text-gray-200">
          <span className="green_text_gradient">Performance & Security</span>
        </motion.div>

        <p className="text-xl text-center text-gray-300">Secure your data with end-to-end encryption</p>
      </div>

      <div className="flex flex-col items-center justify-center absolute z-[20]">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image src="/LockMain.png" alt="Lock Main" width={70} height={70} className=" z-10" />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-base">Encryption</h1>
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video loop muted autoPlay playsInline preload="false" className="w-full h-auto" src="/encryption.webm" />
      </div>
    </div>
  )
}

export default Encryption
