import React, { useEffect, useState } from 'react'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { type INoteSummary } from '@/features/notes/types'
import { useFragranceDraftNotes } from '../hooks/useFragranceDraftNotes'
import { type NoteLayer } from '@/generated/graphql'
import SelectableNotesGrid from '@/features/notes/components/SelectableNotesGrid'
import { useDebounce } from '@/hooks/useDebounce'

export interface DraftNotesGridProps {
  notes: INoteSummary[]
  layer: NoteLayer
  isLoading?: boolean
}

const DraftNotesGrid = (props: DraftNotesGridProps) => {
  const {
    notes,
    layer,
    isLoading = false
  } = props

  const { id, updateNotes } = useFragranceDraftContext()
  const { draftNotes } = useFragranceDraftNotes(id, layer)

  const [selectedNoteIds, setSelectedNoteIds] = useState(new Set(draftNotes?.map(n => n.id) ?? []))

  const handleUpdateNotes = useDebounce(
    (selectedIds: Set<string>) => {
      void updateNotes({ noteIds: Array.from(selectedIds), layer })
    },
    [layer]
  )

  const handleOnSelectedChange = (id: string, value: boolean) => {
    setSelectedNoteIds(prev => {
      const next = new Set(prev)
      if (value) {
        next.add(id)
      } else {
        next.delete(id)
      }

      handleUpdateNotes(next)
      return next
    })
  }

  useEffect(() => {
    setSelectedNoteIds(new Set(draftNotes?.map(n => n.id) ?? []))
  }, [draftNotes, layer])

  return (
    <SelectableNotesGrid
      notes={notes}
      selectedIds={selectedNoteIds}
      isLoading={isLoading}
      onSelectedChange={handleOnSelectedChange}
    />
  )
}

export default DraftNotesGrid
