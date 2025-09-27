import type { StageAssetInput } from '@/generated/graphql'
import { useMutation } from '@apollo/client/react'
import { STAGE_ASSET_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'

export const useStageAsset = () => {
  const [stageAssetInner] = useMutation(STAGE_ASSET_MUTATION)

  const stageAsset = (input: StageAssetInput) => {
    return wrapQuery(stageAssetInner({ variables: { input } })).map(data => data.stageAsset)
  }

  return { stageAsset }
}