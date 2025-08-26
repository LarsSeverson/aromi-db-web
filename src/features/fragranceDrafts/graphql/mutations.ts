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
