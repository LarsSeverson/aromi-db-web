import type { SubmitAccordRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { SUBMIT_ACCORD_REQUEST_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'

export const useSubmitAccordRequest = () => {
  const [submitAccordRequestInner] = useMutation(SUBMIT_ACCORD_REQUEST_MUTATION)

  const submitAccordRequest = (input: SubmitAccordRequestInput) => {
    return wrapQuery(submitAccordRequestInner({ variables: { input } })).map(data => data.submitAccordRequest)
  }

  return { submitAccordRequest }
}