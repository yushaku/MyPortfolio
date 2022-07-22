import React from 'react'
import Image from 'next/image'

function Contact() {
  return (
    <div
      className="w-[100vw] h-[90vh]
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] pt-[15vh]
      relative"
    >
      <div className=" ">
        <h3 className="text-xl text-colorGreen">04. Interested in working with me?</h3>
        <h1 className="text-[60px] font-semibold text-[#ccd6f6]">Get In Touch</h1>
        <p
          className=" text-textGray my-4 
          max-w-[600px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[600px]"
        >
          Although i am not currently looking for any new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I will try my best to get back to you!
        </p>
        <button className="button mt-8">Say hello</button>
      </div>
      <div
        className="animate-blob duration-300 
        md:absolute md:right-[20px] md:bottom-[0px] 
        lg:right-[50px] lg:bottom-[50px]
        xl:right-[220px] "
      >
        <Image src="/3.png" alt="connect to me" />
      </div>
    </div>
  )
}

export default Contact
