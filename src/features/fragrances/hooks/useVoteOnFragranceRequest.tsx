import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_REQUEST_MUTATION } from '../graphql/mutations'
import { wrapQuery } from '@/utils/util'
import type { VoteOnFragranceRequestInput } from '@/generated/graphql'

export const useVoteOnFragranceRequest = () => {
  const [voteOnRequestInner] = useMutation(VOTE_ON_FRAGRANCE_REQUEST_MUTATION)

  const voteOnRequest = (input: VoteOnFragranceRequestInput) => {
    return wrapQuery(voteOnRequestInner({ variables: { input } })).map(data => data.voteOnFragranceRequest)
  }

  return { voteOnRequest }
}