import React, { useState } from 'react'
import { workedList } from '../lib/workList'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Work() {
  const firstWork = workedList[0].title
  const [showWork, setShowWork] = useState(firstWork)
  
  return (
    <div
      className='w-[100vw] py-[10vh]
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px]'
    >
      <div className='flex items-center gap-2'>
        <h2 className='text-3xl'>
          <span className='dark:text-colorGreen'>02.</span> Where i've worked
        </h2>
        <p className='h-[2px] w-[250px] bg-gray-600 translate-y-1'></p>
      </div>

      <div className='flex flex-col sm:flex-row pt-[52px]'>
        <div className='title '>
          <ul className='flex flex-row sm:flex-col cursor-pointer gap-4'>
            {workedList.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`text-lg py-1 px-4 ${showWork === item.title && 'bg-[#153b5f]'}`}
                  onClick={()=> setShowWork(item.title)}
                >
                  <span>{item.title}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='description'>
          {workedList.map((item) => {
            return (
              <div key={item.id} className={`text-lg py-2 px-4 ${showWork != item.title && 'hidden'}`}>
                <h1 className='text-xl'>
                  {item.position} <span className='dark:text-colorGreen font-semibold'>@{item.title}</span>
                </h1>
                <p className='text-sm text-textGray'>{item.date}</p>
                <ul className='mt-3'>
                  {item.describe.map((descItem, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-start gap-3 pb-2 text-textGray leading-6'
                      >
                        <FiberManualRecordIcon className=' dark:bg-colorGreen rounded-full !text-[10px]' />
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
  )
}

export default Work
