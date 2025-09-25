import { useMutation } from "@apollo/client/react";
import { UPDATE_USER_MUTATION } from '../graphql/mutations'
import { type UpdateUserInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/utils/error'

export const useUpdateUser = () => {
  const [
    updateUserInner,
    { data, loading, error }
  ] = useMutation(UPDATE_USER_MUTATION)

  const updateUser = (input: UpdateUserInput) => {
    return ResultAsync
      .fromPromise(
        updateUserInner({ variables: { input } }),
        toApolloError
      )
  }

  return {
    data,
    loading,
    error,

    updateUser
  }
}
