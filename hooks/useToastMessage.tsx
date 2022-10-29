import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default'

const showNotify = (message: string, type: ToastType) =>
  toast(message, {
    type,
    closeOnClick: true,
    pauseOnHover: true,
    position: 'top-right',
  })

const ToastMessage = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}
const useToastMessage = () => {
  return { showNotify, ToastMessage }
}

export default useToastMessage
