// ──────────── Static + External Deps. ────────────
import * as React from 'react'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

// ──────────── Context Providers ────────────
import { AuthProvider } from './context/AuthContext'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
