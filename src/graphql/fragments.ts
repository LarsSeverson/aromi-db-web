import { gql } from '@/generated'

export const PageInfoFragment = gql(/* GraphQL */`
  fragment PageInfoFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)
