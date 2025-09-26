import { gql } from '@/generated'

/* Notes */
export const NOTE_QUERY = gql(/* GraphQL */`
  query Note(
    $id: ID!
  ) {
    note(id: $id) {
      ...NotePreviewFragment
    }
  }
`)

export const NOTES_QUERY = gql(/* GraphQL */`
  query Notes(
    $input: NotePaginationInput
  ) {
    notes(input: $input) {
      edges {
        node {
          ...NotePreviewFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

export const SEARCH_NOTES_QUERY = gql(/* GraphQL */`
  query SearchNotes(
    $input: SearchInput
  ) {
    searchNotes(input: $input) {
      edges {
        node {
          ...NotePreviewFragment 
        }
      }
      pageInfo {
        ...SearchPageInfoFragment
      }
    }
  }
`)

/* Note Edits */
export const NOTE_EDIT_QUERY = gql(/* GraphQL */`
  query NoteEdit(
    $id: ID!
  ) {
    noteEdit(id: $id) {
      ...NoteEditFragment
    }
  }
`)

export const NOTE_EDITS_QUERY = gql(/* GraphQL */`
  query NoteEdits(
    $input: NoteEditPaginationInput
  ) {
    noteEdits(input: $input) {
      edges {
        node {
          ...NoteEditFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

/* Note Requests */
export const NOTE_REQUEST_QUERY = gql(/* GraphQL */`
  query NoteRequest(
    $id: ID!
  ) {
    noteRequest(id: $id) {
      ...NoteRequestFragment
    }
  }
`)

export const NOTE_REQUESTS_QUERY = gql(/* GraphQL */`
  query NoteRequests(
    $input: RequestPaginationInput
  ) {
    noteRequests(input: $input) {
      edges {
        node {
          ...NoteRequestFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)