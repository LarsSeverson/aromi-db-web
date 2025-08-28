import { useMutation } from '@apollo/client'
import { SET_FRAGRANCE_DRAFT_TRAIT_MUTATION } from '../graphql/mutations'
import { type SetFragranceDraftTraitInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/common/error'

export const useSetFragranceDraftTrait = () => {
  const [setTraitInner] = useMutation(SET_FRAGRANCE_DRAFT_TRAIT_MUTATION)

  const setTrait = (input: SetFragranceDraftTraitInput) => {
    return ResultAsync
      .fromPromise(
        setTraitInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.setFragranceDraftTrait))
  }

  return { setTrait }
}
