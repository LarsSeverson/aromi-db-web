import type { CreateBrandEditInput } from '@/generated/graphql'
import { CREATE_BRAND_EDIT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'
import { wrapQuery } from '@/utils/util'

export const useCreateBrandEdit = () => {
  const [createBrandEditInner] = useMutation(CREATE_BRAND_EDIT_MUTATION)

  const createBrandEdit = (input: CreateBrandEditInput) => {
    return wrapQuery(createBrandEditInner({ variables: { input } })).map(data => data.createBrandEdit)
  }

  return { createBrandEdit }
}