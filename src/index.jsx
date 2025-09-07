import React from 'react';
import ReactDOM from 'react-dom/client'; 

import App from './App';
import './App.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-grkb95gt40d2.frontegg.com', 
  clientId: '8a6a896a-f550-4853-97a2-5d79969cd9d3'
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <FronteggProvider contextOptions={contextOptions}>
    <App />
  </FronteggProvider>
);
