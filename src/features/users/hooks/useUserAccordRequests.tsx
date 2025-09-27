import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { USER_ACCORD_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useUserAccordRequets = (id: string, input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(USER_ACCORD_REQUESTS_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.user.accordRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.user.accordRequests))
  }

  const accordRequests = useMemo(
    () => flatten(data?.user.accordRequests ?? []),
    [data?.user.accordRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.user.accordRequests.pageInfo)

  return {
    accordRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}