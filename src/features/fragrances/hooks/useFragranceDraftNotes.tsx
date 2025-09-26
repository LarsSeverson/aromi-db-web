import { useQuery } from "@apollo/client/react";
import { FRAGRANCE_DRAFT_NOTES_QUERY } from '../graphql/queries'
import { type NoteLayer } from '@/generated/graphql'

export const useFragranceDraftNotes = (
  id: string,
  layer: NoteLayer
) => {
  const { data, loading, error } = useQuery(
    FRAGRANCE_DRAFT_NOTES_QUERY,
    { variables: { id, layer } }
  )

  const draftNotes = data?.fragranceDraft?.notes

  return {
    draftNotes,
    loading,
    error
  }
}
