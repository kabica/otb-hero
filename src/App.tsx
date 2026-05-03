import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import decor from '../public/decor.png'
import Navbar from './components/Nav'
import { jadooTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={jadooTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${decor})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // or 'contain'
          backgroundPosition: 'top center',
          overflowX: 'hidden',
        }}
      >
        <Navbar />
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}

export default App
