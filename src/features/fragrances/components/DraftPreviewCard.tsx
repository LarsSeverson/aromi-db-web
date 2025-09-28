import React from 'react'
import type { IFragranceRequestDraftPreview } from '../types'
import clsx from 'clsx'
import DraftPreviewCardThumbnail from './DraftPreviewCardThumbnail'
import DraftPreviewCardMenu from './DraftPreviewCardMenu'

export interface DraftCardProps extends React.ComponentProps<'div'> {
  draft: IFragranceRequestDraftPreview
  onOpenDraft?: (draft: IFragranceRequestDraftPreview) => void
}

const DraftCard = (props: DraftCardProps) => {
  const { draft, onOpenDraft, ...rest } = props
  const { name } = draft

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onOpenDraft?.(draft)
    rest.onClick?.(event)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpenDraft?.(draft)
      rest.onKeyDown?.(event)
    }
  }

  return (
    <div
      {...rest}
      role='button'
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={clsx(
        'w-full h-full rounded-lg overflow-hidden border box-border',
        'cursor-pointer hover:brightness-95 flex flex-col',
        'transition-[all] duration-75'
      )}
    >
      <DraftPreviewCardThumbnail
        thumbnail={draft.image}
      />

      <div
        className='border-t pl-4 py-2 pr-2 flex items-center bg-surface flex-1 justify-between'
      >
        <span
          className='text-md font-medium truncate'
        >
          {name ?? 'Untitled draft'}
        </span>

        <DraftPreviewCardMenu
          draft={draft}
        />
      </div>
    </div>
  )
}

export default DraftCard
