import type { ReviewBrandEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import { REVIEW_BRAND_EDIT_MUTATION } from '../graphql/mutations'
import { useMutation } from '@apollo/client/react'

export const useReviewBrandEdit = () => {
  const [reviewBrandEditInner] = useMutation(REVIEW_BRAND_EDIT_MUTATION)

  const reviewBrandEdit = (input: ReviewBrandEditInput) => {
    return wrapQuery(reviewBrandEditInner({ variables: { input } })).map(data => data.reviewBrandEdit)
  }

  return { reviewBrandEdit }
}