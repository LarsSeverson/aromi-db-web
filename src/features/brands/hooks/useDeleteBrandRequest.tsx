import type { DeleteBrandRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { DELETE_BRAND_REQUEST_MUTATION } from '../graphql/mutations'

export const useDeleteBrandRequest = () => {
  const [deleteBrandRequestInner] = useMutation(DELETE_BRAND_REQUEST_MUTATION)

  const deleteBrandRequest = (input: DeleteBrandRequestInput) => {
    return wrapQuery(deleteBrandRequestInner({ variables: { input } })).map(data => data.deleteBrandRequest)
  }

  return { deleteBrandRequest }
}