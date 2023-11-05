import React from 'react';
import ReactDOM from 'react-dom/client';
import 'macro-css'
import './index.scss';
import App from './Component/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


