import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_NOTE_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserNoteRequests = (id: string, input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_NOTE_REQUESTS_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.noteRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.user.noteRequests))
  }

  const noteRequests = useMemo(
    () => flatten(data?.user.noteRequests ?? []),
    [data?.user.noteRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.noteRequests.pageInfo)

  return {
    noteRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}