import clsx from 'clsx'
import React, { useRef, useState } from 'react'
import { RiUploadCloudLine } from 'react-icons/ri'

export interface DropZoneProps {
  hint?: string
  isDisabled?: boolean
  accept?: string
  onFile?: (file: File) => void
  onRenderIcon?: React.ReactNode
}

const DropZone = (props: DropZoneProps) => {
  const {
    hint,
    isDisabled = false,
    accept,
    onFile,
    onRenderIcon
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [isDraggingOver, setIsDraggingOver] = useState(false)

  const handlePick = (file: File | undefined | null) => {
    if (file == null) return
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
        'rounded-lg p-6 text-center cursor-pointer select-none',
        'border border-dashed',
        'aspect-[4/5] min-w-52 hover:border-surface4',
        isDraggingOver ? 'border-surface4 bg-surface2' : 'bg-surface border-surface3'
      )}
    >
      <div
        className='h-full flex flex-col gap-3 items-center justify-center relative'
      >
        {onRenderIcon ??
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
