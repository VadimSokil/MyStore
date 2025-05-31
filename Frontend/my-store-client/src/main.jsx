import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductsPage from './products-page/products-page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsPage/>
  </StrictMode>,
)
