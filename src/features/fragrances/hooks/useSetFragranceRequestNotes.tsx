import { useMutation } from '@apollo/client/react'
import { SET_FRAGRANCE_REQUEST_NOTES_MUTATION } from '../graphql/mutations'
import type { SetFragranceRequestNotesInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSetFragranceRequestNotes = () => {
  const [setNotesInner] = useMutation(SET_FRAGRANCE_REQUEST_NOTES_MUTATION)

  const setNotes = (input: SetFragranceRequestNotesInput) => {
    return wrapQuery(setNotesInner({ variables: { input } })).map(data => data.setFragranceRequestNotes)
  }

  return { setNotes }
}