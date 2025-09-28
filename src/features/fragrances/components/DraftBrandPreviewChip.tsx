import React from 'react'
import { LuTag } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import type { IBrandPreview } from '@/features/brands'

export interface DraftBrandPreviewChipProps {
  brand: IBrandPreview
  onRemove?: () => void
}

const DraftBrandPreviewChip = (props: DraftBrandPreviewChipProps) => {
  const { brand, onRemove } = props
  const { name, avatar } = brand

  return (
    <div
      className='border flex items-center gap-2 h-11 bg-surface rounded-md pr-2 max-w-sm w-min'
    >
      <div
        className='h-full aspect-square flex items-center justify-center rounded-md z-10 p-[2px]'
      >
        {avatar?.url != null
          ?
          (
            <img
              src={avatar.url}
              alt={name ?? 'Brand avatar'}
              className='object-cover rounded-md'
            />
          )
          :
          (
            <LuTag />
          )
        }
      </div>

      <span
        className='font-semibold text-sm truncate'
      >
        {name}
      </span>

      <button
        type='button'
        className='p-1 hover:bg-surface2 rounded-md ml-5'
        onClick={onRemove}
      >
        <IoClose />
      </button>
    </div>
  )
}

export default DraftBrandPreviewChip
