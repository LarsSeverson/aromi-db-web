import { type NotePaginationInput } from '@/generated/graphql'
import { NetworkStatus, useQuery } from '@apollo/client'
import { NOTES_QUERY } from '../graphql/queries'
import { flatten, validatePagination } from '@/common/pagination'
import { noRes } from '@/common/util'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'
import { useMemo } from 'react'

export const useNotes = (input?: NotePaginationInput) => {
  const {
    data, loading, error, networkStatus,
    refetch, fetchMore
  } = useQuery(
    NOTES_QUERY,
    {
      variables: { input },
      notifyOnNetworkStatusChange: true
    }
  )

  const loadMore = () => {
    const endCursor = validatePagination(
      data?.notes.pageInfo,
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
      .map(result => result.data.notes)
  }

  const notes = useMemo(
    () => flatten(data?.notes ?? []),
    [data?.notes]
  )

  const loadingMore = networkStatus === NetworkStatus.fetchMore
  const hasMore = data?.notes.pageInfo.hasNextPage ?? true

  return {
    data: notes,

    loading,
    loadingMore,
    hasMore,

    error,

    refetch,
    loadMore
  }
}
