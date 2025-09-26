import type { SearchInput } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { SEARCH_BRANDS_QUERY } from '../graphql/queries'
import { flatten, validateSearchPagination } from '@/utils/pagination'
import { noRes } from '@/utils/error'
import { hasNextPage, isStatusLoadingMore, wrapQuery } from '@/utils/util'
import { useMemo } from 'react'

export const useSearchBrands = (input?: SearchInput) => {
  const {
    data, loading: isLoading, error, networkStatus,
    fetchMore, refetch
  } = useQuery(SEARCH_BRANDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endOffset = validateSearchPagination(data?.searchBrands.pageInfo, networkStatus)

    if (endOffset == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        offset: endOffset
      }
    }

    return wrapQuery(fetchMore({ variables })).map(data => flatten(data.searchBrands))
  }

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.searchBrands)
  }

  const brands = useMemo(
    () => flatten(data?.searchBrands ?? []),
    [data?.searchBrands]
  )

  const isLoadingMore = isStatusLoadingMore(networkStatus)
  const hasMore = hasNextPage(data?.searchBrands.pageInfo)

  return {
    brands,

    isLoading,
    isLoadingMore,
    hasMore,

    error,

    loadMore,
    refresh
  }
}