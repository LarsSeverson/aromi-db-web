import { Accordion } from '@base-ui-components/react'
import React from 'react'

export const AccordionHeader = (props: React.ComponentProps<typeof Accordion.Header>) => {
  const { className, ...rest } = props
  return (
    <Accordion.Header
      className={className}
      {...rest}
    />
  )
}
