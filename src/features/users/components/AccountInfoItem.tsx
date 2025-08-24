import React from 'react'
import UserAvatar from './UserAvatar'
import { type IUserSummary } from '../types'
import MenuItem from '@/components/MenuItem'
import { Link } from '@tanstack/react-router'

export interface AccountInfoItemProps {
  user: IUserSummary
}

const AccountInfoItem = (props: AccountInfoItemProps) => {
  const { user } = props
  const { id, username, email } = user

  return (
    <MenuItem>
      <Link
        to='/user/$id'
        params={{ id }}
        className='flex py-2 pl-4 pr-8'
      >
        <div
          className='h-16'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div
          className='flex flex-col justify-center ml-3'
        >
          <span
            className='font-semibold'
          >
            {username}
          </span>

          <span
            className='font-light text-dark/80 mt-1'
          >
            {email}
          </span>
        </div>
      </Link>
    </MenuItem>
  )
}

export default AccountInfoItem
