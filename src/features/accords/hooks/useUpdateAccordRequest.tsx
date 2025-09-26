import { useMutation } from '@apollo/client/react'
import { UPDATE_ACCORD_REQUEST_MUTATION } from '../graphql/mutations'
import type { UpdateAccordRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useUpdateAccordRequest = () => {
  const [updateAccordRequestInner] = useMutation(UPDATE_ACCORD_REQUEST_MUTATION)

  const updateAccordRequest = (input: UpdateAccordRequestInput) => {
    return wrapQuery(updateAccordRequestInner({ variables: { input } })).map(data => data.updateAccordRequest)
  }

  return { updateAccordRequest }
}