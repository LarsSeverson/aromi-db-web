import { useMutation } from "@apollo/client/react";
import { SET_USER_AVATAR_MUTATION } from '../graphql/mutations'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'
import { type StageAssetInput } from '@/generated/graphql'

export const useUpdateUserAvatar = () => {
  const [
    updateUserAvatarInner,
    { data, loading, error }
  ] = useMutation(SET_USER_AVATAR_MUTATION)

  const updateUserAvatar = (input: StageAssetInput) => {
    return ResultAsync
      .fromPromise(
        updateUserAvatarInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.updateUserAvatar))
  }

  return {
    data,
    loading,
    error,

    updateUserAvatar
  }
}
