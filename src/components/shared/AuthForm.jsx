import React, { useEffect, useState } from "react";
import Input from "./Input";
import api_client from "../../config/api_client";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function AuthForm({ propIsLogin = true }) {
  const navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(propIsLogin)
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })

  const handleInputs = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value })
  }

  const handleAuth = () => {
    isLogin && delete authData.confirm_password

    if (Object.values(authData).some((e) => e === '')) {
      return toast.error("Preencha todos os campos")
    } else if (!isLogin && authData.password !== authData.confirm_password) {
      return toast.error('As senhas precisam ser iguais')
    }
    
    api_client.post(`/users/${isLogin ? 'login' : ''}`, {user: {...authData}}).then(response => {
      localStorage.setItem('access_token', response.data.user.token)
      return navigate('/transactions')
    })
  }

  return (
    <div className="bg-gray-300 p-5 rounded-md flex flex-col w-1/4">
      <h1 className="text-3xl self-center">{isLogin ? 'Login' : 'Cadastre-se'}</h1>
      <Input value={authData['email']} name="email" label='Email' handleChange={handleInputs} type='email' />
      <Input value={authData['password']} name="password" label='Senha' handleChange={handleInputs} type='password' />
      {!isLogin && <Input value={authData['confirm_password']} name="confirm_password" label='Confirme a senha' handleChange={handleInputs} type='password' />}
      <button className="bg-green-400 rounded py-1 hover:bg-green-500 w-full mt-5" onClick={handleAuth}>{isLogin ? 'Login' : 'Criar Conta'}</button>
      <p className="text-xs mt-2">
        {
          isLogin ?
            <>
              Não possui uma conta?
              <button className="text-blue-600" onClick={() => setIsLogin(false)}> cadastre-se</button>
            </>
          :
            <>
              Já possui uma conta?
              <button className="text-blue-600" onClick={() => setIsLogin(true)}> login</button>
            </>
        }
      </p>
    </div>
  )
}