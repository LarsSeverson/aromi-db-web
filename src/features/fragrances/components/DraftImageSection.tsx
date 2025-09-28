import DropZone from '@/components/DropZone/DropZone'
import React, { useState } from 'react'
import ProgressSpinner from '@/components/ProgressSpinner'
import { MdErrorOutline } from 'react-icons/md'
import clsx from 'clsx'
import { useFragranceRequestDraftContext } from '../context/FragranceRequestDraftContext'
import { useFragranceRequest } from '../hooks/useFragranceRequest'

const DraftImageSection = () => {
  const { id, setImage } = useFragranceRequestDraftContext()
  const { fragranceRequest, isLoading: isRequestLoading } = useFragranceRequest(id)
  const { image } = fragranceRequest ?? {}
  const { url } = image ?? {}

  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const showPreview = error == null

  const handleOnUploadProgress = (pct: number) => {
    setLoadingProgress(pct)
  }

  const handleHandleUpdateImage = async (file: File) => {
    setIsLoading(true)
    setError(null)

    await setImage({ file, onUploadProgress: handleOnUploadProgress })
      .match(
        () => {
          // Image updated
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
    void handleHandleUpdateImage(file)
  }

  return (
    <section
      className='flex-1 relative'
    >
      <div
        className='relative'
      >
        <DropZone
          defaultUrl={url}
          isDisabled={isLoading}
          showPreview={showPreview}
          showSkeleton={isRequestLoading}
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

export default DraftImageSection
