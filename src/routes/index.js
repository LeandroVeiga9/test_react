import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CreateTransactionPage from '../components/pages/CreateTransactionPage';
import TransactionsPage from '../components/pages/TransactionsPage';
import AuthPage from '../components/pages/AuthPage';
import NavBar from '../components/shared/NavBar';

export default function ApplicationRouter() {

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Routes Start */}
        <Route path="/" element={localStorage.getItem('access_token') ? <Navigate to="/transactions" /> : <Navigate to="/auth" />} />
        <Route path="/transactions/new" element={<CreateTransactionPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* Routes End */}
      </Routes>
    </Router>
  )
}