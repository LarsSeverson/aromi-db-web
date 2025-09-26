import { type ApolloCache, type Reference, type ApolloLink } from '@apollo/client';
import { useMutation } from "@apollo/client/react";
import { DELETE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type DeleteFragranceDraftMutation, type DeleteFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'
import { type NodeWithEdges } from '@/utils/pagination'
import { type ReadFieldFunction } from '@apollo/client/cache/core/types/common'

export const useDeleteFragranceDraft = () => {
  const [deleteDraftInner] = useMutation(DELETE_FRAGRANCE_DRAFT_MUTATION)

  const handleUpdateCachedDrafts = (
    id: string,
    existing: NodeWithEdges<Reference>,
    readField: ReadFieldFunction
  ) => {
    const edges = existing
      .edges
      .filter(edge => {
        const edgeId = readField('id', edge.node)
        return edgeId !== id
      })

    return {
      ...existing,
      edges
    }
  }

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: ApolloLink.Result<DeleteFragranceDraftMutation>
  ) => {
    const incoming = result.data?.deleteFragranceDraft

    if (incoming == null) return

    const id = incoming.id

    cache.modify({
      id: cache.identify({
        __typename: 'Query'
      }),
      fields: {
        fragranceDrafts: (existing = { edges: [] }, { readField }) => {
          return handleUpdateCachedDrafts(id, existing as NodeWithEdges<Reference>, readField)
        }
      }
    })
  }

  const deleteDraft = (input: DeleteFragranceDraftInput) => {
    return ResultAsync
      .fromPromise(
        deleteDraftInner({
          variables: { input },
          update: handleUpdateCache
        }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.deleteFragranceDraft))
  }

  return { deleteDraft }
}
