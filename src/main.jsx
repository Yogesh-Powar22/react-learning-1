import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

// Use either createRoot or ReactDOM.render, not both
// If you're using createRoot, render your app within createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
