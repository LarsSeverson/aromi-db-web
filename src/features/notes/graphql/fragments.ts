import { gql } from '@/generated'

export const NOTE_SUMMARY_FRAGMENT = gql(/* GraphQL */`
  fragment NoteSummaryFragment on Note {
    id
    name
    thumbnailUrl
  }
`)
