import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Main from './layout/Main.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
)