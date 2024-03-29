import { motion } from 'framer-motion'
import React from 'react'

import ProjectItem from './project/projectItem'
import { projectVariant } from '@/utils/mocks/framerMotionEffect'
import { projectList } from '@/utils/mocks/projectList'

function Project() {
  return (
    <motion.div
      variants={projectVariant}
      id="Experience_Section"
      className="mx-auto flex flex-col items-start justify-center p-8"
    >
      <div className="TITLE flex items-center gap-3 mb-[40px]">
        <h3 className="text-3xl">
          <span className="dark:text-colorGreen text-colorPrimary">03. </span> Some Projects I have Built
        </h3>
        <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
      </div>

      <div className="flex gap-[80px] flex-col md:gap-[100px] z-[100]">
        {projectList.map((project, index) => {
          return <ProjectItem key={index} project={project} index={index} />
        })}
      </div>
    </motion.div>
  )
}

export default Project
