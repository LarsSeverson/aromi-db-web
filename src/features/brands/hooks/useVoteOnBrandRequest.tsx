import { useMutation } from '@apollo/client/react'
import { VOTE_ON_BRAND_REQUEST_MUTATION } from '../graphql/mutations'
import type { VoteOnBrandRequestInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnBrandRequest = () => {
  const [voteOnBrandRequestInner] = useMutation(VOTE_ON_BRAND_REQUEST_MUTATION)

  const voteOnBrandRequest = (input: VoteOnBrandRequestInput) => {
    return wrapQuery(voteOnBrandRequestInner({ variables: { input } })).map(data => data.voteOnBrandRequest)
  }

  return { voteOnBrandRequest }
}