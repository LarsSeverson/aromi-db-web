import { createContext, useContext } from 'react'
import type { useFragranceRequestDraft } from '../hooks/useFragranceRequestDraft'

export type UseFragranceRequestDraftReturn = ReturnType<typeof useFragranceRequestDraft>
export const FragranceRequestDraftContext = createContext<UseFragranceRequestDraftReturn | null>(null)

export const useFragranceRequestDraftContext = () => {
  const context = useContext(FragranceRequestDraftContext)
  if (context == null) {
    throw new Error('useFragranceRequestDraftContext must be used within a FragranceRequestDraftProvider')
  }

  return context
}
