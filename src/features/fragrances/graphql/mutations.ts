import { gql } from '@/generated'

/* Fragrance */
export const VOTE_ON_FRAGRANCE_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragranceMutation(
    $input: VoteOnFragranceInput!
  ) {
    voteOnFragrance(input: $input) {
      ...FragrancePreviewFragment
    }
  }
`)

export const VOTE_ON_FRAGRANCE_ACCORD_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragranceAccordMutation(
    $input: VoteOnFragranceAccordInput!
  ) {
    voteOnFragranceAccord(input: $input) {
      ...AccordFragment
    }
  }
`)

export const VOTE_ON_FRAGRANCE_NOTE_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragranceNoteMutation(
    $input: VoteOnFragranceNoteInput!
  ) {
    voteOnFragranceNote(input: $input) {
      ...NotePreviewFragment
    }
  }
`)

export const VOTE_ON_FRAGRANCE_TRAIT_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragranceTraitMutation(
    $input: VoteOnFragranceTraitInput!
  ) {
    voteOnFragranceTrait(input: $input) {
      ...TraitVoteFragment
    }
  }
`)

/* Fragrance Edits */
export const CREATE_FRAGRANCE_EDIT_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceEditMutation(
    $input: CreateFragranceEditInput!
  ) {
    createFragranceEdit(input: $input) {
      ...FragranceEditFragment
    }
  }
`)

export const REVIEW_FRAGRANCE_EDIT_MUTATION = gql(/* GraphQL */`
  mutation ReviewFragranceEditMutation(
    $input: ReviewFragranceEditInput!
  ) {
    reviewFragranceEdit(input: $input) {
      ...FragranceEditFragment
    }
  }
`)

/* Fragrance Requests */
export const CREATE_FRAGRANCE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation CreateFragranceRequestMutation(
    $input: CreateFragranceRequestInput!
  ) {
    createFragranceRequest(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const UPDATE_FRAGRANCE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation UpdateFragranceRequestMutation(
    $input: UpdateFragranceRequestInput!
  ) {
    updateFragranceRequest(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const SET_FRAGRANCE_REQUEST_BRAND_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceRequestBrandMutation(
    $input: SetFragranceRequestBrandInput!
  ) {
    setFragranceRequestBrand(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const SET_FRAGRANCE_REQUEST_ACCORDS_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceRequestAccordsMutation(
    $input: SetFragranceRequestAccordsInput!
  ) {
    setFragranceRequestAccords(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const SET_FRAGRANCE_REQUEST_NOTES_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceRequestNotesMutation(
    $input: SetFragranceRequestNotesInput!
  ) {
    setFragranceRequestNotes(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const SET_FRAGRANCE_REQUEST_TRAIT_MUTATION = gql(/* GraphQL */`
  mutation SetFragranceRequestTraitMutation(
    $input: SetFragranceRequestTraitInput!
  ) {
    setFragranceRequestTrait(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const DELETE_FRAGRANCE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation DeleteFragranceRequestMutation(
    $input: DeleteFragranceRequestInput!
  ) {
    deleteFragranceRequest(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const SUBMIT_FRAGRANCE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation SubmitFragranceRequestMutation(
    $input: SubmitFragranceRequestInput!
  ) {
    submitFragranceRequest(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)

export const VOTE_ON_FRAGRANCE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation VoteOnFragranceRequestMutation(
    $input: VoteOnFragranceRequestInput!
  ) {
    voteOnFragranceRequest(input: $input) {
      ...FragranceRequestFragment
    }
  }
`)