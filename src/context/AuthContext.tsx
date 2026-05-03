import * as React from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
  signup: () => void
}

const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    localStorage.getItem('isAuthenticated') === 'true'
  )

  const login = React.useCallback(() => {
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(true)
  }, [])

  const logout = React.useCallback(() => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
  }, [])

  const signup = React.useCallback(() => {
    localStorage.setItem('isAuthenticated', 'true')
    setIsAuthenticated(true)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
