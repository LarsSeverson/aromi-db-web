import { useMutation } from '@apollo/client/react'
import { VOTE_ON_NOTE_REQUEST_MUTATION } from '../graphql/mutations'
import type { VoteOnNoteRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnNoteRequest = () => {
  const [voteOnNoteRequestInner] = useMutation(VOTE_ON_NOTE_REQUEST_MUTATION)

  const voteOnNoteRequest = (input: VoteOnNoteRequestInput) => {
    return wrapQuery(voteOnNoteRequestInner({ variables: { input } })).map(data => data.voteOnNoteRequest)
  }

  return { voteOnNoteRequest }
}