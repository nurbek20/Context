import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductState } from './Context/Product-state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <ProductState>
        <App />
      </ProductState>
    </BrowserRouter>
  </>
);
