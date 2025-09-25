import React from 'react'
import { client } from '@/utils/client'
import { toApolloError } from '@/utils/error'
import { FRAGRANCE_DRAFT_SHELL_QUERY } from '@/features/fragranceDrafts/graphql/queries'
import { createFileRoute } from '@tanstack/react-router'
import { ResultAsync } from 'neverthrow'
import topbar from 'topbar'
import { FragranceDraftProvider } from '@/features/fragranceDrafts/contexts/FragranceDraftProvider'
import FragranceDraftLayout from '@/features/fragranceDrafts/layouts/FragranceDraftLayout'

export const Route = createFileRoute('/drafts/fragrance/$id')({
  loader: async ({ params }) => {
    const { id } = params

    topbar.show()

    const res = await ResultAsync
      .fromPromise(
        client.query({
          query: FRAGRANCE_DRAFT_SHELL_QUERY,
          variables: { id }
        }),
        toApolloError
      )

    topbar.hide()

    if (res.isErr()) {
      throw res.error
    }

    const shell = res.value.data.fragranceDraft

    return { shell }
  },
  component: RouteComponent
})

function RouteComponent () {
  const { shell } = Route.useLoaderData()
  const { id, version } = shell

  return (
    <FragranceDraftProvider
      id={id}
      initialVersion={version}
    >
      <FragranceDraftLayout />
    </FragranceDraftProvider>
  )
}
