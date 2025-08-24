import React from 'react'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/drafts')({
  beforeLoad: ({ context }) => {
    const { me, utils } = context

    if (me == null) {
      utils?.toastMessage('Hold on', 'You need to log in before viewing that page')
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
