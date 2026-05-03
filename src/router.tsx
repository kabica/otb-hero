import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Home page
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*', // Catch all other paths
        element: <Home />, // Show Home, but keep the URL as-is
      },
    ],
  },
])

export default router
