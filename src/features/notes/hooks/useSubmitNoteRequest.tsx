import { useMutation } from '@apollo/client/react'
import { SUBMIT_NOTE_REQUEST_MUTATION } from '../graphql/mutations'
import type { SubmitNoteRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useSubmitNoteRequest = () => {
  const [submitNoteRequestInner] = useMutation(SUBMIT_NOTE_REQUEST_MUTATION)

  const submitNoteRequest = (input: SubmitNoteRequestInput) => {
    return wrapQuery(submitNoteRequestInner({ variables: { input } })).map(data => data.submitNoteRequest)
  }

  return { submitNoteRequest }
}