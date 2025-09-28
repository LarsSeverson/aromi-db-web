import Divider from '@/components/Divider'
import { ResizeContainer } from '@/components/ResizeContainer'
import React, { useState } from 'react'
import DraftsList from '../components/DraftsList'

const FragranceRequestDraftsPage = () => {
  const [containerWidth, setContainerWidth] = useState(new DOMRect())

  return (
    <div
      className='p-6 flex flex-col gap-5'
    >
      <div
        className='flex items-center justify-between'
      >
        <span
          className='text-xl'
        >
          Your Drafts
        </span>
      </div>

      <Divider
        horizontal
      />

      <ResizeContainer
        onResize={setContainerWidth}
        className='flex flex-col gap-5'
      >
        <DraftsList
          containerWidth={containerWidth.width}
        />
      </ResizeContainer>
    </div>
  )
}

export default FragranceRequestDraftsPage
