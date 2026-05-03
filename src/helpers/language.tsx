import * as React from 'react'
import { Typography, Menu, MenuItem, Box } from '@mui/material'
import ReactCountryFlag from 'react-country-flag'

const languages = [
  { code: 'CA', label: 'English' },
  { code: 'CA', label: 'Français' },
  { code: 'US', label: 'Español' },
]

const LanguageSelector: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (code: string) => {
    console.log(`Language changed to: ${code}`)
    // TODO: Add language switching logic here
    handleClose()
  }

  return (
    <>
      <Typography
        sx={{
          fontFamily: `'Poppins', sans-serif`,
          fontWeight: 500,
          fontSize: '0.95rem',
          color: '#181E4B',
          cursor: 'pointer',
          userSelect: 'none',
          '&:hover': { color: '#F1A501' },
          whiteSpace: 'nowrap',
        }}
        onClick={handleClick}
      >
        EN ▾
      </Typography>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            sx={{
              minWidth: 130,
              fontFamily: `'Poppins', sans-serif`,
              py: 1.2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
              <ReactCountryFlag
                countryCode={lang.code}
                svg
                style={{ width: '1.35em', height: '1em', borderRadius: '2px' }}
              />
              <span>{lang.label}</span>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default LanguageSelector
