import React, { useState } from "react";
import api_client from "../../config/api_client";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function CreateTransactionPage({}) {
  const navigate = useNavigate();

  const [transactionData, setTransactionData] = useState({
    "card_number": "",
    "card_expiration_date": "",
    "cvv": "",
    "value_in_cents": ""
  })

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
        <label htmlFor="card_number">Numero do cartão</label>
        <input onChange={handleInputs} value={transactionData['card_number']} maxLength={16} className="p-1 border-2 border-black rounded" type="text" name="card_number" />
        <label htmlFor="card_expiration_date">Data de expiração</label>
        <input onChange={handleInputs} value={transactionData['card_expiration_date']} className="p-1 border-2 border-black rounded" type="date" name="card_expiration_date" />
        <label htmlFor="cvv">CVV</label>
        <input onChange={handleInputs} value={transactionData['cvv']} maxLength={4} className="p-1 border-2 border-black rounded" type="text" name="cvv" />
        <label htmlFor="value_in_cents">Valor da transação</label>
        <input onChange={handleInputs} value={transactionData['value_in_cents']} className="p-1 border-2 border-black rounded" type="text" name="value_in_cents" />
        <div className="flex justify-center">
          <button className="bg-green-400 rounded py-1 hover:bg-green-500 w-2/3 mt-5" onClick={createTransaction}>CRIAR</button>
        </div>
      </div>
    </div>
  )
}