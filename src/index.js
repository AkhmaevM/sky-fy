import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as S from './styledApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <S.GlobalStyles />
    <App /> 
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

