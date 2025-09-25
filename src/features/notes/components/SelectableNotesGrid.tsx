import React, { useCallback } from 'react'
import { type INoteSummary } from '../types'
import clsx from 'clsx'
import SelectableNoteCard from './SelectableNoteCard'
import SelectableNoteCardSkeleton from './SelectableNoteCardSkeleton'

export interface SelectableNotesGridProps {
  notes: INoteSummary[]
  isLoading?: boolean
  selectedIds?: Set<string>
  onSelectedChange?: (id: string, value: boolean) => void
}

const SelectableNotesGrid = (props: SelectableNotesGridProps) => {
  const {
    notes,
    isLoading = false,
    selectedIds,
    onSelectedChange
  } = props

  const skeletons = Array.from({ length: 12 })

  const handleOnSelected = useCallback(
    (note: INoteSummary, value: boolean) => {
      onSelectedChange?.(note.id, value)
    },
    [onSelectedChange]
  )

  const onRenderNoteCard = useCallback(
    (note: INoteSummary) => {
      const handleOnValueChange = (value?: boolean) => {
        handleOnSelected(note, value ?? false)
      }

      return (
        <SelectableNoteCard
          key={note.id}
          note={note}
          value={selectedIds?.has(note.id)}
          onValueChange={handleOnValueChange}
        />
      )
    },
    [handleOnSelected, selectedIds]
  )

  return (
    <div
      className={clsx(
        'grid grid-cols-[repeat(auto-fit,minmax(60px,128px))]',
        'gap-3 w-full justify-center py-3'
      )}
    >
      {notes.map(onRenderNoteCard)}

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
