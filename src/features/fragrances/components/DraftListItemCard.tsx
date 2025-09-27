import React from 'react'
import type { IFragranceDraftPreview } from '../types'
import clsx from 'clsx'
import { Link } from '@tanstack/react-router'
import ProgressiveImage from '@/components/ProgressiveImage'
import { TbPerfume } from 'react-icons/tb'
import DraftItemMenu from './DraftItemMenu'

export interface DraftListItemCardProps {
  draft: IFragranceDraftPreview
  isSelected?: boolean
}

const DraftListItemCard = (props: DraftListItemCardProps) => {
  const { draft, isSelected = false } = props
  const { id, image } = draft
  const { url } = image ?? {}

  return (
    <div
      className={clsx(
        'select-none flex p-2 rounded-md bg-inherit box-border group min-w-0',
        'hover:bg-surface transition-[background-color] duration-100',
        isSelected && 'bg-surface'
      )}
    >
      <Link
        to='/drafts/fragrance/$id'
        params={{ id }}
        className={clsx(
          'flex flex-1 gap-2 overflow-hidden'
        )}
      >
        <div
          className={clsx(
            'min-w-[50px] w-[50px] aspect-square rounded-lg overflow-hidden',
            'flex justify-center items-center border'
          )}
        >
          {url != null
            ? (
              <ProgressiveImage
                src={url}
                alt=''
              />
            )
            : (
              <TbPerfume
                size={28}
              />
            )}
        </div>

        <div
          className='flex items-center min-w-0'
        >
          <span
            className='text-sm truncate'
          >
            {draft.name ?? 'Untitled draft'}
          </span>
        </div>
      </Link>

      <div
        className='flex items-center'
      >
        <DraftItemMenu
          id={id}
        />
      </div>
    </div>
  )
}

export default DraftListItemCard
