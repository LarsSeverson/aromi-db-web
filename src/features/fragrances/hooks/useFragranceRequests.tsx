import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useFragranceRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragranceRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.fragranceRequests))
  }

  const fragranceRequests = useMemo(
    () => flatten(data?.fragranceRequests ?? []),
    [data?.fragranceRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragranceRequests.pageInfo)

  return {
    fragranceRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}