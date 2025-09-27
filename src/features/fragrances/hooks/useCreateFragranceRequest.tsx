import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { CreateFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useStageAsset } from '@/features/assets'

export const useCreateFragranceRequest = () => {
  const [createRequestInner] = useMutation(CREATE_FRAGRANCE_REQUEST_MUTATION)

  const { stageAssetWithFile } = useStageAsset()

  const createRequest = (input: CreateFragranceRequestInput) => {
    return wrapQuery(createRequestInner({ variables: { input } })).map(data => data.createFragranceRequest)
  }

  const createRequestWithImage = (file: File, onProgress?: (pct: number) => void) => {
    return stageAssetWithFile(file, 'FRAGRANCE_IMAGES', onProgress)
      .andThen(image => createRequest({ assetId: image.assetId }))
  }

  return { createRequest, createRequestWithImage }
}