import { ResultAsync } from 'neverthrow'
import { LOG_OUT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { toApolloError } from '@/common/error'

export const useLogOut = () => {
  const [
    logOutInner,
    { data, loading, error }
  ] = useMutation(LOG_OUT_MUTATION)

  const logOut = () => {
    return ResultAsync
      .fromPromise(
        logOutInner(),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    logOut
  }
}
