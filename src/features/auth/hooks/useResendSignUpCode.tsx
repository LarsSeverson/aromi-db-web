import { type ResendSignUpCodeInput } from '@/generated/graphql'
import { RESEND_SIGN_UP_CODE_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useResendSignUpCode = () => {
  const [
    resendSignUpCodeInner,
    { data, loading, error }
  ] = useMutation(RESEND_SIGN_UP_CODE_MUTATION)

  const resendSignUpCode = (
    input: ResendSignUpCodeInput
  ) => {
    return ResultAsync
      .fromPromise(
        resendSignUpCodeInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    resendSignUpCode
  }
}
