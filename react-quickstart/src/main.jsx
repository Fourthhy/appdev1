import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Testing from './Testing.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testing />
  </StrictMode>,
)
