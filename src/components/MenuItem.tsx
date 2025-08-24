import { Menu } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export interface MenuItemProps extends Menu.Item.Props {
  children?: React.ReactNode
}

const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props

  return (
    <Menu.Item
      {...rest}
      className={clsx(
        'flex cursor-default select-none outline-none',
        '',
        'text-sm leading-4',
        'data-[highlighted]:relative data-[highlighted]:z-0',
        'data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0',
        'data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-surface'
      )}
    >
      {children}
    </Menu.Item>
  )
}

export default MenuItem
