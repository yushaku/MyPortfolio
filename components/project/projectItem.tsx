import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt'

import useScrollAnimation from '@/hooks/useScrollAnimation'
import { delayShowProject } from '@/utils/mocks/framerMotionEffect'
import { ProjectEntity } from '@/utils/mocks/projectList'

const ProjectItem = ({ project, index }: { project: ProjectEntity; index: number }) => {
  const { ref, control, motion } = useScrollAnimation()

  return (
    <motion.div ref={ref} initial="hidden" animate={control} custom={index} variants={delayShowProject}>
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.2} scale={1.01} perspective={1000}>
        <div className={`relative flex shadow-xl ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mx-auto py-4`}>
          <div className="image md:w-[60%] mx-4">
            <Image src={project.imageLink} alt={project.title} width={1500} height={800} loading="lazy" />
          </div>

          <div
            className={`absolute top-0 bottom-0 left-0
                ${
                  index % 2 === 0
                    ? 'md:left-0 md:right-[200px] md:items-start justify-start'
                    : 'md:right-0 md:left-[200px] md:items-end justify-end '
                }
                bg-[#0a192f]/70 md:bg-[#0a192f]/0 p-5 md:px-10  
                flex justify-center flex-col`}
          >
            <h6 className="text-colorPrimary dark:text-colorGreen">Featured Project</h6>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p
              className={`py-4 ${
                index % 2 == 0 ? 'pr-4' : 'pl-4'
              } text-[#a8b2d1] md:py-8 md:rounded-lg md:bg-[#0a192f]/80 `}
            >
              {project.description}
            </p>
            <div className="flex gap-3 text-textLight dark:text-[#ccd6f6]">
              {project.tools.map((tool, index) => {
                return (
                  <span className="" key={index}>
                    {tool}
                  </span>
                )
              })}
            </div>
            <div className="pt-4 flex gap-4 text-textLight dark:text-[#ccd6f6]">
              <a href={project.githubLink} className="dark:hover:text-colorGreen hover:text-colorPrimary">
                <GitHubIcon />
              </a>
              <a href={project.linkPage} className="dark:hover:text-colorGreen hover:text-colorPrimary">
                <SendIcon />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectItem
