import { motion } from 'framer-motion'
import React from 'react'

type props = {
  title: string
  setOnClick: any
}

function Button({ title, setOnClick }: props) {
  return (
    <motion.button
      className={`button`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.35 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={setOnClick}
    >
      {title}
    </motion.button>
  )
}

export default Button
