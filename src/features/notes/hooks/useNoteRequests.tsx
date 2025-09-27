import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { NOTE_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useNoteRequests = (input?: RequestPaginationInput) => {
  const { data, loading: isLoading, error, networkStatus,
    fetchMore, refetch } = useQuery(NOTE_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.noteRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.noteRequests))
  }

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.noteRequests)
  }

  const noteRequests = useMemo(
    () => flatten(data?.noteRequests ?? []),
    [data?.noteRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.noteRequests.pageInfo)

  return {
    noteRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}