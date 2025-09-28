import React from 'react'
import { client } from '@/utils/client'
import { createFileRoute } from '@tanstack/react-router'
import topbar from 'topbar'
import { FRAGRANCE_REQUEST_QUERY } from '@/features/fragrances/graphql/queries'
import { wrapQuery } from '@/utils/util'
import { FragranceRequestDraftProvider } from '@/features/fragrances/context/FragranceRequestDraftProvider'
import FragranceRequestDraftLayout from '@/features/fragrances/layouts/FragranceRequestDraftLayout'

export const Route = createFileRoute('/drafts/fragrances/$id')({
  loader: async ({ params }) => {
    const { id } = params

    topbar.show()

    const res = await wrapQuery(
      client.query({
        query: FRAGRANCE_REQUEST_QUERY,
        variables: { id }
      })
    )
      .map(data => data.fragranceRequest)

    topbar.hide()

    if (res.isErr()) {
      throw res.error
    }

    const request = res.value

    return { request }
  },
  component: RouteComponent
})

function RouteComponent () {
  const { request } = Route.useLoaderData()
  const { id, version } = request

  return (
    <FragranceRequestDraftProvider
      id={id}
      initialVersion={version}
    >
      <FragranceRequestDraftLayout />
    </FragranceRequestDraftProvider>
  )
}
