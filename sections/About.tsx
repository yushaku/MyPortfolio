import Image from 'next/image'
import React from 'react'

import useScrollAnimation from '@/hooks/useScrollAnimation'
import { programmingLanguage } from '@/mocks/workList'

function About() {
  const { ref, control, motion } = useScrollAnimation()
  const scrollVariant = {
    hidden: {
      opacity: 0,
      scale: 1,
      x: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={scrollVariant}
      id="About_Section"
      className="container mx-auto mt-7 min-h-[60vh] flex items-center p-8"
    >
      <div>
        <div className="flex items-center gap-3 mb-[40px] ">
          <h3 className="text-3xl">
            <span className="text-colorPrimary dark:text-colorGreen">0.1</span> About me
          </h3>
          <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 items-center
          gap-10 md:gap-20 text-[19px] text-textLight dark:text-textDark"
        >
          <div className="flex flex-col gap-3 left">
            <p>
              Hello! My name is Yushaku and I enjoy creating things that live on the internet. My interest in web
              development started back in 2020 when I decided to try coding a website to promote the
              {" family's  motel"} room — turns out taught me a lot about HTML, CSS and javascript! and make me in love
              with job as web developer
            </p>
            <p>
              Fast-forward to today, and I have had the experience of working at a start-up, a corporation. My main
              focus these days is building accessible, inclusive products and digital experiences at Upstatement for a
              variety of clients.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className="flex flex-wrap items-center gap-8">
              {programmingLanguage.map((Language) => (
                <li key={Language.id} className="flex gap-1 items-center justify-center text-[19px]">
                  <Image src={Language.iconLink} alt="icon" width={25} height={25} loading="lazy" />
                  {Language.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="right h-[400px] cursor-pointer ">
            <div className="flex justify-center group items grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/yushaku2.jpg"
                alt="le van son"
                className="mt-2 rounded-full bject-contain "
                width={350}
                height={350}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
