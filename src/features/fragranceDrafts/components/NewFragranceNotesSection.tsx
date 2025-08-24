import SelectableNotesGrid from '@/features/notes/components/SelectableNotesGrid'
import { useNotes } from '@/features/notes/hooks/useNotes'
import { NOTE_LAYER_OPTIONS } from '@/features/notes/types'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'

const NewFragranceNotesSection = () => {
  const {
    data: notes,

    loading,
    loadingMore,
    hasMore,

    loadMore
  } = useNotes()

  const [isExpanded, setIsExpanded] = useState(false)

  const trimmed = useMemo(
    () => isExpanded ? notes : notes.slice(0, 24),
    [isExpanded, notes]
  )

  const canShowMore = useMemo(
    () => hasMore || (!hasMore && !isExpanded),
    [hasMore, isExpanded]
  )

  const handeOnShowMore = () => {
    setIsExpanded(true)
    void loadMore()
  }

  const handleOnNotHasMore = () => {
    setIsExpanded(prev => !prev)
  }

  const handleOnShowMoreOrNotHasMore = () => {
    if (!hasMore) {
      handleOnNotHasMore()
    } else {
      handeOnShowMore()
    }
  }

  return (
    <section
      className='max-w-4xl w-full self-center flex flex-col gap-5'
    >
      <div
        className='flex items-center justify-between'
      >
        <span
          className='text-lg'
        >
          Notes
        </span>

        <SelectInput
          options={NOTE_LAYER_OPTIONS}
        />
      </div>

      <div
        className='w-full flex flex-col'
      >

        <SelectableNotesGrid
          notes={trimmed}
          isLoading={loading || loadingMore}
        />

        <button
          className={clsx(
            'font-semibold text-md border self-center min-w-52',
            'px-3 py-2 rounded-sm mt-3',
            hasMore && 'hover:bg-surface'
          )}
          onClick={handleOnShowMoreOrNotHasMore}
        >
          {canShowMore ? 'Show More' : 'Show Less'}
        </button>
      </div>
    </section>
  )
}

export default NewFragranceNotesSection
