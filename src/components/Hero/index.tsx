// ──────────── Static + Imports ────────────
import * as React from 'react'
import { Typography, Box, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

// ──────────── Custom Components ────────────
import travel from '../../../public/travel.png'
import Navbar from '../Navbar'

const fontLink = document.createElement('link')
fontLink.rel = 'stylesheet'
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Volkhov:wght@700&family=Poppins:wght@400;500;600;700&display=swap'
document.head.appendChild(fontLink)

const Squiggle: React.FC = () => {
  return (
    <svg
      viewBox="0 0 120 14"
      width="100%"
      height="14"
      preserveAspectRatio="none"
      style={{ display: 'block', marginTop: -6 }}
    >
      <path
        d="M2 10 Q18 2 36 10 Q54 18 72 10 Q90 2 108 10 Q114 12 118 9"
        stroke="#DF6951"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'center',
        // overflow: 'hidden',
      }}
    >
      {/* ── Beige blob ── */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '52%' },
          height: { xs: '42%', md: '100%' },
          background: '#F5EFE6',
          borderRadius: { xs: '0 0 55% 55%', md: '50% 0 0 50%' },
          zIndex: 0,
        }}
      />

      {/* ── Grid ── */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          px: { xs: 3, sm: 5, md: 8, lg: 12 },
          py: { xs: 5, md: 0 },
          gap: { xs: 0, md: 2 },
        }}
      >
        <Box sx={{ order: { xs: 2, md: 1 }, pt: { xs: 3, md: 0 } }}>
          {/* Headline */}
          <Box
            sx={{
              mb: { xs: 2.5, md: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1.5, md: 2.5 },
              // border: '1px solid red',
              textAlign: 'left',
            }}
          >
            {/* Header */}
            <Typography
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontWeight: 700,
                fontSize: 'clamp(12px, 2vw, 20px)',
                letterSpacing: {
                  xs: 1,
                  md: 2,
                },
                color: '#DF6951',
                textTransform: 'uppercase',

                // allow wrapping
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                lineHeight: 1.4,
              }}
            >
              Best Destinations Around The World
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: `'Volkhov', serif`,
                fontWeight: 700,
                fontSize: 'clamp(30px, 9vw, 84px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                color: '#181E4B',

                maxWidth: '100%',
                minWidth: 0,
                whiteSpace: 'normal',
                overflowWrap: 'anywhere',
                wordBreak: 'normal',
              }}
            >
              Travel,{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  verticalAlign: 'baseline',
                }}
              >
                enjoy
                <Squiggle />
              </Box>{' '}
              and live a full new life
            </Typography>
            {/* Body Copy */}
            <Typography
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#5E6282',
                lineHeight: '30px',
                textAlign: 'left',
                // prevent super long unreadable lines
                maxWidth: {
                  xs: '100%',
                  md: '500px',
                },
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
              engrossed listening. Park gate sell they west hard for the.
            </Typography>

            {/* Footer */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 3, md: 4 },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  fontFamily: `'Poppins', sans-serif`,
                  fontWeight: 600,
                  background: '#F1A501',
                  color: '#fff',
                  borderRadius: '10px',
                  px: { xs: 3.5, md: 4.5 },
                  py: { xs: 1.3, md: 1.7 },
                  textTransform: 'none',
                  boxShadow: '0 10px 28px rgba(241,165,1,0.4)',
                  '&:hover': {
                    background: '#d9940a',
                    boxShadow: '0 12px 32px rgba(241,165,1,0.5)',
                  },
                }}
              >
                Find out more
              </Button>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  cursor: 'pointer',
                  '&:hover .play-circle': { transform: 'scale(1.1)' },
                }}
              >
                <Box
                  className="play-circle"
                  sx={{
                    width: { xs: 46, md: 54 },
                    height: { xs: 46, md: 54 },
                    borderRadius: '50%',
                    background: '#DF6951',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 22px rgba(223,105,81,0.4)',
                    transition: 'transform 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  <PlayArrowIcon sx={{ color: '#fff', fontSize: { xs: 22, md: 26 }, ml: '3px' }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: `'Poppins', sans-serif`,
                    fontWeight: 500,
                    fontSize: { xs: '0.9rem', md: '0.95rem' },
                    color: '#181E4B',
                  }}
                >
                  Play Demo
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            order: { xs: 2, md: 1 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            py: { xs: 3, md: 0 },
          }}
        >
          <Box
            component="img"
            src={travel}
            alt="Traveller"
            sx={{
              width: 'clamp(500px, 45vw, 540px)',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

// ── Page root ─────────────────────────────────────────────────────────────────
export default function Jadoo(): React.ReactElement {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  )
}
