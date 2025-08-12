import { createContext, useContext } from 'react'
import { type useMe } from '../hooks/useMe'

export type UseMeReturn = ReturnType<typeof useMe>
export const MyContext = createContext<UseMeReturn | null>(null)

export const useMyContext = (): UseMeReturn => {
  const context = useContext(MyContext)
  if (context == null) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }

  return context
}
