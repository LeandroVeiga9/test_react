import React, { useState, useEffect } from "react";
import api_client from "../../config/api_client";
import { Link } from "react-router-dom";

export default function TransactionsPage({}) {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    api_client.get('/transactions').then(response => {
      setTransactions(response.data.transactions);
    })
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-10 text-3xl font-bold">Transações</h1>
      <table className="">
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
                  <Link to={transaction.id.toString()}> <button className="bg-blue-700 rounded-full p-2 text-white">mostrar</button></Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}