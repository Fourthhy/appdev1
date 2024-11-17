import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FetchPosts from './FetchPosts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchPosts />
  </StrictMode>,
)
