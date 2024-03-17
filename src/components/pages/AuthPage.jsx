import React, { useEffect } from "react";
import AuthForm from "../shared/AuthForm";
import { Toaster } from "react-hot-toast";

export default function AuthPage({}) {

  useEffect(() => {
    localStorage.removeItem('access_token')
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-right" />

      <AuthForm propIsLogin={true}/>
    </div>
  )
}