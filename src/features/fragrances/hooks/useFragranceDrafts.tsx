import { type DraftPaginationInput } from '@/generated/graphql'
import { NetworkStatus } from '@apollo/client';
import { useQuery } from "@apollo/client/react";
import { FRAGRANCE_DRAFTS_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/utils/pagination'
import { noRes, toApolloError } from '@/utils/error'
import { ResultAsync } from 'neverthrow'
import { useMemo } from 'react'

export const useFragranceDrafts = (input?: DraftPaginationInput) => {
  const {
    data, loading, error, networkStatus,
    fetchMore
  } = useQuery(FRAGRANCE_DRAFTS_QUERY, {
    variables: { input },
    notifyOnNetworkStatusChange: true
  })

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.fragranceDrafts.pageInfo,
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
      .map(({ data }) => data.fragranceDrafts)
  }

  const fragranceDrafts = useMemo(
    () => flatten(data?.fragranceDrafts ?? []),
    [data?.fragranceDrafts]
  )

  const loadingMore = networkStatus === NetworkStatus.fetchMore
  const hasMore = data?.fragranceDrafts.pageInfo.hasNextPage ?? true

  return {
    fragranceDrafts,

    loading,
    loadingMore,
    hasMore,

    error,

    loadMore
  }
}
