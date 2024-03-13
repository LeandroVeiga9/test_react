import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';

export default function ApplicationRouter() {

  return (
    <Router>
      <Routes>
        {/* Routes Start */}
        <Route path="/" element={<HomePage />} />
        {/* Routes End */}
      </Routes>
    </Router>
  )
}