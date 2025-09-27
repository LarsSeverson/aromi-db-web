import { useQuery } from '@apollo/client/react'
import { flatten } from '@/utils/pagination'
import { useMemo } from 'react'
import { FRAGRANCE_REQUEST_ACCORDS_QUERY } from '../graphql/queries'

export const useFragranceRequestAccords = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_REQUEST_ACCORDS_QUERY, { variables: { id } })

  const accords = useMemo(
    () => flatten(data?.fragranceRequest.accords ?? []),
    [data?.fragranceRequest.accords]
  )

  return {
    accords,
    isLoading,
    error
  }
}