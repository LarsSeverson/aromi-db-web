import type { RequestPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { MY_ACCORD_REQUESTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useMyAccordRequests = (input?: RequestPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(MY_ACCORD_REQUESTS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.me.accordRequests.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => data.me.accordRequests)
  }

  const accordRequests = useMemo(
    () => flatten(data?.me.accordRequests ?? []),
    [data?.me.accordRequests]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.me.accordRequests.pageInfo)

  return {
    accordRequests,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}