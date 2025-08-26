import clsx from 'clsx'
import React from 'react'
import { RiPencilFill } from 'react-icons/ri'
import ProgressiveImage from '../ProgressiveImage'

export interface DropZoneImagePreviewProps {
  previewUrl: string
  isDisabled?: boolean
  className?: string
}

const DropZoneImagePreview = (props: DropZoneImagePreviewProps) => {
  const {
    previewUrl,
    isDisabled = false,
    className
  } = props

  return (
    <div
      className={clsx(
        'w-full h-full relative'
      )}
    >
      <ProgressiveImage
        src={previewUrl}
        alt='Preview'
      />

      <div
        className={clsx(
          'absolute inset-0',
          className
        )}
      />

      <button
        disabled={isDisabled}
        className={clsx(
          'absolute hidden bottom-2 right-2 p-2 rounded-md bg-background',
          'border group-hover:inline group-focus:inline',
          isDisabled && 'opacity-0'
        )}
      >
        <RiPencilFill />
      </button>
    </div>
  )
}

export default DropZoneImagePreview
