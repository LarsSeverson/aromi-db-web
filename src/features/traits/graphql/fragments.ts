import { gql } from '@/generated'

export const TRAIT_OPTION_FRAGMENT = gql(/* GraphQL */`
  fragment TraitOptionFragment on TraitOption {
    id
    label
    score
  }
`)
