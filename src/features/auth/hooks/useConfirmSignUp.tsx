import { type ConfirmSignUpInput } from '@/generated/graphql'
import { CONFIRM_SIGN_UP_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useConfirmSignUp = () => {
  const [
    confirmSignUpInner,
    { data, loading, error }
  ] = useMutation(CONFIRM_SIGN_UP_MUTATION)

  const confirmSignUp = (
    input: ConfirmSignUpInput
  ) => {
    return ResultAsync
      .fromPromise(
        confirmSignUpInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    confirmSignUp
  }
}
