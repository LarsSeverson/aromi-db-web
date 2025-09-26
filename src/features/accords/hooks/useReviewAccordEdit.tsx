import { useMutation } from '@apollo/client/react'
import { REVIEW_ACCORD_EDIT_MUTATION } from '../graphql/mutations'
import type { ReviewAccordEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useReviewAccordEdit = () => {
  const [reviewEditInner] = useMutation(REVIEW_ACCORD_EDIT_MUTATION)

  const reviewEdit = (input: ReviewAccordEditInput) => {
    return wrapQuery(reviewEditInner({ variables: { input } })).map(data => data.reviewAccordEdit)
  }

  return { reviewEdit }
}