import { type ApolloCache, type FetchResult, type Reference, useMutation } from '@apollo/client'
import { DELETE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type DeleteFragranceDraftMutation, type DeleteFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/common/error'
import { type NodeWithEdges } from '@/common/pagination'
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
    result: FetchResult<DeleteFragranceDraftMutation>
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
