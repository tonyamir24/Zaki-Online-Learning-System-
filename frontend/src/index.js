import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { SearchContextProvider } from './contex/searchContex';
import { AuthContexProvider } from './contex/AuthContex';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
    <App />
    </AuthContexProvider>
  </React.StrictMode>
);

