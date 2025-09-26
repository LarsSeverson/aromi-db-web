import { gql } from '@/generated'

/* Brands */
export const VOTE_ON_BRAND_MUTATION = gql(/* GraphQL */`
  mutation VoteOnBrandMutation(
    $input: VoteOnBrandInput!
  ) {
    voteOnBrand(input: $input) {
      ...BrandPreviewFragment
    }
  }
`)

/* Brands Edits */
export const CREATE_BRAND_EDIT_MUTATION = gql(/* GraphQL */`
  mutation CreateBrandEditMutation(
    $input: CreateBrandEditInput!
  ) {
    createBrandEdit(input: $input) {
      ...BrandEditFragment
    }
  }
`)

export const REVIEW_BRAND_EDIT_MUTATION = gql(/* GraphQL */`
  mutation ReviewBrandEditMutation(
    $input: ReviewBrandEditInput!
  ) {
    reviewBrandEdit(input: $input) {
      ...BrandEditFragment
    }
  }
`)

/* Brand Requests */
export const CREATE_BRAND_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation CreateBrandRequestMutation(
    $input: CreateBrandRequestInput!
  ) {
    createBrandRequest(input: $input) {
      ...BrandRequestFragment
    }
  }
`)

export const UPDATE_BRAND_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation UpdateBrandRequestMutation(
    $input: UpdateBrandRequestInput!
  ) {
    updateBrandRequest(input: $input) {
      ...BrandRequestFragment
    }
  }
`)

export const DELETE_BRAND_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation DeleteBrandRequestMutation(
    $input: DeleteBrandRequestInput!
  ) {
    deleteBrandRequest(input: $input) {
      ...BrandRequestFragment
    }
  }
`)

export const SUBMIT_BRAND_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation SubmitBrandRequestMutation(
    $input: SubmitBrandRequestInput!
  ) {
    submitBrandRequest(input: $input) {
      ...BrandRequestFragment
    }
  }
`)

export const VOTE_ON_BRAND_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation VoteOnBrandRequestMutation(
    $input: VoteOnBrandRequestInput!
  ) {
    voteOnBrandRequest(input: $input) {
      ...BrandRequestFragment
    }
  }
`)