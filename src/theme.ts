// ──────────── Static + Imports ────────────
import { createTheme } from '@mui/material/styles'

// ──────────── Custom Palette  ────────────
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }

  interface TypographyVariants {
    creative: React.CSSProperties
    developer: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    creative?: React.CSSProperties
    developer?: React.CSSProperties
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    creative: true
    developer: true
  }
}

// ──────────── Light Theme ────────────
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#111111' },
    accent: {
      main: '#ff7b00ff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },

  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',

    creative: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '7rem',
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: '#111111',
    },

    developer: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontSize: '7rem',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-0.06em',
      color: '#666666',
    },

    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        },
      },
    },
  },
})

// ──────────── Jadoo Theme ────────────
export const jadooTheme = createTheme({
  palette: {
    primary: { main: '#181E4B' },
    secondary: { main: '#F1A501' },
    accent: { main: '#ff7b00' },
    text: {
      primary: '#181E4B',
      secondary: '#5E6282',
    },
    background: { default: '#FFFFFF' },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  components: {
    MuiAppBar: {
      styleOverrides: { root: { boxShadow: 'none' } },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
    },
  },
})
