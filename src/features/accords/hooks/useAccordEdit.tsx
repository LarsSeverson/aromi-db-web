import { useQuery } from '@apollo/client/react'
import { ACCORD_EDIT_QUERY } from '../graphql/queries'

export const useAccordEdit = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(ACCORD_EDIT_QUERY, { variables: { id } })

  return {
    accordEdit: data?.accordEdit,
    isLoading,
    error
  }
}