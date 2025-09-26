import { wrapQuery } from '@/utils/util'
import { DELETE_ACCORD_REQUEST_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import type { DeleteAccordRequestInput } from '@/generated/graphql'

export const useDeleteAccordRequest = () => {
  const [deleteAccordRequestInner] = useMutation(DELETE_ACCORD_REQUEST_MUTATION)

  const deleteAccordRequest = (input: DeleteAccordRequestInput) => {
    return wrapQuery(deleteAccordRequestInner({ variables: { input } })).map(data => data.deleteAccordRequest)
  }

  return { deleteAccordRequest }
}