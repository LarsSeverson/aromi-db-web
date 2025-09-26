import { gql } from '@/generated'

/* Note edits */
export const CREATE_NOTE_EDIT_MUTATION = gql(/* GraphQL */`
  mutation CreateNoteEditMutation(
    $input: CreateNoteEditInput!
  ) {
    createNoteEdit(input: $input) {
      ...NoteEditFragment
    }
  }
`)

export const REVIEW_NOTE_EDIT_MUTATION = gql(/* GraphQL */`
  mutation ReviewNoteEditMutation(
    $input: ReviewNoteEditInput!
  ) {
    reviewNoteEdit(input: $input) {
      ...NoteEditFragment
    }
  }
`)

/* Note requests */
export const CREATE_NOTE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation CreateNoteRequestMutation(
    $input: CreateNoteRequestInput!
  ) {
    createNoteRequest(input: $input) {
      ...NoteRequestFragment
    }
  }
`)

export const UPDATE_NOTE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation UpdateNoteRequestMutation(
    $input: UpdateNoteRequestInput!
  ) {
    updateNoteRequest(input: $input) {
      ...NoteRequestFragment
    }
  }
`)

export const DELETE_NOTE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation DeleteNoteRequestMutation(
    $input: DeleteNoteRequestInput!
  ) {
    deleteNoteRequest(input: $input) {
      ...NoteRequestFragment
    }
  }
`)

export const SUBMIT_NOTE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation SubmitNoteRequestMutation(
    $input: SubmitNoteRequestInput!
  ) {
    submitNoteRequest(input: $input) {
      ...NoteRequestFragment
    }
  }
`)

export const VOTE_ON_NOTE_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation VoteOnNoteRequestMutation(
    $input: VoteOnNoteRequestInput!
  ) {
    voteOnNoteRequest(input: $input) {
      ...NoteRequestFragment
    }
  } 
`)