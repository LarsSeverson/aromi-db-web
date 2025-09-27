import React, { useEffect } from 'react'
import { AuthContext } from './AuthContext'
import useAuth from '../hooks/useAuth'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const auth = useAuth()

  useEffect(() => {
    void auth.initialize()
  }, [auth])

  if (!auth.hasInitialized) return null

  return (
    <AuthContext.Provider
      value={auth}
    >
      {children}
    </AuthContext.Provider>
  )
}
