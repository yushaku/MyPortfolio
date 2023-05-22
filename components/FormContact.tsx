import emailjs from '@emailjs/browser'
import CloseIcon from '@mui/icons-material/Close'
import { motion } from 'framer-motion'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { showFormContact } from '@/atoms/storeAtom'
import { envEmailjs } from '@/constants/emailjs'
import useToastMessage from '@/hooks/useToastMessage'
import { showOut } from '@/mocks/framerMotionEffect'

type FormEmail = {
  name: string
  email: string
  title: string
  message: string
}

function FormContact() {
  const { showNotify, ToastMessage } = useToastMessage()
  const [isShowFormContact, setIsShowFormContact] = useRecoilState(showFormContact)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEmail>()

  const sendEmail: SubmitHandler<FormEmail> = (formValue: FormEmail) => {
    emailjs.send(envEmailjs.YOUR_SERVICE_ID, envEmailjs.YOUR_TEMPLATE_ID, formValue, envEmailjs.PUBLIC_API_KEY).then(
      (result) => {
        showNotify(`${result.text}, send email successfully, i will reply you soon!`, 'info')
      },
      (error) => {
        console.log(error)

        showNotify(error.text, 'error')
      },
    )
  }

  return (
    <div className="fixed flex items-center justify-center top-0 left-0 w-screen h-screen">
      <div>
        <motion.form
          onSubmit={handleSubmit(sendEmail)}
          initial="hidden"
          animate="visible"
          variants={showOut}
          className="relative flex flex-col items-center justify-center bg-[#0f2243]/80 rounded-xl w-[650px] py-12 z-50"
        >
          <CloseIcon
            className="absolute top-[3%] right-[5%] cursor-pointer"
            fontSize="large"
            onClick={() => setIsShowFormContact(!isShowFormContact)}
          />
          <h1 className="text-5xl font-semibold pb-9 text-colorGreen">Get in touch</h1>

          <label htmlFor="email">
            <input
              type="email"
              {...register('email', { required: 'Please input your email' })}
              id="email"
              className="input"
              placeholder="your email"
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </label>

          <label htmlFor="name">
            <input
              type="text"
              {...register('name', { required: 'May i know your name?' })}
              id="name"
              className="input"
              placeholder="your name"
            />
            <p className="text-red-400">{errors.name?.message}</p>
          </label>

          <label htmlFor="title">
            <input
              type="text"
              {...register('title', { required: 'What is your project?' })}
              id="title"
              className="input"
              placeholder="your job title"
            />
            <p className="text-red-400">{errors.title?.message}</p>
          </label>

          <label htmlFor="message">
            <textarea
              {...register('message', { required: 'Show me some description about your project', min: 30 })}
              id="message"
              className="textArea"
              placeholder="your message"
            />
            <p className="text-red-400">{errors.message?.message}</p>
          </label>

          <input type="submit" className="button px-[36px] mt-10" value="send" />
        </motion.form>
        <ToastMessage />
      </div>

      <div
        className="fixed top-0 left-0  z-10 w-[100vw] h-[100vh] backdrop-blur-md"
        onClick={() => setIsShowFormContact(!isShowFormContact)}
      ></div>
    </div>
  )
}

export default FormContact
