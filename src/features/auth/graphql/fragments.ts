import { gql } from '@/generated'

export const AuthDeliveryResultFragment = gql(/* GraphQL */ `
  fragment AuthDeliveryResultFragment on AuthDeliveryResult {
    isComplete

    delivery {
      attribute
      destination
      method
    }
  }
`)

export const AuthTokenPayloadFragment = gql(/* GraphQL */ `
  fragment AuthTokenPayloadFragment on AuthTokenPayload {
    idToken
    accessToken
    expiresIn
  }
`)
