import { useParams } from '@tanstack/react-router'
import React, { useMemo } from 'react'
import { useFragranceDrafts } from '../hooks/useFragranceDrafts'
import FragranceDraftItemCard from './FragranceDraftItemCard'

const FragranceDraftsSidebarList = () => {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const { id } = useParams({ from: '/drafts/fragrance/$id/', shouldThrow: false }) ?? {}
  const { fragranceDrafts } = useFragranceDrafts()

  const selectedDraft = useMemo(
    () => fragranceDrafts.find(draft => draft.id === id),
    [fragranceDrafts, id]
  )

  return (
    <div
      className='w-full flex flex-col gap-2'
    >
      {fragranceDrafts
        .map(draft => (
          <FragranceDraftItemCard
            key={draft.id}
            draft={draft}
            isSelected={selectedDraft?.id === draft.id}
          />
        ))}
    </div>
  )
}

export default FragranceDraftsSidebarList
