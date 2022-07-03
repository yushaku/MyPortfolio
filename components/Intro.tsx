import React from 'react'

function Intro() {
  return (
    <div
      className='h-[91vh] w-[100vw]
      pl-[25px] sm:pl-[50px] md:pl-[100px] lg:pl-[250px] mt-[8vh] 
      -translate-y-[80px] md:-translate-y-[40px]
      flex flex-col items-start justify-center'
    >
      <h3 className='dark:text-colorGreen text-[17.6px]'>Hi, my name is</h3>
      <h1 className=' text-[40px] sm:text-[50px] md:text-[80px] lg:text-[90px] font-semibold leading-normal'>
        Yushaku.
      </h1>
      <h2 className=' dark:text-textGray text-[35px] sm:text-[45px] md:text-[50px] lg:text-[75px] font-semibold  leading-[1] pb-6'>
        I build things for the web.
      </h2>
      <p className='dark:text-textGray pr-10 text-[20px] max-w-[800px]'>
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital
        experiences. Currently, I’m focused on building accessible, human-centered products at
        <a
          href='https://zinza.com.vn/vi/'
          className='dark:text-colorGreen hover:decoration-solid hover:underline pl-2 transition-all duration-700'
        >
          Zinza technology.
        </a>
      </p>
      <a href='#' className='button mt-10 px-10 '>
        check out my resume!
      </a>
    </div>
  )
}

export default Intro
