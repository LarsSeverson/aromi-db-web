import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { MY_BRAND_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useMyBrandRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(MY_BRAND_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.me.brandRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.me.brandRequests)
  }

  const brandRequests = useMemo(
    () => flatten(data?.me.brandRequests ?? []),
    [data?.me.brandRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.me.brandRequests.pageInfo)

  return {
    brandRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}