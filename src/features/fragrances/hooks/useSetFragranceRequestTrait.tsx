import { useMutation } from '@apollo/client/react'
import { SET_FRAGRANCE_REQUEST_TRAIT_MUTATION } from '../graphql/mutations'
import type { SetFragranceRequestTraitInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSetFragranceRequestTrait = () => {
  const [setTraitInner] = useMutation(SET_FRAGRANCE_REQUEST_TRAIT_MUTATION)

  const setTrait = (input: SetFragranceRequestTraitInput) => {
    return wrapQuery(setTraitInner({ variables: { input } })).map(data => data.setFragranceRequestTrait)
  }

  return { setTrait }
}