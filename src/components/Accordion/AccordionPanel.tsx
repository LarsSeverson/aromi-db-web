import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export const AccordionPanel = (props: React.ComponentProps<typeof Accordion.Panel>) => {
  const { className, children, ...rest } = props
  return (
    <Accordion.Panel
      className={clsx(
        'h-[var(--accordion-panel-height)] overflow-hidden text-base text-dark3',
        'transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0',
        className
      )}
      {...rest}
    >
      {children}
    </Accordion.Panel>
  )
}
