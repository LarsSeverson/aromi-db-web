import ProgressiveImage from '@/components/ProgressiveImage'
import type { IBrandPreview } from '@/features/brands'
import React from 'react'
import { LuTag } from 'react-icons/lu'

export interface DraftBrandsPopoverItem {
  brand: IBrandPreview
  onSelect?: (brand: IBrandPreview) => void
}

const DraftBrandsPopoverItem = (props: DraftBrandsPopoverItem) => {
  const { brand, onSelect } = props
  const { name, avatar } = brand

  return (
    <button
      type='button'
      onClick={onSelect?.bind(null, brand)}
      className='pl-4 pr-8'
    >
      <div
        className='col-start-2'
      >
        <div
          className='flex items-center gap-2 h-11 border !border-transparent hover:bg-surface hover:!border-surface2 rounded-md pr-2'
        >
          <div
            className='h-full aspect-square flex items-center justify-center rounded-md overflow-hidden z-10 border'
          >
            {avatar?.url != null
              ?
              (
                <ProgressiveImage
                  src={avatar.url}
                  alt={name ?? 'Brand avatar'}
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
        </div>
      </div>
    </button>
  )
}

export default DraftBrandsPopoverItem
