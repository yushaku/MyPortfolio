import { motion } from 'framer-motion'
import React from 'react'

type props = {
  title: string
}

function Button({ title }: props) {
  return (
    <motion.button
      className={`button`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.35 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.button>
  )
}

export default Button
