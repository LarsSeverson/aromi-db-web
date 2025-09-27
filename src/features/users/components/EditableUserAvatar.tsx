import React, { useRef, useState } from 'react'
import type { IUserPreview } from '../types'
import UserAvatar from './UserAvatar'
import { FiEdit2 } from 'react-icons/fi'
import ErrorFeedback from '@/components/ErrorFeedback'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import { useSetMyAvatar } from '../hooks/useSetMyAvatar'

export interface EditableUserAvatarProps {
  user: IUserPreview
}

const EditableUserAvatar = (props: EditableUserAvatarProps) => {
  const { user } = props

  const { setAvatarWithFile } = useSetMyAvatar()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleUpdateUserAvatar = async (file: File) => {
    if (isLoading) return

    setError(null)
    setIsLoading(true)

    await setAvatarWithFile(file)
      .match(
        () => {
          //
        },
        () => {
          setError('Something went wrong uploading this file')
        }
      )

    setIsLoading(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file == null) return

    e.currentTarget.value = ''
    void handleUpdateUserAvatar(file)
  }

  const handleOnEdit = () => {
    if (isLoading) return
    fileInputRef.current?.click()
  }

  return (
    <div
      className='flex flex-col items-center'
    >
      <div
        className='relative w-full'
      >
        <button
          onClick={handleOnEdit}
          className='relative border rounded-full overflow-hidden group cursor-pointer w-full'
        >
          <UserAvatar
            user={user}
          />

          <div
            className={clsx(
              'absolute inset-0 group-hover:bg-dark4/10',
              isLoading && 'bg-dark4/50'
            )}
          />

          {isLoading && (
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <Spinner
                size={10}
              />
            </div>
          )}
        </button>

        <button
          type='button'
          className='aspect-square rounded-full p-2 bg-surface hover:bg-surface2 border border-surface2 absolute bottom-5 right-5'
          onClick={handleOnEdit}
        >
          <FiEdit2
            size={20}
          />
        </button>
      </div>

      <div
        className='mt-3 text-center'
      >
        <ErrorFeedback
          error={error}
        />
      </div>

      <input
        ref={fileInputRef}
        type='file'
        accept='image/png,image/jpeg,image/webp'
        className='hidden'
        onChange={handleFileChange}
      />
    </div>
  )
}

export default EditableUserAvatar
