import { gql } from '@/generated'

export const ACCORDS_QUERY = gql(/* GraphQL */`
  query AccordsQuery(
    $input: AccordPaginationInput
  ) {
    accords(input: $input) {
      edges {
        node {
          ...AccordSummaryFragment 
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`)
