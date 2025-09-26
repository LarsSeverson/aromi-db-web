import { useMutation } from '@apollo/client/react'
import { CREATE_ACCORD_REQUEST_MUTATION } from '../graphql/mutations'
import type { CreateAccordRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateAccordRequest = () => {
  const [createRequestInner] = useMutation(CREATE_ACCORD_REQUEST_MUTATION)

  const createRequest = (input: CreateAccordRequestInput) => {
    return wrapQuery(createRequestInner({ variables: { input } })).map(data => data.createAccordRequest)
  }

  return { createRequest }
}