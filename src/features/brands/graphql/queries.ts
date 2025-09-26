import { gql } from '@/generated'

/* Brand */
export const BRAND_QUERY = gql(/* GraphQL */ `
  query Brand($id: ID!) {
    brand(id: $id) {
      ...BrandPreviewFragment
    }
  }
`)

export const BRANDS_QUERY = gql(/* GraphQL */ `
  query Brands($input: BrandPaginationInput) {
    brands(input: $input) {
      edges {
        node {
          ...BrandPreviewFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

export const SEARCH_BRANDS_QUERY = gql(/* GraphQL */ `
  query SearchBrands($input: SearchInput) {
    searchBrands(input: $input) {
      edges {
        node {
          ...BrandPreviewFragment
        }
      }
      pageInfo {
        ...SearchPageInfoFragment
      } 
    }
  }
`)

export const BRAND_FRAGRANCES_QUERY = gql(/* GraphQL */ `
  query BrandFragrances($id: ID!, $input: FragrancePaginationInput) {
    brand(id: $id) {
      id
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
  }
`)

/* Brand Edits */
export const BRAND_EDIT_QUERY = gql(/* GraphQL */ `
  query BrandEdit($id: ID!) {
    brandEdit(id: $id) {
      ...BrandEditFragment
    }
  }
`)

export const BRAND_EDITS_QUERY = gql(/* GraphQL */ `
  query BrandEdits($input: BrandEditPaginationInput) {
    brandEdits(input: $input) {
      edges {
        node {
          ...BrandEditFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)

/* Brand Requests */
export const BRAND_REQUEST_QUERY = gql(/* GraphQL */ `
  query BrandRequest($id: ID!) {
    brandRequest(id: $id) {
      ...BrandRequestFragment
    }
  }
`)

export const BRAND_REQUESTS_QUERY = gql(/* GraphQL */ `
  query BrandRequests($input: RequestPaginationInput) {
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
`)