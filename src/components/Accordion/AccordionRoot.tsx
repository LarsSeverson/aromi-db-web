import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export const AccordionRoot = (props: React.ComponentProps<typeof Accordion.Root>) => {
  const { className, ...rest } = props
  return (
    <Accordion.Root
      className={clsx(
        'flex max-w-[calc(100vw-8rem)] flex-col justify-center',
        className
      )}
      {...rest}
    />
  )
}
