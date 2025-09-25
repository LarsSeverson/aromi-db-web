import { type ConfirmForgotPasswordInput } from '@/generated/graphql'
import { CONFIRM_FORGOT_PASSWORD_MUTATION } from '../graphql/mutations'
import { useMutation } from "@apollo/client/react";
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/utils/error'

export const useConfirmForgotPassword = () => {
  const [
    confirmForgotPasswordInner,
    { data, loading, error }
  ] = useMutation(CONFIRM_FORGOT_PASSWORD_MUTATION)

  const confirmForgotPassword = (
    input: ConfirmForgotPasswordInput
  ) => {
    return ResultAsync
      .fromPromise(
        confirmForgotPasswordInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    confirmForgotPassword
  }
}
