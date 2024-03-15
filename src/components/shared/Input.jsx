import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Input({ value, name, label, type = 'text', handleChange, maxLength = 100 }) {

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm_password: false
  })

  const handleEyeClick = () => {
    document.getElementById(name).type = (showPassword[name] ? 'password' : 'text')
    setShowPassword({...showPassword, [name]: !showPassword[name]})
  }

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-center bg-white border-2 border-black rounded">
        <input onChange={handleChange} value={value} maxLength={maxLength} className="w-full p-1" type={type} name={name} id={name} />
        { type == 'password' && 
          (
            showPassword[name] ? 
              <FaRegEyeSlash className="mx-2 cursor-pointer" onClick={handleEyeClick} />
            :
              <FaRegEye className="mx-2 cursor-pointer" onClick={handleEyeClick} /> 
          )
        }
      </div>
    </div>
  )
}