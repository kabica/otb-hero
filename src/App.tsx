import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Nav'
import { jadooTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={jadooTheme}>
      <CssBaseline />
      <Navbar /> {/* Always visible on every page */}
      <Outlet /> {/* Individual pages will render here */}
    </ThemeProvider>
  )
}

export default App
