import type { DeleteNoteRequestInput } from '@/generated/graphql'
import { useMutation } from '@apollo/client/react'
import { DELETE_NOTE_REQUEST_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'

export const useDelteNoteRequest = () => {
  const [deleteNoteRequestInner] = useMutation(DELETE_NOTE_REQUEST_MUTATION)

  const deleteNoteRequest = (input: DeleteNoteRequestInput) => {
    return wrapQuery(deleteNoteRequestInner({ variables: { input } })).map(data => data.deleteNoteRequest)
  }

  return { deleteNoteRequest }
}