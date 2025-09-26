import { useMutation } from "@apollo/client/react";
import { FINALIZE_FRAGRANCE_DRAFT_IMAGE_MUTATION } from '../graphql/mutations'
import { type FinalizeFragranceDraftImageInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'

export const useFinalizeFragranceDraftImage = () => {
  const [finalizeImageInner] = useMutation(FINALIZE_FRAGRANCE_DRAFT_IMAGE_MUTATION)

  const finalizeImage = (input: FinalizeFragranceDraftImageInput) => {
    return ResultAsync
      .fromPromise(
        finalizeImageInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.finalizeFragranceDraftImage))
  }

  return {
    finalizeImage
  }
}
