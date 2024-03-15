import React, { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Input from "../shared/Input";

export default function CreateTransactionPage({}) {
  const navigate = useNavigate();

  const [transactionData, setTransactionData] = useState({
    "card_number": "",
    "card_expiration_date": "",
    "cvv": "",
    "value_in_cents": ""
  })

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      return navigate('/auth')
    }
  }, [])

  const handleInputs = (e) => {
    if (e.target.name !== 'card_expiration_date') {
      e.target.value = e.target.value.replace(/\D/g, '')
    }

    setTransactionData({...transactionData, [e.target.name]: e.target.value})
  }

  const createTransaction = () => {
    api_client.post('/transactions', {'transaction': transactionData}).then(() => {
      toast.success("Transação criada com sucesso")
      return navigate("/transactions");
    }).catch(e => {
      toast.error(e.response.data.error_message)
    })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster position="top-right" />

      <Link to={'/transactions'} className="absolute self-start left-0">
        <IoArrowBackCircleOutline className="w-10 h-10" />
      </Link>

      <div className="flex flex-col w-1/3 gap-2 rounded bg-gray-300 p-5">
        <h1 className="flex justify-center text-2xl font-bold">Criar Transação</h1>

        <Input value={transactionData['card_number']} name="card_number" label='Numero do cartão' handleChange={handleInputs} maxLength={16} />
        <Input value={transactionData['card_expiration_date']} name="card_expiration_date" label='Data de expiração' handleChange={handleInputs} type="date" />
        <Input value={transactionData['cvv']} name="cvv" label='CVV' handleChange={handleInputs} maxLength={4} />
        <Input value={transactionData['value_in_cents']} name="value_in_cents" label='Valor da transação' handleChange={handleInputs} />

        <div className="flex justify-center">
          <button className="bg-green-400 rounded py-1 hover:bg-green-500 w-2/3 mt-5" onClick={createTransaction}>CRIAR</button>
        </div>
      </div>
    </div>
  )
}