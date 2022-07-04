import { motion } from 'framer-motion'
import React from 'react'

function LoadingPage() {
  return (
    <div
      className='w-[100vw] h-[100vh]
      flex justify-center items-center flex-col'
    >
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 500,
        }}
        src='/logo.png'
        alt='yushalu'
        className='w-[100px] h-[100px]'
      />

      <h3
        className='text-3xl text-colorGreen mt-4'
      >
        Yushaku
      </h3>
    </div>
  )
}

export default LoadingPage
