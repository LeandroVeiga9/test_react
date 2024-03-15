import React from "react";
import AuthForm from "../shared/AuthForm";
import { Toaster } from "react-hot-toast";

export default function AuthPage({}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-right" />

      <AuthForm propIsLogin={false}/>
    </div>
  )
}