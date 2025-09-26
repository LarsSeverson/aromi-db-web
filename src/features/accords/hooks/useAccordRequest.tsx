import { useQuery } from '@apollo/client/react'
import { ACCORD_REQUEST_QUERY } from '../graphql/queries'

export const useAccordRequest = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(ACCORD_REQUEST_QUERY, { variables: { id } })

  return {
    accordRequest: data?.accordRequest,
    isLoading,
    error
  }
}