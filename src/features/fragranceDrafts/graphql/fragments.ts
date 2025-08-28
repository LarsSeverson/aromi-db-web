import { gql } from '@/generated'

export const FRAGRANCE_DRAFT_SHELL_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftShell on FragranceDraft {
    id
    version
  }
`)

export const FRAGRANCE_DRAFT_SUMMARY_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftSummary on FragranceDraft {
    id
    version

    name
    description
    releaseYear
    concentration
    status
  }
`)

export const FRAGRANCE_DRAFT_PREVIEW_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftPreview on FragranceDraft {
    ...FragranceDraftShell
    image {
      ...FragranceDraftImageSummary
    }
  }
`)

export const FRAGRANCE_DRAFT_TRAITS_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftTraitsFragment on FragranceDraft { 
    ...FragranceDraftShell
    traits {
      ...FragranceDraftTraitFragment
    }
  }
`)

export const FRAGRANCE_DRAFT_ACCORDS_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftAccordsFragment on FragranceDraft { 
    ...FragranceDraftShell
    accords {
      ...AccordSummaryFragment
    }
  }
`)

export const FRAGRANCE_DRAFT_IMAGE_SUMMARY_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftImageSummary on FragranceDraftImage {
    id
    url
    type
  }
`)

export const FRAGRANCE_DRAFT_TRAIT_FRAGMENT = gql(/* GraphQL */`
  fragment FragranceDraftTraitFragment on FragranceDraftTrait {
    traitType
    selectedOption {
      ...TraitOptionFragment
    }
  }
`)
