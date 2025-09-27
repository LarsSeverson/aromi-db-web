import type { FragranceNotePaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_NOTES_LAYER_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useFragranceNoteLayer = (
  id: string,
  input?: FragranceNotePaginationInput
) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_NOTES_LAYER_QUERY, { variables: { id, input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.fragrance.notes.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      id,
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.fragrance.notes))
  }

  const notes = useMemo(
    () => flatten(data?.fragrance.notes ?? []),
    [data?.fragrance.notes]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.fragrance.notes.pageInfo)

  return {
    notes,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}