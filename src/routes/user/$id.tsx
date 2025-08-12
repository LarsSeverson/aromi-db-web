import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { client } from '@/common/client'
import { USER_QUERY } from '@/features/users'
import UserPage from '@/features/users/pages/UserPage'
import topbar from 'topbar'
import { useUser } from '@/features/users/hooks/useUser'

export const Route = createFileRoute('/user/$id')({
  loader: async ({ params }) => {
    topbar.show()

    const { id } = params

    const { data } = await client
      .query({
        query: USER_QUERY,
        variables: { id }
      })

    topbar.hide()

    if (data.user == null) {
      throw new Error('User not found')
    }
  },
  component: RouteComponent
})

function RouteComponent () {
  const { id } = Route.useParams()

  const { data } = useUser(id)

  if (data == null) return null

  return (
    <UserPage
      user={data}
    />
  )
}
