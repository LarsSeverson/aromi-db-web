import { gql } from '@/generated'

/* Fragrance */
export const FRAGRANCE_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceFragment on Fragrance { 
    id
    name
    description
    releaseYear
    concentration
    status

    votes {
      ...VoteInfoFragment
    }

    brand {
      ...BrandPreviewFragment
    }

    images {
      ...FragranceImageFragment
    }

    traits {
      ...FragranceTraitFragment
    }
  }
`)

export const FRAGRANCE_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment FragrancePreviewFragment on Fragrance { 
    id
    name

    votes {
      ...VoteInfoFragment
    }

    brand {
      ...BrandPreviewFragment
    }

    thumbnail {
      ...FragranceImageFragment
    }
  }
`)

export const FRAGRANCE_IMAGE_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceImageFragment on FragranceImage { 
    id
    url
    primaryColor
    width
    height
  }
`)

export const FRAGRANCE_ACCORD_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceAccordFragment on FragranceAccord { 
    id
    accord {
      ...AccordFragment
    }
    votes {
      ...VoteInfoFragment
    }
  }
`)

export const FRAGRANCE_NOTE_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceNoteFragment on FragranceNote { 
    id
    note {
      ...NotePreviewFragment
    }
    layer
    votes {
      ...VoteInfoFragment
    }
  }
`)

export const FRAGRANCE_TRAIT_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceTraitFragment on FragranceTrait { 
    id
    type
    name
    options {
      ...TraitOptionFragment
    } 
    stats {
      ...TraitStatsFragment
    }
    myVote {
      ...TraitVoteFragment
    }
  }
`)

/* Fragrance Edit */
export const FRAGRANCE_EDIT_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceEditFragment on FragranceEdit { 
    id
    status
    reason

    proposedName
    proposedDescription
    proposedReleaseYear
    proposedConcentration
    proposedStatus
    proposedBrand {
      ...BrandPreviewFragment
    }
    proposedImage {
      ...AssetPreviewFragment
    }

    fragrance {
      ...FragrancePreviewFragment
    }
    user {
      ...UserPreviewFragment
    }
    reviewer {
      ...UserPreviewFragment
    }
  }
`)

/* Fragrance Request */
export const FRAGRANCE_REQUEST_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceRequestFragment on FragranceRequest { 
    id
    version
    requestStatus

    name
    description
    releaseYear
    concentration
    fragranceStatus

    brand {
      ...BrandPreviewFragment
    }

    image {
      ...AssetPreviewFragment
    }

    traits {
      ...FragranceRequestTraitFragment
    }

    votes {
      ...VoteInfoFragment
    }

    user {
      ...UserPreviewFragment
    }
  }
`)

export const FRAGRANCE_REQUEST_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceRequestPreviewFragment on FragranceRequest { 
    id
    version
    requestStatus

    name

    brand {
      ...BrandPreviewFragment
    }

    image {
      ...AssetPreviewFragment
    }

    votes {
      ...VoteInfoFragment
    }
  }
`)

export const FRAGRANCE_REQUEST_TRAIT_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceRequestTraitFragment on FragranceRequestTrait { 
    traitType
    selectedOption {
      ...TraitOptionFragment
    }
  }
`)

export const FRAGRANCE_REQUEST_NOTE_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceRequestNoteFragment on FragranceRequestNote { 
    id
    layer
    note {
      ...NotePreviewFragment
    }
  }
`)