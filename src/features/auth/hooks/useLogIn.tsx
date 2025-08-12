import { type LogInInput } from '@/generated/graphql'
import { LOG_IN_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useLogIn = () => {
  const [
    logInInner,
    { data, loading, error }
  ] = useMutation(LOG_IN_MUTATION)

  const logIn = (
    input: LogInInput
  ) => {
    return ResultAsync
      .fromPromise(
        logInInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    logIn
  }
}
