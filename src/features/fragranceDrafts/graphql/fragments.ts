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
    ...FragranceDraftSummary
    image {
      ...FragranceDraftImageSummary
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
