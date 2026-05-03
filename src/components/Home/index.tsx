// ──────────── Static + External Deps. ────────────
import * as React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Typography, Box, Button } from '@mui/material'
import squiggle from '../../../public/squiggle.png'
import travel from '../../../public/travel.png'
import decor from '../../../public/decor.png'

// ──────────── Custom Components ────────────
const Squiggle: React.FC = () => {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 'fit-content',
        whiteSpace: 'nowrap',
      }}
    >
      <Box
        component="img"
        src={squiggle}
        alt=""
        aria-hidden="true"
        sx={{
          width: '4.25em',
          height: 'auto',
          maxHeight: '12px',
          mt: '-0.2em',
          ml: '-0.4em',
          display: 'block',
          zIndex: -1,
        }}
      />
    </Box>
  )
}

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: 'calc(100vh - 80px)' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          gap: { xs: 4, md: 8 }, // Increased gap
          px: { xs: 3, sm: 5, md: 8, lg: 18 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            order: { xs: 1, md: 1 },
            pt: { xs: 3, md: 0 },
            minWidth: 0,
            maxWidth: '100%',
          }}
        >
          <Box
            sx={{
              mb: { xs: 2.5, md: 3 },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1.5, md: 2.5 },
              textAlign: 'left',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontWeight: 700,
                fontSize: 'clamp(12px, 2vw, 20px)',
                letterSpacing: { xs: 1, md: 2 },
                color: '#DF6951',
                textTransform: 'uppercase',
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
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
                fontSize: 'clamp(40px, 11vw, 84px)',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#181E4B',
                maxWidth: '100%',
              }}
            >
              Travel,{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: 'fit-content',
                  verticalAlign: 'baseline',
                }}
              >
                enjoy
                <Squiggle />
              </Box>
              <br />
              and live a new
              <br />
              and full life
            </Typography>

            <Typography
              sx={{
                fontFamily: `'Poppins', sans-serif`,
                fontSize: 'clamp(14px, 2vw, 16px)',
                color: '#5E6282',
                lineHeight: 1.7,
                textAlign: 'left',
                maxWidth: { xs: '100%', md: '500px' },
                whiteSpace: 'normal',
                overflowWrap: 'break-word',
              }}
            >
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
              engrossed listening. Park gate sell they west hard for the.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="discover"
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
                  <PlayArrowIcon
                    sx={{
                      color: '#fff',
                      fontSize: { xs: 22, md: 26 },
                      ml: '3px',
                    }}
                  />
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

        {/* Image Section */}
        <Box
          sx={{
            order: { xs: 2, md: 2 },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: { xs: 4, md: 0 },
            width: '100%',
          }}
        >
          <Box
            component="img"
            src={travel}
            alt="Traveller"
            sx={{
              width: '100%', // Balanced max size
              objectFit: 'contain',
              display: 'block',
              mx: 'auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function Jadoo(): React.ReactElement {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundImage: `url(${decor})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <Navbar /> */}
      <Hero />
    </Box>
  )
}
