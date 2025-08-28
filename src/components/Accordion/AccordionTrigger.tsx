import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export const AccordionTrigger = (
  props: React.ComponentProps<typeof Accordion.Trigger> & { rightSlot?: React.ReactNode }
) => {
  const { className, rightSlot, children, ...rest } = props
  return (
    <Accordion.Trigger
      className={clsx(
        'group relative flex w-full items-baseline justify-between gap-4',
        'py-2 pr-1 pl-3 text-left',
        'hover:bg-surface focus-visible:z-1 focus-visible:outline',
        className
      )}
      {...rest}
    >
      {children}
      {rightSlot}
    </Accordion.Trigger>
  )
}
