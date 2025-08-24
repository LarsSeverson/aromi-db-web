import clsx from 'clsx'
import React from 'react'
import { FaRegArrowAltCircleUp } from 'react-icons/fa'

export interface DropZoneContentProps {
  text?: string
  subtext?: string
  icon?: React.ReactNode
  className?: string
}

const DropZoneContent = (props: DropZoneContentProps) => {
  const {
    text = 'Choose a file or drag it here',
    subtext = 'We recommend high-quality JPG files under 5MB',
    icon,
    className
  } = props

  return (
    <div
      className={clsx(
        'h-full flex flex-col gap-3 items-center justify-center relative',
        className
      )}
    >
      {icon ??
        (
          <FaRegArrowAltCircleUp
            size={28}
          />
        )}

      <span
        className='text-center text-md'
      >
        {text}
      </span>

      <span
        className='text-[13px]'
      >
        {subtext}
      </span>
    </div>
  )
}

export default DropZoneContent
