import { useMutation } from '@apollo/client'
import { DELETE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type DeleteFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/common/error'

export const useDeleteFragranceDraft = () => {
  const [deleteDraftInner] = useMutation(DELETE_FRAGRANCE_DRAFT_MUTATION)

  const deleteDraft = (input: DeleteFragranceDraftInput) => {
    return ResultAsync
      .fromPromise(
        deleteDraftInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.deleteFragranceDraft))
  }

  return { deleteDraft }
}
