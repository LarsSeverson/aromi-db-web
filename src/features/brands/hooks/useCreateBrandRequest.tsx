import type { CreateBrandRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { CREATE_BRAND_REQUEST_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'

export const useCreateBrandRequest = () => {
  const [createBrandRequestInner] = useMutation(CREATE_BRAND_REQUEST_MUTATION)

  const createBrandRequest = (input: CreateBrandRequestInput) => {
    return wrapQuery(createBrandRequestInner({ variables: { input } })).map(data => data.createBrandRequest)
  }

  return { createBrandRequest }
}