import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Temporarily disable StrictMode to prevent WebGL context creation issues
  // StrictMode double-invokes effects in development, causing rapid WebGL context creation/destruction
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)