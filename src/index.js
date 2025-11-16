import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./AuthContext";   // ✅ IMPORT AUTH PROVIDER

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>         {/* ✅ WRAP THE APP HERE */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);

// Optional performance report
reportWebVitals();
