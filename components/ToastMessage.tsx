import React from 'react'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

interface toastProps {
  type: ToastType
  message: string
}

export enum ToastType {
  error,
  warning,
  success,
}

const renderIcon = (type: ToastType) => {
  if (type == ToastType.error) {
    return (
      <div>
        <ErrorOutlineIcon fontSize="large" className="icon mr-4 text-red-400" />
        <span className=" border-r-2 border-red-400"></span>
      </div>
    )
  } else if (type == ToastType.warning) {
    return <WarningAmberIcon fontSize="large" className="icon text-yellow-400" />
  } else {
    return <CheckCircleOutlineIcon fontSize="large" className="icon text-green-400" />
  }
}

const ToastMessage = ({ type, message }: toastProps) => {
  return (
    <div className="fixed bottom-10 right-5 flex items-center  text-2xl w-[400px] bg-slate-200 p-4 rounded-sm border-[#f00] border-t-4 border-l-8">
      {renderIcon(type)}
      <p className=" text-bgDark px-4">{message}</p>
    </div>
  )
}

export default ToastMessage
