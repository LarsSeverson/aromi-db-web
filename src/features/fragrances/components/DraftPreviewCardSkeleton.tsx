import React from 'react'
import Skeleton from 'react-loading-skeleton'

const DraftPreviewCardSkeleton = () => {
  return (
    <div
      className='w-full h-full rounded-lg overflow-hidden'
    >
      <Skeleton
        height='100%'
        enableAnimation={false}
        // baseColor='#2c2c2c'
        style={{
          display: 'block',
          animation: 'blink 2s infinite'
        }}
      />
    </div>
  )
}

export default DraftPreviewCardSkeleton