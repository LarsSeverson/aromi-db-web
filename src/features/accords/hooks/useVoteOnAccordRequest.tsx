import type { VoteOnAccordRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { useMutation } from '@apollo/client/react'
import { VOTE_ON_ACCORD_REQUEST_MUTATION } from '../graphql/mutations'

export const useVoteOnAccordRequest = () => {
  const [voteOnAccordRequestInner] = useMutation(VOTE_ON_ACCORD_REQUEST_MUTATION)

  const voteOnAccordRequest = (input: VoteOnAccordRequestInput) => {
    return wrapQuery(voteOnAccordRequestInner({ variables: { input } })).map(data => data.voteOnAccordRequest)
  }

  return { voteOnAccordRequest }
}