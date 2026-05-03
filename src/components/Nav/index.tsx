// ──────────── Static + Imports ────────────
import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import logo from '../../../public/logo.png'
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
  ListItemIcon,
} from '@mui/material'
import {
  Menu,
  FlightTakeoff,
  SingleBed,
  CalendarToday,
  FmdGoodOutlined,
  LockOutlined,
} from '@mui/icons-material'

// ──────────── Navbar Component ────────────
export default function Navbar(): React.ReactElement {
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

  const navItems = React.useMemo(() => {
    return [
      { label: 'Destinations', href: 'destinations', icon: <FmdGoodOutlined /> },
      { label: 'Hotels', href: 'hotels', icon: <SingleBed /> },
      { label: 'Flights', href: 'flights', icon: <FlightTakeoff /> },
      { label: 'Bookings', href: 'bookings', icon: <CalendarToday /> },
      { label: 'Login', href: 'login', icon: <LockOutlined /> },
    ]
  }, [])

  return (
    <AppBar position="static" sx={{ background: 'transparent', color: 'text.primary' }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          px: { xs: 3, sm: 5, md: 8, lg: 18 },
          py: { xs: 1.5, md: 2.5 },
          minHeight: { xs: 64, md: 80 },
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Jadoo"
          sx={{
            height: 'clamp(28px, 5vw, 42px)', // Slightly bigger logo
            cursor: 'pointer',
            width: 'auto',
          }}
        />

        {/* Desktop nav */}
        {!isMobile && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2.5, md: 3.5, lg: 6, xl: 10 },
              flexWrap: 'nowrap',
            }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} underline="none" sx={linkSx}>
                {item.label}
              </Link>
            ))}

            <Button
              variant="outlined"
              href="signup"
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontWeight: 600,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                color: '#181E4B',
                borderColor: '#181E4B',
                borderRadius: '8px',
                px: { xs: 2.5, md: 3 },
                py: { xs: 0.7, md: 0.85 },
                textTransform: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 1,
                '&:hover': {
                  borderColor: '#F1A501',
                  color: '#F1A501',
                  background: 'transparent',
                },
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
            <Menu />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240, pt: 4 }}>
          <List>
            {[...navItems].map((item) => (
              <ListItem
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{ py: 1.2 }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    fontFamily: `'Poppins', sans-serif`,
                    fontWeight: 500,
                    color: '#DF6951',
                  }}
                />
              </ListItem>
            ))}
            <ListItem sx={{ py: 1.2 }}>
              <Button fullWidth variant="outlined" color="accent" href="signup">
                Signup
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
