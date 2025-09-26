import { okAsync, ResultAsync } from 'neverthrow'
import { checkNullFetchResponse, getServerErrorInfo } from './error'
import { type ApolloClient, NetworkStatus } from '@apollo/client'
import type { PageInfo, SearchPageInfo } from '@/generated/graphql'

export const noRes = okAsync(undefined)

export const wrapQuery= <T>(promise: Promise<ApolloClient.QueryResult<T>>) => {
  return ResultAsync
    .fromPromise(promise, getServerErrorInfo)
    .andThen(res => checkNullFetchResponse(res.data))
}

export const isStatusLoadingMore = (status: NetworkStatus) => {
  return status === NetworkStatus.fetchMore
}

export const hasNextPage = (pageInfo?: PageInfo | SearchPageInfo) => {
  return pageInfo?.hasNextPage ?? true
}