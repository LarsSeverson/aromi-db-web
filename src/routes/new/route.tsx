import React from 'react'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/new')({
  beforeLoad: ({ context }) => {
    const { me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold On', 'you need to log in to view that page')

      throw redirect({
        to: '/',
        search: { showLogIn: true }
      })
    }
  },
  component: RouteComponent
})

function RouteComponent () {
  return <Outlet />
}
