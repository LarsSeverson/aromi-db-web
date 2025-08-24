import SelectableAccordsGrid from '@/features/accords/components/SelectableAccordsGrid'
import { useAccords } from '@/features/accords/hooks/useAccords'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'

const NewFragranceAccordsSection = () => {
  const {
    data: accords,

    loading,
    loadingMore,
    hasMore,

    loadMore
  } = useAccords()

  const [isExpanded, setIsExpanded] = useState(false)

  const trimmed = useMemo(
    () => isExpanded ? accords : accords.slice(0, 24),
    [isExpanded, accords]
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
      <span
        className='text-lg'
      >
        Accords
      </span>

      <div
        className='w-full flex flex-col'
      >
        <SelectableAccordsGrid
          accords={trimmed}
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

export default NewFragranceAccordsSection
