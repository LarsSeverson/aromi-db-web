import clsx from 'clsx'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import type { IconBaseProps } from 'react-icons/lib'

export const AccordionIcon = (props: IconBaseProps) => {
  return (
    <div
      className={clsx(
        'group-data-[panel-open]:rotate-90 h-full flex items-center justify-center',
        'transition-transform ease-in-out duration-100'
      )}
    >
      <HiChevronRight
        {...props}
        className={clsx(
          props.className
        )}
        size={18}
      />
    </div>
  )
}
