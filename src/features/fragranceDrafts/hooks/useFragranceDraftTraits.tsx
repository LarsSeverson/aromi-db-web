import { useQuery } from "@apollo/client/react";
import { FRAGRANCE_DRAFT_TRAITS_QUERY } from '../graphql/queries'

export const useFragranceDraftTraits = (id: string) => {
  const { data, loading, error } = useQuery(
    FRAGRANCE_DRAFT_TRAITS_QUERY,
    { variables: { id } }
  )

  const traits = data?.fragranceDraft?.traits

  return {
    traits,
    loading,
    error
  }
}
