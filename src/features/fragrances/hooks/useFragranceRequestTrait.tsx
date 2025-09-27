import type { TraitTypeEnum } from '@/generated/graphql'
import { useQuery } from '@apollo/client/react'
import { FRAGRANCE_REQUEST_TRAIT_QUERY } from '../graphql/queries'

export const useFragranceRequestTrait = (id: string, trait: TraitTypeEnum) => {
  const { data, loading: isLoading, error, refetch } = useQuery(FRAGRANCE_REQUEST_TRAIT_QUERY, { variables: { id, type: trait } })

  return {
    trait: data?.fragranceRequest?.trait,
    isLoading,
    error,
    refetch
  }
}