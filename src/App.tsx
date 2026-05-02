import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Hero from './components/Hero'

import { jadooTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={jadooTheme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  )
}

export default App
