import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import CreateTransactionPage from '../components/pages/CreateTransactionPage';
import TransactionsPage from '../components/pages/TransactionsPage';
import TransactionPage from '../components/pages/TransactionPage';

export default function ApplicationRouter() {

  return (
    <Router>
      <Routes>
        {/* Routes Start */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create_transaction" element={<CreateTransactionPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/transactions/:id" element={<TransactionPage />} />
        {/* Routes End */}
      </Routes>
    </Router>
  )
}