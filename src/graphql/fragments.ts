import { gql } from '@/generated'

export const PageInfoFragment = gql(/* GraphQL */`
  fragment PageInfoFragment on PageInfo {
    hasPreviousPage
    hasNextPage
    startCursor
    endCursor
  }
`)

export const PRESIGNED_UPLOAD_FRAGMENT = gql(/* GraphQL */`
  fragment PresignedUploadFragment on PresignedUpload {
    id
    url
    fields
  }
`)

export const ASSET_FRAGMENT = gql(/* GraphQL */`
  fragment AssetFragment on Asset {
    id
    url
    name
    size
    type
  }
`)
