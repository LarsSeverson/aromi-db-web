import React from 'react'
import { type IUserSummary } from '../types'
import { Colors } from '@/styles/Colors'
import EmptyAvatarSvg from './EmptyAvatarSvg'

export interface UserAvatarProps {
  user?: IUserSummary
}

const UserAvatar = (props: UserAvatarProps) => {
  const { user } = props
  const { avatarSrc } = user ?? {}
  const showAvatar = avatarSrc != null

  return (
    <div
      className='h-full border-surface2 border rounded-full aspect-square overflow-hidden bg-surface'
    >
      {showAvatar
        ? (
          <img
            src={avatarSrc}
            alt={`Avatar of ${user?.username}`}
          />
          )
        : (
          <EmptyAvatarSvg
            color={Colors.light4}
          />
          )}
    </div>
  )
}

export default UserAvatar
