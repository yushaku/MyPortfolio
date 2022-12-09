import React, { useState } from 'react'

import useScrollAnimation from '@/hooks/useScrollAnimation'
import { workedList } from '@/mocks/workList'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Work() {
  const { ref, control, motion } = useScrollAnimation()
  const firstWork = workedList[0].title
  const [showWork, setShowWork] = useState(firstWork)
  const scrollVariant = {
    hidden: {
      opacity: 0.5,
      scale: 1,
      x: -300,
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
      id="Work_Section"
      className="container mx-auto min-h-[50vh] flex items-center px-8"
    >
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-3xl">
            <span className="dark:text-colorGreen text-colorPrimary">02.</span> Where i have worked
          </h2>
          <p className="h-[2px] w-[250px] bg-gray-600 translate-y-1"></p>
        </div>

        <div className="flex flex-col sm:flex-row pt-[52px]">
          <div className="title ">
            <ul className="flex flex-row gap-4 cursor-pointer sm:flex-col">
              {workedList.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={`text-lg py-1 px-4 text-white ${showWork === item.title && 'bg-[#153b5f]'}`}
                    onClick={() => setShowWork(item.title)}
                  >
                    <span>{item.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="description">
            {workedList.map((item) => {
              return (
                <div key={item.id} className={`text-lg py-2 px-4 ${showWork != item.title && 'hidden'}`}>
                  <h1 className="text-xl">
                    {item.position}{' '}
                    <span className="font-semibold dark:text-colorGreen text-colorPrimary">@{item.title}</span>
                  </h1>
                  <p className="text-sm dark:text-textGrayDark text-textLight">{item.date}</p>
                  <ul className="mt-3">
                    {item.describe.map((descItem, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-start gap-3 pb-2 leading-6 text-textGrayLight dark:text-textGrayDark"
                        >
                          <FiberManualRecordIcon className=" dark:bg-colorGreen bg-colorPrimary rounded-full !text-[10px]" />
                          <span>{descItem}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
