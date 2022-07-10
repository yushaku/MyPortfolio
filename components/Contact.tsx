import React from 'react'

function Contact() {
  return (
    <div
      className='h-[70vh] w-[100vw] 
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] mt-[8vh] 
      flex flex-col items-center justify-center'
    >
      <h3 className='text-xl text-colorGreen'>
        04. Interesred in working with me?
      </h3>
      <h1 className='text-[60px] font-semibold text-[#ccd6f6]'>Get In Touch</h1>
      <p className=' text-textGray max-w-[600px] my-4'>
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you
        have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <button className='button mt-8'>Say hello</button>
    </div>
  )
}

export default Contact
