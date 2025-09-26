import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { ACCORD_REQUESTS_QUERY } from '../graphql/queries'
import type { RequestPaginationInput } from '@/generated/graphql'
import { noRes } from '@/utils/error'

export const useAccordRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(ACCORD_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.accordRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.accordRequests))
  }

  const accordRequests = useMemo(
    () => flatten(data?.accordRequests ?? []),
    [data?.accordRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.accordRequests.pageInfo)

  return {
    accordRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}