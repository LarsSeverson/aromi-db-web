import { type TraitTypeEnum } from '@/generated/graphql'
import { useQuery } from "@apollo/client/react";
import { FRAGRANCE_DRAFT_TRAIT_QUERY } from '../graphql/queries'

export const useFragranceDraftTrait = (
  id: string,
  type: TraitTypeEnum
) => {
  const { data, loading, error } = useQuery(
    FRAGRANCE_DRAFT_TRAIT_QUERY,
    { variables: { id, type } }
  )

  const trait = data?.fragranceDraft?.trait

  return {
    trait,
    loading,
    error
  }
}
