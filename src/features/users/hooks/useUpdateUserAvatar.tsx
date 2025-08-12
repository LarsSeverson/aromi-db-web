import { useMutation } from '@apollo/client'
import { UPDATE_USER_AVATAR_MUTATION } from '../graphql/mutations'
import { type UpdateUserAvatarInput } from '@/generated/graphql'
import { errAsync, okAsync, ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useUpdateUserAvatar = () => {
  const [
    updateUserAvatarInner,
    { data, loading, error }
  ] = useMutation(UPDATE_USER_AVATAR_MUTATION)

  const updateUserAvatar = (input: UpdateUserAvatarInput) => {
    return ResultAsync
      .fromPromise(
        updateUserAvatarInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => {
        if (data?.updateUserAvatar == null) {
          return errAsync()
        }
        return okAsync(data.updateUserAvatar)
      })
  }

  return {
    data,
    loading,
    error,

    updateUserAvatar
  }
}
