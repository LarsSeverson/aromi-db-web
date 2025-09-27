import type { FragranceAccordPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_ACCORDS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useFragranceAccords = (id: string, input?: FragranceAccordPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_ACCORDS_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrance.accords.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.fragrance.accords))
  }

  const accords = useMemo(
    () => flatten(data?.fragrance.accords ?? []),
    [data?.fragrance.accords]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrance.accords.pageInfo)

  return {
    accords,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}
