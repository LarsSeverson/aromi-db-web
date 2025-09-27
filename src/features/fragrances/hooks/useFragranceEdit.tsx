import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_EDIT_QUERY } from '../graphql/queries'

export const useFragranceEdit = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(FRAGRANCE_EDIT_QUERY, { variables: { id } })

  return {
    fragranceEdit: data?.fragranceEdit,
    isLoading,
    error
  }
}