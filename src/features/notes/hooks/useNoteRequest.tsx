import { useQuery } from '@apollo/client/react'
import { NOTE_REQUEST_QUERY } from '../graphql/queries'

export const useNoteRequest = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(NOTE_REQUEST_QUERY, { variables: { id } })

  return {
    noteRequest: data?.noteRequest,
    isLoading,
    error
  }
}