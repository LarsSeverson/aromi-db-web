import { gql } from '@/generated'

export const AUTH_TOKEN_PAYLOAD_FRAGMENT = gql(/* GraphQL */`
  fragment AuthTokenPayloadFragment on AuthTokenPayload {
    idToken 
    accessToken
    expiresIn
  }
`)

export const AUTH_CODE_DELIVERY_DETAILS_FRAGMENT = gql(/* GraphQL */`
  fragment AuthCodeDeliveryDetailsFragment on AuthCodeDeliveryDetails {
    method
    attribute
    destination
  }
`)

export const AUTH_DELIVERY_RESULT_FRAGMENT = gql(/* GraphQL */`
  fragment AuthDeliveryResultFragment on AuthDeliveryResult {
    isComplete 
    delivery {
      ...AuthCodeDeliveryDetailsFragment
    }
  }
`)