import { createContext, useContext } from 'react'
import { type useFragranceRequestDraft } from '../hooks/useFragranceRequestDraft'

export type UseFragranceDraftReturn = ReturnType<typeof useFragranceRequestDraft>
export const FragranceDraftContext = createContext<UseFragranceDraftReturn | null>(null)

export const useFragranceDraftContext = () => {
  const context = useContext(FragranceDraftContext)
  if (context == null) {
    throw new Error('useFragranceDraftContext must be used within a FragranceDraftProvider')
  }

  return context
}
