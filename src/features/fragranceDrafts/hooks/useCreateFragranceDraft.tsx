import { type ApolloCache, type Reference } from '@apollo/client';
import { useMutation } from "@apollo/client/react";
import { CREATE_FRAGRANCE_DRAFT_MUTATION } from '../graphql/mutations'
import { type CreateFragranceDraftInput } from '@/generated/graphql'
import { ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, toApolloError } from '@/utils/error'
import { type NodeWithEdges } from '@/utils/pagination'

export const useCreateFragranceDraft = () => {
  const [createDraftInner] = useMutation(CREATE_FRAGRANCE_DRAFT_MUTATION)

  const handleUpdateCachedDrafts = (
    newId: string,
    existing: NodeWithEdges<Reference>
  ) => {
    const newDraftRef = makeReference(newId)
    const newEdges = [...existing.edges].unshift({ __typename: 'FragranceDraftEdge', node: newDraftRef })

    return {
      ...existing,
      edges: newEdges
    }
  }

  const updateCache = (
    cache: ApolloCache<unknown>,
    newId: string
  ) => {
    cache.modify({
      id: cache.identify({
        __typename: 'Query'
      }),
      fields: {
        fragranceDrafts: (existing = { edges: [] }) => {
          return handleUpdateCachedDrafts(newId, existing as NodeWithEdges<Reference>)
        }
      }
    })
  }

  const createDraft = (input: CreateFragranceDraftInput) => {
    return ResultAsync
      .fromPromise(
        createDraftInner({
          variables: { input }
        }),
        toApolloError
      )
      .andThen(({ data }) => checkNullFetchResponse(data?.createFragranceDraft))
  }

  return {
    createDraft,
    updateCache
  }
}
