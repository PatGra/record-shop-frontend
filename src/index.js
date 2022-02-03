import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

