import { type AccordPaginationInput } from '@/generated/graphql'
import { NetworkStatus, useQuery } from '@apollo/client'
import { ACCORDS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'
import { useMemo } from 'react'

export const useAccords = (input?: AccordPaginationInput) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(ACCORDS_QUERY, {
    variables: { input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.accords.pageInfo,
      networkStatus
    )

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
        toApolloError
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
