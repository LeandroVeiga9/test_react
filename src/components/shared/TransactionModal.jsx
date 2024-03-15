import React from "react";
import moment from "moment";
import { IoCloseOutline } from "react-icons/io5";
export default function TransactionModal({ transaction, setShowModal }) {

  return (
    <div className="absolute w-screen h-screen bg-[#00000050] flex items-center justify-center">
      <div className="w-1/4 h-2/4 bg-white rounded-md flex flex-col items-center border-2 border-black">
        <button className="self-end m-2 rounded-full bg-red-500" onClick={() => setShowModal(false)}>
          <IoCloseOutline className="w-7 h-7" />
        </button>
        <h1 className="text-3xl pb-10">Transação {transaction.id}</h1>
        <div className="grid grid-cols-2 grid-rows-5 gap-2 text-xl p-3 w-full">
          <div className="">ID</div>
          <div className="text-center">
            {transaction.id}
          </div>
          <div className="">Numero do Cartão</div>
          <div className="text-center">
            {transaction.card_number}
          </div>
          <div className="">Data de expiração</div>
          <div className="text-center">
            {moment(transaction.card_expiration_date).format('DD/MM/YYYY')}
          </div>
          <div className="">CVV</div>
          <div className="text-center">
            {transaction.cvv}
          </div>
          <div className="">Valor da transação</div>
          <div className="text-center">
            R$ {(transaction.value_in_cents / 100).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )

}