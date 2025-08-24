import { useQuery } from '@apollo/client'
import { FRAGRANCE_DRAFT_SHELL_QUERY } from '../graphql/queries'
import { ResultAsync } from 'neverthrow'
import { toApolloError } from '@/common/error'

export const useFragranceDraftShell = (id: string) => {
  const { data, loading, error, refetch } = useQuery(FRAGRANCE_DRAFT_SHELL_QUERY, { variables: { id } })

  const refresh = () => {
    return ResultAsync
      .fromPromise(
        refetch(),
        toApolloError
      )
      .map(({ data }) => data.fragranceDraft)
  }

  const shell = data?.fragranceDraft

  return {
    shell,

    loading,
    error,

    refresh
  }
}
