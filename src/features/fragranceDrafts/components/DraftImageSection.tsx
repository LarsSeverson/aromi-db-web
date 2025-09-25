import DropZone from '@/components/DropZone/DropZone'
import React, { useState } from 'react'
import ProgressSpinner from '@/components/ProgressSpinner'
import { MdErrorOutline } from 'react-icons/md'
import clsx from 'clsx'
import { useFragranceDraftContext } from '../contexts/FragranceDraftContext'
import { useFragranceDraftPreview } from '../hooks/useFragranceDraftPreview'
import { extractGraphQLError, extractGraphQLErrorStatuses } from '@/utils/error'

const DraftImageSection = () => {
  const { id, updateImage } = useFragranceDraftContext()
  const { preview, loading: isDraftLoading } = useFragranceDraftPreview(id)
  const { image } = preview ?? {}
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

    await updateImage({ file, onUploadProgress: handleOnUploadProgress })
      .match(
        () => {
          // Image updated
        },
        error => {
          const statuses = extractGraphQLErrorStatuses(error)
          if (statuses[0] === 400) {
            setError(extractGraphQLError(error))
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
      <DropZone
        defaultUrl={url}
        isDisabled={isLoading}
        showPreview={showPreview}
        showSkeleton={isDraftLoading}
        accept='image/png,image/jpeg,image/webp'
        onFile={handleOnFile}
        subtext={error ?? undefined}
        className={clsx(
          isLoading && 'bg-opacity-50 bg-black',
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
    </section>
  )
}

export default DraftImageSection
