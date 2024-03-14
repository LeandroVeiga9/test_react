import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api_client from "../../config/api_client";
import moment from "moment";

export default function TransactionPage({}) {
  const { id } = useParams();
  const [transaction, setTransaction] = useState({})

  useEffect(() => {
    api_client.get(`/transactions/${id}`).then(response => {
      setTransaction(response.data)
    })
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl py-10">Transaction {id}</h1>
      <div className="border rounded grid grid-cols-2 grid-rows-5 gap-2 text-xl p-3 bg-gray-100">
        <div className="">ID</div>
        <div>
          {transaction.id}
        </div>
        <div className="">Numero do Cartão</div>
        <div>
          {transaction.card_number}
        </div>
        <div className="">Data de expiração</div>
        <div>
          {moment(transaction.card_expiration_date).format('DD/MM/YYYY')}
        </div>
        <div className="">CVV</div>
        <div>
          {transaction.cvv}
        </div>
        <div className="">Valor da transação</div>
        <div>
          R$ {(transaction.value_in_cents / 100).toFixed(2)}
        </div>
      </div>
    </div>
  )
}