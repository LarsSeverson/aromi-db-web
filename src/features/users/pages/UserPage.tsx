import React, { useState } from 'react'
import type { IUserPreview } from '../types'
import UserPreview from '../components/UserPreview'
import UserEditForm from '../components/UserEditForm'

export interface UserPageProps {
  user: IUserPreview
}

const UserPage = (props: UserPageProps) => {
  const { user } = props

  const [isEditing, setIsEditing] = useState(false)

  const onRenderPageContent = () => {
    if (isEditing) {
      return (
        <UserEditForm
          onDone={() => { setIsEditing(false) }}
        />
      )
    }

    return (
      <UserPreview
        user={user}
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
