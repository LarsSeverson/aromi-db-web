import clsx from 'clsx'
import React, { useCallback, useRef, useState } from 'react'
import { RiPencilFill, RiUploadCloudLine } from 'react-icons/ri'

export interface DropZoneProps {
  hint?: string
  isDisabled?: boolean
  accept?: string
  onFile?: (file: File) => void
  icon?: React.ReactNode
}

const DropZone = (props: DropZoneProps) => {
  const {
    hint,
    isDisabled = false,
    accept,
    onFile,
    icon
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handlePick = (file: File | undefined | null) => {
    if (file == null) return

    if (file.type.startsWith('image/')) {
      setPreviewUrl(URL.createObjectURL(file))
    } else {
      setPreviewUrl(null)
    }

    onFile?.(file)
  }

  const handleOnClick = () => {
    if (isDisabled) return
    inputRef.current?.click()
  }

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    if (isDisabled) return

    if (event.key === 'Enter' || event.key === ' ') {
      inputRef.current?.click()
    }
  }

  const handleOnDragOver = (event: React.DragEvent) => {
    if (isDisabled) return

    event.preventDefault()
    setIsDraggingOver(true)
  }

  const handleOnDragLeave = () => {
    setIsDraggingOver(false)
  }

  const handleOnDrop = (event: React.DragEvent) => {
    if (isDisabled) return

    event.preventDefault()
    setIsDraggingOver(false)
    handlePick(event.dataTransfer.files?.[0])
  }

  const handleOnFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file == null) return

    event.currentTarget.value = ''
    handlePick(file)
  }

  const onRenderZone = useCallback(() => {
    if (previewUrl != null) {
      return (
        <div
          className='w-full h-full relative'
        >
          <img
            src={previewUrl}
            alt='Preview'
            className='w-full h-full object-cover'
          />

          <button
            className={clsx(
              'absolute hidden bottom-2 right-2 p-2 rounded-md bg-background ',
              'border group-hover:inline group-focus:inline'
            )}
          >
            <RiPencilFill />
          </button>
        </div>
      )
    }

    return (
      <div
        className='h-full flex flex-col gap-3 items-center justify-center relative'
      >
        {icon ??
        (
          <RiUploadCloudLine
            size={26}
          />
        )}

        <span
          className='text-center text-md'
        >
          Choose a file or drag it here
        </span>

        <span
          className='text-[13px]'
        >
          {hint}
        </span>
      </div>
    )
  }, [icon, previewUrl, hint])

  return (
    <div
      role='button'
      tabIndex={0}
      aria-disabled={isDisabled}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      onDragOver={handleOnDragOver}
      onDragLeave={(handleOnDragLeave)}
      onDrop={handleOnDrop}
      className={clsx(
        'rounded-lg text-center cursor-pointer select-none overflow-hidden',
        'border group',
        'aspect-[4/5] min-w-52 hover:border-surface4',
        isDraggingOver ? 'border-surface4 bg-surface2' : 'bg-surface border-surface3',
        previewUrl == null && 'border-dashed'
      )}
    >

      {onRenderZone()}

      <input
        ref={inputRef}
        type='file'
        accept={accept}
        className='hidden'
        onChange={handleOnFileChange}
      />
    </div>
  )
}

export default DropZone
