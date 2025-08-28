import React, { useRef } from 'react'
import { type IAccordSummary } from '../types'
import clsx from 'clsx'
import SelectableAccordCard from './SelectableAccordCard'
import SelectableAccordCardSkeleton from './SelectableAccordCardSkeleton'

export interface SelectableAccordsGridProps {
  accords: IAccordSummary[]
  defaultSelected?: Set<string>
  isLoading?: boolean
  onSelectedChange?: (selectedIds: Set<string>) => void
}

const SelectableAccordsGrid = (props: SelectableAccordsGridProps) => {
  const {
    accords,
    isLoading = false,
    defaultSelected,
    onSelectedChange
  } = props

  const selectedIds = useRef(new Set(defaultSelected ?? []))
  const skeletons = Array.from({ length: 12 })

  const handleOnSelected = (accord: IAccordSummary, value: boolean) => {
    if (value) {
      selectedIds.current.add(accord.id)
    } else {
      selectedIds.current.delete(accord.id)
    }

    onSelectedChange?.(selectedIds.current)
  }

  return (
    <div
      className={clsx(
        'grid grid-cols-[repeat(auto-fit,minmax(60px,128px))]',
        'gap-3 w-full justify-center py-3'
      )}
    >
      {accords
        .map(accord => (
          <SelectableAccordCard
            key={accord.id}
            accord={accord}
            defaultSelected={defaultSelected?.has(accord.id)}
            onSelected={handleOnSelected}
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
