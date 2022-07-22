import React from 'react'
import { programmingLanguage } from '../mocks/workList'
import Image from 'next/image'

function About() {
  return (
    <div
      className="pb-[56px] w-[100vw] 
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[300px]"
    >
      <div>
        <div className="flex items-center gap-3 mb-[40px] ">
          <h3 className="text-3xl">
            <span className=" text-colorGreen">0.1</span> About me
          </h3>
          <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center
          gap-10 md:gap-20 text-[19px] text-textDark"
        >
          <div className="flex flex-col gap-3 left">
            <p>
              Hello! My name is Yushaku and I enjoy creating things that live on the internet. My interest in web
              development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking
              together a custom blog button taught me a lot about HTML and CSS!
            </p>
            <p>
              Fast-forward to today, and I have had the privilege of working at an advertising agency, a start-up, a
              huge corporation, and a student-led design studio. My main focus these days is building accessible,
              inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API
              using Node and React.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className="flex flex-wrap items-center gap-8">
              {programmingLanguage.map((Language) => (
                <li key={Language.id} className="flex gap-1 items-center justify-center text-[19px]">
                  <Image src={Language.iconLink} alt="icon" width={25} height={25} />
                  {Language.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="right relative z-10 h-[400px] cursor-pointer ">
            <div className="group absolute top-[6.5%] left-[8.9%]  flex items justify-center">
              <Image src="/yushaku2.jpg" className="z-10 object-contain mt-2 rounded-full" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
