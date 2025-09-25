import { type SignUpInput } from '@/generated/graphql'
import { SIGN_UP_MUTATION } from '../graphql/mutations'
import { useMutation } from "@apollo/client/react";
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/utils/error'

export const useSignUp = () => {
  const [
    signUpInner,
    { data, loading, error }
  ] = useMutation(SIGN_UP_MUTATION)

  const signUp = (
    input: SignUpInput
  ) => {
    return ResultAsync
      .fromPromise(
        signUpInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    signUp
  }
}
