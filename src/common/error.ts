import { type ApolloError } from '@apollo/client'
import { errAsync, okAsync } from 'neverthrow'

export const toApolloError = (error: unknown) => {
  return error as ApolloError
}

export const extractGraphQLError = (error: ApolloError) => {
  return error.graphQLErrors
    .map(e => e.message)
    .join(';')
}

export const extractGraphQLErrorCodes = (error: ApolloError): string[] => {
  return error.graphQLErrors
    .map(e => e.extensions?.code)
    .filter((code): code is string => typeof code === 'string')
}

export const extractGraphQLErrorStatuses = (error: ApolloError): number[] => {
  return error.graphQLErrors
    .map(e => e.extensions?.status)
    .filter((status): status is number => typeof status === 'number')
}

export const checkNullFetchResponse = <T>(res: T) => {
  if (res == null) {
    return errAsync(
      toApolloError(
        new Error('Something went wrong')
      )
    )
  }

  return okAsync(res)
}

export const noRes = okAsync(undefined)
