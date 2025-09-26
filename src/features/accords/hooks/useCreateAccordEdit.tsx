import { useMutation } from '@apollo/client/react'
import { CREATE_ACCORD_EDIT_MUTATION } from '../graphql/mutations'
import type { CreateAccordEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateAccordEdit = () => {
  const [createEditInner] = useMutation(CREATE_ACCORD_EDIT_MUTATION)

  const createEdit = (input: CreateAccordEditInput) => {
    return wrapQuery(createEditInner({ variables: { input } })).map(data => data.createAccordEdit)
  }

  return { createEdit }
}