import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import CreateTransactionPage from '../components/pages/CreateTransactionPage';

export default function ApplicationRouter() {

  return (
    <Router>
      <Routes>
        {/* Routes Start */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create_transaction" element={<CreateTransactionPage />} />
        {/* Routes End */}
      </Routes>
    </Router>
  )
}