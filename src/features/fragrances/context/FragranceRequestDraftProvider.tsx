import React from 'react'
import { useFragranceRequestDraft } from '../hooks/useFragranceRequestDraft'
import { FragranceRequestDraftContext } from './FragranceRequestDraftContext'

export interface FragranceRequestDraftProviderProps {
  id: string
  initialVersion: number
  children: React.ReactNode
}

export const FragranceRequestDraftProvider = (props: FragranceRequestDraftProviderProps) => {
  const { id, initialVersion, children } = props

  const request = useFragranceRequestDraft({ id, initialVersion })

  return (
    <FragranceRequestDraftContext.Provider
      value={request}
    >
      {children}
    </FragranceRequestDraftContext.Provider>
  )
}
