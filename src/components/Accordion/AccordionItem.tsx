import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export const AccordionItem = (props: React.ComponentProps<typeof Accordion.Item>) => {
  const { className, ...rest } = props
  return (
    <Accordion.Item
      className={clsx('', className)}
      {...rest}
    />
  )
}
