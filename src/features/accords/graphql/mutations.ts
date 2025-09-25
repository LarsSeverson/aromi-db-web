import { gql } from '@/generated'

/* Edits */
export const CREATE_ACCORD_EDIT_MUTATION = gql(/* GraphQL */`
  mutation CreateAccordEditMutation(
    $input: CreateAccordEditInput!
  ) {
    createAccordEdit(input: $input) {
      ...AccordEditFragment
    }
  }
`)

export const REVIEW_ACCORD_EDIT_MUTATION = gql(/* GraphQL */`
  mutation ReviewAccordEditMutation(
    $input: ReviewAccordEditInput!
  ) {
    reviewAccordEdit(input: $input) {
      ...AccordEditFragment
    }
  }
`)

/* Requests */
export const CREATE_ACCORD_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation CreateAccordRequestMutation(
    $input: CreateAccordRequestInput!
  ) {
    createAccordRequest(input: $input) {
      ...AccordRequestFragment
    }
  }
`)

export const UPDTE_ACCORD_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation UpdateAccordRequestMutation(
    $input: UpdateAccordRequestInput!
  ) {
    updateAccordRequest(input: $input) {
      ...AccordRequestFragment
    }
  }
`)

export const DELETE_ACCORD_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation DeleteAccordRequestMutation(
    $input: DeleteAccordRequestInput!
  ) {
    deleteAccordRequest(input: $input) {
      ...AccordRequestFragment
    }
  }
`)

export const SUBMIT_ACCORD_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation SubmitAccordRequestMutation(
    $input: SubmitAccordRequestInput!
  ) {
    submitAccordRequest(input: $input) {
      ...AccordRequestFragment
    }
  }
`)

export const VOTE_ON_ACCORD_REQUEST_MUTATION = gql(/* GraphQL */`
  mutation VoteOnAccordRequestMutation(
    $input: VoteOnAccordRequestInput!
  ) {
    voteOnAccordRequest(input: $input) {
      ...AccordRequestFragment
    }
  }
`)