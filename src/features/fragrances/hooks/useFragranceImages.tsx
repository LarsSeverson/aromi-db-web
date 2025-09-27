import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_IMAGES_QUERY } from '../graphql/queries'

export const useFragranceImages = (id: string) => {
  const { data, loading, error } = useQuery(FRAGRANCE_IMAGES_QUERY, { variables: { id } })

  return {
    images: data?.fragrance?.images ?? [],
    isLoading: loading,
    error
  }
}