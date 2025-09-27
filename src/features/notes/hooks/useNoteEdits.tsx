import type { NoteEditPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { NOTE_EDITS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, noRes, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useNoteEdits = (input?: NoteEditPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(NOTE_EDITS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.noteEdits.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.noteEdits))
  }

  const refresh = () => wrapQuery(refetch())

  const noteEdits = useMemo(
    () => flatten(data?.noteEdits ?? []),
    [data?.noteEdits]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.noteEdits.pageInfo)

  return {
    noteEdits,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}