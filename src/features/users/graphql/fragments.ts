import { gql } from '@/generated'

export const UserFragment = gql(/* GraphQL */ `
  fragment UserFragment on User {
    id
    username
    email
    avatar {
      ...AssetPreviewFragment
    }
  }
`)

export const UserPreviewFragment = gql(/* GraphQL */ `
  fragment UserPreviewFragment on User {
    id
    username
    avatar {
      ...AssetPreviewFragment
    }
  }
`)