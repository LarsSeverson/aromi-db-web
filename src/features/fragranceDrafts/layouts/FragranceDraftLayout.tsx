import Divider from '@/components/Divider'
import { Outlet } from '@tanstack/react-router'
import React from 'react'
import FragranceDraftsSidebar from '../components/FragranceDraftsSidebar'

const FragranceDraftLayout = () => {
  return (
    <div
      className='flex'
    >
      <div
        className='flex-1 p-5'
      >
        <Outlet />
      </div>

      <div>
        <Divider />
      </div>

      <aside
        className='sticky top-12 shrink-0 h-[calc(100vh-3rem)]'
      >
        <FragranceDraftsSidebar />
      </aside>
    </div>
  )
}

export default FragranceDraftLayout
