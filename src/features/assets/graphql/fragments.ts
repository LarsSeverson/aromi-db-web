import { gql } from '@/generated'

export const ASSET_FRAGMENT = gql(/* GraphQL */`
  fragment AssetFragment on Asset {
    id
    url
    name
    contentType
    contentSize
    s3Key
  }
`)

export const ASSET_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment AssetPreviewFragment on Asset {
    id
    url
  }
`)

export const PRESIGNED_UPLOAD_FRAGMENT = gql(/* GraphQL */`
  fragment PresignedUploadFragment on PresignedUpload {
    assetId
    url
    fields 
  }
`)