import * as React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }}>
      <h1>¿Se ve este texto?</h1>
      <App />
    </div>
  </React.StrictMode>
)