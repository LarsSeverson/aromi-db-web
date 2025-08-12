import { type ForgotPasswordInput } from '@/generated/graphql'
import { FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useForgotPassword = () => {
  const [
    forgotPasswordInner,
    { data, loading, error }
  ] = useMutation(FORGOT_PASSWORD_MUTATION)

  const forgotPassword = (
    input: ForgotPasswordInput
  ) => {
    return ResultAsync
      .fromPromise(
        forgotPasswordInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    forgotPassword
  }
}
