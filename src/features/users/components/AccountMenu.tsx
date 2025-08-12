import React from 'react'
import { type IUserSummary } from '../types'
import { Menu } from '@base-ui-components/react'
import UserAvatar from './UserAvatar'
import MenuPopup from '@/components/MenuPopup'
import LogOutItem from './LogOutItem'
import AccountInfoItem from './AccountInfoItem'

export interface AccountMenuProps {
  user: IUserSummary
}

const AccountMenu = (props: AccountMenuProps) => {
  const { user } = props

  return (
    <Menu.Root>
      <Menu.Trigger
        className='h-full'
      >
        <UserAvatar
          user={user}
        />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          sideOffset={8}
        >
          <MenuPopup>
            <AccountInfoItem
              user={user}
            />

            <Menu.Separator
              className='bg-surface2 mx-4 my-1.5 h-px'
            />

            <LogOutItem />
          </MenuPopup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

export default AccountMenu
