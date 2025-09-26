import type { RequestPaginationInput } from '@/generated/graphql'
import { noRes } from '@/utils/error'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { BRAND_REQUESTS_QUERY } from '../graphql/queries'

export const useBrandRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(BRAND_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.brandRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.brandRequests))
  }

  const brandRequests = useMemo(
    () => flatten(data?.brandRequests ?? []),
    [data?.brandRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.brandRequests.pageInfo)

  return {
    brandRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}