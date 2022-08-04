import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { showFormContact } from '../atoms/storeAtom'

function Contact() {
  const [isShowFormContact, setIsShowFormcontact] = useRecoilState(showFormContact)

  const handleOpenFormConnect = () => {
    setIsShowFormcontact(!isShowFormContact)
  }

  return (
    <motion.div
      className="ContactSection w-[100vw] h-[100%] md:h-[70vh]
      px-[25px] sm:px-[50px] md:px-[100px] lg:px-[250px] mt-[20vh] 
      
      relative"
    >
      <div className="flex flex-col items-center justify-center h-[70%]">
        <h3 className="text-3xl pb-9">
          <span className="text-colorGreen">04.</span> Interested in working with me?
        </h3>
        <h1 className="text-[60px] font-semibold text-[#ccd6f6] pb-9">Get In Touch</h1>
        <p
          className=" text-textGrayDark my-4 pb-9
          max-w-[600px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[600px]"
        >
          Although i am not currently looking for any new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I will try my best to get back to you!
        </p>
        <Button title="Say hello" setOnClick={handleOpenFormConnect} />
      </div>

      {/* <div
        className="animate-blob duration-300 
        md:absolute md:right-[20px] md:bottom-[0px] 
        lg:right-[50px] lg:bottom-[50px]
        xl:right-[320px] "
      >
        <Image src="/3.png" alt="connect to me" width={500} height={500} />
      </div> */}
    </motion.div>
  )
}

export default Contact
