import { useMutation } from '@apollo/client/react'
import { UPDATE_NOTE_REQUEST_MUTATION } from '../graphql/mutations'
import type { UpdateNoteRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useUpdateNoteRequest = () => {
  const [updateNoteRequestInner] = useMutation(UPDATE_NOTE_REQUEST_MUTATION)

  const updateNoteRequest = (input: UpdateNoteRequestInput) => {
    return wrapQuery(updateNoteRequestInner({ variables: { input } })).map(data => data.updateNoteRequest)
  }

  return { updateNoteRequest }
}