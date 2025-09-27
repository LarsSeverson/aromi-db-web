import { useQuery } from '@apollo/client/react'
import { NOTE_EDIT_QUERY } from '../graphql/queries'

export const useNoteEdit = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(NOTE_EDIT_QUERY, { variables: { id } })

  return {
    noteEdit: data?.noteEdit,
    isLoading,
    error
  }
}