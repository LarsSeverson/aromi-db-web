import { useParams } from '@tanstack/react-router'
import React, { useMemo } from 'react'
import DraftListItemCard from './DraftListItemCard'
import { useMyFragranceRequests } from '@/features/users'

const DraftsSidebarList = () => {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const { id } = useParams({ from: '/drafts/fragrances/$id/', shouldThrow: false }) ?? {}
  const { fragranceRequests } = useMyFragranceRequests({ status: 'DRAFT' })

  const selectedRequest = useMemo(
    () => fragranceRequests.find(draft => draft.id === id),
    [fragranceRequests, id]
  )

  return (
    <div
      className='w-full flex flex-col gap-2'
    >
      {fragranceRequests
        .map(request => (
          <DraftListItemCard
            key={request.id}
            draft={request}
            isSelected={selectedRequest?.id === request.id}
          />
        ))}
    </div>
  )
}

export default DraftsSidebarList
