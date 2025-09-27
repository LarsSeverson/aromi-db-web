import { useQuery } from '@apollo/client/react'
import { flatten } from '@/utils/pagination'
import { useMemo } from 'react'
import { FRAGRANCE_NOTES_QUERY } from '../graphql/queries'

export const useFragranceNotes = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_NOTES_QUERY, { variables: { id } })

  const topNotes = useMemo(
    () => flatten(data?.fragrance.topNotes ?? []),
    [data?.fragrance.topNotes]
  )

  const middleNotes = useMemo(
    () => flatten(data?.fragrance.middleNotes ?? []),
    [data?.fragrance.middleNotes]
  )

  const baseNotes = useMemo(
    () => flatten(data?.fragrance.baseNotes ?? []),
    [data?.fragrance.baseNotes]
  )

  return {
    topNotes,
    middleNotes,
    baseNotes,
    isLoading,
    error
  }
}