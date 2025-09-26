import { gql } from '@/generated'

/* Notes */
export const NOTE_FRAGMENT = gql(/* GraphQL */`
  fragment NoteFragment on Note { 
    id
    name
    thumbnail {
      ...AssetFragment
    }
  }
`)

export const NOTE_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment NotePreviewFragment on Note { 
    id
    name
    thumbnail {
      ...AssetPreviewFragment
    }
  }
`)

/* Note Edits */
export const NOTE_EDIT_FRAGMENT = gql(/* GraphQL */`
  fragment NoteEditFragment on NoteEdit { 
    id
    status
    reason

    proposedName
    proposedDescription
    proposedThumbnail {
      ...AssetPreviewFragment
    }

    note {
      ...NotePreviewFragment
    }
    user {
      ...UserPreviewFragment
    }
    reviewer {
      ...UserPreviewFragment
    }
  }
`)

/* Note Requests */
export const NOTE_REQUEST_FRAGMENT = gql(/* GraphQL */`
  fragment NoteRequestFragment on NoteRequest { 
    id
    version
    requestStatus
    name
    description

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
