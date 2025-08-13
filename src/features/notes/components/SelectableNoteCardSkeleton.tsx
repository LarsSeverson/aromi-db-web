import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SelectableNoteCardSkeleton = () => {
  return (
    <div
      className='w-full aspect-square rounded-xl overflow-hidden'
    >
      <Skeleton
        height='100%'
        enableAnimation={false}
        baseColor='#2c2c2c'
        highlightColor='#6a6a6a'
        style={{
          display: 'block',
          animation: 'blink 2s infinite'
        }}
      />
    </div>
  )
}

export default SelectableNoteCardSkeleton
