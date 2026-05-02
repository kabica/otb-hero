import * as React from 'react'

import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MenuIcon from '@mui/icons-material/Menu'

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material'

const navItems = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Flights', href: '#flights' },
  { label: 'Bookings', href: '#bookings' },
]

export default function Navbar() {
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const linkSx = {
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: 500,
    fontSize: '0.95rem',
    color: '#181E4B',
    '&:hover': { color: '#F1A501' },
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
  }

  return (
    <AppBar position="static" sx={{ background: 'transparent', color: 'text.primary' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 3, sm: 5, md: 8, lg: 12 },
          py: { xs: 1.5, md: 2.5 },
          minHeight: { xs: 64, md: 80 },
        }}
      >
        {/* Logo */}
        <Typography
          sx={{
            fontFamily: `'Poppins', sans-serif`,
            fontWeight: 700,
            fontSize: { xs: '1.6rem', md: '1.9rem' },
            color: '#181E4B',
            letterSpacing: '-0.5px',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          Jad
          <Box component="span" sx={{ color: '#F1A501' }}>
            oo
          </Box>
        </Typography>

        {/* Desktop nav */}
        {!isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 3.5, lg: 5 } }}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} underline="none" sx={linkSx}>
                {item.label}
              </Link>
            ))}
            <Link href="#login" underline="none" sx={linkSx}>
              Login
            </Link>
            <Button
              variant="outlined"
              href="#signup"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontWeight: 600,
                fontSize: '0.9rem',
                color: '#181E4B',
                borderColor: '#181E4B',
                borderRadius: '8px',
                px: 2.5,
                py: 0.7,
                textTransform: 'none',
                '&:hover': { borderColor: '#F1A501', color: '#F1A501', background: 'transparent' },
              }}
            >
              Sign up
            </Button>
            <Typography sx={{ ...linkSx, cursor: 'pointer' }}>EN ▾</Typography>
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#181E4B' }}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240, pt: 4 }}>
          <List>
            {[
              ...navItems,
              { label: 'Login', href: '#login' },
              { label: 'Sign up', href: '#signup' },
            ].map((item) => (
              <ListItem
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ py: 1.2 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: `'Poppins', sans-serif`,
                    fontWeight: 500,
                    color: '#181E4B',
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
