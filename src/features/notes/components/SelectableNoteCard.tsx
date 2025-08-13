import clsx from 'clsx'
import { type INoteSummary } from '../types'

import React, { useState } from 'react'
import ProgressiveImage from '@/components/ProgressiveImage'

export interface SelectableNoteCardProps {
  note: INoteSummary
  onSelected?: (note: INoteSummary, value: boolean) => void
}

const SelectableNoteCard = (props: SelectableNoteCardProps) => {
  const { note, onSelected } = props
  const { name, thumbnailUrl } = note

  const [isSelected, setIsSelected] = useState(false)

  const handleOnClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const nextSelected = !isSelected
    setIsSelected(nextSelected)

    onSelected?.(note, nextSelected)
  }

  return (
    <button
      className='flex flex-col group'
      onClick={handleOnClick}
    >
      <div
        className={clsx(
          'w-full aspect-square rounded-xl overflow-hidden',
          'transition-all duration-100',
          'group-hover:outline-primary outline outline-none outline-2',
          isSelected && 'outline-primary'
        )}
      >
        <div
          className={clsx(
            'w-full aspect-square rounded-xl overflow-hidden',
            isSelected && 'scale-[0.95]'
          )}
        >
          <ProgressiveImage
            src={thumbnailUrl}
            alt={`Thumbnail of ${name}`}
          />
        </div>
      </div>

      <div
        className='mx-1 mt-1 flex'
      >
        <span
          className='text-sm font-medium truncate'
        >
          {name}
        </span>
      </div>
    </button>
  )
}

export default SelectableNoteCard
