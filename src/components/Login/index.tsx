// ──────────── Static + Imports ────────────
import * as React from 'react'
import { Box, TextField, Button, Typography, Alert } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password is too long'),
})

type LoginForm = z.infer<typeof loginSchema>

const Login = () => {
  const [submitError, setSubmitError] = React.useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur', // Show errors when user leaves the field
  })

  const onSubmit = React.useCallback(
    async (data: LoginForm) => {
      setSubmitError('')

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log('Login attempt:', data)

        login()
        navigate('/')
      } catch (err) {
        console.log({ err })
        setSubmitError('Invalid email or password')
      }
    },
    [login, navigate]
  )

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          mt: 8,
          width: '100%',
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" color="accent" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome Back
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Sign in to continue to Jadoo
        </Typography>

        {submitError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {submitError}
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            slotProps={{
              formHelperText: {
                sx: {
                  color: 'error.main',
                  fontSize: '0.75rem',
                  mt: 0.5,
                },
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{
              formHelperText: {
                sx: {
                  color: 'error.main',
                  fontSize: '0.75rem',
                  mt: 0.5,
                },
              },
            }}
          />

          <Button
            color="accent"
            type="submit"
            fullWidth
            variant="outlined"
            size="large"
            disabled={isSubmitting}
            sx={{ mt: 8, py: 1.5, fontWeight: 600 }}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Login
