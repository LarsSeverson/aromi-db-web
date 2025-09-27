import type { FragranceEditPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_EDITS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useFragranceEdits = (input?: FragranceEditPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_EDITS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragranceEdits.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.fragranceEdits))
  }

  const edits = useMemo(
    () => flatten(data?.fragranceEdits ?? []),
    [data?.fragranceEdits]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragranceEdits.pageInfo)

  return {
    edits,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}