import clsx from 'clsx'
import React from 'react'

export const AccordionIcon = (props: React.ComponentProps<'svg'>) => {
  const { className, ...rest } = props
  return (
    <svg
      viewBox='0 0 16 16'
      aria-hidden
      className={clsx(
        'mr-2 size-4 shrink-0 transition-all ease-out',
        'group-data-[panel-open]:rotate-45 group-data-[panel-open]:scale-110',
        className
      )}
      {...rest}
    >
      <path d='M7 1h2v6h6v2H9v6H7V9H1V7h6z' fill='currentColor' />
    </svg>
  )
}
