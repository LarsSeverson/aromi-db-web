import { useMutation } from '@apollo/client/react'
import { SUBMIT_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { SubmitFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSubmitFragranceRequest = () => {
  const [submitRequestInner] = useMutation(SUBMIT_FRAGRANCE_REQUEST_MUTATION)

  const submitRequest = (input: SubmitFragranceRequestInput) => {
    return wrapQuery(submitRequestInner({ variables: { input } })).map(data => data.submitFragranceRequest)
  }

  return { submitRequest }
}