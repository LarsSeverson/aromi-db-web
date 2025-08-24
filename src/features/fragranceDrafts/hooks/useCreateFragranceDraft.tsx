import { useMutation } from '@apollo/client'
import { CREATE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type CreateFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/common/error'

export const useCreateFragranceDraft = () => {
  const [createDraftInner] = useMutation(CREATE_FRAGRANCE_DRAFT_MUTATION)

  const createDraft = (input: CreateFragranceDraftInput) => {
    return ResultAsync
      .fromPromise(
        createDraftInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.createFragranceDraft))
  }

  return {
    createDraft
  }
}
