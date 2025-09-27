import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import type { CreateFragranceRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateFragranceRequest = () => {
  const [createFragranceRequestInner] = useMutation(CREATE_FRAGRANCE_REQUEST_MUTATION)

  const createFragranceRequest = (input: CreateFragranceRequestInput) => {
    return wrapQuery(createFragranceRequestInner({ variables: { input } })).map(data => data.createFragranceRequest)
  }

  return { createFragranceRequest }
}