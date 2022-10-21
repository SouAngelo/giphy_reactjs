import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GiphyProvider from './contexts/giphyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GiphyProvider>
      <App />
    </GiphyProvider>
  </React.StrictMode>
);

