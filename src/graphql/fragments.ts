import { gql } from '@/generated'

export const PageInfoFragment = gql(/* GraphQL */`
  fragment PageInfoFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)

export const VoteInfoFragment = gql(/* GraphQL */`
  fragment VoteInfoFragment on VoteInfo {
    upvotes 
    downvotes
    score
    myVote
  }
`)