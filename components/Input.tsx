import React from 'react'

type InputType = {
  value: string
  setOnChange: React.ChangeEventHandler<HTMLInputElement>
  type: string
  name: string
  id?: string
}

const Input = ({ value, setOnChange, type, name, id }: InputType) => {
  return (
    <input
      className=" bg-slate-300 w-[100px] h-[30px] rounded-md"
      type={type}
      name={name}
      id={id || type}
      placeholder="your email"
      onChange={setOnChange}
      value={value}
    />
  )
}

export default Input
