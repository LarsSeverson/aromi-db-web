import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { DeleteFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useDeleteFragranceRequest = () => {
  const [deleteRequestInner] = useMutation(DELETE_FRAGRANCE_REQUEST_MUTATION)

  const deleteRequest = (input: DeleteFragranceRequestInput) => {
    return wrapQuery(deleteRequestInner({ variables: { input } })).map(data => data.deleteFragranceRequest)
  }

  return { deleteRequest }
}