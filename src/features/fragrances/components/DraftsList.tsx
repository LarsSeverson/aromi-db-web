import React, { useCallback } from 'react'
import { DynamicList } from '@/components/DynamicList'
import { useElementScrollRestoration, useNavigate } from '@tanstack/react-router'
import DraftsListItem from './DraftsListItem'
import type { IFragranceRequestDraftPreview } from '../types'
import { useMyFragranceRequests } from '@/features/users'
import DraftPreviewCardSkeleton from './DraftPreviewCardSkeleton'

export interface DraftListProps {
  containerWidth: number
}

const DraftsList = (props: DraftListProps) => {
  const { containerWidth } = props

  const navigate = useNavigate()
  const { fragranceRequests, isLoading, isLoadingMore, loadMore } = useMyFragranceRequests({ status: 'DRAFT' })

  const scrollEntry = useElementScrollRestoration({
    getKey: () => 'drafts',
    getElement: () => window
  })

  const hasNoDrafts = fragranceRequests.length === 0 && !isLoading && !isLoadingMore

  const handleOnDraftClick = useCallback(
    (id: string) => {
      void navigate({ to: '/drafts/fragrances/$id', params: { id } })
    },
    [navigate]
  )

  const handleOnEndReached = () => {
    void loadMore()
  }

  const onRenderDraft = useCallback(
    (draft: IFragranceRequestDraftPreview) => {
      return (
        <DraftsListItem
          key={draft.id}
          draft={draft}
          onOpenDraft={handleOnDraftClick}
        />
      )
    },
    [handleOnDraftClick]
  )

  const onRenderSkeleton = () => {
    return (
      <DraftPreviewCardSkeleton />
    )
  }

  return (
    <div>
      {hasNoDrafts && (
        <span
          className='text-light/90'
        >
          You don't have any drafts yet
        </span>
      )}

      <DynamicList
        items={fragranceRequests}
        loading={isLoading || isLoadingMore}
        containerWidth={containerWidth}
        initialScrollOffset={scrollEntry?.scrollY}
        onRenderItem={onRenderDraft}
        onRenderSkeleton={onRenderSkeleton}
        onEndReached={handleOnEndReached}
      />
    </div>
  )
}

export default DraftsList