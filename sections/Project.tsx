import React from 'react'

import { projectVariant } from '@/mocks/framerMotionEffect'
import { projectList } from '@/mocks/projectList'
import ProjectItem from './project/projectItem'
import { motion } from 'framer-motion'

function Project() {
  return (
    <motion.div
      variants={projectVariant}
      id="Experience_Section"
      className="pt-[20vh] w-[100vw] px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] mt-[8vh] flex flex-col items-start justify-center"
    >
      <div className="TITLE flex items-center gap-3 mb-[40px]">
        <h3 className="text-3xl">
          <span className="text-colorGreen">03. </span> Some Projects I have Built
        </h3>
        <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
      </div>

      <div className="CONTENT flex gap-[80px] flex-col md:gap-[100px]">
        {projectList.map((project, index) => {
          return <ProjectItem key={index} project={project} index={index} />
        })}
      </div>
    </motion.div>
  )
}

export default Project
