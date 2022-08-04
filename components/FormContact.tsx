import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { envEmailjs } from '../constants/emailjs'
import { useRecoilState } from 'recoil'
import { showFormContact } from '../atoms/storeAtom'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import { showOut } from '../mocks/framerMotionEffect'

type formEmail = {
  name: string
  email: string
  title: string
  message: string
}

function FormContact() {
  const [isShowFormContact, setIsShowFormcontact] = useRecoilState(showFormContact)

  const [formEmail, setFormEmail] = useState<formEmail>({
    email: '',
    name: '',
    title: '',
    message: '',
  })

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const idInput = e.currentTarget.id
    setFormEmail({
      ...formEmail,
      [idInput]: e.currentTarget.value,
    })
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs.send(envEmailjs.YOUR_SERVICE_ID, envEmailjs.YOUR_TEMPLATE_ID, formEmail, envEmailjs.PUBLIC_API_KEY).then(
      (result) => {
        alert(result.text)
        setIsShowFormcontact(!isShowFormContact)
      },
      (error) => {
        alert(error.text)
        setIsShowFormcontact(!isShowFormContact)
      },
    )
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center rounded-md z-200 w-[100vw] h-[100vh]">
      <motion.form
        onSubmit={sendEmail}
        initial="hidden"
        animate="visible"
        variants={showOut}
        className="relative flex flex-col items-center justify-center bg-[#0f2243] w-[650px] h-[90vh]"
      >
        <CloseIcon
          className="absolute top-[60px] right-[12px] cursor-pointer"
          fontSize="large"
          onClick={() => setIsShowFormcontact(!isShowFormContact)}
        />
        <h1 className="text-5xl font-semibold pb-9 text-colorGreen">Get in touch</h1>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="your email"
          onChange={handleOnChange}
          value={formEmail.email}
        />
        <input
          type="text"
          name="name"
          id="name"
          className="input"
          placeholder="your name"
          onChange={handleOnChange}
          value={formEmail.name}
        />
        <input
          type="text"
          name="title"
          id="title"
          className="input"
          placeholder="your job title"
          onChange={handleOnChange}
          value={formEmail.title}
        />
        <textarea
          name="message"
          id="message"
          className="textArea"
          placeholder="your message"
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
            setFormEmail({
              ...formEmail,
              message: e.currentTarget.value,
            })
          }}
          value={formEmail.message}
        />
        <input type="submit" className="button px-[36px] mt-10" value="send" />
      </motion.form>
    </div>
  )
}

export default FormContact
