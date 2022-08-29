import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'
import { projectList } from '../mocks/projectList'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

function Project() {
  return (
    <div
      id="Experience_Section"
      className="w-[100vw] 
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] mt-[8vh] 
      flex flex-col items-start justify-center"
    >
      <div className="TITLE flex items-center gap-3 mb-[40px]">
        <h3 className="text-3xl">
          <span className="text-colorGreen">03. </span> Some Projects I have Built
        </h3>
        <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
      </div>

      <div className="CONTENT flex gap-[80px] flex-col md:gap-[100px]">
        {projectList.map((project) => {
          return (
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.7}
              scale={1.01}
              perspective={1000}
              key={project.id}
            >
              <div
                className={`relative flex ${
                  project.id % 2 === 0 ? 'justify-end' : 'justify-start'
                } lg:w-[80%] mx-auto py-4`}
              >
                <div className="image md:w-[60%] lg:w-[70%] xl:w-[60%]">
                  <Image src={project.imageLink} alt={project.title} width={1500} height={800} />
                </div>

                <div
                  className={`absolute top-0 bottom-0 left-0
                ${
                  project.id % 2 === 0
                    ? 'md:left-0 md:right-[200px] md:items-start justify-start'
                    : 'md:right-0 md:left-[200px] md:items-end justify-end '
                }
                bg-[#0a192f]/70 md:bg-[#0a192f]/0 md:px-10  
                flex justify-center flex-col `}
                >
                  <h6 className="text-colorGreen">Featured Project</h6>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p
                    className={`py-4 ${project.id % 2 == 0 ? 'pr-4' : 'pl-4'} 
                    text-[#a8b2d1]
                    md:py-8 md:rounded-lg md:bg-[#0a192f]/80
                    `}
                  >
                    {project.description}
                  </p>
                  <div className="flex gap-3 text-[#ccd6f6]">
                    {project.tools.map((tool, index) => {
                      return (
                        <span className="" key={index}>
                          {tool}
                        </span>
                      )
                    })}
                  </div>
                  <div className="pt-4 flex gap-4 text-[#ccd6f6]">
                    <a href={project.githubLink} className="hover:text-colorGreen">
                      <GitHubIcon />
                    </a>
                    <a href={project.linkPage} className="hover:text-colorGreen">
                      <SendIcon />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          )
        })}
      </div>
    </div>
  )
}

export default Project
