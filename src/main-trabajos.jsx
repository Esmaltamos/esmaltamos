import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import TodosTrabajos from './pages/TodosTrabajos'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <TodosTrabajos />
    </Layout>
  </StrictMode>,
)
