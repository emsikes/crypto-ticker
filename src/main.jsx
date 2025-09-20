import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Strict mode for develoment mode only - runs things like useEffect  twice to catch bugs early: mount unmount, remount
  <StrictMode>
    <App />
  </StrictMode>,
)
