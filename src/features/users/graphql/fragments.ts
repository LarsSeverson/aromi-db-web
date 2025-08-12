import { gql } from '@/generated'

export const UserSummaryFragment = gql(/* GraphQL */ `
  fragment UserSummaryFragment on User {
    id
    username
    email

    avatarSrc
    avatarStatus
  }
`)
