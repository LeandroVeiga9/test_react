import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import CreateTransactionPage from '../components/pages/CreateTransactionPage';
import TransactionsPage from '../components/pages/TransactionsPage';

export default function ApplicationRouter() {

  return (
    <Router>
      <Routes>
        {/* Routes Start */}
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions/new" element={<CreateTransactionPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        {/* Routes End */}
      </Routes>
    </Router>
  )
}