import { useQuery } from '@apollo/client/react'
import { BRAND_REQUEST_QUERY } from '../graphql/queries'

export const useBrandRequest = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(BRAND_REQUEST_QUERY, { variables: { id } })

  return {
    brandRequest: data?.brandRequest,
    isLoading,
    error
  }
}