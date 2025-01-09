import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainElement from './pages/main.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainElement />
  </StrictMode>,
)
