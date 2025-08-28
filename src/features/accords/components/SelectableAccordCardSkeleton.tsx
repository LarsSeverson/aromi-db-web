import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SelectableAccordCardSkeleton = () => {
  return (
    <div
      className='w-full aspect-square rounded-xl overflow-hidden'
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

export default SelectableAccordCardSkeleton
