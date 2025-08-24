import clsx from 'clsx'
import React from 'react'
import { RiPencilFill } from 'react-icons/ri'

export interface DropZoneImagePreviewProps {
  previewUrl: string
  isDisabled?: boolean
  className?: string
}

const DropeZoneImagePreview = (props: DropZoneImagePreviewProps) => {
  const {
    previewUrl,
    isDisabled = false,
    className
  } = props

  return (
    <div
      className={clsx(
        'w-full h-full relative',
        className
      )}
    >
      <img
        src={previewUrl}
        alt='Preview'
        className='w-full h-full object-cover'
      />

      <button
        disabled={isDisabled}
        className={clsx(
          'absolute hidden bottom-2 right-2 p-2 rounded-md bg-background ',
          'border group-hover:inline group-focus:inline',
          isDisabled && 'opacity-0'
        )}
      >
        <RiPencilFill />
      </button>
    </div>
  )
}

export default DropeZoneImagePreview
