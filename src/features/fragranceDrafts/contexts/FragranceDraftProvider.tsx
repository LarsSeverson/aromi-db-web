import React from 'react'
import { useFragranceDraft } from '../hooks/useFragranceDraft'
import { FragranceDraftContext } from './FragranceDraftContext'

export interface FragranceDraftProviderProps {
  id: string
  initialVersion: number
  children: React.ReactNode
}

export const FragranceDraftProvider = (props: FragranceDraftProviderProps) => {
  const { id, initialVersion, children } = props

  const draft = useFragranceDraft({ id, initialVersion })

  return (
    <FragranceDraftContext.Provider
      value={draft}
    >
      {children}
    </FragranceDraftContext.Provider>
  )
}
