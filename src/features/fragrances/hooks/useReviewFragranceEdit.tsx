import { useMutation } from '@apollo/client/react'
import { REVIEW_FRAGRANCE_EDIT_MUTATION } from '../graphql/mutations'
import type { ReviewFragranceEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useReviewFragranceEdit = () => {
  const [reviewEditInner] = useMutation(REVIEW_FRAGRANCE_EDIT_MUTATION)

  const reviewEdit = (input: ReviewFragranceEditInput) => {
    return wrapQuery(reviewEditInner({ variables: { input } })).map(data => data.reviewFragranceEdit)
  }

  return { reviewEdit }
}