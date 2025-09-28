import React from 'react'
import DraftPreviewCard from './DraftPreviewCard'
import type { IFragranceRequestDraftPreview } from '../types'

export interface DraftsListItemProps {
  draft: IFragranceRequestDraftPreview
  onOpenDraft?: (id: string) => void
}

const DraftsListItem = (props: DraftsListItemProps) => {
  const { draft, onOpenDraft } = props

  const handleOnClick = () => {
    onOpenDraft?.(draft.id)
  }

  return (
    <DraftPreviewCard
      draft={draft}
      onClick={handleOnClick}
    />
  )
}

export default DraftsListItem