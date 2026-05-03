import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import ExploreIcon from '@mui/icons-material/Explore'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Curated destinations',
    text: 'Discover hand-picked places designed around memorable travel experiences.',
    icon: <ExploreIcon sx={{ color: 'accent.main', fontSize: 36 }} />,
  },
  {
    title: 'Simple trip planning',
    text: 'Compare hotels, flights, and bookings without bouncing between apps.',
    icon: <AutoAwesomeIcon sx={{ color: 'accent.main', fontSize: 36 }} />,
  },
  {
    title: 'Everything in one place',
    text: 'Keep your upcoming travel organized from inspiration to confirmation.',
    icon: <SupportAgentIcon sx={{ color: 'accent.main', fontSize: 36 }} />,
  },
]

export default function About(): React.ReactElement {
  return (
    <Box sx={{ minHeight: '100vh', px: { xs: 2, md: 8 }, py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
        <Typography variant="h4" color="accent" sx={{ fontWeight: 700, mb: 1 }}>
          Travel smarter with Jadoo
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 5, maxWidth: 620 }}>
          Jadoo helps you explore destinations, compare stays, browse flights, and manage your trips
          from one clean travel dashboard.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 5,
          }}
        >
          {features.map((feature) => (
            <Card
              key={feature.title}
              sx={{
                borderRadius: 4,
                boxShadow: 3,
                transition: '0.2s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>

                <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>
                  {feature.title}
                </Typography>

                <Typography color="text.secondary">{feature.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 12px 40px rgba(24,30,75,0.08)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#181E4B', mb: 1 }}>
            Ready to plan your next escape?
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Start with destinations or create an account to manage your full travel journey.
          </Typography>

          <Button
            component={Link}
            to="/destinations"
            variant="contained"
            color="secondary"
            sx={{ mr: 2, px: 4 }}
          >
            Explore
          </Button>

          <Button component={Link} to="/signup" variant="outlined" color="accent" sx={{ px: 4 }}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
