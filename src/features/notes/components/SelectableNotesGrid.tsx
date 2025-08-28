import React from 'react'
import { type INoteSummary } from '../types'
import clsx from 'clsx'
import SelectableNoteCard from './SelectableNoteCard'
import SelectableNoteCardSkeleton from './SelectableNoteCardSkeleton'

export interface SelectableNotesGridProps {
  notes: INoteSummary[]
  isLoading?: boolean
}

const SelectableNotesGrid = (props: SelectableNotesGridProps) => {
  const { notes, isLoading = false } = props

  const skeletons = Array.from({ length: 12 })

  return (
    <div
      className={clsx(
        'grid grid-cols-[repeat(auto-fit,minmax(60px,128px))]',
        'gap-3 w-full justify-center py-3'
      )}
    >
      {notes
        .map(note => (
          <SelectableNoteCard
            key={note.id}
            note={note}
          />
        ))}

      {isLoading && skeletons
        .map((_, index) => (
          <SelectableNoteCardSkeleton
            key={index}
          />
        ))}
    </div>
  )
}

export default SelectableNotesGrid
