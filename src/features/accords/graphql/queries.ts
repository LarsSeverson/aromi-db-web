import { gql } from '@/generated'

/* Accords */
export const ACCORD_QUERY = gql(/* GraphQL */`
  query AccordQuery(
    $id: ID!
  ) {
    accord(id: $id) {
      ...AccordFragment
    }
  }
`)

export const ACCORDS_QUERY = gql(/* GraphQL */`
  query AccordsQuery(
    $input: AccordPaginationInput
  ) {
    accords(input: $input) {
      edges {
        node {
          ...AccordFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

export const SEARCH_ACCORDS_QUERY = gql(/* GraphQL */`
  query SearchAccordsQuery(
    $input: SearchInput
  ) {
    searchAccords(input: $input) {
      ...AccordFragment
    }
  }
`)

/* Edits */
export const ACCORD_EDIT_QUERY = gql(/* GraphQL */`
  query AccordEditQuery(
    $id: ID!
  ) {
    accordEdit(id: $id) {
      ...AccordEditFragment
    }
  }
`)

export const ACCORD_EDITS_QUERY = gql(/* GraphQL */`
  query AccordEditsQuery(
    $input: AccordEditPaginationInput
  ) {
    accordEdits(input: $input) {
      edges {
        node {
          ...AccordEditFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

/* Requests */
export const ACCORD_REQUEST_QUERY = gql(/* GraphQL */`
  query AccordRequestQuery(
    $id: ID!
  ) {
    accordRequest(id: $id) {
      ...AccordRequestFragment
    }
  }
`)

export const ACCORD_REQUESTS_QUERY = gql(/* GraphQL */`
  query AccordRequestsQuery(
    $input: RequestPaginationInput
  ) {
    accordRequests(input: $input) {
      edges {
        node {
          ...AccordRequestFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)