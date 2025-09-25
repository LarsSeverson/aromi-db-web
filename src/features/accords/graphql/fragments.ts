import { gql } from '@/generated'

/* Accords */
export const ACCORD_FRAGMENT = gql(/* GraphQL */`
  fragment AccordFragment on Accord {
    id
    name
    color
  }
`)

/* Edits */
export const ACCORD_EDIT_FRAGMENT = gql(/* GraphQL */`
  fragment AccordEditFragment on AccordEdit { 
    id
    status
    reason

    proposedName
    proposedColor
    proposedDescription

    accord {
      ...AccordFragment
    }
    user {
      ...UserPreviewFragment
    }
    reviewer {
      ...UserPreviewFragment
    }
  }
`)

/* Requests */
export const ACCORD_REQUEST_FRAGMENT = gql(/* GraphQL */`
  fragment AccordRequestFragment on AccordRequest { 
    id
    version
    requestStatus
    name
    description
    color

    thumbnail {
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