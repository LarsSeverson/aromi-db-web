import AppHeader from '@/components/AppHeader'
import SideNavigation from '@/components/SideNavigation'
import { Outlet } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'

const MainLayout = () => {
  return (
    <div
      className='w-full min-h-screen'
    >
      <AppHeader />

      <div
        className='flex h-full'
      >
        <aside
          className={clsx(
            'sticky top-12',
            'h-[calc(100vh-3rem)] w-64 shrink-0'
          )}
        >
          <SideNavigation />
        </aside>

        <main
          className='flex-1'
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
