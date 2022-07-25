import React, { useRef } from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

function Contact() {
  
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'N00nfd158h20_rLad').then(
      (result) => {
        alert(result.text)
      },
      (error) => {
        alert(error.text)
      },
    )
  }
  return (
    <motion.div
      animate={{
        x: 100,
      }}
      className="w-[100vw] h-[90vh]
      px-[25px] pt-[15vh] sm:px-[50px] md:px-[100px] lg:px-[150px]
      relative"
    >
      <div className="">
        <h3 className="text-xl text-colorGreen">04. Interested in working with me?</h3>
        <h1 className="text-[60px] font-semibold text-[#ccd6f6]">Get In Touch</h1>
        <p
          className=" text-textGray my-4 
          max-w-[600px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[600px]"
        >
          Although i am not currently looking for any new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I will try my best to get back to you!
        </p>
        <Button title="Say hello" />
      </div>
      
      <div className="absolute top-[50%] left-[50%] z-20 bg-[#0f2243] w-10 h-10">
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" name="" id="" />
          <input type="text" name="" id="" />
        </form>
      </div>
      
      <div
        className="animate-blob duration-300 
        md:absolute md:right-[20px] md:bottom-[0px] 
        lg:right-[50px] lg:bottom-[50px]
        xl:right-[220px] "
      >
        <Image src="/3.png" alt="connect to me" width={500} height={500} />
      </div>
    </motion.div>
  )
}

export default Contact
