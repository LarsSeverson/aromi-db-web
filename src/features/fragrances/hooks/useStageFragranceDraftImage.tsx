import { useMutation } from "@apollo/client/react";
import { STAGE_FRAGRANCE_DRAFT_IMAGE_MUTATION } from '../graphql/mutations'
import { type StageAssetInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'

export const useStageFragranceDraftImage = () => {
  const [stageImageInner] = useMutation(STAGE_FRAGRANCE_DRAFT_IMAGE_MUTATION)

  const stageImage = (input: StageAssetInput) => {
    return ResultAsync
      .fromPromise(
        stageImageInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.stageFragranceDraftImage))
  }

  return {
    stageImage
  }
}
