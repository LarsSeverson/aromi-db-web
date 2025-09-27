import { useMutation } from '@apollo/client/react'
import { UPDATE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { UpdateFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useUpdateFragranceRequest = () => {
  const [updateRequestInner] = useMutation(UPDATE_FRAGRANCE_REQUEST_MUTATION)

  const updateRequest = (input: UpdateFragranceRequestInput) => {
    return wrapQuery(updateRequestInner({ variables: { input } })).map(data => data.updateFragranceRequest)
  }

  return { updateRequest }
}