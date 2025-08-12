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
        'box-border rounded-md py-1',
        'bg-surface text-white outline-surface2 outline outline-1',
        'origin-[var(--transform-origin)] transition-[transform,scale,opacity] duration-150',
        'data-[starting-style]:opacity-0 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:scale-90'
      )}
    >
      {children}
    </Menu.Popup>
  )
}

export default MenuPopup
