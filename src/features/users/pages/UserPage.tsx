import React, { useState } from 'react'
import { type IUserSummary } from '../types'
import { useMyContext } from '../contexts/MyContext'
import UserPreview from '../components/UserPreview'
import UserEditForm from '../components/UserEditForm'

export interface UserPageProps {
  user: IUserSummary
}

const UserPage = (props: UserPageProps) => {
  const { user } = props

  const { me } = useMyContext()

  const [isEditing, setIsEditing] = useState(false)

  const isMyProfile = me?.id === user.id

  const onRenderPageContent = () => {
    if (isEditing) {
      return (
        <UserEditForm
          user={user}
          onDone={() => { setIsEditing(false) }}
        />
      )
    }

    return (
      <UserPreview
        user={user}
        isMyProfile={isMyProfile}
        onEdit={() => { setIsEditing(true) }}
      />
    )
  }

  return (
    <div
      className='flex flex-col items-center p-10 w-full'
    >
      <div
        className='max-w-lg w-full'
      >
        {onRenderPageContent()}
      </div>
    </div>
  )
}

export default UserPage
