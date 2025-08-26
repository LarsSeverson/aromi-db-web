import clsx from 'clsx'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const DropZoneSkeleton = () => {
  return (
    <div
      className={clsx(
        'rounded-lg select-none overflow-hidden',
        'aspect-[4/5] min-w-52'
      )}
    >
      <Skeleton
        height='100%'
        enableAnimation={false}
        style={{
          display: 'block',
          animation: 'blink 2s infinite'
        }}
      />
    </div>
  )
}

export default DropZoneSkeleton
