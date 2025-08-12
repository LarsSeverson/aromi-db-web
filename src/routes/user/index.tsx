import { createFileRoute, redirect } from '@tanstack/react-router'
import topbar from 'topbar'

export const Route = createFileRoute('/user/')({
  loader: ({ context }) => {
    topbar.show()

    const { me, utils } = context

    if (me == null) {
      topbar.hide()
      utils?.toastMessage('Hold On', 'You need to log in to view that page')

      throw redirect({
        to: '/',
        search: { showLogIn: true }
      })
    }

    const { id } = me

    topbar.hide()
    throw redirect({ to: '/user/$id', params: { id } })
  },
  component: RouteComponent
})

function RouteComponent () {
  return null
}
