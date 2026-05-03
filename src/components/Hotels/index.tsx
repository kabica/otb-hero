// ──────────── Static + External Deps. ────────────
import * as React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const hotels = [
  {
    name: 'Santorini Escape',
    location: 'Santorini, Greece',
    price: '$240/night',
  },
  {
    name: 'Tokyo Sky Stay',
    location: 'Tokyo, Japan',
    price: '$180/night',
  },
  {
    name: 'Paris Garden Hotel',
    location: 'Paris, France',
    price: '$210/night',
  },
]

export default function Hotels(): React.ReactElement {
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
          Find Your Stay
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
          Hand-picked hotels for your next adventure. Simple, elegant, and ready when you are.
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
          {hotels.map((hotel) => (
            <Card
              key={hotel.name}
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
                <HotelIcon sx={{ color: 'accent.main', fontSize: 36, mb: 2 }} />

                <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', mb: 1 }}>
                  {hotel.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 2 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                  <Typography color="text.secondary">{hotel.location}</Typography>
                </Box>

                <Typography sx={{ fontWeight: 600, mb: 3 }}>{hotel.price}</Typography>

                <Button fullWidth variant="outlined" color="accent">
                  View Hotel
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
