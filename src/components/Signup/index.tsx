// ──────────── Static + Imports ────────────
import * as React from 'react'
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signupSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(50, 'Name is too long'),
    email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password is too long'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type SignupForm = z.infer<typeof signupSchema>

const helperTextSx = {
  sx: {
    color: 'error.main',
    fontSize: '0.75rem',
    mt: 0.5,
  },
}

const Signup = () => {
  const [submitError, setSubmitError] = React.useState('')
  const navigate = useNavigate()
  const { signup } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  })

  const onSubmit = React.useCallback(
    async (data: SignupForm) => {
      setSubmitError('')

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        console.log('Login attempt:', data)

        signup()
        navigate('/')
      } catch (err) {
        console.log({ err })
        setSubmitError('Invalid email or password')
      }
    },
    [signup, navigate]
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
          Create Account
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Start planning your next adventure with Jadoo.
        </Typography>

        {submitError && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {submitError}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
            slotProps={{ formHelperText: helperTextSx }}
          />

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            slotProps={{ formHelperText: helperTextSx }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            slotProps={{ formHelperText: helperTextSx }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            {...register('confirmPassword')}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            slotProps={{ formHelperText: helperTextSx }}
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
            {isSubmitting ? 'Creating account...' : 'Sign Up'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Signup
