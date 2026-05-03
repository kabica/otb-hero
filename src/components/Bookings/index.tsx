// ──────────── Static + External Deps. ────────────
import * as React from 'react'
import { Box, Button, Card, CardContent, Chip, LinearProgress, Typography } from '@mui/material'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import HotelIcon from '@mui/icons-material/Hotel'
import { Link } from 'react-router-dom'

import { useAuth } from '../../context/AuthContext'

const bookings = [
  {
    id: 'BK-1024',
    destination: 'Santorini, Greece',
    type: 'Hotel',
    date: 'Aug 14 - Aug 20',
    status: 'Confirmed',
  },
  {
    id: 'BK-2048',
    destination: 'Tokyo, Japan',
    type: 'Flight',
    date: 'Sep 02',
    status: 'Pending',
  },
  {
    id: 'BK-4096',
    destination: 'Paris, France',
    type: 'Hotel + Flight',
    date: 'Oct 11 - Oct 18',
    status: 'Confirmed',
  },
]

const getIcon = (type: string) => {
  if (type.includes('Flight') && type.includes('Hotel')) {
    return <EventAvailableIcon sx={{ color: 'accent.main', fontSize: 36 }} />
  }

  if (type.includes('Flight')) {
    return <FlightTakeoffIcon sx={{ color: 'accent.main', fontSize: 36 }} />
  }

  return <HotelIcon sx={{ color: 'accent.main', fontSize: 36 }} />
}

export default function Bookings(): React.ReactElement {
  const { isAuthenticated } = useAuth()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="h4" color="accent" sx={{ fontWeight: 700, mb: 1 }}>
          Your Bookings
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
          Manage upcoming trips, review reservations, and stay organized before takeoff.
        </Typography>

        {!isAuthenticated ? (
          <Box
            sx={{
              mt: 4,
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              //   background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 12px 40px rgba(24,30,75,0.08)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: '#181E4B',
              }}
            >
              Manage all your trips in one place ✈️
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3,
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              Sign in to track flights, hotel stays, confirmations, and upcoming travel plans from
              your personalized booking dashboard.
            </Typography>

            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="secondary"
              sx={{ mr: 2, px: 4 }}
            >
              Get Started
            </Button>

            <Button component={Link} to="/login" variant="outlined" color="accent" sx={{ px: 4 }}>
              Login
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                mb: 5,
                p: 4,
                borderRadius: 4,
                bgcolor: 'white',
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Travel Summary
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 3 }}>
                You’ve completed 6 of your 9 planned trips this year.
              </Typography>

              <LinearProgress
                variant="determinate"
                value={67}
                color="warning"
                sx={{
                  height: 10,
                  borderRadius: 10,
                  mb: 2,
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  6 completed
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  3 upcoming
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(3, 1fr)',
                },
                gap: 3,
              }}
            >
              {bookings.map((booking) => (
                <Card
                  key={booking.id}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: '0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>{getIcon(booking.type)}</Box>

                    <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', mb: 1 }}>
                      {booking.destination}
                    </Typography>

                    <Typography color="text.secondary" sx={{ mb: 1 }}>
                      {booking.type}
                    </Typography>

                    <Typography color="text.secondary" sx={{ mb: 2 }}>
                      {booking.date}
                    </Typography>

                    <Chip
                      label={booking.status}
                      color={booking.status === 'Confirmed' ? 'success' : 'warning'}
                      size="small"
                      sx={{ mb: 3 }}
                    />

                    <Button fullWidth variant="outlined" color="accent">
                      View Booking
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}
