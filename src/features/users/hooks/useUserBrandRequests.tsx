import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_BRAND_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserBrandRequests = (id: string, input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_BRAND_REQUESTS_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.brandRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.user.brandRequests))
  }

  const brandRequests = useMemo(
    () => flatten(data?.user.brandRequests ?? []),
    [data?.user.brandRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.brandRequests.pageInfo)

  return {
    brandRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}