import type { SubmitBrandRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { SUBMIT_BRAND_REQUEST_MUTATION } from '../graphql/mutations'

export const useSubmitBrandRequest = () => {
  const [submitBrandRequestInner] = useMutation(SUBMIT_BRAND_REQUEST_MUTATION)

  const submitBrandRequest = (input: SubmitBrandRequestInput) => {
    return wrapQuery(submitBrandRequestInner({ variables: { input } })).map(data => data.submitBrandRequest)
  }

  return { submitBrandRequest }
}