import Divider from '@/components/Divider'
import { Outlet } from '@tanstack/react-router'
import React from 'react'
import DraftsSidebar from '../components/DraftsSidebar'

const FragranceRequestDraftLayout = () => {
  return (
    <div
      className='flex'
    >
      <div
        className='flex-1 w-0 min-w-0 p-5'
      >
        <Outlet />
      </div>

      <div
        className='shrink-0'
      >
        <Divider />
      </div>

      <aside
        className='sticky top-12 shrink-0 h-[calc(100vh-3rem)]'
      >
        <DraftsSidebar />
      </aside>
    </div>
  )
}

export default FragranceRequestDraftLayout
