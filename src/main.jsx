import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main/Main.jsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
)