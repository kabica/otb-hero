import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import Bookings from './components/Bookings'
import Destinations from './components/Destinations'

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
        path: '*', // Catch all other paths
        element: <Home />, // Show Home, but keep the URL as-is
      },
    ],
  },
])

export default router
