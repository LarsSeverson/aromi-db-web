import { gql } from '@/generated'

export const MY_QUERY = gql(/* GraphQL */ `
  query Me {
    me {
      ...UserFragment
    }
  }
`)

export const MY_FRAGRANCE_REQUESTS_QUERY = gql(/* GraphQL */`
  query MyFragranceRequests(
    $input: RequestPaginationInput
  ) {
    me {
      ...UserPreviewFragment
      fragranceRequests(input: $input) {
        edges {
          node {
            ...FragranceRequestFragment 
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

export const MY_BRAND_REQUESTS_QUERY = gql(/* GraphQL */`
  query MyBrandRequests(
    $input: RequestPaginationInput
  ) {
    me {
      ...UserPreviewFragment
      brandRequests(input: $input) {
        edges {
          node {
            ...BrandRequestFragment 
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

export const MY_ACCORD_REQUESTS_QUERY = gql(/* GraphQL */`
  query MyAccordRequests(
    $input: RequestPaginationInput
  ) {
    me {
      ...UserPreviewFragment
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
  }
`)

export const MY_NOTE_REQUESTS_QUERY = gql(/* GraphQL */`
  query MyNoteRequests(
    $input: RequestPaginationInput
  ) {
    me {
      ...UserPreviewFragment
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
  }
`)

export const USER_QUERY = gql(/* GraphQL */`
  query User(
    $id: ID!
  ) {
    user(id: $id) {
      ...UserPreviewFragment
    }
  }
`)

export const USER_FRAGRANCE_REQUESTS_QUERY = gql(/* GraphQL */`
  query UserFragranceRequests(
    $id: ID!
    $input: RequestPaginationInput
  ) {
    user(id: $id) {
      ...UserPreviewFragment
      fragranceRequests(input: $input) {
        edges {
          node {
            ...FragranceRequestFragment 
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

export const USER_BRAND_REQUESTS_QUERY = gql(/* GraphQL */`
  query UserBrandRequests(
    $id: ID!
    $input: RequestPaginationInput
  ) {
    user(id: $id) {
      ...UserPreviewFragment
      brandRequests(input: $input) {
        edges {
          node {
            ...BrandRequestFragment 
          }
        }
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`)

export const USER_ACCORD_REQUESTS_QUERY = gql(/* GraphQL */`
  query UserAccordRequests(
    $id: ID!
    $input: RequestPaginationInput
  ) {
    user(id: $id) {
      ...UserPreviewFragment
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
  }
`)

export const USER_NOTE_REQUESTS_QUERY = gql(/* GraphQL */`
  query UserNoteRequests(
    $id: ID!
    $input: RequestPaginationInput
  ) {
    user(id: $id) {
      ...UserPreviewFragment
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
  }
`)
