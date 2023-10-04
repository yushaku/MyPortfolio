import Image from 'next/image'
import React from 'react'
import { useRecoilState } from 'recoil'
import Button from '@/components/Button'
import useScrollAnimation from '@/hooks/useScrollAnimation'
import { scrollVariant } from '@/utils/mocks/framerMotionEffect'
import { showFormContact } from '@/utils/storeAtom'

function Contact() {
  const [isShowFormContact, setIsShowFormContact] = useRecoilState(showFormContact)
  const handleOpenFormConnect = () => {
    setIsShowFormContact(!isShowFormContact)
  }

  const { ref, control, motion } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={scrollVariant}
      id="Contact_Section"
      className="h-full md:h-[70vh] px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] mt-[20vh] relative flex justify-center items-center flex-col md:flex-row"
    >
      <div className="flex flex-col items-center justify-center h-[70%]">
        <h3 className="text-3xl pb-9">
          <span className="text-colorPrimary dark:text-colorGreen">04.</span> Interested in working with me?
        </h3>
        <h1 className="text-[60px] font-semibold dark:text-[#ccd6f6] text-textGrayLight pb-9">Get In Touch</h1>
        <p
          className=" dark:text-textGrayDark text-textLight my-4 pb-9
          max-w-[600px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[600px]"
        >
          Although i am not currently looking for any new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I will try my best to get back to you!
        </p>
        <Button title="Say hello" setOnClick={handleOpenFormConnect} />
      </div>
      <div className="mt-5">
        <Image src="/51.png" alt="email image" width={500} height={500}></Image>
      </div>
    </motion.div>
  )
}

export default Contact
