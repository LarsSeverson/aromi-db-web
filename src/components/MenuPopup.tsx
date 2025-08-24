import { Menu } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

export interface MenuPopupProps {
  children?: React.ReactNode
}

const MenuPopup = (props: MenuPopupProps) => {
  const { children } = props

  return (
    <Menu.Popup
      className={clsx(
        'origin-[var(--transform-origin)]',
        'rounded-md bg-[canvas] py-1',
        'text-gray-900',
        'shadow-lg shadow-gray-200',
        'outline outline-1 outline-gray-200',
        'transition-[transform,scale,opacity]',
        'data-[ending-style]:scale-90 data-[ending-style]:opacity-0',
        'data-[starting-style]:scale-90 data-[starting-style]:opacity-0',
        'dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300'
      )}
    >
      {children}
    </Menu.Popup>
  )
}

export default MenuPopup
