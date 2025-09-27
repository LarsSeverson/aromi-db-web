import { useQuery } from '@apollo/client/react'
import { flatten } from '@/utils/pagination'
import { useMemo } from 'react'
import { FRAGRANCE_REQUEST_NOTES_QUERY } from '../graphql/queries'

export const useFragranceRequestNotes = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_REQUEST_NOTES_QUERY, { variables: { id } })

  const topNotes = useMemo(
    () => flatten(data?.fragranceRequest.topNotes ?? []),
    [data?.fragranceRequest.topNotes]
  )

  const middleNotes = useMemo(
    () => flatten(data?.fragranceRequest.middleNotes ?? []),
    [data?.fragranceRequest.middleNotes]
  )

  const baseNotes = useMemo(
    () => flatten(data?.fragranceRequest.baseNotes ?? []),
    [data?.fragranceRequest.baseNotes]
  )

  return {
    topNotes,
    middleNotes,
    baseNotes,
    isLoading,
    error
  }
}