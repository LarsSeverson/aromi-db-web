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

export const FRAGRANCE_DRAFT_TRAIT_QUERY = gql(/* GraphQL */`
  query FragranceDraftTrait(
    $id: ID!
    $type: TraitTypeEnum!
  ) {
    fragranceDraft(id: $id) {
      id
      version
      trait(type: $type) {
        ...FragranceDraftTraitFragment
      }
    }
  }
`)

export const FRAGRANCE_DRAFT_TRAITS_QUERY = gql(/* GraphQL */`
  query FragranceDraftTraits(
    $id: ID!
  ) {
    fragranceDraft(id: $id) {
      ...FragranceDraftTraitsFragment
    }
  }
`)

export const FRAGRANCE_DRAFT_ACCORDS_QUERY = gql(/* GraphQL */`
  query FragranceDraftAccords(
    $id: ID!
  ) {
    fragranceDraft(id: $id) {
      ...FragranceDraftAccordsFragment
    }
  }
`)
