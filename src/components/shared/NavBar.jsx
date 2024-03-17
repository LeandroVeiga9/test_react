import React from "react";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar({}) {
  const location = useLocation()
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('access_token')
    return navigate('auth')
  }

  return (
    <div className={`${location.pathname == '/auth' && 'hidden'} w-full h-16 bg-black flex justify-end items-center`}>
      <MdOutlineLogout className="w-8 h-8 mr-10 text-white cursor-pointer" onClick={logout} />
    </div>
  )
  
}