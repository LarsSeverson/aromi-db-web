import { gql } from '@/generated'

export const FRAGRANCE_DRAFT_SHELL_QUERY = gql(/* GraphQL */`
  query FragranceDraftShell(
    $id: ID!
  ) {
    fragranceDraft(id: $id) {
      ...FragranceDraftShell
    }
  }
`)

export const FRAGRANCE_DRAFT_SUMMARY_QUERY = gql(/* GraphQL */`
  query FragranceDraft(
    $id: ID!
  ) {
    fragranceDraft(id: $id) {
      ...FragranceDraftSummary
    }
  }
`)

export const FRAGRANCE_DRAFT_PREVIEW_QUERY = gql(/* GraphQL */`
  query FragranceDraftPreview(
    $id: ID!
  ) {
    fragranceDraft(id: $id) {
      ...FragranceDraftPreview
    }
  }
`)

export const FRAGRANCE_DRAFTS_QUERY = gql(/* GraphQL */`
  query FragranceDrafts(
    $input: DraftPaginationInput
  ) {
    fragranceDrafts(input: $input) {
      edges {
        node {
          ...FragranceDraftPreview
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)
