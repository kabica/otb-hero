import { Box, Typography, Container, Button } from '@mui/material';

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#74727245', // Dark background for contrast
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h1" sx={{ mb: 1, color: 'white' }}>
          CREATIVE
        </Typography>

        <Typography variant="h1" sx={{ color: '#555', mb: 4 }}>
          DEVELOPER
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 1 }}>
          Chris Allow / Web Developer
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 500, mb: 6, fontSize: '1.1rem' }}
        >
          Full-stack developer and hacker extrordinaire. Jaaamm is my skinny legend and I am a big
          fan of the color orange.
        </Typography>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            variant="outlined"
            size="large"
            href="#projects"
            sx={{
              borderColor: 'white',
              color: 'white',
              px: 5,
              py: 1.5,
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            EXPLORE MY WORK
          </Button>

          <Button variant="text" size="large" href="#contact" sx={{ color: 'text.secondary' }}>
            GET IN TOUCH →
          </Button>
        </Box>
      </Container>
      {/* Optional subtle background line pattern (static) */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '20%',
          width: '50%',
          height: '70%',
          background: `
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )
          `,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
