import type { AccordEditPaginationInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { ACCORD_EDITS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useAccordEdits = (input?: AccordEditPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(ACCORD_EDITS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.accordEdits.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.accordEdits))
  }

  const accordEdits = useMemo(
    () => flatten(data?.accordEdits ?? []),
    [data?.accordEdits]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.accordEdits.pageInfo)

  return {
    accordEdits,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}