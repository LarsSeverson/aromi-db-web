import { useQuery } from "@apollo/client/react";
import { FRAGRANCE_DRAFT_ACCORDS_QUERY } from '../graphql/queries'

export const useFragranceDraftAccords = (id: string) => {
  const { data, loading, error } = useQuery(
    FRAGRANCE_DRAFT_ACCORDS_QUERY,
    { variables: { id } }
  )

  const draftAccords = data?.fragranceDraft?.accords

  return {
    draftAccords,
    loading,
    error
  }
}
