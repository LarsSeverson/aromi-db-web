import { gql } from '@/generated'

/* Fragrance */
export const FRAGRANCE_QUERY = gql(/* GraphQL */`
  query FragranceQuery($id: ID!) {
    fragrance(id: $id) {
      ...FragranceFragment
    }
  }
`)

export const FRAGRANCES_QUERY = gql(/* GraphQL */`
  query FragrancesQuery(
    $input: FragrancePaginationInput
  ) {
    fragrances(input: $input) {
      edges {
        node {
          ...FragrancePreviewFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

export const SEARCH_FRAGRANCES_QUERY = gql(/* GraphQL */`
  query SearchFragrancesQuery(
    $input: SearchInput
  ) {
    searchFragrances(input: $input) {
      edges {
        node {
          ...FragrancePreviewFragment 
        }
      }
      pageInfo {
        ...SearchPageInfoFragment
      }
    }
  }
`)

export const FRAGRANCE_IMAGES_QUERY = gql(/* GraphQL */`
  query FragranceImagesQuery (
    $id: ID!
  ) {
    fragrance(id: $id) {
      ...FragrancePreviewFragment
      images {
        ...FragranceImageFragment
      }
    }
  }
`)

export const FRAGRANCE_ACCORDS_QUERY = gql(/* GraphQL */`
  query FragranceAccordsQuery (
    $id: ID!
    $input: FragranceAccordPaginationInput
  ) {
    fragrance(id: $id) {
      ...FragrancePreviewFragment
      accords(input: $input) {
        edges {
          node {
            ...FragranceAccordFragment
            accord {
              ...AccordFragment
            }
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

export const FRAGRANCE_NOTES_QUERY = gql(/* GraphQL */`
  query FragranceNotesQuery (
    $id: ID!
    $input: FragranceNotePaginationInput
  ) {
    fragrance(id: $id) {
      ...FragrancePreviewFragment
      notes(input: $input) {
        edges {
          node {
            ...FragranceNoteFragment
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

/* Fragrance Edits*/
export const FRAGRANCE_EDIT_QUERY = gql(/* GraphQL */`
  query FragranceEditQuery(
    $id: ID!
  ) {
    fragranceEdit(id: $id) {
      ...FragranceEditFragment
    }
  }
`)

export const FRAGRANCE_EDITS_QUERY = gql(/* GraphQL */`
  query FragranceEditsQuery(
    $input: FragranceEditPaginationInput
  ) {
    fragranceEdits(input: $input) {
      edges {
        node {
          ...FragranceEditFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

/* Fragrance Requests */
export const FRAGRANCE_REQUEST_QUERY = gql(/* GraphQL */`
  query FragranceRequestQuery(
    $id: ID!
  ) {
    fragranceRequest(id: $id) {
      ...FragranceRequestFragment
    }
  }
`)

export const FRAGRANCE_REQUESTS_QUERY = gql(/* GraphQL */`
  query FragranceRequestsQuery(
    $input: RequestPaginationInput
  ) {
    fragranceRequests(input: $input) {
      edges {
        node {
          ...FragranceRequestPreviewFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

export const FRAGRANCE_REQUEST_NOTES_QUERY = gql(/* GraphQL */`
  query FragranceRequestNotesQuery (
    $id: ID!
  ) {
    fragranceRequest(id: $id) { 
      ...FragranceRequestFragment
      
      topNotes: notes(layer: TOP) {
        ...FragranceRequestNoteFragment
      }

      middleNotes: notes(layer: MIDDLE) {
        ...FragranceRequestNoteFragment
      }

      baseNotes: notes(layer: BASE) {
        ...FragranceRequestNoteFragment
      }
    }
  }
`)
