import { type ApolloError } from '@apollo/client'

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
