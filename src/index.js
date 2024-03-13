import React from 'react';
import ReactDOM from 'react-dom/client';
import ApplicationRouter from './routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApplicationRouter />
  </React.StrictMode>
);