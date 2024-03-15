import React, { useState, useEffect } from "react";
import api_client from "../../config/api_client";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import TransactionModal from "../shared/TransactionModal";

export default function TransactionsPage({ }) {

  const [transactions, setTransactions] = useState([])
  const [selectedTransaction, setSelectedTransaction] = useState({})
  const [paginationData, setPaginationData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getTransactions = (page = 1) => {
    api_client.get(`/transactions?page=${page}`).then(response => {
      setTransactions(response.data.transactions);
      setPaginationData(response.data.pagination);
    })
  }

  useEffect(() => {
    getTransactions()
  }, [])

  const handleModal = (transaction = null) => {
    if(transaction) {
      setSelectedTransaction(transaction)
    }
    setShowModal(!showModal)
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-10 text-3xl font-bold">Transações</h1>
      <div className="w-2/3 flex flex-col items-center">
        <div className="flex justify-end w-full mb-5">
          <Link to={'new'} className="bg-green-400 hover:bg-green-500 flex rounded p-2">
            <p>Criar transação</p>
            <FaPlus className="h-6 w-6" />
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2 bg-black text-white px-10 text-center">ID</th>
              <th className="p-2 bg-black text-white px-10 text-center">Numero do Cartão</th>
              <th className="p-2 bg-black text-white px-10 text-center">Data de expiração</th>
              <th className="p-2 bg-black text-white px-10 text-center">CVV</th>
              <th className="p-2 bg-black text-white px-10 text-center">Valor da transação</th>
              <th className="p-2 bg-black text-white px-10 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="p-2 border text-center">{transaction.id}</td>
                  <td className="p-2 border text-center">{transaction.card_number}</td>
                  <td className="p-2 border text-center">{transaction.card_expiration_date}</td>
                  <td className="p-2 border text-center">{transaction.cvv}</td>
                  <td className="p-2 border text-center">{transaction.value_in_cents}</td>
                  <td className="p-2 border text-center">
                    {/* <Link to={transaction.id.toString()}> <button className="bg-blue-700 rounded-full p-2 text-white">mostrar</button></Link> */}
                    <button className="bg-blue-700 rounded-full p-2 text-white" onClick={() => handleModal(transaction)}>mostrar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className="w-full flex justify-end gap-1 mt-4">
          {paginationData.prev_page && <MdOutlineKeyboardArrowLeft className="bg-black text-white w-6 h-6 rounded cursor-pointer" onClick={() => getTransactions(paginationData.prev_page)}/>}
          {
            paginationData && [...Array(paginationData.total_pages)].map((_, i) => (
              <button key={i} className="bg-black text-white w-6 h-6 rounded" onClick={() => getTransactions(i+1)}>
                {i + 1}
              </button>
            ))
          }
          {paginationData.next_page && <MdOutlineKeyboardArrowRight className="bg-black text-white w-6 h-6 rounded cursor-pointer" onClick={() => getTransactions(paginationData.next_page)}/>}
        </div>
      </div>
      {showModal && <TransactionModal transaction={selectedTransaction} setShowModal={setShowModal} />}
    </div>
  )
}