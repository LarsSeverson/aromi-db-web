import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_FRAGRANCE_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserFragranceRequests = (id: string, input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_FRAGRANCE_REQUESTS_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.fragranceRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.user.fragranceRequests))
  }

  const fragranceRequests = useMemo(
    () => flatten(data?.user.fragranceRequests ?? []),
    [data?.user.fragranceRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.fragranceRequests.pageInfo)

  return {
    fragranceRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}