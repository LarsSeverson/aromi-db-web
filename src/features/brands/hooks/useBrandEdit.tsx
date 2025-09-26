import { useQuery } from '@apollo/client/react'
import { BRAND_EDIT_QUERY } from '../graphql/queries'

export const useBrandEdit = (id: string) => {
  const { data, loading: isLoading, error } = useQuery(BRAND_EDIT_QUERY, { variables: { id } })

  return {
    brandEdit: data?.brandEdit,
    isLoading,
    error
  }
}