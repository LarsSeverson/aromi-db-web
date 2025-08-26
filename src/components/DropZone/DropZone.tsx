import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import DropZoneImagePreview from './DropZoneImagePreview'
import DropZoneContent from './DropZoneContent'
import { Field } from '@base-ui-components/react'
import DropZoneSkeleton from './DropZoneSkeleton'

export interface DropZoneProps {
  defaultUrl?: string
  text?: string
  subtext?: string
  isDisabled?: boolean
  showPreview?: boolean
  showSkeleton?: boolean
  accept?: string
  icon?: React.ReactNode
  className?: string
  onFile?: (file: File) => void
}

const DropZone = (props: DropZoneProps) => {
  const {
    defaultUrl,
    text,
    subtext,
    isDisabled = false,
    showPreview = true,
    showSkeleton = false,
    accept,
    icon,
    className,
    onFile
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(defaultUrl ?? null)
  const canShowPreview = showPreview && previewUrl != null

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

  useEffect(
    () => {
      if (!showSkeleton) {
        if (previewUrl == null) {
          setPreviewUrl(defaultUrl ?? null)
        }
      }

      return () => {
        if (previewUrl != null) {
          URL.revokeObjectURL(previewUrl)
        }
      }
    },
    [previewUrl, showSkeleton, defaultUrl]
  )

  const onRenderZone = () => {
    if (canShowPreview) {
      return (
        <DropZoneImagePreview
          previewUrl={previewUrl}
          isDisabled={isDisabled}
          className={className}
        />
      )
    }

    return (
      <DropZoneContent
        text={text}
        subtext={subtext}
        icon={icon}
        className={className}
      />
    )
  }

  if (showSkeleton) {
    return <DropZoneSkeleton />
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
        'rounded-lg text-center select-none overflow-hidden',
        'border-2 group',
        'aspect-[4/5] min-w-52 hover:border-surface4',
        isDisabled && 'cursor-default',
        isDraggingOver ? 'border-surface4 bg-surface2' : 'bg-surface border-surface3',
        !canShowPreview && 'border-dashed'
      )}
    >
      {onRenderZone()}

      <Field.Control
        ref={inputRef}
        type='file'
        disabled={isDisabled}
        accept={accept}
        className='sr-only'
        onChange={handleOnFileChange}
      />
    </div>
  )
}

export default DropZone
