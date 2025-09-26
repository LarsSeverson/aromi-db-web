import { gql } from '@/generated'

/* Brands */
export const BRAND_FRAGMENT = gql(/* GraphQL */`
  fragment BrandFragment on Brand {
    id
    name
    website
    description
    avatar {
      ...AssetFragment
    }
    votes {
      ...VoteInfoFragment
    }
  }
`)

export const BRAND_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment BrandPreviewFragment on Brand {
    id
    name
    avatar {
      ...AssetPreviewFragment
    }
    votes {
      ...VoteInfoFragment
    }
  }
`)

/* Brand Edits */
export const BRAND_EDIT_FRAGMENT = gql(/* GraphQL */`
  fragment BrandEditFragment on BrandEdit { 
    id
    status
    reason

    proposedName
    proposedDescription
    proposedWebsite
    proposedAvatar {
      ...AssetPreviewFragment
    }

    brand {
      ...BrandFragment
    }
    user {
      ...UserPreviewFragment
    }
    reviewer {
      ...UserPreviewFragment
    }
  }
`)

/* Brand Requests */
export const BRAND_REQUEST_FRAGMENT = gql(/* GraphQL */`
  fragment BrandRequestFragment on BrandRequest { 
    id
    version
    requestStatus
    name
    website
    description

    avatar {
      ...AssetPreviewFragment
    }
    votes {
      ...VoteInfoFragment
    }
    user {
      ...UserPreviewFragment
    }
  }
`)