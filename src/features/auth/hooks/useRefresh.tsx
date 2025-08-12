import { ResultAsync } from 'neverthrow'
import { REFRESH_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { toApolloError } from '@/common/error'

export const useRefresh = () => {
  const [
    refreshInner,
    { data, error, loading }
  ] = useMutation(REFRESH_MUTATION)

  const refresh = () => {
    return ResultAsync
      .fromPromise(
        refreshInner(),
        toApolloError
      )
  }

  return {
    data,
    error,
    loading,

    refresh
  }
}
