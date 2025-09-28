import React from 'react'
import type { IFragranceRequestDraftPreview } from '../types'
import ProgressiveImage from '@/components/ProgressiveImage'
import { TbPerfume } from 'react-icons/tb'

export interface DraftPreviewCardThumbnailProps {
  thumbnail?: IFragranceRequestDraftPreview['image']
}

const DraftPreviewCardThumbnail = (props: DraftPreviewCardThumbnailProps) => {
  const { thumbnail } = props
  const { url } = thumbnail ?? {}

  const onRenderThumbnail = () => {
    if (url == null) {
      return (
        <TbPerfume
          size={100}
        />
      )
    }

    return (
      <ProgressiveImage
        src={url}
        alt='Draft Thumbnail'
      />
    )
  }

  return (
    <div
      className='w-full h-full flex items-center justify-center'
    >
      {onRenderThumbnail()}
    </div>
  )
}

export default DraftPreviewCardThumbnail
