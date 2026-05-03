// ──────────── Static + External Deps. ────────────
import { createBrowserRouter } from 'react-router-dom'

// ──────────── Outlets ────────────
import Destinations from './components/Destinations'
import Discover from './components/Discover'
import Bookings from './components/Bookings'
import Flights from './components/Flights'
import Hotels from './components/Hotels'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import App from './App'

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
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'hotels',
        element: <Hotels />,
      },
      {
        path: 'flights',
        element: <Flights />,
      },
      {
        path: 'bookings',
        element: <Bookings />,
      },
      {
        path: 'destinations',
        element: <Destinations />,
      },
      {
        path: 'discover',
        element: <Discover />,
      },
      {
        path: '*', // Catch all other paths
        element: <Home />, // Show Home, but keep the URL as-is
      },
    ],
  },
])

export default router
