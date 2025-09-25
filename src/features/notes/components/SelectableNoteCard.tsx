import React from 'react'
import clsx from 'clsx'
import { type INoteSummary } from '../types'
import ProgressiveImage from '@/components/ProgressiveImage'

export interface SelectableNoteCardProps {
  note: INoteSummary
  value?: boolean
  onValueChange?: (value?: boolean) => void
}

const SelectableNoteCard = (props: SelectableNoteCardProps) => {
  const {
    note,
    value = false,
    onValueChange
  } = props

  const {
    name,
    thumbnailUrl
  } = note

  const handleOnClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onValueChange?.(!value)
  }

  return (
    <button
      className='flex flex-col group box-border'
      onClick={handleOnClick}
    >
      <div
        className={clsx(
          'w-full aspect-square rounded-xl overflow-hidden box-border',
          'transition-all duration-100',
          'group-hover:border-primary border-2',
          value && 'border-primary'
        )}
      >
        <div
          className={clsx(
            'w-full aspect-square rounded-xl overflow-hidden',
            value && 'scale-[0.95]'
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
