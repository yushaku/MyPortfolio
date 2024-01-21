import React from 'react'

import SkillDataProvider from './Skill'
import useScrollAnimation from '@/hooks/useScrollAnimation'
import { Frontend_skill, Backend_skill, Full_stack, Other_skill } from '@/utils/constants'

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
      className="my-40 flex items-center"
    >
      <section
        id="skills"
        className="flex flex-col gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: 'scale(0.9' }}
      >
        <div className="flex items-center gap-3 mb-[40px] ">
          <h3 className="text-3xl">
            <span className="text-colorPrimary dark:text-colorGreen">0.1</span> About me
          </h3>
          <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
        </div>

        <div className="grid text-[19px] text-textLight dark:text-textDark">
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
              diverse range of clients.
            </p>

            <p>
              I am excited about the possibilities that web development offers and I am continually seeking new
              opportunities to grow and expand my skills as a web developer.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>

            {/* <ul className="flex flex-wrap items-center gap-4"> */}
            {/*   {programmingLanguage.map(({ iconLink: Icon, title }, id) => ( */}
            {/*     <li key={id} className="flex gap-1 items-center justify-center text-[19px]"> */}
            {/*       <span className="w-6 h-6"> */}
            {/*         <Icon /> */}
            {/*       </span> */}
            {/*       {title} */}
            {/*     </li> */}
            {/*   ))} */}
            {/* </ul> */}

            <article className="flex items-center justify-center flex-col gap-3">
              <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
              <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
            </article>

            <div className="w-full h-full absolute">
              <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                <video
                  className="w-full h-auto"
                  preload="false"
                  playsInline
                  loop
                  muted
                  autoPlay
                  src="/cards-video.webm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
