import { useQuery } from '@apollo/client'
import { FRAGRANCE_DRAFT_SUMMARY_QUERY } from '../graphql/queries'

export const useFragranceDraftSummary = (id: string) => {
  const { data, loading, error } = useQuery(FRAGRANCE_DRAFT_SUMMARY_QUERY, { variables: { id } })

  const summary = data?.fragranceDraft

  return {
    summary,

    loading,
    error
  }
}
