import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main_components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
)