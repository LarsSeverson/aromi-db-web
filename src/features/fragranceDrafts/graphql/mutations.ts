import { gql } from '@/generated'

export const CREATE_FRAGRANCE_DRAFT_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceDraft(
    $input: CreateFragranceDraftInput!
  ) {
    createFragranceDraft(input: $input) {
      ...FragranceDraftSummary
    }
  }
`)

export const UPDATE_FRAGRANCE_DRAFT_MUTATION = gql(/* GraphQL */`
  mutation UpdateFragranceDraft(
    $input: UpdateFragranceDraftInput!
  ) {
    updateFragranceDraft(input: $input) {
      ...FragranceDraftSummary
    }
  }
`)

export const DELETE_FRAGRANCE_DRAFT_MUTATION = gql(/* GraphQL */`
  mutation DeleteFragranceDraft(
    $input: DeleteFragranceDraftInput!
  ) {
    deleteFragranceDraft(input: $input) {
      ...FragranceDraftSummary
    }
  }
`)

export const STAGE_FRAGRANCE_DRAFT_IMAGE_MUTATION = gql(/* GraphQL */`
  mutation StageFragranceDraftImage(
    $input: StageAssetInput!
  ) {
    stageFragranceDraftImage(input: $input) {
      ...PresignedUploadFragment
    }
  }
`)

export const FINALIZE_FRAGRANCE_DRAFT_IMAGE_MUTATION = gql(/* GraphQL */`
  mutation FinalizeFragranceDraftImage(
    $input: FinalizeFragranceDraftImageInput!
  ) {
    finalizeFragranceDraftImage(input: $input) {
      ...FragranceDraftPreview
    }
  }
`)

export const SET_FRAGRANCE_DRAFT_TRAIT_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceDraftTrait(
    $input: SetFragranceDraftTraitInput!
  ) {
    setFragranceDraftTrait(input: $input) {
      ...FragranceDraftTraitsFragment
    }
  }
`)

export const SET_FRAGRANCE_DRAFT_ACCORDS_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceDraftAccords(
    $input: SetFragranceDraftAccordsInput!
  ) {
    setFragranceDraftAccords(input: $input) {
      ...FragranceDraftAccordsFragment
    }
  }
`)
