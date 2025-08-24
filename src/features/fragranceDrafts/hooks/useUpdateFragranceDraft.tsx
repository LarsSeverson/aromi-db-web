import { useMutation } from '@apollo/client'
import { UPDATE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type UpdateFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/common/error'

export const useUpdateFragranceDraft = () => {
  const [updateInner] = useMutation(UPDATE_FRAGRANCE_DRAFT_MUTATION)

  const updateDraft = (input: UpdateFragranceDraftInput) => {
    return ResultAsync
      .fromPromise(
        updateInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.updateFragranceDraft))
  }

  return {
    updateDraft
  }
}
