import { useMutation } from '@apollo/client/react'
import { REVIEW_NOTE_EDIT_MUTATION } from '../graphql/mutations'
import type { ReviewNoteEditInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useReviewNoteEdit = () => {
  const [reviewEditInner] = useMutation(REVIEW_NOTE_EDIT_MUTATION)

  const reviewEdit = (input: ReviewNoteEditInput) => {
    return wrapQuery(reviewEditInner({ variables: { input } })).map(data => data.reviewNoteEdit)
  }

  return { reviewEdit }
}