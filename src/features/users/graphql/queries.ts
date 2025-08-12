import { gql } from '@/generated'

export const MY_QUERY = gql(/* GraphQL */ `
  query Me {
    me {
      ...UserSummaryFragment
    }
  }
`)

export const USER_QUERY = gql(/* GraphQL */`
  query User(
    $id: ID!
  ) {
    user(id: $id) {
      ...UserSummaryFragment
    }
  }
`)
