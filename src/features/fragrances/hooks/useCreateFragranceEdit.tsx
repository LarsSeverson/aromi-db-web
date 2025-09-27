import { useMutation } from '@apollo/client/react'
import { CREATE_FRAGRANCE_EDIT_MUTATION } from '../graphql/mutations'
import type { CreateFragranceEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateFragranceEdit = () => {
  const [createEditInner] = useMutation(CREATE_FRAGRANCE_EDIT_MUTATION)

  const createEdit = (input: CreateFragranceEditInput) => {
    return wrapQuery(createEditInner({ variables: { input } })).map(data => data.createFragranceEdit)
  }

  return { createEdit }
}