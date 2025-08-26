import { useQuery } from '@apollo/client'
import { FRAGRANCE_DRAFT_PREVIEW_QUERY } from '../graphql/queries'

export const useFragranceDraftPreview = (id: string) => {
  const { data, loading, error } = useQuery(FRAGRANCE_DRAFT_PREVIEW_QUERY, { variables: { id } })
  const preview = data?.fragranceDraft
  return { preview, loading, error }
}
