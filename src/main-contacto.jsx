import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contacto from './pages/Contacto'
import Layout from './components/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Contacto />
    </Layout>
  </StrictMode>,
)
