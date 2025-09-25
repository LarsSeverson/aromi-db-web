import { useMutation } from "@apollo/client/react";
import { SET_FRAGRANCE_DRAFT_NOTES_MUTATION } from '../graphql/mutations'
import { type SetFragranceDraftNotesInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'

export const useSetFragranceDraftNotes = () => {
  const [setNotesInner] = useMutation(SET_FRAGRANCE_DRAFT_NOTES_MUTATION)

  const setNotes = (input: SetFragranceDraftNotesInput) => {
    return ResultAsync
      .fromPromise(
        setNotesInner({ variables: { input, layer: input.layer } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.setFragranceDraftNotes))
  }

  return { setNotes }
}
