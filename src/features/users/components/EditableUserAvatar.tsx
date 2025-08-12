import React, { useEffect, useRef, useState } from 'react'
import { type IUserSummary } from '../types'
import UserAvatar from './UserAvatar'
import { FiEdit2 } from 'react-icons/fi'
import { usePollAvatarStatus } from '../hooks/usePollAvatarStatus'
import { useUpdateUserAvatar } from '../hooks/useUpdateUserAvatar'
import ErrorFeedback from '@/components/ErrorFeedback'
import { usePresignedUrl } from '@/hooks/usePresignedUrl'
import clsx from 'clsx'
import Spinner from '@/components/Spinner'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface EditableUserAvatarProps {
  user: IUserSummary
}

const EditableUserAvatar = (props: EditableUserAvatarProps) => {
  const { user } = props

  const { upload } = usePresignedUrl()
  const { toastMessage } = useToastMessage()
  const { start, stop } = usePollAvatarStatus()
  const { updateUserAvatar } = useUpdateUserAvatar()

  const fileInputRef = useRef<HTMLInputElement>(null)

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePollAvatarStatus = () => {
    start((me) => {
      if (me?.avatarStatus === 'READY' || me?.avatarStatus === 'FAILED') {
        setIsLoading(false)
        stop()
      }

      if (me?.avatarStatus === 'FAILED') {
        setError('Something went wrong uploading this file')
      }

      if (me?.avatarStatus === 'READY') {
        toastMessage('Picture saved')
      }
    })
  }

  const handleUpdateUserAvatar = async (file: File) => {
    if (isLoading) return

    setError(null)
    setIsLoading(true)

    await updateUserAvatar({ contentType: file.type })
      .andThen(({ uploadUrl }) => upload(uploadUrl, file))
      .match(
        () => {
          handlePollAvatarStatus()
        },
        () => {
          setIsLoading(false)
          setError('Something went wrong uploading this file')
        }
      )
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

  useEffect(() => {
    return () => {
      stop()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className='flex flex-col items-center'
    >
      <div
        className='relative'
      >
        <button
          onClick={handleOnEdit}
          className='relative'
        >
          <div
            className={clsx(
              isLoading && 'opacity-30'
            )}
          >
            <UserAvatar
              user={user}
            />
          </div>

          {isLoading && (
            <div
              className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >
              <Spinner
                size={20}
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
