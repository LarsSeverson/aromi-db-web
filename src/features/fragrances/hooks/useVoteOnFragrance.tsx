import { useMutation } from '@apollo/client/react'
import { VOTE_ON_FRAGRANCE_MUTATION } from '../graphql/mutations'
import type { VoteOnFragranceInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnFragrance = () => {
  const [voteOnFragranceInner] = useMutation(VOTE_ON_FRAGRANCE_MUTATION)

  const voteOnFragrance = (input: VoteOnFragranceInput) => {
    return wrapQuery(voteOnFragranceInner({ variables: { input } })).map(data => data.voteOnFragrance)
  }

  return { voteOnFragrance }
}