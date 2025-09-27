import { useMutation } from '@apollo/client/react'
import { CREATE_NOTE_REQUEST_MUTATION } from '../graphql/mutations'
import type { CreateNoteRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useCreateNoteRequest = () => {
  const [createRequestInner] = useMutation(CREATE_NOTE_REQUEST_MUTATION)

  const createRequest = (input: CreateNoteRequestInput) => {
    return wrapQuery(createRequestInner({ variables: { input } })).map(data => data.createNoteRequest)
  }

  return { createRequest }
}