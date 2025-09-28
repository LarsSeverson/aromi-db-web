import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { DeleteFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMyContext } from '@/features/users'
import type { NodeWithEdges } from '@/utils/pagination'
import type { Reference } from '@apollo/client'

export const useDeleteFragranceRequest = () => {
  const { me } = useMyContext()

  const [deleteRequestInner] = useMutation(
    DELETE_FRAGRANCE_REQUEST_MUTATION,
    {
      update: (cache, { data }) => {
        const deletedRequest = data?.deleteFragranceRequest

        if (deletedRequest == null) return
        if (me == null) return

        cache.modify({
          id: cache.identify(me),
          fields: {
            fragranceRequests (existing = { edges: [] }, { readField }) {
              const typedExisting = existing as NodeWithEdges<Reference>
              const newEdges = typedExisting.edges.filter(edge => readField('id', edge.node) !== deletedRequest.id)

              return {
                ...typedExisting,
                edges: newEdges
              }
            }
          }
        })
      }
    }
  )

  const deleteRequest = (input: DeleteFragranceRequestInput) => {
    return wrapQuery(deleteRequestInner({ variables: { input } })).map(data => data.deleteFragranceRequest)
  }

  return { deleteRequest }
}