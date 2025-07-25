import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter , Link , Route , Routes } from 'react-router-dom'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
