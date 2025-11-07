import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Servicios from './pages/Servicios'
import Layout from './components/Layout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Servicios />
    </Layout>
  </StrictMode>,
)
