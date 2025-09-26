import type { UpdateBrandRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { UPDATE_BRAND_REQUEST_MUTATION } from '../graphql/mutations'

export const useUpdateBrandRequest = () => {
  const [updateBrandRequestInner] = useMutation(UPDATE_BRAND_REQUEST_MUTATION)

  const updateBrandRequest = (input: UpdateBrandRequestInput) => {
    return wrapQuery(updateBrandRequestInner({ variables: { input } })).map(data => data.updateBrandRequest)
  }

  return { updateBrandRequest }
}