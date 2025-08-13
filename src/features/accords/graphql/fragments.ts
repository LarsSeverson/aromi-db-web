import { gql } from '@/generated'

export const ACCORD_SUMMARY_FRAGMENT = gql(/* GraphQL */`
  fragment AccordSummaryFragment on Accord {
    id
    name
    color
  }
`)
