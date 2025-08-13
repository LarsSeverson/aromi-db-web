import { gql } from '@/generated'

export const NOTES_QUERY = gql(/* GraphQL */`
  query Notes(
    $input: NotePaginationInput
  ) {
    notes(input: $input) {
      edges {
        node {
          ...NoteSummaryFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)
