import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { CreateFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useStageAsset } from '@/features/assets'
import { useMyContext } from '@/features/users'
import type { Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'

export const useCreateFragranceRequest = () => {
  const { me } = useMyContext()

  const [createRequestInner] = useMutation(
    CREATE_FRAGRANCE_REQUEST_MUTATION,
    {
      update: (cache, { data }) => {
        const newRequest = data?.createFragranceRequest

        if (newRequest == null) return
        if (me == null) return

        cache.modify({
          id: cache.identify(me),
          fields: {
            fragranceRequests (
              existing = { edges: [] },
              { toReference }
            ) {
              const typedExisting = existing as NodeWithEdges<Reference>

              const newEdge = {
                __typename: 'FragranceRequestEdge',
                node: toReference(newRequest)
              }

              const oldEdges = typedExisting.edges

              return {
                ...typedExisting,
                edges: [newEdge, ...oldEdges]
              }
            }
          }
        })
      }
    })

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