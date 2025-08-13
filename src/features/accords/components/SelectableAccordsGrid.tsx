import React from 'react'
import { type IAccordSummary } from '../types'
import clsx from 'clsx'
import SelectableAccordCard from './SelectableAccordCard'
import SelectableAccordCardSkeleton from './SelectableAccordCardSkeleton'

export interface SelectableAccordsGridProps {
  accords: IAccordSummary[]
  isLoading?: boolean
}

const SelectableAccordsGrid = (props: SelectableAccordsGridProps) => {
  const { accords, isLoading = false } = props

  const skeletons = Array.from({ length: 12 })

  return (
    <div
      className={clsx(
        'grid grid-cols-[repeat(auto-fit,minmax(60px,128px))]',
        'gap-3 w-full justify-center'
      )}
    >
      {accords
        .map(accord => (
          <SelectableAccordCard
            key={accord.id}
            accord={accord}
          />
        ))}

      {isLoading && skeletons
        .map((_, index) => (
          <SelectableAccordCardSkeleton
            key={index}
          />
        ))}
    </div>
  )
}

export default SelectableAccordsGrid
