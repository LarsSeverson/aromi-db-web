import React, { useRef, useState } from 'react'
import UserAttribute from './UserAttribute'
import TextButton from '@/components/TextButton'
import EditableUserAvatar from './EditableUserAvatar'
import clsx from 'clsx'
import { Form } from '@base-ui-components/react'
import TextInput from '@/components/TextInput'
import { useUpdateMe } from '../hooks/useUpdateMe'
import { useToastMessage } from '@/hooks/useToastMessage'
import BackButton from '@/components/BackButton'
import ErrorFeedback from '@/components/ErrorFeedback'
import { useMyContext } from '../context/MyContext'

export interface UserEditFormProps {
  onDone?: () => void
}

const UserEditForm = (props: UserEditFormProps) => {
  const { onDone } = props

  const { me } = useMyContext()
  const defaultUsername = useRef(me?.username ?? '').current

  const { toastMessage } = useToastMessage()
  const { update } = useUpdateMe()

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleUpdateUser = async (newUsername: string) => {
    setIsLoading(true)

    await update({ username: newUsername })
      .match(
        () => {
          toastMessage('Username updated')
          setHasInteracted(false)
          setError(null)
        },
        error => {
          setError(error.message)
        }
      )

    setIsLoading(false)
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const formData = new FormData(event.currentTarget)
    const newUsername = formData.get('Username') as string | undefined

    if (newUsername == null) return

    void handleUpdateUser(newUsername)
  }

  if (me == null) return null

  return (
    <div
      className='w-full flex flex-col gap-5 items-center'
    >
      <div
        className='mr-auto'
      >
        <BackButton
          onClick={onDone}
        />
      </div>

      <div
        className='max-w-60 w-full'
      >
        <EditableUserAvatar
          user={me}
        />
      </div>

      <ErrorFeedback
        error={error}
      />

      <Form
        className='flex flex-col gap-5 w-full max-w-80'
        onSubmit={handleOnSubmit}
      >
        <TextInput
          label='Username'
          placeholder='Your new username'
          defaultValue={defaultUsername}
          onValueChange={() => {
            setHasInteracted(true)
          }}
        />

        <div
          className='opacity-60'
        >
          <UserAttribute
            label='Email'
            value={me.email}
          />
        </div>

        <div
          className='flex gap-3 mt-3 self-start'
        >
          <TextButton
            text='Cancel'
            onClick={onDone}
          />

          <div
            className={clsx(
              !hasInteracted && 'opacity-70'
            )}
          >
            <TextButton
              type='submit'
              text='Save changes'
              isLoading={isLoading}
              disabled={!hasInteracted}
            />
          </div>
        </div>
      </Form>

    </div>
  )
}

export default UserEditForm
