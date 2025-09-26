import { noRes } from '@/utils/error'
import { flatten, validatePagination } from '@/utils/pagination'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'
import { BRAND_EDITS_QUERY } from '../graphql/queries'
import type { BrandEditPaginationInput } from '@/generated/graphql'

export const useBrandEdits = (input?: BrandEditPaginationInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore
  } = useQuery(BRAND_EDITS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.brandEdits.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.brandEdits))
  }

  const brandEdits = useMemo(
    () => flatten(data?.brandEdits ?? []),
    [data?.brandEdits]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.brandEdits.pageInfo)

  return {
    brandEdits,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore
  }
}