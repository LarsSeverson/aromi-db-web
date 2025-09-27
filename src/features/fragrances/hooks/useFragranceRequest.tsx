import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_REQUEST_QUERY } from '../graphql/queries'
import { wrapQuery } from '@/utils/util'

export const useFragranceRequest = (id: string) => {
  const {
    data, loading: isLoading, error,
    refetch
  } = useQuery(FRAGRANCE_REQUEST_QUERY, { variables: { id } })

  const refresh = () => {
    return wrapQuery(refetch()).map(data => data.fragranceRequest)
  }

  return {
    fragranceRequest: data?.fragranceRequest,
    isLoading,
    error,
    refresh
  }
}