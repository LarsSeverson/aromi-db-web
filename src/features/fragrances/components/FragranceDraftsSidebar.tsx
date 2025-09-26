import clsx from 'clsx'
import React, { useState } from 'react'
import { TbLayoutSidebarRightFilled } from 'react-icons/tb'
import FragranceDraftsSidebarList from './FragranceDraftsSidebarList'

const FragranceDraftsSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleOnExpandClick = () => {
    setIsExpanded(prev => !prev)
  }

  return (
    <div
      className={clsx(
        'overflow-auto h-full',
        'scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-surface',
        'hover:scrollbar-thumb-surface3 scrollbar-track-transparent',
        'transition-[width,colors] ease-in-out duration-200',
        isExpanded ? 'w-[300px] max-md:w-[60px]' : 'w-[60px]'
      )}
    >
      <div
        className='p-2 flex items-center gap-2 sticky top-0 bg-background z-10'
      >
        <button
          className='p-3 rounded-md hover:bg-surface'
          onClick={handleOnExpandClick}
        >
          <TbLayoutSidebarRightFilled
            size={20}
          />
        </button>

        {isExpanded && (
          <span
            className='text-md truncate'
          >
            Fragrance drafts
          </span>
        )}
      </div>

      {isExpanded && (
        <div
          className='p-2'
        >
          <FragranceDraftsSidebarList />
        </div>
      )}
    </div>
  )
}

export default FragranceDraftsSidebar
