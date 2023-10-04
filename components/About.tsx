import Image from 'next/image'
import React from 'react'

import useScrollAnimation from '@/hooks/useScrollAnimation'
import { programmingLanguage } from '@/utils/mocks/workList'

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
          className="grid grid-cols-1 xl:grid-cols-3 items-center
          gap-10 md:gap-20 text-[19px] text-textLight dark:text-textDark"
        >
          <div className="right h-[400px] cursor-pointer ">
            <div className="flex justify-center group items transition-all duration-500">
              <Image
                src="/developer.png"
                alt="le van son"
                className="mt-2 rounded-full"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 left col-span-2">
            <p>
              Hello, my name is Yushaku and I&apos;m passionate about creating digital experiences that live on the
              internet. My interest in web development started in 2020 when I decided to create a website to promote my
              family&apos;s motel room. Through this project, I discovered a love for coding and gained experience with
              HTML, CSS, and JavaScript.
            </p>
            <p>
              Since then, I have gained experience working at both startups and corporations. Currently, I work at
              Upstatement where my focus is on building accessible and inclusive digital products and experiences for a
              diverse range of clients. I am committed to staying up-to-date with the latest web development trends and
              technologies, and I enjoy collaborating with my colleagues to create innovative solutions that meet the
              needs of our clients and their users.
            </p>

            <p>
              I am excited about the possibilities that web development offers and I am continually seeking new
              opportunities to grow and expand my skills as a web developer.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>

            <ul className="flex flex-wrap items-center gap-8">
              {programmingLanguage.map(({ iconLink: Icon, title }, id) => (
                <li key={id} className="flex gap-1 items-center justify-center text-[19px]">
                  <span className="w-6 h-6">
                    <Icon />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
