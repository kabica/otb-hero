import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material'

import LocationOnIcon from '@mui/icons-material/LocationOn'
import StarIcon from '@mui/icons-material/Star'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const destinations = [
  {
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    rating: '4.9',
    price: '$1,200',
  },
  {
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    rating: '4.8',
    price: '$980',
  },
  {
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    rating: '4.7',
    price: '$1,050',
  },
]

export default function Destinations(): React.ReactElement {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Header */}
        <Typography
          variant="h4"
          color="accent"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          Explore Destinations
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mb: 5,
            maxWidth: 550,
          }}
        >
          Discover trending escapes curated for travelers who want unforgettable experiences.
        </Typography>

        {/* Trending Section */}
        <Box
          sx={{
            position: 'relative',
            mb: 5,
          }}
        >
          {/* Background card goes behind blob */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              //   background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(18px)',
              borderRadius: 4,
              boxShadow: '0 14px 40px rgba(24,30,75,0.08)',
              //   zIndex: -10,
              opacity: 0.6,
              border: '1px solid #ff7b00',
            }}
          />

          {/* Text stays above blob */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 3,
              p: { xs: 3, md: 4 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#181E4B',
                }}
              >
                Trending This Month
              </Typography>

              <Typography color="text.secondary">
                Santorini bookings are up 34% this month.
              </Typography>
            </Box>

            <TrendingUpIcon
              sx={{
                fontSize: 60,
                color: 'accent.main',
              }}
            />
          </Box>
        </Box>

        {/* Destination Cards */}
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
          {destinations.map((destination) => (
            <Card
              key={destination.name}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 3,
                transition: '0.25s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="220"
                image={destination.image}
                alt={destination.name}
              />

              <CardContent>
                {/* Title + Rating */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.2rem',
                    }}
                  >
                    {destination.name}
                  </Typography>

                  <Chip
                    icon={<StarIcon />}
                    label={destination.rating}
                    size="small"
                    color="warning"
                  />
                </Box>

                {/* Location */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 18,
                      color: 'text.secondary',
                    }}
                  />

                  <Typography color="text.secondary">{destination.country}</Typography>
                </Box>

                {/* Price */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  From {destination.price}
                </Typography>

                {/* CTA */}
                <Button fullWidth variant="outlined" color="accent">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
