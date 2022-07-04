import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div
      className='h-[100vh] w-[100vw] 
      flex justify-center
      px-[25px] sm:px-[50px] md:px-[70px] lg:px-[150px]'
    >
      <div className='max-w-[900px] relative'>
        <div className='BgAnimationElement delay-200 top-0 right-[65px] bg-[#d0ff01]'></div>
        <div className='BgAnimationElement delay-400 top-[100px] right-[-92px] bg-[#aa00ff]'></div>
        <div className='BgAnimationElement top-[250px] right-[100px] bg-[#09ffe2]'></div>

        <div className='flex items-center gap-3 mb-[40px] '>
          <h3 className='text-3xl'>
            <span className=' text-colorGreen'>0.1</span> About me
          </h3>
          <p className='h-[2px] w-[250px] bg-gray-600 translate-y-1'></p>
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-4 text-[19px] text-textDark'>
          <div className='left max-w-2xl md:max-w-lg lg:max-w-xl flex flex-col gap-3'>
            <p>
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in
              web development started back in 2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom blog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a
              start-up, a huge corporation, and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at Upstatement for a variety of
              clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the
              Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <div className='right z-10'>
            <img
              src='/yushaku2.jpg'
              className='cursor-pointer object-contain mt-2 min-w-[300px] rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
