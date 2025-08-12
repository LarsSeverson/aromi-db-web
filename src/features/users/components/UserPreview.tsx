import React from 'react'
import { type IUserSummary } from '../types'
import UserAvatar from './UserAvatar'
import UserAttribute from './UserAttribute'
import TextButton from '@/components/TextButton'

export interface UserPreviewProps {
  user: IUserSummary
  isMyProfile?: boolean
  onEdit?: () => void
}

const UserPreview = (props: UserPreviewProps) => {
  const { user, isMyProfile, onEdit } = props
  const { username, email } = user

  const showEdit = isMyProfile ?? false
  const showEmail = isMyProfile ?? false

  return (
    <div
      className='w-full flex flex-col gap-3 items-center'
    >
      <div
        className='max-w-60 mb-5'
      >
        <UserAvatar
          user={user}
        />
      </div>

      {showEdit && (
        <TextButton
          text='Edit profile'
          onClick={onEdit}
        />
      )}

      <div
        className='self-start flex flex-col gap-5'
      >
        <UserAttribute
          label='Username'
          value={username}
        />

        {showEmail && (
          <UserAttribute
            label='Email'
            value={email}
          />
        )}
      </div>
    </div>
  )
}

export default UserPreview
