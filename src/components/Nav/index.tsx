// ──────────── Static + Imports ────────────
import * as React from 'react'

import { useTheme } from '@mui/material/styles'
import logo from '../../../public/logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  Box,
  Button,
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

// ──────────── Custom Components ────────────
import Language from '../../helpers/language.tsx'

// ──────────── Navbar Component ────────────
export default function Navbar(): React.ReactElement {
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const linkSx = {
    fontFamily: `'DM Sans', sans-serif`,
    fontWeight: 550,
    fontSize: '0.95rem',
    color: '#212832',
    '&:hover': { color: '#F1A501' },
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  }

  const navItems = React.useMemo(() => {
    const items = [
      { label: 'Destinations', href: 'destinations', icon: <FmdGoodOutlined /> },
      { label: 'Hotels', href: 'hotels', icon: <SingleBed /> },
      { label: 'Flights', href: 'flights', icon: <FlightTakeoff /> },
      { label: 'Bookings', href: 'bookings', icon: <CalendarToday /> },
    ]
    return !isAuthenticated
      ? [...items, { label: 'Login', href: 'login', icon: <LockOutlined /> }]
      : items
  }, [isAuthenticated])

  const handleSwitch = React.useCallback(() => {
    if (isAuthenticated) {
      logout()
      navigate('/')
    }
  }, [isAuthenticated, logout, navigate])

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

        <Link to="/" style={{ textDecoration: 'none' }}>
          <Box
            component="img"
            src={logo}
            alt="Jadoo"
            sx={{
              height: 'clamp(28px, 5vw, 42px)',
              cursor: 'pointer',
              width: 'auto',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
        </Link>

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
              <Link key={item.label} to={item.href} style={linkSx}>
                {item.label}
              </Link>
            ))}

            <Button
              component={Link}
              to={isAuthenticated ? '/' : 'signup'}
              variant="outlined"
              onClick={isAuthenticated ? handleSwitch : undefined}
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
                '&:hover': {
                  borderColor: '#F1A501',
                  color: '#F1A501',
                  background: 'transparent',
                },
              }}
            >
              {isAuthenticated ? 'Logout' : 'Sign up'}
            </Button>

            <Language />
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
              <Button
                fullWidth
                color="accent"
                component={Link}
                to={isAuthenticated ? '/' : 'signup'}
                variant="outlined"
                onClick={() => {
                  setDrawerOpen(false)

                  if (isAuthenticated) {
                    handleSwitch()
                  }
                }}
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  borderRadius: '8px',
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 0.7, md: 0.85 },
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    borderColor: '#F1A501',
                    color: '#F1A501',
                    background: 'transparent',
                  },
                }}
              >
                {isAuthenticated ? 'Logout' : 'Sign up'}
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}
