import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { rootRoute } from './App.jsx'
import { aboutRoute } from './pages/AboutPage.jsx'
import { indexRoute } from './pages/CategoryPage.jsx'

const routeTree = rootRoute.addChildren([aboutRoute, indexRoute])

// Create a new router instance
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
