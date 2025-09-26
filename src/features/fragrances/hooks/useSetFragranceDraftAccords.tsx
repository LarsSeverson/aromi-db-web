import { useMutation } from "@apollo/client/react";
import { SET_FRAGRANCE_DRAFT_ACCORDS_MUTATION } from '../graphql/mutations'
import { type SetFragranceDraftAccordsInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'

export const useSetFragranceDraftAccords = () => {
  const [setAccordsInner] = useMutation(SET_FRAGRANCE_DRAFT_ACCORDS_MUTATION)

  const setAccords = (input: SetFragranceDraftAccordsInput) => {
    return ResultAsync
      .fromPromise(
        setAccordsInner({ variables: { input } }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.setFragranceDraftAccords))
  }

  return { setAccords }
}
