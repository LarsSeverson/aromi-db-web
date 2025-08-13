import React, { useState } from 'react'
import { type IAccordSummary } from '../types'
import clsx from 'clsx'

export interface SelectableAccordCardProps {
  accord: IAccordSummary
  onSelected?: (accord: IAccordSummary, value: boolean) => void
}

const SelectableAccordCard = (props: SelectableAccordCardProps) => {
  const { accord, onSelected } = props
  const { name, color } = accord

  const [isSelected, setIsSelected] = useState(false)

  const handleOnClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const nextSelected = !isSelected
    setIsSelected(nextSelected)

    onSelected?.(accord, nextSelected)
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
            'w-full aspect-square rounded-xl bg-surface',
            isSelected && 'scale-[0.95]'
          )}
          style={{ backgroundColor: color }}
        />
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

export default SelectableAccordCard
