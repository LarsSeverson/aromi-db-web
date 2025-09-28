import DropZone from '@/components/DropZone/DropZone'
import React, { useState } from 'react'
import ProgressSpinner from '@/components/ProgressSpinner'
import { MdErrorOutline } from 'react-icons/md'
import clsx from 'clsx'
import { useNavigate } from '@tanstack/react-router'
import { useCreateFragranceRequest } from '../hooks/useCreateFragranceRequest'

const NewDraftImageSection = () => {
  const navigate = useNavigate()
  const { createRequestWithImage } = useCreateFragranceRequest()

  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleOnUploadProgress = (pct: number) => {
    setLoadingProgress(pct)
  }

  const handleCreateDraftWithImage = async (file: File) => {
    setIsLoading(true)
    setError(null)

    await createRequestWithImage(file, handleOnUploadProgress)
      .match(
        draft => {
          void navigate({ to: '/drafts/fragrances/$id', params: { id: draft.id } })
        },
        error => {
          if (error.status === 400) {
            setError(error.message)
            return
          }

          setError('Something went wrong uploading this file')
        }
      )

    setIsLoading(false)
    setLoadingProgress(0)
  }

  const handleOnFile = (file: File) => {
    void handleCreateDraftWithImage(file)
  }

  return (
    <section
      className='flex-1 relative'
    >
      <div
        className='relative'
      >
        <DropZone
          isDisabled={isLoading}
          showPreview={error == null}
          accept='image/png,image/jpeg,image/webp'
          onFile={handleOnFile}
          subtext={error ?? undefined}
          className={clsx(
            isLoading && 'opacity-50 bg-black',
            error != null && 'bg-red-800 bg-opacity-90 text-white'
          )}
          icon={
            error != null
              ? <MdErrorOutline
                size={26}
              />
              : undefined
          }
        />

        {isLoading && (
          <div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <ProgressSpinner
              percent={loadingProgress}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default NewDraftImageSection
