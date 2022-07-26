import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { envEmailjs } from '../constants/emailjs'
import { useRecoilState } from 'recoil'
import { showFormContact } from '../atoms/storeAtom'

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
    <div className="fixed top-[10%] left-0 z-200 bg-[#0f2243c6] w-[100vw] h-[90vh] flex items-center justify-center">
      <i
        className="absolute top-[5%] right-[5%] text-2xl cursor-pointer"
        onClick={() => setIsShowFormcontact(!isShowFormContact)}
      >
        X
      </i>
      <form onSubmit={sendEmail} className="flex flex-col items-center justify-center">
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
        <input type="submit" className="button px-[36px] " value="send" />
      </form>
    </div>
  )
}

export default FormContact
