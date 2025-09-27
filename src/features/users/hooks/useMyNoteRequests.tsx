import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { MY_NOTE_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useMyNoteRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(MY_NOTE_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.me.noteRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.me.noteRequests)
  }

  const noteRequests = useMemo(
    () => flatten(data?.me.noteRequests ?? []),
    [data?.me.noteRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.me.noteRequests.pageInfo)

  return {
    noteRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}