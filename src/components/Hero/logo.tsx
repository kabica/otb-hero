import { Box, Typography } from '@mui/material';

function LogoO() {
  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: '#F4B400', // yellow outer
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: 'white',
          border: '4px solid black',
        }}
      />
    </Box>
  );
}

export default function JadooLogo() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '48px',
          fontWeight: 900,
          lineHeight: 1,
          color: 'black',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Jad
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, ml: 0.5 }}>
        <LogoO />
        <LogoO />
      </Box>
    </Box>
  );
}
