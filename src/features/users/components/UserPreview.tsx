import React from 'react'
import UserAvatar from './UserAvatar'
import UserAttribute from './UserAttribute'
import TextButton from '@/components/TextButton'
import type { IUserPreview } from '../types'
import { useMyContext } from '../context/MyContext'

export interface UserPreviewProps {
  user: IUserPreview
  onEdit?: () => void
}

const UserPreview = (props: UserPreviewProps) => {
  const { user, onEdit } = props
  const { username } = user

  const { me } = useMyContext()

  const showEdit = me != null && me.id === user.id
  const showEmail = me != null && me.id === user.id

  return (
    <div
      className='w-full flex flex-col gap-3 items-center'
    >
      <div
        className='max-w-60 mb-5 border rounded-full overflow-hidden'
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
            value={me.email}
          />
        )}
      </div>
    </div>
  )
}

export default UserPreview
