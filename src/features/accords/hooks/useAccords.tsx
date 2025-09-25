import type { AccordPaginationInput } from '@/generated/graphql'
import { NetworkStatus } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { ACCORDS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes } from '@/utils/util'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'
import { getServerErrorInfo } from '@/utils/error'

export const useAccords = (input?: AccordPaginationInput) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(ACCORDS_QUERY, { variables: { input } })

  const loadMore = () => {
    const endCursor = validatePagination(data?.accords.pageInfo, networkStatus)

    if (endCursor == null) return noRes

    const variables = {
      input: {
        ...(input ?? {}),
        after: endCursor
      }
    }

    return ResultAsync
      .fromPromise(
        fetchMore({ variables }),
        getServerErrorInfo
      )
      .map(result => result.data.accords)
  }

  const accords = useMemo(
    () => flatten(data?.accords ?? []),
    [data?.accords]
  )

  const loadingMore = networkStatus === NetworkStatus.fetchMore
  const hasMore = data?.accords.pageInfo.hasNextPage ?? true

  return {
    data: accords,

    loading,
    loadingMore,
    hasMore,

    error,

    refetch,
    loadMore
  }
}
