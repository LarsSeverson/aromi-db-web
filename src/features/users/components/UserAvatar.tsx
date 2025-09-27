import React from 'react'
import type { IUserPreview } from '../types'
import EmptyAvatarSvg from './EmptyAvatarSvg'

export interface UserAvatarProps {
  user?: IUserPreview
}

const UserAvatar = (props: UserAvatarProps) => {
  const { user } = props
  const { avatar } = user ?? {}
  const avatarSrc = avatar?.url
  const showAvatar = avatarSrc != null

  return (
    <div
      className='h-full aspect-square overflow-hidden'
    >
      {showAvatar
        ? (
          <img
            // className='bg-surface'
            src={avatarSrc}
            alt={`Avatar of ${user?.username}`}
          />
        )
        : (
          <EmptyAvatarSvg
            color='#9ca3af'
          />
        )}
    </div>
  )
}

export default UserAvatar
