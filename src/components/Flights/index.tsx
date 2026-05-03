// ──────────── Static + External Deps. ────────────
import * as React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const flights = [
  {
    route: 'New York → Paris',
    airport: 'JFK to CDG',
    duration: '7h 20m',
    price: '$620',
  },
  {
    route: 'Toronto → Tokyo',
    airport: 'YYZ to HND',
    duration: '13h 05m',
    price: '$940',
  },
  {
    route: 'London → Santorini',
    airport: 'LHR to JTR',
    duration: '3h 55m',
    price: '$280',
  },
]

export default function Flights(): React.ReactElement {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h4" color="accent" sx={{ fontWeight: 700, mb: 1 }}>
          Book Your Flight
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 560 }}>
          Discover smooth routes, simple fares, and flights that get you closer to your next
          adventure.
        </Typography>

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
          {flights.map((flight) => (
            <Card
              key={flight.route}
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
                <FlightTakeoffIcon sx={{ color: 'accent.main', fontSize: 38, mb: 2 }} />

                <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', mb: 1 }}>
                  {flight.route}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography color="text.secondary">{flight.airport}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 3 }}>
                  <AccessTimeIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography color="text.secondary">{flight.duration}</Typography>
                </Box>

                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 3 }}>
                  From {flight.price}
                </Typography>

                <Button fullWidth variant="outlined" color="accent">
                  View Flight
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
