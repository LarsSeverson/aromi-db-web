import { useMutation } from '@apollo/client/react'
import { CREATE_NOTE_EDIT_MUTATION } from '../graphql/mutations'
import type { CreateNoteEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateNoteEdit = () => {
  const [createEditInner] = useMutation(CREATE_NOTE_EDIT_MUTATION)

  const createEdit = (input: CreateNoteEditInput) => {
    return wrapQuery(createEditInner({ variables: { input } })).map(data => data.createNoteEdit)
  }

  return { createEdit }
}