import { gql } from '@/generated'

export const TRAIT_OPTION_FRAGMENT = gql(/* GraphQL */`
  fragment TraitOptionFragment on TraitOption {
    id
    label
    score
  }
`)

export const TRAIT_VOTE_DISTRIBUTION_FRAGMENT = gql(/* GraphQL */`
  fragment TraitVoteDistributionFragment on TraitVoteDistribution {
    option {
      ...TraitOptionFragment
    }
    votes
  }
`)

export const TRAIT_STATS_FRAGMENT = gql(/* GraphQL */`
  fragment TraitStatsFragment on TraitStats {
    averageScore 
    totalVotes
    distribution {
      ...TraitVoteDistributionFragment
    }
  }
`)

export const TRAIT_VOTE_FRAGMENT = gql(/* GraphQL */`
  fragment TraitVoteFragment on TraitVote {
    option {
      ...TraitOptionFragment
    } 
  }
`)
