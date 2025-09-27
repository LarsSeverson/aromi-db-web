import { useMutation } from '@apollo/client/react'
import { SET_FRAGRANCE_REQUEST_ACCORDS_MUTATION } from '../graphql/mutations'
import type { SetFragranceRequestAccordsInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSetFragranceRequestAccords = () => {
  const [setAccordsInner] = useMutation(SET_FRAGRANCE_REQUEST_ACCORDS_MUTATION)

  const setAccords = (input: SetFragranceRequestAccordsInput) => {
    return wrapQuery(setAccordsInner({ variables: { input } })).map(data => data.setFragranceRequestAccords)
  }

  return { setAccords }
}