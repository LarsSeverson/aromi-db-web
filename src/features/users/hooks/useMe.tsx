import { ResultAsync } from 'neverthrow'
import { MY_QUERY } from '../graphql/queries'
import { useQuery } from '@apollo/client/react'
import { toApolloError } from '@/utils/error'

export const useMe = () => {
  const { data, loading, error, refetch: refreshInner } = useQuery(MY_QUERY)


  const refresh = () => {
    return ResultAsync
      .fromPromise(
        refreshInner(),
        toApolloError
      )
  }

  const me = data?.me

  return {
    me,
    loading,
    error,

    refresh
  }
}
